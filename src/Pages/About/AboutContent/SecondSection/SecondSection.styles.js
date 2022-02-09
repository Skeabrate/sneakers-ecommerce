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
    height: 300vh;
    position: relative;
    overflow: hidden;
`

const background = css`
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
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
    background-color: #5E593C;
    width: 30vw;
    height: 60vh;
    top: calc(-60vh - 50px);
    left: 0;
`
export const StyledUpSmallImg = styled.div`
    ${background};
    background-image: url(${imgFourth});
    background-color: ##FEA800;
    width: 20vw;
    height: 30vh;
    top: calc(-30vh - 50px);
    left: calc(30vw + 50px);
`


/* RIGHT */
export const StyledRightImg = styled.div`
    ${background};
    background-image: url(${imgThird});
    background-color: #A66CD4;
    width: 25vw;
    height: 50vh;
    top: 0;
    right: calc(-25vw - 50px);
`


/* DOWN */
export const StyledDownBigImg = styled.div`
    ${background};
    background-image: url(${imgFifth});
    background-color: #EB3C43;
    width: 30vw;
    height: 60vh;
    bottom: calc(-60vh - 50px);
    right: 0;
`
export const StyledDownSmallImg = styled.div`
    ${background};
    background-image: url(${imgSix});
    background-color: #F6BFBF;
    width: 20vw;
    height: 30vh;
    bottom: calc(-30vh - 50px);
    right: calc(30vw + 50px);
`


/* LEFT */
export const StyledLeftImg = styled.div`
    ${background};
    background-image: url(${imgTwo});
    background-color: #E5892F;
    width: 25vw;
    height: 50vh;
    bottom: 0;
    left: calc(-25vw - 50px);
`