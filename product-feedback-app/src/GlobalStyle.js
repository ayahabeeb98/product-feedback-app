import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background-color: #F7F8FD;
        --light-gray: #F2F4FF;
        --white: #fff;
        --dark-blue: #3A4374;
        --very-dark-blue: #4661E6;
        --grayish-blue: #647196;
        --light-blue: #4661E6;
        --very-light-blue: #62BCFA;
        --navbar-color: #373F68;
        --purple-color: #AD1FEA;
        --planned-color: #f49f85;
        --red-color: #D73737;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
     body {
        min-height: 100vh;
        background-color: var(--background-color);
        font-family: 'Jost', sans-serif;
        font-size: 16px;
     }
    
    ul,
    ol {
        list-style: none;
    }
    
     a {
        text-decoration: none;
    }
   
`;

export default GlobalStyle;
