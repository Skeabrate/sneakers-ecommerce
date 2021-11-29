import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Wrapper, StyledLoading, StyledError, StyledPlaceholder, StyledTitle, StyledTitleWrapper, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory, StyledLink } from './AllProducts.styles';
import QuickView from '../../Components/QuickView/QuickView';
import placeholder from "../../Assets/Images/placeholder.png"
import { useData } from '../../hooks/useData';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import ProductsContext from '../../Context/productsContext';
import SearchBar from '../../Components/SearchBar/SearchBar';

const AllProducts = () => {
   const [selectedProduct, setSelectedProduct] = useState(false)
   const [modalIsOpen, setIsOpen] = useState(false)
   const [loadedImg, setLoadedImg] = useState(false)

   const [term, setTerm] = useState(false)
   const [error, setError] = useState(false)

   const [products, loading, setLoading, setProducts] = useData()


   const t1 = useRef(null)
   const t2 = useRef(null)
   const contentRef = useRef(null)
   const contentTitleRef = useRef(null)
   const searchBarRef = useRef(null)

   
   useEffect(() => {
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
      t2.current = gsap.timeline({ paused: !loading })

      if(t1.current) {
         t1.current
            .to(contentRef.current, {
               opacity: 1,
               duration: .4,
            }) 
      }
   }, [loading])


   useEffect(() => {
      const arr = []
      for(const key in products){
         arr.push({id: products[key].id, isLoaded: products[key].isLoaded,})
      }
      setLoadedImg(arr)
   }, [products])

   const handleChangeLoad = (index) => setLoadedImg({...loadedImg, [index]: {...loadedImg[index], isLoaded: true}})

   const handleQuickView = (e, id) => {
      e.preventDefault()
      setIsOpen(true)
      setSelectedProduct(products.find(item => item.id === id))
   }

   const handleCloseView = () => {
      setIsOpen(false)
      setSelectedProduct(false)
   }

   return (
      <Wrapper>
         <ProductsContext.Provider
            value={{
               productsCtx: products,
               setProductsCtx: setProducts,
               setLoadingCtx: setLoading,
            }}
         >
            <header>
               <StyledTitle>
                  <StyledTitleWrapper ref={contentTitleRef}>
                     <h1>All Products</h1>
                     {loading ? <span>[ {error ? '0' : products.length} ]</span> : null}
                  </StyledTitleWrapper>

                  <SearchBar ref={searchBarRef} term={term} setTerm={setTerm} />
               </StyledTitle>

               {products.length > 0 ? (
                  <FiltersBar term={term} setTerm={setTerm} setError={setError} />
               ) : null}
            </header>

            <article>
               {loading ? (
                  <>
                     {error ? (
                        <StyledError>
                           <h1>Nothing was found! :C</h1>
                        </StyledError>
                     ) : (
                        <StyledContent ref={contentRef}>
                           {products.map(
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
         </ProductsContext.Provider>
      </Wrapper>
   );
};

export default AllProducts;