import { useCallback, useEffect, useRef } from "react";
import { EMPTY_ELEMENT, MILLISECONDS_PER_SECOND, NOOP } from "~constants";
import type { VoidFunction } from "~types";

type IntervalRef = null | ReturnType<typeof setInterval>;

export function useInterval() {
    const intervalRef = useRef<IntervalRef>(EMPTY_ELEMENT);
    const callbackRef = useRef<VoidFunction>(NOOP);

    const stopInterval = useCallback(() => {
        if (!intervalRef.current) return;

        clearInterval(intervalRef.current);
        intervalRef.current = EMPTY_ELEMENT;
    }, []);
    const startInterval = useCallback(
        (callback: VoidFunction, delay?: number) => {
            stopInterval();

            callbackRef.current = callback;
            const intervalDelay = delay ?? MILLISECONDS_PER_SECOND;
            intervalRef.current = setInterval(() => callbackRef.current(), intervalDelay);
        },
        [stopInterval]
    );

    useEffect(() => {
        return () => stopInterval();
    }, [stopInterval]);

    return { startInterval, stopInterval };
}
