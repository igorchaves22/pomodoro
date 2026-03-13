import type { PomodoroDurationKeys, PomodoroState, VoidFunction } from "~types";

export interface PomodoroStore {
    state: PomodoroState;
    toggleSounds: () => void;
    setDuration: (key: PomodoroDurationKeys, value: number) => void;
    setCyclesBeforeLongBreak: (value: number) => void;
    resetSettings: () => void;
    tickTimeRemaining: (playSound?: VoidFunction) => void;
    toggleStatus: (playSound?: VoidFunction) => void;
    restartSession: VoidFunction;
    skipMode: (playSound?: VoidFunction) => void;
}
