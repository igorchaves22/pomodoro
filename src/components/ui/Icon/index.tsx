import { ICONS } from "~constants";
import { formatClassName, formatStringIfTrue } from "~helpers";
import styles from "./styles.module.scss";
import type { IconProps } from "./types";

export const Icon = ({ icon, color, size, ...rest }: IconProps) => {
    const Element = ICONS[icon];

    return (
        <Element
            className={formatClassName([
                styles.element,
                formatStringIfTrue(color, styles[`element--color-${color}`]),
                formatStringIfTrue(size, styles[`element--size-${size}`])
            ])}
            {...rest}
        />
    );
};
