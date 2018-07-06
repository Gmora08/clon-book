import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Input = ({ error, id, handleChange, labelText, name, type }) => (
  <div className="form-group">
    <label className={styles.labelText} htmlFor={id}>
      {labelText}
    </label>
    <input
      className="form-control"
      id={id}
      name={name}
      onChange={handleChange}
      type={type}
    />
    <div className="invalid-feedback">{error}</div>
  </div>
);

Input.propTypes = {
  error: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Input;
