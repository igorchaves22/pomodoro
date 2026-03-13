import { formatClassName } from "~helpers";
import { Icon } from "../Icon";
import styles from "./styles.module.scss";
import type { SliderInputProps } from "./types";

export const SliderInput = ({ text, icon, inputOptions }: SliderInputProps) => (
    <div className={styles.container}>
        <div className={formatClassName([styles.container__box, styles["container__box--label"]])}>
            <Icon
                icon={icon}
                weight="bold"
            />
            <label className={styles.container__text}>{text}</label>
        </div>
        <div className={formatClassName([styles.container__box, styles["container__box--switcher"]])}>
            <input
                type="checkbox"
                name={text}
                className={styles.container__input}
                {...inputOptions}
            />
            <div className={formatClassName([styles.container__box, styles["container__box--slider"]])} />
        </div>
    </div>
);
