import { Icon, Modal, RangeInput, SliderInput } from "~components/ui";
import { MILLISECONDS_PER_MINUTE } from "~constants";
import { formatClassName, formatStringIfTrue } from "~helpers";
import { usePomodoroStore } from "~store";
import type { RenderTransitionControls } from "~types";
import { createCSSVariables, formatNumberToTwoDigits } from "~utils";
import S from "./styles.module.scss";

export const Settings = ({ render, close, exitDelay }: RenderTransitionControls) => {
    const {
        state: {
            settings: {
                durations: { focus, shortBreak, longBreak },
                cyclesBeforeLongBreak,
                soundsEnabled
            }
        },
        toggleSounds,
        setDuration,
        setCyclesBeforeLongBreak,
        resetSettings
    } = usePomodoroStore();

    return (
        <Modal
            render={render}
            close={close}
            exitDelay={exitDelay}
        >
            <form
                style={createCSSVariables({
                    "container-hide-delay": `${exitDelay}ms`
                })}
                className={formatClassName([
                    S.container,
                    S[`container--${formatStringIfTrue(render.immediate, "show", "hide")}`]
                ])}
            >
                <div className={formatClassName([S.container__box, S["container__box--heading"]])}>
                    <h2 className={formatClassName([S.container__text, S["container__text--title"]])}>Settings</h2>
                    <button
                        type="button"
                        aria-label="Close settings"
                        onClick={close}
                        className={S.container__button}
                    >
                        <Icon
                            icon="X"
                            weight="bold"
                            size="lg"
                        />
                    </button>
                </div>
                <div className={formatClassName([S.container__box, S["container__box--main"]])}>
                    <fieldset className={formatClassName([S.container__box, S["container__box--fieldset"]])}>
                        <legend className={formatClassName([S.container__text, S["container__text--subtitle"]])}>
                            General settings
                        </legend>
                        <div className={formatClassName([S.container__box, S["container__box--fields"]])}>
                            <SliderInput
                                htmlFor="Sounds"
                                text="Sounds"
                                icon="SpeakerHigh"
                                inputOptions={{
                                    checked: soundsEnabled,
                                    onChange: toggleSounds
                                }}
                            />
                        </div>
                    </fieldset>
                    <fieldset className={formatClassName([S.container__box, S["container__box--fieldset"]])}>
                        <legend className={formatClassName([S.container__text, S["container__text--subtitle"]])}>
                            Durations
                        </legend>
                        <div className={formatClassName([S.container__box, S["container__box--fields"]])}>
                            <RangeInput
                                htmlFor="focusTime"
                                text="Focus"
                                output={formatNumberToTwoDigits(focus / MILLISECONDS_PER_MINUTE)}
                                inputOptions={{
                                    step: 5,
                                    min: 5,
                                    max: 60,
                                    value: focus / MILLISECONDS_PER_MINUTE,
                                    onChange: (event) =>
                                        setDuration("focus", Number(event.target.value) * MILLISECONDS_PER_MINUTE)
                                }}
                            />
                            <RangeInput
                                htmlFor="shortBreakTime"
                                text="Short break"
                                output={formatNumberToTwoDigits(shortBreak / MILLISECONDS_PER_MINUTE)}
                                inputOptions={{
                                    step: 1,
                                    min: 1,
                                    max: 15,
                                    value: shortBreak / MILLISECONDS_PER_MINUTE,
                                    onChange: (event) =>
                                        setDuration("shortBreak", Number(event.target.value) * MILLISECONDS_PER_MINUTE)
                                }}
                            />
                            <RangeInput
                                htmlFor="longBreakTime"
                                text="Long break"
                                output={formatNumberToTwoDigits(longBreak / MILLISECONDS_PER_MINUTE)}
                                inputOptions={{
                                    step: 5,
                                    min: 10,
                                    max: 30,
                                    value: longBreak / MILLISECONDS_PER_MINUTE,
                                    onChange: (event) =>
                                        setDuration("longBreak", Number(event.target.value) * MILLISECONDS_PER_MINUTE)
                                }}
                            />
                            <RangeInput
                                htmlFor="cyclesBeforeLongBreak"
                                text="Cycles before the long break"
                                output={`${cyclesBeforeLongBreak}`}
                                inputOptions={{
                                    step: 1,
                                    min: 2,
                                    max: 6,
                                    value: cyclesBeforeLongBreak,
                                    onChange: (event) => setCyclesBeforeLongBreak(Number(event.target.value))
                                }}
                            />
                        </div>
                    </fieldset>
                    <button
                        type="button"
                        onClick={resetSettings}
                        className={formatClassName([S.container__button, S["container__button--reset"]])}
                    >
                        <Icon
                            icon="ArrowCounterClockwise"
                            color="base"
                            weight="bold"
                            size="sm"
                        />
                        <span className={formatClassName([S.container__text, S["container__text--reset"]])}>
                            Restore
                        </span>
                    </button>
                </div>
            </form>
        </Modal>
    );
};
