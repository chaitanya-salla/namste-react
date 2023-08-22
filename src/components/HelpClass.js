import React from "react";

class Help extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 2,
    };
  }

  render() {
    return <h1>Help is on the way!!</h1>;
  }
}

export default Help;
