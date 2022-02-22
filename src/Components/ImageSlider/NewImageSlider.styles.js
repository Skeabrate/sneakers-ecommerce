import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	height: 700px;
	position: relative;
	background-color: ${({ theme }) => theme.colors.shoeBckgrnd};

	ul {
		position: absolute;
		bottom: 10px;
		left: 50%;
	}

	@media (max-width: 550px) {
		margin-top: 60px;
		height: 400px;
	}
`;

export const SlideContainer = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

export const StyledSlide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-image: ${({ url }) => `url(${url})`};
	height: 700px;
	cursor: grab;

	@media (max-width: 550px) {
		height: 400px;
	}
`;

const arrowBtns = css`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	padding: 10px 20px;
	border: 2px solid ${({ theme }) => theme.colors.grey};
	z-index: 1;

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		padding: 5px 10px;
	}
`;

export const StyledBtnPrev = styled.button`
	${arrowBtns}
	left: 30px;

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		left: 10px;
	}
`;

export const StyledBtnNext = styled.button`
	${arrowBtns}
	right: 30px;

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		right: 10px;
	}
`;
