import styled from 'styled-components';

export const StyledHamburger = styled.button`
	display: none;

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		padding: 5px;
		cursor: pointer;
		display: inline-block;
		background-color: transparent;
		border: 0;
		margin: 0;
	}
`;

export const StyledHamburgerWrapper = styled.span`
	width: 30px;
	height: 18px;
	display: inline-block;
	position: relative;
	transition: transform 0.3s 0s ease-in-out;
`;

export const StyledHamburgerInner = styled.span`
	width: 100%;
	height: 2px;
	background-color: ${({ istoggled, theme }) =>
		istoggled ? 'transparent' : theme.colors.white};
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	transition: background-color 0.2s 0.1s ease-in-out;

	&::after,
	&::before {
		content: '';
		width: 100%;
		height: 2px;
		background-color: ${({ theme, istoggled }) =>
			istoggled ? theme.colors.orange : theme.colors.white};
		position: absolute;
		left: 0;
		transition: transform 0.2s 0.1s ease-in-out,
			background-color 0.2s 0.3s ease-in-out;
	}
	&::after {
		bottom: 8px;
		transform: ${({ istoggled }) =>
			istoggled ? 'translateY(8px) rotate(45deg)' : 'unset'};
	}
	&::before {
		top: 8px;
		transform: ${({ istoggled }) =>
			istoggled ? 'translateY(-8px) rotate(-45deg)' : 'unset'};
	}
`;
