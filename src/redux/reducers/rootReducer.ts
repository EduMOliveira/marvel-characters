import { combineReducers } from "redux";
import { creatureReducer } from "./creatureReducer";
import { selectedCreatureReducer } from "./selectedCreatureReducer";

const reducers = combineReducers({
  creatures: creatureReducer,
  selectedCreature: selectedCreatureReducer,
});

export default reducers;
