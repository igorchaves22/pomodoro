import type { ButtonAttributes, Icon } from "~types";

export interface SessionButtonProps extends Pick<ButtonAttributes, "disabled" | "aria-label" | "onClick">, Icon {
    layout?: "status" | "restart";
    animation?: {
        type: "show" | "hide";
        duration: number;
    };
}
