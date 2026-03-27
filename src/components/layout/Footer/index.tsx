import { Icon, Logo } from "~components/ui";
import { formatClassName } from "~helpers";
import { AUTHOR_CREDITS } from "./constants";
import S from "./styles.module.scss";

export const Footer = () => (
    <footer className={S.container}>
        <Logo />
        <ul className={formatClassName([S.container__box, S["container__box--list"]])}>
            {AUTHOR_CREDITS.map((credit) => (
                <li
                    key={credit.label}
                    className={formatClassName([S.container__box, S["container__box--item"]])}
                >
                    <a
                        href={credit.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={S.container__link}
                    >
                        <Icon
                            icon={credit.icon}
                            color="secondary"
                            weight="fill"
                            size="sm"
                        />
                        <span className={formatClassName([S.container__text, S["container__text--label"]])}>
                            {credit.label}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
        <small className={formatClassName([S.container__text, S["container__text--copyright"]])}>© 2026 Pomodoro</small>
    </footer>
);
