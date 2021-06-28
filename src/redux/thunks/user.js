import { Api } from "../../utils/api/api";
import { userActionTypes as ACTION } from "../actionTypes";
import { setData, setError, startFetching } from "../actions";
import CONSTANTS from "../../constants/api.constants";

export const registration = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.post(
        `${CONSTANTS.baseUrl}${CONSTANTS.register}`,
        arg.payload
      );
      if (data.status === 200)
        dispatch(setData(ACTION.USER_REGISTRATION_SUCCESS, data.data.message));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.USER_REGISTRATION_FAILURE, error.response.data.message)
        );
    }
  };
};

export const getUserRoles = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getAllRoles}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.SET_USER_ROLE, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else dispatch(setData(ACTION.SET_USER_ROLE, []));
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getAllUsers}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_USERS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.FETCH_USERS_FAILURE, error.response.data.payload)
        );
    }
  };
};

export const getUsersByPaggination = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getAllUsers}?page=${arg.page}&pageSize=${arg.size}&userId=${arg.user}&status=${arg.status}&role=${arg.role}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_USERS_BY_PAGGINATION, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(
            ACTION.FETCH_USERS_BY_PAGGINATION,
            error.response.data.payload
          )
        );
    }
  };
};

export const getUserDetails = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getUserDetails}/${arg.id}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_USER_DETAILS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(
            ACTION.FETCH_USER_DETAILS_FAILURE,
            error.response.data.message
          )
        );
    }
  };
};

export const deleteUser = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.delete(
        `${CONSTANTS.baseUrl}${CONSTANTS.deleteUser}/${arg.id}`
      );
      if (data.status === 200) dispatch(setData(ACTION.DELETE_USER_SUCCESS));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.DELETE_USER_FAILURE, error.response.data.message)
        );
    }
  };
};

export const updateUser = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.USER_START_FETCH));
      const data = await Api.put(
        `${CONSTANTS.baseUrl}${CONSTANTS.updateUser}/${arg.id}`,
        arg.payload
      );
      if (data.status === 200) {
        dispatch(
          getUserDetails({
            id: arg.id,
          })
        );
        dispatch(setData(ACTION.UPDATE_USER_SUCCESS));
      }
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.USER_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.UPDATE_USER_FAILURE, error.response.data.message)
        );
    }
  };
};
