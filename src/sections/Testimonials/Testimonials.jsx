import React, { Suspense } from "react";
import styles from "./Testimonials.module.scss";

// Placeholder avatars
import avatar1 from "../../assets/avatars/avatar1.svg";
import avatar2 from "../../assets/avatars/avatar2.svg";
import avatar3 from "../../assets/avatars/avatar3.svg";

// Lazy load the Testimonial component for better performance
const Testimonial = React.lazy(() =>
  import("../../components/Testimonial/Testimonial")
);

// Data for testimonials
const testimonialsData = [
  {
    avatar: avatar1,
    name: "Mohamed",
    role: "Software",
    text: "Lorem ipsum dolor sit amet consectetur. Rutrum scelerisque et purus commodo.",
  },
  {
    avatar: avatar2,
    name: "Basel",
    role: "Agriculture",
    text: "Lorem ipsum dolor sit amet consectetur. Arcu nec vel ultricies vestibulum. Consequat.",
    isFeatured: true,
  },
  {
    avatar: avatar3,
    name: "Ahmed",
    role: "Medicine",
    text: "Lorem ipsum dolor sit amet consectetur. Pellentesque blandit faucibus imperdiet.",
  },
];

const Testimonials = () => {
  return (
    // Section container for Testimonials
    <section className={styles.testimonials}>
      {/* Section title */}
      <h2 className={styles["testimonials__title"]}>Client Testimonial</h2>
      {/* Testimonials container */}
      <div className={styles["testimonials__list"]}>
        <Suspense fallback={<div>Loading...</div>}>
          {testimonialsData.map((testimonial) => (
            <Testimonial
              key={testimonial.name}
              avatar={testimonial.avatar}
              name={testimonial.name}
              role={testimonial.role}
              text={testimonial.text}
              isFeatured={testimonial.isFeatured || false}
            />
          ))}
        </Suspense>
      </div>
      {/* Pagination dots */}
      <div className={styles["testimonials__pagination"]}>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`${styles["testimonials__dot"]} ${
              index === 1 ? styles["testimonials__dot--active"] : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
