import { LayoutContextProvider } from "~contexts";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import styles from "./styles.module.scss";

export const RootLayout = () => (
    <div className={styles.container}>
        <LayoutContextProvider>
            <Header />
            <Main />
            <Footer />
        </LayoutContextProvider>
    </div>
);
