import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	position: fixed;
	top: 0;
	transform: translateY(-100%);
	transition: transform 0.2s ease-in-out;
	font-size: ${({ theme }) => theme.fontSize.xxs};
	background-color: ${({ theme }) => theme.colors.orange};
	border: none;
	color: ${({ theme }) => theme.colors.white};
	font-weight: bold;
	padding: 20px;
	z-index: 9999999;
	font-style: italic;
	text-transform: uppercase;
	text-decoration: underline 2px wavy;
	text-underline-offset: 4px;

	&:focus {
		transform: translateY(0);
		outline: none;
	}
`;

const HiddenLink = () => {
	return <Button>Skip To Content</Button>;
};

export default HiddenLink;
