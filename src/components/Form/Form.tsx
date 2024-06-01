import { FormEvent } from "react";
import { InnerFormContainer, StyledForm } from "./Form.styles";
import Button from "../Button/Button";

type FormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  type?: string;
  $isDisabled?: boolean;
  children: JSX.Element | JSX.Element[];
};

const Form = (props: FormProps) => {
  const {
    children,
    type = "submit",
    onSubmit,
    buttonText,
    $isDisabled = false,
  } = props;
  return (
    <StyledForm onSubmit={onSubmit}>
      <InnerFormContainer>
        {children}
        <Button type={type} $isDisabled={$isDisabled}>
          {buttonText}
        </Button>
      </InnerFormContainer>
    </StyledForm>
  );
};

export default Form;
