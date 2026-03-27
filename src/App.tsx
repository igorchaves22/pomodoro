import { RouterProvider } from "react-router";
import { initializeLocalStorage } from "~helpers";
import { router } from "~routes";
import "~styles/main.scss";

initializeLocalStorage();

export function App() {
    return <RouterProvider router={router} />;
}
