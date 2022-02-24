import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToFavorite,
	removeFromFavorite,
} from '../../Redux/addToFavoriteSlice';
import { StyledButton } from './AddToFavouriteButton.styles';

const AddToFavouriteButton = ({ id, title, price, image = [], isCartPage }) => {
	const favorite = useSelector((state) => state.favorite);
	const dispatch = useDispatch();

	const handleFavorite = (e) => {
		e.preventDefault();
		let check = false;

		favorite.find((item) => {
			if (item.id === 0) dispatch(removeFromFavorite({ id: 0 }));
			if (item.id === id) check = true;
			return check;
		});

		if (check) dispatch(removeFromFavorite({ id: id }));
		else
			dispatch(
				addToFavorite({
					id: id,
					title: title,
					price: price,
					image: image,
					amount: 1,
				})
			);
	};

	const isItemFavorite = favorite.find((item) => item.id === id);

	return (
		<StyledButton
			isCart={isCartPage}
			onClick={(e) => handleFavorite(e)}
			aria-label="add to wishlist"
		>
			<p>
				{isItemFavorite ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z" />
					</svg>
				)}
			</p>
		</StyledButton>
	);
};

export default AddToFavouriteButton;
