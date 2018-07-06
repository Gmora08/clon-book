import React from "react";
import PropTypes from "prop-types";

const View = ({ handleChange, signup }) => (
  <form onSubmit={signup}>
    <label htmlFor="email">Correo:</label>
    <input id="email" type="email" />
    <label htmlFor="password">Contraseña:</label>
    <input id="password" type="password" />
    <label htmlFor="confirm-password">Confirmar Contraseña:</label>
    <input id="confirm-password" type="password" />

    <input type="button" value="Registrarse" />
  </form>
);

View.propTypes = {
  handleChange: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

export default View;
