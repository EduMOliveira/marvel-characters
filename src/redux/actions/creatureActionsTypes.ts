import { ResultType } from "../../types/creatureApiTypes";

export const CREATURE_ERROR = "CREATURE_ERROR";
export const CREATURE_SUCCESS = "CREATURE_SUCCESS";
export const CREATURE_LOADING = "CREATURE_LOADING";

type CreatureError = {
  type: typeof CREATURE_ERROR;
};

type CreatureSuccess = {
  type: typeof CREATURE_SUCCESS;
  payload: {
    offset: number,
    total: number,
    results: ResultType[];
  };
};

type CreatureLoading = {
  type: typeof CREATURE_LOADING;
};

export type CreatureDispatchTypes =
  | CreatureError
  | CreatureSuccess
  | CreatureLoading;
