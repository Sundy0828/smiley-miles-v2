import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import { ButtonType, ClassNameProps, QaIdProps } from "../PropTypes";
import classNames from "classnames";

export interface ButtonProps extends ClassNameProps, QaIdProps {
  children?: ReactNode;
  onClick: () => void;
  buttonType?: ButtonType;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  qaId,
  buttonType = "primary",
  icon,
}) => {
  const buttonClasses = classNames(
    className,
    styles.button,
    styles[buttonType],
    {
      [styles.iconAndContent]: icon && children,
    }
  );

  return (
    <button className={buttonClasses} onClick={onClick} data-testid={qaId}>
      {icon}
      {children}
    </button>
  );
};
