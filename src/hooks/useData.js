import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const queryAll = `
{
   _allProductsMeta {
      count
   }
} 
`

export const useData = () => {
   const [dataCount, setDataCount] = useState(0)
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(false)
   
   const queryVal =`
   {
      allProducts(first: ${dataCount}, skip: 0){
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
      _allProductsMeta {
         count
      }
   }
   `

   const fetchProducts = useCallback(async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com/', {
            query: queryVal,
         }, {
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
            }
         })

         /* const arr = []
         console.log('fetching data')
         for(const key in res.data.data.allProducts){
            arr.push({...res.data.data.allProducts[key], isLoaded: false})
         } */
         setProducts(res.data.data.allProducts)
      } catch (ex) {
         console.log(ex.response)
      }
      setLoading(true)
   }, [queryVal])

   useEffect(() => {
      (async function() {
         try{
            const res = await axios.post('https://graphql.datocms.com/', {
               query: queryAll,
            }, {
               headers: {
                  authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
               }
            })
   
            setDataCount(res.data.data._allProductsMeta.count)
         } catch (ex) {
            console.log(ex.response)
         }
      })()

   }, [])

   useEffect(() => {
      if(dataCount) fetchProducts()
   }, [dataCount, fetchProducts])


   return [products, loading, setLoading, setProducts]
};
