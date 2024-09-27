import { ReactElement, MouseEvent } from "react";

export interface ClassNameProps {
  /**
   * Determines the CSS classes to be applied.
   */
  className?: string;
}

export interface QaIdProps {
  /**
   * A unique string to target the component in automated tests. Renders as "data-qa-id" attribute in HTML.
   */
  qaId?: string;
}

export type Action = {
  buttonType?: ButtonType;
  buttonStyle?: "standard" | "minimal";
  text?: string;
  icon?: ReactElement;
  href?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  isDisabled?: boolean;
  isReadOnly?: boolean;
  tooltipPosition?: "top" | "bottom" | "right" | "left";
  tooltipText?: string;
  qaId?: string;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
};

export type TextColor =
  | "default"
  | "subtle"
  | "black"
  | "white"
  | "information"
  | "confirmation"
  | "warning"
  | "critical";

export type ButtonType =
  | "primary"
  | "secondary"
  | "destroy"
  | "confirm"
  | "subtle"
  | "cancel";

export type TooltipPosition = "top" | "bottom" | "right" | "left";

export type Size = "default" | "small" | "micro" | "large";

export type Utility = "information" | "warning" | "critical" | "confirmation";
