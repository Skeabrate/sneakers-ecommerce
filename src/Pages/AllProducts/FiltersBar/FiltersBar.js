import React, { useContext, useEffect, useCallback, useRef } from 'react';
import ComboBox from '../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../Context/productsContext';
import { StyledActiveFilters, StyledFiltersBar, StyledFilters } from './FiltersBar.styles'
import { sortData } from '../../../helpers/sortData';
import { genderItems, categoryItems, priceItems } from "../../../data/filters"
import StyledPhrase from './StyledPhrase';
import FiltersContext from '../../../Context/filtersContext';
import { useSticky } from "../../../hooks/useSticky"

const FiltersBar = ({ setError, AllProducts }) => {
   const { productsCtx, setProductsCtx, setLoadingCtx } = useContext(ProductsContext)
   const { gender, category, price, term, setGender, setCategory, setPrice, setTerm} = useContext(FiltersContext)

   const filtersRef = useRef(null)

   const { isSticky } = useSticky(filtersRef.current)

   const loadingHandler = () => { /// odswieżenie widoku
      setLoadingCtx(false)
      setTimeout(() => {
         setLoadingCtx(true) 
      }, 100)
   }

   const resetOption = (first = true, second = true) => {
      if(first && category) setCategory(false)
      if(second && gender) setGender(false)
   }

   const unSorted = (value) => setProductsCtx(AllProducts.filter(item => item.category.includes(value)))

   const sorted = (value, direction) => {
      const data = AllProducts.filter(item => item.category.includes(value))
      sortData(data, direction)
      return setProductsCtx(data)
   }

   const handleSortAll = useCallback((selectedOption) => { 
      if(selectedOption){ // Dla Women i Men
         if(price){
            if(price === priceItems[0]) sorted(selectedOption, "descending")
            else if(price === priceItems[1]) sorted(selectedOption, "ascending")
         } else unSorted(selectedOption)
         loadingHandler()
      }
      if(term) {
         setTerm('')
         setError(false)
      }
   }, [gender, category])

   const resetHandler = () => { // After clicking X button on filter
      if(price){
         if(price === priceItems[0]) sorted('', "descending")
         else if(price === priceItems[1]) sorted('', "ascending")
      } else unSorted('')

      if(term) setTerm('')
      resetOption()
      setError(false)
      loadingHandler()
   }

/* --------------------------------------------------------- GENDER ------------------------------------------------ */
   useEffect(() => {
      if(gender){
         handleSortAll(gender)
         resetOption(true, false)
      }
   }, [gender])

/* --------------------------------------------------------- CATEGORY ------------------------------------------------ */
   useEffect(() => {
      if(category){
         handleSortAll(category)
         resetOption(false, true)
      } 
   }, [category])

/* --------------------------------------------------------- PRICE ------------------------------------------------ */
   useEffect(() => {
      if(price === priceItems[0]) sortData(productsCtx, "descending")  
      else if(price === priceItems[1]) sortData(productsCtx, "ascending")
      loadingHandler()
   }, [price])


/* --------------------------------------------------------- TERM ------------------------------------------------ */
   useEffect(() => {
      if(term){
         const results = AllProducts.filter(item => item.title.toUpperCase().includes(term.toUpperCase()))
         if(results.length) {
            setError(false) 
            if(price === priceItems[0]) setProductsCtx(sortData(results, "descending"))  
            else if(price === priceItems[1]) setProductsCtx(sortData(results, "ascending"))
            else setProductsCtx(results)
            resetOption()
         }
         else {
            setError(true)
            resetOption()
         }
         loadingHandler()
      }
   }, [term])

   return (
      <div>
         <StyledFiltersBar isSticky={isSticky}>
            <StyledFilters>
               <ComboBox 
                  label="gender"
                  setSelectedItem={setGender}
                  option={gender}
                  items={genderItems}
               />

               <ComboBox 
                  label="category" 
                  setSelectedItem={setCategory}
                  option={category}
                  items={categoryItems}
               />
            </StyledFilters>

            <ComboBox
               isPrice
               label="sort by" 
               setSelectedItem={setPrice}
               option={price}
               items={priceItems}
            />
         </StyledFiltersBar>
         {!isSticky ? <div style={{height: '52px'}}></div> : null}

         <StyledActiveFilters>
            <div ref={filtersRef} style={{position: 'absolute', top: '-133px'}}></div>
            {term ? (
               <StyledPhrase label={term} resetHandler={resetHandler}/>
            ) : null}

            {gender ? (
               <StyledPhrase label={gender} resetHandler={resetHandler}/>
            ) : null}
            
            {category ? (
               <StyledPhrase label={category} resetHandler={resetHandler}/>
            ) : null}
         </StyledActiveFilters>
      </div>
   );
};

export default FiltersBar;