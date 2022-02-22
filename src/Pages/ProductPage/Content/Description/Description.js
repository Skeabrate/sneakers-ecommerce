import React, { useRef } from 'react';
import { useAnimation } from '../../../../hooks/useAnimation';
import {
	Wrapper,
	StyledTitle,
	StyledContent,
	StyledImg,
} from '../GlobalStyles.styles';

function Description({ product: { title, description, images }, loading }) {
	const wrapperRef = useRef(null);
	useAnimation(wrapperRef.current);

	return (
		<Wrapper ref={wrapperRef}>
			{loading ? (
				<StyledContent count={2}>
					<div>
						<header>
							<StyledTitle>{title}</StyledTitle>
						</header>
						<h3>
							RUNNING SHOES WITH PRECISELY CODED CUSHIONING FOR EVERYDAY
							COMFORT.
						</h3>
						<p>{description}</p>
					</div>

					<StyledImg>
						<img src={images[2].url} alt="sneakers" height="500" width="500" />
					</StyledImg>
				</StyledContent>
			) : null}
		</Wrapper>
	);
}

export default React.memo(Description);
