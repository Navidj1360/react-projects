import { createAction } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "./types";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

