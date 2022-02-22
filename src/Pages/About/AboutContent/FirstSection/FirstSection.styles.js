import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
	padding: 3vw;
`;

export const StyledContentWrapper = styled.article`
	display: flex;
	align-items: flex-end;
	justify-content: center;
	margin: 30px;
	margin-bottom: calc(30px + 3%);

	@media (max-width: 750px) {
		flex-direction: column;
		row-gap: 30px;
		margin: 20px;
	}
`;

export const StyledArticle = styled.article`
	background-color: ${({ theme }) => theme.colors.orange};
	max-width: 500px;
	padding: 3vw;
	height: fit-content;
	margin-right: -10%;
	margin-bottom: -3%;
	position: relative;
	z-index: 2;

	p {
		margin-block: 1vw 2vw;
		font-size: ${({ theme }) => theme.fontSize.xs};
	}

	@media (max-width: 750px) {
		margin-right: 0;
		margin-bottom: 0;
		max-width: 100%;

		h2 {
			font-size: ${({ theme }) => theme.fontSize.xxs};
		}

		p {
			margin-block: 10px 20px;
		}
	}
`;

const ornamentLeft = css`
	position: absolute;
	background-color: ${({ theme }) => theme.colors.orange};
	bottom: 0;
	left: 0;

	@media (max-width: 750px) {
		top: -20px;
		left: -20px;
	}
`;

export const StyledLeftOrnament = styled.div`
	span {
		${ornamentLeft};
		width: 20px;
		height: 100px;
	}

	div {
		${ornamentLeft};
		width: 100px;
		height: 20px;
	}

	@media (max-width: 750px) {
		span {
			width: 10px;
			height: 100px;
		}

		div {
			width: 100px;
			height: 10px;
		}
	}
`;

/* RIGHT - IMG */
export const StyledImg = styled.div`
	display: flex;
	position: relative;
	z-index: 1;

	img {
		width: 55vw;
		height: auto;
	}

	@media (max-width: 750px) {
		img {
			width: 100%;
		}
	}
`;

const ornamentRight = css`
	content: '';
	position: absolute;
	background-color: ${({ theme }) => theme.colors.orange};
	top: 0px;
	right: 0px;

	@media (max-width: 750px) {
		top: unset;
		left: unset;
		bottom: -20px;
		right: -20px;
	}
`;

export const StyledRightOrnament = styled.div`
	z-index: -1;

	span {
		${ornamentRight};
		width: 20px;
		height: 100px;
	}

	div {
		${ornamentRight};
		width: 100px;
		height: 20px;
	}

	@media (max-width: 750px) {
		span {
			width: 10px;
			height: 100px;
		}

		div {
			width: 100px;
			height: 10px;
		}
	}
`;
