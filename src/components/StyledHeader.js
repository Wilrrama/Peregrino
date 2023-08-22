import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 70px;
  border: 1px solid black;
  justify-content: space-around;
  background-color: aliceblue;

  figure {
    display: flex;
    align-items: center;

    img {
      width: 100vw;
      max-width: none;
      height: 75px;
    }

    figcaption {
      position: absolute;
      top: 7%;
      left: 30%;
      transform: translate(-50%, -50%);
      color: whitesmoke;
      font-weight: 900;
      text-align: center;
    }
  }
`;
