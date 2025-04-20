import React from "react";
import styles from "./Plan.module.scss";
import checkIcon from "../../assets/icons/check.svg";

// Check Icon for features
const CheckIcon = () => (
  <img src={checkIcon} className={styles["plan__check"]} alt="Check mark" />
);

// Plan Component to display each pricing plan
const Plan = ({
  title,
  description,
  price,
  period,
  features,
  isRecommended,
  button,
}) => {
  return (
    <div
      className={`
        ${title === "Basic" ? styles["basic-plan"] : ""}
        ${title === "Standard" ? styles["standard-plan"] : ""}
        ${title === "Premium" ? styles["premium-plan"] : ""}
        ${styles.plan} ${isRecommended ? styles["plan--recommended"] : ""}`}
    >
      {isRecommended && (
        <span className={styles["plan__recommended-tag"]}>Recommendation</span>
      )}
      {/* Plan Header */}
      <div className={styles["plan__header"]}>
        {/* Title */}
        <h3 className={styles["plan__title"]}>{title}</h3>
        {/* Description */}
        <p className={styles["plan__description"]}>{description}</p>
        {/* Price */}
        <div className={styles["plan__price"]}>
          <span className={styles["plan__price-amount"]}>{price}</span>
          <span className={styles["plan__price-period"]}>{period}</span>
        </div>
      </div>
      {/* Plan Footer */}
      <div className={styles["plan__footer"]}>
        {/* Features */}
        <ul className={styles["plan__features"]}>
          {features.map((feature, index) => (
            <li key={index} className={styles["plan__feature"]}>
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
        {/* Button */}
        {button && <div className={styles["plan__button"]}>{button}</div>}
      </div>
    </div>
  );
};

export default Plan;
