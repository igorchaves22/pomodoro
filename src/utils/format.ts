import { REGEX, STRING } from "~constants";

export const formatNumberToTwoDigits = (value: number) => String(value).padStart(2, "0");

export const formatStringToKebabCase = (value: string) =>
    value
        .normalize("NFD")
        .replace(REGEX.accents, STRING.empty)
        .replace(REGEX.camelCase, "$1-$2")
        .replace(REGEX.spacesAndUnderscores, "-")
        .replace(REGEX.specialCharacters, STRING.space)
        .toLowerCase()
        .replace(REGEX.multipleDashes, "-")
        .replace(REGEX.edgeDashes, STRING.space);

export const formatStringWithAffixes = (value: string, affixes?: { prefix?: string; suffix?: string }) => {
    const prefix = affixes?.prefix ?? STRING.empty;
    const suffix = affixes?.suffix ?? STRING.empty;

    return `${prefix}${value}${suffix}`;
};

export const formatStringIfTrue = (condition: unknown, string: string, elseString?: string) => {
    if (!condition) {
        if (!elseString) return STRING.empty;

        return elseString;
    }

    return string;
};
