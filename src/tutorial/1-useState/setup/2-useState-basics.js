import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("ramdom text");

  const clickHandler = () => {
    if (text === "ramdom text") {
      setText("hello world");
    } else {
      setText("ramdom text");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={clickHandler}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
