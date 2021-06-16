import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function Resultpage(props) {
  
  return (
    <div style={{ padding: "10%" }}>
      <h2>Congratulations! You have completed the Quiz</h2>
      <h2>Happy Learning </h2>
      {/* {props.addItem()} */}
      <NavLink to="/mainpage">
        <button className="btn replay">Play Again</button>
      </NavLink>
    </div>
  );
}

export default Resultpage;
