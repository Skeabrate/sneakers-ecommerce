import styled, { css } from "styled-components"

const inputStyles = css`
    background-color: black;
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

const before = css`
    position: relative;

    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: -30px;
        height: 5px;
        width: 100%;
        background-color: ${({ theme }) => theme.colors.grey};
        border-bottom: 2px solid black;
        border-radius: 100%;
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        &::before{
            top: -20px;
        }
    }
`

export const Wrapper = styled.section`
    position: sticky;
    top: 80px;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    overflow-y: auto;
    padding: 1.25vw;
    height: fit-content;
    min-height: calc(100vh - 80px);
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    row-gap: 60px;

    header{
        padding: 1.25vw 1.25vw 0;
    }

    h3{
        font-size: ${({theme}) => theme.fontSize.xxs};
    }

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        height: fit-content;
        min-height: unset;
        padding: 0 1.25vw 30px;
        row-gap: 40px;

        h3{
            font-size: ${({theme}) => theme.fontSize.xs}
        }
        
        header{
            padding: 0 1.25vw;
        }
    }
`

export const StyledDetailsConteiner = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    ${before};
    padding: 0 1.25vw;

    details{
        summary{
            cursor: pointer;
            width: fit-content;
            list-style: none;
            list-style-type: none;
            
            &::-webkit-details-marker {
                display: none;
            }

            h3{
                text-decoration: underline;
                display: flex;
                align-items: center;
                column-gap: 15px;
            }
        }

        div{ 
            padding-top: 10px 
        }

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

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        row-gap: 5px;
    }
`

export const StyledSVG = styled.svg`
    fill: ${({theme}) => theme.colors.orange};
`

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    padding: 0 1.25vw; 
    ${before};

    @media(max-width: ${({theme}) => theme.screenSize.medium}){
        row-gap: 10px;
    }
`

export const StyledArticleItem = styled.div`
    display: flex;  
    justify-content: space-between;
`

export const StyledTotal = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.25vw;
    ${before};
`

export const StyledGiftCode = styled.p`
    color: ${({theme}) => theme.colors.orange};
`

export const StyledCheckout = styled.div`
    padding: 0 1.25vw;
    ${before};
`