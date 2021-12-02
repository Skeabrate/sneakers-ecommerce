import React, { useEffect, useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import { Wrapper, StyledLoading, StyledError, StyledPlaceholder, StyledTitle, StyledTitleWrapper, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory, StyledLink } from './AllProducts.styles';
import QuickView from '../../Components/QuickView/QuickView';
import placeholder from "../../Assets/Images/placeholder.png"
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductsContext from '../../Context/productsContext';

const AllProducts = ({AllProducts}) => {
   const { productsCtx, loadingCtx } = useContext(ProductsContext)

   const [selectedProduct, setSelectedProduct] = useState(false)
   const [modalIsOpen, setIsOpen] = useState(false)
   const [loadedImg, setLoadedImg] = useState(false)

   const [error, setError] = useState(false)

   const t1 = useRef(null)
   const t2 = useRef(null)
   const contentRef = useRef(null)
   const contentTitleRef = useRef(null)
   const productsCountRef = useRef(null)
   const searchBarRef = useRef(null)

   
   useEffect(() => {
      window.scrollTo(0, 0)
      t1.current = gsap.timeline({ paused: false })

      if(t1.current) {
         t1.current
            .to(contentTitleRef.current, {
               y: 0,
               duration: .5,
            })
            .to(searchBarRef.current, {
               width: 'auto',
               duration: .5,
            }, "-=.5") 
      }
   }, [])

   useEffect(() => {
      t2.current = gsap.timeline({ paused: !loadingCtx })

      if(t1.current) {
         t1.current
            .to(productsCountRef.current, {
               opacity: 1,
               duration: .4,
            })
            .to(contentRef.current, {
               opacity: 1,
               duration: .4,
            }, "-=0.4")
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

   const handleQuickView = (e, id) => {
      e.preventDefault()
      setIsOpen(true)
      setSelectedProduct(productsCtx.find(item => item.id === id))
   }

   const handleCloseView = () => {
      setIsOpen(false)
      setSelectedProduct(false)
   }

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <StyledTitleWrapper ref={contentTitleRef}>
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
                                             <button
                                                onClick={(e) => handleQuickView(e, id)}
                                             >
                                                Quick <br /> view
                                             </button>
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

         {selectedProduct ? (
            <QuickView
               isOpen={modalIsOpen}
               onRequestClose={handleCloseView}
               selectedProduct={selectedProduct}
            />
         ) : null}
      </Wrapper>
   );
};

export default AllProducts;