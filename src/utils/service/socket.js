import Emitter from "./emitter";
import clientIo from "socket.io-client";
import SOCKET_CONSTANTS from "../../constants/event.constant";

class Socket {
  constructor() {
    this.socket = undefined;
  }
  connect() {
    if (!this.socket) {
      this.socket = clientIo.connect(SOCKET_CONSTANTS.NOTIFICATION_SERVER_URL, {
        reconnect: true,
        forceNew: true,
        autoConnect: true,
        transports: ["polling"],
      });
    }
  }
  async initiateSocket() {
    this.connect();
    this.addListeners();
  }

  removeListener() {
    if (this.socket) {
      this.socket.off(SOCKET_CONSTANTS.MESSAGE_EVENT_NAME, ({ content }) => {
        console.log("removing listeners");
        Emitter.emit(SOCKET_CONSTANTS.INCOMING_NOTIFICATION_EVENT_NAME, {
          content,
        });
      });
    }
  }

  addListeners() {
    if (this.socket) {
      this.socket.on(SOCKET_CONSTANTS.CONNECT_EVENT_NAME, () => {
        if (this.socket.connected) {
          this.socket.emit(SOCKET_CONSTANTS.AUTHENTICATION_EVENT_NAME, {
            token: localStorage.getItem("token"),
            roomId: SOCKET_CONSTANTS.ROOM_NAME,
            userId: "userId",
          });
          this.socket.emit(SOCKET_CONSTANTS.JOIN_ROOM_EVENT_NAME, {
            token: localStorage.getItem("token"),
            roomId: SOCKET_CONSTANTS.ROOM_NAME,
            userId: "userId",
          });
          console.log("socket connected !!");
        }
      });
      this.socket.on(SOCKET_CONSTANTS.MESSAGE_EVENT_NAME, (data) => {
        console.log("socket notification recieved !!");
        Emitter.emit(SOCKET_CONSTANTS.INCOMING_NOTIFICATION_EVENT_NAME, data);
      });
      this.socket.on(SOCKET_CONSTANTS.DISCONNECT_EVENT_NAME, () => {
        console.log("socket disconnected");
      });
    }
  }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  }
  getSocket() {
    return this.socket;
  }
}

const socket = new Socket();

export default socket;
