import React from "react";
import "./People.css";

const App = (props) => {


  return (

    <div className="People" onClick={props.aaa}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default App;
