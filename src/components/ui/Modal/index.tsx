import { createPortal } from "react-dom";
import { EMPTY_ELEMENT } from "~constants";
import { formatClassName, formatStringIfTrue } from "~helpers";
import { createCSSVariables } from "~utils";
import { DEFAULT_EXIT_DELAY_MILLISECONDS } from "./constants";
import { useController } from "./hooks";
import S from "./styles.module.scss";
import type { ModalProps } from "./types";

export const Modal = ({ render, close, exitDelay, children }: ModalProps) => {
    useController(render);

    if (!render.delayed) return EMPTY_ELEMENT;

    return createPortal(
        <div
            aria-hidden
            onClick={(event) => {
                if (event.target !== event.currentTarget) return;

                close();
            }}
            style={createCSSVariables({
                "container-exit-delay": `${exitDelay ?? DEFAULT_EXIT_DELAY_MILLISECONDS}ms`
            })}
            className={formatClassName([
                S.container,
                S[`container--${formatStringIfTrue(render.immediate, "show", "hide")}`]
            ])}
        >
            {children}
        </div>,
        document.body
    );
};
