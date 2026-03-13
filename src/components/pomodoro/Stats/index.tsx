import logoSvg from "~assets/svg/logo.svg";
import { formatClassName } from "~helpers";
import { usePomodoroStore } from "~store";
import { formatDuration } from "~utils";
import styles from "./styles.module.scss";

export const Stats = () => {
    const {
        state: {
            stats: { pomodorosCompleted, totalFocusTime }
        }
    } = usePomodoroStore();

    return (
        <section className={styles.container}>
            <h3 className={formatClassName([styles.container__text, styles["container__text--title"]])}>Statistics</h3>
            <dl className={formatClassName([styles.container__box, styles["container__box--list"]])}>
                <div className={formatClassName([styles.container__box, styles["container__box--item"]])}>
                    <dt className={formatClassName([styles.container__text, styles["container__text--caption"]])}>
                        Pomodoros
                    </dt>
                    <dd className={formatClassName([styles.container__box, styles["container__box--completed"]])}>
                        <span
                            className={formatClassName([
                                styles.container__text,
                                styles["container__text--value"],
                                styles["container__text--completed"]
                            ])}
                        >
                            {pomodorosCompleted}
                        </span>
                        <img
                            src={logoSvg}
                            alt="Pomodoro logo"
                            loading="eager"
                            className={styles.container__image}
                        />
                    </dd>
                </div>
                <div className={formatClassName([styles.container__box, styles["container__box--item"]])}>
                    <dt className={formatClassName([styles.container__text, styles["container__text--caption"]])}>
                        Focused time
                    </dt>
                    <dd className={styles.container__box}>
                        <time className={formatClassName([styles.container__text, styles["container__text--value"]])}>
                            {formatDuration(totalFocusTime, "text")}
                        </time>
                    </dd>
                </div>
            </dl>
        </section>
    );
};
