/* eslint-disable react-refresh/only-export-components */
import { AntdProvider } from "./AntdProvider";
import { StoreProvider } from "./StoreProvider";

import type { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

export const AppProvider = ({ children }: PropsWithChildren) => {
    return (
        <StoreProvider>
            <AntdProvider>{children}</AntdProvider>
        </StoreProvider>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: AppProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
