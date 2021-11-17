import React from 'react';
import { Wrapper } from "./MainView.styles"

const MainView = React.forwardRef((props, mainViewRef) => {
   return (
      <Wrapper ref={mainViewRef}>
         
      </Wrapper>
   );
});

export default MainView;