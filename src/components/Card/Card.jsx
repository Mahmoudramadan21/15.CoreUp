import React from "react";
import "./Card.scss";
import Button from "../Button/Button";

export default function Card({
  className,
  title,
  subtitle,
  description,
  role,
}) {
  return (
    <div className={`card ${className}`} role={role}>
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
      <p className="card-description">{description}</p>
      <div className="card-buttons">
        <Button
          className="btn--primary btn--primary-md"
          to="register"
          aria-label="Join now"
        >
          Join now
        </Button>
        <Button to="#" aria-label="Read more">
          Read more
        </Button>
      </div>
    </div>
  );
}
