import React, { Component } from "react";
import PeopleAdd from "../../components/PeopleAdd/PeopleAdd";
import PeopleRemove from "../../components/PeopleRemove/PeopleRemove";

// import * as actionTypes from "../../store/actions"

class App extends Component {
  state = {
    people: [],
  };
  render() {
    return (
      <div>
        <PeopleAdd />
        <PeopleRemove />
      </div>
    );
  }
}

export default App;
