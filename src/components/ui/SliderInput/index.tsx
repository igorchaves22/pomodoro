import { formatClassName } from "~helpers";
import { Icon } from "../Icon";
import S from "./styles.module.scss";
import type { SliderInputProps } from "./types";

export const SliderInput = ({ text, icon, inputOptions }: SliderInputProps) => (
    <div className={S.container}>
        <div className={formatClassName([S.container__box, S["container__box--label"]])}>
            <Icon
                icon={icon}
                weight="bold"
            />
            <label className={S.container__text}>{text}</label>
        </div>
        <div className={formatClassName([S.container__box, S["container__box--switcher"]])}>
            <input
                type="checkbox"
                name={text}
                className={S.container__input}
                {...inputOptions}
            />
            <div className={formatClassName([S.container__box, S["container__box--slider"]])} />
        </div>
    </div>
);
