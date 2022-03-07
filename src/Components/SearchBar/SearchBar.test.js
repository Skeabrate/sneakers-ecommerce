import React from 'react';
import SearchBar from './SearchBar';
import { renderWithThemeProvider } from '../../helpers/renderWithThemeProvider';

describe('Searchbar', () => {
	it('render component', () => {
		renderWithThemeProvider(<SearchBar />);
	});
});
