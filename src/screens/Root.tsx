import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import MobileHomeScreen from "./MobileHomeScreen";
import useDimensions from "../hooks/useDimensions";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />
  }
]);
const mobileRouter = createBrowserRouter([
  {
    path: '/',
    element: <MobileHomeScreen />
  }
]);

export default function Root() {
  const {isMobile} = useDimensions();
  const selectedRouter = isMobile ? mobileRouter : router
  return <RouterProvider router={selectedRouter} />;
}
