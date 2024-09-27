import React from "react";
import styles from "./Radio.module.scss";
import { ClassNameProps, QaIdProps } from "../../PropTypes";
import classNames from "classnames";

export interface RadioProps extends ClassNameProps, QaIdProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const Radio: React.FC<RadioProps> = ({
  name,
  value,
  onChange,
  className,
  qaId,
}) => {
  const radioClasses = classNames(className, styles.radio);

  return (
    <label className={radioClasses} data-qa-id={qaId}>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={() => onChange(value)}
      />
      {value}
    </label>
  );
};
