import styled from 'styled-components';

export const Wrapper = styled.article`
	opacity: 0;
	transform: translateY(50px);
	position: relative;
	padding: 6vw 3vw;
	margin: 0 3vw;

	&::after {
		display: ${({ isLast }) => isLast && 'none'};
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 5px;
		background-color: ${({ theme }) => theme.colors.grey};
		border-bottom: 2px solid black;
		border-radius: 100%;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		padding: 6vw 1.25vw;
		margin: 0 1.25vw;
	}

	@media (max-width: 800px) {
		padding: 10vw 1.25vw;
	}
`;

export const StyledTitle = styled.h2`
	font-size: ${({ theme }) => theme.fontSize.l};
	font-style: italic;
	position: relative;
	width: fit-content;
	padding-bottom: 5px;
	margin-bottom: 30px;

	&::after {
		position: absolute;
		content: '';
		width: 105%;
		height: 3px;
		background-color: ${({ theme }) => theme.colors.orange};
		bottom: 0;
		left: 0;
		border-radius: 100%;
	}
`;

export const StyledContent = styled.div`
	display: grid;
	grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
	column-gap: 40px;
	row-gap: 30px;
	align-items: ${({ isHigh }) => !isHigh && 'center'};

	div {
		display: flex;
		flex-direction: column;

		p {
			line-height: 1.6;
			font-size: ${({ theme }) => theme.fontSize.xs};
		}

		h3 {
			font-size: ${({ theme }) => theme.fontSize.xs};
		}
	}

	h3 {
		padding-bottom: ${({ isHigh }) => (!isHigh ? '30px' : '10px')};
		font-size: ${({ theme }) => theme.fontSize.xxs};
		font-style: italic;
		line-height: 1;
	}

	@media (max-width: 1300px) {
		h3 {
			font-size: ${({ theme }) => theme.fontSize.xs};
		}
	}

	@media (max-width: 800px) {
		grid-template-columns: ${({ isHigh }) => (isHigh ? '1fr 1fr' : '1fr')};
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		grid-template-columns: 1fr;

		div {
			p {
				line-height: 1.3;
			}
		}
	}
`;

export const StyledImg = styled.div`
	position: relative;
	width: fit-content;
	height: fit-content;

	img {
		width: 100%;
		height: 100%;
	}

	&::after,
	&::before {
		content: '';
		position: absolute;
		bottom: -30px;
		right: ${({ isLeft }) => !isLeft && '-30px'};
		left: ${({ isLeft }) => isLeft && '-30px'};
		background-color: ${({ theme }) => theme.colors.orange};
	}

	&::after {
		height: 20px;
		width: 120px;
	}

	&::before {
		height: 120px;
		width: 20px;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		&::after {
			height: 10px;
			width: 100px;
			bottom: -20px;
			left: 0;
			right: unset;
		}

		&::before {
			height: 10px;
			width: 100px;
			bottom: -20px;
			right: 0;
			left: unset;
		}
	}

	@media (max-width: 800px) {
		grid-column: 1;
		grid-row: 2;
	}
`;
