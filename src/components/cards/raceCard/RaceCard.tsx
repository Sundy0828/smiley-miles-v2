import React from "react";
import styles from "./RaceCard.module.scss";
import { Headline, Text } from "../../types";
import { Card } from "../Card";
import { Icon } from "../../icons/Icon";
import { ClassNameProps, QaIdProps } from "../../PropTypes";
import classNames from "classnames";

interface RaceCardProps extends ClassNameProps, QaIdProps {
  title: string;
  state: string;
  city: string;
  date: string;
  onClick: () => void; // Click handler
}

export const RaceCard: React.FC<RaceCardProps> = ({
  title,
  state,
  city,
  date,
  onClick,
  className,
  qaId,
}) => {
  const raceCardClasses = classNames(className, styles.raceCard);

  return (
    <Card
      className={raceCardClasses}
      elevation={2}
      onClick={onClick}
      data-qa-id={qaId}
    >
      <div>
        <Headline level="3">{title}</Headline>
        <Text>
          <strong>Location:</strong> {city}, {state}
        </Text>
        <Text>
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </Text>
      </div>
      <Icon name="ARROW_RIGHT" />
    </Card>
  );
};
