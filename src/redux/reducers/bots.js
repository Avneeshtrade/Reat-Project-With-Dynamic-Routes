import { botActionTypes as ACTION } from "../actionTypes";

const initialState = {
  loading: false,
  bots: {
    data: {},
    message: "",
  },
  botDetails: {
    data: {},
    message: "",
  },
  error: "",
};

const BotReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.BOT_START_FETCH:
      return {
        ...state,
        loading: true,
      };

    case ACTION.BOT_SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.BOT_REMOVE_ERROR:
      return {
        ...state,
        error: "",
      };

    case ACTION.FETCH_BOTS_SUCCESS:
      return {
        ...state,
        loading: false,
        bots: {
          ...state.bots,
          data: action.payload,
          message: "",
        },
        error: "",
      };

    case ACTION.FETCH_BOTS_FAILURE:
      return {
        ...state,
        loading: false,
        bots: {
          ...state.bots,
          data: action.payload,
          message: "",
        },
        error: "",
      };

    case ACTION.REMOVE_BOTS:
      return {
        ...state,
        loading: false,
        bots: {
          ...state.bots,
          data: {},
          message: "",
        },
        error: "",
      };

    case ACTION.REMOVE_BOTS_POPUP:
      return {
        ...state,
        loading: false,
        bots: {
          ...state.bots,
          message: "",
        },
        error: "",
      };

    case ACTION.CREATE_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        bots: {
          ...state.bots,
          message: action.payload,
        },
        error: "",
      };

    case ACTION.CREATE_BOT_FAILURE:
      return {
        ...state,
        loading: false,
        bots: {
          ...state.bots,
          message: action.payload,
        },
        error: "",
      };

    case ACTION.FETCH_BOT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          data: action.payload,
          message: "",
        },
        error: "",
      };

    case ACTION.FETCH_BOT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          data: {},
          message: action.payload,
        },
        error: "",
      };

    case ACTION.REMOVE_BOT_DETAILS:
      return {
        ...state,
        loading: false,
        botDetails: {
          data: {},
          message: "",
        },
        error: "",
      };

    case ACTION.REMOVE_BOT_DETAILS_POPUP:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          message: "",
        },
        error: "",
      };

    case ACTION.DELETE_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          data: { ...state.botDetails.data, isDeleted: true },
          message: "",
        },
        error: "",
      };

    case ACTION.DELETE_BOT_FAILURE:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          message: action.payload,
        },
        error: "",
      };

    case ACTION.UPDATE_BOT_SUCCESS:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          message: "Bot Updated Successfully!",
        },
        error: "",
      };

    case ACTION.UPDATE_BOT_FAILURE:
      return {
        ...state,
        loading: false,
        botDetails: {
          ...state.botDetails,
          message: action.payload,
        },
        error: "",
      };

    default:
      return state;
  }
};

export default BotReducer;
