import React from "react";
import styles from "./Testimonial.module.scss";
import starIcon from "../../assets/icons/star.svg";
import quoteIcon from "../../assets/icons/quote.svg";

/**
 * Star component for displaying rating stars.
 */
const Star = () => (
  <img
    src={starIcon}
    className={styles["testimonial__star"]}
    alt="Star rating icon"
    width="16"
    height="16"
  />
);

/**
 * Testimonial component for displaying client feedback.
 * @param {Object} props
 * @param {string} props.avatar - Avatar image source.
 * @param {string} props.name - Client name.
 * @param {string} props.role - Client role.
 * @param {string} props.text - Testimonial text.
 * @param {boolean} [props.isFeatured] - Highlights the testimonial if true.
 */
const Testimonial = ({ avatar, name, role, text, isFeatured }) => {
  return (
    <div
      className={`${styles.testimonial} ${
        isFeatured ? styles["testimonial--featured"] : ""
      }`}
      role="article"
      aria-label={`${name}'s testimonial`}
    >
      {/* Rating Stars */}
      <div className={styles["testimonial__stars"]} aria-label="5-star rating">
        {[...Array(5)].map((_, index) => (
          <Star key={index} />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className={styles["testimonial__text"]}>{text}</p>

      {/* Testimonial Footer */}
      <div className={styles["testimonial__footer"]}>
        <div className={styles["testimonial__user"]}>
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className={styles["testimonial__avatar"]}
            loading="lazy"
            width={50}
            height={50}
          />
          <div className={styles["testimonial__user-info"]}>
            <h3 className={styles["testimonial__name"]}>{name}</h3>
            <p className={styles["testimonial__role"]}>{role}</p>
          </div>
        </div>
        <img
          src={quoteIcon}
          alt="Quote icon"
          className={styles["testimonial__quote"]}
          loading="lazy"
          width="24"
          height="24"
        />
      </div>
    </div>
  );
};

export default React.memo(Testimonial);
