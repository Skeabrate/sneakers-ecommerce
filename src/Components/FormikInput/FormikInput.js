import React from 'react';
import {
   StyledFieldWrapper,
   StyledLabel,
   StyledField,
   StyledErrorSvg,
   StyledError
} from "../../GlobalStyledComponents/LoginInputsStyles"

const FormikInput = ({name, autoComplete, error, setLoadingError, errorType, isEmpty }) => {

   const [isFocused, setIsFocused] = React.useState(false)

   return (
      <StyledFieldWrapper>
         <StyledLabel isFocused={isFocused || isEmpty} htmlFor={name}>{name} *</StyledLabel>
         <StyledField
            id={name}
            name={name} 
            type={name}
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