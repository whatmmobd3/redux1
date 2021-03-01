import React, { Component } from "react";
import PeopleAdd from "../../components/PeopleAdd/PeopleAdd";
import PeopleRemove from "../../components/PeopleRemove/PeopleRemove";

// import * as actionTypes from "../../store/actions"

class App extends Component {
  state = {
    people: [],
  };

  btnClick = () => {
    let people = this.state.people;

    const p = {
      id: 1,
      name: "David",
      age: Math.floor(Math.random() * 100 + 1),
    };

    people = [...people, p];
    this.setState({ people });
  };

  btnRemove = () => {
    console.log("remove");
  };

  render() {
    const { people } = this.state;

    return (
      <div>
        <PeopleAdd onAddPeople={this.btnClick} />
        {people.map((e) => {
          return <PeopleRemove key={e.age} data={e} />;
        })}
      </div>
    );
  }
}

export default App;
