import { Outlet } from "react-router";
import { createCSSVariables } from "~utils";
import { useHook } from "./hooks";
import S from "./styles.module.scss";

export const Main = () => {
    const { headerHeight } = useHook();

    return (
        <main
            style={createCSSVariables({
                "header-height": `${headerHeight}px`
            })}
            className={S.container}
        >
            <Outlet />
        </main>
    );
};
