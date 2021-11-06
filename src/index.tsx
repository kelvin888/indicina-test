import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalCSS from "./utils/global.styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const data = await axios.post(API_URL, {
//   query: `mutation updateUserCity($id: Int!, $city: String!) {
//     updateUserCity(userID: $id, city: $city){
//       id
//       name
//       age
//       city
//       knowledge{
//         language
//         frameworks
//       }
//     }
//   }`,
//   variables: {
//     id: 2,
//     city: 'Test'
//   }
// }, {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
