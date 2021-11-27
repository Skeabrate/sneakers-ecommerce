import React from 'react'

const ProductsContext = React.createContext({
   products: [],
   setProducts: () => {},
   setLoading: () => {},
})

export default ProductsContext