import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout";

const AppLayout = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Body />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
