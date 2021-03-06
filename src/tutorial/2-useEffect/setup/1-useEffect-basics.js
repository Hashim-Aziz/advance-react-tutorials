import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

//NOTES
//we can not use hook(set statevalue function, useEffect)  in condition but can use condition statement in hook function
// we define as many as useEffect we want,
//second argument in useEffect function is dependency list means if we want to useEffect to work on initial run just then we just pass empty array [] in 2nd parameter if we want useEffect work on state value change then we will pass state variable name in array like [value] in order to work useEffect.

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New message is (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("hello world");
  }, []);
  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
