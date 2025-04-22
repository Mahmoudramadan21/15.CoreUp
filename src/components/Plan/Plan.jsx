import React from "react";
import styles from "./Plan.module.scss";
import checkIcon from "../../assets/icons/check.svg";

/**
 * Check Icon for displaying feature availability.
 */
const CheckIcon = () => (
  <img
    src={checkIcon}
    className={styles["plan__check"]}
    alt="Check mark indicating feature availability"
    width="16"
    height="16"
  />
);

/**
 * Plan component for displaying pricing plans.
 * @param {Object} props
 * @param {string} props.title - Plan title.
 * @param {string} props.description - Plan description.
 * @param {string} props.price - Plan price.
 * @param {string} props.period - Billing period.
 * @param {string[]} props.features - List of features.
 * @param {boolean} [props.isRecommended] - Marks plan as recommended.
 * @param {React.ReactNode} [props.button] - Button for the plan.
 */
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
      role="article"
      aria-label={`${title} pricing plan`}
    >
      {/* Recommended Tag */}
      {isRecommended && (
        <span
          className={styles["plan__recommended-tag"]}
          aria-label="Recommended plan"
        >
          Recommendation
        </span>
      )}
      {/* Plan Header */}
      <div className={styles["plan__header"]}>
        <h3 className={styles["plan__title"]}>{title}</h3>
        <p className={styles["plan__description"]}>{description}</p>
        <div className={styles["plan__price"]}>
          <span className={styles["plan__price-amount"]}>{price}</span>
          <span className={styles["plan__price-period"]}>{period}</span>
        </div>
      </div>
      {/* Plan Footer */}
      <div className={styles["plan__footer"]}>
        <ul className={styles["plan__features"]}>
          {features.map((feature, index) => (
            <li key={index} className={styles["plan__feature"]}>
              <CheckIcon />
              {feature}
            </li>
          ))}
        </ul>
        {button && <div className={styles["plan__button"]}>{button}</div>}
      </div>
    </div>
  );
};

export default React.memo(Plan);
