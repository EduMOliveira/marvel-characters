import { CreatureResultsType } from "../../types/creatureApiTypes";
import {
  CreatureDispatchTypes,
  CREATURE_ERROR,
  CREATURE_LOADING,
  CREATURE_SUCCESS,
} from "../actions/creatureActionsTypes";

type State = {
  error: boolean;
  loading: boolean;
  creatures: CreatureResultsType;
};

export const initialState: State = {
  error: false,
  loading: false,
  creatures: {
    offset: 0, // numbers that must be hidden in endpoint return
    total: 0, // total items in the endpoint return
    results: [],
  },
};

export const creatureReducer = (
  state = initialState,
  action: CreatureDispatchTypes
): State => {
  switch (action.type) {
    case CREATURE_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case CREATURE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CREATURE_SUCCESS:
      return {
        error: false,
        loading: false,
        creatures: action.payload,
      };

    default:
      return state;
  }
};
