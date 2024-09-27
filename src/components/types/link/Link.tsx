import React, { ReactNode } from "react";
import styles from "./Link.module.scss";
import { ClassNameProps, QaIdProps } from "../../PropTypes";
import classNames from "classnames";
import { Icon } from "../../icons/Icon";

export interface LinkProps extends ClassNameProps, QaIdProps {
  href: string;
  isExternal?: boolean;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  isExternal = false,
  children,
  className,
  qaId,
}) => {
  const linkClasses = classNames(className, styles.link);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={linkClasses}
      data-qa-id={qaId}
    >
      {children}
      {isExternal && (
        <span className={styles.linkIcon} aria-hidden>
          <Icon name="EXTERNAL" size="micro" />
        </span>
      )}
    </a>
  );
};
