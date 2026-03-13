import { createPortal } from "react-dom";
import { EMPTY_ELEMENT } from "~constants";
import { formatClassName } from "~helpers";
import { createCSSVariables, formatStringIfTrue } from "~utils";
import { DEFAULT_EXIT_DELAY_MILLISECONDS } from "./constants";
import { useController } from "./hooks";
import styles from "./styles.module.scss";
import type { ModalProps } from "./types";

export const Modal = ({ render, close, exitDelay, children }: ModalProps) => {
    useController(render);

    if (!render.delayed) return EMPTY_ELEMENT;

    return createPortal(
        <div
            style={createCSSVariables({
                "container-exit-delay": `${exitDelay ?? DEFAULT_EXIT_DELAY_MILLISECONDS}ms`
            })}
            onClick={(event) => {
                if (event.target !== event.currentTarget) return;

                close();
            }}
            className={formatClassName([
                styles.container,
                styles[`container--${formatStringIfTrue(render.immediate, "show", "hide")}`]
            ])}
        >
            {children}
        </div>,
        document.body
    );
};
