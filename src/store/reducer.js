import * as actionTypes from "./actions";

const initialState = {
  people: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return state;
    case actionTypes.REMOVE:
      return state;
    default:
      return state;
  }
};

export default reducer;
