import { createGlobalStyle } from "styled-components";
// import url from 'https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, :-ms-input-placeholder, button {
    font-family: 'Raleway', 'Roboto', sans-serif;
}
`