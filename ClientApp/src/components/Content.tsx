import * as React from "react";
import "./Content.css";
import ContentBox from "./ContentBox";

type Props = {};

type State = {
  showImageFlow: boolean;
};

class Content extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showImageFlow: false };
  }
  public render() {
    if (this.state.showImageFlow) {
      return (
        <div className="content">
          <div className="content-wrapper">
            <ContentBox
              delay={2}
              imageUrl="https://scontent-arn2-1.cdninstagram.com/vp/6d384844d6a813945244ca0b526807ce/5C49B301/t51.2885-15/e35/41454564_396887510846682_1826887275414982197_n.jpg"
              message="derppdadssdg sdg"
            />
            <ContentBox
              delay={4}
              imageUrl="https://scontent-arn2-1.cdninstagram.com/vp/7d8da434097563740a8866b4e983ee04/5C456725/t51.2885-15/e35/41722772_166090157601336_6706086423051440649_n.jpg"
              message="bla bla bla"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="content">
          <div className="content-wrapper">
            <div className="landing-content">
              <button onClick={() => this.setState({ showImageFlow: true })}>
                Show image flow
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Content;
