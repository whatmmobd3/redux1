import React, { Component } from "react";
import "./PeopleAdd.css";

class App extends Component {
  state = {
    name: '',
    age: '',
  };
  render() {
    const { name, age } = this.state;
    return (
      <div className="PeopleAdd">
        <input
          placeholder="Your Name"
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          placeholder="Your Age"
          type="text"
          value={age}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <button onClick={() => this.props.peopleAdd(name, age)}>Add People</button>
      </div>
    );
  }
}

export default App;
