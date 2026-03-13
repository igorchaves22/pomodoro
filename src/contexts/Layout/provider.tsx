import { useRef } from "react";
import { EMPTY_ELEMENT } from "~constants";
import type { Children, ElementRef } from "~types";
import { LayoutContext } from "./context";

export const LayoutContextProvider = ({ children }: Children) => {
    const headerRef = useRef<ElementRef>(EMPTY_ELEMENT);

    return <LayoutContext.Provider value={{ headerRef }}>{children}</LayoutContext.Provider>;
};
