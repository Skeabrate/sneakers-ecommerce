import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	z-index: 1;
`;

export const StyledOptionBtn = styled.button`
	text-transform: uppercase;
	background-color: ${({ isopen, theme }) =>
		isopen ? `${theme.colors.black}` : 'transparent'};
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.xs};
	border: 1px solid
		${({ isopen, theme }) => (isopen ? theme.colors.orange : 'transparent')};
	border-bottom: ${({ isopen }) => (isopen ? `none` : null)};
	height: 40px;
	width: fit-content;
	padding: 10px 30px 10px 12px;

	span {
		position: absolute;
		right: 10px;
		transform: ${({ isopen }) => (isopen ? 'rotate(180deg)' : 'rotate(0deg)')}
			scale(0.8);
	}

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.orange};
		border-bottom: ${({ isopen, theme }) =>
			isopen ? `none` : `1px solid ${theme.colors.orange}`};
	}

	&:focus {
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.orange};
	}

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		font-size: ${({ theme }) => theme.fontSize.s};
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		font-size: ${({ theme }) => theme.fontSize.micro};
		padding: 5px 25px 5px 8px;
	}
`;

export const StyledList = styled.ul`
	list-style: none;
	position: absolute;
	width: 250px;
	max-height: 180px;
	overflow-y: auto;
	scroll-behavior: smooth;
	right: 0;
	left: ${({ isPrice }) => (isPrice ? 'unset' : '0')};
	top: 39px;
	border: 1px solid ${({ theme }) => theme.colors.orange};
	background-color: ${({ theme }) => theme.colors.black};
	z-index: -1;
	visibility: ${({ isopen }) => (isopen ? 'visible' : 'hidden')};
	box-shadow: 0px 0px 26px -11px rgba(0, 0, 0, 1);
	opacity: ${({ isopen }) => (isopen ? 1 : 0)};

	transition: opacity 0.2s;

	li {
		padding: 20px 15px;
		cursor: pointer;
	}

	&:focus {
		outline: none;
		border: 1px solid ${({ theme }) => theme.colors.orange};
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background-color: black;
	}

	::-webkit-scrollbar-thumb {
		background: linear-gradient(
			180deg,
			#d0368a 0%,
			${({ theme }) => theme.colors.orange} 99%
		);
		border-radius: 100px;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		font-size: ${({ theme }) => theme.fontSize.s};
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		font-size: ${({ theme }) => theme.fontSize.micro};
	}
`;
