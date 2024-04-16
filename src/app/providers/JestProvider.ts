import type { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProvider } from "./AppProvider";

export const JestProvider = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
    render(ui, { wrapper: AppProvider, ...options });

export * from "@testing-library/react";
export { JestProvider as render };
