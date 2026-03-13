import { POMODORO_LOCALSTORAGE_KEYS, POMODORO_STATE } from "~constants";
import type { PomodoroSettings, PomodoroState, PomodoroStats, VoidFunction } from "~types";
import { getLocalStorageItem, setLocalStorageItem } from "~utils";

export const setPomodoroSettings = (item: PomodoroSettings) =>
    setLocalStorageItem(POMODORO_LOCALSTORAGE_KEYS.settings, item);

export const setPomodoroStats = (item: PomodoroStats) => setLocalStorageItem(POMODORO_LOCALSTORAGE_KEYS.stats, item);

export const getPomodoroSettings = () => getLocalStorageItem<PomodoroSettings>(POMODORO_LOCALSTORAGE_KEYS.settings);

export const getPomodoroStats = () => getLocalStorageItem<PomodoroStats>(POMODORO_LOCALSTORAGE_KEYS.stats);

export const initializeLocalStorage = () => {
    const storedSettings = getPomodoroSettings();
    const storedStats = getPomodoroStats();

    if (!storedSettings) setPomodoroSettings(POMODORO_STATE.settings);
    if (!storedStats) setPomodoroStats(POMODORO_STATE.stats);
};

export const initialSyncWithLocalStorage = () => {
    const storedSettings = getPomodoroSettings();
    const storedStats = getPomodoroStats();

    if (storedSettings && storedStats) {
        const settings = storedSettings;
        const stats = storedStats;
        const isEqual = JSON.stringify({ settings, stats }) === JSON.stringify(POMODORO_STATE);

        if (!isEqual)
            return {
                settings,
                session: {
                    ...POMODORO_STATE.session,
                    duration: {
                        total: settings.durations.focus,
                        remaining: settings.durations.focus
                    }
                },
                stats
            };
    }

    return POMODORO_STATE;
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
