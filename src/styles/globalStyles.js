import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin:0;
    font-family: 'Poppins', sans-serif;;
    
}

body {
    overflow-x: hidden;
}

button{
    cursor: pointer;
	background: transparent;
	border: none;
}

`;
