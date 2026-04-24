import Home from "./pages/Home";
import Product from "./pages/Product";
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./pages/Root";
import ProductInfo from "./pages/ProductInfo";
import Error from "./pages/Error";
import ToDos from "./pages/Todos";
import NewProduct from "./pages/NewProduct";
import { addProductAction } from "./pages/NewProduct";
// import { BrowserRouter,Routes,Route } from "react-router";

// ************* Routing using Data Method **************
const router = createBrowserRouter([

  {
    path:"/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {path:"/home", element:<Home />},
      {path:"/product", element:<Product />},
      {path:"/product/:id", element:<ProductInfo />},
      {path:"/todos", element:<ToDos/>},
      {path:"/new-product", element:<NewProduct/>, action: addProductAction}
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
