import React from "react";
import styles from "./Testimonial.module.scss";
import starIcon from "../../assets/icons/star.svg";
import quoteIcon from "../../assets/icons/quote.svg";

// Star component using SVG
const Star = () => (
  <img src={starIcon} className={styles["testimonial__star"]} alt="star" />
);

// Testimonial Component to display each client testimonial
const Testimonial = ({ avatar, name, role, text, isFeatured }) => {
  return (
    <div
      className={`${styles.testimonial} ${
        isFeatured ? styles["testimonial--featured"] : ""
      }`}
    >
      {/* Stars */}
      <div className={styles["testimonial__stars"]}>
        {[...Array(5)].map((_, index) => (
          <Star key={index} />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className={styles["testimonial__text"]}>{text}</p>

      {/* Testimonial Footer */}
      <div className={styles["testimonial__footer"]}>
        {/* Avatar, Name, and Role Container */}
        <div className={styles["testimonial__user"]}>
          <img
            src={avatar}
            alt={`${name}'s avatar`}
            className={styles["testimonial__avatar"]}
            loading="lazy"
          />
          <div className={styles["testimonial__user-info"]}>
            <h3 className={styles["testimonial__name"]}>{name}</h3>
            <p className={styles["testimonial__role"]}>{role}</p>
          </div>
        </div>

        {/* Quote Icon */}
        <img
          src={quoteIcon}
          alt="quote icon"
          className={styles["testimonial__quote"]}
          loading="lazy"
        />
      </div>
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default React.memo(Testimonial);
