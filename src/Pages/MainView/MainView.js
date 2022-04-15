import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useData } from '../../Api/useData';
import MainProviders from './MainProviders';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Register from '../../Modals/Register/Register';
import InfoModal from '../../Modals/InfoModal/InfoModal';
import Payment from '../../Modals/Payment/Payment';
import Products from '../AllProducts/Products/Products';
import AllProducts from '../AllProducts/AllProducts';
import ProductPage from '../ProductPage/ProductPage';
import Contact from '../Contact/Contact';
import About from '../About/About';
import HeroPage from '../HeroPage/HeroPage';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import Error from '../Error/Error';
import Login from '../Login/Login';

const MainView = () => {
	const [isProductPage, setIsProductPage] = useState(false);

	// Products
	const [productsCtx, setProductsCtx] = useState([]);
	const [products, loading, setLoading] = useData();

	// Modals: Register, Info
	const [isRegisterOpen, setIsRegisterOpen] = useState(false);
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);
	const [isInfoOpen, setIsInfoOpen] = useState({
		info: false,
		success: false,
	});

	// Auth info and Profile Image
	const [auth, setAuth] = useState(
		window.localStorage.getItem('authToken') && {
			token: JSON.parse(window.localStorage.getItem('authToken'))[0].token,
			email: JSON.parse(window.localStorage.getItem('authToken'))[1].email,
			image: JSON.parse(window.localStorage.getItem('authToken'))[2].image,
		}
	);

	// Filters
	const [filters, setFilters] = useState({
		isActive: false,
		title: '',
		gender: '',
		category: '',
		price: '',
	});

	useEffect(() => {
		if (products.length) setProductsCtx(products);
	}, [products]);

	const authValue = {
		isAuthenticated: auth,
		setIsAuthenticated: setAuth,
	};

	const productsValue = {
		productsCtx: productsCtx,
		setProductsCtx: setProductsCtx,
		loadingCtx: loading,
		setLoadingCtx: setLoading,
	};

	const filtersValue = {
		filters: filters,
		setFilters: setFilters,
	};

	const modalsValue = {
		isRegisterOpen: isRegisterOpen,
		setIsRegisterOpen: setIsRegisterOpen,
		isPaymentOpen: isPaymentOpen,
		setIsPaymentOpen: setIsPaymentOpen,
		isInfoOpen: isInfoOpen,
		setIsInfoOpen: setIsInfoOpen,
	};

	return (
		<MainProviders
			authValue={authValue}
			productsValue={productsValue}
			filtersValue={filtersValue}
			modalsValue={modalsValue}
		>
			<NavBar isProductPage={isProductPage} />

			{!!isRegisterOpen && <Register />}

			{!!isInfoOpen.info && <InfoModal />}

			{!!isPaymentOpen && <Payment />}

			<Routes>
				<Route path="/contact" element={<Contact />} />

				<Route path="/about" element={<About />} />

				<Route
					path="/AllProducts"
					element={<Navigate to="/AllProducts/page/1" />}
				/>
				<Route
					path="/AllProducts"
					element={<AllProducts allProducts={products} />}
				>
					<Route path="page/:id" element={<Products />} />
				</Route>

				<Route
					path="/product/:id"
					element={<ProductPage setIsProductPage={setIsProductPage} />}
				/>

				<Route path="/wishlist" element={<Wishlist />} />

				<Route
					path="/login"
					element={auth ? <Navigate to="/profile" /> : <Login />}
				/>

				<Route
					path="/profile"
					element={auth ? <Profile /> : <Navigate to="/login" />}
				/>

				<Route path="/cart" element={<Cart />} />

				<Route path="/" element={<HeroPage />} />

				<Route
					path="*"
					element={
						<div style={{ marginTop: '80px' }}>
							<Error />
						</div>
					}
				/>
			</Routes>

			<Footer />
		</MainProviders>
	);
};

export default MainView;
