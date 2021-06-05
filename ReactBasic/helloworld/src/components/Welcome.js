import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>This is a Class Component</h2>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}
export default Welcome;
