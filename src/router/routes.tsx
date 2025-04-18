import { createBrowserRouter } from 'react-router-dom';

import {
  Employees,
  Skills,
  Languages,
  Error,
  CVs,
  Settings,
  Profile,
  Login,
  Register,
} from '../pages';
import { ErrorElement, ProtectedRoute } from '../components';
import { HomeLayout, AuthLayout, EmployeesLayout } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
    errorElement: <Error />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          {
            index: true,
            element: <Employees />,
            errorElement: <ErrorElement />,
          },
          {
            path: 'users',
            element: <EmployeesLayout />,
            errorElement: <ErrorElement />,
            children: [
              {
                index: true,
                element: <Employees />,
              },
              {
                path: ':userId',
                element: <Profile />,
              },
            ],
          },
          {
            path: 'skills',
            element: <Skills />,
            errorElement: <ErrorElement />,
          },
          {
            path: 'languages',
            element: <Languages />,
            errorElement: <ErrorElement />,
          },
          {
            path: 'cvs',
            element: <CVs />,
            errorElement: <ErrorElement />,
          },
          {
            path: 'settings',
            element: <Settings />,
            errorElement: <ErrorElement />,
          },
        ],
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: 'login',
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: 'signup',
        element: <Register />,
        errorElement: <Error />,
      },
    ],
  },
]);
