import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import { StyledError } from './ProductPage.styles';

const ProductPage = () => {
   const [product, setProduct] = useState([""])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   let { id } = useParams()

   const fetchProduct = async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com/', {
            query: `
            {
               allProducts(filter: {id: {eq: ${id}}}){
                 id
                 title
                 category
                 price
                 description
                 images {
                   url
                 }
               }
            }`,
         }, {
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
            }
         })

         if(!res.data.data.allProducts.length) setError(true)
         setProduct(res.data.data.allProducts[0])

      } catch (ex) {
         console.error(ex.response)
         setError(true)
      }

      setLoading(true)
   }

   useEffect(() => {
      fetchProduct()
   }, [])

   return (
      <div style={{marginTop: '100px'}}>
         {loading ? (
            <>
            {error ? (
               <StyledError>
                  <h1>404</h1>
                  <h2>Sorry, we couldn't find a product you are looking for :C</h2>
               </StyledError>
            ) : (
               <div>udalo sie jest produkt {id}</div>
            )}
            </>
         ) : <LoadingScreen />}
      </div>
   );
};

export default ProductPage;