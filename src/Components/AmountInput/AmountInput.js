import React from 'react';
import { changeAmount, removeFromCart, setAmount } from "../../Redux/addToCartSlice"
import { useDispatch } from 'react-redux';
import { 
    Wrapper,
    StyledPlusMinusBtn
} from "./AmountInput.styles"

const MAX_VALUE = 20

const AmountInput = ({ label, item = false, inputValue, setInputValue = () => {} }) => {
    const dispatch = useDispatch()

    const removeHandler = () => item && dispatch(removeFromCart({ id: item.id, size: item.size }))
    const dispatchChangeAmountHandler = (val) => item && dispatch(changeAmount({ id: item.id, size: item.size, amount: val }))
    const dispatchSetAmountHandler = (val) => item && dispatch(setAmount({ id: item.id, size: item.size, amount: val }))

    const minusHandler = () => {
        if(inputValue !== 1) {
            setInputValue(inputValue - 1)
            dispatchChangeAmountHandler(-1)
        } else removeHandler()
    }

    const plusHandler = () => {
        if(inputValue < MAX_VALUE) {
            setInputValue(inputValue + 1)
            dispatchChangeAmountHandler(1)
        }
    }

    const changeValueHandler = (e) => e.currentTarget.value > MAX_VALUE ? setInputValue(MAX_VALUE) : setInputValue(parseInt(e.currentTarget.value))
                                
    const blurHandler = (e) => {
        if(parseInt(e.currentTarget.value) && parseInt(e.currentTarget.value) > 0) {
            let validValue = e.currentTarget.value.replace(/^0+/, '')

            setInputValue(validValue)
            dispatchSetAmountHandler(Number(e.currentTarget.value))
        } else {
            setInputValue(1)
            dispatchSetAmountHandler(1)
        }
    }

    React.useEffect(() => {
        setInputValue(Number(inputValue))
    }, [inputValue])

    return (
        <div>
            {label && <label style={{ fontWeight: 'bold' }}>{label}</label>}
            <Wrapper label={label}>
                <StyledPlusMinusBtn onClick={minusHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg></StyledPlusMinusBtn>
                <input
                    type="number"
                    value={inputValue} 
                    onChange={changeValueHandler}
                    onBlur={blurHandler}
                />     
                <StyledPlusMinusBtn onClick={plusHandler}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></StyledPlusMinusBtn>
            </Wrapper>
      </div>
    );
};

export default AmountInput;