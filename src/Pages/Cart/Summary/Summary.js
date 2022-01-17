import React, { useState, useContext } from 'react';
import StyledButton from '../../../GlobalStyledComponents/StyledButton';
import {
    Wrapper,
    StyledSVG,
    StyledSectionItem,
    StyledTotal,
    StyledGiftCode
} from "./Summary.styles"
import { useInfoOpen } from "../../../hooks/useInfoOpen"
import { ADD_DISCOUNT } from '../../../helpers/serverResponse';
import ModalsContext from '../../../Context/ModalsContext';

const Summary = ({ totalAmount }) => {
    const [giftCode, setGiftCode] = useState("")
    const [comment, setComment] = useState("")
    const [codeValue, setCodeValue] = useState(0)

    const { setIsPaymentOpen } = useContext(ModalsContext)

    const handleSetInfo = useInfoOpen()

    const checkGiftCode = () => {
        if(giftCode.toLowerCase() === "skeabrate" && !codeValue){
            handleSetInfo(ADD_DISCOUNT, true)
            setCodeValue(20)
        }
    }

    let delivery = 20

    let noDiscountValue = totalAmount + delivery
    let discountValue = (totalAmount + delivery) * (100 - codeValue) / 100

    return (
        <Wrapper>
            <header>
                <h2 style={{marginBottom: '30px', fontStyle: 'italic'}}>SUMMARY</h2>
            </header>

            <details>
                <summary>
                    <h3>
                        Do you have a promo code?
                        <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"/></StyledSVG>
                    </h3>
                </summary>
                <div>
                    <input 
                        id="giftCode"
                        name="giftCode"
                        type="text"
                        maxLength="20"
                        value={giftCode}
                        onChange={(e) => setGiftCode(e.currentTarget.value)}
                        onBlur={checkGiftCode}
                    />
                </div>
            </details>

            <details>
                <summary>
                    <h3>
                        Add a note
                        <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"/></StyledSVG>
                    </h3>
                </summary>

                <div>
                    <textarea 
                        id="comment"
                        name="comment"
                        type="text"
                        maxLength="200"
                        value={comment}
                        onChange={(e) => setComment(e.currentTarget.value)}
                    />
                </div>
            </details>

            <article>
                <StyledSectionItem>
                    <p style={{ fontStyle: 'italic' }}>Subtotal</p>
                    <p>$<strong>{totalAmount}</strong></p>
                </StyledSectionItem>

                <StyledSectionItem>
                    <p style={{ fontStyle: 'italic' }}>Estimated Delivery</p>
                    <p><strong>${delivery}</strong></p>
                </StyledSectionItem>

                <StyledSectionItem>
                    <p style={{ fontStyle: 'italic' }}>*Gift Code</p>
                    <StyledGiftCode><strong>{codeValue ? `${codeValue}%` : '-'}</strong></StyledGiftCode>
                </StyledSectionItem>    
            </article>

            <footer>
                <StyledTotal>
                    <h2 style={{ fontStyle: 'italic' }}>Order Total</h2>
                    <h2>${codeValue ? discountValue : noDiscountValue }</h2>
                </StyledTotal>

                <StyledButton 
                    label="Checkout" 
                    isCheckout 
                    actionHandler={() => setIsPaymentOpen(true)}
                />
            </footer>
        </Wrapper>
    );
};

export default Summary;