import { Navigate, Outlet, RouteObject } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Unauthorize from "../Main/Unauthorize";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

export const PublicRoutesV6:RouteObject[] = [{
    path:"/",
    element:<Outlet/>,
    children:[
        { index: true, element: <Login /> },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <Register />
        },
        {
          path: "unauthorized",
          element: <Unauthorize />
        },
        { path: "*", element: <Navigate to={"/"} /> }
    ]
}]

export const PrivateRoutesV6:RouteObject[] = [{
    path:"/",
    element:<Outlet/>,
    children:[
        { index: true, element: <Dashboard /> },
        {
          path: "dashboard",
          element: <Dashboard />
        },
        { path: "*", element: <Navigate to={"/"} /> }
    ]
}]