import React from "react";

const Demooutput = (props) => {
  console.log("Demo 컴포넌트 실행");

  return <p>{props.show ? "Nex" : ""}</p>;
};

export default Demooutput;
