import React from "react";
import styles from "./Hero.module.scss";
import Button from "../../components/Button/Button";
import heroGraphics from "../../assets/hero.jpg";

/*
 * Hero section for the homepage
 */
const Hero = () => {
  return (
    <section
      className={`${styles.hero} container`}
      aria-labelledby="hero-title"
    >
      <div className={styles.hero__content}>
        {/* Hero Title */}
        <h1 id="hero-title" className={styles.hero__title}>
          All-In-One Platform For{" "}
          <span className={styles.highlight}>Startups</span>
        </h1>
        {/* Hero Subtitle */}
        <p className={styles.hero__subtitle}>
          Lorem ipsum dolor sit amet consectetur. Urna nulla sed scelerisque sit
          donec lectus pellentesque. Quam vitae elementum suspendisse risus.
          Dolor cursus cursus arcu in faucibus.
        </p>
        {/* Hero Button */}
        <Button
          className="btn--primary btn--primary-lg"
          to="register"
          aria-label="Join now"
        >
          Join now
        </Button>
      </div>
      {/* Hero Graphic */}
      <div className={styles.hero__graphic}>
        <img
          src={heroGraphics}
          alt="Illustration of a startup workspace"
          loading="lazy"
          width="540"
          height="400"
        />
      </div>
    </section>
  );
};

export default React.memo(Hero);
