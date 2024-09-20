// Define the initial state

// Define the reducer function
export const reducerFun = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return (state) => [...state, action.payload];
    case "Delete":
      return (state = state.filter((item) => item.name != action.payload));
  }
};
