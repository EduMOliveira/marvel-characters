import { ResultType } from "../../types/creatureApiTypes";

export const SET_SELECTED_SUCCESS = "SET_SELECTED_SUCCESS";
export const EDIT_SELECTED_SUCCESS = "EDIT_SELECTED_SUCCESS";

type SelectedSuccess = {
  type: typeof SET_SELECTED_SUCCESS;
  payload: ResultType;
};

type SelectedEdit = {
  type: typeof EDIT_SELECTED_SUCCESS;
  payload: ResultType;
};

export type SelectedDispatchTypes = SelectedSuccess | SelectedEdit;
