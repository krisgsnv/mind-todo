import { MainPage } from "@/pages/MainPage";
import { AppProvider } from "./providers";

export const App = () => {
    return (
        <AppProvider>
            <MainPage />
        </AppProvider>
    );
};
