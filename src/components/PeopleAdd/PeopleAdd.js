import React from "react";
import './PeopleAdd.css'

const app = props => {
  return (
    <div className="People">
      <button onClick={props.onAddPeople}>Add People</button>
    </div>
  );
};

export default app;
