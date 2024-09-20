import React, { useReducer, useRef, useState } from "react";
import { reducerFun } from "./ReducerFun";

// Create the Counter component
const Counter = () => {
  const [state, dispatch] = useReducer(reducerFun, []);

  const [searchInput, setSearchInput] = useState("");

  const NameEl = useRef();
  const ClassEl = useRef();

  const handleForm = () => {
    event.preventDefault();

    const newObj = {
      name: NameEl.current.value,
      class: ClassEl.current.value,
    };
    dispatch({ type: "ADD_ITEM", payload: newObj });

    // Clearing the input fields
    // NameEl.current.value = "";
    // ClassEl.current.value = "";
  };

  const filteredItems = state.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log(filteredItems);
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" ref={NameEl} />
        <input type="number" ref={ClassEl} />
        <button type="submit">submit</button>
      </form>

      <input
        type="text"
        placeholder="Search by Name"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Class: {item.class}
            <button
              onClick={() => dispatch({ type: "Delete", payload: item.name })}
            >
              del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
