import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Headline, Link } from "../types";
import { ClassNameProps, QaIdProps } from "../PropTypes";
import classNames from "classnames";
import { Icon } from "../icons/Icon";
import { Button } from "../button/Button";

export interface Page {
  title: string;
  path: string;
}

interface NavbarProps extends ClassNameProps, QaIdProps {
  title: string;
  pages: Page[]; // Use pages prop to dynamically generate links
}

const Navbar: React.FC<NavbarProps> = ({ title, className, qaId, pages }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control the slide-out menu
  const navbarClasses = classNames(className, styles.navbar);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={navbarClasses} data-qa-id={qaId}>
      <div className={styles.navbarContent}>
        <Headline level="1" textColor="subtle" className={styles.navTitle}>
          {title}
        </Headline>
        <Button
          icon={<Icon name="MENU" className={styles.hamburger} />}
          onClick={toggleMenu}
        />
        {/* Regular menu links only visible when the screen is larger */}
        <nav className={classNames(styles.nav, { [styles.hideNav]: isOpen })}>
          {pages.map((page) => (
            <Link key={page.path} href={page.path}>
              {page.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Slide-out menu */}
      <div
        className={classNames(styles.slideoutMenu, { [styles.open]: isOpen })}
      >
        <nav>
          {pages.map((page) => (
            <Link key={page.path} href={page.path}>
              {page.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay that darkens the background */}
      <div
        className={classNames(styles.overlay, { [styles.active]: isOpen })}
        onClick={toggleMenu}
      />
    </header>
  );
};

export default Navbar;
