import styled, { css } from "styled-components"

const inputStyles = css`
    background-color: ${({theme}) => theme.colors.black};
    border: 1px solid ${({theme}) => theme.colors.grey};
    color: ${({theme}) => theme.colors.white};
    font-size: 16px;
    border-radius: 0;
    padding: 5px 10px;

    &:focus{
        outline: none;
        border-color: ${({theme}) => theme.colors.orange};
    }
`

export const Wrapper = styled.section`
    width: 100%;
    position: sticky;
    top: 100px;
    background-color: black;
    overflow-y: auto;
    height: fit-content;
    padding: 2vw;
    height: fit-content;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    article{ margin-block: 20px 30px }

    details{
        summary{
            list-style: none;
            cursor: pointer;
            width: fit-content;

            h3{
                text-decoration: underline;
                font-style: italic;
                display: flex;
                align-items: center;
                column-gap: 15px;
                margin-bottom: 10px;
                
            }
        }

        div{ padding-bottom: 20px }

        input{
            width: 50%;
            height: 25px;
            ${inputStyles};
        }

        textarea {
            max-width: 100%;
            min-width: 50%;
            min-height: 50px;
            max-height: 100px;
            ${inputStyles};
        }
    }
`

export const StyledSVG = styled.svg`
    fill: ${({theme}) => theme.colors.orange};
`

export const StyledSectionItem = styled.div`
    display: flex;  
    justify-content: space-between;
    padding-block: 5px;
`

export const StyledTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
`

export const StyledGiftCode = styled.p`
    color: ${({theme}) => theme.colors.orange};
`