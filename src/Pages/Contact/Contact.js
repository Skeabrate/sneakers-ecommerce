import { useContext, useReducer, useState } from 'react';
import { Wrapper }  from "../../GlobalStyledComponents/Wrapper"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle'
import { StyledTitleOrnament } from '../../GlobalStyledComponents/StyledTitleOrnament';
import {
   StyledContact,
   StyledImg,
   StyledDetails,
   StyledTextarea,
   StyledLabel
} from "./Contact.styles"
import ModalsContext from "../../Context/ModalsContext"
import imgSrc from "../../Assets/Images/Contact2.png"
import CustomInput from '../../Components/CustomInput/CustomInput';
import LoadingButton from "../../Components/LoadingButton/LoadingButton"
import { reducer } from "./Reducer/reducer"
import { initialState } from "./Reducer/initialState"

const Contact = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
   const [loading, setLoading] = useState(false)

   const { isInfoOpen, setIsInfoOpen } = useContext(ModalsContext)

   const reducerActionHandler = (type, field, value) => dispatch({ type: type, field: field, value: value, })

   const loadingErrorHandler = () => isInfoOpen.info && setIsInfoOpen((state) => ({
      ...state,
      info: false,
   }))

   const handleSubmit = (e) => {
      e.preventDefault()

      let rules = state.name.isInvalid || !state.name.value 
               || state.email.isInvalid || !state.email.value 
               || state.message.isInvalid || !state.message.value

      if(rules) {
         if(!state.name.value) reducerActionHandler("setIsActive", "name")
         if (!state.email.value) reducerActionHandler("setIsActive", "email")
         if (!state.message.value) reducerActionHandler("setIsActive", "message")
      }
      else {
         console.log(state.name.value, state.email.value, state.message.value)
      }
   }

   return (
      <Wrapper>
         <StyledContact>
            <article>
               <StyledTitle>
                  Contact
                  <StyledTitleOrnament />
               </StyledTitle>

               <p style={{ marginBottom: '40px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et quam eveniet saepe amet facere magnam, dignissimos ex pariatur!
               </p>

               <form onSubmit={(e) => handleSubmit(e)}>
                  <CustomInput 
                     name="name"
                     value={state.name.value}
                     onChange={(e) => {
                        reducerActionHandler("setValue", "name", e.currentTarget.value)
                        reducerActionHandler("setIsInvalid", "name")
                     }}
                     setActiveError={() => !state.name.isActive && reducerActionHandler("setIsActive", "name")}
                     activeError={state.name.isActive}
                     invalidError={state.name.isInvalid}
                     setLoadingError={loadingErrorHandler}
                     isRegister
                  />

                  <CustomInput 
                     name="email"
                     autoComplete="email"
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

                  <StyledTextarea>
                     <StyledLabel isFocused={state.message.isFocused}>Message *</StyledLabel>
                     <textarea
                        value={state.message.value}
                        onChange={(e) => {
                           reducerActionHandler("setValue", "message", e.currentTarget.value)
                           reducerActionHandler("setIsInvalid", "message")
                        }}
                        maxLength="1000"
                        onFocus={() => reducerActionHandler("setIsMsgFocused", "message", true)}
                        onBlur={() => reducerActionHandler("setIsMsgFocused", "message", false)}
                     />
                  </StyledTextarea>

                  <LoadingButton isBlack disabled={isInfoOpen.info} loading={loading} label="Sign Up For Free" />
               </form>
               
            </article>

            <aside>
               <StyledImg>
                  <img alt="contact" src={imgSrc} />
               </StyledImg>
            </aside>
         </StyledContact>

         <StyledDetails>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
               <h4>VISIT US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a href="#" >Hollywood Hills, 3423 Action Canyon</a>
            </div>

            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
               <h4>CALL US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a href="#" >+48 123 345 678</a>
            </div>
            
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
               <h4>MESSAGE US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a href="#" >sneakers@email.com</a>
            </div>
         </StyledDetails>

         <footer>
            <StyledTitle>
               Find Us on Google Maps
            </StyledTitle>
         </footer>
      </Wrapper>
   );
};

export default Contact;