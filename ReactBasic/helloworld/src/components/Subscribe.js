import React, { Component } from "react";

class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "please Subscribe",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks for Subscribing",
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Subscribe;
