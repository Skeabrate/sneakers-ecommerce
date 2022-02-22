import styled from 'styled-components';

export const StyledError = styled.div`
	height: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		font-style: italic;
		font-size: ${({ theme }) => theme.fontSize.error};
		color: ${({ theme }) => theme.colors.lightGrey};
	}

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		h1 {
			font-size: ${({ theme }) => theme.fontSize.xl};
		}
	}
`;

export const StyledLoading = styled.div`
	height: calc(100vh - 282px - 6vw);
	display: flex;
	justify-content: center;
	align-items: center;
`;
