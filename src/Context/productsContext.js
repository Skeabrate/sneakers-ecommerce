import React from 'react'

const ProductsContext = React.createContext({
   productsCtx: [],
   setProductsCtx: () => {},
   setLoadingCtx: () => {},
})

export default ProductsContext