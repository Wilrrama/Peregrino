import { StyledHeader } from "./StyledHeader";
import encontro from "../assets/img/encontro.jpg";

export const Header = () => {
  return (
    <StyledHeader>
      <figure>
        <img src={encontro} alt="imagem que simboliza encontro com Jesus" />
        <figcaption>O Peregrino</figcaption>
      </figure>
    </StyledHeader>
  );
};
