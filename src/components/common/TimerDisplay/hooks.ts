import { useEffect, useMemo } from "react";
import beepSoundAudio from "~assets/sounds/beep_short.ogg";
import { POMODORO_STATUS } from "~constants";
import { useAudio, useInterval } from "~hooks";
import { usePomodoroStore } from "~store";

export const useHook = () => {
    const {
        state: {
            session: {
                status,
                mode,
                duration: { total, remaining }
            }
        },
        tickTimeRemaining,
        skipMode
    } = usePomodoroStore();
    const { startInterval: startTickTimer, stopInterval: stopTickTimer } = useInterval();
    const { playSound } = useAudio(beepSoundAudio);

    const progress = useMemo(() => {
        const size = 100;
        const halfSize = size / 2;
        const trackStrokeWidth = 0.5;
        const progressStrokeWidth = trackStrokeWidth * 6;
        const base = {
            cx: halfSize,
            cy: halfSize,
            r: (size - progressStrokeWidth) / 2
        };
        const circumference = 2 * Math.PI * base.r;
        const progress = 1 - remaining / total;
        const offset = circumference * (1 - progress);
        const trackCircle = {
            ...base,
            strokeWidth: trackStrokeWidth
        };
        const progressCircle = {
            ...base,
            strokeWidth: progressStrokeWidth,
            stroke: POMODORO_STATUS.transition.colors[mode],
            strokeDasharray: circumference,
            strokeDashoffset: offset
        };

        return { size, trackCircle, progressCircle };
    }, [mode, remaining, total]);

    useEffect(() => {
        const isStopped = status !== "running";

        if (isStopped) return stopTickTimer();

        startTickTimer(() => tickTimeRemaining(playSound));
    }, [playSound, remaining, skipMode, startTickTimer, status, stopTickTimer, tickTimeRemaining]);

    return { progress, remaining };
};
