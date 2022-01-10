import React, { useContext, useReducer } from 'react';
import ModalBackground from '../../Components/ModalBackground/ModalBackground';
import { ModalsContext } from "../../Context/ModalsContext"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import {
   StyledContent,
   StyledCloseButton
} from "./Register.styles"
import CustomInput from "../../Components/CustomInput/CustomInput"
import { registerReducer } from "./Reducer/registerReducer"
import { initialState } from "./Reducer/initialState"
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
   const [state, dispatch] = useReducer(registerReducer, initialState)

   const { isRegisterOpen, setIsRegisterOpen } = useContext(ModalsContext)

   const { loading ,error, setError, registerHandler } = useAuth()

   const reducerActionHandler = (type, field, value) => dispatch({ type: type, field: field, value: value, })

   const handleSubmit = (e) => {
      e.preventDefault()

      let rules = state.email.isInvalid || state.password.isInvalid || !state.email.value || !state.password.value ||
      state.passwordConfirmation.isInvalid || !state.passwordConfirmation.value

      if(rules) {
         if(!state.email.value) reducerActionHandler("setIsActive", "email")
         if (!state.password.value) reducerActionHandler("setIsActive", "password")
         if (!state.passwordConfirmation.value) reducerActionHandler("setIsActive", "passwordConfirmation")
      }
      else {
         registerHandler(state.email.value, state.password.value)
      }
   }

   return (
      <aside>
         <ModalBackground isModalOpen={isRegisterOpen} setIsModalOpen={() => setIsRegisterOpen(false)} />

         <StyledContent>
            <StyledCloseButton onClick={() => setIsRegisterOpen(false)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </StyledCloseButton>

            <StyledTitle>Sign up</StyledTitle>

            <form onSubmit={(e) => handleSubmit(e)}>

               <CustomInput 
                  name="email"
                  autoComplete="username"
                  value={state.email.value}
                  onChange={(e) => {
                     reducerActionHandler("setValue", "email", e.currentTarget.value)
                     reducerActionHandler("setIsInvalid", "email")
                  }}
                  setActiveError={() => !state.email.isActive && reducerActionHandler("setIsActive", "email")}
                  activeError={state.email.isActive}
                  invalidError={state.email.isInvalid}
                  setLoadingError={() => error && setError(false)}
                  isCustom
               />

               <CustomInput 
                  name="password"
                  autoComplete="current-password"
                  value={state.password.value}
                  onChange={(e) => {
                     reducerActionHandler("setValue", "password", e.currentTarget.value)
                     reducerActionHandler("setIsInvalid", "password")
                  }}
                  setActiveError={() => !state.password.isActive && reducerActionHandler("setIsActive", "password")}
                  activeError={state.password.isActive}
                  invalidError={state.password.isInvalid}
                  setLoadingError={() => error && setError(false)}
                  isCustom
               />

               <CustomInput 
                  name="password confirmation"
                  autoComplete="current-password"
                  value={state.passwordConfirmation.value}
                  onChange={(e) => {
                     reducerActionHandler("setValue", "passwordConfirmation", e.currentTarget.value)
                     reducerActionHandler("setIsInvalid", "passwordConfirmation")
                  }}
                  setActiveError={() => !state.passwordConfirmation.isActive && reducerActionHandler("setIsActive", "passwordConfirmation")}
                  activeError={state.passwordConfirmation.isActive}
                  invalidError={state.passwordConfirmation.isInvalid}
                  setLoadingError={() => error && setError(false)}
                  isCustom
               />

               <LoadingButton isBlack disabled={error} loading={loading} label="Sign Up For Free" />
            </form>

            {error && <ErrorMessage label={error} setError={setError} />}
            
         </StyledContent>
      </aside>
   ); 
};

export default Register;