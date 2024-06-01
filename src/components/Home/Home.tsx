import { useDispatch } from "react-redux";
import { Title } from "../Typography/Typography.styles";
import { HomeContainer, ImagesContainer } from "./Home.styles";
import { IMAGE_URLS } from "../../constants/constants";
import Image from "../Image/Image";
import Button from "../Button/Button";
import { ButtonWrapper } from "../Button/Button.styles";
import { logout } from "../../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <HomeContainer>
      <ButtonWrapper>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonWrapper>
      <Title>Welcome to Home Page</Title>
      <ImagesContainer>
        {IMAGE_URLS.map((url, index) => (
          <Image key={index} alt={`image${index}`} src={url} />
        ))}
      </ImagesContainer>
    </HomeContainer>
  );
};

export default Home;
