import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { processActionTypes as ACTION } from "../actionTypes";

const initialState = {
  loading: false,
  processes: {
    data: {},
    message: "",
  },
  processLogs: {
    data: {},
  },
  scheduleProcesses: {
    data: {},
    message: "",
  },
  scheduleDetails: {
    data: {},
    message: "",
  },
  error: "",
};

const ProcessReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.PROCESS_START_FETCH:
      return {
        ...state,
        loading: true,
      };

    case ACTION.PROCESS_SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.PROCESS_REMOVE_ERROR:
      return {
        ...state,
        error: "",
      };
    case ACTION.FETCH_ALL_PROCESS_SUCCESS:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.processes,
          data: action.payload,
          message: "",
        },
        error: "",
      };
    case ACTION.UPDATE_ALL_PROCESS:
      const { updateProcessId, log } = action.payload;
      return {
        ...state,
        processes: {
          ...state.processes,
          data: {
            ...state.processes.data,
            rows: state.processes.data.rows.map((item) => {
              if (item.id === updateProcessId) {
                item.processExecutionLogs = [...item.processExecutionLogs, log];
              }
              return { ...item };
            }),
          },
        },
      };

    case ACTION.REMOVE_PROCESS_BY_ID:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.processes,
          data: {
            ...state.processes.data,
            rows: state.processes.data.rows.filter(
              (item) => item.id !== action.payload
            ),
          },
          message: "",
        },
        error: "",
      };

    case ACTION.FETCH_ALL_PROCESS_FAILURE:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.processes,
          data: [],
          message: "",
        },
        error: "",
      };

    case ACTION.REMOVE_ALL_PROCESS:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.processes,
          data: [],
          message: "",
        },
        error: "",
      };

    case ACTION.REMOVE_PROCESS_POPUP:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.processes,
          message: "",
        },
        error: "",
      };

    case ACTION.UPDATE_PROCESS_STATUS:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.processes,
          data: {
            ...state.processes.data,
            rows: state.processes.data.rows.map((process) => {
              if (process.id === action.payload.id) {
                return {
                  ...process,
                  status: action.payload.status,
                  updatedAt: action.payload.updatedAt,
                };
              }
              return process;
            }),
          },
        },
        error: "",
      };
    case ACTION.CREATE_PROCESS_SUCCESS:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.bots,
          message: "",
        },
        error: "",
      };

    case ACTION.CREATE_PROCESS_FAILURE:
      return {
        ...state,
        loading: false,
        processes: {
          ...state.bots,
          message: action.payload,
        },
        error: "",
      };

    case ACTION.FETCH_PROCESS_LOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        processLogs: {
          ...state.processLogs,
          data: action.payload,
        },
        error: "",
      };

    case ACTION.FETCH_PROCESS_LOGS_FAILURE:
      return {
        ...state,
        loading: false,
        processLogs: {
          ...state.processLogs,
          data: action.payload,
        },
        error: "",
      };

    case ACTION.REMOVE_PROCESS_LOGS:
      return {
        ...state,
        loading: false,
        processLogs: {
          ...state.processLogs,
          data: {},
        },
        error: "",
      };

    case ACTION.SCHEDULE_PROCESS_SUCCESS:
      return {
        ...state,
        loading: false,
        scheduleProcesses: {
          ...state.scheduleProcesses,
          message: action.payload,
        },
        error: "",
      };

    case ACTION.SCHEDULE_PROCESS_FAILURE:
      return {
        ...state,
        loading: false,
        scheduleProcesses: {
          ...state.scheduleProcesses,
          message: action.payload,
        },
        error: "",
      };

      case ACTION.FETCH_SCHEDULED_PROCESS_SUCCESS:
        return {
          ...state,
          loading: false,
          scheduleProcesses: {
            ...state.scheduleProcesses,
            data: {...action.payload,rows : action.payload.rows.length ? 
              action.payload.rows.map(i=>{
                return {
                ...i,
                duration : JSON.parse(i.duration)
                }
              })
              :[]},
          },
          error: "",
        };
  
      case ACTION.FETCH_SCHEDULED_PROCESS_FAILURE:
        return {
          ...state,
          loading: false,
          scheduleProcesses: {
            ...state.scheduleProcesses,
            data: {},
          },
          error: "",
        };

    case ACTION.REMOVE_SCHEDULE_PROCESS_POPUP:
      return {
        ...state,
        loading: false,
        scheduleProcesses: {
          ...state.scheduleProcesses,
          message: "",
        },
        error: "",
      };
     
    case ACTION.REMOVE_SCHEDULED_PROCESS:
        return {
          ...state,
          loading: false,
          scheduleProcesses: {
            ...state.scheduleProcesses,
            data: {},
            message:""
          },
          error: "",
      };  

    case ACTION.DELETE_SCHEDULED_PROCESS_SUCCESS:
          return {
            ...state,
            loading: false,
            scheduleProcesses: {
              ...state.scheduleProcesses,
              message :action.payload
            },
            error: "",
      };
    
    case ACTION.DELETE_SCHEDULED_PROCESS_FAILURE:
          return {
            ...state,
            loading: false,
            scheduleProcesses: {
              ...state.scheduleProcesses,
              message :action.payload,
            },
            error: "",
      };  

      case ACTION.FETCH_SCHEDULED_PROCESS_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          scheduleDetails: {
            ...state.scheduleDetails,
            data :{...action.payload,
            duration: JSON.parse(action.payload.duration)
            }
          },
          error: "",
        };
  
      case ACTION.FETCH_SCHEDULED_PROCESS_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          scheduleDetails: {
            ...state.scheduleDetails,
            message:action.payload
          },
          error: "",
        };  

      case ACTION.REMOVE_SCHEDULED_PROCESS_DETAILS:
        return {
          ...state,
          loading: false,
          scheduleDetails: {
            data:{},
            message:""
          },
          error: "",
        };  

      case ACTION.REMOVE_SCHEDULED_PROCESS_DETAILS_POPUP:
          return {
            ...state,
            loading: false,
            scheduleDetails: {
              ...state.scheduleDetails,
              message:""
            },
            error: "",
        };    


    default:
      return state;
  }
};

export default ProcessReducer;
