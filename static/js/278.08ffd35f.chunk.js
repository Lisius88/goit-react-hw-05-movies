"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{5867:function(n,e,t){t.d(e,{W:function(){return f}});var r,o,i,s=t(168),a=t(1087),u=t(7402),c=u.Z.header(r||(r=(0,s.Z)(["\n  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);\n  background-color: white;\n  margin-bottom: 20px;\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n"]))),l=u.Z.nav(o||(o=(0,s.Z)(["\n  display: flex;\n"]))),h=t(184),d=(0,u.Z)(a.OL)(i||(i=(0,s.Z)(["\n  display: block;\n  padding: 12px;\n  font-size: 18px;\n  color: #000000;\n\n  &.active {\n    color: orange;\n  }\n"]))),f=function(){return(0,h.jsx)(c,{children:(0,h.jsxs)(l,{children:[(0,h.jsx)(d,{to:"/",children:"Home"}),(0,h.jsx)(d,{to:"/movies",children:"Movies"})]})})}},9278:function(n,e,t){t.r(e);var r=t(9439),o=t(5867),i=t(1362),s=t(2791),a=t(1087),u=t(9014),c=t(184),l=(0,s.lazy)((function(){return t.e(779).then(t.bind(t,2779))})),h=(0,s.lazy)((function(){return Promise.all([t.e(998),t.e(907)]).then(t.bind(t,5907))}));e.default=function(){var n=(0,s.useState)([]),e=(0,r.Z)(n,2),t=e[0],d=e[1],f=(0,s.useState)(null),p=(0,r.Z)(f,2),x=p[0],g=p[1],m=(0,a.lr)(),b=(0,r.Z)(m,2),y=b[0],j=b[1],k=y.get("query");return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=1db4141403b8f52722dd71f31d913046&language=en-US&query=".concat(k,"&page=1&include_adult=true")).then((function(n){if(n.ok)return n.json();Promise.reject(new Error("Sorry, something is not OK. Try again"))})).then((function(n){null!==k&&(n.results.length>0&&d(n.results),0===n.total_results&&u.ZP.error("Try something else"))})).catch((function(n){g(n)}))}),[k]),(0,c.jsxs)(c.Fragment,{children:[x&&u.ZP.error("Sorry, something is not OK. Try again"),(0,c.jsx)(o.W,{}),(0,c.jsxs)(s.Suspense,{fallback:(0,c.jsx)(i.a,{}),children:[(0,c.jsx)(h,{onSubmit:function(n){k!==n&&d([]),k!==n&&j({query:n})}}),(0,c.jsx)(l,{movies:t})]}),(0,c.jsx)(u.x7,{position:"top-right",reverseOrder:!1})]})}}}]);
//# sourceMappingURL=278.08ffd35f.chunk.js.map