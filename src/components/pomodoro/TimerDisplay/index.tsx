import { POMODORO_STATUS } from "~constants";
import { formatClassName } from "~helpers";
import { formatDuration, formatStringIfTrue, formatStringToKebabCase } from "~utils";
import { useController } from "./hooks";
import styles from "./styles.module.scss";

export const TimerDisplay = () => {
    const { status, mode, timerProgress, remaining, indicators } = useController();

    return (
        <section className={styles.container}>
            <div
                className={formatClassName([
                    styles.container__box,
                    styles["container__box--status"],
                    styles[
                        `container__box--${formatStringIfTrue(status === "idle", "idle", formatStringToKebabCase(mode))}`
                    ]
                ])}
            >
                <span
                    className={formatClassName([
                        styles.container__text,
                        styles["container__text--status"],
                        styles[
                            `container__text--${formatStringIfTrue(status === "idle", "idle", formatStringToKebabCase(mode))}`
                        ]
                    ])}
                >
                    {POMODORO_STATUS.labels[status === "idle" ? "idle" : mode]}
                </span>
            </div>
            <div className={formatClassName([styles.container__box, styles["container__box--clock"]])}>
                <svg viewBox={`0 0 ${timerProgress.size} ${timerProgress.size}`}>
                    <circle
                        fill="none"
                        stroke="#616161"
                        {...timerProgress.trackCircle}
                    />
                    <circle
                        fill="none"
                        strokeLinecap="round"
                        style={{
                            transition: "stroke-dashoffset 0.3s linear",
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%"
                        }}
                        {...timerProgress.progressCircle}
                    />
                </svg>
                <time className={formatClassName([styles.container__text, styles["container__text--clock"]])}>
                    {formatDuration(remaining, "clock")}
                </time>
            </div>
            <div className={styles.container__box}>
                <span className={formatClassName([styles.container__text, styles["container__text--cyclo"]])}>
                    Cyclo:
                </span>
                <div className={formatClassName([styles.container__box, styles["container__box--indicators"]])}>
                    {indicators.map((indicator, index) => (
                        <div
                            key={index}
                            className={formatClassName([
                                styles.container__box,
                                styles["container__box--indicator"],
                                formatStringIfTrue(indicator, styles["container__box--completed"])
                            ])}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
