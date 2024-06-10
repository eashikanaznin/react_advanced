import { Outlet, createBrowserRouter, useNavigation } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Store } from "./Store";
import { Nav } from "./Nav";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
    ],
  },
]);


function NavLayout(){

  const { state } = useNavigation()
  return(
    <>
        <Nav />
        { state === "loading" && "Loading...."}
        <Outlet />
    </>

      )
}