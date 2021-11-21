import React from 'react'

import { Wrapper } from "./QuickView.styles"

export default function QuickView({ selectedProduct: { title, category, price, images = [] }, handleCloseView}) {
   return (
      <Wrapper>
         <div>
            <img src={images[2].url}/>
         </div>

         <div>
            <h3>{title}</h3>
            <p>{category}</p>
            <p>${price}</p>
         </div>

         <button onClick={handleCloseView}>X</button>
      </Wrapper>
   )
}