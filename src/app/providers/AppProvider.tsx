import { MainPage } from "@/pages/MainPage";
import { AntdProvider } from "./AntdProvider";
import { StoreProvider } from "./StoreProvider";

export const AppProvider = () => {
    return (
        <StoreProvider>
            <AntdProvider><MainPage /></AntdProvider>
        </StoreProvider>
    );
};
