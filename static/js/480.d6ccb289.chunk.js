"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[480],{5480:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var o,i,r,a=t(9439),s=t(168),c=t(5867),l=t(1087),d=t(7689),p=t(2791),f=t(7402),x=f.Z.div(o||(o=(0,s.Z)(["\n  padding: 10px;\n  color: white;\n"]))),h=t(8617),u=t(184),m=(0,f.Z)(l.rU)(i||(i=(0,s.Z)(["\n  margin-bottom: 20px;\n  margin-top: -20px;\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  color: #ffffff;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orange;\n  }\n"]))),g=function(n){var e=n.to,t=n.children;return(0,u.jsxs)(m,{to:e,children:[(0,u.jsx)(h.jTe,{size:"24"}),t]})},v=t(1362),j=(0,f.Z)(l.OL)(r||(r=(0,s.Z)(["\n  display: block;\n  padding: 12px;\n  font-size: 18px;\n  color: #ffffff;\n\n  &.active {\n    color: orange;\n  }\n"]))),b=function(){var n,e,t=(0,p.useState)({}),o=(0,a.Z)(t,2),i=o[0],r=i.poster_path,s=i.backdrop_path,l=i.genres,f=i.overview,h=i.title,m=i.release_date,b=i.vote_average,y=o[1],k=(0,p.useState)(!1),Z=(0,a.Z)(k,2),w=Z[0],_=Z[1],z=(0,d.UO)().movieId,C=(0,d.TH)(),S=null!==(n=null===(e=C.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";(0,p.useEffect)((function(){_(!0),fetch("https://api.themoviedb.org/3/movie/".concat(z,"?api_key=1db4141403b8f52722dd71f31d913046&language=en-US")).then((function(n){return n.json()})).then((function(n){y(n)})).catch().finally((function(){_(!1)}))}),[z]);var B=null===l||void 0===l?void 0:l.map((function(n){return n.name})).join(", "),O=null===m||void 0===m?void 0:m.slice(0,4);return(0,u.jsxs)(u.Fragment,{children:[w&&(0,u.jsx)(v.a,{}),(0,u.jsx)(c.W,{}),(0,u.jsx)(g,{to:S,children:"Back to movies"}),(0,u.jsxs)("div",{style:{display:"flex",marginTop:"-19px",marginLeft:"auto",marginRight:"auto",justifyContent:"center"},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:""}),!1===w&&(0,u.jsxs)(x,{style:{backgroundImage:"linear-gradient(rgba(2,0,36,0.5) 0%, rgba(0,0,0,0.5) 100%), url(https://image.tmdb.org/t/p/original".concat(s,")"),backgroundSize:"cover"},children:[(0,u.jsxs)("h2",{style:{marginBottom:"15px"},children:[h,"(",O,")"]}),(0,u.jsx)("h3",{children:"Genres"}),(0,u.jsx)("p",{style:{marginBottom:"15px"},children:B}),(0,u.jsx)("h3",{children:"Rating"}),(0,u.jsx)("p",{style:{marginBottom:"15px"},children:b}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:f})]})]}),(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,u.jsx)(j,{to:"cast",state:{from:C.state?C.state.from:"/"},children:"Cast"}),(0,u.jsx)(j,{to:"reviews",state:{from:C.state?C.state.from:"/"},children:"Reviews"})]}),(0,u.jsx)(p.Suspense,{fallback:(0,u.jsx)(v.a,{}),children:(0,u.jsx)(d.j3,{})})]})}},5867:function(n,e,t){t.d(e,{W:function(){return x}});var o,i,r,a=t(168),s=t(1087),c=t(7402),l=c.Z.header(o||(o=(0,a.Z)(["\n  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);\n  background-color: white;\n  margin-bottom: 20px;\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n"]))),d=c.Z.nav(i||(i=(0,a.Z)(["\n  display: flex;\n"]))),p=t(184),f=(0,c.Z)(s.OL)(r||(r=(0,a.Z)(["\n  display: block;\n  padding: 12px;\n  font-size: 18px;\n  color: #000000;\n\n  &.active {\n    color: orange;\n  }\n"]))),x=function(){return(0,p.jsx)(l,{children:(0,p.jsxs)(d,{children:[(0,p.jsx)(f,{to:"/",children:"Home"}),(0,p.jsx)(f,{to:"/movies",children:"Movies"})]})})}}}]);
//# sourceMappingURL=480.d6ccb289.chunk.js.map