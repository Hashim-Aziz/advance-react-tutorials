import React from "react";

const ErrorExample = () => {
  let title = "ramdom click";

  const clickHandler = () => {
    title = "hello people";
    console.log({ title });
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={clickHandler}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
