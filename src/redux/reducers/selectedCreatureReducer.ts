import { ResultType } from "../../types/creatureApiTypes";
import {
  SET_SELECTED_SUCCESS,
  EDIT_SELECTED_SUCCESS,
  SelectedDispatchTypes,
} from "../actions/selectedCreatureActionsTypes";

type State = {
  selected: ResultType;
};

const initialState: State = {
  selected: {
    id: -1,
    name: "",
    description: "",
    thumbnail: {
      path: "",
      extension: "",
    },
    series: {
      items: [
        {
          name: "",
        },
      ],
    },
  },
};

export const selectedCreatureReducer = (
  state = initialState,
  action: SelectedDispatchTypes
): State => {
  switch (action.type) {
    case SET_SELECTED_SUCCESS:
      return {
        selected: action.payload,
      };

    case EDIT_SELECTED_SUCCESS:
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
};
