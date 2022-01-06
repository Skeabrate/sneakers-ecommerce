import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { ModalsContext } from '../../Context/ModalsContext';
import Wishlist from "../Wishlist/Wishlist"
import Login from '../Login/Login';
import Register from '../Register/Register'
import Profile from "../Profile/Profile"
import AuthContext from '../../Context/authContext';
import firebase from "../../firebase"

const MainView = () => {
   const [isHero, setIsHero] = useState(false)
   const [isProductPage, setIsProductPage] = useState(false)
   
   const [productsCtx, setProductsCtx] = useState([])
   const [products, loading, setLoading] = useData()
   
   // Open cart passed to Navbar and cart
   const [isCartOpen, setIsCartOpen] = useState(false)
   const [isRegisterOpen, setIsRegisterOpen] = useState(false)

   const [auth, setAuth] = useState(window.localStorage.getItem("authToken"))

   // Filters
   const [filters, setFilters] = useState({
      title: '',
      gender: '',
      category: '',
      price: '',
   })

   useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
            // console.log(user.uid)
            if(!window.localStorage.getItem("authToken")){
               window.localStorage.setItem("authToken", JSON.stringify([
                  { token: user.uid },
                  { email: user.email },      
               ]))
               setAuth(true)
            }
         }
      });
   }, [])

   useEffect(() => {
      if(products.length) setProductsCtx(products)
   }, [products])

   return (
      <Provider store={store}>
         <Router>
            <AuthContext.Provider value={{
               isAuthenticated: auth,
               setIsAuthenticated: setAuth,
            }}>
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
                     <ModalsContext.Provider value={{
                        isCartOpen: isCartOpen,
                        setIsCartOpen: setIsCartOpen,
                        isRegisterOpen: isRegisterOpen,
                        setIsRegisterOpen: setIsRegisterOpen,
                     }}>
                        <div>
                           {isHero ? null : <NavBar isProductPage={isProductPage}/>}

                           <Cart />

                           {isRegisterOpen && <Register />}
                           
                           <Routes>
                              <Route path="/contact" element={<Contact />} />

                              <Route path="/about" element={<About />}/>

                              <Route path="/AllProducts" element={<AllProducts AllProducts={products}/>}/>

                              <Route path="/product/:id" element={<ProductPage setIsProductPage={setIsProductPage} />} />

                              <Route path="/wishlist" element={<Wishlist />} />

                              <Route path="/login" element={auth ? <Navigate to="/profile" /> : <Login />} />

                              <Route path="/profile" element={auth ? <Profile /> : <Navigate to="/login" />} />

                              <Route exact path="/" element={<HeroPage setIsHero={setIsHero}/>} />

                              <Route path='*' element={<div style={{marginTop: '80px'}}><Error /></div>} />
                           </Routes>

                           {isHero ? null : <Footer />}
                        </div>
                     </ModalsContext.Provider>
                  </FiltersContext.Provider>
               </ProductsContext.Provider>
            </AuthContext.Provider>
         </Router>
      </Provider>
   );
};

export default MainView;