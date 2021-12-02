import React from 'react'

const ProductsContext = React.createContext({
   productsCtx: [],
   setProductsCtx: () => {},
   loadingCtx: false,
   setLoadingCtx: () => {},
})

export default ProductsContext