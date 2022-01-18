import React, { useEffect, useState, useContext } from 'react';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledOrnament } from "../Profile.styles"
import {
    Wrapper,
    StyledUnderline
} from "./ShoppingHistory.styles"
import { 
    StyledSpan
} from "../Profile.styles"
import axios from "axios"
import AuthContext from '../../../Context/AuthContext';

const ShoppingHistory = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const { isAuthenticated } = useContext(AuthContext)

    const fetchProducts = async () => {
        try{
            const res = await axios.get(`https://sneakers-b80b7-default-rtdb.firebaseio.com/${isAuthenticated?.token}.json`)
            console.log(res)
        } catch(ex) {
            console.log(ex.response)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <Wrapper>
            <header>
                <StyledTitle>
                    Shopping History
                    <StyledOrnament isOrange/>
                </StyledTitle>
            </header>

            <div>
                <adricle>
                    <header>
                        <h2>
                            <StyledUnderline>ORDER NUMBER :</StyledUnderline> <StyledSpan>123123123-12312-1231-123</StyledSpan>
                        </h2>
                    </header>

                    <table>
                        <thead>
                            <tr>
                                <td><h4>DATE</h4></td>
                                <td><h4>ITEMS</h4></td>
                                <td><h4>PRICE</h4></td>
                                <td><h4>STATUS</h4></td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><h4>20.11.2021</h4></td>
                                <td><h4>9</h4></td>
                                <td><h4>$535</h4></td>
                                <td><h4>Send</h4></td>
                            </tr>

                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </adricle>
            </div>

            {/* <table>
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
            </table> */}

        </Wrapper>
    );
};

export default ShoppingHistory;