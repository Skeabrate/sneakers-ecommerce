import React, { useContext, useState } from 'react';
import ModalBackground from '../../Components/ModalBackground/ModalBackground';
import { ModalsContext } from "../../Context/ModalsContext"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import {
   StyledContent,
   StyledCloseButton
} from "./Register.styles"
import CustomInput from "../../Components/CustomInput/CustomInput"
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';

const Register = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const { isRegisterOpen, setIsRegisterOpen } = useContext(ModalsContext)

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(email, password)
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
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  isCustom
               />

               <CustomInput 
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  isCustom
               />

               <StyledLink isLogin as="button">Sign Up For Free</StyledLink>

            </form>
            
         </StyledContent>
      </aside>
   ); 
};

export default Register;