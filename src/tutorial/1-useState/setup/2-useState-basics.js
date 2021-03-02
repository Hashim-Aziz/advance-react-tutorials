import React, { useState } from "react";
//use keyword is start
//must be call in component and function
// cannot call conditionally

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
