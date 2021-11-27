import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Wrapper, StyledPlaceholder, StyledTitle, StyledContent, StyledImage, StyledItem, StyledItemTitle, StyledCategory, StyledLink } from './AllProducts.styles';
import QuickView from '../../Components/QuickView/QuickView';
import placeholder from "../../Assets/Images/placeholder.png"
import { useData } from '../../helpers/useData';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import ProductsContext from '../../Context/productsContext';

const AllProducts = () => {
   const [selectedProduct, setSelectedProduct] = useState(false)
   const [modalIsOpen, setIsOpen] = useState(false)
   const [loadedImg, setLoadedImg] = useState(false)

   const [products, loading, setLoading, setProducts] = useData()

   const t2 = useRef(null)
   const contentRef = useRef(null)
   const contentTitleRef = useRef(null)

   
   useEffect(() => {
      t2.current = gsap.timeline({ paused: !loading})

      if(t2.current) {
         t2.current
            .to(contentTitleRef.current, {
               y: 0,
               duration: .4,
            })
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
         <ProductsContext.Provider value={{
            productsCtx: products, 
            setProductsCtx: setProducts,
            setLoadingCtx: setLoading,
         }}>
            <header>
               <StyledTitle>
                  <div ref={contentTitleRef}>
                     All Products 
                     {products.length > 0 ? <span>[ {products.length} ]</span> : null }
                  </div>
               </StyledTitle>

               {products.length > 0 ? <FiltersBar /> : null}
            </header>

            <article>
               {loading ? (
                  <StyledContent ref={contentRef}>
                  {products.map(({id, images = [], price, title, category}, props) => (
                     
                        <StyledItem key={id}>
                           <StyledLink to={`/product/${id}`} >
                           {loadedImg[props] ? (
                              <>
                              {!loadedImg[props].isLoaded ? (
                                 <StyledPlaceholder>
                                    <img src={placeholder} alt="placeholder" />
                                 </StyledPlaceholder>
                              ) : null}

                              <StyledImage isLoaded={loadedImg[props].isLoaded}>
                                 <img
                                    loading="lazy"
                                    alt=""
                                    src={images[0].url}
                                    width="840"
                                    height="840"
                                    onLoad={() => handleChangeLoad(props)}
                                 />
                                 <div>${price}</div>
                                 <button onClick={(e) => handleQuickView(e, id)}>
                                    Quick <br /> view
                                 </button>
                              </StyledImage>
                              </>       
                           ) : null}
                           </StyledLink>

                           <StyledItemTitle>{title}</StyledItemTitle>
                           <StyledCategory>{category}</StyledCategory>
                        </StyledItem>
                     
                  ))}
               </StyledContent>

               ) : (
                  <LoadingScreen />
               )}
            </article>

            {selectedProduct ? (
               <QuickView isOpen={modalIsOpen} onRequestClose={handleCloseView} selectedProduct={selectedProduct}/>
            ) : null}
         </ProductsContext.Provider>
      </Wrapper>
   );
};

export default AllProducts;