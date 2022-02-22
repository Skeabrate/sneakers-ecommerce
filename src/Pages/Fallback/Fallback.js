import React from 'react';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';

const Fallback = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<LoadingScreen />
		</div>
	);
};

export default Fallback;
