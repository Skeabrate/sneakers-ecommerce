import React, { useEffect, useState, useContext, useCallback } from 'react';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledOrnament } from "../Profile.styles"
import { db } from "../../../firebase"
import AuthContext from '../../../Context/AuthContext';
import {
    Wrapper,
    StyledUnderline,
    StyledImages,
    StyledShoppingItem
} from "./ShoppingHistory.styles"
import { 
    StyledSpan
} from "../Profile.styles"
import ShoppingItem from "./ShoppingItem/ShoppingItem"

const ShoppingHistory = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const { isAuthenticated: { token } } = useContext(AuthContext)

    const getValue = (arr = [], option) => {
        let newArr = []
        arr.map(item => {
            switch(option){
                case "quantity":
                    return newArr.push(item.amount)

                case "price":
                    return newArr.push(item.price)

                default: 
                    return newArr
            }
        })
        return newArr.reduce((prev, curr) => prev + curr)
    }

    const fetchProducts = useCallback(() => {
        setLoading(true)

        db.collection(token)
        .onSnapshot((snapshot) => {
            setData(
                snapshot.docs.map(item => ({
                    id: item.id,
                    date: item.data().date,
                    products: item.data().products
                }))
            )
            setLoading(false) 
        })

    }, [])

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

            {loading ? <h1>Loading...</h1> : (
                <>
                    {data.map(item => (
                        <StyledShoppingItem key={item.id}>
                            <h3 style={{textTransform: 'uppercase'}}>
                                <StyledUnderline>ORDER # </StyledUnderline> <StyledSpan>{item.id}</StyledSpan>
                            </h3>

                            <table>
                                <thead>
                                    <tr>
                                        <td><h5>DATE</h5></td>
                                        <td><h5>ITEMS</h5></td>
                                        <td><h5>PRICE</h5></td>
                                        <td><h5>STATUS</h5></td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><h5 style={{ fontWeight: "normal", }}>{item.date}</h5></td>
                                        <td><h5 style={{ fontWeight: "normal", }}>{getValue(item.products, "quantity")}</h5></td>
                                        <td><h5 style={{ fontWeight: "normal", }}>${getValue(item.products, "price")}</h5></td>
                                        <td><h5 style={{ fontWeight: "normal", }}>Send</h5></td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <StyledImages>
                                {item.products.map((item, i) => (
                                    <ShoppingItem item={item} key={i}/>
                                ))}
                            </StyledImages>
                        </StyledShoppingItem>
                    ))}
                </>
            )}
        </Wrapper>
    );
};

export default ShoppingHistory;