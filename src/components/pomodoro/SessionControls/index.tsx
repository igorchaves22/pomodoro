import { Icon } from "~components/ui";
import { formatClassName, renderElementIfTrue } from "~helpers";
import { createCSSVariables, formatStringIfTrue } from "~utils";
import { LABELS, SKIP_MODE_BUTTON_DURATION_MILLISECONDS } from "./constants";
import { useController } from "./hooks";
import styles from "./styles.module.scss";

export const SessionControls = () => {
    const { status, isDisabled, isSkipModeButtonShown, handleToggleStatus, restartSession, handleSkipMode } =
        useController();

    return (
        <section className={styles.container}>
            <button
                type="button"
                aria-label="Toggle timer status"
                onClick={handleToggleStatus}
                className={formatClassName([styles.container__button, styles["container__button--status"]])}
            >
                <Icon
                    icon={LABELS[status]}
                    color="base"
                    weight="bold"
                />
            </button>
            <button
                type="button"
                aria-label="Restart session"
                disabled={isDisabled}
                onClick={restartSession}
                className={formatClassName([styles.container__button, styles["container__button--restart"]])}
            >
                <Icon
                    icon={LABELS.restart}
                    weight="bold"
                />
            </button>
            {renderElementIfTrue(
                isSkipModeButtonShown.delayed,
                <button
                    type="button"
                    aria-label="Skip current mode"
                    disabled={isDisabled}
                    style={createCSSVariables({
                        "skip-mode-button-duration": `${SKIP_MODE_BUTTON_DURATION_MILLISECONDS}ms`
                    })}
                    onClick={handleSkipMode}
                    className={formatClassName([
                        styles.container__button,
                        styles[
                            `container__button--${formatStringIfTrue(isSkipModeButtonShown.immediate, "show", "hide")}`
                        ]
                    ])}
                >
                    <Icon
                        icon={LABELS.skip}
                        weight="bold"
                    />
                </button>
            )}
        </section>
    );
};
