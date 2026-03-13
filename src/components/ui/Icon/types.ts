import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import type { Colors, Icon, IconSize } from "~types";

export interface IconProps extends Icon, Pick<PhosphorIconProps, "weight" | "mirrored"> {
    color?: Colors;
    size?: IconSize;
}
