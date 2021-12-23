import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import Contact from '../Contact/Contact';
import About from "../About/About"
import HeroPage from '../HeroPage/HeroPage';
import NavBar from '../../Components/NavBar/NavBar';
import ProductPage from '../ProductPage/ProductPage';
import Footer from '../../Components/Footer/Footer';
import { useData } from '../../hooks/useData';
import ProductsContext from '../../Context/productsContext';
import FiltersContext from '../../Context/filtersContext';
import { store } from '../../Redux/store'
import { Provider } from "react-redux"
import Error from '../404/Error';
import Cart from "../Cart/Cart"
import { OpenCartContext } from '../../Context/openCartContext';
import Wishlist from "../Wishlist/Wishlist"
import Login from '../Login/Login';
import Register from '../Register/Register';

const MainView = () => {
   const [isHero, setIsHero] = useState(false)
   const [isProductPage, setIsProductPage] = useState(false)

   const [productsCtx, setProductsCtx] = useState([])
   const [products, loading, setLoading] = useData()

   // Open cart passed to Navbar and cart
   const [isCartOpen, setIsCartOpen] = useState(false)

   // Filters
   const [filters, setFilters] = useState({
      title: '',
      gender: '',
      category: '',
      price: '',
   })

   useEffect(() => {
      if(products.length) setProductsCtx(products)
   }, [products])

   return (
      <Provider store={store}>
         <Router>
            <ProductsContext.Provider value={{
               productsCtx: productsCtx,
               setProductsCtx: setProductsCtx,
               loadingCtx: loading,
               setLoadingCtx: setLoading,
            }}>
               <FiltersContext.Provider value={{
                  filters: filters,
                  setFilters: setFilters,
               }}>
                  <OpenCartContext.Provider value={{
                     isCartOpen: isCartOpen,
                     setIsCartOpen: setIsCartOpen,
                  }}>
                     <div>
                        {isHero ? null : <NavBar isProductPage={isProductPage}/>}

                        <Cart />
                        
                        <Routes>
                           <Route path="/contact" element={<Contact />} />

                           <Route path="/about" element={<About />}/>

                           <Route path="/AllProducts" element={<AllProducts AllProducts={products}/>}/>

                           <Route path="/product/:id" element={<ProductPage setIsProductPage={setIsProductPage} />} />

                           <Route path="/wishlist" element={<Wishlist />} />

                           <Route path="/login" element={<Login />} />

                           <Route exact path="/" element={<HeroPage setIsHero={setIsHero}/>} />

                           <Route path='*' element={<div style={{marginTop: '80px'}}><Error /></div>} />
                        </Routes>

                        {isHero ? null : <Footer />}
                     </div>
                  </OpenCartContext.Provider>
               </FiltersContext.Provider>
            </ProductsContext.Provider>
         </Router>
      </Provider>
   );
};

export default MainView;