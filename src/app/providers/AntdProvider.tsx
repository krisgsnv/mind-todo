import type { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";

export const AntdProvider = ({ children }: PropsWithChildren) => {
    return <ConfigProvider locale={ru_RU}>{children}</ConfigProvider>;
};
