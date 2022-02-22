import { useState, useReducer } from 'react';
import CustomInput from '../../../Components/CustomInput/CustomInput';
import LoadingButton from '../../../Components/LoadingButton/LoadingButton';
import { reducer } from '../Reducer/reducer';
import { initialState } from '../Reducer/initialState';
import {
	StyledTextareaWrapper,
	StyledTextarea,
	StyledLabel,
	StyledErrorSvg,
	StyledError,
} from './ContactForm.styles';
import { useInfoOpen } from '../../../hooks/useInfoOpen';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [loading, setLoading] = useState(false);

	const resolveInfoOpen = useInfoOpen();

	const reducerActionHandler = (type, field, value) =>
		dispatch({ type: type, field: field, value: value });

	const handleSubmit = (e) => {
		e.preventDefault();

		let rules =
			state.name.isInvalid ||
			!state.name.value ||
			state.email.isInvalid ||
			!state.email.value ||
			state.message.isInvalid ||
			!state.message.value;

		if (rules) {
			if (!state.name.value) reducerActionHandler('setIsActive', 'name', true);
			if (!state.email.value)
				reducerActionHandler('setIsActive', 'email', true);
			if (!state.message.value)
				reducerActionHandler('setIsActive', 'message', true);
		} else {
			setLoading(true);
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					e.target,
					process.env.REACT_APP_USER_ID
				)
				.then(
					(result) => {
						resolveInfoOpen('Your Message has been sent', true);
						setLoading(false);
						reducerActionHandler('setValue', 'name', '');
						reducerActionHandler('setValue', 'email', '');
						reducerActionHandler('setValue', 'message', '');
						reducerActionHandler('setIsActive', 'name', false);
						reducerActionHandler('setIsActive', 'email', false);
						reducerActionHandler('setIsActive', 'message', false);

						console.log(result.text);
						console.log(
							state.name.value,
							state.email.value,
							state.message.value
						);
					},
					(error) => {
						console.log(error.text);
						resolveInfoOpen(
							"Sorry, we couldn't send your message. Please try again later.",
							false
						);
						setLoading(false);
					}
				);
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<CustomInput
				name="name"
				value={state.name.value}
				onChange={(e) => {
					reducerActionHandler('setValue', 'name', e.currentTarget.value);
					reducerActionHandler('setIsInvalid', 'name');
				}}
				setActiveError={() =>
					!state.name.isActive &&
					reducerActionHandler('setIsActive', 'name', true)
				}
				activeError={state.name.isActive}
				invalidError={state.name.isInvalid}
			/>

			<CustomInput
				name="email"
				autoComplete="email"
				value={state.email.value}
				onChange={(e) => {
					reducerActionHandler('setValue', 'email', e.currentTarget.value);
					reducerActionHandler('setIsInvalid', 'email');
				}}
				setActiveError={() =>
					!state.email.isActive &&
					reducerActionHandler('setIsActive', 'email', true)
				}
				activeError={state.email.isActive}
				invalidError={state.email.isInvalid}
			/>

			<StyledTextareaWrapper>
				<StyledLabel
					isFocused={state.message.value || state.message.isFocused}
					htmlFor="message"
				>
					Message *
				</StyledLabel>
				<StyledTextarea
					id="message"
					name="message"
					value={state.message.value}
					onChange={(e) => {
						reducerActionHandler('setValue', 'message', e.currentTarget.value);
						reducerActionHandler('setIsInvalid', 'message');
					}}
					activeError={
						state.message.isActive &&
						(state.message.isInvalid || !state.message.value)
					}
					maxLength="1000"
					onFocus={() =>
						reducerActionHandler('setIsMsgFocused', 'message', true)
					}
					onBlur={() => {
						reducerActionHandler('setIsMsgFocused', 'message', false);
						if (!state.message.isActive) {
							reducerActionHandler('setIsActive', 'message', true);
						}
					}}
				/>
				{state.message.isActive ? (
					<>
						{state.message.isInvalid || !state.message.value ? (
							<>
								<StyledErrorSvg>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
									</svg>
								</StyledErrorSvg>

								<StyledError>
									{state.message.value
										? state.message.isInvalid
										: `Message is required`}
								</StyledError>
							</>
						) : (
							<StyledErrorSvg isValid>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
								</svg>
							</StyledErrorSvg>
						)}
					</>
				) : null}
			</StyledTextareaWrapper>

			<LoadingButton isBlack loading={loading} label="Send Message" />
		</form>
	);
};

export default ContactForm;
