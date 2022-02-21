import React, { useEffect, useRef, useState, useMemo } from 'react';
import StyledTitle from "../../../GlobalStyledComponents/StyledTitle"
import {
    Wrapper,
    StyledUnderline,
    StyledImages,
    StyledShoppingItem,
    StyledOrderTitle,
    LoadingConteiner,
    StyledLoadMoreContent,
} from "./ShoppingHistory.styles"
import { 
    StyledSpan,   
} from "../Profile.styles"
import ShoppingItem from "./ShoppingItem/ShoppingItem"
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen';
import gsap from "gsap"
import { useShoppingHistory } from "../../../hooks/useShoppingHistory"

const ShoppingHistory = () => {
    const [isEndOfContent, setIsEndOfContent] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const [data, loading] = useShoppingHistory()

    const postPerPage = 8
    const indexOfLastPost = currentPage * postPerPage
    const currentPosts = data.slice(0, indexOfLastPost)

    const endRef = useRef(null)
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
    
    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsEndOfContent(entry.isIntersecting)
    }

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        }
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)

        if(endRef.current && ( currentPosts.length < data.length )) observer.observe(endRef.current)
        
        return () => endRef?.current && observer.unobserve(endRef.current)
    }, [endRef.current, options])

    useEffect(() => {
        
        if(isEndOfContent){
            setTimeout(() => {
                setCurrentPage((state) => state + 1)
            }, 500)
        }
    }, [isEndOfContent])

    useEffect(() =>{
        tl.current = gsap.timeline({ paused: loading })
        
        if(tl.current){
            tl.current
                .to(itemRef.current, {
                    opacity: 1,
                    duration: .8
                })
        }
    }, [loading])

    return (
        <Wrapper>
            <header>
                <StyledTitle>
                    Shopping History
                </StyledTitle>
            </header>

            {loading ? <LoadingConteiner><LoadingScreen /></LoadingConteiner> : (
                <>
                {data.length ? (
                    <div style={{ opacity: '0' }} ref={itemRef}>
                        {currentPosts.map(({ id, date, products }, index) => (
                            <StyledShoppingItem key={id} isLast={index === currentPosts.length - 1}>
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

                        {currentPosts.length < data.length && (
                            <StyledLoadMoreContent ref={endRef}>
                                <LoadingScreen />
                            </StyledLoadMoreContent>
                        )}
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