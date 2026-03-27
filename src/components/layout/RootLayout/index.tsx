import { LayoutContextProvider } from "~contexts";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import S from "./styles.module.scss";

export const RootLayout = () => (
    <div className={S.container}>
        <LayoutContextProvider>
            <Header />
            <Main />
            <Footer />
        </LayoutContextProvider>
    </div>
);
