import { useCallback, useState } from "react";
import type { RenderTransition } from "~types";
import { useTimeout } from "./useTimeout";

const INITIAL_RENDER = false;
const DEFAULT_TIMEOUT_DELAY_MILLISECONDS = 400;

export const useRenderTransition = (initialState?: boolean) => {
    const [render, setRender] = useState<RenderTransition>({
        immediate: initialState ?? INITIAL_RENDER,
        delayed: initialState ?? INITIAL_RENDER
    });
    const { startTimeout: startDelayedRenderTimeout } = useTimeout();

    const handleRender = useCallback(
        (value?: boolean, delay?: number) =>
            setRender((previousRender) => {
                const nextRender = value ?? !previousRender.immediate;
                const timeoutDelay = delay ?? DEFAULT_TIMEOUT_DELAY_MILLISECONDS;

                startDelayedRenderTimeout(
                    () =>
                        setRender((previousInnerRender) => ({
                            ...previousInnerRender,
                            delayed: nextRender
                        })),
                    timeoutDelay
                );

                return {
                    ...previousRender,
                    immediate: nextRender
                };
            }),
        [startDelayedRenderTimeout]
    );

    return { render, handleRender };
};
