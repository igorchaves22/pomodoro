import { Settings } from "~components/pomodoro";
import { Icon } from "~components/ui";
import { EXIT_DELAY_MILLISECONDS } from "./constants";
import { useController } from "./hooks";
import styles from "./styles.module.scss";

export const Header = () => {
    const { headerRef, isSettingsModalOpen, handleSettingModal } = useController();

    return (
        <header
            ref={headerRef}
            className={styles.container}
        >
            <button
                type="button"
                aria-label="Open settings"
                onClick={() => handleSettingModal(true, 0)}
                className={styles.container__button}
            >
                <Icon
                    icon="Gear"
                    weight="bold"
                />
            </button>
            <Settings
                render={isSettingsModalOpen}
                close={() => handleSettingModal(false, EXIT_DELAY_MILLISECONDS)}
                exitDelay={EXIT_DELAY_MILLISECONDS}
            />
        </header>
    );
};
