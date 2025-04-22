import React from "react";
import styles from "./CTA.module.scss";
import Button from "../../components/Button/Button";

/**
 * Call to Action section for encouraging user signup.
 */
const CTA = () => {
  return (
    <section
      className={`${styles.cta} container`}
      aria-label="Join COREUP section"
    >
      <div className={styles["cta__content"]}>
        {/* CTA Title */}
        <h2 className={styles["cta__title"]}>Join COREUP</h2>
        {/* CTA Description */}
        <p className={styles["cta__description"]}>
          Join the leading matchmaking platform for startups, VC funds, angels,
          accelerators and corporates
        </p>
        {/* CTA Button */}
        <Button
          className="btn--primary btn--primary-lg"
          to="/join"
          ariaLabel="Join CoreUp now"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default React.memo(CTA);
