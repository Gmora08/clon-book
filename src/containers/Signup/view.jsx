import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Form from "../../components/Form";

const View = ({
  canSubmitForm,
  confirmPassword,
  email,
  errorMessage,
  formHasError,
  handleChange,
  password,
  signup,
  showErrors
}) => (
  <div className="row">
    <div className="col-12 col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4">
      <Form
        canSubmitForm={canSubmitForm}
        error={errorMessage}
        formHasError={formHasError}
        onSubmit={signup}
        submitText={"Regístarse"}
      >
        <Input
          error={email.errorMessage}
          id="email"
          handleChange={handleChange}
          labelText="Correo:"
          name="email"
          type="email"
          isValid={email.isValid}
          showErrors={showErrors}
        />

        <Input
          error={password.errorMessage}
          id="password"
          handleChange={handleChange}
          labelText="Contraseña:"
          name="password"
          type="password"
          isValid={password.isValid}
          showErrors={showErrors}
        />

        <Input
          error={confirmPassword.errorMessage}
          id="confirmPassword"
          handleChange={handleChange}
          labelText="Confirmar Contraseña:"
          name="confirmPassword"
          type="password"
          isValid={confirmPassword.isValid}
          showErrors={showErrors}
        />
      </Form>
    </div>
  </div>
);

View.propTypes = {
  confirmPassword: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  formHasError: PropTypes.bool.isRequired,
  password: PropTypes.object.isRequired,
  signup: PropTypes.func.isRequired,
  showErrors: PropTypes.bool.isRequired
};

export default View;
