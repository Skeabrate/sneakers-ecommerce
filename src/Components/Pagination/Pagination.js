import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledList, StyledButton } from './Pagination.styles';

const Pagination = ({ postsPerPage, totalPosts }) => {
	const pageNumber = [];
	const { id } = useParams();

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(i);
	}

	return (
		<nav>
			<StyledList>
				{pageNumber.map((item) => (
					<li key={item}>
						<StyledButton
							to={`/AllProducts/page/${item}`}
							onClick={() =>
								item.toString() === id &&
								window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
							}
						>
							{item}
						</StyledButton>
					</li>
				))}
			</StyledList>
		</nav>
	);
};

export default Pagination;
