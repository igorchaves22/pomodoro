import { createBrowserRouter } from "react-router";
import { RootLayout } from "~components/layout";
import { HomePage, NotFoundPage } from "~pages";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ]
    }
]);
