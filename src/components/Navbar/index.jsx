import React from "react";

import styles from "./styles.less";

const Navbar = () => (
  <nav className={`navbar navbar-light ${styles.Navbar}`}>
    <a className={`navbar-brand ${styles.brand}`} href="#">
      el Feis
    </a>
  </nav>
);

export default Navbar;
