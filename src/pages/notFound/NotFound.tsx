import React from "react";
import styles from "./NotFound.module.scss";
import { Headline, Text, Link } from "../../components/types";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <Headline level="1">404</Headline>
      <Headline level="2">Page Not Found</Headline>
      <Text>Sorry, the page you are looking for does not exist.</Text>
      <Link href="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
