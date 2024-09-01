
import { HomeLayout, LandingPage, Register, Login, ToDo } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'to-do',
        element: <ToDo/>,
      },
 ] }
])

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
