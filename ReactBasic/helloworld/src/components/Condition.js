import React, { Component } from 'react';

export class Condition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUser: true,
    };
  }

  render() {
    return this.state.isUser && <div>Hello user</div>;
    // let msg;
    // return this.state.isUser ? (msg = `hello user`) : (msg = `hello guest`);
    // let msg;
    // if (this.state.isUser) msg = `hello user`;
    // else msg = `hello guest`;
    // return <div>{msg}</div>;

    // if (this.state.isUser) {
    //   return <div>Hello user</div>;
    // } else {
    //   return <div>Hello Guest</div>;
    // }
  }
}

export default Condition;
