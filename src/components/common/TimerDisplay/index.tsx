import { formatDuration } from "~utils";
import { useHook } from "./hooks";
import S from "./styles.module.scss";

export const TimerDisplay = () => {
    const { progress, remaining } = useHook();

    return (
        <div className={S.container}>
            <svg viewBox={`0 0 ${progress.size} ${progress.size}`}>
                <circle
                    fill="none"
                    stroke="#616161"
                    {...progress.trackCircle}
                />
                <circle
                    fill="none"
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.3s linear",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%"
                    }}
                    {...progress.progressCircle}
                />
            </svg>
            <time className={S.container__text}>{formatDuration(remaining, "clock")}</time>
        </div>
    );
};
