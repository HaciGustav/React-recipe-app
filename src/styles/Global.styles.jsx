import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   

}
body{
    background-color:  #2673656a;
    font-family: 'Source Sans Pro', sans-serif;
}
a{
    text-decoration: none;
    &:visited{
        color: black;
    }
}
button{
    cursor: pointer;
}
`;
