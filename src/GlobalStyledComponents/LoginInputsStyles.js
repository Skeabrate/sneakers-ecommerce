import styled from 'styled-components';
import { Field } from 'formik';

export const StyledFieldWrapper = styled.div`
	position: relative;
	margin-bottom: 40px;
	width: fit-content;

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		margin-bottom: 30px;
	}
`;

export const StyledLabel = styled.label`
	position: absolute;
	left: 15px;
	top: 50%;
	transform: translateY(-50%);
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.xxs};
	background-color: ${({ theme }) => theme.colors.black};
	padding: 0 8px;
	z-index: ${({ isFocused }) => (isFocused ? 1 : -1)};
	transform: ${({ isFocused }) =>
		isFocused ? 'translateY(-33px) scale(0.85)' : 'translateY(-50%)'};
	text-transform: capitalize;

	transition: all 0.2s ease-in-out;
`;

export const StyledField = styled(Field)`
	height: 50px;
	width: 450px;
	padding: 0 20px;
	background-color: transparent;
	border: 2px solid ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.white};
	border-radius: 0;
	border-color: ${({ theme, error }) => (error ? theme.colors.red : null)};

	&:focus {
		outline: none;
		background: transparent;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:active,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.black} inset !important;
		-webkit-text-fill-color: ${({ theme }) => theme.colors.white} !important;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		width: ${({ isRegister }) => !isRegister && 'calc(100vw - 6vw - 8px)'};
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		width: ${({ isRegister }) => isRegister && 'calc(95vw - 60px)'};
	}
`;

export const StyledErrorSvg = styled.div`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);

	svg {
		height: 18px;
		width: 18px;
		fill: ${({ theme, isValid }) =>
			isValid ? theme.colors.green : theme.colors.red};
	}
`;

export const StyledError = styled.div`
	position: absolute;
	bottom: -20px;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.red};
`;

export const StyledHidePassword = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	top: -25px;
	right: 0;
	font-size: ${({ theme }) => theme.fontSize.xs};
	text-decoration: underline;
	font-style: italic;
	column-gap: 5px;
	cursor: pointer;

	svg {
		height: 20px;
		width: 20px;
		fill: ${({ theme }) => theme.colors.white};
	}
`;
