import React from 'react';
import SearchBar from './SearchBar';
import { renderWithProviders } from '../../helpers/renderWithProviders';

describe('Searchbar', () => {
	it('render component', () => {
		renderWithProviders(<SearchBar />);
	});
});
