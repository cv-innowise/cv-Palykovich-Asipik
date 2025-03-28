import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  Login,
  Register,
  Error,
  Layout,
  Skills,
  Languages,
  CVs,
  Employees,
  Settings,
  Profile,
} from "./pages";
import { ErrorElement } from "./components";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Employees />,
          errorElement: <ErrorElement />,
        },
        {
          path: "skills",
          element: <Skills />,
          errorElement: <ErrorElement />,
        },
        {
          path: "languages",
          element: <Languages />,
          errorElement: <ErrorElement />,
        },
        {
          path: "cvs",
          element: <CVs />,
          errorElement: <ErrorElement />,
        },
        {
          path: "settings",
          element: <Settings />,
          errorElement: <ErrorElement />,
        },
        {
          path: "profile",
          element: <Profile />,
          errorElement: <ErrorElement />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
