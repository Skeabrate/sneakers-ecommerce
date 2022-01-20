import React, { useEffect, useState, useContext, useCallback, useRef } from 'react';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledOrnament } from "../Profile.styles"
import { db } from "../../../firebase"
import AuthContext from '../../../Context/AuthContext';
import {
    Wrapper,
    StyledUnderline,
    StyledImages,
    StyledShoppingItem,
    StyledOrderTitle,
    LoadingConteiner
} from "./ShoppingHistory.styles"
import { 
    StyledSpan,   
} from "../Profile.styles"
import ShoppingItem from "./ShoppingItem/ShoppingItem"
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen';
import gsap from "gsap"

const ShoppingHistory = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const { isAuthenticated: { token } } = useContext(AuthContext)

    const itemRef = useRef(null)
    const tl = useRef(null)

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
        db.collection(token)
        .orderBy("dateId", "desc")
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

    useEffect(() =>{
        tl.current = gsap.timeline({ paused: loading })
        
        if(tl.current){
            tl.current
                .to(itemRef.current, {
                    opacity: 1,
                    duration: .6
                })
        }
    }, [loading])

    return (
        <Wrapper>
            <header>
                <StyledTitle>
                    Shopping History
                    <StyledOrnament isOrange />
                </StyledTitle>
            </header>

            {loading ? <LoadingConteiner><LoadingScreen /></LoadingConteiner> : (
                <>
                {data.length ? (
                    <div style={{ opacity: '0' }} ref={itemRef}>
                        {data.map(({ id, date, products }, index) => (
                            <StyledShoppingItem key={id} isLast={index === data.length - 1}>
                                <StyledOrderTitle>
                                    <StyledUnderline>ORDER # </StyledUnderline> <StyledSpan>{id}</StyledSpan>
                                </StyledOrderTitle>

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
                                            <td><h5 style={{ fontWeight: "normal", }}>{date}</h5></td>
                                            <td><h5 style={{ fontWeight: "normal", }}>{getValue(products, "quantity")}</h5></td>
                                            <td><h5 style={{ fontWeight: "normal", }}>${getValue(products, "price")}</h5></td>
                                            <td><h5 style={{ fontWeight: "normal", }}>Send</h5></td>
                                        </tr>
                                    </tbody>
                                </table>

                                <StyledImages>
                                    {products.map((item, i) => (
                                        <ShoppingItem item={item} key={i} />
                                    ))}
                                </StyledImages>
                            </StyledShoppingItem>
                        ))}
                    </div>
                ) : (
                    <h1>You don't have shopping history yet</h1>
                )}
                </>
            )}
        </Wrapper>
    );
};

export default ShoppingHistory;