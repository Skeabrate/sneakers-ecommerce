import React, { useEffect } from 'react';
import { useProductID } from '../../Api/useProductID';
import Content from './Content/Content';
import Error from '../Error/Error';
import { Wrapper } from './ProductPage.styles';
import ShopingCart from './ShopingCart/ShopingCart';
import { StyledLinkToHome } from '../../GlobalStyledComponents/StyledLinkToHome';
import Helmet from '../../helpers/Helmet';

const ProductPage = ({ setIsProductPage = () => {} }) => {
	const [product, loading, error] = useProductID(); // fetch product from context if it exists if not - fetch from CMS

	const mediaQuery = window.matchMedia('(max-width: 1000px)');

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0 });
		setIsProductPage(true);

		return () => {
			setIsProductPage(false);
		};
	}, [setIsProductPage]);

	return (
		<section>
			{error ? (
				<Error label="product" />
			) : (
				<Wrapper>
					<Helmet title="Sneakers Journey" />

					<StyledLinkToHome
						label="BACK"
						title="all products"
						path="AllProducts"
					/>

					<Content product={product} loading={loading} />

					{!mediaQuery.matches && (
						<ShopingCart product={product} loading={loading} isDesktop />
					)}
				</Wrapper>
			)}
		</section>
	);
};

export default ProductPage;
