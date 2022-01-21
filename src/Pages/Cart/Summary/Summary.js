import React, { useState, useContext } from 'react';
import StyledButton from '../../../GlobalStyledComponents/StyledButton';
import {
    Wrapper,
    StyledSVG,
    StyledArticleItem,
    StyledTotal,
    StyledGiftCode,
    StyledArticle,
    StyledDetailsConteiner,
    StyledCheckout
} from "./Summary.styles"
import { useInfoOpen } from "../../../hooks/useInfoOpen"
import { ADD_DISCOUNT } from '../../../helpers/serverResponse';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
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
                <StyledTitle>SUMMARY</StyledTitle>
            </header>

            <StyledDetailsConteiner>
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
            </StyledDetailsConteiner>


            <StyledArticle>
                <StyledArticleItem>
                    <h3 style={{ fontWeight: "normal" }}>Subtotal</h3>
                    <h3><strong>${totalAmount}</strong></h3>
                </StyledArticleItem>

                <StyledArticleItem>
                    <h3 style={{ fontWeight: "normal" }}>
                        Estimated Delivery
                        <br />
                        25 - 30 Days
                    </h3>
                    <h3><strong>${delivery}</strong></h3>
                </StyledArticleItem>

                <StyledArticleItem>
                    <h3 style={{ fontWeight: "normal" }}>Promo Discount</h3>
                    <StyledGiftCode><strong>{codeValue ? `${codeValue}%` : '-'}</strong></StyledGiftCode>
                </StyledArticleItem>    
            </StyledArticle>

            <StyledTotal>
                <h3>Order Total</h3>
                <h3>${codeValue ? discountValue : noDiscountValue }</h3>
            </StyledTotal>

            <StyledCheckout>
                <StyledButton 
                    label="Checkout" 
                    isCheckout 
                    actionHandler={() => setIsPaymentOpen(true)}
                />
            </StyledCheckout>
        </Wrapper>
    );
};

export default Summary;