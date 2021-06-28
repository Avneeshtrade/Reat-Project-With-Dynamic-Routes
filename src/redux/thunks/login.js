import { Api } from "../../utils/api/api";
import { loginActionTypes as ACTION } from "../actionTypes";
import { setData, setError, startFetching } from "../actions";
import CONSTANTS from "../../constants/api.constants";
import jwtDecode from "jwt-decode";

export const login = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.LOGIN_START_FETCH));
      const data = await Api.post(
        `${CONSTANTS.baseUrl}${CONSTANTS.login}`,
        arg.payload
      );
      if (data.status === 200) {
        dispatch(setData(ACTION.LOGIN_SUCCESS, data.data.message));
        localStorage.setItem("token", data.headers.authorization);
        const { user } = jwtDecode(data.headers.authorization);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.LOGIN_SET_ERROR, "Something Went Wrong!"));
      else dispatch(setData(ACTION.LOGIN_FAILURE, error.response.data.message));
    }
  };
};
