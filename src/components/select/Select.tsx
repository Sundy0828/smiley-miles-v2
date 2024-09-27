import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";
import { ClassNameProps, QaIdProps } from "../PropTypes";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps extends ClassNameProps, QaIdProps {
  options: Option[];
  isMulti?: boolean;
  placeholder?: string;
  onChange: (selected: Option | Option[]) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  isMulti = false,
  placeholder = "Select...",
  onChange,
  className,
  qaId,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleSelect = (option: Option) => {
    if (isMulti) {
      const isSelected = selectedOptions.some(
        (selected) => selected.value === option.value
      );
      const newSelectedOptions = isSelected
        ? selectedOptions.filter((selected) => selected.value !== option.value)
        : [...selectedOptions, option];

      setSelectedOptions(newSelectedOptions);
      onChange(newSelectedOptions);
    } else {
      setSelectedOptions([option]);
      onChange(option);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectContainerClasses = classNames(className, styles.selectContainer);

  return (
    <div className={selectContainerClasses} data-qa-id={qaId}>
      <input
        type="text"
        className={styles.selectSearch}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className={styles.selectOptions}>
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => {
            const isSelected = selectedOptions.some(
              (selected) => selected.value === option.value
            );
            const optionClass = classNames(styles.selectOption, {
              [styles.selected]: isSelected,
            });

            return (
              <li
                key={option.value}
                className={optionClass}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            );
          })
        ) : (
          <li className={styles.noOptions}>No options found</li>
        )}
      </ul>
    </div>
  );
};
