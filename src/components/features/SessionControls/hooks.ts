import { useCallback, useEffect } from "react";
import beepSoundAudio from "~assets/sounds/beep_short.ogg";
import { useAudio, useRenderTransition } from "~hooks";
import { usePomodoroStore } from "~store";
import { SKIP_MODE_BUTTON_DURATION_MILLISECONDS } from "./constants";

export const useHook = () => {
    const {
        state: {
            session: { status }
        },
        toggleStatus,
        restartSession,
        skipMode
    } = usePomodoroStore();
    const { render: isSkipModeButtonShown, handleRender: handleToggleSkipModeButton } = useRenderTransition();
    const { playSound } = useAudio(beepSoundAudio);

    const isDisabled = status === "idle";
    const handleClickToggleStatus = useCallback(() => toggleStatus(playSound), [playSound, toggleStatus]);
    const handleClickSkipMode = useCallback(() => skipMode(playSound), [playSound, skipMode]);

    useEffect(() => {
        handleToggleSkipModeButton(!isDisabled, isDisabled ? SKIP_MODE_BUTTON_DURATION_MILLISECONDS : 0);
    }, [handleToggleSkipModeButton, isDisabled]);

    return {
        status,
        isDisabled,
        isSkipModeButtonShown,
        handleClickToggleStatus,
        restartSession,
        handleClickSkipMode
    };
};
