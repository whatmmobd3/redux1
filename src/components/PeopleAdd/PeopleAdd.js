import React from "react";
import './PeopleAdd.css'

const app = props => {
  return (
    <div className="PeopleAdd">
      <button onClick={props.peopleAdd}>Add People</button>
    </div>
  );
};

export default app;
