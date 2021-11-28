import React, { useState, useContext, useEffect } from 'react';
import ComboBox from '../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../Context/productsContext';
import { Wrapper, StyledFilters, StyledPhrase } from './FiltersBar.styles'
import { useData } from "../../../helpers/useData"
import { sortData } from '../../../helpers/sortData';

const genderItems = ["Women", "Men", "All"]
const categoryItems = ["Women's Essential", "Women's Running", "Men's Essential", "Men's Running", "Original", "All"];
const priceItems =  ["Price (high - low)", "Price (low - high)"];

const FiltersBar = ({ term, setTerm, setError }) => {
   const [selectedGender, setSelectedGender] = useState('')
   const [selectedCategory, setSelectedCategory] = useState('')
   const [selectedPrice, setSelectedPrice] = useState('')

   const [resetGender, setResetGender] = useState(false)
   const [resetCategory, setResetCategory] = useState(false)

   const { productsCtx, setProductsCtx, setLoadingCtx } = useContext(ProductsContext)
   const [ products ] = useData()

   const loadingHandler = () => { /// odswieżenie widoku
      setLoadingCtx(false)
      setTimeout(() => {
         setLoadingCtx(true) 
      }, 200)
   }

   const unSorted = (value) => {
      return setProductsCtx(products.filter(item => item.category.includes(value)))
   }

   const sorted = (value, direcion) => {
      const data = products.filter(item => item.category.includes(value))
      sortData(data, direcion)
      return setProductsCtx(data)
   }

   const handleSortAll = (selectedOption, items) => {
      if(selectedOption === items){ // Dla All - wszystkich produktow
         if(selectedPrice){
            if(selectedPrice === priceItems[0]) sorted('', "descending")
            else if(selectedPrice === priceItems[1]) sorted('', "ascending")
         } else unSorted('')
         loadingHandler()
      } 
      else if(selectedOption){ // Dla Women i Men
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
   }

/* --------------------------------------------------------- GENDER ------------------------------------------------ */
   useEffect(() => {
      if(selectedGender){
         handleSortAll(selectedGender, genderItems[2])
         if(selectedCategory) setResetCategory(true)
      }
   }, [selectedGender])


/* --------------------------------------------------------- CATEGORY ------------------------------------------------ */
   useEffect(() => {
      if(selectedCategory){
         handleSortAll(selectedCategory, categoryItems[5])
         if(selectedGender) setResetGender(true)
      }
   }, [selectedCategory])


/* --------------------------------------------------------- PRICE ------------------------------------------------ */
   useEffect(() => {
      if(selectedPrice === priceItems[0]) sortData(productsCtx, "descending")  
      else if(selectedPrice === priceItems[1]) sortData(productsCtx, "ascending")
      loadingHandler()
   }, [selectedPrice])


/* --------------------------------------------------------- TERM ------------------------------------------------ */
   const resetTerm = () => {
      setTerm('')
      setProductsCtx(products)
      setError(false)
      loadingHandler()
   }

   const searchTerm = (value) => {
      const results = products.filter(item => item.title.includes(value))
      if(results.length > 0) {
         setError(false)
         
         if(selectedPrice === priceItems[0]) setProductsCtx(sortData(results, "descending"))  
         else if(selectedPrice === priceItems[1]) setProductsCtx(sortData(results, "ascending"))
         else setProductsCtx(results)

         if(selectedCategory) setResetCategory(true)
         if(selectedGender) setResetGender(true)
      }
      else {
         setError(true)
         if(selectedCategory) setResetCategory(true)
         if(selectedGender) setResetGender(true)
      }
   }

   useEffect(() => {
      if(term){
         searchTerm(term.toUpperCase())
         loadingHandler()
      }
   }, [term])


   return (
      <Wrapper>
         <StyledFilters>

            <ComboBox 
               label="gender"
               setSelectedItem={setSelectedGender}
               items={genderItems}
               resetGender={resetGender} 
               setResetGender={setResetGender}
            />

            <ComboBox 
               label="category" 
               setSelectedItem={setSelectedCategory}
               items={categoryItems}
               resetCategory={resetCategory}
               setResetCategory={setResetCategory}
            />

         </StyledFilters>

         <ComboBox
            isPrice
            label="sort by" 
            setSelectedItem={setSelectedPrice}
            items={priceItems}
         />

         {term ? (
            <StyledPhrase>
               {term}
               <button onClick={resetTerm}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
               </button>
            </StyledPhrase>
         ) : null}
      </Wrapper>
   );
};

export default FiltersBar;