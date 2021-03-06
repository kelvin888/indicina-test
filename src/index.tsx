import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalCSS from "./utils/global.styles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalCtxProvider } from "./context/GlobalContext";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <GlobalCtxProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </GlobalCtxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
