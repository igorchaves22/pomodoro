import { useCallback, useEffect, useRef } from "react";
import { EMPTY_ELEMENT, NOOP } from "~constants";
import type { VoidFunction } from "~types";

type TimeoutRef = ReturnType<typeof setTimeout> | null;

const DEFAULT_TIMEOUT_DELAY_MILLISECONDS = 400;

export const useTimeout = () => {
    const timeoutRef = useRef<TimeoutRef>(EMPTY_ELEMENT);
    const callbackRef = useRef<VoidFunction>(NOOP);

    const stopTimeout = useCallback(() => {
        if (!timeoutRef.current) return;

        clearInterval(timeoutRef.current);
        timeoutRef.current = EMPTY_ELEMENT;
    }, []);
    const startTimeout = useCallback(
        (callback: VoidFunction, delay?: number) => {
            stopTimeout();

            callbackRef.current = callback;
            const delayValue = delay ?? DEFAULT_TIMEOUT_DELAY_MILLISECONDS;
            timeoutRef.current = setTimeout(() => callbackRef.current(), delayValue);
        },
        [stopTimeout]
    );

    useEffect(() => {
        return () => stopTimeout();
    }, [stopTimeout]);

    return { startTimeout, stopTimeout };
};
