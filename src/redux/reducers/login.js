import { loginActionTypes as ACTION } from "../actionTypes";

const initialState = {
  loading: false,
  success: localStorage.getItem("token") ? true : false,
  error: "",
  message: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.LOGIN_START_FETCH:
      return { ...state, loading: true };

    case ACTION.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: "",
        message: action.payload,
      };

    case ACTION.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: "",
        message: action.payload,
      };

    case ACTION.LOGIN_SET_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
        message: "",
      };

    case ACTION.LOGIN_REMOVE_ERROR:
      return { ...state, loading: false, error: "" };

    case ACTION.REMOVE_POPUP:
      return {
        ...state,
        loading: false,
        error: "",
        message: "",
      };

    case ACTION.LOGOUT:
      return { ...state, loading: false, success: false };

    default:
      return state;
  }
};

export default LoginReducer;
