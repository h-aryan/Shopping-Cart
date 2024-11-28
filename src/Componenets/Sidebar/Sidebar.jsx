import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStore,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Plushie</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">Home</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faStore} />
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
      <ul className="link-bottom">
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
