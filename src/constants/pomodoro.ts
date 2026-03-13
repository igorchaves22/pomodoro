import type { PomodoroState } from "~types";

export const POMODORO_LOCALSTORAGE_KEYS = {
    settings: "pomodoro-settings",
    stats: "pomodoro-stats"
} as const;

const FOCUS_DURATION_MS = 1500000;
export const POMODORO_STATE = {
    settings: {
        durations: {
            focus: FOCUS_DURATION_MS,
            shortBreak: 300000,
            longBreak: 900000
        },
        cyclesBeforeLongBreak: 4,
        soundsEnabled: true
    },
    session: {
        status: "idle",
        mode: "focus",
        duration: {
            total: FOCUS_DURATION_MS,
            remaining: FOCUS_DURATION_MS
        },
        cycleCount: 0
    },
    stats: {
        pomodorosCompleted: 0,
        totalFocusTime: 0
    }
} as PomodoroState;
export const POMODORO_STATUS = {
    transition: {
        idle: "running",
        running: "paused",
        paused: "running"
    },
    labels: {
        idle: "Ready to start",
        focus: "Focus",
        shortBreak: "Short Break",
        longBreak: "Long break"
    }
} as const;
