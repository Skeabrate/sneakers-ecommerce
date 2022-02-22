import styled from 'styled-components';
import heroImg from '../../../Assets/Images/About/aboutHero.png';
import { Link } from 'react-scroll';

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 70vh;
	background-color: #f1f0ec;

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		height: 50vh;
		padding-top: 40px;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		height: 35vh;
	}
`;

export const StyledHeroImg = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${heroImg});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0;
	transform: scale(0.9);
`;

export const StyledArrow = styled(Link)`
	position: absolute;
	left: 50%;
	bottom: -20px;
	transform: translateX(-50%) rotate(90deg);
	width: 80px;
	border-radius: 100%;
	cursor: pointer;

	svg {
		width: 30px;
		height: 30px;
		transition: transform 0.3s ease-in-out;
		opacity: 0;
		fill: ${({ theme }) => theme.colors.black};
	}

	&:hover svg {
		transform: scale(1.2);
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		bottom: -25px;

		svg {
			width: 24px;
			height: 24px;
		}
	}
`;
