import React from "react";

function DetailViewModel() {
  const [state, setState] = React.useState("");
  setState("DetailViewModel ViewModel");
  return { setState, state };
}

export default DetailViewModel;
