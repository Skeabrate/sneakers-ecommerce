import React from 'react'

const FiltersContext = React.createContext({
   gender: '',
   category: '',
   price: '',
   term: '',
   setGender: () => {},
   setCategory: () => {},
   setPrice: () => {},
   setTerm: () => {},
})

export default FiltersContext