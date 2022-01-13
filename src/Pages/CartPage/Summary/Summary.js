import React, { useRef, useEffect } from 'react';
import {
    Wrapper,
} from "./Summary.styles"

const Summary = ({ totalAmount, textareaValue, setTextareaValue = () => {} }) => {
    const [top, setTop] = React.useState(0)
    
    const sum = useRef(null)
    const end = useRef(null)
    const offsetTopSum = useRef(null)

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;
        var lastScrollTop = 0

        if(sum.current && end.current){
            offsetTopSum.current = end.current.getBoundingClientRect().top - sum.current.getBoundingClientRect().top
        }

        window.addEventListener("scroll", () => {
            var st = window.pageYOffset || document.documentElement.scrollTop; 
            if (st > lastScrollTop){
                console.log('down')
                setTop(offsetTopSum.current)
            } else {
                setTop(-80)
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, {signal: signal})

        return () => abortController.abort()
    }, [])


    return (
        <Wrapper ref={sum} top={top}>
            <header>
                <h2>Summary</h2>
                <p>Total : ${[ totalAmount ]}</p>

                <div style={{marginTop: '900px'}}>
                    <h4>Add a note</h4>
                    <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.currentTarget.value)}/>
                </div>
            </header>
            <div style={{position: "absolute", bottom: '0', height: '100vh', width: '100%'}} ref={end} ></div>
        </Wrapper>
    );
};

export default Summary;