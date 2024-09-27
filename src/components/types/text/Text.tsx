import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Text.module.scss";
import { ClassNameProps, QaIdProps } from "../../PropTypes";

export interface TextProps extends ClassNameProps, QaIdProps {
  size?: "micro" | "small" | "default" | "large";
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({
  size = "default",
  children,
  className,
  qaId,
}) => {
  const textClass = classNames(className, styles.text, styles[`text${size}`]);

  return (
    <p data-testid={qaId} className={textClass}>
      {children}
    </p>
  );
};
