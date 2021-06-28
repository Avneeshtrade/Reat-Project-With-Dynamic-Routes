import { combineReducers } from "redux";
import AgentReducer from "./agents";
import ProcessReducer from "./process";
import BotReducer from "./bots";
import SocketReducer from "./socket";
import LoginReducer from "./login";
import UserReducer from "./user";
import { loginActionTypes } from "../actionTypes";
import { socket } from "../../utils/service";
import { Redirect } from "react-router-dom";

const appReducer = combineReducers({
  agents: AgentReducer,
  bots: BotReducer,
  socket: SocketReducer,
  login: LoginReducer,
  user: UserReducer,
  process: ProcessReducer,
});

const rootReducer = (state, action) => {
  if (action.type === loginActionTypes.LOGOUT) {
    localStorage.clear();
    socket.disconnect();
  }
  return appReducer(state, action);
};

export default rootReducer;
