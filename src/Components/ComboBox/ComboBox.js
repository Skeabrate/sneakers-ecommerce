import { useEffect } from 'react';
import { useSelect } from 'downshift'
import { Wrapper, StyledOptionBtn, StyledList } from "./ComboBox.styles"

const ComboBox = ({ label, items = [], isPrice, setSelectedItem, resetGender = false, setResetGender = () => {}, resetCategory = false, setResetCategory = () => {}}) => {
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
      setSelectedItem(selectedItem)
      setResetCategory(false)
      setResetGender(false)
   }, [selectedItem])

   useEffect(() => {
      if(resetCategory || resetGender) selectItem(null)
   }, [isOpen])

   return (
      <Wrapper>
         <StyledOptionBtn isOpen={isOpen} type="button" {...getToggleButtonProps()}>
            { isPrice && selectedItem ? selectedItem : label}
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