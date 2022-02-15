import { useRef, useEffect } from "react"
import { Wrapper }  from "../../GlobalStyledComponents/Wrapper"
import StyledTitle from '../../GlobalStyledComponents/StyledTitle'
import imgSrc from "../../Assets/Images/Contact2.png"
import {
   StyledContact,
   StyledImg,
   StyledDetails,
   StyledDescription
} from "./Contact.styles"
import ContactForm from './ContactForm/ContactForm';
import { useImgLoad } from "../../hooks/useImgLoad"
import Helmet from "../../helpers/Helmet"

const Contact = () => {
   const imgRef = useRef(null)

   const { isImgLoaded, handleLoadImg } = useImgLoad(imgRef.current)

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])

   return (
      <Wrapper>
         <Helmet title="Sneakers Journey - Contact" />

         <StyledContact>
            <article>
               <StyledTitle>
                  Contact us
               </StyledTitle>

               <StyledDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde et quam eveniet saepe amet facere magnam, dignissimos ex pariatur!
               </StyledDescription>

               <ContactForm />
               
            </article>

            <aside>
               <StyledImg ref={imgRef} start={isImgLoaded}>
                  <img 
                     alt="contact" 
                     src={imgSrc}
                     onLoad={handleLoadImg}
                     width="852"
                     height="866"
                  />
               </StyledImg>
            </aside>
         </StyledContact>

         <StyledDetails>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>
               <h4>VISIT US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a href=" http://maps.google.com/?q=Hollywood Hills, 3423 Action Canyon" target="_blank" rel="noopener noreferrer">Hollywood Hills, 3423 Action Canyon</a>
            </div>

            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/></svg>
               <h4>CALL US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a href="tel:'+48 123 345 678'">+48 123 345 678</a>
            </div>
            
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
               <h4>MESSAGE US</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <a href="mailto:'sneakers@email.com'">sneakers@email.com</a>
            </div>
         </StyledDetails>
      </Wrapper>
   );
};

export default Contact;