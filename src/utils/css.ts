import type { CSSProperties } from "react";
import { STRING } from "~constants";
import { formatStringWithAffixes } from "./format";

export const createCSSVariables = (variables: Record<string, string>) => {
    const entries = Object.entries(variables).map(([name, value]) => {
        const variableName = formatStringWithAffixes(name, { prefix: `${STRING.hyphen}${STRING.hyphen}` });

        return [variableName, value] as [string, string];
    });

    return Object.fromEntries(entries) as CSSProperties;
};
