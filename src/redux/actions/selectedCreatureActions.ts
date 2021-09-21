import { Dispatch } from "redux";
import { ResultType } from "../../types/creatureApiTypes";
import {
  SET_SELECTED_SUCCESS,
  EDIT_SELECTED_SUCCESS,
  SelectedDispatchTypes,
} from "./selectedCreatureActionsTypes";

export const setSelectedCreature =
  (data: ResultType) => (dispatch: Dispatch<SelectedDispatchTypes>) => {
    dispatch({
      type: SET_SELECTED_SUCCESS,
      payload: data,
    });
  };

export const editSelectedCreature =
  (data: ResultType) => (dispatch: Dispatch<SelectedDispatchTypes>) => {
    dispatch({
      type: EDIT_SELECTED_SUCCESS,
      payload: data,
    });
  };
