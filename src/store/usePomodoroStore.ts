import { create } from "zustand";
import { MILLISECONDS_PER_SECOND, POMODORO_STATE, POMODORO_STATUS } from "~constants";
import { initialSyncWithLocalStorage, setPomodoroSettings, setPomodoroStats, skipPomodoroMode } from "~helpers";
import type { PomodoroStore } from "./types";

export const usePomodoroStore = create<PomodoroStore>((set) => ({
    state: initialSyncWithLocalStorage(),
    toggleSounds: () =>
        set((store) => {
            const updatedSettings = {
                ...store.state.settings,
                soundsEnabled: !store.state.settings.soundsEnabled
            };
            setPomodoroSettings(updatedSettings);

            return {
                ...store,
                state: {
                    ...store.state,
                    settings: updatedSettings
                }
            };
        }),
    setDuration: (key, value) =>
        set((store) => {
            const updatedSettings = {
                ...store.state.settings,
                durations: { ...store.state.settings.durations, [key]: value }
            };
            setPomodoroSettings(updatedSettings);

            return {
                ...store,
                state: {
                    ...store.state,
                    settings: updatedSettings,
                    session: {
                        ...store.state.session,
                        duration:
                            store.state.session.status === "idle" ?
                                {
                                    total: value,
                                    remaining: value
                                }
                            :   store.state.session.duration
                    }
                }
            };
        }),
    setCyclesBeforeLongBreak: (value) =>
        set((store) => {
            const updatedSettings = {
                ...store.state.settings,
                cyclesBeforeLongBreak: value
            };
            setPomodoroSettings(updatedSettings);

            return {
                ...store,
                state: {
                    ...store.state,
                    settings: updatedSettings
                }
            };
        }),
    resetSettings: () =>
        set((store) => {
            const updatedSettings = POMODORO_STATE.settings;
            setPomodoroSettings(updatedSettings);

            return {
                ...store,
                state: {
                    ...store.state,
                    settings: updatedSettings,
                    session: {
                        ...store.state.session,
                        duration:
                            store.state.session.status === "idle" ?
                                {
                                    total: POMODORO_STATE.settings.durations[store.state.session.mode],
                                    remaining: POMODORO_STATE.settings.durations[store.state.session.mode]
                                }
                            :   store.state.session.duration
                    }
                }
            };
        }),
    tickTimeRemaining: (playSound) =>
        set((store) => {
            let updatedSession = {
                ...store.state.session,
                duration: {
                    ...store.state.session.duration,
                    remaining: store.state.session.duration.remaining - MILLISECONDS_PER_SECOND
                }
            };
            let updatedStats = { ...store.state.stats };
            const isTimeUp = updatedSession.duration.remaining < 0;
            const isFocusMode = updatedSession.mode === "focus";

            if (isTimeUp) {
                const { mode, duration, cycleCount } = skipPomodoroMode(
                    {
                        ...store.state,
                        session: updatedSession
                    },
                    playSound
                );
                updatedSession = {
                    ...updatedSession,
                    mode,
                    duration: {
                        total: duration,
                        remaining: duration
                    },
                    cycleCount
                };

                if (isFocusMode) {
                    updatedStats = {
                        pomodorosCompleted: store.state.stats.pomodorosCompleted + 1,
                        totalFocusTime: store.state.stats.totalFocusTime + store.state.session.duration.total
                    };
                    setPomodoroStats(updatedStats);
                }
            }

            return {
                state: {
                    ...store.state,
                    session: updatedSession,
                    stats: updatedStats
                }
            };
        }),
    toggleStatus: (playSound) =>
        set((store) => {
            const updatedStats = POMODORO_STATUS.transition[store.state.session.status];

            if (store.state.settings.soundsEnabled && updatedStats === "running" && playSound) playSound();

            return {
                state: {
                    ...store.state,
                    session: {
                        ...store.state.session,
                        status: updatedStats
                    }
                }
            };
        }),
    restartSession: () =>
        set((store) => ({
            state: {
                ...store.state,
                session: {
                    ...POMODORO_STATE.session,
                    duration: {
                        total: store.state.settings.durations.focus,
                        remaining: store.state.settings.durations.focus
                    }
                }
            }
        })),
    skipMode: (playSound) =>
        set((store) => {
            const { mode, duration, cycleCount } = skipPomodoroMode(store.state, playSound);

            return {
                state: {
                    ...store.state,
                    session: {
                        ...store.state.session,
                        mode,
                        duration: {
                            total: duration,
                            remaining: duration
                        },
                        cycleCount
                    }
                }
            };
        })
}));
