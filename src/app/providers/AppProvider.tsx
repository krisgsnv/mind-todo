import { AntdProvider } from "./AntdProvider";
import { StoreProvider } from "./StoreProvider";

import type { PropsWithChildren } from "react";

export const AppProvider = ({ children }: PropsWithChildren) => {
    return (
        <StoreProvider>
            <AntdProvider>{children}</AntdProvider>
        </StoreProvider>
    );
};
