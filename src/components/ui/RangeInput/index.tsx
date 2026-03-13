import { formatClassName } from "~helpers";
import styles from "./styles.module.scss";
import type { RangeInputProps } from "./types";

export const RangeInput = ({ htmlFor, text, output, inputOptions }: RangeInputProps) => (
    <div className={styles.container}>
        <div className={styles.container__box}>
            <label
                htmlFor={htmlFor}
                className={formatClassName([styles.container__text, styles["container__text--label"]])}
            >
                {text}
            </label>
            <output className={formatClassName([styles.container__text, styles["container__text--output"]])}>
                {output}min
            </output>
        </div>
        <input
            id={htmlFor}
            type="range"
            name={text}
            className={styles.container__input}
            {...inputOptions}
        />
    </div>
);
