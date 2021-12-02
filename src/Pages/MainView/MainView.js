import React, { useState, useEffect } from 'react';
import { Wrapper } from "./MainView.styles"
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

const MainView = React.forwardRef((props, mainViewRef) => {
   const [isHero, setIsHero] = useState(false)
   const [isProductPage, setIsProductPage] = useState(false)

   const [products, loading, setLoading] = useData()
   const [productsCtx, setProductsCtx] = useState([])

   useEffect(() => {
      if(products.length > 0) setProductsCtx(products)
   }, [products])

   return (
      <Router>
         <ProductsContext.Provider
            value={{
               productsCtx: productsCtx,
               setProductsCtx: setProductsCtx,
               loadingCtx: loading,
               setLoadingCtx: setLoading,
            }}
         >
            <Wrapper ref={mainViewRef}>
               {isHero ? null : <NavBar isProductPage={isProductPage}/>}
               
               <Routes>
                  <Route path="/contact" element={<Contact />} />

                  <Route path="/about" element={<About />}/>

                  <Route path="/AllProducts" element={<AllProducts AllProducts={products}/>}/>

                  <Route path="/product/:id" element={<ProductPage setIsProductPage={setIsProductPage}/>} />

                  <Route exact path="/" element={<HeroPage setIsHero={setIsHero}/>} />
               </Routes>

               {isHero ? null : <Footer />}
               
            </Wrapper>
         </ProductsContext.Provider>
      </Router>
   );
});

export default MainView;