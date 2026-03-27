import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import type { Icon, ThemeColorKeys, ThemeIconSizeKeys } from "~types";

export interface IconProps extends Icon, Pick<PhosphorIconProps, "weight"> {
    color?: ThemeColorKeys;
    size?: ThemeIconSizeKeys;
}
