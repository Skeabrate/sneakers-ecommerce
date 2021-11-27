import React, { useContext } from 'react';
import ComboBox from '../../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../../Context/productsContext';

const items = ["Women", "Men", "All"]

const SortByGender = () => {
   const { products, setProducts, setLoading } = useContext(ProductsContext)

   return (
      <ComboBox 
         label="gender"
         items={items}
         products={products}
         isGender
      />
   );
};

export default SortByGender;