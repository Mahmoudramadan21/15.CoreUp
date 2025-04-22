import React from "react";
import styles from "./Step.module.scss";

/*
 * Step Component to display each step in "How It Works" section
 * Props:
 * - icon: Step icon (image source)
 * - title: Step title
 * - description: Step description
 * - connector: Connector image between steps (optional)
 */
const Step = ({ icon, title, description, connector }) => {
  return (
    <article
      className={`${styles.step} ${
        title === "Complete your profile" ? styles["step--document"] : ""
      }`}
      aria-label={`Step: ${title}`}
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
          alt={`${title} step icon`}
          loading="lazy"
          width="60"
          height="60"
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
          width="100"
          height="50"
          loading="lazy"
          aria-hidden="true"
        />
      )}
    </article>
  );
};

export default React.memo(Step);
