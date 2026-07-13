import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Help from "./components/Help.jsx";
import MenucardDetails from "./components/MenucardDetails.jsx";
import Cart from "./components/Cart.jsx";
import Errorcomponent from "./components/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import { Childern } from "react";


function Defaultemp(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <Defaultemp />,
    children: [
      { 
        path: "/",
        element: <Home/>,
      },
      { 
        path: "/about",
        element: <About/>,
      },
      { 
        path: "/Cart",
        element: <Cart/>,
      },
      { 
        path: "/Help",
        element: <Help/>,
      },
      { 
        path: "resturant/:id",
        element: <MenucardDetails/>,
      },
    ],
    errorElement:(
      <Errorcomponent/>
    ),
}
])




function App(){
    return (<RouterProvider router={router}/>)
      
}

export default App;