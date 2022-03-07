import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Assets/Styles/theme';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

export const renderWithProviders = (children) => {
	return render(
		<Router>
			<Provider store={store}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</Provider>
		</Router>
	);
};
