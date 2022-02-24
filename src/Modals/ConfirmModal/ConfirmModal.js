import React from 'react';
import { Wrapper } from './ConfirmModal.styles';

const ConfirmModal = ({
	label,
	yesHandler = () => {},
	noHandler = () => {},
}) => {
	return (
		<Wrapper>
			<h3>{label}</h3>
			<div>
				<button onClick={yesHandler}>Yes</button>
				<button onClick={noHandler}>No</button>
			</div>
		</Wrapper>
	);
};

export default ConfirmModal;
