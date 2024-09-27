import React, { AriaAttributes, ReactNode } from "react";
import { ClassNameProps, QaIdProps, Size } from "../PropTypes";
import classNames from "classnames";
import styles from "./Icon.module.scss";
import IconEnum from "./IconEnum";

export interface IconProps extends AriaAttributes, ClassNameProps, QaIdProps {
  children?: ReactNode;
  viewBox?: string;
  title?: string;
  size?: Size; // Add size prop
  name: keyof typeof IconEnum;
}

export function Icon({
  children,
  viewBox = "0 -960 960 960",
  title,
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
      data-qa-id={qaId}
      className={iconClasses}
      {...rest}
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
}
