import { Api } from "../../utils/api/api";
import { agentActionTypes as ACTION } from "../actionTypes";
import { setData, setError, startFetching } from "../actions";
import CONSTANTS from "../../constants/api.constants";

export const getAgents = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.AGENT_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getAllAgents}?page=${arg.page}&pageSize=${arg.size}&userId=${arg.user}&status=${arg.status}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_AGENTS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.AGENT_SET_ERROR, "Something Went Wrong!"));
      else dispatch(setData(ACTION.FETCH_AGENTS_FAILURE));
    }
  };
};
