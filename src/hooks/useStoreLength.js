import { useState, useEffect } from 'react';

export const useStoreLength = (store = []) => {
	const [length, setLength] = useState(0);

	useEffect(() => {
		setLength(store.reduce((a, b) => a + b.amount, 0));
	}, [store]);

	return length > 0 ? length : 0;
};
