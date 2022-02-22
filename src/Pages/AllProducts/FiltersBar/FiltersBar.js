import React, { useContext, useEffect, useRef } from 'react';
import ComboBox from '../../../Components/ComboBox/ComboBox';
import { sortData } from '../../../helpers/sortData';
import { genderItems, categoryItems, priceItems } from '../../../data/filters';
import StyledPhrase from './StyledPhrase';
import ProductsContext from '../../../Context/ProductsContext';
import FiltersContext from '../../../Context/FiltersContext';
import { useSticky } from '../../../hooks/useSticky';
import {
	StyledActiveFilters,
	StyledFiltersBar,
	StyledFilters,
	FiltersPlaceholder,
} from './FiltersBar.styles';

const FiltersBar = ({ AllProducts, paginate }) => {
	const { setProductsCtx } = useContext(ProductsContext);
	const { filters, setFilters } = useContext(FiltersContext);

	const filtersRef = useRef(null);
	const { isSticky } = useSticky(filtersRef);

	const handleSetFilters = (fieldName, option) => {
		setFilters((state) => {
			return {
				...state,
				[fieldName]: option,
			};
		});
	};

	const handleResetFilter = (fieldName, option) => {
		handleSetFilters(fieldName, option);
	};

	const filterData = () => {
		if (filters.price === 'Price (high - low)')
			sortData(AllProducts, 'descending');
		else if (filters.price === 'Price (low - high)')
			sortData(AllProducts, 'ascending');

		return setProductsCtx(
			AllProducts.filter(
				(item) =>
					(item.gender.includes(filters.gender) ||
						item.gender.includes('Unisex')) &&
					item.category.includes(filters.category) &&
					item.title.toLowerCase().includes(filters.title.toLowerCase())
			)
		);
	};

	useEffect(() => {
		if (filters.isActive) paginate(filterData);
	}, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<StyledFiltersBar isSticky={isSticky}>
				<StyledFilters>
					<ComboBox
						label="gender"
						option="gender"
						filter={filters.gender}
						setFilters={handleSetFilters}
						items={genderItems}
					/>

					<ComboBox
						label="category"
						option="category"
						filter={filters.category}
						setFilters={handleSetFilters}
						items={categoryItems}
					/>
				</StyledFilters>

				<ComboBox
					isPrice
					label="sort by"
					option="price"
					filter={filters.price}
					setFilters={handleSetFilters}
					items={priceItems}
				/>
			</StyledFiltersBar>

			{!isSticky && <FiltersPlaceholder />}

			<StyledActiveFilters>
				<div
					ref={filtersRef}
					style={{ position: 'absolute', top: '-162px' }}
				></div>

				{filters.gender && (
					<StyledPhrase
						label={filters.gender}
						resetHandler={() => handleResetFilter('gender', '')}
					/>
				)}
				{filters.category && (
					<StyledPhrase
						label={filters.category}
						resetHandler={() => handleResetFilter('category', '')}
					/>
				)}
				{filters.price && (
					<StyledPhrase
						label={filters.price}
						resetHandler={() => handleResetFilter('price', '')}
					/>
				)}
				{filters.title && (
					<StyledPhrase
						label={filters.title}
						resetHandler={() => handleResetFilter('title', '')}
					/>
				)}
			</StyledActiveFilters>
		</div>
	);
};

export default FiltersBar;
