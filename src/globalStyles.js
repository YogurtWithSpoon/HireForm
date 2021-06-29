import { createGlobalStyle } from 'styled-components';
import ProximaNova from './assets/fonts/ProximaNova-Regular.woff2'
import ProximaNovaBold from './assets/fonts/ProximaNova-Bold.woff2';
import ProximaSemiBold from './assets/fonts/ProximaNova-Semibold.woff2';
import InterRegular from './assets/fonts/Inter-Regular.woff2';
import InterBold from './assets/fonts/Inter-Bold.woff2';

export const GlobalStyles = createGlobalStyle`
  *{
    @font-face {
      font-family: 'Proxima Nova';
      src: url(${ProximaNova}) format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Proxima Nova';
      src: url(${ProximaSemiBold}) format('woff2');
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: 'Proxima Nova';
      src: url(${ProximaNovaBold}) format('woff2');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Inter';
      src: url(${InterRegular}) format('woff2');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Inter';
      src: url(${InterBold}) format('woff2');
      font-weight: 700;
      font-style: normal;
    }

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position:relative;
    font-family: "Proxima Nova";
    font-weight: 400;
  }
`