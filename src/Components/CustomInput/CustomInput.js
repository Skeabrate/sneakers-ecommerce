import React from 'react';
import {
   StyledFieldWrapper,
   StyledLabel,
   StyledField,
   StyledErrorSvg,
   StyledError
} from "../../GlobalStyledComponents/LoginInputsStyles"

const CustomInput = ({name, type, pattern, maxLength, isRegister, autoComplete, value, onChange, activeError, setActiveError, invalidError, setLoadingError }) => {

    const [isFocused, setIsFocused] = React.useState(false)

    const blurHandler = () => {
        setIsFocused(false)
        setActiveError()
    }

    return (
        <StyledFieldWrapper>
            <StyledLabel isFocused={isFocused || value} htmlFor={name}>{name} *</StyledLabel>
            <StyledField
                as="input"
                id={name}
                name={name} 
                type={type ? type : name.split(" ")[0]}
                pattern={pattern}
                maxLength={maxLength}
                autoComplete={autoComplete}
                isRegister={isRegister}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={blurHandler}
                error={activeError && (invalidError || !value)}
                onKeyDown={setLoadingError}
            />
            {activeError ? (
                <>
                {invalidError || !value ? (
                    <>
                    <StyledErrorSvg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                    </StyledErrorSvg>
                    
                    <StyledError>
                        {value ? invalidError : `The ${name === 'email' ? name + " address" : name} is required`}
                    </StyledError>
                    </>

                ) : (
                    <StyledErrorSvg isValid>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    </StyledErrorSvg>
                )}
                </>
            ) : null}
        </StyledFieldWrapper>
    );
};

export default CustomInput;