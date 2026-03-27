import { Icon } from "~components/ui";
import { formatClassName, formatStringIfTrue } from "~helpers";
import { createCSSVariables } from "~utils";
import S from "./styles.module.scss";
import type { SessionButtonProps } from "./types";

export const SessionButton = ({ icon, layout, animation, ...rest }: SessionButtonProps) => (
    <button
        type="button"
        style={
            animation ?
                createCSSVariables({
                    "skip-mode-button-duration": `${animation.duration}ms`
                })
            :   undefined
        }
        className={formatClassName([
            S.container,
            formatStringIfTrue(layout, S[`container--${layout}`]),
            formatStringIfTrue(animation, S[`container--${animation?.type}`])
        ])}
        {...rest}
    >
        <Icon
            icon={icon}
            color={layout === "status" ? "base" : "primary"}
            weight="bold"
        />
    </button>
);
