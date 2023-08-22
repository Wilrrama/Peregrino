import { styled } from "styled-components";

export const StyledWords = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  padding-top: 5px;
`;

export const StyledWord = styled.li`
  //border: 1px solid green;
  border-radius: 4px;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
`;

export const StyledAta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    font-size: 10px;
    width: 120px;
    height: 80px;
  }

  h5 {
    font-size: 12px;
  }

  p {
    font-size: 10px;
  }
`;

export const StyledContainerButton = styled.div`
  display: flex;
  gap: 2px;
  button {
    border-radius: 4px;
    border: 1px black solid;
    width: 35px;
    height: 20px;
    font-size: 10px;
  }

  :focus {
    color: whitesmoke;
    border: 1px green solid;
    background: green;
  }

  :hover {
    color: green;
    color: whitesmoke;
    border: 1px green solid;
    background: green;
  }
`;
