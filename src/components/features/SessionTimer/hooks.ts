import { useMemo } from "react";
import { usePomodoroStore } from "~store";

export const useHook = () => {
    const {
        state: {
            settings: { cyclesBeforeLongBreak },
            session: { status, mode, cycleCount }
        }
    } = usePomodoroStore();

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

    return { status, mode, indicators };
};
