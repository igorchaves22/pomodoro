import { Link } from "react-router";
import { formatClassName } from "~helpers";
import styles from "./styles.module.scss";
import type { NoMatchPageProps } from "./types";

export const NoMatchPage = ({ title, description, link }: NoMatchPageProps) => (
    <section className={styles.container}>
        <div className={styles.container__box}>
            <h1 className={formatClassName([styles.container__text, styles["container__text--title"]])}>{title}</h1>
            <p className={styles.container__text}>{description}</p>
        </div>
        <Link
            to={link.href}
            className={styles.container__link}
        >
            {link.label}
        </Link>
    </section>
);
