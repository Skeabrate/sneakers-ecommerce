import React from 'react';
import { Wrapper, StyledFilters } from './FiltersBar.styles'
import SortByPrice from "./SortByPrice/SortByPrice"
import SortByGender from "./SortByGender/SortByGender"
import SortByCategory from "./SortByCategory/SortByCategory"

const FiltersBar = () => {
   return (
      <Wrapper>
         <StyledFilters>
            <SortByGender />
            <SortByCategory />
         </StyledFilters>

         <SortByPrice />

      </Wrapper>
   );
};

export default FiltersBar;