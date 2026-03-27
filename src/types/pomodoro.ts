export type PomodoroDurationKeys = keyof PomodoroSettings["durations"];

export interface PomodoroSettings {
    durations: {
        focus: number;
        shortBreak: number;
        longBreak: number;
    };
    cyclesBeforeLongBreak: number;
    soundsEnabled: boolean;
}
export interface PomodoroSession {
    status: "idle" | "running" | "paused";
    mode: "focus" | "shortBreak" | "longBreak";
    duration: {
        total: number;
        remaining: number;
    };
    cycleCount: number;
}
export interface PomodoroStats {
    pomodorosCompleted: number;
    totalFocusTime: number;
}
export interface PomodoroState {
    settings: PomodoroSettings;
    session: PomodoroSession;
    stats: PomodoroStats;
}
