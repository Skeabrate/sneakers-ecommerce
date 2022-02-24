import React from 'react';
import { StyledLink } from '../../GlobalStyledComponents/StyledLink';
import ClipLoader from 'react-spinners/ClipLoader';

const style = {
	position: 'absolute',
};

const LoadingButton = ({ loading, label, disabled, onClick, isBlack }) => {
	const colorCheck = isBlack ? '#1a1a1a' : '#fe7901';

	return (
		<StyledLink
			isBlack={isBlack}
			as="button"
			type="submit"
			disabled={disabled}
			onClick={onClick}
		>
			{loading ? (
				<div style={style}>
					<ClipLoader color={colorCheck} />
				</div>
			) : (
				<>{label}</>
			)}
		</StyledLink>
	);
};

export default LoadingButton;
