import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Banner.module.scss"; // Include styling
import { Icon } from "../icons/Icon";
import { Headline, Text, Link } from "../types";
import { Button } from "../button/Button";
import { QaIdProps, ClassNameProps } from "../PropTypes";
import classNames from "classnames";

interface BannerProps extends ClassNameProps, QaIdProps {
  title: string;
  subtitle?: string;
  date?: string;
  onShareClick: () => void;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  date,
  onShareClick,
  className,
  qaId,
}) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const buildBreadcrumbs = () => {
    const crumbs = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      return (
        <span key={index}>
          <Link href={path}>
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </Link>
          {index < pathSegments.length - 1 && " / "}
        </span>
      );
    });

    return (
      <div className={styles.breadcrumbs}>
        <Link href="/">Home</Link> {pathSegments.length > 0 && " / "} {crumbs}
      </div>
    );
  };

  const bannerClasses = classNames(className, styles.banner);

  return (
    <div className={bannerClasses} data-qa-id={qaId}>
      <div className={styles.breadcrumbsContainer}>{buildBreadcrumbs()}</div>
      <div className={styles.content}>
        <div>
          <Headline className={styles.title} level="1">
            {title}
          </Headline>
          <div className={styles.subtitleContainer}>
            {subtitle && (
              <Headline className={styles.subtitle} level="3">
                {subtitle}
              </Headline>
            )}
            {date && <Text className={styles.date}>{date}</Text>}
          </div>
        </div>
        <Button
          className={styles.shareButton}
          onClick={onShareClick}
          icon={<Icon name="SHARE" size="small" />}
        >
          Share
        </Button>
      </div>
    </div>
  );
};
