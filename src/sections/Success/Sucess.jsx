import React from "react";
import styles from "./Success.module.scss";
import Card from "../../components/Card/Card";

export default function Success() {
  return (
    <section
      className={`${styles.success} container`}
      aria-labelledby="success-title"
      aria-describedby="success-subtitle"
    >
      <h2 id="success-title" className={styles.success__title}>
        Boost Your Success with Powerful
        <br />
        <span className={styles.success__title_highlight}>
          Tools and Connections
        </span>
      </h2>
      <p id="success-subtitle" className={styles.success__subtitle}>
        Lorem ipsum dolor sit amet consectetur. Amet viverra tincidunt sit
        blandit natoque gravida.
      </p>

      <div className={styles.success__cards} role="list">
        <Card
          className="card--startup"
          title="Startups"
          subtitle="Startup founders & team members"
          description="Lorem ipsum dolor sit amet consectetur. Amet viverra tincidunt sit
              blandit natoque gravida."
          role="listitem"
        />

        <Card
          className="card--investor"
          title="Investors"
          subtitle="VC Funds, Angel Syndicates & Networks"
          description="Lorem ipsum dolor sit amet consectetur. Amet viverra tincidunt sit
              blandit natoque gravida."
          role="listitem"
        />
      </div>
    </section>
  );
}
