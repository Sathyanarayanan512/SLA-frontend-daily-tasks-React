import React, { useReducer, useEffect } from "react";

const STORAGE_KEY = "counter_state";

// Load saved state from localStorage (rehydration)
function init(initialState) {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : initialState;
}

const initialState = { count: 0 };

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function CounterWithStorage() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    init // lazy initializer
  );

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ margin: "0 10px" }}
      >
        +
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        RESET
      </button>
    </div>
  );
}