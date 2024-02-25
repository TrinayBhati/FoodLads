import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Body from "./components/body/Body";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout";
import MenuPage from "./components/menu/MenuPage";
import Dishes from "./components/Dishes";
// import RestaurantDetails from "./components/restaurantDetails/RestaurantDetails";

const AppLayout = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/menu/:id"
          element={
            <Layout>
              <MenuPage />
            </Layout>
          }
        />
        <Route
          path="/dishes"
          element={
            <Layout>
              <Dishes />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
