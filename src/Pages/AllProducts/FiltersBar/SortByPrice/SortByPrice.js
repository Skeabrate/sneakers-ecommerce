import React, { useContext } from 'react';
import ComboBox from '../../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../../Context/productsContext';

const items = ["Price (high - low)", "Price (low - high)"];

const SortByPrice = () => {
   const { products, setProducts, setLoading } = useContext(ProductsContext)

   const sortPriceAscending = () => {
      return setProducts(products.sort((a, b) => {
         if(a.price < b.price) return -1
         if(a.price > b.price) return 1
         return 0;
      }))
   }

   const sortPriceDescending = () => {
      return setProducts(products.sort((a, b) => {
         if(a.price > b.price) return -1
         if(a.price < b.price) return 1
         return 0;
      }))
   }


   return (
      <ComboBox 
         label="sort by"
         items={items}
         setLoading={setLoading}
         sortPriceDescending={sortPriceDescending}
         sortPriceAscending={sortPriceAscending}
         isPrice
      />
   );
};

export default SortByPrice;