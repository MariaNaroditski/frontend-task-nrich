import styled from "styled-components";

const Spinner = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%, #5d44e8) content-box;
  -webkit-mask: repeating-conic-gradient(
      #0000 0deg,
      #000 1deg 20deg,
      #0000 21deg 36deg
    ),
    radial-gradient(
      farthest-side,
      #0000 calc(100% - 8px - 1px),
      #000 calc(100% - 8px)
    );
  -webkit-mask-composite: destination-in;
  mask-composite: intersect;
  animation: l4 1s infinite steps(10);

  @keyframes l4 {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Spinner;
