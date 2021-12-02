import React, { useState, useContext, useEffect, useCallback } from 'react';
import ComboBox from '../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../Context/productsContext';
import { Wrapper, StyledActiveFilters, StyledFiltersBar, StyledFilters } from './FiltersBar.styles'
import { sortData } from '../../../helpers/sortData';
import { genderItems, categoryItems, priceItems } from "../../../data/filters"
import StyledPhrase from './StyledPhrase';
import FiltersContext from "../../../Context/filtersContext"

const FiltersBar = ({ term, setTerm, setError, AllProducts }) => {
   const [selectedGender, setSelectedGender] = useState(false)
   const [selectedCategory, setSelectedCategory] = useState(false)
   const [selectedPrice, setSelectedPrice] = useState(false)

   const { productsCtx, setProductsCtx, setLoadingCtx } = useContext(ProductsContext)

   const loadingHandler = () => { /// odswieżenie widoku
      setLoadingCtx(false)
      setTimeout(() => {
         setLoadingCtx(true) 
      }, 100)
   }

   const unSorted = (value) => {
      return setProductsCtx(AllProducts.filter(item => item.category.includes(value)))
   }

   const sorted = (value, direction) => {
      const data = AllProducts.filter(item => item.category.includes(value))
      sortData(data, direction)
      return setProductsCtx(data)
   }

   const handleSortAll = useCallback((selectedOption) => { 
      if(selectedOption){ // Dla Women i Men
         if(selectedPrice){
            if(selectedPrice === priceItems[0]) sorted(selectedOption, "descending")
            else if(selectedPrice === priceItems[1]) sorted(selectedOption, "ascending")
         } else unSorted(selectedOption)
         loadingHandler()
      }
      if(term) {
         setTerm('')
         setError(false)
      }
   }, [selectedGender, selectedCategory])

/* --------------------------------------------------------- GENDER ------------------------------------------------ */
   useEffect(() => {
      if(selectedGender){
         handleSortAll(selectedGender)
         if(selectedCategory) {
            setSelectedCategory(false)
         }
      }
      console.log(selectedGender)
   }, [selectedGender])


/* --------------------------------------------------------- CATEGORY ------------------------------------------------ */
   useEffect(() => {
      if(selectedCategory){
         handleSortAll(selectedCategory)
         if(selectedGender) {
            setSelectedGender(false)
         }
      }
   }, [selectedCategory])


/* --------------------------------------------------------- PRICE ------------------------------------------------ */
   useEffect(() => {
      if(selectedPrice === priceItems[0]) sortData(productsCtx, "descending")  
      else if(selectedPrice === priceItems[1]) sortData(productsCtx, "ascending")
      loadingHandler()
   }, [selectedPrice])


/* --------------------------------------------------------- TERM ------------------------------------------------ */
   const searchTerm = useCallback((value) => {
      const results = AllProducts.filter(item => item.title.toUpperCase().includes(value.toUpperCase()))
      if(results.length > 0) {
         setError(false)
         
         if(selectedPrice === priceItems[0]) setProductsCtx(sortData(results, "descending"))  
         else if(selectedPrice === priceItems[1]) setProductsCtx(sortData(results, "ascending"))
         else setProductsCtx(results)

         if(selectedCategory) {
            setSelectedCategory(false)
         }
         if(selectedGender) {
            setSelectedGender(false)
         }
      }
      else {
         setError(true)

         if(selectedCategory) {
            setSelectedCategory(false)
         }
         if(selectedGender) {
            setSelectedGender(false)
         }
      }
   }, [term]) 

   useEffect(() => {
      if(term){
         searchTerm(term)
         loadingHandler()
      }
   }, [term])

/* --------------------------------------------------------- RESET ------------------------------------------------ */
   const resetHandler = () => {
      if(selectedPrice){
         if(selectedPrice === priceItems[0]) sorted('', "descending")
         else if(selectedPrice === priceItems[1]) sorted('', "ascending")
      } else unSorted('')

      if(term) setTerm('')
      if(selectedCategory) setSelectedCategory(false)
      if(selectedGender) setSelectedGender(false)

      setError(false)
      loadingHandler()
   }


   return (
      <FiltersContext.Provider value={{
         gender: selectedGender,
         category: selectedCategory,
         price: selectedPrice,
      }}>
         <Wrapper>
            <StyledFiltersBar>
               <StyledFilters>
                  <ComboBox 
                     label="gender"
                     setSelectedItem={setSelectedGender}
                     option={selectedGender}
                     items={genderItems}
                     resetHandler={resetHandler}
                  />

                  <ComboBox 
                     label="category" 
                     setSelectedItem={setSelectedCategory}
                     option={selectedCategory}
                     items={categoryItems}
                     resetHandler={resetHandler}
                  />

               </StyledFilters>

               <ComboBox
                  isPrice
                  label="sort by" 
                  setSelectedItem={setSelectedPrice}
                  items={priceItems}
               />
            </StyledFiltersBar>


            <StyledActiveFilters>
               {term ? (
                  <StyledPhrase label={term} resetHandler={resetHandler}/>
               ) : null}

               {selectedGender ? (
                  <StyledPhrase label={selectedGender} resetHandler={resetHandler}/>
               ) : null}
               
               {selectedCategory ? (
                  <StyledPhrase label={selectedCategory} resetHandler={resetHandler}/>
               ) : null}
            </StyledActiveFilters>
         </Wrapper>
      </FiltersContext.Provider>
   );
};

export default FiltersBar;