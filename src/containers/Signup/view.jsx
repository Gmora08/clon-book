import React from "react";
import PropTypes from "prop-types";

import Input from "../../components/Input";
import Form from "../../components/Form";

const View = ({ handleChange, signup, formHasError, errorMessage }) => (
  <div className="row">
    <div className="col-12 col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4">
      <Form
        error={errorMessage}
        formHasError={formHasError}
        onSubmit={signup}
        submitText={"Regístarse"}
      >
        <Input
          error="email invalido"
          id="email"
          handleChange={handleChange}
          labelText="Correo:"
          name="email"
          type="email"
        />

        <Input
          error="email invalido"
          id="password"
          handleChange={handleChange}
          labelText="Contraseña:"
          name="password"
          type="password"
        />

        <Input
          error="email invalido"
          id="confirmPassword"
          handleChange={handleChange}
          labelText="Confirmar Contraseña:"
          name="confirmPassword"
          type="password"
        />
      </Form>
    </div>
  </div>
);

View.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  formHasError: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired
};

export default View;
