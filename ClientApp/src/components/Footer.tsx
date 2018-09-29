import * as React from "react";
import "./Footer.css";

class Footer extends React.Component {
  public render() {
    return (
      <div className="footer">
        <div className="icon">
          <a href="https://www.instagram.com/stonebassminiatures/">
            <img src="/instagramicon.svg" />
          </a>
          {/* </div>
        <div className="icon"> */}
          <a
            href="https://github.com/Stonebass/miniatures-site"
            style={{ marginLeft: "5px" }}
          >
            <img src="/githubicon.svg" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
