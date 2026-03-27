import { EMPTY_ELEMENT } from "~constants";
import type { Child } from "~types";

export const renderElementIfTrue = (condition: unknown, element: Child, elseElement?: Child) => {
    if (!condition) {
        if (!elseElement) return EMPTY_ELEMENT;

        return elseElement;
    }

    return element;
};
