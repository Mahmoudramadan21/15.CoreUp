import React from "react";
import "./Button.scss";
import { useNavigate } from "react-router-dom";

/**
 * Button component for navigation or triggering actions.
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {Function} [props.onClick] - Callback function for button click.
 * @param {string} [props.to] - Navigation path for react-router-dom.
 * @param {string} [props.ariaLabel] - Accessibility label for screen readers.
 * @param {boolean} [props.disabled] - Disables the button if true.
 */
const Button = ({
  children,
  className = "",
  onClick,
  to,
  ariaLabel,
  disabled = false,
}) => {
  const navigate = useNavigate();

  // Handle click: navigate if 'to' is provided, otherwise call onClick
  const handleClick = () => {
    if (disabled) return;
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
