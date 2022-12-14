import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import Cart from "./pages/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Provider } from "react-redux";
import store from "./store/store";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Toaster />
          <div className="min-vh-100 py-4">
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
          <Footer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
