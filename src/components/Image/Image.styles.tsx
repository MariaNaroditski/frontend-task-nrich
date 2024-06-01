import { styled } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const StyleImage = styled(LazyLoadImage)`
  width: 100%;
  max-width: 350px;
  max-height: 350px;
  min-height: 350px;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
  }
`;
