import React, { useContext } from 'react';
import ProductsContext from '../../../Context/ProductsContext';
import { StyledContent } from '../../../GlobalStyledComponents/StyledContent';
import { StyledLoading, StyledError } from './Products.styles';
import ProductItem from '../../../Components/ProductItem/ProductItem';
import Pagination from '../../../Components/Pagination/Pagination';
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen';
import { useOutletContext, useParams } from 'react-router-dom';

const Products = () => {
	const { productsCtx, loadingCtx } = useContext(ProductsContext);
	const { id } = useParams();

	const [contentRef, error, postPerPage] = useOutletContext();

	const indexOfLastPost = id * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = productsCtx.slice(indexOfFirstPost, indexOfLastPost);

	return (
		<div>
			{loadingCtx ? (
				<>
					{error ? (
						<StyledError>
							<h1>Nothing was found!</h1>
						</StyledError>
					) : (
						<div>
							<StyledContent ref={contentRef}>
								{currentPosts.map(
									(
										{ id, images = [], price, title, category, gender },
										props
									) => (
										<ProductItem
											key={id}
											id={id}
											image={images[0].url}
											price={price}
											title={title}
											category={category}
											gender={gender}
										/>
									)
								)}
							</StyledContent>
							<Pagination
								postsPerPage={postPerPage}
								totalPosts={productsCtx.length}
							/>
						</div>
					)}
				</>
			) : (
				<StyledLoading>
					<LoadingScreen />
				</StyledLoading>
			)}
		</div>
	);
};

export default Products;
