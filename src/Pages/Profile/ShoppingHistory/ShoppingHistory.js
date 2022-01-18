import React from 'react';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledOrnament } from "../Profile.styles"
import {
    Wrapper,
} from "./ShoppingHistory.styles"
import { StyledDetailTitle } from "../Profile.styles"

const ShoppingHistory = () => {
    return (
        <Wrapper>
            <StyledTitle>
                Shopping History
                <StyledOrnament isOrange/>
            </StyledTitle>

            <table>
                <thead>
                    <tr>
                        <td></td>
                        <td><StyledDetailTitle isOrange>DATE</StyledDetailTitle></td>
                        <td><StyledDetailTitle isOrange>ORDER ID</StyledDetailTitle></td>
                        <td><StyledDetailTitle isOrange>ITEMS</StyledDetailTitle></td>
                        <td><StyledDetailTitle isOrange>PRICE</StyledDetailTitle></td>
                        <td><StyledDetailTitle isOrange>STATUS</StyledDetailTitle></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>20.12.2020</td>
                        <td>123123 - 123123 - 1231231</td>
                        <td>10</td>
                        <td>$430</td>
                        <td>Send</td>
                    </tr>
                </tbody>
            </table>
        </Wrapper>
    );
};

export default ShoppingHistory;