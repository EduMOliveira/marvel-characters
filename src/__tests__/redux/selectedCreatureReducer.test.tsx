import {
  selectedCreatureReducer as reducer,
  initialState,
} from "../../redux/reducers/selectedCreatureReducer";

import store from "../../redux/store";

const newState = {
  id: 9955,
  name: "The Tester",
  description: "new description",
  thumbnail: {
    path: "imgPath",
    extension: "png",
  },
  series: {
    items: [
      {
        name: "Ultimate (2005)",
      },
    ],
  },
};

describe("SelectedCreatureReducer", () => {
  it("should be able to return initial state", () => {
    const { selectedCreature } = store.getState();

    expect(selectedCreature.selected.id).toBe(-1);
    expect(selectedCreature.selected.name.length).toEqual(0);
  });

  it("should be able to return correct state when selected success", () => {
    let state;

    state = reducer(initialState, {
      type: "SET_SELECTED_SUCCESS",
      payload: newState,
    });

    expect(state.selected.id).toBe(9955);
    expect(state.selected.name).toBe("The Tester");
  });

  it("should be able to return correct state when edit selected", () => {
    let state;

    state = reducer(initialState, {
      type: "SET_SELECTED_SUCCESS",
      payload: newState,
    });

    expect(state.selected.id).toBe(9955);
    expect(state.selected.name).toBe("The Tester");

    const data = {
      name: "Name Changed",
      description: "desc client side",
    };

    state = reducer(initialState, {
      type: "EDIT_SELECTED_SUCCESS",
      payload: { ...newState, ...data },
    });

    expect(state.selected.name).toBe("Name Changed");
    expect(state.selected.description).toBe("desc client side");
  });
});
