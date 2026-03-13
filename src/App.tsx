import { RouterProvider } from "react-router";
import { initializeLocalStorage } from "~helpers";
import { router } from "~router";
import "~styles/main.scss";

initializeLocalStorage();

export function App() {
    return <RouterProvider router={router} />;
}
