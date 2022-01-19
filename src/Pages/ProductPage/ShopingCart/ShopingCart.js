import React, { useRef, useState, useEffect } from 'react';
import AddingSection from '../../../Components/AddingSection/AddingSection';
import { sizes } from '../../../data/sizes'
import gsap from "gsap"
import { 
   StyledInfo, 
   StyledInfoItem, 
   StyledPrice, 
   StyledSizesWrapper, 
   StyledSize, 
   StyledCategory,
   StyledTitle, 
   StyledShopp,
   StyledSizesAndInfo,
   TitlePlaceholder,
   StyledError,
   StyledSizeAndError } from "./ShopingCart.styles"
   import { useStickyTwo } from "../../../hooks/useStickyTwo"

const ShopingCart = ({ product, loading, isDesktop, isMobile }) => {
   const [size, setSize] = useState(false)
   const [error, setError] = useState(false)
   const [isClicked, setIsClicked] = useState(false)

   const t1 = useRef(null)

   const productInfoRef = useRef(null)
   const shopRef = useRef(null)
   const end = useRef(null)

   const position = useStickyTwo(shopRef, end)

   useEffect(() => {
      t1.current = gsap.timeline({ paused: !loading })

      if(t1.current){
         t1.current
            .to(productInfoRef.current, {
               opacity: 1,
               scale: 1,
               duration: .6,
            })
      }
   }, [loading])

   return (
      <StyledShopp ref={shopRef} position={position} isDesktop={isDesktop} isMobile={isMobile}>
         <div style={{ padding: '2.5vw' }}>
            {loading ? (
               <div style={{opacity: '0', transform: 'scale(0.95)'}} ref={productInfoRef}>
                  <StyledCategory>
                     {product.gender} / {product.category}
                     <div>
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/></svg>
                        </span>
                        105
                     </div>
                  </StyledCategory>
                  
                  <StyledTitle>{product.title}</StyledTitle>

                  <StyledPrice>${product.price}</StyledPrice>
               </div>
            ) : <TitlePlaceholder></TitlePlaceholder>}

            <StyledSizesAndInfo>

               <StyledSizeAndError isClicked={isClicked}>
                  <h3>Select size</h3>
                  <StyledSizesWrapper>
                     {sizes.map(item => (
                        <StyledSize key={item} isSize={size === item}>
                           <button onClick={() => {
                              setSize(item)
                              setError(false)
                           }}>
                              {item}
                           </button>
                        </StyledSize>

                     ))}
                  </StyledSizesWrapper>
                  {error ? <StyledError>Please select your size !</StyledError> : null}
               </StyledSizeAndError>

               <StyledInfo>
                  <StyledInfoItem first>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z" /></svg>
                     <div>
                        Free pick up in store:
                        <p>
                           Tue Nov 30 - Thu Dec 02
                        </p>
                     </div>
                  </StyledInfoItem>

                  <StyledInfoItem>
                     <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M5 11v1h8v-7h-10v-1c0-.552.448-1 1-1h10c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-4c0 1.656-1.344 3-3 3s-3-1.344-3-3h-1c-.552 0-1-.448-1-1v-6h-2v-2h7v2h-3zm3 5.8c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm10 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-10v2h.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h5.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm1-5v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705zm-16-3h8v2h-8v-2z" /></svg>
                     JOIN CREATORS CLUB TO GET UNLIMITED FREE STANDARD SHIPPING, RETURNS & EXCHANGES
                  </StyledInfoItem>
               </StyledInfo>

            </StyledSizesAndInfo>

            <AddingSection // includes Add to favourite button
               size={size} 
               product={product} 
               setError={setError}
               isClicked={isClicked}
               setIsClicked={setIsClicked}
               loading={loading}
            />
         </div>
         
         {isDesktop && <div style={{ position: "absolute", bottom: '0', height: '100vh', width: '100%', zIndex: '-1' }} ref={end} />}  
      </StyledShopp>
   );
};

export default ShopingCart;