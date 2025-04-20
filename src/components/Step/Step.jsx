import React from "react";
import styles from "./Step.module.scss";

// Step Component to display each step in "How It Works" section
const Step = ({ icon, title, description, connector }) => {
  return (
    <div
      className={`${styles.step} ${
        title === "Complete your profile" ? styles["step--document"] : ""
      }`}
    >
      {/* Icon for the step */}
      <div
        className={`${styles["step__icon"]} ${
          title === "Complete your profile"
            ? styles["step__icon--document"]
            : ""
        }`}
      >
        <img src={icon} alt={title} loading="lazy" />
      </div>
      {/* Step title */}
      <h3 className={styles["step__title"]}>{title}</h3>
      {/* Step description */}
      <p className={styles["step__description"]}>{description}</p>
      {/* Step connector */}
      {connector && (
        <img
          src={connector}
          alt="connector line"
          className={`${styles["step__connector"]} ${
            title === "Complete your profile"
              ? styles["step__connector--reversed"]
              : ""
          }`}
        />
      )}
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(Step);
