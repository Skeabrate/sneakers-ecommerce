import { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductsContext from "../Context/ProductsContext"

export const useProductID = () => {
   const [product, setProduct] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   const { productsCtx } = useContext(ProductsContext)
   let { id } = useParams()

   let findProduct = useMemo(() => productsCtx.find((item) => item.id === id), [id])

   const fetchProduct = useCallback(async () => {
      if(findProduct) {
         setProduct(findProduct) 
         setLoading(true)
      }
      else {
         try{
            const res = await axios.post('https://graphql.datocms.com/', {
               query: `
               {
                  allProducts(filter: {id: {eq: ${id}}}){
                     id
                     title
                     category
                     gender
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
   }, [id])

   useEffect(() => {
      fetchProduct()
   }, [fetchProduct])

   return [product, loading, error]
};