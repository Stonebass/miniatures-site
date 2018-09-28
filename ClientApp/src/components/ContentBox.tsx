import * as React from "react";
import "./ContentBox.css";

type Props = {
  delay: number;
  imageUrl: string;
  message: string;
};

class ContentBox extends React.Component<Props> {
  public render() {
    return (
      <div
        className="content-box"
        style={this.getFadeWithDelay(this.props.delay)}
      >
        <img src={this.props.imageUrl} />
        <div className="message">{this.props.message}</div>
      </div>
    );
  }

  private getFadeWithDelay(delay: number): React.CSSProperties {
    return {
      animation: `fadein ${this.props.delay}s`
    };
  }
}

export default ContentBox;
