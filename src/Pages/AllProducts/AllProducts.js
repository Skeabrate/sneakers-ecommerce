import React, { useEffect, useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import FiltersBar from './FiltersBar/FiltersBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductsContext from '../../Context/ProductsContext';
import {
	StyledTitle,
	StyledTitleWrapper,
	StyledTitleInfo,
} from './AllProducts.styles';
import { Wrapper } from '../../GlobalStyledComponents/Wrapper';
import { StyledTitleOrnament } from '../../GlobalStyledComponents/StyledTitleOrnament';
import Helmet from '../../helpers/Helmet';
import { Outlet, useParams, useNavigate } from 'react-router-dom';

const AllProducts = ({ AllProducts }) => {
	const { productsCtx, loadingCtx, setLoadingCtx } =
		useContext(ProductsContext);

	const { id } = useParams();
	const navigate = useNavigate();

	const [error, setError] = useState(false);
	const [postPerPage] = useState(12);

	const tl = useRef(null);
	const contentRef = useRef(null);
	const contentLengthRef = useRef(null);
	const searchBarRef = useRef(null);

	const scrollFunc = (type = 'auto') =>
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: type,
		});

	const paginate = React.useCallback(
		(func = () => {}) => {
			if (func) {
				// filtry
				setLoadingCtx(false);
				setTimeout(() => {
					func();
					navigate('/AllProducts/page/1');
					setLoadingCtx(true);
				}, 100);
			} else {
				// zmiana routa - pagination
				setLoadingCtx(false);
				setTimeout(() => {
					setLoadingCtx(true);
				}, 100);
			}
			scrollFunc();
		},
		[navigate, setLoadingCtx]
	);

	useEffect(() => {
		paginate(false);
	}, [id, paginate]);

	useEffect(() => {
		if (AllProducts.length) {
			if (!productsCtx.length) setError(true);
			else setError(false);
		}
	}, [productsCtx]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		tl.current = gsap.timeline({ paused: !loadingCtx });

		if (tl.current) {
			tl.current
				.to(
					contentLengthRef.current,
					{
						opacity: 1,
						duration: 0.6,
					},
					'+=0.2s'
				)
				.to(
					contentRef.current,
					{
						opacity: 1,
						duration: 0.6,
					},
					'-=0.6s'
				)
				.to(searchBarRef.current, {
					width: 'auto',
					duration: 0.6,
				});
		}
	}, [loadingCtx]);

	return (
		<Wrapper>
			<Helmet title="Sneakers Journey - All Products" />

			<header>
				<StyledTitle>
					<StyledTitleWrapper>
						<h1>ALL PRODUCTS</h1>
						{loadingCtx ? (
							<StyledTitleInfo ref={contentLengthRef}>
								<span>[ {error ? '0' : productsCtx.length} ]</span>
								<div>
									Page :{' '}
									<p>
										{id} / {Math.ceil(productsCtx.length / postPerPage)}
									</p>
								</div>
							</StyledTitleInfo>
						) : null}
						<StyledTitleOrnament />
					</StyledTitleWrapper>

					<SearchBar ref={searchBarRef} />
				</StyledTitle>
			</header>

			<FiltersBar
				setError={setError}
				AllProducts={AllProducts}
				paginate={paginate}
			/>

			<Outlet context={[contentRef, error, postPerPage]} />
		</Wrapper>
	);
};

export default AllProducts;
