import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checksize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");

    window.addEventListener("resize", checksize);

    //cleanup function will first
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checksize);
    };
  });

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
