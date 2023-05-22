import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeScreen from "./HomeScreen";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  }
])

export default function Root() {
  return <RouterProvider router={router} />;
}
