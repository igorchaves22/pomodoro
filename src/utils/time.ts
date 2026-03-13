import { MILLISECONDS_PER_HOUR, MILLISECONDS_PER_MINUTE, MILLISECONDS_PER_SECOND, STRING } from "~constants";
import { formatNumberToTwoDigits, formatStringWithAffixes } from "./format";

export const convertMillisecondsToHMS = (totalMilliseconds: number) => {
    const hours = Math.floor(totalMilliseconds / MILLISECONDS_PER_HOUR);
    const minutes = Math.floor((totalMilliseconds % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE);
    const seconds = Math.floor((totalMilliseconds % MILLISECONDS_PER_MINUTE) / MILLISECONDS_PER_SECOND);

    return { hours, minutes, seconds };
};

export const formatDuration = (totalMilliseconds: number, format: "clock" | "text") => {
    const { hours, minutes, seconds } = convertMillisecondsToHMS(totalMilliseconds);
    const formattedHours = formatStringWithAffixes(formatNumberToTwoDigits(hours), {
        suffix: format === "clock" ? STRING.colon : "h "
    });
    const formattedMinutes = formatStringWithAffixes(formatNumberToTwoDigits(minutes), {
        suffix: format === "clock" ? STRING.colon : "min "
    });
    const formattedSeconds = formatStringWithAffixes(formatNumberToTwoDigits(seconds), {
        suffix: format === "clock" ? STRING.empty : "s"
    });

    return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
};
