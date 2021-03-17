(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{114:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),s=n.n(c),i=n(8),r=n(27),o=n(66),l=n(67),u=n(16),j="LOGIN_SUCCESS",b="LOGIN_FAIL",d="LOGOUT",p="SET_MESSAGE",O="CLEAR_MESSAGE",m="GET_PROJECTS",f="GET_POSITIONS",h="GET_LINKS",g="SET_VIEW",v="SET_POSITION_VIEW",x=localStorage.getItem("user"),_=x?{isLoggedIn:!0,user:x}:{isLoggedIn:!1,user:null},N={},w={},k={name:""},y={positionViewId:"6048992cf260da2eee28a13c"},D=Object(r.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!0,user:a.user});case b:case d:return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case p:return{message:a};case O:return{message:""};default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case h:return Object(u.a)(Object(u.a)({},e),{},{links:a});case f:return Object(u.a)(Object(u.a)({},e),{},{positions:a});case m:return Object(u.a)(Object(u.a)({},e),{},{projects:a});default:return e}},view:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;return a===g?Object(u.a)(Object(u.a)({},e),{},{name:n}):e},positionView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=t.payload,a=t.type;return a===v?Object(u.a)(Object(u.a)({},e),{},{positionViewId:n}):e}}),S=[l.a],E=Object(r.createStore)(D,Object(o.composeWithDevTools)(r.applyMiddleware.apply(void 0,S))),I=n(14),P=n(1),A=function(e){var t=e.component,n=e.layout;return Object(P.jsx)(I.b,{render:function(e){return Object(P.jsx)(n,{location:e,component:t})}})},T=function(e){var t=e.component,n=e.layout,a=e.routeView;return Object(i.c)((function(e){return e.auth})).isLoggedIn?Object(P.jsx)(I.b,{render:function(e){return Object(P.jsx)(n,{routeView:a,location:e,component:t})}}):Object(P.jsx)(I.a,{to:"/"})},C=n(25),L=n(40),V=n(30),M=n(72),F=n(71),z=n.p+"static/media/logo.9699341b.svg";function R(){return Object(P.jsx)("nav",{children:Object(P.jsxs)("div",{className:"menu",children:[Object(P.jsx)("div",{className:"menu__logo-ctn",children:Object(P.jsx)(C.b,{to:"/",children:Object(P.jsx)("img",{src:z,alt:"logo"})})}),Object(P.jsx)(C.b,{to:"/projects",className:"menu__link",children:"Projects"}),Object(P.jsx)(C.b,{to:"/positions",className:"menu__link",children:"Experience"})]})})}var G=n(34),J=n.n(G),U=n(44),W=n(18),Y=n.n(W),B={getProjectsFromAPI:function(){var e=Object(U.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/API/projects");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getLinksFromAPI:function(){var e=Object(U.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/API/links");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getPositionsFromAPI:function(){var e=Object(U.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.get("/API/positions");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},q=function(){return function(e){return B.getProjectsFromAPI().then((function(t){return e({type:m,payload:t.data}),Promise.resolve()}),(function(e){return console.log(e),Promise.reject()}))}},H=function(){return function(e){return B.getPositionsFromAPI().then((function(t){return e({type:f,payload:t.data}),Promise.resolve()}),(function(e){return console.log(e),Promise.reject()}))}},K=function(){return function(e){return B.getLinksFromAPI().then((function(t){return e({type:h,payload:t.data}),Promise.resolve()}),(function(e){return console.log(e),Promise.reject()}))}},$=n(7),Q=n.p+"static/media/github.58b24f52.svg",X=n.p+"static/media/linkedin.ed6e0b64.svg",Z=n.p+"static/media/cv.e0232fd3.svg";function ee(e){var t=e.url,n=e.name,c=e.imageTitle,s=Object(a.useState)(),i=Object($.a)(s,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){c.includes("github")&&o(Q),c.includes("linkedin")&&o(X),c.includes("cv")&&o(Z)}),[]),Object(P.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(P.jsx)("img",{src:r,alt:n})})}function te(){var e=Object(i.c)((function(e){return e.data})),t=Object(i.c)((function(e){return e.view})),n=Object(i.b)();return Object(a.useEffect)((function(){n(K())}),[t.name]),Object(P.jsx)("div",{className:"links",children:e.links&&e.links.length>0&&e.links.map((function(e,t){return Object(P.jsx)("div",{className:"links__link",children:Object(P.jsx)(ee,{name:e.name,url:e.url,imageTitle:e.imageTitle})},t)}))})}function ne(){return Object(P.jsx)("aside",{children:Object(P.jsx)("div",{className:"sidebar",children:Object(P.jsx)(te,{})})})}var ae=function(e){Object(M.a)(n,e);var t=Object(F.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"render",value:function(){var e=this.props.component,t=this.props.location;return Object(P.jsxs)("div",{className:"layout",children:[!this.props.routeView&&Object(P.jsx)(R,{}),Object(P.jsxs)("div",{className:"layout__content",children:[!this.props.routeView&&Object(P.jsx)(ne,{}),Object(P.jsx)(e,{routeView:this.props.routeView,location:t})]})]})}}]),n}(a.Component),ce=(n(114),n(68)),se=n.n(ce),ie=n(51),re=n.n(ie),oe=n(69),le=n.n(oe),ue=n(52),je=function(e,t){return Y.a.post("/API/login",{email:e,password:t}).then((function(e){return console.log(Object(ue.a)(e.data.token)),e.data.token&&localStorage.setItem("user",JSON.stringify(Object(ue.a)(e.data.token))),e.data}))},be=function(e){if(!e)return Object(P.jsx)("div",{children:"This field is required"})},de=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useState)(""),s=Object($.a)(c,2),r=s[0],o=s[1],l=Object(a.useState)(""),u=Object($.a)(l,2),d=u[0],O=u[1],m=Object(a.useState)(!1),f=Object($.a)(m,2),h=f[0],g=f[1],v=Object(i.c)((function(e){return e.auth})).isLoggedIn,x=Object(i.c)((function(e){return e.message})).message,_=Object(i.b)();return v?Object(P.jsx)(I.a,{to:"/admin-panel/projects"}):Object(P.jsxs)(se.a,{onSubmit:function(a){a.preventDefault(),g(!0),t.current.validateAll(),0===n.current.context._errors.length?_(function(e,t){return function(n){return je(e,t).then((function(e){return n({type:j,payload:{user:e}}),Promise.resolve()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return n({type:b}),n({type:p,payload:t}),Promise.reject()}))}}(r,d)).then((function(){e.history.push("/admin-panel/projects"),window.location.reload()})).catch((function(){g(!1)})):g(!1)},ref:t,children:[Object(P.jsx)(re.a,{type:"text",className:"form-control",name:"email",placeholder:"email",value:r,onChange:function(e){return o(e.target.value)},validations:[be]}),Object(P.jsx)("br",{}),Object(P.jsx)(re.a,{type:"password",className:"form-control",name:"password",placeholder:"password",value:d,onChange:function(e){return O(e.target.value)},validations:[be]}),Object(P.jsxs)("button",{disabled:h,children:[h&&Object(P.jsx)("span",{children:"Loading..."}),Object(P.jsx)("span",{children:"Login"})]}),x&&Object(P.jsx)("h1",{children:x}),Object(P.jsx)(le.a,{style:{display:"none"},ref:n})]})};var pe=function(){return Object(P.jsx)("div",{className:"login",children:Object(P.jsx)(de,{})})},Oe=n.p+"static/media/leon.b7c7c55d.jpg";function me(){return Object(P.jsxs)("div",{className:"about",children:[Object(P.jsxs)("div",{className:"about__col",children:[Object(P.jsxs)("div",{className:"about__tag about__tag--sm about__tag--welcome-phrase",children:["Hi, my name is ",Object(P.jsx)("br",{})," ",Object(P.jsx)("span",{className:"about__name",children:"Leo"})]}),Object(P.jsx)("div",{className:"about__tag about__tag--sm about__tag--melomaniac",children:"Melomaniac"}),Object(P.jsx)("div",{className:"about__tag about__tag--sm about__tag--stack",children:"MERN stack"}),Object(P.jsx)("div",{className:"about__tag about__tag--sm about__tag--living",children:"Living in Poland"}),Object(P.jsx)("div",{className:"about__tag about__tag--sm about__tag--origin",children:"Belarus origin"}),Object(P.jsx)("div",{className:"about__tag about__tag--sm about__tag--citizen",children:"Citizen of the world"}),Object(P.jsx)("div",{className:"about__tag about__tag--md about__tag--web-dev",children:"Web developer"}),Object(P.jsx)("div",{className:"about__tag about__tag--lg about__tag--designer",children:"Designer"})]}),Object(P.jsx)("div",{className:"about__col",children:Object(P.jsx)("div",{className:"about__img-ctn",children:Object(P.jsx)("img",{src:Oe,alt:"leon"})})})]})}var fe=function(){return Object(P.jsxs)("div",{className:"page page--about",children:[Object(P.jsx)(me,{}),Object(P.jsx)(te,{})]})},he=n(70);function ge(e){var t=e.fromDate,n=e.toDate,c=e.title,s=e.workTime,r=e.color,o=e._id,l=Object(a.useState)(),u=Object($.a)(l,2),j=u[0],b=u[1],d=Object(i.b)(),p=Object(he.useMediaPredicate)("(max-width: 992px)");Object(a.useEffect)((function(){var e=Math.abs(Date.parse(n)-Date.parse(t)),a=Math.ceil(e/864e5);b(Math.round(100*a/s))}),[s]);var O=function(e,t){e.preventDefault(),d(function(e){return function(t){t({type:v,payload:e})}}(t))};return Object(P.jsxs)("div",{className:"timeline-element",onClick:function(e){return O(e,o)},style:{width:"".concat(j,"%")},children:[Object(P.jsx)("div",{className:"timeline-element__line",style:{backgroundColor:r}}),Object(P.jsx)("div",{className:"timeline-element__point",style:{borderColor:r}}),!p&&Object(P.jsx)("div",{className:"timeline-element__title",children:c.split(" at")[0]}),p&&Object(P.jsx)("div",{className:"timeline-element__title",children:c.charAt(0)})]})}function ve(){var e=Object(i.b)(),t=Object(a.useState)(),n=Object($.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(),o=Object($.a)(r,2),l=o[0],u=o[1],j=new Date(2017,0,1),b=Object(i.c)((function(e){return e.data}));return Object(a.useEffect)((function(){e(H())}),[]),Object(a.useEffect)((function(){b.positions&&b.positions.length>0&&s(new Date(Date.parse(b.positions[b.positions.length-1].toDate)))}),[b]),Object(a.useEffect)((function(){u(Math.ceil((c-j)/864e5))}),[c]),Object(P.jsx)("div",{className:"timeline",children:b.positions&&b.positions.length>0&&b.positions.map((function(e,t){return Object(P.jsx)(ge,{_id:e._id,workTime:l,fromDate:e.fromDate,toDate:e.toDate,title:e.title,color:e.color},t)}))})}function xe(e){var t=Object(a.useState)(),n=Object($.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(),r=Object($.a)(i,2),o=r[0],l=r[1],u=Object(a.useState)(),j=Object($.a)(u,2),b=j[0],d=j[1],p=Object(a.useState)(),O=Object($.a)(p,2),m=O[0],f=O[1],h=e.title,g=e.fromDate,v=e.toDate,x=["January","February","March","April","May","June","July","August","September","October","November","December"];return Object(a.useEffect)((function(){s(x[new Date(Date.parse(g)).getMonth()]),l(x[new Date(Date.parse(v)).getMonth()]),d(new Date(Date.parse(g)).getFullYear()),f(new Date(Date.parse(v)).getFullYear())}),[]),Object(a.useEffect)((function(){s(x[new Date(Date.parse(g)).getMonth()]),l(x[new Date(Date.parse(v)).getMonth()]),d(new Date(Date.parse(g)).getFullYear()),f(new Date(Date.parse(v)).getFullYear())}),[g,v]),Object(P.jsxs)("div",{className:"position-header",children:[Object(P.jsx)("div",{className:"position-header__title",children:h}),Object(P.jsxs)("div",{className:"position-header__time",children:["(",c," ",b," - ",o," ",m,")"]})]})}function _e(e){var t=e.listElement;return Object(P.jsxs)("li",{children:[" - ",t]})}function Ne(e){var t=e.stack,n=e.responsibilities,c=Object(a.useState)([]),s=Object($.a)(c,2),i=s[0],r=s[1];return Object(a.useEffect)((function(){r(t||n)}),[]),Object(a.useEffect)((function(){r(t||n)}),[t,n]),Object(P.jsxs)("div",{className:"position-list",children:[t&&Object(P.jsx)("h3",{className:"position-list__header",children:"Stack"}),n&&Object(P.jsx)("h3",{className:"position-list__header",children:"Responsibilities"}),Object(P.jsx)("ul",{className:"position-list__list",children:i.map((function(e,t){return Object(P.jsx)(_e,{listElement:e.replace(/\\/g," ")},t)}))})]})}var we=n.p+"static/media/freelancer.10874786.svg",ke=n.p+"static/media/intern.b0c5e7a7.svg",ye=n.p+"static/media/kaliop.df7d876e.svg",De=n.p+"static/media/cloud-services.e2124207.svg";function Se(e){var t=e.title,n=e.stack,c=e.responsibilities,s=e.imageTitle,i=e.fromDate,r=e.toDate,o=Object(a.useState)(),l=Object($.a)(o,2),u=l[0],j=l[1];return Object(a.useEffect)((function(){"freelance"===s&&j(we),"intern"===s&&j(ke),"kaliop"===s&&j(ye),"cloud-service"===s&&j(De)}),[s]),Object(P.jsxs)("div",{className:"position",children:[Object(P.jsx)("div",{className:"position__col position__img-ctn",children:Object(P.jsx)("img",{src:u,alt:""})}),Object(P.jsx)("div",{className:"position__col",children:Object(P.jsxs)("div",{children:[Object(P.jsx)(xe,{title:t,fromDate:i,toDate:r}),Object(P.jsx)(Ne,{stack:n}),Object(P.jsx)(Ne,{responsibilities:c})]})})]})}function Ee(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.data})),n=Object(i.c)((function(e){return e.positionView}));return Object(a.useEffect)((function(){e(H())}),[]),Object(P.jsxs)("div",{children:[n.positionView,t.positions&&t.positions.length>0&&t.positions.filter((function(e){return e._id===n.positionViewId})).map((function(e,t){return Object(P.jsx)(Se,{title:e.title,stack:e.stack,responsibilities:e.responsibilities,imageTitle:e.imageTitle,fromDate:e.fromDate,toDate:e.toDate},t)}))]})}var Ie=function(){return Object(P.jsxs)("div",{className:"page page--positions",children:[Object(P.jsxs)("div",{className:"page__content",children:[Object(P.jsx)(ve,{}),Object(P.jsx)(Ee,{})]}),Object(P.jsx)(te,{})]})},Pe=n.p+"static/media/unicef.e3ff2525.svg",Ae=n.p+"static/media/inra.f14898d4.svg",Te=n.p+"static/media/essilor.dc669f9d.svg";function Ce(e){var t=e.name,n=e.url,c=e.color,s=Object(a.useState)(""),i=Object($.a)(s,2),r=i[0],o=i[1];return Object(a.useEffect)((function(){"UNICEF"===t&&o(Pe),"INRA"===t&&o(Ae),"Essilor"===t&&o(Te)}),[]),Object(P.jsx)("div",{className:"project",children:Object(P.jsx)("a",{href:n,className:"project__link",target:"_blank",rel:"noreferrer",children:Object(P.jsxs)("div",{className:"project__content",style:{backgroundColor:c},children:[!r&&Object(P.jsx)("span",{className:"project__title",children:t}),r&&Object(P.jsx)("img",{src:r,alt:"logo"})]})})})}function Le(e){var t=e.projectType,n=Object(i.c)((function(e){return e.data}));return Object(P.jsxs)("div",{className:"projects-row",children:[Object(P.jsxs)("h2",{className:"projects-row__title",children:[t.charAt(0).toUpperCase()+t.slice(1)," projects"]}),Object(P.jsx)("div",{className:"projects-row__projects-ctn",children:n.projects&&n.projects.length>0&&n.projects.filter((function(e,n){return e.type===t})).map((function(e,t){return Object(P.jsx)(Ce,{name:e.name,color:e.color,url:e.url},t)}))})]})}function Ve(){var e=Object(i.c)((function(e){return e.view})),t=Object(i.b)();return Object(a.useEffect)((function(){t(q())}),[e.name]),Object(P.jsx)("div",{className:"projects",children:["programming","design","companies"].map((function(e,t){return Object(P.jsx)(Le,{projectType:e},t)}))})}var Me=function(){return Object(P.jsxs)("div",{className:"page page--projects",children:[Object(P.jsx)(Ve,{}),Object(P.jsx)(te,{})]})},Fe=n(159),ze=n(157),Re=n(165),Ge=n(154),Je=Object(Ge.a)({tableCell:{fontSize:"2.4rem"},button:{fontSize:"2.4rem",padding:0}});function Ue(e){var t=Je(),n=Object(i.c)((function(e){return e.view}));return e?Object(P.jsxs)(ze.a,{children:[Object.entries(e).map((function(e){return!e||"stack"!==e[0]&&"responsibilities"!==e[0]?Object(P.jsx)(Fe.a,{className:t.tableCell,children:e[1]},e[0]):Object(P.jsx)(Fe.a,{className:t.tableCell,children:e[1].map((function(e,t){return Object(P.jsxs)("span",{children:[e," "]},t)}))},e[0])})),Object(P.jsx)(Fe.a,{children:Object(P.jsx)(Re.a,{className:t.button,color:"secondary",disableElevation:!0,onClick:function(){switch(n.name){case"projects":(t=e.id,Y.a.delete("/API/projects/".concat(t))).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}));break;case"positions":(function(e){return Y.a.delete("/API/positions/".concat(e))})(e.id).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}));break;case"links":(function(e){return Y.a.delete("/API/links/".concat(e))})(e.id).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}))}var t},children:"delete"})})]}):Object(P.jsx)(ze.a,{children:"No data"})}var We=Object(Ge.a)({tableCell:{fontSize:"2.4rem",fontWeight:"bold"}});function Ye(e){var t=e.fields,n=We();return Object(a.useEffect)((function(){}),[]),Object(P.jsxs)(ze.a,{children:[Object(P.jsx)(Fe.a,{className:n.tableCell,children:"_ID"}),t.map((function(e,t){return Object(P.jsx)(Fe.a,{className:n.tableCell,children:e.charAt(0).toUpperCase()+e.slice(1)},t)})),Object(P.jsx)(Fe.a,{className:n.tableCell,children:"Action"})]})}var Be=n(161),qe=n(163),He=n(160),Ke=n(162),$e=function(e){switch(e){case"projects":return["name","type","url","color"];case"links":return["name","url","imageTitle"];case"positions":return["title","stack","color","responsibilities","imageTitle","fromDate","toDate"];default:return["error"]}};function Qe(){var e=Object(a.useState)([]),t=Object($.a)(e,2),n=t[0],c=t[1],s=Object(i.b)(),r=Object(i.c)((function(e){return e.view})),o=Object(i.c)((function(e){return e.data})),l=Object(i.c)((function(e){return e.data})),u=Object(i.c)((function(e){return e.data}));return Object(a.useEffect)((function(){switch(c($e(r.name)),r.name){case"projects":s(q());break;case"links":s(K());break;case"positions":s(H())}}),[r.name]),Object(P.jsx)(He.a,{children:Object(P.jsxs)(Be.a,{children:[Object(P.jsx)(Ke.a,{children:Object(P.jsx)(Ye,{fields:n})}),Object(P.jsxs)(qe.a,{children:[o.links&&o.links.length>0&&o.links.map((function(e){return Object(P.jsx)(Ue,{id:e._id,name:e.name,url:e.url,image:e.imageTitle},e._id)})),l.projects&&l.projects.length>0&&l.projects.map((function(e){return Object(P.jsx)(Ue,{id:e._id,name:e.name,type:e.type,url:e.url,projectColor:e.color},e._id)})),u.positions&&o.positions.length>0&&u.positions.map((function(e){return Object(P.jsx)(Ue,{id:e._id,title:e.title,stack:e.stack,color:e.color,responsibilities:e.responsibilities,imageTitle:e.imageTitle,fromDate:e.fromDate,toDate:e.toDate},e._id)}))]})]})})}var Xe=n(164),Ze=Object(Ge.a)({button:{fontSize:"2rem",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"2.6rem",paddingRight:"2.6rem"},resize:{fontSize:"2rem"}});function et(){var e=Ze(),t=Object(i.c)((function(e){return e.view})),n=Object(a.useState)(""),c=Object($.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),l=Object($.a)(o,2),u=l[0],j=l[1],b=Object(a.useState)(""),d=Object($.a)(b,2),p=d[0],O=d[1],m=Object(a.useState)(""),f=Object($.a)(m,2),h=f[0],g=f[1],v=Object(a.useState)(""),x=Object($.a)(v,2),_=x[0],N=x[1],w=Object(a.useState)([]),k=Object($.a)(w,2),y=k[0],D=k[1],S=Object(a.useState)([]),E=Object($.a)(S,2),I=E[0],A=E[1],T=Object(a.useState)(""),C=Object($.a)(T,2),L=C[0],V=C[1],M=Object(a.useState)(""),F=Object($.a)(M,2),z=F[0],R=F[1],G=Object(a.useState)(""),J=Object($.a)(G,2),U=J[0],W=J[1],B=Object(a.useState)(!1),q=Object($.a)(B,2),H=q[0],K=q[1],Q=Object(a.useState)([]),X=Object($.a)(Q,2),Z=X[0],ee=X[1];return Object(a.useEffect)((function(){ee($e(t.name))}),[t.name]),Object(P.jsxs)("div",{className:"input-form",children:[Object(P.jsx)(Re.a,{className:e.button,variant:"contained",color:"primary",disableElevation:!0,onClick:function(e){e.preventDefault(),K(!H)},children:"Add"}),H&&Object(P.jsx)("div",{className:"input-form__jumbo-wrapper",children:Object(P.jsxs)("form",{className:"input-form__form",children:[Object(P.jsxs)("h2",{className:"input-form__header",children:["Add new ",t.name.slice(0,-1)]}),Z.map((function(t,n){return Object(P.jsx)(Xe.a,{className:e.textField,InputProps:{classes:{input:e.resize}},placeholder:t,onChange:function(e){return function(e,t){switch(t){case"name":r(e.target.value);break;case"type":j(e.target.value);break;case"url":O(e.target.value);break;case"color":g(e.target.value);break;case"title":N(e.target.value);break;case"stack":var n=e.target.value.split(" ");D(n);break;case"responsibilities":var a=e.target.value.split(" ");A(a);break;case"imageTitle":V(e.target.value);break;case"fromDate":R(e.target.value);break;case"toDate":W(e.target.value)}}(e,t)}},n)})),Object(P.jsx)(Re.a,{className:e.button,variant:"contained",color:"primary",disableElevation:!0,onClick:function(){switch(t.name){case"projects":(e={name:s,type:u,url:p,color:h},console.log(e),Y.a.post("/API/projects",e)).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}));break;case"links":(function(e){return Y.a.post("$/API/inks",e)})({name:s,url:p,imageTitle:L}).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}));break;case"positions":(function(e){return Y.a.post("/API/positions",e)})({title:_,stack:y,responsibilities:I,imageTitle:L,fromDate:z,toDate:U}).then((function(){return window.location.reload()})).catch((function(e){return console.log(e)}))}var e},children:"Add"}),Object(P.jsx)(Re.a,{className:e.button,color:"secondary",disableElevation:!0,onClick:function(){return K(!1)},children:"cancel"})]})})]})}function tt(e){var t=e.routeView,n=Object(i.c)((function(e){return e.view})),c=Object(i.b)();return Object(a.useEffect)((function(){c(function(e){return function(t){t({type:g,payload:e})}}(t))}),[c]),Object(P.jsxs)("div",{className:"admin-panel-page",children:[Object(P.jsxs)("div",{className:"admin-panel-page__header",children:[Object(P.jsx)("h2",{className:"admin-panel-page__title",children:n.name.charAt(0).toUpperCase()+n.name.slice(1)}),Object(P.jsx)(et,{})]}),Object(P.jsx)(Qe,{})]})}var nt=n.p+"static/media/notfound.92616738.svg";var at=function(){return Object(P.jsx)("div",{className:"page",children:Object(P.jsx)("img",{src:nt,alt:""})})};var ct=function(){return Object(P.jsx)("div",{children:Object(P.jsx)(C.a,{basename:"/",children:Object(P.jsxs)(I.d,{children:[Object(P.jsx)(A,{exact:!0,path:"/",component:fe,layout:ae}),Object(P.jsx)(A,{path:"/projects",component:Me,layout:ae}),Object(P.jsx)(A,{path:"/positions",component:Ie,layout:ae}),Object(P.jsx)(A,{path:"/login",component:pe,layout:ae}),Object(P.jsx)(A,{component:at,layout:ae}),Object(P.jsx)(T,{routeView:"projects",path:"/admin-panel/projects",component:tt,layout:ae}),Object(P.jsx)(T,{routeView:"links",path:"/admin-panel/links",component:tt,layout:ae}),Object(P.jsx)(T,{routeView:"positions",path:"/admin-panel/positions",component:tt,layout:ae})]})})})};s.a.render(Object(P.jsx)(i.a,{store:E,children:Object(P.jsx)(ct,{})}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.03b9c4e4.chunk.js.map