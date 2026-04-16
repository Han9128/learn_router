import Home from "./pages/Home";
import Product from "./pages/Product";
import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/product",
    element: <Product />
  }
])

function App() {
  return (
    // <div className="App">
    //   <h1>Hello, React Router</h1>
    //   <Home />
    //   <Product />
    // </div>

    <RouterProvider router={router} />
  );
}

export default App;
