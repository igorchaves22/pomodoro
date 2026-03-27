import type { InputAttributes } from "~types";

export interface RangeInputProps {
    htmlFor: string;
    text: string;
    output: string;
    inputOptions: Pick<InputAttributes, "step" | "min" | "max" | "value" | "onChange">;
}
