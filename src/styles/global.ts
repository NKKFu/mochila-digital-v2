import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        box-sizing: border-box;
    }

    body { 
        background-color: #f5f5f5;
    }
`;

export default GlobalStyle;