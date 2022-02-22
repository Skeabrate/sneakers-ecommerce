import styled, { css } from 'styled-components';
import imgMain from '../../../../Assets/Images/About/aboutContent2.jpg';
import imgOne from '../../../../Assets/Images/About/secondSection1.png';
import imgTwo from '../../../../Assets/Images/About/secondSection2.png';
import imgThird from '../../../../Assets/Images/About/secondSection3.png';
import imgFourth from '../../../../Assets/Images/About/secondSection4.png';
import imgFifth from '../../../../Assets/Images/About/secondSection5.png';
import imgSix from '../../../../Assets/Images/About/secondSection6.png';

export const Wrapper = styled.section`
	margin: 5vw 0;
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		display: none;
	}
`;

const background = css`
	position: absolute;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

const leftRight = css`
	width: 480px;
	height: 460px;
`;

const upDownBig = css`
	width: 580px;
	height: 560px;
`;

const upDownSmall = css`
	width: 400px;
	height: 280px;
`;

const triangle = css`
	content: '';
	position: absolute;
	width: 0;
	height: 0;
`;

export const StyledGridContainer = styled.div`
	${background};
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	will-change: transform;
	transform: scale(0.4);
	transform-origin: center;
	background-image: url(${imgMain});
	background-color: #f27e6f;
`;

/* UP */
export const StyledUpBigImg = styled.div`
	${background};
	background-image: url(${imgOne});
	background-color: #5d583a;
	${upDownBig};
	top: -610px;
	left: 0;
`;
export const StyledUpSmallImg = styled.div`
	${background};
	background-image: url(${imgFourth});
	background-color: #fea800;
	${upDownSmall};
	top: -330px;
	left: 630px;

	&::after {
		${triangle};
		bottom: 0;
		right: -250px;
		border-top: 140px solid transparent;
		border-bottom: none;
		border-left: 200px solid ${({ theme }) => theme.colors.white};
	}
`;

/* RIGHT */
export const StyledRightImg = styled.div`
	${background};
	background-image: url(${imgThird});
	background-color: #a66cd4;
	${leftRight};
	top: 0;
	right: -530px;

	&::after {
		${triangle};
		left: 0;
		bottom: -250px;
		border-bottom: 200px solid transparent;
		border-top: none;
		border-left: 140px solid ${({ theme }) => theme.colors.white};
	}
`;

/* DOWN */
export const StyledDownBigImg = styled.div`
	${background};
	background-image: url(${imgFifth});
	background-color: #eb3c43;
	${upDownBig};
	bottom: -610px;
	right: 0;
`;
export const StyledDownSmallImg = styled.div`
	${background};
	background-image: url(${imgSix});
	background-color: #fec2c2;
	${upDownSmall};
	bottom: -330px;
	right: 630px;

	&::after {
		${triangle};
		left: -250px;
		top: 0px;
		border-bottom: 140px solid transparent;
		border-top: none;
		border-right: 200px solid ${({ theme }) => theme.colors.white};
	}
`;

/* LEFT */
export const StyledLeftImg = styled.div`
	${background};
	background-image: url(${imgTwo});
	background-color: #eb8a2b;
	${leftRight};
	bottom: 0;
	left: -530px;

	&::after {
		${triangle};
		right: 0;
		top: -250px;
		border-top: 200px solid transparent;
		border-bottom: none;
		border-right: 140px solid ${({ theme }) => theme.colors.white};
	}
`;
