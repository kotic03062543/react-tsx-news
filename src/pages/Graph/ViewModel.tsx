import React from "react";

function SportViewModel() {
  const [state, setState] = React.useState("");
  setState("Home ViewModel");
  return { setState, state };
}

export default SportViewModel;
