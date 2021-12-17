import React, { useState, useEffect } from 'react';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle'
import { Wrapper } from "../../GlobalStyledComponents/Wrapper"
import {
   StyledForm,
   StyledLabel,
   StyledInput,
} from "./Login.styles"
import { StyledLink } from "../../GlobalStyledComponents/StyledAccountButton"

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isFocused, setIsFocused] = useState({
      email: false,
      password: false,
   })
   const [error, setError] = useState({
      email: false,
      password: false,
   })

   const handleSubmit = (e) => {
      e.preventDefault();
   }

   useEffect(() => {
      if(!password.length && !isFocused.password) setError({password: true})
      else setError({password: false})
   }, [password, isFocused])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               LOG IN
            </StyledTitle>
         </header>

         <article>
            <StyledForm onSubmit={handleSubmit}>
               <div>
                  <StyledLabel isFocused={isFocused.email || email.length} for="email">E-Mail *</StyledLabel>
                  <StyledInput
                     id="email"
                     type="email"
                     autoComplete="username"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} 
                     onFocus={() => setIsFocused({email: true})}
                     onBlur={() => setIsFocused({email: false})}
                     error={error.email}
                  />
               </div>

               <div>
                  <StyledLabel isFocused={isFocused.password || password.length} for="password">Password *</StyledLabel>
                  <StyledInput 
                     id="password"
                     type="password"
                     autoComplete="current-password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} 
                     onFocus={() => setIsFocused({password: true})}
                     onBlur={() => setIsFocused({password: false})}
                     error={error.password}
                  />
               </div>

               <StyledLink as="button" isLogin>Log In</StyledLink>
            </StyledForm>

         </article>
      </Wrapper>
   );
};

export default Login;