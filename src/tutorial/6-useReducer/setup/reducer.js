export const reducer = (state, action) => {
  if (action.type === "TESTING") {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  if (action.type === "NO_VALUE") {
    return { ...state, isModalOpen: true, modalContent: "Please enter value" };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeoples = state.people.filter(
      (peep) => peep.id !== action.payload
    );
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: "Item Removed",
    };
  }
  throw new Error("no matching action type");
};
