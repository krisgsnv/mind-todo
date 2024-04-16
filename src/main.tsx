import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@/app/providers";
import "./index.css";
import { MainPage } from "@/pages/MainPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppProvider>
            <MainPage />
        </AppProvider>
    </React.StrictMode>
);
