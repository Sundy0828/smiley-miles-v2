import React from "react";
import classNames from "classnames";
import styles from "./YearCard.module.scss"; // Include styling
import { ClassNameProps, QaIdProps } from "../../PropTypes";
import { Card } from "../Card";
import { Headline } from "../../types";
import { Icon } from "../../icons/Icon";

interface YearCardProps extends ClassNameProps, QaIdProps {
  year: number; // Year to display
  onClick: () => void; // Click handler
}

export const YearCard: React.FC<YearCardProps> = ({
  year,
  onClick,
  className,
  qaId,
}) => {
  const yearCardClasses = classNames(styles.yearCard, className);

  return (
    <Card className={yearCardClasses} onClick={onClick} data-qa-id={qaId}>
      <Headline level="2">{year}</Headline>
      <Icon name="ARROW_RIGHT" />
    </Card>
  );
};
