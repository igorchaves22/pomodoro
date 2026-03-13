import { Outlet } from "react-router";
import { createCSSVariables } from "~utils";
import { useController } from "./hooks";
import styles from "./styles.module.scss";

export const Main = () => {
    const { headerHeight } = useController();

    return (
        <main
            style={createCSSVariables({
                "header-height": `${headerHeight}px`
            })}
            className={styles.container}
        >
            <Outlet />
        </main>
    );
};
