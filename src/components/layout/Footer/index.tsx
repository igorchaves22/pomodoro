import logoSvg from "~assets/svg/logo.svg";
import { Icon } from "~components/ui";
import { formatClassName } from "~helpers";
import { AUTHOR_CREDITS } from "./constants";
import styles from "./styles.module.scss";

export const Footer = () => (
    <footer className={styles.container}>
        <div
            className={formatClassName([
                styles.container__box,
                styles["container__box--compact"],
                styles["container__box--logo"]
            ])}
        >
            <img
                src={logoSvg}
                alt="Pomodoro logo"
                loading="eager"
                className={styles.container__image}
            />
            <span className={formatClassName([styles.container__text, styles["container__text--logo"]])}>Pomodoro</span>
        </div>
        <ul className={formatClassName([styles.container__box, styles["container__box--list"]])}>
            {AUTHOR_CREDITS.map((credit) => (
                <li
                    key={credit.label}
                    className={formatClassName([styles.container__box, styles["container__box--compact"]])}
                >
                    <a
                        href={credit.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.container__link}
                    >
                        <Icon
                            icon={credit.icon}
                            color="neutral-4"
                            weight="fill"
                            size="sm"
                        />
                        <span className={styles.container__text}>{credit.label}</span>
                    </a>
                </li>
            ))}
        </ul>
        <small className={formatClassName([styles.container__text, styles["container__text--copyright"]])}>
            © 2026 Pomodoro
        </small>
    </footer>
);
