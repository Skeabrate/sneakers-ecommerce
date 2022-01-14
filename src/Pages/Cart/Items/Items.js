import React from 'react';
import {
    StyledTable,
} from "./Items.styles"
import CartItem from "./CartItem/CartItem"

const Items = ({ cart }) => {
    return (
        <article>
            <StyledTable>
                <thead>
                    <tr>
                        <td><h2 style={{ fontStyle: 'italic' }}>Item</h2></td>
                        <td><h2 style={{ fontStyle: 'italic' }}>Quantity</h2></td>
                        <td><h2 style={{ fontStyle: 'italic' }}>Price</h2></td>
                    </tr>
                </thead>

                <tbody>
                    {cart.map((item, index) => (
                        <CartItem 
                            item={item} 
                            key={index} 
                        />
                    ))}
                </tbody>

            </StyledTable>           
        </article>
    );
};

export default Items;