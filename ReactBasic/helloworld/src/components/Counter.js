import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    /*     this.state.count = this.state.count + 1;
     console.log(this.state.count); */
    /*     this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    ); */

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  incrementfive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h2> Count : {this.state.count}</h2>
        <button onClick={() => this.incrementfive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
