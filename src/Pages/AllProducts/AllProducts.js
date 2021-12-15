import React, { useEffect, useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import placeholder from "../../Assets/Images/placeholder.png"
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductsContext from '../../Context/productsContext';
import AddToFavouriteButton from '../../Components/AddToFavouriteButton/AddToFavouriteButton';
import { 
   Wrapper,
   StyledLoading, 
   StyledError, 
   StyledPlaceholder, 
   StyledTitle, 
   StyledTitleWrapper, 
   StyledContent, 
   StyledImage, 
   StyledItem, 
   StyledItemTitle, 
   StyledCategory, 
   StyledLink,
} from './AllProducts.styles';

const AllProducts = ({AllProducts}) => {
   const { productsCtx, loadingCtx } = useContext(ProductsContext)

   const [loadedImg, setLoadedImg] = useState(false)
   const [error, setError] = useState(false)

   const t1 = useRef(null)
   const t2 = useRef(null)
   const contentRef = useRef(null)
   const productsCountRef = useRef(null)
   const searchBarRef = useRef(null)

   
   useEffect(() => {
      window.scrollTo(0, 0)
      t1.current = gsap.timeline({ paused: false })
      if(t1.current) {
         t1.current
            .to(searchBarRef.current, {
               width: 'auto',
               duration: .6,
            }) 
      }
   }, [])

   useEffect(() => {
      t2.current = gsap.timeline({ paused: !loadingCtx })

      if(t2.current) {
         t2.current
            .to(productsCountRef.current, {
               opacity: 1,
               duration: .6,
            }, "+=0.2s")
            .to(contentRef.current, {
               opacity: 1,
               duration: .6,
            }, "-=0.6s")
            
      }
   }, [loadingCtx])


   useEffect(() => {
      const arr = []
      for(const key in productsCtx){
         arr.push({id: productsCtx[key].id, isLoaded: productsCtx[key].isLoaded,})
      }
      setLoadedImg(arr)
   }, [productsCtx])

   const handleChangeLoad = (index) => setLoadedImg({...loadedImg, [index]: {...loadedImg[index], isLoaded: true}})

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <StyledTitleWrapper>
                  <h1>All Products</h1>
                  {loadingCtx ? <span ref={productsCountRef}>[ {error ? '0' : productsCtx.length} ]</span> : null}
               </StyledTitleWrapper>

               <SearchBar ref={searchBarRef} />
            </StyledTitle>

            {productsCtx.length ? (
               <FiltersBar setError={setError} AllProducts={AllProducts} />
            ) : <div style={{height: '118px', width: '100%'}}></div>} {/* placeholder dla filtrow*/}
         </header>

         <article>
            {loadingCtx ? (
               <>
                  {error ? (
                     <StyledError>
                        <h1>Nothing was found! :C</h1>
                     </StyledError>
                  ) : (
                     <StyledContent ref={contentRef}>
                        {productsCtx.map(
                           ({ id, images = [], price, title, category }, props) => (
                              <StyledItem key={id}>
                                 <StyledLink to={`/product/${id}`}>
                                    {loadedImg[props] ? (
                                       <>
                                          {!loadedImg[props].isLoaded ? (
                                             <StyledPlaceholder>
                                                <img src={placeholder} alt="placeholder" />
                                             </StyledPlaceholder>
                                          ) : null}

                                          <StyledImage
                                             isLoaded={loadedImg[props].isLoaded}
                                          >
                                             <img
                                                loading="lazy"
                                                alt=""
                                                src={images[0].url}
                                                width="840"
                                                height="840"
                                                onLoad={() => handleChangeLoad(props)}
                                             />
                                             <div>${price}</div>
                                             
                                             <AddToFavouriteButton 
                                                id={id}
                                                title={title}
                                                price={price}
                                                image={images[0].url}
                                             />
                                          </StyledImage>
                                       </>
                                    ) : null}
                                 </StyledLink>

                                 <StyledItemTitle>{title.toUpperCase()}</StyledItemTitle>
                                 <StyledCategory>{category}</StyledCategory>
                              </StyledItem>
                           )
                        )}
                     </StyledContent>
                  )}
               </>
            ) : (
               <StyledLoading>
                  <LoadingScreen />
               </StyledLoading>
            )}
         </article>
      </Wrapper>
   );
};

export default AllProducts;