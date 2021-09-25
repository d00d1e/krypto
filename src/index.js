import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store";
import App from "./App";

import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter basename="/krypto">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
