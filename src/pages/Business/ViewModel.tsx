import React from "react";

function ViewModel() {
  const [state, setState] = React.useState("");
  setState("Business ViewModel");
  return { setState, state };
}

export default ViewModel;
