export const productValueHandler = (arr = [], option) => {
	let newArr = [];
	arr.map((item) => {
		switch (option) {
			case 'quantity':
				return newArr.push(item.amount);

			case 'price':
				return newArr.push(item.price);

			default:
				return newArr;
		}
	});

	return newArr.reduce((prev, curr) => prev + curr);
};
