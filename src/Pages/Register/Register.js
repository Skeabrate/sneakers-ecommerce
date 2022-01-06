import React, { useContext, useEffect, useReducer, useState } from 'react';
import ModalBackground from '../../Components/ModalBackground/ModalBackground';
import { ModalsContext } from "../../Context/ModalsContext"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import {
   StyledContent,
   StyledCloseButton
} from "./Register.styles"
import CustomInput from "../../Components/CustomInput/CustomInput"
import { registerReducer } from "./registerReducer"
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { useAuth } from '../../hooks/useAuth';

const initialState = {
   email: {
      value: '',
      isActive: false,
      isInvalid: false,
   },
   password: {
      value: '',
      isActive: false,
      isInvalid: false,
   },
}

const Register = () => {
   const [state, dispatch] = useReducer(registerReducer, initialState)

   const { isRegisterOpen, setIsRegisterOpen } = useContext(ModalsContext)

   const { loading ,error, setError, registerHandler } = useAuth()

   const handleSubmit = (e) => {
      e.preventDefault()

      if(state.email.isInvalid || state.password.isInvalid || !state.email.value || !state.password.value) {
         if(!state.email.value) dispatch({ type: 'setIsActive', field: 'email' })
         if (!state.password.value) dispatch({type: 'setIsActive', field: 'password' })
      }
      else {
         registerHandler(state.email.value, state.password.value)
      }
   }

   useEffect(() => {
      if(state.email.value) {
         dispatch({
            type: 'setIsInvalid',
            field: 'email',
         })
      }
   }, [state.email.value])

   useEffect(() => {
      if(state.password.value) {
         dispatch({
            type: 'setIsInvalid',
            field: 'password',
         })
      }
   }, [state.password.value])

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
                  onChange={(e) => dispatch({
                     type: 'setValue',
                     field: 'email', 
                     value: e.currentTarget.value
                  })}
                  setActiveError={() => !state.email.isActive && dispatch({
                     type: 'setIsActive',
                     field: 'email',
                  })}
                  activeError={state.email.isActive}
                  invalidError={state.email.isInvalid}
                  setLoadingError={() => error && setError(false)}
                  isCustom
               />

               <CustomInput 
                  name="password"
                  autoComplete="current-password"
                  value={state.password.value}
                  onChange={(e) => dispatch({
                     type: 'setValue',
                     field: 'password', 
                     value: e.currentTarget.value
                  })}
                  setActiveError={() => !state.password.isActive && dispatch({
                     type: 'setIsActive',
                     field: 'password',
                  })}
                  activeError={state.password.isActive}
                  invalidError={state.password.isInvalid}
                  setLoadingError={() => error && setError(false)}
                  isCustom
               />

               <LoadingButton disabled={error} loading={loading} label="Sign Up For Free" />
            </form>

            {error && <ErrorMessage label={error} setError={setError} />}
            
         </StyledContent>
      </aside>
   ); 
};

export default Register;