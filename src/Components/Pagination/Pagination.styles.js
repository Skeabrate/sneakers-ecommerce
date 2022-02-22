import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
	list-style: none;
	display: flex;
	column-gap: 10px;
	justify-content: left;
	max-width: 250px;
	width: fit-content;
	margin: 0 auto;
	overflow-x: auto;
	overflow-y: hidden;
	padding: 10px 0;
`;

export const StyledButton = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSize.xxs};
	position: relative;
	text-decoration: none;

	transition: color 0.1s ease-in-out;

	&::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.orange};
		bottom: -4px;
		left: 0;
		opacity: 0;

		transition: opacity 0.2s ease-in-out;
	}

	&:hover::after {
		opacity: 1;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.orange};
	}

	&.active {
		background-color: ${({ theme }) => theme.colors.orange};
		color: ${({ theme }) => theme.colors.white};

		&::after {
			opacity: 1;
		}

		&:hover {
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;
