import { HomeLayout, LandingPage, Register, Login, ToDo } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as loginAction } from "./pages/login";
import { action as registerAction } from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "to-do",
        element: <ToDo />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
