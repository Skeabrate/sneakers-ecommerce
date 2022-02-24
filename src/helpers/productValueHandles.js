export const productValueHandler = (arr = [], option) => {
	switch (option) {
		case 'quantity':
			return arr.reduce((prev, curr) => prev + curr.amount, 0);

		case 'price':
			return arr.reduce((prev, curr) => prev + curr.price, 0);

		default:
			return arr;
	}
};
