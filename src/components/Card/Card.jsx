import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

/**
 * Card component for displaying content with buttons.
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes.
 * @param {string} props.title - Card title.
 * @param {string} props.subtitle - Card subtitle.
 * @param {string} props.description - Card description.
 * @param {string} [props.role] - ARIA role for accessibility.
 */
const Card = ({ className = "", title, subtitle, description, role }) => {
  return (
    <div
      className={`card ${className}`}
      role={role}
      aria-label={`${title} card`}
    >
      {/* Card Title */}
      <h3 className="card-title">{title}</h3>
      {/* Card Subtitle */}
      <p className="card-subtitle">{subtitle}</p>
      {/* Card Description */}
      <p className="card-description">{description}</p>
      {/* Card Buttons */}
      <div className="card-buttons">
        <Button
          className="btn--primary btn--primary-md"
          to="register"
          ariaLabel="Join now"
        >
          Join now
        </Button>
        <Button to="#" ariaLabel="Read more">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Card);
