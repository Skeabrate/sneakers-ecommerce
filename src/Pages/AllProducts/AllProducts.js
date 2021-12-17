import React, { useEffect, useRef, useState, useContext, useCallback } from 'react';
import gsap from 'gsap';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductsContext from '../../Context/productsContext';
import { 
   Wrapper,
   StyledLoading, 
   StyledError, 
   StyledTitle, 
   StyledTitleWrapper,
   StyledTitleInfo
} from './AllProducts.styles';
import { StyledContent } from "../../GlobalStyledComponents/StyledContent"
import ProductItem from '../../Components/ProductItem/ProductItem';
import Pagination from '../../Components/Pagination/Pagination';

const AllProducts = ({AllProducts}) => {
   const { productsCtx, loadingCtx, setLoadingCtx } = useContext(ProductsContext)
   const [error, setError] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
   const [ postPerPage ] = useState(12)

   const indexOfLastPost = currentPage * postPerPage
   const indexOfFirstPost = indexOfLastPost - postPerPage
   const currentPosts = productsCtx.slice(indexOfFirstPost, indexOfLastPost)

   const tl = useRef(null)
   const contentRef = useRef(null)
   const contentLengthRef = useRef(null)
   const searchBarRef = useRef(null)

   const paginate = useCallback((item) => {
      setLoadingCtx(false)
      setTimeout(() => {
         setLoadingCtx(true) 
      }, 100)

      setCurrentPage(item)
      window.scrollTo({
         top: 0, 
         left: 0,
      })
   }, [setLoadingCtx])

   useEffect(() => {
      tl.current = gsap.timeline({ paused: !loadingCtx })

      if(tl.current) {
         tl.current
            .to(contentLengthRef.current, {
               opacity: 1,
               duration: .6,
            }, "+=0.2s")
            .to(contentRef.current, {
               opacity: 1,
               duration: .6,
            }, "-=0.6s")
            .to(searchBarRef.current, {
               width: 'auto',
               duration: .6,
            }) 
      }
   }, [loadingCtx])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               <StyledTitleWrapper>
                  <h1>ALL PRODUCTS</h1>
                  {loadingCtx ? (
                     <StyledTitleInfo ref={contentLengthRef}>
                        <span>[ {error ? '0' : productsCtx.length} ]</span> 
                        <div>Page : <p>{currentPage}</p></div>
                     </StyledTitleInfo>
                  ) : null}
               </StyledTitleWrapper>

               <SearchBar ref={searchBarRef} />
            </StyledTitle>

            {productsCtx.length ? (
               <FiltersBar setError={setError} AllProducts={AllProducts} paginate={() => paginate(1)}/>
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
                     <div>
                        <StyledContent ref={contentRef}>
                           {currentPosts.map(
                              ({ id, images = [], price, title, category }, props) => (
                                 <ProductItem
                                    key={id}
                                    id={id}
                                    image={images[0].url}
                                    price={price}
                                    title={title}
                                    category={category}
                                 />
                              )
                           )}
                        </StyledContent>
                        <Pagination 
                           postsPerPage={postPerPage} 
                           totalPosts={productsCtx.length} 
                           paginate={paginate}
                           currentPage={currentPage}
                        />
                     </div>
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