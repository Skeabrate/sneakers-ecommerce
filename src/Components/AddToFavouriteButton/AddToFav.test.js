import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import AddToFavouriteButton from './AddToFavouriteButton';
import Wishlist from '../../Pages/Wishlist/Wishlist';

describe('Add to favorite component', () => {
	it('check if add to favorite button works', () => {
		renderWithProviders(
			<>
				<Wishlist />
				<AddToFavouriteButton id={123} title="test item" price={100} />
			</>
		);

		fireEvent.click(screen.getByTestId('addBtn'));
		screen.getByText('TEST ITEM'); // title.toUpperCase()
	});
});
