import React, { Component } from "react";
import { connect } from "react-redux";

import PeopleAdd from "../../components/PeopleAdd/PeopleAdd";
import People from "../../components/People/People";

import * as actionTypes from "../../store/actions";

class App extends Component {
  render() {
    
    const { prs, onAdd, onRemove } = this.props;
    return (
      <div>
        <PeopleAdd peopleAdd={onAdd} />
        {prs.map((e) => (
          <People
            key={e.id}
            name={e.name}
            age={e.age}
            clicked={() => console.log(e)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prs: state.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({ type: actionTypes.ADD }),
    onRemove: (e) => dispatch({ type: actionTypes.REMOVE, personId: e }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
