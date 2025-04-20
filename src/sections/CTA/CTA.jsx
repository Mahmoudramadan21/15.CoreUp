import React from "react";
import styles from "./CTA.module.scss";
import Button from "../../components/Button/Button";

// Call to Action Section
const CTA = () => {
  return (
    <section className={`${styles.cta} container`}>
      <div className={styles["cta__content"]}>
        {/* Title */}
        <h2 className={styles["cta__title"]}>Join COREUP </h2>
        {/* Description */}
        <p className={styles["cta__description"]}>
          Join the leading matchmaking platform for startups, VC funds, angels,
          accelerators and corporates
        </p>
        {/* Button */}
        <Button
          className="btn--primary btn--primary-lg"
          to="/join"
          aria-label="Join CoreUp now"
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;
