import { createGlobalStyle } from "styled-components";
import px2vw from "./px2vw";

export default createGlobalStyle`
  @font-face {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        src: url("../assets/fonts/DMSans-Regular.ttf") format('ttf')
    }
    @font-face {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        src: url("../assets/fonts/DMSans-Medium.ttf") format('ttf')
    }
    @font-face {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        src: url("../assets/fonts/DMSans-Bold.ttf") format('ttf')
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* position: fixed; */
    width: 100%;
    font-family: 'DM Sans', sans-serif;  }

  :root {
      font-size: ${px2vw(24)};

      @media  (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
