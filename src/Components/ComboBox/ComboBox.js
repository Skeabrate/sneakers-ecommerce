import { useEffect } from 'react';
import { useSelect } from 'downshift'
import { Wrapper, StyledOptionBtn, StyledList } from "./ComboBox.styles"

const ComboBox = ({ label, items = [], isPrice, option, filter, setFilters }) => {
   const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
      selectItem
   } = useSelect({ items })

   useEffect(() => {
      if(selectedItem){
         setFilters("isActive", true)
         setFilters(option, selectedItem)
      }
   }, [selectedItem]) // eslint-disable-line react-hooks/exhaustive-deps

   useEffect(() => {
      if(isOpen){
         if(!filter) selectItem(null)
      }
   }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <Wrapper>
         <StyledOptionBtn isOpen={isOpen} type="button" {...getToggleButtonProps()}>
            { isPrice && option ? option : label}
            <span isOpen={isOpen}>&#9660;</span>
         </StyledOptionBtn>

         <StyledList 
            isPrice={isPrice}
            isOpen={isOpen} 
            {...getMenuProps()}
         >
            {isOpen &&
            items.map((item, index) => (
               <li
                  isOpen={isOpen}
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