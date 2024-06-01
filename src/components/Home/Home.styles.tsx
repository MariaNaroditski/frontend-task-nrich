import styled from "styled-components";
import { DEVICE_MAX } from "../../constants/constants";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ImagesContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1000px;
  height: 60vh;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem 3.5rem;
  justify-items: center;
  align-items: center;
  grid-gap: 20px;
  margin-top: 2rem;
  overflow: auto;
  scrollbar-color: #6d6de8 white;
  scrollbar-width: thin;
  -webkit-box-shadow: -5px 5px 41px 20px rgba(95, 113, 173, 0.81);
  -moz-box-shadow: -5px 5px 41px 20px rgba(95, 113, 173, 0.81);
  box-shadow: -5px 5px 41px 20px rgba(95, 113, 173, 0.81);

  @media ${DEVICE_MAX.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${DEVICE_MAX.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
