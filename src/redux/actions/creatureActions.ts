import { api } from "../../services/api";
import { Dispatch } from "redux";
import {
  CREATURE_ERROR,
  CREATURE_LOADING,
  CREATURE_SUCCESS,
  CreatureDispatchTypes,
} from "./creatureActionsTypes";

export const getCreatures =
  (url: string) => async (dispatch: Dispatch<CreatureDispatchTypes>) => {
    try {
      dispatch({
        type: CREATURE_LOADING,
      });

      const res = await api.get(url);

      dispatch({
        type: CREATURE_SUCCESS,
        payload: res.data.data,
      });
    } catch (e) {
      dispatch({
        type: CREATURE_ERROR,
      });
    }
  };
