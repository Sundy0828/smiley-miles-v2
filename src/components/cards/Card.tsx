import React, { ReactNode, MouseEventHandler } from "react";
import classNames from "classnames";
import styles from "./Card.module.scss"; // Include styling
import { ClassNameProps, QaIdProps } from "../PropTypes";

interface CardProps extends ClassNameProps, QaIdProps {
  children: ReactNode;
  elevation?: number; // Can be used for shadow effect
  variant?: "outlined" | "elevated"; // Different styles
  onClick?: MouseEventHandler<HTMLDivElement>; // Click handler
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 1,
  variant = "elevated",
  className,
  onClick,
  qaId,
}) => {
  const cardClasses = classNames(
    styles.card,
    {
      [styles.elevated]: variant === "elevated",
      [styles.outlined]: variant === "outlined",
      [styles[`elevation${elevation}`]]: elevation > 0, // Assuming you have styles for elevation levels
    },
    className
  );

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      role="button"
      tabIndex={0}
      data-qa-id={qaId}
    >
      {children}
    </div>
  );
};
