import { Link } from "react-router";
import { formatClassName } from "~helpers";
import S from "./styles.module.scss";
import type { RouteFallbackMessageProps } from "./types";

export const RouteFallbackMessage = ({ title, description, link }: RouteFallbackMessageProps) => (
    <section className={S.container}>
        <div className={S.container__box}>
            <h1 className={formatClassName([S.container__text, S["container__text--title"]])}>{title}</h1>
            <p className={S.container__text}>{description}</p>
        </div>
        <Link
            to={link.href}
            className={S.container__link}
        >
            {link.label}
        </Link>
    </section>
);
