import React, { useContext } from 'react';
import ComboBox from '../../../../Components/ComboBox/ComboBox';
import ProductsContext from '../../../../Context/productsContext';
import { useData } from '../../../../helpers/useData';

const items = ["Women", "Men", "All"]

const SortByGender = () => {
   const [ products ] = useData()
   const { setProducts, setLoading } = useContext(ProductsContext)

   const sortByGender = (gender) => setProducts(products.filter(item => item.category.includes(gender)))

   return (
      <ComboBox 
         label="gender"
         items={items}
         sortByGender={sortByGender}
         setLoading={setLoading}
         isGender
      />
   );
};

export default SortByGender;