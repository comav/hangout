import { UPDATE_USER_DATA } from "../constants/index";

export function updateData(data) {
  return {
    type: UPDATE_USER_DATA,
    payload: data
  }
}