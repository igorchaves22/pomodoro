import { useCallback, useEffect } from "react";
import beepSound from "~assets/sounds/beep_short.ogg";
import { useAudio, useRenderTransition } from "~hooks";
import { usePomodoroStore } from "~store";
import { SKIP_MODE_BUTTON_DURATION_MILLISECONDS } from "./constants";

export const useController = () => {
    const {
        state: {
            session: { status }
        },
        toggleStatus,
        restartSession,
        skipMode
    } = usePomodoroStore();
    const { render: isSkipModeButtonShown, handleRender: handleToggleSkipModeButton } = useRenderTransition();
    const { playSound } = useAudio(beepSound);

    const isDisabled = status === "idle";
    const handleToggleStatus = useCallback(() => toggleStatus(playSound), [playSound, toggleStatus]);
    const handleSkipMode = useCallback(() => skipMode(playSound), [playSound, skipMode]);

    useEffect(() => {
        handleToggleSkipModeButton(!isDisabled, isDisabled ? SKIP_MODE_BUTTON_DURATION_MILLISECONDS : 0);
    }, [handleToggleSkipModeButton, isDisabled]);

    return {
        status,
        isDisabled,
        isSkipModeButtonShown,
        handleToggleStatus,
        restartSession,
        handleSkipMode
    };
};
