import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: calc(100vh - 80px);
	position: relative;
	display: grid;
	grid-template-columns: 1.45fr 0.55fr;

	@media (max-width: ${({ theme }) => theme.screenSize.medium}) {
		grid-template-columns: 1fr;
	}

	@media (max-width: ${({ theme }) => theme.screenSize.mobile}) {
		min-height: calc(100vh - 60px);
	}
`;
