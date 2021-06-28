import { Api } from "../../utils/api/api";
import { processActionTypes as ACTION } from "../actionTypes";
import { setData, setError, startFetching } from "../actions";
import CONSTANTS from "../../constants/api.constants";

export const getAllProcess = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.PROCESS_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getAllProcess}?page=${arg.page}&pageSize=${arg.size}&userId=${arg.user}&status=${arg.status}&botId=${arg.bot}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_ALL_PROCESS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      else dispatch(setData(ACTION.FETCH_ALL_PROCESS_FAILURE));
    }
  };
};

export const createProcess = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.PROCESS_START_FETCH));
      const data = await Api.post(
        `${CONSTANTS.baseUrl}${CONSTANTS.createProcess}`,
        arg.payload
      );
      if (data.status === 200) {
        dispatch(setData(ACTION.CREATE_PROCESS_SUCCESS));
      }
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.CREATE_PROCESS_FAILURE, error.response.data.message)
        );
    }
  };
};

export const getProcessLogs = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.PROCESS_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.getProcessLogs}?page=${arg.page}&pageSize=${arg.size}&userId=${arg.user}&botId=${arg.bot}`
      );
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_PROCESS_LOGS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(
            ACTION.FETCH_PROCESS_LOGS_FAILURE,
            error.response.data.payload
          )
        );
    }
  };
};

export const scheduleProcess = (arg) => {
  return async (dispatch) => {
    try {
      const {bots,deviceId,...inputObject} = arg;
      dispatch({type :ACTION.PROCESS_START_FETCH});
      const data = await Api.post(
        //`${CONSTANTS.baseUrl}/schedule/create`,
        `${CONSTANTS.baseUrl}${CONSTANTS.scheduleProcess}/create`,
        arg.duration.scheduleType &&  arg.duration.scheduleType=="runOnce"? {agentId : arg.agentId,botId : arg.botId, tz: arg.tz,duration :{startDate : arg.duration.startDate,scheduleType : arg.duration.scheduleType}} : inputObject
      );
      if (data.status === 200) {
        dispatch(setData(ACTION.SCHEDULE_PROCESS_SUCCESS, data.data.message));
      }
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.SCHEDULE_PROCESS_FAILURE, error.response.data.message)
        );
    }
  };
};


export const getAllScheduledProcesses = (arg) => {
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.PROCESS_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.scheduleProcess}/all?page=${arg.page}&pageSize=${arg.size}&userId=${arg.user}&botId=${arg.bot}&scheduleType=${arg.scheduleType}&agentId=${arg.agent}&isDeleted=${arg.isDeleted}&isExecuted=${arg.isExecuted}`
      );
      if (data.status === 200){
        dispatch(setData(ACTION.FETCH_SCHEDULED_PROCESS_SUCCESS, data.data.payload));
      }
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      else dispatch(setData(ACTION.FETCH_SCHEDULED_PROCESS_FAILURE));
    }
  };
};

export const deleteSchedule = (arg) => {
  debugger
  return async (dispatch) => {
    try {
      dispatch(startFetching(ACTION.PROCESS_START_FETCH));
      const data = await Api.delete(
        `${CONSTANTS.baseUrl}${CONSTANTS.scheduleProcess}/delete/${arg.id}`
      );
      if (data.status === 200) {
        dispatch({type:ACTION.DELETE_SCHEDULED_PROCESS_SUCCESS,payload:data.data.message});
        dispatch(getAllScheduledProcesses({
          page:1,
          size: 5,
          user:"",
          bot:"",
          scheduleType:"",
          agent:"",
          isDeleted:"",
          isExecuted:""
        }))
      }
    } catch (error) {
      if (error.response.status === 500){
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      }
      else{
        dispatch(
          {type:ACTION.DELETE_SCHEDULED_PROCESS_FAILURE, payload:error.response.data.message}
        );
      }
    }
  };
};

export const getScheduleDetails = (id) => {
  return async (dispatch) => {
    try {
      debugger
      dispatch(startFetching(ACTION.PROCESS_START_FETCH));
      const data = await Api.get(
        `${CONSTANTS.baseUrl}${CONSTANTS.scheduleProcess}/details/${id}`
      );
      debugger
      if (data.status === 200)
        dispatch(setData(ACTION.FETCH_SCHEDULED_PROCESS_DETAILS_SUCCESS, data.data.payload));
    } catch (error) {
      if (error.response.status === 500)
        dispatch(setError(ACTION.PROCESS_SET_ERROR, "Something Went Wrong!"));
      else
        dispatch(
          setData(ACTION.FETCH_SCHEDULED_PROCESS_DETAILS_FAILURE, error.response.data.message)
        );
    }
  };
};
