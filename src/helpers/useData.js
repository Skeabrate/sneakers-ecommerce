import React, { useState, useEffect } from 'react';
import axios from 'axios';

const query = `
{
   allProducts{
     id
     title
     category
     price
     description
     images{
       url
     }
   }
 }`

export const useData = () => {
   const [data, setData] = useState([])

   const fetchData = async () => {
      try{
         const res = await axios.post('https://graphql.datocms.com', {
            query: query
         }, {
            headers: {
               authorization: `Bearer ${process.env.REACT_APP_DATOCMS}`,
            }
         })

         setData(res.data.data.allProducts)
      } catch (ex) {
         console.log(ex.response)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   return {
      data
   }
};