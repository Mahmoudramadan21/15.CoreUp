import React from "react";
import styles from "./Success.module.scss";
import Card from "../../components/Card/Card";

/**
 * Success section showcasing benefits for startups and investors.
 */
const cardsData = [
  {
    title: "For Startups",
    subtitle: "Find the right investor for your startup",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros risus et tincidunt praesent nec. Amet non eget egestas eu.",
    role: "article",
  },
  {
    title: "For Investors",
    subtitle: "Discover promising startups to invest in",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros risus et tincidunt praesent nec. Amet non eget egestas eu.",
    role: "article",
  },
];

const Success = () => {
  return (
    <section
      className={`${styles.success} container`}
      aria-label="Success stories section"
    >
      {/* Section Content */}
      <div className={styles.success__content}>
        {/* Section Title */}
        <h2 className={styles.success__title}>Success With CoreUp</h2>
        {/* Cards Container */}
        <div className={styles.success__cards} role="list">
          {cardsData.map((card) => (
            <Card
              key={card.title}
              className={
                card.title === "For Startups"
                  ? "card--startup"
                  : "card--investor"
              }
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              role={card.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Success);
