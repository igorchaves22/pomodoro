import { useEffect, useMemo } from "react";
import { useInterval } from "~hooks";
import { usePomodoroStore } from "~store";
import { COLORS_TRANSITION } from "./constants";

export const useController = () => {
    const {
        state: {
            settings: { cyclesBeforeLongBreak },
            session: {
                status,
                mode,
                duration: { total, remaining },
                cycleCount
            }
        },
        tickTimeRemaining,
        skipMode
    } = usePomodoroStore();
    const { startInterval: startTickTimer, stopInterval: stopTickTimer } = useInterval();

    const timerProgress = useMemo(() => {
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
            stroke: COLORS_TRANSITION[mode],
            strokeDasharray: circumference,
            strokeDashoffset: offset
        };

        return { size, trackCircle, progressCircle };
    }, [mode, remaining, total]);
    const indicators = useMemo(
        () =>
            Array.from({ length: cyclesBeforeLongBreak }).map((_, index) => {
                const isSessionActive = status !== "idle";
                const completedCycles =
                    mode === "longBreak" ? cyclesBeforeLongBreak : cycleCount % cyclesBeforeLongBreak;

                return isSessionActive && index < completedCycles;
            }),
        [cycleCount, cyclesBeforeLongBreak, mode, status]
    );

    useEffect(() => {
        const isStopped = status !== "running";

        if (isStopped) return stopTickTimer();

        startTickTimer(() => tickTimeRemaining());
    }, [remaining, skipMode, startTickTimer, status, stopTickTimer, tickTimeRemaining]);

    return { status, mode, timerProgress, remaining, indicators };
};
