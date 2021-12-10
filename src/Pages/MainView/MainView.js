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

const MainView = React.forwardRef((props, mainViewRef) => {
   const [isHero, setIsHero] = useState(false)
   const [isProductPage, setIsProductPage] = useState(false)

   const [products, loading, setLoading] = useData()
   const [productsCtx, setProductsCtx] = useState([])

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
                  <div ref={mainViewRef}>
                     {isHero ? null : <NavBar isProductPage={isProductPage}/>}
                     
                     <Routes>
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/about" element={<About />}/>

                        <Route path="/AllProducts" element={<AllProducts AllProducts={products}/>}/>

                        <Route path="/product/:id" element={<ProductPage setIsProductPage={setIsProductPage}/>} />

                        <Route exact path="/" element={<HeroPage setIsHero={setIsHero}/>} />
                     </Routes>

                     {isHero ? null : <Footer />}
                     
                  </div>
               </FiltersContext.Provider>
            </ProductsContext.Provider>
         </Router>
      </Provider>
   );
});

export default MainView;