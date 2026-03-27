import { TimerDisplay } from "~components/common";
import { POMODORO_STATUS } from "~constants";
import { formatClassName, formatStringIfTrue } from "~helpers";
import { formatStringToKebabCase } from "~utils";
import { useHook } from "./hooks";
import S from "./styles.module.scss";

export const SessionTimer = () => {
    const { status, mode, indicators } = useHook();

    return (
        <section className={S.container}>
            <div
                className={formatClassName([
                    S.container__box,
                    S["container__box--status"],
                    S[`container__box--${formatStringIfTrue(status === "idle", "idle", formatStringToKebabCase(mode))}`]
                ])}
            >
                <span
                    className={formatClassName([
                        S.container__text,
                        S["container__text--status"],
                        S[
                            `container__text--${formatStringIfTrue(status === "idle", "idle", formatStringToKebabCase(mode))}`
                        ]
                    ])}
                >
                    {POMODORO_STATUS.labels[status === "idle" ? "idle" : mode]}
                </span>
            </div>
            <TimerDisplay />
            <div className={S.container__box}>
                <span className={formatClassName([S.container__text, S["container__text--cyclo"]])}>Cyclo:</span>
                <div className={formatClassName([S.container__box, S["container__box--indicators"]])}>
                    {indicators.map((indicator, index) => (
                        <div
                            key={index}
                            className={formatClassName([
                                S.container__box,
                                S["container__box--indicator"],
                                formatStringIfTrue(indicator, S["container__box--completed"])
                            ])}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
