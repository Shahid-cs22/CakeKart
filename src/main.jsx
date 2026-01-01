import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import { Provider } from "react-redux";
import { Store } from "./Reduxx/Store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
