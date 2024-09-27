import React, { useState } from "react";
import classNames from "classnames";
import styles from "./Tooltip.module.scss";
import { ClassNameProps, QaIdProps } from "../PropTypes";

export interface TooltipProps extends ClassNameProps, QaIdProps {
  label: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  label,
  children,
  className,
  qaId,
}) => {
  const [visible, setVisible] = useState(false);

  const tooltipClasses = classNames(className, styles.tooltipText, {
    [styles.visible]: visible,
  });

  return (
    <div
      className={styles.tooltip}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      data-testid={qaId}
    >
      {children}
      <div className={tooltipClasses}>{label}</div>
    </div>
  );
};
