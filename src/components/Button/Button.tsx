import { FormEvent } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  onClick?: (e: FormEvent<HTMLFormElement>) => void;
  type?: string;
  $isDisabled?: boolean;
  children: JSX.Element | JSX.Element[] | string;
};

const Button = (props: ButtonProps) => {
  const { children, onClick, $isDisabled = false } = props;

  return (
    <StyledButton onClick={onClick ? onClick : null} disabled={$isDisabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
