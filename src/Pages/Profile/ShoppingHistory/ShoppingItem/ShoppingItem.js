import React, { useState } from 'react';
import placeholder from "../../../../Assets/Images/placeholder.png"
import {
    StyledItem,
    StyledItemTitle,
    StyledLink,
    StyledPlaceholder,
    StyledImage
} from "./ShoppingItem.styles"

const ShoppingItem = ({ item: { id, title, image, price, size, amount } }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    /* console.log(item) */

    return (
        <StyledItem>
            <StyledLink to={`/product/${id}`}>
                {!isLoaded ? (
                    <StyledPlaceholder>
                        <img src={placeholder} alt="placeholder" />
                    </StyledPlaceholder>
                ) : null}

                <StyledImage isLoaded={isLoaded}>
                    <img
                        loading="lazy"
                        alt=""
                        src={image}
                        width="840"
                        height="840"
                        onLoad={() => setIsLoaded(true)}
                    />
                    <div>
                        <p>{amount}x</p>
                        <p>${price}</p>
                        <p>size: {size}</p>
                    </div>
                </StyledImage>
            </StyledLink>

            <StyledItemTitle>{title.toUpperCase()}</StyledItemTitle>

        </StyledItem>
    );
};

export default ShoppingItem;