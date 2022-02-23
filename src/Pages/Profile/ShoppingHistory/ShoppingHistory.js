import React, { useEffect, useRef, useState, useMemo } from 'react';
import StyledTitle from '../../../GlobalStyledComponents/StyledTitle';
import {
	Wrapper,
	StyledUnderline,
	StyledImages,
	StyledShoppingItem,
	StyledOrderTitle,
	LoadingConteiner,
	StyledLoadMoreContent,
} from './ShoppingHistory.styles';
import { StyledSpan } from '../Profile.styles';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen';
import gsap from 'gsap';
import { useShoppingHistory } from '../../../hooks/useShoppingHistory';
import { productValueHandler } from '../../../helpers/productValueHandles';
import { theme } from 'Assets/Styles/theme';

const ShoppingHistory = () => {
	const [isEndOfContent, setIsEndOfContent] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);

	const [data, loading] = useShoppingHistory();

	const postPerPage = 8;
	const indexOfLastPost = currentPage * postPerPage;
	const currentPosts = data.slice(0, indexOfLastPost);

	const endRef = useRef(null);
	const itemRef = useRef(null);
	const tl = useRef(null);

	const callbackFunction = (entries) => {
		const [entry] = entries;
		setIsEndOfContent(entry.isIntersecting);
	};

	const options = useMemo(() => {
		return {
			root: null,
			rootMargin: '0px',
			threshold: 0,
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, options);
		const currRef = endRef.current;

		if (currRef) observer.observe(currRef);

		return () => currRef && observer.unobserve(currRef);
	}, [endRef, options, currentPosts]);

	useEffect(() => {
		if (isEndOfContent) {
			setTimeout(() => {
				setCurrentPage((state) => state + 1);
			}, 500);
		}
	}, [isEndOfContent]);

	useEffect(() => {
		tl.current = gsap.timeline({ paused: loading });

		if (tl.current) {
			tl.current.to(itemRef.current, {
				opacity: 1,
				duration: 0.8,
			});
		}
	}, [loading]);

	return (
		<Wrapper>
			<header>
				<StyledTitle>Shopping History</StyledTitle>
			</header>

			{loading ? (
				<LoadingConteiner>
					<LoadingScreen />
				</LoadingConteiner>
			) : (
				<>
					{data.length ? (
						<div style={{ opacity: '0' }} ref={itemRef}>
							{currentPosts.map(({ id, date, products }, index) => (
								<StyledShoppingItem
									key={id}
									isLast={index === currentPosts.length - 1}
								>
									<StyledOrderTitle>
										<StyledUnderline>ORDER # </StyledUnderline>{' '}
										<StyledSpan>{id}</StyledSpan>
									</StyledOrderTitle>

									<table>
										<thead>
											<tr>
												<td>
													<h5>DATE</h5>
												</td>
												<td>
													<h5>ITEMS</h5>
												</td>
												<td>
													<h5>PRICE</h5>
												</td>
												<td>
													<h5>STATUS</h5>
												</td>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>
													<h5 style={{ fontWeight: 'normal' }}>{date}</h5>
												</td>
												<td>
													<h5 style={{ fontWeight: 'normal' }}>
														{productValueHandler(products, 'quantity')}
													</h5>
												</td>
												<td>
													<h5 style={{ fontWeight: 'normal' }}>
														${productValueHandler(products, 'price')}
													</h5>
												</td>
												<td>
													<h5 style={{ fontWeight: 'normal' }}>Send</h5>
												</td>
											</tr>
										</tbody>
									</table>

									<StyledImages>
										{products.map((item, i) => (
											<ShoppingItem item={item} key={i} />
										))}
									</StyledImages>
								</StyledShoppingItem>
							))}

							{currentPosts.length < data.length && (
								<StyledLoadMoreContent ref={endRef}>
									<LoadingScreen />
								</StyledLoadMoreContent>
							)}
						</div>
					) : (
						<h1 style={{ fontStyle: 'italic', color: theme.colors.lightGrey }}>
							You don't have shopping history yet!
						</h1>
					)}
				</>
			)}
		</Wrapper>
	);
};

export default ShoppingHistory;
