import * as React from "react";
import "./Header.css";
import Logo from "./Logo";

class Header extends React.Component {
  public render() {
    return (
      <div className="header">
        {" "}
        <Logo />{" "}
      </div>
    );
  }
}

export default Header;
