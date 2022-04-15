import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductsContext from '../../Context/ProductsContext';
import FiltersContext from '../../Context/FiltersContext';
import ModalsContext from '../../Context/ModalsContext';
import AuthContext from '../../Context/AuthContext';
import { store } from '../../Redux/store';
import { Provider } from 'react-redux';

const MainProviders = ({
	children,
	authValue,
	productsValue,
	filtersValue,
	modalsValue,
}) => {
	return (
		<Provider store={store}>
			<Router>
				<AuthContext.Provider value={authValue}>
					<ProductsContext.Provider value={productsValue}>
						<FiltersContext.Provider value={filtersValue}>
							<ModalsContext.Provider value={modalsValue}>
								<>{children}</>
							</ModalsContext.Provider>
						</FiltersContext.Provider>
					</ProductsContext.Provider>
				</AuthContext.Provider>
			</Router>
		</Provider>
	);
};

MainProviders.propTypes = {
	children: PropTypes.node.isRequired,
	authValue: PropTypes.object.isRequired,
	productsValue: PropTypes.object.isRequired,
	filtersValue: PropTypes.object.isRequired,
	modalsValue: PropTypes.object.isRequired,
};

export default MainProviders;
