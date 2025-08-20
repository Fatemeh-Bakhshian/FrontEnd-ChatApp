import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./Layout";
import ReportPage from "./pages/ReportPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPass from "./pages/auth/ForgetPass";

function App() {
  const CommenRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Landing /> },
        { path: "/report-page", element: <ReportPage /> },
      ],
    },
  ];
  const PublicRoutes = [
    ...CommenRoutes,
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/regester", element: <Register /> },
        { path: "/forget-password", element: <ForgetPass /> },
      ],
    },
  ];
  // Dashboard
  //   const PrivateRoutes = [...CommenRoutes,
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       { path: "/Dashbord", element: <Landing /> },
  //     ],
  //   },
  // ];

  const Routes = PublicRoutes;

  return <RouterProvider router={createBrowserRouter(Routes)} />;
}

export default App;
