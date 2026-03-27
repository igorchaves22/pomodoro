import { POMODORO_DEFAULT_STATE, POMODORO_LOCALSTORAGE_KEYS } from "~constants";
import type { PomodoroState } from "~types";
import { getLocalStorageItem, setLocalStorageItem } from "~utils";

export const setPomodoroToLocalStorage = <K extends "settings" | "stats">(key: K, value: PomodoroState[K]) =>
    setLocalStorageItem(POMODORO_LOCALSTORAGE_KEYS[key], value);

export const getPomodoroFromLocalStorage = <K extends "settings" | "stats">(key: K) =>
    getLocalStorageItem<PomodoroState[K]>(POMODORO_LOCALSTORAGE_KEYS[key]);

export const initializeLocalStorage = () => {
    const storedSettings = getPomodoroFromLocalStorage("settings");
    const storedStats = getPomodoroFromLocalStorage("stats");

    if (!storedSettings) setPomodoroToLocalStorage("settings", POMODORO_DEFAULT_STATE.settings);
    if (!storedStats) setPomodoroToLocalStorage("stats", POMODORO_DEFAULT_STATE.stats);
};

export const initialSyncWithLocalStorage = () => {
    const storedSettings = getPomodoroFromLocalStorage("settings");
    const storedStats = getPomodoroFromLocalStorage("stats");

    if (storedSettings && storedStats) {
        const settings = storedSettings;
        const stats = storedStats;
        const isEqual = JSON.stringify({ settings, stats }) === JSON.stringify(POMODORO_DEFAULT_STATE);

        if (!isEqual)
            return {
                settings,
                session: {
                    ...POMODORO_DEFAULT_STATE.session,
                    duration: {
                        total: settings.durations.focus,
                        remaining: settings.durations.focus
                    }
                },
                stats
            };
    }

    return POMODORO_DEFAULT_STATE;
};

export const skipPomodoroMode = (state: PomodoroState, playSound?: VoidFunction) => {
    let mode = state.session.mode;
    let cycleCount = state.session.cycleCount;
    const isFocus = mode === "focus";

    if (isFocus) {
        cycleCount += 1;
        const reachedLongBreakCycle = cycleCount % state.settings.cyclesBeforeLongBreak === 0;
        mode = reachedLongBreakCycle ? "longBreak" : "shortBreak";
    } else {
        const isLongBreakMode = mode === "longBreak";

        if (isLongBreakMode) cycleCount = 0;

        mode = "focus";
    }
    if (state.settings.soundsEnabled && playSound) playSound();

    const duration = state.settings.durations[mode];

    return { mode, duration, cycleCount };
};
