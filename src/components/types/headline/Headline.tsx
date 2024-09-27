import React, { ReactNode } from "react";
import styles from "./Headline.module.scss";
import { ClassNameProps, QaIdProps, TextColor } from "../../PropTypes";
import classNames from "classnames";

export interface HeadlineProps extends ClassNameProps, QaIdProps {
  level?: "1" | "2" | "3";
  children: ReactNode;
  textColor?: TextColor;
}

export const Headline: React.FC<HeadlineProps> = ({
  level = "1",
  children,
  className,
  qaId,
  textColor = "default",
}) => {
  const headlineClasses = classNames(
    className,
    styles[textColor],
    styles.headline
  );
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically choose the tag

  return (
    <Tag className={headlineClasses} data-testid={qaId}>
      {children}
    </Tag>
  );
};
