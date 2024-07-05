import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import Category from "./category/Category";
import Hero from "./hero/Hero";
import HeadLineCard from "./headline card/HeadLineCard";
import Food from "./food/Food";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default mainRouter;
