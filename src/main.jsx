import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Componets/Main";
import Home from "./Componets/Home";
import Register from "./Componets/Register";
import Login from "./Componets/Login ";
import AuthProviders from "./Componets/UseContex/AuthProviders";
import Order from "./Componets/PRivetrouter/Order";
import PrivetRoute from "./Componets/PRivetrouter/PrivetRoute";
import UserProfile from "./Componets/PRivetrouter/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Register></Register>,
      },
      {
        path:'/order',
        element: <PrivetRoute> <Order></Order> </PrivetRoute> 
      },
    {
      path:'/user',
      element:<PrivetRoute> <UserProfile></UserProfile> </PrivetRoute>
    }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
    
 

  </React.StrictMode>
);
