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
import ProductsContext from '../../Context/ProductsContext';
import FiltersContext from '../../Context/FiltersContext';
import ModalsContext from '../../Context/ModalsContext';
import AuthContext from '../../Context/AuthContext';
import { store } from '../../Redux/store'
import { Provider } from "react-redux"
import Error from '../404/Error';
import Wishlist from "../Wishlist/Wishlist"
import Login from '../Login/Login';
import Register from '../../Modals/Register/Register'
import Profile from "../Profile/Profile"
import InfoModal from '../../Modals/InfoModal/InfoModal'
import { authStateChangedHandler } from "../../authStateChange"
import Cart from '../Cart/Cart';
import Payment from '../../Modals/Payment/Payment';

const MainView = () => {
   const [isProductPage, setIsProductPage] = useState(false)
   
   const [productsCtx, setProductsCtx] = useState([])
   const [products, loading, setLoading] = useData()
   
   // Modals: Register, Info
   const [isRegisterOpen, setIsRegisterOpen] = useState(false)
   const [isPaymentOpen, setIsPaymentOpen] = useState(false)
   const [isInfoOpen, setIsInfoOpen] = useState({
      info: false,
      success: false,
   })
   
   // Auth info and Profile Image
   const [auth, setAuth] = useState(window.localStorage.getItem("authToken") && {
      token: JSON.parse(window.localStorage.getItem('authToken'))[0].token,
      email: JSON.parse(window.localStorage.getItem('authToken'))[1].email,
      image: JSON.parse(window.localStorage.getItem('authToken'))[2].image,
   })

   // Filters
   const [filters, setFilters] = useState({
      title: '',
      gender: '',
      category: '',
      price: '',
   })

   useEffect(() => {
      authStateChangedHandler(auth, setAuth)
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
                        isRegisterOpen: isRegisterOpen,
                        setIsRegisterOpen: setIsRegisterOpen,

                        isPaymentOpen: isPaymentOpen,
                        setIsPaymentOpen: setIsPaymentOpen,

                        isInfoOpen: isInfoOpen,
                        setIsInfoOpen: setIsInfoOpen,
                     }}>
                        <div>
                           <NavBar isProductPage={isProductPage} />

                           {isRegisterOpen && <Register />}

                           {isInfoOpen.info && <InfoModal />}

                           {isPaymentOpen && <Payment />}
                           
                           <Routes>
                              <Route path="/contact" element={<Contact />} />

                              <Route path="/about" element={<About />}/>

                              <Route path="/AllProducts" element={<AllProducts AllProducts={products}/>}/>

                              <Route path="/product/:id" element={<ProductPage setIsProductPage={setIsProductPage} />} />

                              <Route path="/wishlist" element={<Wishlist />} />

                              <Route path="/login" element={auth ? <Navigate to="/profile" /> : <Login />} />

                              <Route path="/profile" element={auth ? <Profile /> : <Navigate to="/login" />} />

                              <Route path="/cart" element={<Cart />} />

                              <Route path="/" element={<HeroPage />} />

                              <Route path='*' element={<div style={{marginTop: '80px'}}><Error /></div>} />
                           </Routes>

                           <Footer />
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