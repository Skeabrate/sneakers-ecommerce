import React from 'react';
import {
    Wrapper,
} from "./Summary.styles"

const Summary = ({ totalAmount, textareaValue, setTextareaValue = () => {} }) => {  

    return (
        <Wrapper>
            <header>
                <h2>Summary</h2>
                <p>Total : ${[ totalAmount ]}</p>

                <div>
                    <h4>Add a note</h4>
                    <textarea value={textareaValue} onChange={(e) => setTextareaValue(e.currentTarget.value)} />
                </div>
            </header>
        </Wrapper>
    );
};

export default Summary;