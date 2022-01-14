import React from 'react';
import StyledButton from '../../../GlobalStyledComponents/StyledButton';
import {
    Wrapper,
    StyledTable,
    StyledSVG
} from "./Summary.styles"

const Summary = ({ totalAmount }) => {  

    return (
        <Wrapper>
            <header>
                <h2 style={{marginBottom: '30px', fontStyle: 'italic'}}>SUMMARY</h2>
            </header>

            <div>
                <h3 style={{
                    marginBottom: '40px', 
                    textDecoration: 'underline', 
                    fontStyle: 'italic',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '15px',
                }}>
                    Do you have a promo code?
                    <StyledSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-5v5h-4v-5h-5v-4h5v-5h4v5h5v4z"/></StyledSVG>
                </h3>
            </div>

            <section>
                <StyledTable>
                    <tr>
                        <td>Subtotal</td>
                        <td style={{ fontWeight: 'bold' }}>${[ totalAmount ]}</td>
                    </tr>

                    <tr>
                        <td>*Estimated Delivery</td>
                        <td style={{ fontWeight: 'bold' }}>$10</td>
                    </tr>

                    <tr>
                        <td>
                            <h2 style={{ 
                                fontStyle: 'italic', 
                                marginTop: '40px', 
                                marginBottom: '10px' 
                            }}>
                                Order Total
                            </h2>
                        </td>

                        <td>
                            <h2 style={{ 
                                marginTop: '40px', 
                                marginBottom: '10px' 
                            }}>
                                ${[ totalAmount ]}
                            </h2>
                        </td>
                    </tr>
                    
                </StyledTable>     
            </section>

            <footer>
                <StyledButton label="Checkout" isCheckout />
            </footer>
        </Wrapper>
    );
};

export default Summary;