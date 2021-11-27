import React, { useContext } from 'react';
import ComboBox from '../../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../../Context/productsContext';

const items = ["Women's Essential", "Women's Running", "Men's Essential", "Men's Running", "Original", "All"];

const SortByCategory = () => {
   const { products, setProducts, setLoading } = useContext(ProductsContext)

   return (
      <ComboBox 
         label="category"
         items={items}
         products={products}
         isCategory
      />
   );
};

export default SortByCategory;