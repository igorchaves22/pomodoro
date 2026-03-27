import { formatClassName } from "~helpers";
import S from "./styles.module.scss";
import type { RangeInputProps } from "./types";

export const RangeInput = ({ htmlFor, text, output, inputOptions }: RangeInputProps) => (
    <div className={S.container}>
        <div className={S.container__box}>
            <label
                htmlFor={htmlFor}
                className={formatClassName([S.container__text, S["container__text--label"]])}
            >
                {text}
            </label>
            <output className={formatClassName([S.container__text, S["container__text--output"]])}>{output}min</output>
        </div>
        <input
            id={htmlFor}
            type="range"
            name={text}
            className={S.container__input}
            {...inputOptions}
        />
    </div>
);
