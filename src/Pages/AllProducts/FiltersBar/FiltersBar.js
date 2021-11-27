import React, { useState, useContext, useEffect } from 'react';
import ComboBox from '../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../Context/productsContext';
import { Wrapper, StyledFilters } from './FiltersBar.styles'
import { useData } from "../../../helpers/useData"
import { sortData } from '../../../helpers/sortData';

const genderItems = ["Women", "Men", "All"]
const categoryItems = ["Women's Essential", "Women's Running", "Men's Essential", "Men's Running", "Original", "All"];
const priceItems =  ["Price (high - low)", "Price (low - high)"];

const FiltersBar = () => {
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
      }, 300)
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
   }

/* --------------------------------------------------------- GENDER ------------------------------------------------ */
   useEffect(() => {
      handleSortAll(selectedGender, genderItems[2])
      setResetCategory(true)

   }, [selectedGender])


/* --------------------------------------------------------- CATEGORY ------------------------------------------------ */
   useEffect(() => {
      handleSortAll(selectedCategory, categoryItems[5])
      setResetGender(true)
      
   }, [selectedCategory])


/* --------------------------------------------------------- PRICE ------------------------------------------------ */
   useEffect(() => {
      if(selectedPrice === priceItems[0]) sortData(productsCtx, "descending")  
      else if(selectedPrice === priceItems[1]) sortData(productsCtx, "ascending")
      loadingHandler()
   }, [selectedPrice])

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

      </Wrapper>
   );
};

export default FiltersBar;