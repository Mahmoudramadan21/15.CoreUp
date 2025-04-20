import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

export default function Button({
  children,
  className,
  onClick,
  to,
  ariaLabel,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`btn ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
