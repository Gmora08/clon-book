import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Form = ({ children, error, formHasError, onSubmit, submitText }) => (
  <form className={`align-middle ${styles.form}`} onSubmit={onSubmit}>
    {children}
    {formHasError === true && <p className="error">{error}</p>}
    <input className="btn btn-primary" type="submit" value={submitText} />
  </form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  formHasError: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired
};

Form.defaultProps = {
  error: "",
  formHasError: false
};

export default Form;
