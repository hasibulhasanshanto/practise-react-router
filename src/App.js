import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hire from "./components/Hire/Hire";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "about",
      element: <About></About>,
    },
    {
      path: "contact",
      element: <Contact></Contact>,
    },
    {
      path: "hire-us",
      element: <Hire></Hire>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
