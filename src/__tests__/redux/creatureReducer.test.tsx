import {
  creatureReducer as reducer,
  initialState,
} from "../../redux/reducers/creatureReducer";
import store from "../../redux/store";

const newState = {
  offset: 0,
  total: 0,
  results: [
    {
      id: 9999,
      name: "The Testerino",
      description: "El tester!",
      thumbnail: {
        path: "imgPathTest",
        extension: "jpg",
      },
      series: {
        items: [
          {
            name: "The Aventures of Testerino",
          },
        ],
      },
    },
  ],
};

describe("CreatureReducer", () => {
  it("should be able to return initial state", () => {
    const { creatures } = store.getState();

    expect(creatures.error).toBeFalsy();
    expect(creatures.loading).toBeFalsy();
    expect(creatures.creatures.results.length).toEqual(0);
  });

  it("should be able to return correct state when success", () => {
    let state;

    state = reducer(initialState, {
      type: "CREATURE_SUCCESS",
      payload: newState,
    });

    expect(state.error).toBeFalsy();
    expect(state.loading).toBeFalsy();
    expect(state.creatures.results.length).toEqual(1);
    expect(state.creatures.results[0].name).toBe("The Testerino");
  });

  it("should be able to return correct state when error", () => {
    let state;
    state = reducer(initialState, { type: "CREATURE_ERROR" });
    expect(state.error).toBeTruthy();
  });

  it("should be able to return correct state when loading", () => {
    let state;
    state = reducer(initialState, { type: "CREATURE_LOADING" });
    expect(state.loading).toBeTruthy();
  });
});
