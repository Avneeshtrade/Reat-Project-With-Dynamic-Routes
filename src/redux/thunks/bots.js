import { Api } from "../../utils/api/api";
import { botActionTypes as ACTION } from "../actionTypes";
import { setData, setError, startFetching } from "../actions";
import CONSTANTS from "../../constants/api.constants";

export const getBots = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.BOT_START_FETCH));
      let data;
      if (!arg) {
        data = await Api.get(`${CONSTANTS.baseUrl}${CONSTANTS.getAllBots}`);
      } else {
        data = await Api.get(
          `${CONSTANTS.baseUrl}${CONSTANTS.getAllBots}?page=${arg.page}&pageSize=${arg.size}&userId=${arg.user}&status=${arg.status}`
        );
      }
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_BOTS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.BOT_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.FETCH_BOTS_FAILURE, error.response.data.payload)
        );
    }
  };
};

export const createBot = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.BOT_START_FETCH));
      const data = await Api.post(
        arg.payload.userId
          ? `${CONSTANTS.baseUrl}${CONSTANTS.createBot}?userId=${arg.payload.userId}`
          : `${CONSTANTS.baseUrl}${CONSTANTS.createBot}`,
        arg.payload.formData
      );
      if (data.status === 200)
        dispatch(setData(ACTION.CREATE_BOT_SUCCESS, data.data.message));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.BOT_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.CREATE_BOT_FAILURE, error.response.data.message)
        );
    }
  };
};

export const getBotDetails = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.BOT_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getBotDetails}/${arg.payload}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_BOT_DETAILS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.BOT_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.FETCH_BOT_DETAILS_FAILURE, error.response.data.message)
        );
    }
  };
};

export const deleteBot = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.BOT_START_FETCH));
      const data = await Api.delete(
        `${CONSTANTS.baseUrl}${CONSTANTS.deleteBot}/${arg.payload}`
      );
      if (data.status === 200) dispatch(setData(ACTION.DELETE_BOT_SUCCESS));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.BOT_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.DELETE_BOT_FAILURE, error.response.data.message)
        );
    }
  };
};

export const updateBot = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.BOT_START_FETCH));
      const data = await Api.put(
        `${CONSTANTS.baseUrl}${CONSTANTS.updateBot}/${arg.payload.id}`,
        arg.payload.formData
      );
      if (data.status === 200) {
        dispatch(
          getBotDetails({
            type: ACTION.FETCH_BOT_DETAILS_REQUEST,
            payload: arg.payload.id,
          })
        );
        dispatch(setData(ACTION.UPDATE_BOT_SUCCESS));
      }
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.BOT_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.UPDATE_BOT_FAILURE, error.response.data.message)
        );
    }
  };
};
