import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    :root{
        /* Colors */
        --primary: #e41943;
        --background: #f0f0f0;
        --white: white;

        /* Navnar */
        --navbar-height: 68px;
        --navbar-border: solid 1px lightgray;

        /* Sizes */
        --size-minuscule: 2px;
        --size-extra-small: 4px;
        --size-small: 8px;
        --size-medium: 16px;
        --size-large: 24px;
        --size-extra-large: 32px;
        --size-gigantic: 40px;    

        /* Fonts */ 
        --font-extra-small: 14px;
        --font-small: 16px;
        --font-medium: 18px;
        --font-large: 20px;
        --font-extra-large: 22px;

        --font-weight-thin: 200;
        --font-weight-light: 300;
        --font-weight-regular: 400;
        --font-weight-medium: 500;
        --font-weight-semi-bold: 600;
        --font-weight-bold: bold;


        /* Line Chart */ 
        --linechart-stroke-color: var(--primary);
        --linechart-stroke-width: 2px;
    }
`
