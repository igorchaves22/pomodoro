import { useEffect } from "react";
import type { RenderTransition } from "~types";

export const useController = (render: RenderTransition) => {
    useEffect(() => {
        const originalOverflowValue = document.body.style.overflow;

        if (render.delayed) document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflowValue;
        };
    }, [render.delayed]);
};
