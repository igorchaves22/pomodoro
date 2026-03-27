import logoSvg from "~assets/svg/logo.svg";
import { renderElementIfTrue } from "~helpers";
import S from "./styles.module.scss";
import type { LogoProps } from "./types";

export const Logo = ({ isHideName }: LogoProps) => (
    <div className={S.container}>
        <img
            src={logoSvg}
            alt="Pomodoro logo"
            loading="eager"
            width={32}
            height={32}
            className={S.container__image}
        />
        {renderElementIfTrue(!isHideName, <span className={S.container__text}>Pomodoro</span>)}
    </div>
);
