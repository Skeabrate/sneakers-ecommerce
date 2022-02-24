import React from 'react';
import {
	changeAmount,
	removeFromCart,
	setAmount,
} from '../../Redux/addToCartSlice';
import { useDispatch } from 'react-redux';
import { Wrapper, StyledPlusMinusBtn } from './AmountInput.styles';

const MAX_VALUE = 20;

const AmountInput = ({
	label,
	item = false,
	inputValue,
	setInputValue = () => {},
	showDelete = false,
}) => {
	const dispatch = useDispatch();

	const removeHandler = () =>
		item && dispatch(removeFromCart({ id: item.id, size: item.size }));

	const dispatchChangeAmountHandler = (val) =>
		item &&
		dispatch(changeAmount({ id: item.id, size: item.size, amount: val }));

	const dispatchSetAmountHandler = (val) =>
		item && dispatch(setAmount({ id: item.id, size: item.size, amount: val }));

	const minusHandler = () => {
		if (inputValue !== 1) {
			setInputValue(inputValue - 1);
			dispatchChangeAmountHandler(-1);
		} else removeHandler();
	};

	const plusHandler = () => {
		if (inputValue < MAX_VALUE) {
			setInputValue(inputValue + 1);
			dispatchChangeAmountHandler(1);
		}
	};

	const changeValueHandler = (e) =>
		e.currentTarget.value > MAX_VALUE
			? setInputValue(MAX_VALUE)
			: setInputValue(parseInt(e.currentTarget.value));

	const blurHandler = (e) => {
		if (
			parseInt(e.currentTarget.value) &&
			parseInt(e.currentTarget.value) > 0
		) {
			let validValue = e.currentTarget.value.replace(/^0+/, '');

			setInputValue(validValue);
			dispatchSetAmountHandler(Number(e.currentTarget.value));
		} else {
			setInputValue(1);
			dispatchSetAmountHandler(1);
		}
	};

	React.useEffect(() => {
		setInputValue(Number(inputValue));
	}, [inputValue, setInputValue]);

	return (
		<div>
			{label && <label style={{ fontWeight: 'bold' }}>{label}</label>}
			<Wrapper label={label}>
				<StyledPlusMinusBtn
					aria-label="decrease amount of products"
					onClick={minusHandler}
				>
					{inputValue < 2 && showDelete ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M0 10h24v4h-24z" />
						</svg>
					)}
				</StyledPlusMinusBtn>
				<input
					type="number"
					aria-label="amount of products"
					value={inputValue}
					onChange={changeValueHandler}
					onBlur={blurHandler}
				/>
				<StyledPlusMinusBtn
					aria-label="increase amount of products"
					onClick={plusHandler}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
					</svg>
				</StyledPlusMinusBtn>
			</Wrapper>
		</div>
	);
};

export default AmountInput;
