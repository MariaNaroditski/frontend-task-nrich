import { FormEvent } from "react";
import styled from "styled-components";

type StyledFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const StyledForm = styled.div<StyledFormProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const InnerFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`;
