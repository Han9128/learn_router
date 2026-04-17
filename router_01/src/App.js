import Home from "./pages/Home";
import Product from "./pages/Product";
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./pages/Root";

// import { BrowserRouter,Routes,Route } from "react-router";

// ************* Routing using Data Method **************
const router = createBrowserRouter([

  {
    path:"/",
    element: <Root />,
    errorElement: <h4>This is an error page</h4>,
    children: [
      {path:"/home", element:<Home />},
      {path:"/product", element:<Product />}
    ]
  }

  // {
  //   path: "/",
  //   element: <Home />
  // },

  // {
  //   path: "/product",
  //   element: <Product />
  // }
])


 
function App() {
  return (

    // <div className="App">
    //   <h1>Hello, React Router</h1>
    //   <Home />
    //   <Product />
    // </div>
    
    // {/* wrap with this for routing with data method*/}
    <RouterProvider router={router} />



    // routing wiht declarative method 

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="product" element={<Product />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
