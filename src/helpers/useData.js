import { useState, useEffect } from 'react';
import axios from 'axios';

export const useData = () => {
   const [data, setData] = useState(false)
   const [products, setProducts] = useState([])
   const [limit, setLimit] = useState(100)
   const [loading, setLoading] = useState(false)
   
   const queryVal = `
   {
      allProducts(first: ${limit}, skip: 0){
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
   }`

   const fetchData = async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com/', {
            query: queryVal,
         }, {
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
            }
         })

         const arr = []

         for(const key in res.data.data.allProducts){
            arr.push({...res.data.data.allProducts[key], isLoaded: false})
         }
         setData(res.data.data)
         setProducts(arr)

      } catch (ex) {
         console.log(ex.response)
      }

      setLoading(true)
   }
   useEffect(() => {
      fetchData()
      setLimit(limit + 10)
   }, [])


   useEffect(() => {
      if(data){
         if(data.allProducts.length < data._allProductsMeta.count){
            setLimit(limit + 100)
            fetchData()
         }      
      }
   }, [data])

   return [products, loading]
};
