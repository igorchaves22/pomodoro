import type { PomodoroState } from "~types";

export const POMODORO_LOCALSTORAGE_KEYS = {
    settings: "pomodoro-settings",
    stats: "pomodoro-stats"
} as const;

const FOCUS_DURATION_MILLISECONDS = 1500000;
export const POMODORO_DEFAULT_STATE = {
    settings: {
        durations: {
            focus: FOCUS_DURATION_MILLISECONDS,
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
            total: FOCUS_DURATION_MILLISECONDS,
            remaining: FOCUS_DURATION_MILLISECONDS
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
        status: {
            idle: "running",
            running: "paused",
            paused: "running"
        },
        colors: {
            focus: "#00ff0c",
            shortBreak: "#4fc3f7",
            longBreak: "#7e57c2"
        }
    },
    labels: {
        idle: "Ready to start",
        focus: "Focus",
        shortBreak: "Short Break",
        longBreak: "Long break"
    }
} as const;
