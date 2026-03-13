import type { InputHTMLAttributes, ReactNode } from "react";

export type Child = ReactNode;
export type ElementRef = null | HTMLElement;
export type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

export interface Children {
    children: Child;
}
export interface RenderTransition {
    immediate: boolean;
    delayed: boolean;
}
export interface RenderTransitionControls {
    render: RenderTransition;
    close: () => void;
    exitDelay?: number;
}
