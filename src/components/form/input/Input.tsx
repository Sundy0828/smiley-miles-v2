import React from "react";
import styles from "./Input.module.scss";
import { ClassNameProps, QaIdProps } from "../../PropTypes";
import classNames from "classnames";

export interface InputProps extends ClassNameProps, QaIdProps {
  placeholder: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  className,
  qaId,
}) => {
  const inputClasses = classNames(className, styles.input);

  return (
    <input
      className={inputClasses}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      data-qa-id={qaId}
    />
  );
};
