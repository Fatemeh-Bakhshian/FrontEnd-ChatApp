import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./Layout";

function App() {
  const Routes = [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Landing /> }],
    },
  ];

  return <RouterProvider router={createBrowserRouter(Routes)} />;
}

export default App;
