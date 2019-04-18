import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
Button is a component for use on forms to reflect the current state. 
 */
const Button = props => {
  const submitted = props.submitted;
  const success = props.success;

  if (!submitted) {
    return <StyledButton icon="check" color="primary" message="Submit" />;
  }

  if (submitted && success === "wait") {
    return (
      <StyledButton icon="spinner" spin color="primary" message="Submitted" />
    );
  }

  if (submitted && success === "yes") {
    return (
      <StyledButton icon="check-circle" color="success" message="Thanks!" />
    );
  }

  if (submitted && success === "no") {
    return (
      <StyledButton
        icon="exclamation-triangle"
        color="danger"
        message="Failed!"
      />
    );
  }
};

Button.propTypes = {
  /** Should be set to "true" if the form has been submitted */
  submitted: PropTypes.bool.isRequired,
  /** Success is a string that takes either "yes", "no", or "wait" */
  success: PropTypes.string.isRequired
};

/**
 * Buttons
 */

const StyledButton = ({ icon, color, spin, message }) => {
  const componentClasses = ["btn", "btn-block", "btn-" + color];
  
  // TODO: Check out https://www.npmjs.com/package/classnames to make class names simpler
  // This package is the official replacement for classSet, which was originally shipped in the React.js Addons bundle.
  // One of its primary use cases is to make dynamic and conditional className props simpler to work with 
  // (especially more so than conditional string manipulation).

  if (spin) {
    icon = <FontAwesomeIcon icon={icon} spin />;
  } else {
    icon = <FontAwesomeIcon icon={icon} />;
  }

  return (
    <button type="submit" className={componentClasses.join(" ")}>
      {icon} &nbsp; {message}
    </button>
  );
};

StyledButton.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  spin: PropTypes.bool,
  message: PropTypes.string.isRequired
};

export default Button;
