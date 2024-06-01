import { StyleImage } from "./Image.styles";
import Spinner from "../Spinner/Spinner.styles";

type ImageProps = {
  src: string;
  alt: string;
};

const Image = (props: ImageProps) => {
  const { src, alt } = props;

  return <StyleImage src={src} alt={alt} placeholder={<Spinner />} />;
};

export default Image;
