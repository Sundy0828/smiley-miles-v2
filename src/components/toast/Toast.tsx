import React, { useEffect } from "react";
import classNames from "classnames";
import styles from "./Toast.module.scss";
import { ClassNameProps, QaIdProps } from "../PropTypes";
import { Button } from "../button/Button";
import { Icon } from "../icons/Icon";

interface ToastProps extends ClassNameProps, QaIdProps {
  id: string;
  message: string;
  duration?: "short" | "long" | "indefinite";
  onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  duration = "short",
  onClose,
  className,
  qaId,
}) => {
  const durationMap: { [key in "short" | "long"]: number } = {
    short: 4000,
    long: 8000,
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (duration !== "indefinite") {
      timer = setTimeout(() => {
        onClose(id);
      }, durationMap[duration]);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [id, duration, onClose]);

  const toastClasses = classNames(className, styles.toast);

  return (
    <div className={toastClasses} data-testid={qaId}>
      <Button
        className={styles.dismissButton}
        onClick={() => onClose(id)}
        icon={<Icon name="CLOSE" />}
      />
      {message}
    </div>
  );
};

export default Toast;
