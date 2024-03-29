import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";

// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { StrictMode } from "react";
// Redux Imports
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//this is gen by npx
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// serviceWorker.unregister();
