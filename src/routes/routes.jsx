import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddProducts from "../pages/AddProducts";

import Blog from "../pages/Blog";
import Categories from "../pages/Categories";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Login/Registration";
import MyToys from "../pages/MyToys/MyToys";
import AllToys from "../pages/toyTypes/AllToys";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Registration></Registration>
      },
      {
path: "/categories",
element:<Categories></Categories>
      },
      {
        path: "/my-toys",
        element:<MyToys></MyToys>
      },
      {
        path: "/addProducts",
        element:<AddProducts></AddProducts>
      },
      {
        path: "/allToy",
        element:<AllToys></AllToys>
      }
    ],

  
  },
]);

export default router;