import React from "react";
import { Link } from "react-router-dom";
import styles from "./PlanButton.module.scss";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowRightLight from "../../assets/icons/arrow-right-light.svg";

/**
 * PlanButton component for linking to pricing plans.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content.
 * @param {string} props.to - Navigation path.
 * @param {string} [props.variant="default"] - Button variant ("default" or "primary").
 * @param {string} [props.ariaLabel] - Accessibility label.
 */
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
        alt="Arrow right icon"
        width="16"
        height="16"
      />
    </Link>
  );
};

export default React.memo(PlanButton);
