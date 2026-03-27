import { Logo } from "~components/ui";
import { formatClassName } from "~helpers";
import { usePomodoroStore } from "~store";
import { formatDuration } from "~utils";
import S from "./styles.module.scss";

export const Stats = () => {
    const {
        state: {
            stats: { pomodorosCompleted, totalFocusTime }
        }
    } = usePomodoroStore();

    return (
        <section className={S.container}>
            <h2 className={formatClassName([S.container__text, S["container__text--title"]])}>Statistics</h2>
            <dl className={formatClassName([S.container__box, S["container__box--list"]])}>
                <div className={formatClassName([S.container__box, S["container__box--item"]])}>
                    <dt className={formatClassName([S.container__text, S["container__text--caption"]])}>Pomodoros</dt>
                    <dd className={formatClassName([S.container__box, S["container__box--completed"]])}>
                        <span
                            className={formatClassName([
                                S.container__text,
                                S["container__text--value"],
                                S["container__text--completed"]
                            ])}
                        >
                            {pomodorosCompleted}
                        </span>
                        <Logo isHideName />
                    </dd>
                </div>
                <div className={formatClassName([S.container__box, S["container__box--item"]])}>
                    <dt className={formatClassName([S.container__text, S["container__text--caption"]])}>
                        Focused time
                    </dt>
                    <dd className={S.container__box}>
                        <time className={formatClassName([S.container__text, S["container__text--value"]])}>
                            {formatDuration(totalFocusTime, "text")}
                        </time>
                    </dd>
                </div>
            </dl>
        </section>
    );
};
