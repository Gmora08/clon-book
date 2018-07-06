import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Form from "../../components/Form";

import styles from "./styles.less";

const View = ({ login, handleChange }) => (
  <div className="row">
    <div className="col-12 col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4">
      <Form
        error={"errorMessage"}
        formHasError={false}
        onSubmit={login}
        submitText={"Login"}
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
      </Form>
      <Link className={styles.signupLink} to="/signup">
        Regístrate
      </Link>
    </div>
  </div>
);

View.propTypes = {
  handleChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default View;
