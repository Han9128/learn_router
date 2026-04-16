import Home from "./pages/Home";
import Product from "./pages/Product";
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";

// ************* Routing using Data Method **************
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },

//   {
//     path: "/product",
//     element: <Product />
//   }
// ])

import { BrowserRouter,Routes,Route } from "react-router";

 
function App() {
  return (
    // <div className="App">
    //   <h1>Hello, React Router</h1>
    //   <Home />
    //   <Product />
    // </div>
    
    // wrap with this for routing with data method
    // <RouterProvider router={router} />

    // routing wiht declarative method 

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
