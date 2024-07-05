import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./components/Main";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;
