import * as React from "react";
import "./Footer.css";

class Footer extends React.Component {
  public render() {
    return (
      <div className="footer">
        <div className="icons">
          <a href="https://www.instagram.com/stonebassminiatures/">
            <img src="/instagramicon.svg" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
