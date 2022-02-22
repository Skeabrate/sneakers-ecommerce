import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.section`
	padding: 3vw;
`;

export const StyledContent = styled.div`
	display: grid;
	padding-block: 3vw;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	column-gap: 30px;
	row-gap: 30px;

	@media (max-width: 750px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledItem = styled.article`
	box-shadow: ${({ theme }) => theme.boxShadow};
	background-color: ${({ theme }) => theme.colors.darkBlack};
	position: relative;
	text-align: center;
	height: 60vh;
	min-height: 400px;
	overflow: hidden;

	&:hover div:first-child {
		height: calc(50vh - 150px);
		min-height: 170px;
		filter: grayscale(100%);
	}

	&:hover div:last-child {
		transform: translateY(0);
	}

	@media (max-width: 750px) {
		height: fit-content;
		min-height: unset;

		&:hover div:first-child {
			-ms-filter: 'progid:DXImageTransform.Microsoft.gradient(enabled=false)';
			filter: none !important;
			height: 30vh;
			min-height: 30vh;
		}

		&:hover div:last-child {
			transform: translateY(0);
		}
	}
`;

export const StyledItemImg = styled.div`
	height: 50vh;
	min-height: 320px;
	background-image: ${({ img }) => `url(${img})`};
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	position: relative;
	transition: height 0.4s ease-in-out, min-height 0.4s ease-in-out,
		filter 0.2s 0.2s ease-in-out;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.1;
	}

	@media (max-width: 750px) {
		height: 30vh;
		min-height: 30vh;
	}
`;

export const StyledItemHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 10vh;
	min-height: 80px;

	@media (max-width: 750px) {
		height: fit-content;
		min-height: fit-content;
		padding: 10px 0 0 0;
	}
`;

export const StyledItemTitle = styled.h2`
	text-transform: uppercase;
	font-style: italic;

	@media (max-width: 750px) {
		font-size: 1.2rem;
	}
`;

export const StyledItemTitleLower = styled.h3`
	font-style: italic;
	font-weight: normal;
	color: ${({ theme }) => theme.colors.orange};
	font-size: ${({ theme }) => theme.fontSize.s};

	@media (max-width: 750px) {
		font-size: ${({ theme }) => theme.fontSize.micro};
	}
`;

export const StyledItemContent = styled.div`
	position: relative;
	bottom: 0;
	height: 150px;
	padding: 10px;
	transform: translateY(150px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: ${({ theme }) => theme.fontSize.xs};
	transition: transform 0.4s ease-in-out;

	@media (max-width: 750px) {
		position: static;
		transform: translateY(0);
		height: fit-content;
		row-gap: 20px;
		font-size: ${({ theme }) => theme.fontSize.s};
	}
`;

const moveSpanStart = keyframes`
    to{
        transform: translateY(-105%);
    }
`;

const moveSpanEnd = keyframes`
    from{
        transform: translateY(100%);
    }
    to{
        transform: translateY(0%);
    }
`;

export const StyledItemButton = styled.button`
	background-color: ${({ theme }) => theme.colors.orange};
	border: none;
	color: ${({ theme }) => theme.colors.white};
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-style: italic;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	width: 200px;
	height: 40px;
	background-color: ${({ theme }) => theme.colors.white};
	overflow: hidden;
	position: relative;

	@media (max-width: 750px) {
		font-size: ${({ theme }) => theme.fontSize.s};
	}

	span {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		z-index: 1;
		transition: color 0.1s ease-in-out;
	}

	&:hover span {
		animation: ${moveSpanStart} 0.2s forwards, ${moveSpanEnd} 0.2s forwards 0.2s;
		color: ${({ theme }) => theme.colors.darkBlack};
	}

	&::after {
		content: '';
		position: absolute;
		top: -3px;
		left: -5px;
		width: 150%;
		height: 150%;
		background-color: ${({ theme }) => theme.colors.orange};
		clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);

		transition: clip-path 0.2s ease-in-out;
	}

	&:hover::after {
		transition-duration: 0.4s;
		clip-path: polygon(0 0, 100% 0%, 0 0, 0% 100%);
	}

	@media (max-width: 750px) {
		width: 100%;
	}
`;
