import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Page from "./Page";
import Home from "./pages/Home";
import About from "./pages/About";

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
                // {
                //     path: "/register",
                //     element: <Register {...props} />,
                // },
                // {
                //     path: "/login",
                //     element: <Login {...props} />,
                // },
                // {
                //     path: "/forgot",
                //     element: <Forgot {...props} />,
                // },
                // {
                //     path: "/game",
                //     element: (
                //         <RequireAuth {...props}>
                //             <Game {...props} />
                //         </RequireAuth>
                //     ),
                // },
                // {
                //     path: "/account",
                //     element: (
                //         <RequireAuth {...props}>
                //             <Account {...props} />
                //         </RequireAuth>
                //     ),
                // },
                {
                    path: "/about",
                    element: <About />,
                },
                // {
                //     path: "/invite",
                //     element: (
                //         <RequireAuth {...props}>
                //             <Invite {...props} />
                //         </RequireAuth>
                //     ),
                // },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}