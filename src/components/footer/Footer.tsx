import React from "react";
import styles from "./Footer.module.scss"; // Import your styles here
import { Text } from "../types";
import { ClassNameProps, QaIdProps } from "../PropTypes";
import classNames from "classnames";

interface FooterProps extends ClassNameProps, QaIdProps {}

const Footer: React.FC<FooterProps> = ({ className, qaId }) => {
  const footerClasses = classNames(className, styles.footer);

  return (
    <footer className={footerClasses} data-qa-id={qaId}>
      <Text>
        &copy; {new Date().getFullYear()} Mile of Smiles Timing Services. All
        rights reserved.
      </Text>
    </footer>
  );
};

export default Footer;
