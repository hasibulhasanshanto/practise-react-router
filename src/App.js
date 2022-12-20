import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hire from "./components/Hire/Hire";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import Main from "./layout/Main";
import FriendDetails from "./components/Friends/FriendDetails";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "friends",
          children: [
            {
              path: "",
              loader: async () => {
                return fetch("https://jsonplaceholder.typicode.com/users");
              },
              element: <Friends></Friends>,
            },
          ],
        },
        {
          path: "friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: "contact",
          element: <Contact></Contact>,
        },
        {
          path: "hire-us",
          element: <Hire></Hire>,
        },
      ],
    },
    {
      path: "*",
      element: <div>404 Not found!</div>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
