import React from "react";
import propTypes from "prop-types";
import { Logo } from "../Logo/Logo";
import "./Topbar.scss";

export const Topbar = ({ title }) => (
  <nav className="Topbar">
    <Logo />
    <div className="Topbar-title">{title}</div>
  </nav>
);

Topbar.propTypes = {
  title: propTypes.string
};

Topbar.defaultProps = {
  title: "topbar title"
};
