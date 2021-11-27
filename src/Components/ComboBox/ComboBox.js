import react, { useEffect } from 'react';
import { useSelect } from 'downshift'
import { Wrapper, StyledOptionBtn, StyledList } from "./ComboBox.styles"

const ComboBox = ({ label, items = [], products, setLoading, sortPriceDescending, sortPriceAscending, isPrice, isCategory, isGender }) => {
   const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
   } = useSelect({ items })


   useEffect(() => {
      if(isPrice) {
         if(selectedItem === items[0]){
            setLoading(false)
            console.log('descending')
            sortPriceDescending(products)
            setTimeout(() => {
               setLoading(true) 
            }, 200)
   
         } else if(selectedItem === items[1]){
            setLoading(false)
            console.log('ascending')
            sortPriceAscending(products)
            setTimeout(() => {
               setLoading(true) 
            }, 200)
         }
      }

      if(isCategory) {
         switch (selectedItem) {
            case items[0] :
               console.log('womens essential')
         }
      }

   }, [selectedItem])


   return (
      <Wrapper>
         <StyledOptionBtn isOpen={isOpen} type="button" {...getToggleButtonProps()}>
            {selectedItem || label} <span isOpen={isOpen}>&#9660;</span>
         </StyledOptionBtn>

         <StyledList 
            isPrice={isPrice}
            isOpen={isOpen} 
            {...getMenuProps()}
         >
            {isOpen &&
            items.map((item, index) => (
               <li
                  style={
                  highlightedIndex === index
                     ? { backgroundColor: 'black' }
                     : {}
                  }
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
               >
                  {item}
               </li>
            ))}
         </StyledList>
      </Wrapper>
   );
};

export default ComboBox;