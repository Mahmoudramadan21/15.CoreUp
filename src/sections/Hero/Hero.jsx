import React from "react";
import styles from "./Hero.module.scss";
import Button from "../../components/Button/Button";
import heroGraphics from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} container`}
      aria-labelledby="hero-title"
    >
      <div className={styles.hero__content}>
        <h1 id="hero-title" className={styles.hero__title}>
          All-In-One Platform For{" "}
          <span className={styles.highlight}>Startups</span>
        </h1>
        <p className={styles.hero__subtitle}>
          Lorem ipsum dolor sit amet consectetur. Urna nulla sed scelerisque sit
          donec lectus pellentesque. Quam vitae elementum suspendisse risus.
          Dolor cursus cursus arcu in faucibus.
        </p>
        <Button
          className="btn--primary btn--primary-lg"
          to="register"
          aria-label="Join now"
        >
          Join now
        </Button>
      </div>
      <div className={styles.hero__graphic}>
        <img
          src={heroGraphics}
          alt="Illustration of a startup workspace"
          loading="lazy"
        />
      </div>
    </section>
  );
}
