(this.webpackJsonpcontrol_room_frontend=this.webpackJsonpcontrol_room_frontend||[]).push([[3],{110:function(e,a,t){e.exports={sidebar:"sidebar_sidebar__33x1m"}},112:function(e,a,t){e.exports={header:"header_header__2I39H",toggleButton:"header_toggleButton__1UwEs",company_logo:"header_company_logo__1fQFV"}},113:function(e,a,t){e.exports={header:"layout_header__3TSir"}},131:function(e,a,t){},132:function(e,a,t){},173:function(e,a,t){"use strict";t.r(a);var E=t(6),c=t(0),r=t.n(c),s=t(14),O=t.n(s),S=(t(131),t(1)),_=t(40),o=(t(132),t(49)),n=t(16),R=t(175),T=t(176),i=t(110),b=t.n(i),j=(t(181),t(182),t(124),t(125),t(179),t(177),function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}),d=t(183),l=t(184),C=r.a.lazy((function(){return t.e(7).then(t.bind(null,324))})),U=r.a.lazy((function(){return Promise.all([t.e(0),t.e(2)]).then(t.bind(null,322))})),u=r.a.lazy((function(){return t.e(1).then(t.bind(null,323))})),A={Admin:[{key:1,path:"/controlroom/dashboard",content:"Dashboard",icon:Object(E.jsx)(d.a,{}),title:"dashboard",exact:!0,component:C},{key:2,path:"/controlroom/login",content:"Login",title:"tab1",icon:Object(E.jsx)(l.a,{}),exact:!0,component:U},{key:3,path:"/controlroom/home",content:"Home",title:"Home",icon:Object(E.jsx)(l.a,{}),exact:!0,component:u}]},L=function(e){var a=Object(n.g)(),t=e.collapsed,c=e.onCollapse,r=R.a.Sider,s=T.a.SubMenu,O=A.Admin,S=function(e){!function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e.push({pathname:a,state:t})}(a,e)};return Object(E.jsx)(r,{collapsible:!0,collapsed:t,onCollapse:c,className:b.a.sidebar,collapsedWidth:0,style:{height:"100vh"},children:Object(E.jsx)(T.a,{theme:"dark",mode:"inline",children:O&&O.length&&O.map((function(e){return e.children&&e.children.length?Object(E.jsx)(s,{icon:e.icon,title:e.title,children:e.children.map((function(e){return Object(E.jsx)(T.a.Item,{icon:e.icon,onClick:function(){return S(e.path)},children:e.content},e.key)}))},e.key):Object(E.jsx)(T.a.Item,{icon:e.icon,onClick:function(){return S(e.path)},children:e.content},e.key)}))})})},g=t(112),P=t.n(g),D=t(185),I=t(180),p=t(178),F=t(67),h=function(e){var a=Object(E.jsx)(T.a,{children:Object(E.jsx)(T.a.Item,{onClick:function(){window.location.href="/"},children:"Logout"})});return Object(E.jsxs)("div",{className:P.a.header,children:[Object(E.jsx)("h1",{style:{color:"white"},children:"My Demo Project"}),Object(E.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",color:"white"},children:Object(E.jsx)(I.b,{direction:"vertical",wrap:!0,children:Object(E.jsx)(p.a,{overlay:a,placement:"bottomCenter",children:Object(E.jsx)(F.a,{style:{color:"white",fontSize:"20px"},icon:Object(E.jsx)(D.a,{}),type:"link"})})})})]})},H=t(113),m=t.n(H),f=function(){var e=A.Admin;return Object(E.jsx)(r.a.Fragment,{children:Object(E.jsxs)(n.d,{children:[e.map((function(e,a){return Object(E.jsx)(n.b,{path:e.path,name:e.name,render:function(a){return Object(E.jsx)(e.component,Object(S.a)({},a))},exact:e.exact},e.key)})),Object(E.jsx)(n.b,{children:Object(E.jsx)(n.a,{to:"/pagenotfound"})})]})})},y=function(e){var a=R.a.Header,t=R.a.Content,r=Object(c.useState)(!1),s=Object(_.a)(r,2),O=s[0],o=s[1],n=Object(c.useState)(void 0),T=Object(_.a)(n,2),i=T[0],b=T[1],d=function(){var e=Object(c.useState)(j()),a=Object(_.a)(e,2),t=a[0],E=a[1];return Object(c.useEffect)((function(){var e=function(){return E(j())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),t}().width;Object(c.useEffect)((function(){d<1040?(o(!0),b(d)):(b(d),o(!1))}),[d]);var l=Object(c.useCallback)((function(e){o(e)}),[d,O]);return Object(E.jsxs)(R.a,{children:[Object(E.jsx)(a,{className:m.a.header,style:{padding:0},children:Object(E.jsx)(h,{collapsed:O,onCollapse:l,toggle:function(){o(!O)}})}),Object(E.jsxs)(R.a,{className:"site-layout",children:[Object(E.jsx)(L,Object(S.a)({collapsed:O,onCollapse:l},e)),Object(E.jsx)(t,{style:{minHeight:"100vh",paddingTop:"64px",paddingLeft:O?i>900?"7%":"10%":i>900?"15%":"23%"},children:Object(E.jsx)(f,Object(S.a)({},e))})]})]})},G=Object(E.jsx)("div",{className:"pt-3 text-center",children:Object(E.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})});var N=function(){var e=Object(c.useState)(!0),a=Object(_.a)(e,2);return a[0],a[1],Object(E.jsx)(o.a,{children:Object(E.jsxs)(r.a.Suspense,{fallback:G,children:[Object(E.jsx)(n.b,{path:"/controlroom",name:"controlroom",render:function(e){return Object(E.jsx)(y,Object(S.a)({},e))}}),Object(E.jsx)(n.b,{children:Object(E.jsx)(n.a,{to:"/controlroom/dashboard"})})]})})},B=function(e){e&&e instanceof Function&&t.e(9).then(t.bind(null,317)).then((function(a){var t=a.getCLS,E=a.getFID,c=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),E(e),c(e),r(e),s(e)}))},M=(t(137),t(121)),V=t(39),v=t(115),x={AGENT_START_FETCH:"AGENT_START_FETCH",AGENT_SET_ERROR:"AGENT_SET_ERROR",AGENT_REMOVE_ERROR:"AGENT_REMOVE_ERROR",FETCH_AGENTS_REQUEST:"FETCH_AGENTS_REQUEST",FETCH_AGENTS_SUCCESS:"FETCH_AGENTS_SUCCESS",FETCH_AGENTS_FAILURE:"FETCH_AGENTS_FAILURE",REMOVE_FETCH_AGENTS:"REMOVE_FETCH_AGENTS",UPDATE_AGENT_STATUS:"UPDATE_AGENT_STATUS",UPDATE_AGENT_STATUS_ARRAY:"UPDATE_AGENT_STATUS_ARRAY",UPDATE_AGENT_IS_BUSY_STATUS:"UPDATE_AGENT_IS_BUSY_STATUS"},k={BOT_START_FETCH:"BOT_START_FETCH",BOT_SET_ERROR:"BOT_SET_ERROR",BOT_REMOVE_ERROR:"BOT_REMOVE_ERROR",FETCH_BOTS_REQUEST:"FETCH_BOTS_REQUEST",FETCH_BOTS_SUCCESS:"FETCH_BOTS_SUCCESS",FETCH_BOTS_FAILURE:"FETCH_BOTS_FAILURE",REMOVE_BOTS:"REMOVE_BOTS",REMOVE_BOTS_POPUP:"REMOVE_BOTS_POPUP",CREATE_BOT_REQUEST:"CREATE_BOT_REQUEST",CREATE_BOT_SUCCESS:"CREATE_BOT_SUCCESS",CREATE_BOT_FAILURE:"CREATE_BOT_FAILURE",FETCH_BOT_DETAILS_REQUEST:"FETCH_BOT_DETAILS_REQUEST",FETCH_BOT_DETAILS_SUCCESS:"FETCH_BOT_DETAILS_SUCCESS",FETCH_BOT_DETAILS_FAILURE:"FETCH_BOT_DETAILS_FAILURE",REMOVE_BOT_DETAILS:"REMOVE_BOT_DETAILS",REMOVE_BOT_DETAILS_POPUP:"REMOVE_BOT_DETAILS_POPUP",DELETE_BOT_REQUEST:"DELETE_BOT_REQUEST",DELETE_BOT_SUCCESS:"DELETE_BOT_SUCCESS",DELETE_BOT_FAILURE:"DELETE_BOT_FAILURE",UPDATE_BOT_REQUEST:"UPDATE_BOT_REQUEST",UPDATE_BOT_SUCCESS:"UPDATE_BOT_SUCCESS",UPDATE_BOT_FAILURE:"UPDATE_BOT_FAILURE"},w={INITIATE_SOCKET_SUCCESS:"INITIATE_SOCKET_SUCCESS",INITIATE_SOCKET_FAILURE:"INITIATE_SOCKET_FAILURE"},Q={LOGIN_START_FETCH:"LOGIN_START_FETCH",LOGIN_SET_ERROR:"LOGIN_SET_ERROR",LOGIN_REMOVE_ERROR:"LOGIN_REMOVE_ERROR",LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",REMOVE_POPUP:"REMOVE_POPUP",LOGOUT:"LOGOUT"},Y={USER_START_FETCH:"USER_START_FETCH",USER_SET_ERROR:"USER_SET_ERROR",USER_REMOVE_ERROR:"USER_REMOVE_ERROR",USER_REGISTRATION_REQUEST:"USER_REGISTRATION_REQUEST",USER_REGISTRATION_SUCCESS:"USER_REGISTRATION_SUCCESS",USER_REGISTRATION_FAILURE:"USER_REGISTRATION_FAILURE",REMOVE_USER_REGISTRATION_POPUP:"REMOVE_USER_REGISTRATION_POPUP",GET_USER_ROLE:"GET_USER_ROLE",SET_USER_ROLE:"GET_USER_ROLE",REMOVE_USER_ROLE:"REMOVE_USER_ROLE",FETCH_USERS_REQUEST:"FETCH_USERS_REQUEST",FETCH_USERS_SUCCESS:"FETCH_USERS_SUCCESS",FETCH_USERS_FAILURE:"FETCH_USERS_FAILURE",REMOVE_USERS:"REMOVE_USERS",FETCH_USERS_BY_PAGGINATION:"FETCH_USERS_BY_PAGGINATION",REMOVE_USERS_BY_PAGGINATION:"REMOVE_USERS_BY_PAGGINATION",FETCH_USER_DETAILS_SUCCESS:"FETCH_USER_DETAILS_SUCCESS",FETCH_USER_DETAILS_FAILURE:"FETCH_USER_DETAILS_FAILURE",REMOVE_USER_DETAILS:"REMOVE_USER_DETAILS",REMOVE_USER_DETAILS_POPUP:"REMOVE_USER_DETAILS_POPUP",DELETE_USER_SUCCESS:"DELETE_USER_SUCCESS",DELETE_USER_FAILURE:"DELETE_USER_FAILURE",UPDATE_USER_SUCCESS:"UPDATE_USER_SUCCESS",UPDATE_USER_FAILURE:"UPDATE_USER_FAILURE"},z={PROCESS_START_FETCH:"PROCESS_START_FETCH",PROCESS_SET_ERROR:"PROCESS_SET_ERROR",PROCESS_REMOVE_ERROR:"PROCESS_REMOVE_ERROR",FETCH_ALL_PROCESS_REQUEST:"FETCH_ALL_PROCESS_REQUEST",FETCH_ALL_PROCESS_SUCCESS:"FETCH_ALL_PROCESS_SUCCESS",FETCH_ALL_PROCESS_FAILURE:"FETCH_ALL_PROCESS_FAILURE",REMOVE_ALL_PROCESS:"REMOVE_ALL_PROCESS",UPDATE_ALL_PROCESS:"UPDATE_ALL_PROCESS",UPDATE_PROCESS_STATUS:"UPDATE_PROCESS_STATUS",REMOVE_PROCESS_BY_ID:"REMOVE_PROCESS_BY_ID",REMOVE_PROCESS_POPUP:"REMOVE_PROCESS_POPUP",FETCH_PROCESS_LOGS_REQUEST:"FETCH_PROCESS_LOGS_REQUEST",FETCH_PROCESS_LOGS_SUCCESS:"FETCH_PROCESS_LOGS_SUCCESS",FETCH_PROCESS_LOGS_FAILURE:"FETCH_PROCESS_LOGS_FAILURE",REMOVE_PROCESS_LOGS:"REMOVE_PROCESS_LOGS",CREATE_PROCESS_REQUEST:"CREATE_PROCESS_REQUEST",CREATE_PROCESS_SUCCESS:"CREATE_PROCESS_SUCCESS",CREATE_PROCESS_FAILURE:"CREATE_PROCESS_FAILURE",SCHEDULE_PROCESS_SUCCESS:"SCHEDULE_PROCESS_SUCCESS",SCHEDULE_PROCESS_FAILURE:"SCHEDULE_PROCESS_FAILURE",REMOVE_SCHEDULE_PROCESS_POPUP:"REMOVE_SCHEDULE_PROCESS_POPUP",FETCH_SCHEDULED_PROCESS_SUCCESS:"FETCH_SCHEDULED_PROCESS_SUCCESS",FETCH_SCHEDULED_PROCESS_FAILURE:"FETCH_SCHEDULED_PROCESS_FAILURE",REMOVE_SCHEDULED_PROCESS:"REMOVE_SCHEDULED_PROCESS",DELETE_SCHEDULED_PROCESS_SUCCESS:"DELETE_SCHEDULED_PROCESS_SUCCESS",DELETE_SCHEDULED_PROCESS_FAILURE:"DELETE_SCHEDULED_PROCESS_FAILURE",FETCH_SCHEDULED_PROCESS_DETAILS_SUCCESS:"FETCH_SCHEDULED_PROCESS_DETAILS_SUCCESS",FETCH_SCHEDULED_PROCESS_DETAILS_FAILURE:"FETCH_SCHEDULED_PROCESS_DETAILS_FAILURE",REMOVE_SCHEDULED_PROCESS_DETAILS_POPUP:"REMOVE_SCHEDULED_PROCESS_DETAILS_POPUP",REMOVE_SCHEDULED_PROCESS_DETAILS:"REMOVE_SCHEDULED_PROCESS_DETAILS"},K={loading:!1,agents:{data:{},message:""},error:""},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x.AGENT_START_FETCH:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case x.AGENT_SET_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:a.payload});case x.AGENT_REMOVE_ERROR:return Object(S.a)(Object(S.a)({},e),{},{error:""});case x.FETCH_AGENTS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,agents:Object(S.a)(Object(S.a)({},e.agents),{},{data:a.payload,message:""}),error:""});case x.FETCH_AGENTS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,agents:Object(S.a)(Object(S.a)({},e.agents),{},{data:{}}),error:""});case x.REMOVE_FETCH_AGENTS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,agents:Object(S.a)(Object(S.a)({},e.agents),{},{data:{},message:""}),error:""});case x.UPDATE_AGENT_STATUS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,agents:Object(S.a)(Object(S.a)({},e.agents),{},{data:Object(S.a)(Object(S.a)({},e.agents.data),{},{rows:e.agents.data.rows.map((function(e){return e.id===a.payload.id?Object(S.a)(Object(S.a)({},e),{},{status:a.payload.status,updatedAt:a.payload.updatedAt,User:a.payload.User}):e}))})}),error:""});case x.UPDATE_AGENT_STATUS_ARRAY:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,agents:Object(S.a)(Object(S.a)({},e.agents),{},{data:Object(S.a)(Object(S.a)({},e.agents.data),{},{rows:e.agents.data.rows.map((function(e){return a.payload.data.forEach((function(t){t.id===e.id&&(e=Object(S.a)(Object(S.a)({},e),{},{status:a.payload.status,updatedAt:t.updatedAt}))})),e}))})}),error:""});case x.UPDATE_AGENT_IS_BUSY_STATUS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,agents:Object(S.a)(Object(S.a)({},e.agents),{},{data:Object(S.a)(Object(S.a)({},e.agents.data),{},{rows:e.agents.data.rows.map((function(e){return e.id===a.payload.id?Object(S.a)(Object(S.a)({},e),{},{isBusy:a.payload.isBusy}):e}))})}),error:""});default:return e}},W=t(122),q=(t(139),{loading:!1,processes:{data:{},message:""},processLogs:{data:{}},scheduleProcesses:{data:{},message:""},scheduleDetails:{data:{},message:""},error:""}),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case z.PROCESS_START_FETCH:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case z.PROCESS_SET_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:a.payload});case z.PROCESS_REMOVE_ERROR:return Object(S.a)(Object(S.a)({},e),{},{error:""});case z.FETCH_ALL_PROCESS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.processes),{},{data:a.payload,message:""}),error:""});case z.UPDATE_ALL_PROCESS:var t=a.payload,E=t.updateProcessId,c=t.log;return Object(S.a)(Object(S.a)({},e),{},{processes:Object(S.a)(Object(S.a)({},e.processes),{},{data:Object(S.a)(Object(S.a)({},e.processes.data),{},{rows:e.processes.data.rows.map((function(e){return e.id===E&&(e.processExecutionLogs=[].concat(Object(W.a)(e.processExecutionLogs),[c])),Object(S.a)({},e)}))})})});case z.REMOVE_PROCESS_BY_ID:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.processes),{},{data:Object(S.a)(Object(S.a)({},e.processes.data),{},{rows:e.processes.data.rows.filter((function(e){return e.id!==a.payload}))}),message:""}),error:""});case z.FETCH_ALL_PROCESS_FAILURE:case z.REMOVE_ALL_PROCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.processes),{},{data:[],message:""}),error:""});case z.REMOVE_PROCESS_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.processes),{},{message:""}),error:""});case z.UPDATE_PROCESS_STATUS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.processes),{},{data:Object(S.a)(Object(S.a)({},e.processes.data),{},{rows:e.processes.data.rows.map((function(e){return e.id===a.payload.id?Object(S.a)(Object(S.a)({},e),{},{status:a.payload.status,updatedAt:a.payload.updatedAt}):e}))})}),error:""});case z.CREATE_PROCESS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.bots),{},{message:""}),error:""});case z.CREATE_PROCESS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processes:Object(S.a)(Object(S.a)({},e.bots),{},{message:a.payload}),error:""});case z.FETCH_PROCESS_LOGS_SUCCESS:case z.FETCH_PROCESS_LOGS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processLogs:Object(S.a)(Object(S.a)({},e.processLogs),{},{data:a.payload}),error:""});case z.REMOVE_PROCESS_LOGS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,processLogs:Object(S.a)(Object(S.a)({},e.processLogs),{},{data:{}}),error:""});case z.SCHEDULE_PROCESS_SUCCESS:case z.SCHEDULE_PROCESS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleProcesses:Object(S.a)(Object(S.a)({},e.scheduleProcesses),{},{message:a.payload}),error:""});case z.FETCH_SCHEDULED_PROCESS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleProcesses:Object(S.a)(Object(S.a)({},e.scheduleProcesses),{},{data:Object(S.a)(Object(S.a)({},a.payload),{},{rows:a.payload.rows.length?a.payload.rows.map((function(e){return Object(S.a)(Object(S.a)({},e),{},{duration:JSON.parse(e.duration)})})):[]})}),error:""});case z.FETCH_SCHEDULED_PROCESS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleProcesses:Object(S.a)(Object(S.a)({},e.scheduleProcesses),{},{data:{}}),error:""});case z.REMOVE_SCHEDULE_PROCESS_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleProcesses:Object(S.a)(Object(S.a)({},e.scheduleProcesses),{},{message:""}),error:""});case z.REMOVE_SCHEDULED_PROCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleProcesses:Object(S.a)(Object(S.a)({},e.scheduleProcesses),{},{data:{},message:""}),error:""});case z.DELETE_SCHEDULED_PROCESS_SUCCESS:case z.DELETE_SCHEDULED_PROCESS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleProcesses:Object(S.a)(Object(S.a)({},e.scheduleProcesses),{},{message:a.payload}),error:""});case z.FETCH_SCHEDULED_PROCESS_DETAILS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleDetails:Object(S.a)(Object(S.a)({},e.scheduleDetails),{},{data:Object(S.a)(Object(S.a)({},a.payload),{},{duration:JSON.parse(a.payload.duration)})}),error:""});case z.FETCH_SCHEDULED_PROCESS_DETAILS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleDetails:Object(S.a)(Object(S.a)({},e.scheduleDetails),{},{message:a.payload}),error:""});case z.REMOVE_SCHEDULED_PROCESS_DETAILS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleDetails:{data:{},message:""},error:""});case z.REMOVE_SCHEDULED_PROCESS_DETAILS_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,scheduleDetails:Object(S.a)(Object(S.a)({},e.scheduleDetails),{},{message:""}),error:""});default:return e}},Z={loading:!1,bots:{data:{},message:""},botDetails:{data:{},message:""},error:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case k.BOT_START_FETCH:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case k.BOT_SET_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:a.payload});case k.BOT_REMOVE_ERROR:return Object(S.a)(Object(S.a)({},e),{},{error:""});case k.FETCH_BOTS_SUCCESS:case k.FETCH_BOTS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,bots:Object(S.a)(Object(S.a)({},e.bots),{},{data:a.payload,message:""}),error:""});case k.REMOVE_BOTS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,bots:Object(S.a)(Object(S.a)({},e.bots),{},{data:{},message:""}),error:""});case k.REMOVE_BOTS_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,bots:Object(S.a)(Object(S.a)({},e.bots),{},{message:""}),error:""});case k.CREATE_BOT_SUCCESS:case k.CREATE_BOT_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,bots:Object(S.a)(Object(S.a)({},e.bots),{},{message:a.payload}),error:""});case k.FETCH_BOT_DETAILS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{data:a.payload,message:""}),error:""});case k.FETCH_BOT_DETAILS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{data:{},message:a.payload}),error:""});case k.REMOVE_BOT_DETAILS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:{data:{},message:""},error:""});case k.REMOVE_BOT_DETAILS_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{message:""}),error:""});case k.DELETE_BOT_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{data:Object(S.a)(Object(S.a)({},e.botDetails.data),{},{isDeleted:!0}),message:""}),error:""});case k.DELETE_BOT_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{message:a.payload}),error:""});case k.UPDATE_BOT_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{message:"Bot Updated Successfully!"}),error:""});case k.UPDATE_BOT_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,botDetails:Object(S.a)(Object(S.a)({},e.botDetails),{},{message:a.payload}),error:""});default:return e}},ee={loading:!1,socketObject:null,error:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case w.INITIATE_SOCKET_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,socketObject:a.payload,error:""});case w.INITIATE_SOCKET_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,socketObject:null,error:a.payload});default:return e}},te={loading:!1,success:!!localStorage.getItem("token"),error:"",message:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Q.LOGIN_START_FETCH:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case Q.LOGIN_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,success:!0,error:"",message:a.payload});case Q.LOGIN_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,success:!1,error:"",message:a.payload});case Q.LOGIN_SET_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,success:!1,error:a.payload,message:""});case Q.LOGIN_REMOVE_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:""});case Q.REMOVE_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",message:""});case Q.LOGOUT:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,success:!1});default:return e}},ce={loading:!1,error:"",registration:{message:"",success:!1},usersByPagging:{data:{}},users:{data:{},message:""},userDetails:{data:{},message:""},userRole:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Y.USER_START_FETCH:return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case Y.USER_SET_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:a.payload});case Y.USER_REMOVE_ERROR:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:""});case Y.USER_REGISTRATION_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",registration:{success:!0,message:a.payload}});case Y.USER_REGISTRATION_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",registration:{message:a.payload,success:!1}});case Y.REMOVE_USER_REGISTRATION_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,registration:Object(S.a)(Object(S.a)({},e.registration),{},{message:""})});case Y.SET_USER_ROLE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userRole:a.payload});case Y.REMOVE_USER_ROLE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userRole:[]});case Y.FETCH_USERS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",users:{message:"",data:a.payload}});case Y.FETCH_USERS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",users:{data:a.payload,message:""}});case Y.REMOVE_USERS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",users:{message:"",data:{}}});case Y.FETCH_USERS_BY_PAGGINATION:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",usersByPagging:{data:a.payload}});case Y.REMOVE_USERS_BY_PAGGINATION:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,error:"",usersByPagging:{data:{}}});case Y.FETCH_USER_DETAILS_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:Object(S.a)(Object(S.a)({},e.userDetails),{},{data:a.payload,message:""}),error:""});case Y.FETCH_USER_DETAILS_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:{data:{},message:a.payload},error:""});case Y.REMOVE_USER_DETAILS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:{data:{},message:""},error:""});case Y.REMOVE_USER_DETAILS_POPUP:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:Object(S.a)(Object(S.a)({},e.userDetails),{},{message:""}),error:""});case Y.DELETE_USER_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:Object(S.a)(Object(S.a)({},e.userDetails),{},{data:Object(S.a)(Object(S.a)({},e.userDetails.data),{},{isDeleted:!0}),message:""}),error:""});case Y.DELETE_USER_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:Object(S.a)(Object(S.a)({},e.userDetails),{},{message:a.payload}),error:""});case Y.UPDATE_USER_SUCCESS:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:Object(S.a)(Object(S.a)({},e.userDetails),{},{message:"User Updated Successfully!"}),error:""});case Y.UPDATE_USER_FAILURE:return Object(S.a)(Object(S.a)({},e),{},{loading:!1,userDetails:Object(S.a)(Object(S.a)({},e.userDetails),{},{message:a.payload}),error:""});default:return e}},se=t(81),Oe=t.n(se),Se=t(116),_e=t(117),oe=t(118),ne=t(119),Re=new(t.n(ne).a),Te={on:function(e,a){return Re.on(e,a)},once:function(e,a){return Re.once(e,a)},off:function(e,a){return Re.off(e,a)},emit:function(e,a){return Re.emit(e,a)}};Object.freeze(Te);var ie=Te,be=t(120),je=t.n(be),de="message",le="authentication",Ce="join-room",Ue="connect",ue="controlroom",Ae="incoming-event",Le="disconnect",ge="http://192.168.1.166:4000",Pe=new(function(){function e(){Object(_e.a)(this,e),this.socket=void 0}return Object(oe.a)(e,[{key:"connect",value:function(){this.socket||(this.socket=je.a.connect(ge,{reconnect:!0,forceNew:!0,autoConnect:!0,transports:["polling"]}))}},{key:"initiateSocket",value:function(){var e=Object(Se.a)(Oe.a.mark((function e(){return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.connect(),this.addListeners();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"removeListener",value:function(){this.socket&&this.socket.off(de,(function(e){var a=e.content;console.log("removing listeners"),ie.emit(Ae,{content:a})}))}},{key:"addListeners",value:function(){var e=this;this.socket&&(this.socket.on(Ue,(function(){e.socket.connected&&(e.socket.emit(le,{token:localStorage.getItem("token"),roomId:ue,userId:"userId"}),e.socket.emit(Ce,{token:localStorage.getItem("token"),roomId:ue,userId:"userId"}),console.log("socket connected !!"))})),this.socket.on(de,(function(e){console.log("socket notification recieved !!"),ie.emit(Ae,e)})),this.socket.on(Le,(function(){console.log("socket disconnected")})))}},{key:"disconnect",value:function(){this.socket&&(this.socket.disconnect(),this.socket=void 0)}},{key:"getSocket",value:function(){return this.socket}}]),e}()),De=Object(V.c)({agents:J,bots:$,socket:ae,login:Ee,user:re,process:X}),Ie=function(e,a){return a.type===Q.LOGOUT&&(localStorage.clear(),Pe.disconnect()),De(e,a)},pe=Object(V.d)(Ie,Object(V.a)(v.a));O.a.render(Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(M.a,{store:pe,children:Object(E.jsx)(N,{})})}),document.getElementById("root")),B()}},[[173,4,5]]]);
//# sourceMappingURL=main.9c68aa5b.chunk.js.map