import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Page from "./Page";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/Projects",
          element: <Projects />,
        },
        {
          path: "/Experience",
          element: <Experience />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
