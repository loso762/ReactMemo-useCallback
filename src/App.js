import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import Demooutput from "./components/Demo/Demooutput";

function App() {
  const [Show, setShow] = useState(false);
  const [AllowToggle, setAllowToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    if (AllowToggle) {
      setShow((prev) => !prev);
    }
  }, [AllowToggle]);

  const AllowToggleHandle = () => {
    setAllowToggle(true);
  };

  console.log("APP 컴포넌트 실행");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demooutput show={Show} />
      <Button onClick={AllowToggleHandle}>Allow toggle</Button>
      <Button onClick={toggleHandler}>버튼</Button>
    </div>
  );
}

export default App;
