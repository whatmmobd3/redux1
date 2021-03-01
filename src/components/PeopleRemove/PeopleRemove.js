import React from "react";
import "./PeopleRemove.css";

const App = (props) => {
  return (
    <div className="PeopleRemove">
      <p>Name: {props.data.name}</p>
      <p>Age: {props.data.age}</p>
    </div>
  );
};

export default App;
