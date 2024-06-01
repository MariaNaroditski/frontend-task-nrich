import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
  text-align: center;
`;

type ErrorProps = {
  $isVisible?: boolean;
};
export const Error = styled.p<ErrorProps>`
  margin: 0.5rem 0;
  font-size: 0.8rem;
  color: red;
  height: 16px;
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
`;
