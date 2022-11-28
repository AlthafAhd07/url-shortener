import React, { useState } from "react";

import "../styles/header.css";
import Toggler from "./Toggler";

const Header = () => {
  const [toggled, setToggled] = useState();
  return (
    <header className="header">
      <span className="header__logo">Shortly</span>
      <nav data-toggled={toggled}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>
      <section className="header__authLinks" data-toggled={toggled}>
        <button>Login</button>
        <button>Sign Up</button>
      </section>
      <Toggler toggled={toggled} setToggled={setToggled} />
    </header>
  );
};

export default Header;
