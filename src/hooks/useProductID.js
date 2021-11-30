import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const useProductID = () => {
   const [product, setProduct] = useState([])
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

   return [product, loading, error]
};