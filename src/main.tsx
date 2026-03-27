import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { APP_ROOT_ID } from "~constants";
import { App } from "./App";

createRoot(APP_ROOT_ID!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
