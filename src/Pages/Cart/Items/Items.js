import React, { useRef } from 'react';
import { Wrapper } from './Items.styles';
import CartItem from './CartItem/CartItem';
import StyledTitle from '../../../GlobalStyledComponents/StyledTitle';
import gsap from 'gsap';
import { StyledLinkToHome } from '../../../GlobalStyledComponents/StyledLinkToHome';

const Items = ({ cart, length }) => {
	const tl = useRef(null);
	const contentRef = useRef(null);
	const contentLengthRef = useRef(null);

	React.useEffect(() => {
		tl.current = gsap.timeline();

		if (tl.current) {
			tl.current
				.to(
					contentRef.current,
					{
						opacity: 1,
						duration: 0.6,
					},
					'+=0.2s'
				)
				.to(
					contentLengthRef.current,
					{
						opacity: 1,
						duration: 0.6,
					},
					'-=0.6s'
				);
		}
	}, []);

	return (
		<Wrapper>
			<header>
				<StyledTitle>
					your bag
					<span ref={contentLengthRef}>[ {length} ]</span>
					<StyledLinkToHome
						label="GO BACK SHOPPING"
						title="all products"
						path="AllProducts"
						isHeader
						isWhite
					/>
				</StyledTitle>
			</header>

			<div style={{ opacity: 0 }} ref={contentRef}>
				{length ? (
					<div>
						{cart.map((item, index) => (
							<CartItem
								last={index === cart.length - 1}
								item={item}
								key={item.keyID}
							/>
						))}
					</div>
				) : (
					<h3 style={{ fontStyle: 'italic' }}>Your bag is empty</h3>
				)}
			</div>
		</Wrapper>
	);
};

export default Items;
