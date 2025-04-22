import React from "react";
import styles from "./Step.module.scss";

/**
 * Step component for displaying steps in a process.
 * @param {Object} props
 * @param {string} props.icon - Icon source URL.
 * @param {string} props.title - Step title.
 * @param {string} props.description - Step description.
 * @param {string} [props.connector] - Connector image source URL.
 */
const Step = ({ icon, title, description, connector }) => {
  return (
    <div
      className={`${styles.step} ${
        title === "Complete your profile" ? styles["step--document"] : ""
      }`}
      role="listitem"
      aria-label={`${title} step`}
    >
      {/* Step Icon */}
      <div
        className={`${styles["step__icon"]} ${
          title === "Complete your profile"
            ? styles["step__icon--document"]
            : ""
        }`}
      >
        <img
          src={icon}
          alt={`${title} icon`}
          loading="lazy"
          width="24"
          height="24"
        />
      </div>
      {/* Step Title */}
      <h3 className={styles["step__title"]}>{title}</h3>
      {/* Step Description */}
      <p className={styles["step__description"]}>{description}</p>
      {/* Step Connector */}
      {connector && (
        <img
          src={connector}
          alt="Connector line between steps"
          className={`${styles["step__connector"]} ${
            title === "Complete your profile"
              ? styles["step__connector--reversed"]
              : ""
          }`}
          loading="lazy"
          width="50"
          height="50"
        />
      )}
    </div>
  );
};

export default React.memo(Step);
