import React from "react";
import UseMemoHook from "./components/UseMemoHook";
import UseCallBackHook from "./components/UseCallBackHook";

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        React Hooks <span style={{ color: "green" }}>UseMemo </span> and{" "}
        <span style={{ color: "gray" }}>UseCallBack</span>!
      </h1>

      <UseMemoHook />
      <UseCallBackHook />


    </>
  );
};

export default App;
