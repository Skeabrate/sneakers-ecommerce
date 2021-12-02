import { useState, useEffect } from 'react';
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

   const fetchProducts = async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com/', {
            query: queryVal,
         }, {
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
            }
         })

         const arr = []
         console.log('fetching data')
         for(const key in res.data.data.allProducts){
            arr.push({...res.data.data.allProducts[key], isLoaded: false})
         }
         setProducts(arr)
      } catch (ex) {
         console.log(ex.response)
      }
      setLoading(true)
   }

   useEffect(() => {
      const fetchDataCount = async () => {
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
      }

      fetchDataCount()
   }, [])

   useEffect(() => {
      if(dataCount) fetchProducts()
   }, [dataCount])


   return [products, loading, setLoading, setProducts]
};
