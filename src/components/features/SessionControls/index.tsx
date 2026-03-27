import { SessionButton } from "~components/common";
import { renderElementIfTrue } from "~helpers";
import { LABELS, SKIP_MODE_BUTTON_DURATION_MILLISECONDS } from "./constants";
import { useHook } from "./hooks";
import S from "./styles.module.scss";

export const SessionControls = () => {
    const { status, isDisabled, isSkipModeButtonShown, handleClickToggleStatus, restartSession, handleClickSkipMode } =
        useHook();

    return (
        <section className={S.container}>
            <SessionButton
                aria-label="Toggle timer status"
                onClick={handleClickToggleStatus}
                layout="status"
                icon={LABELS[status]}
            />
            <SessionButton
                aria-label="Restart session"
                disabled={isDisabled}
                onClick={restartSession}
                layout="restart"
                icon={LABELS.restart}
            />
            {renderElementIfTrue(
                isSkipModeButtonShown.delayed,
                <SessionButton
                    aria-label="Skip current mode"
                    disabled={isDisabled}
                    onClick={handleClickSkipMode}
                    animation={{
                        type: isSkipModeButtonShown.immediate ? "show" : "hide",
                        duration: SKIP_MODE_BUTTON_DURATION_MILLISECONDS
                    }}
                    icon={LABELS.skip}
                />
            )}
        </section>
    );
};
