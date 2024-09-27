import React from "react";
import styles from "./Checkbox.module.scss";
import { ClassNameProps, QaIdProps } from "../../PropTypes";
import classNames from "classnames";

export interface CheckboxProps extends ClassNameProps, QaIdProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className,
  qaId,
}) => {
  const checkboxClasses = classNames(className, styles.checkbox);

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        data-qa-id={qaId}
      />
      {label}
    </label>
  );
};
