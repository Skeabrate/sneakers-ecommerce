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

const MainView = () => {
   const [isHero, setIsHero] = useState(false)
   const [isProductPage, setIsProductPage] = useState(false)

   const [productsCtx, setProductsCtx] = useState([])
   const [products, loading, setLoading] = useData()

   // Open cart passed to Navbar and cart
   const [isCartOpen, setIsCartOpen] = useState(false)

   // Filters
   const [selectedGender, setSelectedGender] = useState(false)
   const [selectedCategory, setSelectedCategory] = useState(false)
   const [selectedPrice, setSelectedPrice] = useState(false)
   const [selectedTerm, setSelectedTerm] = useState(false)

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
                  gender: selectedGender,
                  category: selectedCategory,
                  price: selectedPrice,
                  term: selectedTerm,
                  setGender: setSelectedGender,
                  setCategory: setSelectedCategory,
                  setPrice: setSelectedPrice,
                  setTerm: setSelectedTerm,
               }}>
                  <div>
                     {isHero ? null : <NavBar setIsCartOpen={setIsCartOpen} isProductPage={isProductPage}/>}

                     <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
                     
                     <Routes>
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/about" element={<About />}/>

                        <Route path="/AllProducts" element={<AllProducts AllProducts={products}/>}/>

                        <Route path="/product/:id" element={<ProductPage setIsProductPage={setIsProductPage}/>} />

                        <Route exact path="/" element={<HeroPage setIsHero={setIsHero}/>} />

                        <Route path='*' element={<div style={{marginTop: '80px'}}><Error /></div>} />
                     </Routes>

                     {isHero ? null : <Footer />}
                  </div>
               </FiltersContext.Provider>
            </ProductsContext.Provider>
         </Router>
      </Provider>
   );
};

export default MainView;