import React, { useState } from 'react';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle'
import { Wrapper } from "../../GlobalStyledComponents/Wrapper"
import {
   StyledForm,
   StyledLabel,
   StyledField,
   StyledError,
   StyledFieldWrapper,
   StyledErrorSvg,
   StyledCheckbox,
   StyledCustomInput
} from "./Login.styles"
import { StyledLink } from "../../GlobalStyledComponents/StyledAccountButton"
import { Formik } from "formik"
import * as Yup from "yup"
import Input from '../../Components/Input/Input';

const SignupSchema = Yup.object().shape({
   email: Yup.string().email('The email address is invalid.').required('Required'),
   password: Yup.string()
     .min(7, 'The password is too short.')
     .max(50)
     .required('Required'),
 });

const Login = () => {
   const [isFocused, setIsFocused] = useState({
      email: false,
      password: false,
   })
   const [checkboxValue, setCheckboxValue] = useState(false)

   const initialValues = {
      email: '',
      password: '',
   }
   React.useEffect(() => {
      console.log(checkboxValue)
   }, [checkboxValue])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               LOG IN
            </StyledTitle>
         </header>

         <article>
            <Formik
               initialValues={initialValues}
               validationSchema={SignupSchema}
               onSubmit={values => {
                  console.log(values.email, values.password);
               }}
            >
               {({ errors, touched, values }) => (
                  <StyledForm>
                     <Input
                        name="email"
                        autoComplete="username"
                        focusHandler={() => setIsFocused({email: true})}
                        blurHandler={() => setIsFocused({email: false})}
                        error={errors.email && touched.email}
                        errorType={errors.email}
                        isFocused={isFocused.email || values.email.length}
                     />

                     <Input
                        name="password"
                        autoComplete="current-password"
                        focusHandler={() => setIsFocused({password: true})}
                        blurHandler={() => setIsFocused({password: false})}
                        error={errors.password && touched.password}
                        errorType={errors.password}
                        isFocused={isFocused.password || values.password.length}
                     />

                     <StyledCheckbox>
                        <input type="checkbox" name="loggedIn" value={checkboxValue} onChange={() => setCheckboxValue(!checkboxValue)} />
                        <StyledCustomInput value={checkboxValue}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg></StyledCustomInput>
                        <label htmlFor="loggedIn">Keep me logged in.</label>
                     </StyledCheckbox>
  
                     <StyledLink isLogin as="button" type="submit">Submit</StyledLink>
                  </StyledForm>
               )}
            </Formik>

         </article>
      </Wrapper>
   );
};

export default Login;