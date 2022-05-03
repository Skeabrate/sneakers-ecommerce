export const sortData = (data, option) => {
	if (option === 'ascending') data.sort((a, b) => a.price - b.price);
	else if (option === 'descending') data.sort((a, b) => b.price - a.price);
};
