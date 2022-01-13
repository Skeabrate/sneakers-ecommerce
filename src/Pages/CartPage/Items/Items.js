import React from 'react';
import {
    Wrapper,
    StyledEnding,
} from "./Items.styles"
import CartItem from "./CartItem/CartItem"

const Items = ({ length, cart }) => {
    return (
        <Wrapper>
            {length ? (
                <>
                    {cart.map((item, index) => (
                        <CartItem 
                            item={item} 
                            key={index} 
                        />
                    ))}

                    <StyledEnding />
                </>
            ) : <h3>Your bag is empty</h3>}
            
        </Wrapper>
    );
};

export default Items;