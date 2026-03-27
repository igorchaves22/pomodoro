import { REGEX, STRING } from "~constants";

export const formatNumberToTwoDigits = (value: number) => String(value).padStart(2, "0");

export const formatStringToKebabCase = (value: string) =>
    value
        .normalize("NFD")
        .replace(REGEX.accents, STRING.empty)
        .replace(REGEX.camelCase, "$1-$2")
        .replace(REGEX.spacesAndUnderscores, STRING.hyphen)
        .replace(REGEX.specialCharacters, STRING.space)
        .toLowerCase()
        .replace(REGEX.multipleDashes, STRING.hyphen)
        .replace(REGEX.edgeDashes, STRING.space);

export const formatStringWithAffixes = (value: string, affixes?: { prefix?: string; suffix?: string }) => {
    const prefix = affixes?.prefix ?? STRING.empty;
    const suffix = affixes?.suffix ?? STRING.empty;

    return `${prefix}${value}${suffix}`;
};
