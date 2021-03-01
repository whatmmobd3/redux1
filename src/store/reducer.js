import * as actionTypes from "./actions";

const initialState = {
  people: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      const newPeople = {
        id: Math.random(),
        name: action.peopleData.name,
        age: action.peopleData.age,
      };

      let people = [...state.people, newPeople];
      return {
        ...state,
        people,
      };

    case actionTypes.REMOVE:
      return {
        ...state,
        people: state.people.filter((e) => e.id !== action.peopleId),
      };
    default:
  }
  return state;
};

export default reducer;
