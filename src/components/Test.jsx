import { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "hello world",
    };
  }
  render() {
    return <div>{this.state.first}</div>;
  }
}
