import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Input = ({
  error,
  id,
  isValid,
  handleChange,
  labelText,
  name,
  type,
  showErrors
}) => (
  <div className="form-group">
    <label className={styles.labelText} htmlFor={id}>
      {labelText}
    </label>
    <input
      className={
        showErrors && !isValid ? "form-control is-invalid" : "form-control"
      }
      id={id}
      name={name}
      onChange={handleChange}
      type={type}
    />
    {isValid === false &&
      showErrors === true && <div className="invalid-feedback">{error}</div>}
  </div>
);

Input.propTypes = {
  error: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  showErrors: PropTypes.bool.isRequired
};

export default Input;
