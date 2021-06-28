import { agentActionTypes as ACTION } from "../actionTypes";

const initialState = {
  loading: false,
  agents: {
    data: {},
    message: "",
  },
  error: "",
};

const AgentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.AGENT_START_FETCH:
      debugger
      return {
        ...state,
        loading: true,
      };

    case ACTION.AGENT_SET_ERROR:
      debugger
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.AGENT_REMOVE_ERROR:
      return {
        ...state,
        error: "",
      };

    case ACTION.FETCH_AGENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        agents: {
          ...state.agents,
          data: action.payload,
          message: "",
        },
        error: "",
      };

    case ACTION.FETCH_AGENTS_FAILURE:
      return {
        ...state,
        loading: false,
        agents: {
          ...state.agents,
          data: {},
        },
        error: "",
      };

    case ACTION.REMOVE_FETCH_AGENTS:
      return {
        ...state,
        loading: false,
        agents: {
          ...state.agents,
          data: {},
          message: "",
        },
        error: "",
      };

    case ACTION.UPDATE_AGENT_STATUS:
      return {
        ...state,
        loading: false,
        agents: {
          ...state.agents,
          data: {
            ...state.agents.data,
            rows: state.agents.data.rows.map((agent) => {
              if (agent.id === action.payload.id) {
                return {
                  ...agent,
                  status: action.payload.status,
                  updatedAt: action.payload.updatedAt,
                  User: action.payload.User,
                };
              }
              return agent;
            }),
          },
        },
        error: "",
      };

    case ACTION.UPDATE_AGENT_STATUS_ARRAY:
      return {
        ...state,
        loading: false,
        agents: {
          ...state.agents,
          data: {
            ...state.agents.data,
            rows: state.agents.data.rows.map((agent) => {
              action.payload.data.forEach((item) => {
                if (item.id === agent.id) {
                  agent = {
                    ...agent,
                    status: action.payload.status,
                    updatedAt: item.updatedAt,
                  };
                }
              });
              return agent;
            }),
          },
        },
        error: "",
      };

    case ACTION.UPDATE_AGENT_IS_BUSY_STATUS:
      return {
        ...state,
        loading: false,
        agents: {
          ...state.agents,
          data: {
            ...state.agents.data,
            rows: state.agents.data.rows.map((agent) => {
              if (agent.id === action.payload.id) {
                return { ...agent, isBusy: action.payload.isBusy };
              }
              return agent;
            }),
          },
        },
        error: "",
      };

    default:
      return state;
  }
};

export default AgentReducer;
