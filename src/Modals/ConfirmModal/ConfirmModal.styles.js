import styled, { keyframes } from 'styled-components';

export const appear = keyframes`
    from{   
        opacity: 0;
    } to {
        
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.colors.black};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3vw;
	box-shadow: 0px 0px 40px -3px rgba(0, 0, 0, 1);
	z-index: 100;
	color: ${({ theme }) => theme.colors.white};
	width: fit-content;

	animation: 0.2s ease-in forwards ${appear};

	button {
		padding: 15px 30px;
		font-weight: bold;
		background-color: ${({ theme }) => theme.colors.white};
		border: none;
		margin: 15px 10px 0;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		width: 90vw;
	}
`;
