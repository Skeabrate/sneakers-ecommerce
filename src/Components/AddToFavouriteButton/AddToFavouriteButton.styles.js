import styled from 'styled-components';

export const StyledButton = styled.button`
	position: ${({ isCart }) => (isCart ? 'relative' : 'absolute')};
	top: ${({ isCart }) => (isCart ? 'unset' : '10px')};
	right: ${({ isCart }) => (isCart ? 'unset' : '10px')};
	border: none;
	background: ${({ isCart, theme }) =>
		isCart ? theme.colors.white : 'transparent'};
	padding: ${({ isCart }) => (isCart ? '0 15px' : '0')};

	p {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	svg {
		width: ${({ isCart }) => (isCart ? '22px' : '16px')};
		height: ${({ isCart }) => (isCart ? '22px' : '16px')};
		transition: all 0.1s ease-in-out;
		fill: ${({ theme }) => theme.colors.black};
	}

	&:hover {
		svg {
			fill: ${({ theme }) => theme.colors.orange};
			transform: scale(1.2);
		}
	}
`;
