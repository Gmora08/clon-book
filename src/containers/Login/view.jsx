import React from "react";
import PropTypes from "prop-types";

const View = ({ login, handleChange }) => (
  <form onSubmit={login}>
    <label htmlFor="email">Correo:</label>
    <input type="email" id="email" name="email" onChange={handleChange} />
    <label htmlFor="email">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      onChange={handleChange}
    />

    <input type="submit" value="Login" />
  </form>
);

View.propTypes = {
  handleChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default View;
