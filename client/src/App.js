import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Stores from "./pages/Stores";
import Footer from "./components/Footer";
import Dishes from "./pages/Dishes";

function App() {
  const Layout = () =>(
    <div>
          <Navbar />
          <Outlet />
          <Footer />
    </div>
  )
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
           <Layout />
      ),
      children:[
        {
          path:"/",
          element:<Home  />, 
        },
        {
          path:"/about",
          element:<About  />, 
        },
        {
          path:"/stores",
          element:<Stores  />, 
        },
        {
          path:"/Dishes",
          element:<Dishes  />, 
        },
      ]
    },
  ]);
  return (
 < RouterProvider router={router} />
  );
}

export default App;