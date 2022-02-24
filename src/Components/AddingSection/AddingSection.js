import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addToCart,
	removeFromCart,
	changeAmount,
} from '../../Redux/addToCartSlice';
import StyledButton from '../../GlobalStyledComponents/StyledButton';
import AddToFavouriteButton from '../AddToFavouriteButton/AddToFavouriteButton';
import { StyledCart, StyledButtonContainer } from './AddingSection.styles';
import AmountInput from '../AmountInput/AmountInput';
import { ADDED_TO_CART } from '../../helpers/serverResponse';
import { useInfoOpen } from '../../hooks/useInfoOpen';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const AddingSection = ({
	loading,
	size,
	setError,
	isClicked,
	setIsClicked,
	product: { id, title, gender, price, images = [{ url: '' }] },
}) => {
	const [inputValue, setInputValue] = useState(1);

	const resolveInfoOpen = useInfoOpen();

	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	console.log(size);
	const addToCartHandler = () => {
		if (!size) {
			setError(true);
			setIsClicked(true);
			setTimeout(() => {
				setIsClicked(false);
			}, 250);
		} else {
			let check = false;

			cart.find((item) => item.id === 0 && dispatch(removeFromCart({ id: 0 })));
			cart.find((item) => {
				if (item.id === id && item.size === size) {
					dispatch(
						changeAmount({
							id: item.id,
							size: size,
							amount: inputValue,
						})
					);
					check = true;
				}
				return check;
			});

			if (!check) {
				dispatch(
					addToCart({
						keyID: uuid(),
						id: id,
						title: title,
						price: price,
						image: images[0].url,
						amount: inputValue,
						size: size,
						gender: gender,
					})
				);
			}
			setInputValue(1);
			resolveInfoOpen(ADDED_TO_CART, true);
		}
	};

	return (
		<StyledCart>
			<AmountInput
				label="Amount :"
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>

			<StyledButtonContainer>
				<AddToFavouriteButton
					id={id}
					title={title}
					price={price}
					image={images[0].url}
					isCartPage
				/>

				<StyledButton
					label="Add to cart"
					actionHandler={addToCartHandler}
					isClicked={isClicked}
					loading={loading}
				/>
			</StyledButtonContainer>
		</StyledCart>
	);
};

AddingSection.propTypes = {
	loading: PropTypes.bool.isRequired,
	size: PropTypes.number.isRequired,
	setError: PropTypes.func.isRequired,
	isClicked: PropTypes.bool.isRequired,
	setIsClicked: PropTypes.func.isRequired,
	id: PropTypes.number,
	title: PropTypes.string,
	gender: PropTypes.string,
	price: PropTypes.number,
	images: PropTypes.array,
};

export default AddingSection;
