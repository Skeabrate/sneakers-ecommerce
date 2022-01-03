import React, { useState, useContext } from 'react';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle'
import { Wrapper } from "../../GlobalStyledComponents/Wrapper"
import {
   StyledForm,
   StyledCheckbox,
   StyledCustomInput,
   StyledRegister,
   StyledRegisterTitle,
   StyledSectionWrapper,
   StyledList,
   StyledListItem,
   StyledClubImg,
   StyledSocialButton
} from "./Login.styles"
import { StyledLink } from "../../GlobalStyledComponents/StyledAccountButton"
import { Formik } from "formik"
import * as Yup from "yup"
import FormikInput from '../../Components/FormikInput/FormikInput';
import clubImg from "../../Assets/Images/SneakersClub.jpg"
import { ModalsContext } from "../../Context/ModalsContext"

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('The email address is invalid.').required('Required'),
   password: Yup.string()
     .min(7, 'The password is too short.')
     .max(50)
     .required('Required'),
});

const Login = () => {
   const [isCheckboxFocused, setIsCheckboxFocused] = useState(false)
   const [checkboxValue, setCheckboxValue] = useState(false)

   const { setIsRegisterOpen } = useContext(ModalsContext)

   const initialValues = {
      email: '',
      password: '',
   }

   return (
      <Wrapper>
         <StyledSectionWrapper>
         <article>
               <header>
                  <StyledTitle>
                     LOG IN
                     <p>
                        Forgot Your Password?
                     </p>
                  </StyledTitle>
               </header>

               <Formik
                  initialValues={initialValues}
                  validationSchema={SignupSchema}
                  onSubmit={values => {
                     console.log(values.email, values.password);
                  }}
               >
                  {({ errors, touched, values }) => (
                     <StyledForm>
                        <FormikInput
                           name="email"
                           autoComplete="username"
                           error={errors.email && touched.email}
                           errorType={errors.email}
                           isEmpty={values.email.length}
                        />

                        <FormikInput
                           name="password"
                           autoComplete="current-password"
                           error={errors.password && touched.password}
                           errorType={errors.password}
                           isEmpty={values.password.length}
                        />

                        <StyledCheckbox>
                           <input 
                              type="checkbox" 
                              name="loggedIn" 
                              value={checkboxValue} 
                              onChange={() => setCheckboxValue(!checkboxValue)}
                              onFocus={() => setIsCheckboxFocused(true)}
                              onBlur={() => setIsCheckboxFocused(false)}
                           />
                           <StyledCustomInput value={checkboxValue} isFocused={isCheckboxFocused}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                           </StyledCustomInput>
                           <label htmlFor="loggedIn">Keep me logged in.</label>
                        </StyledCheckbox>
   
                        <StyledLink isLogin as="button" type="submit">Log In</StyledLink>

                        <p style={{marginBlock: '20px'}}>OR</p>

                        <StyledSocialButton>Facebook<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1877F2" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg></StyledSocialButton>
                        <StyledSocialButton>Google <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/></g></svg></StyledSocialButton>
                     </StyledForm>
                  )}
               </Formik>
            </article>

            <article>
               <header>
                  <StyledTitle>JOIN THE CLUB. GET REWARDED.</StyledTitle>
               </header>
                  
               <div>
                  <p>Join the sneakers Creators Club membership program:</p>
                  
                  <StyledList>
                     <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Lorem ipsum dolor sit amet, consectetur adipiscing</StyledListItem>
                     <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Consectetur ipsum dolor sit amet, lorem adipiscing</StyledListItem>
                     <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Adipiscing ipsum dolor sit amet, consectetur lorem</StyledListItem>
                     <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Amet ipsum dolor sit lorem, consectetur adipiscing</StyledListItem>
                  </StyledList>

                  <p>Join now and start earning points to access new levels and rewards. It's time to unlock the best of sneakers.</p>
               </div>

               <StyledClubImg 
                  src={clubImg} 
                  alt="sneakers club"
                  loading="lazy"
               />

            </article>
         </StyledSectionWrapper>

         <article>
            <StyledRegister>
               <StyledRegisterTitle>JOIN OUR SNEAKERS CLUB & GET 10% OFF</StyledRegisterTitle>
               <StyledLink as="button" onClick={() => setIsRegisterOpen(true)}>Register</StyledLink>
            </StyledRegister>
         </article>
      </Wrapper>
   );
};

export default Login;