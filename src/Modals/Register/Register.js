import React, { useContext, useReducer } from 'react';
import ModalsContext from "../../Context/ModalsContext"
import CustomInput from "../../Components/CustomInput/CustomInput"
import { registerReducer } from "./Reducer/registerReducer"
import { initialState } from "./Reducer/initialState"
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import { useAuth } from '../../hooks/useAuth';
import { usePathChange } from '../../hooks/usePathChange';
import ModalTemplate from '../ModalTemplate/ModalTemplate'

const Register = () => {
   const [state, dispatch] = useReducer(registerReducer, initialState)

   const { isRegisterOpen, setIsRegisterOpen } = useContext(ModalsContext)
   const { isInfoOpen, setIsInfoOpen } = useContext(ModalsContext)

   const { loading, registerHandler } = useAuth()

   usePathChange(() => setIsRegisterOpen(false))

   const reducerActionHandler = (type, field, value) => dispatch({ type: type, field: field, value: value, })

   const loadingErrorHandler = () => isInfoOpen.info && setIsInfoOpen((state) => ({
      ...state,
      info: false,
   }))

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
      <ModalTemplate 
         label="sign up" 
         isModalOpen={isRegisterOpen} 
         setIsModalOpen={() => setIsRegisterOpen(false)}
      >

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
               setLoadingError={loadingErrorHandler}
               isRegister
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
               setLoadingError={loadingErrorHandler}
               isRegister
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
               setLoadingError={loadingErrorHandler}
               isRegister
            />

            <LoadingButton isBlack disabled={isInfoOpen.info} loading={loading} label="Sign Up For Free" />
         </form>
      </ModalTemplate>
   ); 
};

export default Register;