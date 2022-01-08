import React from 'react';
import clubImg from "../../Assets/Images/SneakersClub.jpg"
import {
    StyledList,
    StyledListItem,
    StyledClubImg,
} from "./Login.styles"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle'
import { useImgLoad } from "../../hooks/useImgLoad"

const Content = () => {
    const clubImgRef = React.useRef(null)

    const { handleLoadImg } = useImgLoad(clubImgRef.current)

    return (
        <article>
            <header>
                <StyledTitle>JOIN THE CLUB. GET REWARDED.</StyledTitle>
            </header>
                
            <div>
                <p>Join the sneakers Creators Club membership program:</p>
                
                <StyledList>
                    <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Lorem ipsum dolor sit amet, consectetur adipiscing</StyledListItem>
                    <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Consectetur ipsum dolor sit amet, lorem adipiscing</StyledListItem>
                    <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Adipiscing ipsum dolor sit amet, consectetur lorem</StyledListItem>
                    <StyledListItem><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>Amet ipsum dolor sit lorem, consectetur adipiscing</StyledListItem>
                </StyledList>

                <p>Join now and start earning points to access new levels and rewards. It's time to unlock the best of sneakers.</p>
            </div>

            <StyledClubImg 
                src={clubImg} 
                alt="sneakers club"
                ref={clubImgRef}
                onLoad={handleLoadImg}
                width="440"
            />

        </article>
    );
};

export default Content;