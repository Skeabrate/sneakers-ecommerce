import react from 'react'
import ImageSlider from '../../../Components/ImageSlider/ImageSlider';
import { StyledContent } from "./Content.styles"

const Content = ({product, loading}) => {
   return (
      <StyledContent>
         <ImageSlider product={product} loading={loading}/>
      </StyledContent>
   );
};

export default Content;