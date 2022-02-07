import React, { useState } from 'react';
import {
   StyledFieldWrapper,
   StyledLabel,
   StyledField,
   StyledErrorSvg,
   StyledError,
   StyledHidePassword
} from "../../GlobalStyledComponents/LoginInputsStyles"

const FormikInput = ({name, autoComplete, error, setLoadingError, errorType, isEmpty, type }) => {
   const [isFocused, setIsFocused] = useState(false)
   const [hidePassword, setHidePassword] = useState(true)

   const inputTypeHandler = () => {
      if(name === "password"){
         if(hidePassword){
            return name
         } else return "text"
      } else return name
   }

   return (
      <StyledFieldWrapper>
         {name === "password" && (
            <StyledHidePassword onClick={() => setHidePassword(!hidePassword)}>
               {hidePassword ? (
                  <>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"/></svg>
                     show password
                  </>
               ) : (
                  <>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"/></svg>
                     hide password
                  </>
               )}
            </StyledHidePassword>
         )}
         <StyledLabel isFocused={isFocused || isEmpty} htmlFor={name}>{name} *</StyledLabel>
         <StyledField
            id={name}
            name={name} 
            type={inputTypeHandler()}
            autoComplete={autoComplete}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            error={error}
            onKeyDown={setLoadingError}
         />
         {error ? (
            <>
               <StyledErrorSvg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
               </StyledErrorSvg>
               <StyledError>{errorType ? errorType : error}</StyledError>
            </>
         ) : null}
      </StyledFieldWrapper>
   );
};

export default FormikInput;