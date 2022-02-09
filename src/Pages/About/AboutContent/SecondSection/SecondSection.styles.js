import styled, { css } from "styled-components"
import imgMain from "../../../../Assets/Images/About/aboutContent2.jpg"
import imgOne from "../../../../Assets/Images/About/secondSection1.png"
import imgTwo from "../../../../Assets/Images/About/secondSection2.png"
import imgThird from "../../../../Assets/Images/About/secondSection3.png"
import imgFourth from "../../../../Assets/Images/About/secondSection4.png"
import imgFifth from "../../../../Assets/Images/About/secondSection5.png"
import imgSix from "../../../../Assets/Images/About/secondSection6.png"

export const Wrapper = styled.section`
    margin: 5vw 0;
    width: 100vw;
    height: 210vh;
    position: relative;
    overflow: hidden;
`

const background = css`
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`

const leftRight = css`
    width: 480px;
    height: 460px;
`

const upDownBig = css`
    width: 580px;
    height: 560px;
`

const upDownSmall = css`
    width: 400px;
    height: 280px;
`

export const StyledGridContainer = styled.div` 
    ${background};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    will-change: transform;
    transform: scale(0.4);
    transform-origin: center;
    background-image: url(${imgMain});
    background-color: #F27E6F;
`

/* UP */
export const StyledUpBigImg = styled.div`
    ${background};
    background-image: url(${imgOne});
    background-color: #5D583A;
    ${upDownBig};
    top: -610px;
    left: 0;
`
export const StyledUpSmallImg = styled.div`
    ${background};
    background-image: url(${imgFourth});
    background-color: #fea800;
    ${upDownSmall};
    top: -330px;
    left: 630px;

    &::after{
        content: "";
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 0;
        height: 0;
        z-index: -1;
        border-top: 60px solid transparent;
        border-bottom: none;
        border-left: 100px solid ${({ theme }) => theme.colors.orange};
    }
`


/* RIGHT */
export const StyledRightImg = styled.div`
    ${background};
    background-image: url(${imgThird});
    background-color: #A66CD4;
    ${leftRight};
    top: 0;
    right: -530px;
`


/* DOWN */
export const StyledDownBigImg = styled.div`
    ${background};
    background-image: url(${imgFifth});
    background-color: #EB3C43;
    ${upDownBig};
    bottom: -610px;
    right: 0;
`
export const StyledDownSmallImg = styled.div`
    ${background};
    background-image: url(${imgSix});
    background-color: #FEC2C2;
    ${upDownSmall};
    bottom: -330px;
    right: 630px;
`


/* LEFT */
export const StyledLeftImg = styled.div`
    ${background};
    background-image: url(${imgTwo});
    background-color: #EB8A2B;
    ${leftRight};
    bottom: 0;
    left: -530px;
`