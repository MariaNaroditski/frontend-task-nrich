import { ChangeEvent } from "react";
import { StyledInput } from "./Input.styles";

type InputProps = {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const { type, id, name, placeholder, value, onChange } = props;

  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
