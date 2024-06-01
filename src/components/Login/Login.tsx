import { ChangeEvent, useEffect, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form/Form";
import Input from "../Input/Input";
import { LoginContainer } from "./Login.styles";
import { InputContainer } from "../Input/Input.styles";
import { Error, Title } from "../Typography/Typography.styles";
import { loginRequest } from "../../features/auth/authSlice";
import { RootState } from "../../app/store";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const { wasFailedToLogin } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (username === "" || password === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [password, username]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginRequest({ username, password }));
  };

  return (
    <LoginContainer>
      <Title>Login</Title>
      <Form
        onSubmit={handleFormSubmit}
        buttonText="Login"
        $isDisabled={isDisabled}
      >
        <InputContainer>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Enter your user name"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
          />
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </InputContainer>
      </Form>
      <Error $isVisible={wasFailedToLogin}>
        One of the provided information is incorrect
      </Error>
    </LoginContainer>
  );
};

export default Login;
