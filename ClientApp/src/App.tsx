import * as React from "react";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends React.Component {
  public componentDidMount() {
    document.body.style.background =
      'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url("/images/background.jpeg") no-repeat top center fixed';
    document.body.style.backgroundSize = "2016px 1512px";
  }

  public render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
