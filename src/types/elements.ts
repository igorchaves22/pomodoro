import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export type Child = ReactNode;
export type ElementRef = HTMLElement | null;
export type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;
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
