import React, { useState, useContext } from 'react';
import {
	Wrapper,
	StyledInput,
	StyledSearchBtn,
	StyledAnimation,
} from './SearchBar.styles';
import FiltersContext from '../../Context/FiltersContext';

const SearchBar = React.forwardRef((props, searchBarRef) => {
	const [searchPhrase, setSearchPhrase] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const { setFilters } = useContext(FiltersContext);

	const handleSubmit = () => {
		if (searchPhrase !== '' && searchPhrase !== ' ') {
			setFilters((state) => ({
				...state,
				isActive: true,
				title: searchPhrase,
			}));
		}
		setSearchPhrase('');
	};

	return (
		<Wrapper>
			<StyledInput
				aria-label="search product"
				value={searchPhrase}
				onChange={(e) => setSearchPhrase(e.target.value)}
				onKeyDown={(e) => e.keyCode === 13 && handleSubmit()}
				placeholder="search"
				type="text"
				ref={searchBarRef}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				maxLength="55"
			/>
			<StyledAnimation isFocused={isFocused}></StyledAnimation>
			<StyledSearchBtn
				onClick={handleSubmit}
				title="search"
				aria-label="search product"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" />
				</svg>
			</StyledSearchBtn>
		</Wrapper>
	);
});

export default SearchBar;
