import { css, Global } from '@emotion/react'

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        font-family: 'Fira Sans', sans-serif;
        color: var(--black);
      }

      :root {
        /* Colors */
        --primary: #e41943;
        --primary-lighter: #e44968;
        --primary-lightest: #eb748c;

        --secondary: lightgray;
        --secondary-lighter: #e9e9e9;

        --background: #f0f0f0;
        --danger: #dc3545;
        --info: gray;
        --white: white;
        --black: #222222;

        --chakra-colors-gray-100: #f3f3f3;

        /* Navbar */
        --navbar-height: 68px;
        --navbar-border: solid 1px lightgray;

        /* Card */
        --card-border: solid 1px lightgray;
        --card-border-radius: 8px;

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

        /* Button */
        --button-primary-background: var(--primary-lighter);
        --button-primary-background-hover: var(--primary-lightest);
        --button-primary-background-active: var(--primary-lighter);

        --button-primary-color: var(--white);

        --button-secondary-background: var(--secondary);
        --button-secondary-background-hover: var(--secondary-lighter);
        --button-secondary-background-active: var(--secondary);
        --button-secondary-color: var(--black);
      }
    `}
  />
)
