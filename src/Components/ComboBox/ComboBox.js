import react, { useEffect } from 'react';
import { useSelect } from 'downshift'
import { Wrapper, StyledOptionBtn, StyledList } from "./ComboBox.styles"

const ComboBox = ({ label, items = [], setLoading, sortPriceDescending, sortPriceAscending, isPrice, isCategory, isGender, sortByGender }) => {
   const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
   } = useSelect({ items })

   const loadingHandler = () => {
      setLoading(false)
      setTimeout(() => {
         setLoading(true) 
      }, 200)
   }

   useEffect(() => {
      if(isPrice) {
         if(selectedItem === items[0]){
            loadingHandler()
            sortPriceDescending()
         } else if(selectedItem === items[1]){
            loadingHandler()
            sortPriceAscending()
         }
      }

      if(isCategory) {
         switch (selectedItem) {
            case items[0] :
               console.log('womens essential')
         }
      }

      if(isGender) {
         switch (selectedItem) {
            case items[0] :
               loadingHandler()
               return sortByGender(`Women's`)

            case items[1] :
               loadingHandler()
               return sortByGender(`Men's`)

            case items[2] :
               loadingHandler()
               return sortByGender('')
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