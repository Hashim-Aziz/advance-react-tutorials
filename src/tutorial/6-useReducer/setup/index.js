import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  throw new Error("no matching action type");
};

const defaultstate = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultstate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "TESTING", payload: newItem });
    } else {
      dispatch({ type: "RANDOM" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((peep) => {
        return (
          <div key={peep.id}>
            <h4>{peep.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
