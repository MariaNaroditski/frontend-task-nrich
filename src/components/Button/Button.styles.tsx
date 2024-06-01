import { FormEvent } from "react";
import styled from "styled-components";
import { DEVICE_MAX } from "../../constants/constants";

type StyledButtonProps = {
  onClick: ((e: FormEvent<HTMLFormElement>) => void) | null;
};

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  max-width: 74px;
  height: 24px;
  background: white;
  cursor: pointer;

  &: disabled {
    cursor: default;
  }
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  width: fit-content;
  right: 40px;
  top: 30px;

  @media ${DEVICE_MAX.mobile} {
    right: 0px;
    top: 10px;
  }
`;
