export default {
  socketUrl: `${process.env.SOCKET_URL}`,
  baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  getAllAgents: "/agent/all",
  getAllBots: "/bot/all",
  getBotDetails: "/bot/details",
  deleteBot: "/bot/delete",
  updateBot: "/bot/update",
  getAllRoles: "/role/all",
  getAllUsers: "/user/all",
  getUserDetails: "/user/details",
  deleteUser: "/user/delete",
  updateUser: "/user/update",
  getAllProcess: "/process/all",
  createProcess: "/process/create",
  scheduleProcess: "/process/schedule",
  createBot: "/bot/create",
  getProcessLogs: "/process/transaction-logs",
  getProcessExecutionLogs: "/processExecutionLog/all",
  login: "/user/login",
  register: "/user/register",
};
