import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./Helper/UserContext";
import { Provider } from "react-redux";
import Appstore from "../src/Helper/Appstore"
import Loading from "./Components/loading";


const About = lazy(() => import("./Components/About"));
const Grocery = lazy(() => import("./Components/Grocery"));


const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    //make an api call and send username & password
    const data = {
      name: "Shreyansh",
    };

    setUserName(data.name);
  }, []);

  return <Provider store={Appstore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  </Provider>

    

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Loading />}>
          <Grocery />
        </Suspense>,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Loading />}>
          <About />
        </Suspense>

      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }

    ],
    errorElement: <Error/>,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);