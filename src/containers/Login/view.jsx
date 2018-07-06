import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Form from "../../components/Form";

import styles from "./styles.less";

const View = ({
  canSubmitForm,
  email,
  errorMessage,
  formHasError,
  handleChange,
  password,
  login,
  showErrors
}) => (
  <div className="row">
    <div className="col-12 col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4">
      <Form
        canSubmitForm={canSubmitForm}
        error={"errorMessage"}
        formHasError={false}
        onSubmit={login}
        submitText={"Login"}
      >
        <Input
          error={email.errorMessage}
          id="email"
          handleChange={handleChange}
          labelText="Correo:"
          name="email"
          isValid={email.isValid}
          type="email"
          showErrors={showErrors}
        />

        <Input
          error={password.errorMessage}
          id="password"
          handleChange={handleChange}
          isValid={password.isValid}
          labelText="Contraseña:"
          name="password"
          type="password"
          showErrors={showErrors}
        />
      </Form>
      <Link className={styles.signupLink} to="/signup">
        Regístrate
      </Link>
    </div>
  </div>
);

View.propTypes = {
  email: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  formHasError: PropTypes.bool.isRequired,
  password: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  showErrors: PropTypes.bool.isRequired
};

export default View;
