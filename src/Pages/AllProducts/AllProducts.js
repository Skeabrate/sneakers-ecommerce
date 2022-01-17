import React, { useEffect, useRef, useState, useContext } from 'react';
import gsap from 'gsap';
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen';
import FiltersBar from './FiltersBar/FiltersBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import ProductsContext from '../../Context/ProductsContext';
import { 
   StyledLoading, 
   StyledError, 
   StyledTitle, 
   StyledTitleWrapper,
   StyledTitleInfo
} from './AllProducts.styles';
import { Wrapper } from "../../GlobalStyledComponents/Wrapper"
import { StyledContent } from "../../GlobalStyledComponents/StyledContent"
import ProductItem from '../../Components/ProductItem/ProductItem';
import Pagination from '../../Components/Pagination/Pagination';

const AllProducts = ({ AllProducts }) => {
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

   const scrollFunc = (type = "auto") => window.scrollTo({
      top: 0, 
      left: 0,
      behavior: type,
   })

   const paginate = (item, func = () => {}) => {
      if(func) {
         setLoadingCtx(false)
         setTimeout(() => {
            func()
            setLoadingCtx(true) 
         }, 100)
   
         setCurrentPage(item)
         scrollFunc()
      } else {
         if(currentPage !== item){
            setLoadingCtx(false)
            setTimeout(() => {
               setLoadingCtx(true) 
            }, 100)
      
            setCurrentPage(item)
            scrollFunc()
         } else scrollFunc("smooth")
      }
   }

   useEffect(() => {
      if(AllProducts.length){
         if(!productsCtx.length) setError(true)
         else setError(false)
      }
   }, [productsCtx]) // eslint-disable-line react-hooks/exhaustive-deps

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
                        <div>Page : <p>{currentPage} / {Math.ceil(productsCtx.length / postPerPage)}</p></div>
                     </StyledTitleInfo>
                  ) : null}
               </StyledTitleWrapper>

               <SearchBar ref={searchBarRef} />
            </StyledTitle>
            
         </header>
            <FiltersBar setError={setError} AllProducts={AllProducts} paginate={paginate}/>

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
                              ({ id, images = [], price, title, category, gender }, props) => (
                                 <ProductItem
                                    key={id}
                                    id={id}
                                    image={images[0].url}
                                    price={price}
                                    title={title}
                                    category={category}
                                    gender={gender}
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