import React from 'react';
import {
    StyledTable,
    Wrapper
} from "./Items.styles"
import CartItem from "./CartItem/CartItem"

const Items = ({ cart, length }) => {
    return (
        <Wrapper>
            {length ? (
                <div>
                    {cart.map((item, index) => (
                        <CartItem 
                            item={item} 
                            key={index} 
                        />
                    ))}
                </div>         
            ) : <h3>Your bag is empty</h3>}
        </Wrapper>
    );
};

export default Items;