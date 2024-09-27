import React, { useState } from "react";
import styles from "./Accordion.module.scss"; // Import styles here
import { Icon } from "../icons/Icon";
import { QaIdProps, ClassNameProps } from "../PropTypes";
import classNames from "classnames";
import { Headline } from "../types";

interface AccordionProps extends ClassNameProps, QaIdProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className,
  qaId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const contentClasses = classNames(className, styles.accordion__content, {
    [styles.show]: isOpen,
  });

  return (
    <div className={styles.accordion} data-testid={qaId}>
      <div className={styles.accordion__header} onClick={toggleAccordion}>
        <Headline level="2">{title}</Headline>
        <Icon name={isOpen ? "ARROW_UP" : "ARROW_DOWN"} />
      </div>
      <div className={contentClasses}>{children}</div>
    </div>
  );
};
