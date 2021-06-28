import { userActionTypes as ACTION } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  registration: {
    message: "",
    success: false,
  },
  usersByPagging: {
    data: {},
  },
  users: {
    data: {},
    message: "",
  },
  userDetails: {
    data: {},
    message: "",
  },
  userRole: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.USER_START_FETCH:
      return { ...state, loading: true };

    case ACTION.USER_SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTION.USER_REMOVE_ERROR:
      return { ...state, loading: false, error: "" };

    case ACTION.USER_REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        registration: {
          success: true,
          message: action.payload,
        },
      };

    case ACTION.USER_REGISTRATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: "",
        registration: {
          message: action.payload,
          success: false,
        },
      };

    case ACTION.REMOVE_USER_REGISTRATION_POPUP:
      return {
        ...state,
        loading: false,
        registration: {
          ...state.registration,
          message: "",
        },
      };

    case ACTION.SET_USER_ROLE:
      return {
        ...state,
        loading: false,
        userRole: action.payload,
      };

    case ACTION.REMOVE_USER_ROLE:
      return {
        ...state,
        loading: false,
        userRole: [],
      };

    case ACTION.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        users: {
          message: "",
          data: action.payload,
        },
      };

    case ACTION.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "",
        users: {
          data: action.payload,
          message: "",
        },
      };

    case ACTION.REMOVE_USERS:
      return {
        ...state,
        loading: false,
        error: "",
        users: {
          message: "",
          data: {},
        },
      };

    case ACTION.FETCH_USERS_BY_PAGGINATION:
      return {
        ...state,
        loading: false,
        error: "",
        usersByPagging: {
          data: action.payload,
        },
      };

    case ACTION.REMOVE_USERS_BY_PAGGINATION:
      return {
        ...state,
        loading: false,
        error: "",
        usersByPagging: {
          data: {},
        },
      };

    case ACTION.FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: {
          ...state.userDetails,
          data: action.payload,
          message: "",
        },
        error: "",
      };

    case ACTION.FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        userDetails: {
          data: {},
          message: action.payload,
        },
        error: "",
      };

    case ACTION.REMOVE_USER_DETAILS:
      return {
        ...state,
        loading: false,
        userDetails: {
          data: {},
          message: "",
        },
        error: "",
      };

    case ACTION.REMOVE_USER_DETAILS_POPUP:
      return {
        ...state,
        loading: false,
        userDetails: {
          ...state.userDetails,
          message: "",
        },
        error: "",
      };

    case ACTION.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: {
          ...state.userDetails,
          data: { ...state.userDetails.data, isDeleted: true },
          message: "",
        },
        error: "",
      };

    case ACTION.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        userDetails: {
          ...state.userDetails,
          message: action.payload,
        },
        error: "",
      };

    case ACTION.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: {
          ...state.userDetails,
          message: "User Updated Successfully!",
        },
        error: "",
      };

    case ACTION.UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        userDetails: {
          ...state.userDetails,
          message: action.payload,
        },
        error: "",
      };

    default:
      return state;
  }
};

export default UserReducer;
