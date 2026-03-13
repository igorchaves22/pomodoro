import type { Icon, InputAttributes } from "~types";

export interface SliderInputProps extends Icon {
    htmlFor: string;
    text: string;
    inputOptions: Pick<InputAttributes, "checked" | "onChange">;
}
