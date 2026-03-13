import type { CSSProperties } from "react";
import { formatStringWithAffixes } from "./format";

export const createCSSVariables = (variables: Record<string, string>) => {
    const entries = Object.entries(variables).map(([name, value]) => {
        const variableName = formatStringWithAffixes(name, { prefix: "--" });

        return [variableName, value] as [string, string];
    });

    return Object.fromEntries(entries) as CSSProperties;
};
