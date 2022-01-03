import React, { useContext, useState, useEffect, useReducer } from 'react';
import ModalBackground from '../../Components/ModalBackground/ModalBackground';
import { ModalsContext } from "../../Context/ModalsContext"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import {
   StyledContent,
   StyledCloseButton
} from "./Register.styles"
import CustomInput from "../../Components/CustomInput/CustomInput"
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import validateEmail from '../../helpers/validateEmail';

const initialState = {
   email: {
      value: '',
      isEmpty: '',
      isActive: false,
      isInvalid: true,
   },
   password: {
      value: '',
      isEmpty: '',
      isActive: false,
      isInvalid: true,
   },
}

function reducer(state, action) {
   switch (action.type){
      case "setValue": 
         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               value: action.value,
            }
         }

      case "setIsActive":
         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               isActive: true,
            }
         }

      case "setIsInvalid":
         return {
            ...state,
            [action.field]: {
               ...state[action.field],
               isActive: validateEmail(state.email.value),
            }
         }

      default: 
         return state
   }
}

const Register = () => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const { isRegisterOpen, setIsRegisterOpen } = useContext(ModalsContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(state.email.value, state.password.value)
   }

   useEffect(() => {
      if(state.email.value) dispatch({
         type: 'setIsInvalid',
         field: 'email',
      })
   }, [state.email.value])

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
                  isCustom
               />

               {/* <CustomInput 
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  setActiveError={() => setActiveError({ 
                     ...activeError, 
                     password: true 
                  })}
                  activeError={activeError?.password}
                  error={error?.password.isEmpty}
                  isCustom
               /> */}

               <StyledLink isLogin as="button">Sign Up For Free</StyledLink>

            </form>
            
         </StyledContent>
      </aside>
   ); 
};

export default Register;