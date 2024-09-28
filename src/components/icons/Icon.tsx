import classNames from "classnames";
import React, { AriaAttributes } from "react";
import { ClassNameProps, QaIdProps, Size } from "../PropTypes";
import styles from "./Icon.module.scss";
import IconEnum from "./IconEnum";

export interface IconProps extends AriaAttributes, ClassNameProps, QaIdProps {
  viewBox?: string;
  size?: Size; // Add size prop
  name: keyof typeof IconEnum;
}

export function Icon({
  viewBox = "0 -960 960 960",
  className,
  qaId,
  size = "default",
  name,
  ...rest
}: IconProps) {
  const iconClasses = classNames(className, styles[size]);
  const path = IconEnum[name];

  return (
    <svg
      viewBox={viewBox}
      aria-label={rest["aria-hidden"] ? undefined : name}
      role="img"
      fillRule="evenodd"
      data-testid={qaId}
      className={iconClasses}
      {...rest}
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
}
