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
   
   img,
   svg{
      vertical-align: middle;
   }
   
   body.overlay {
      position: relative;
   }
   
   body.overlay::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0,0,0,.5);
   }
   
   input,
   textarea,
   select {
     border: 1px solid transparent;
   }
   
   .logoWrapper {
      display: none;
       @media screen and (min-width: 768px) {
          display: flex;
          align-items: center;
       }
   }
   
   .emptyImg {
      width: 102px;
      @media screen and (min-width: 768px) {
        width: 129px;
      }
      
   
   }
   
   .text-error {
     color: var(--red-color) !important;
   }

    .attribution {
      font-size: 14px;
      text-align: center;
      margin-bottom: 2em;
    }

    .attribution a {
      color: hsl(228, 45%, 44%);
    }
`;

export default GlobalStyle;
