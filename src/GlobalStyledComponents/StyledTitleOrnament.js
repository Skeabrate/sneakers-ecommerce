import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	top: -13px;
	left: -10px;
	width: 0;
	height: 0;
	z-index: -1;
	border-top: 60px solid transparent;
	border-bottom: none;
	border-left: 100px solid ${({ theme }) => theme.colors.orange};

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		top: -20px;
	}

	@media (max-width: 750px) {
		left: -5px;
		top: -11px;
		border-top: 40px solid transparent;
		border-left: 70px solid ${({ theme }) => theme.colors.orange};
	}
`;

export const StyledTitleOrnament = () => {
	return <Wrapper />;
};
