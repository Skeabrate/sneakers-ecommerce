import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useData = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const getDataCount = useCallback(async () => {
		setLoading(false);
		try {
			const dataCount = await axios.post(
				'https://graphql.datocms.com/',
				{
					query: `
					{
						 _allProductsMeta {
								count
						 }
					} 
					`,
				},
				{
					headers: {
						authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
					},
				}
			);
			const data = await axios.post(
				'https://graphql.datocms.com/',
				{
					query: `
					{
						 allProducts(first: ${dataCount.data.data._allProductsMeta.count}, skip: 0){
					 id
					 title
					 category
					 gender
					 price
					 description
					 images {
						 url
					 }
						 }
				 _allProductsMeta {
					 count
				 }
					}
					`,
				},
				{
					headers: {
						authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
					},
				}
			);
			setProducts(data.data.data.allProducts);
			setLoading(true);
		} catch (ex) {
			console.log(ex);
		}
	}, []);

	useEffect(() => {
		getDataCount();
	}, [getDataCount]);

	return [products, loading, setLoading, setProducts];
};
