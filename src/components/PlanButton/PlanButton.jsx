import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlanButton.module.scss";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightLight from "../../assets/icons/arrow-right-light.svg";

const PlanButton = ({ children, to, variant = "default", ariaLabel }) => {
  return (
    <Link
      to={to}
      className={`${styles.planButton} ${styles[`planButton--${variant}`]}`}
      aria-label={ariaLabel}
    >
      {children}
      <img
        src={variant === "default" ? arrowRight : arrowRightLight}
        className={styles["planButton__arrow"]}
      />
    </Link>
  );
};

export default PlanButton;
