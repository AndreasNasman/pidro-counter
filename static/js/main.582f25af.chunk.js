(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(31)},31:function(e,n,t){"use strict";t.r(n);t(15),t(18),t(19);var r,o=t(0),a=t.n(o),i=t(4),c=t.n(i),u=(t(25),t(9)),l=t(8),f=t(3);!function(e){e[e.Bidding=0]="Bidding",e[e.Score=1]="Score"}(r||(r={}));var s=t(1),d=t(2);function m(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: ","rem;\n  grid-template-columns: 1fr 1fr;\n  margin-bottom: ","rem;\n"]);return m=function(){return e},e}function b(){var e=Object(s.a)(["\n  color: white;\n  margin-top: 0;\n  text-align: center;\n"]);return b=function(){return e},e}function v(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: ","rem;\n  grid-template-columns: 1fr 1fr 1fr;\n"]);return v=function(){return e},e}function g(){var e=Object(s.a)(["\n  align-content: safe center;\n  display: grid;\n  overflow: auto;\n"]);return g=function(){return e},e}function p(){var e=Object(s.a)(["\n  background-color: ",";\n  border: 0.25rem solid white;\n  border-radius: 0.5rem;\n  color: white;\n  color: ",";\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding: 0.5rem;\n\n  &:focus {\n    outline: none;\n  }\n"]);return p=function(){return e},e}var h=d.b.button(p(),function(e){return e.active?"white":"transparent"},function(e){return e.active?e.activeColor:"white"}),w=d.b.div(g()),j=d.b.div(v(),.1),O=d.b.h2(b()),k=d.b.div(m(),.1,.1),E=function(e){var n=e.phase,t=e.teams,i=e.updateSet,c=Object(o.useState)(function(){return Array.from(Array(9).keys()).map(function(e){return e+6})}),u=Object(f.a)(c,1)[0],l=Object(o.useState)(void 0),s=Object(f.a)(l,2),d=s[0],m=s[1],b=Object(o.useState)(void 0),v=Object(f.a)(b,2),g=v[0],p=v[1];Object(o.useEffect)(function(){void 0!==d&&void 0!==g&&(i({points:g,team:d}),m(void 0),p(void 0))},[d,g]);var E=function(e){var n=e.currentTarget.value;n!==d&&m(n)},y=function(e){var n=e.currentTarget.value,t=Number(n);t!==g&&p(t)};return a.a.createElement(w,null,n===r.Bidding?a.a.createElement(O,null,"Vem bj\xf6ud?"):a.a.createElement(O,null,"Vem vann?"),a.a.createElement(k,null,t.map(function(e){return a.a.createElement(h,{active:e===d,activeColor:"black",key:e,onClick:E,value:e},e.toUpperCase())})),a.a.createElement(j,null,u.map(function(e){return a.a.createElement(h,{active:e===g,activeColor:"#e10030",key:e,onClick:y,value:e},e)})))};function y(){var e=Object(s.a)(["\n  background-color: ",";\n  display: grid;\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: auto;\n"]);return y=function(){return e},e}function S(){var e=Object(s.a)(["\n  border-bottom: 0.2rem solid whitesmoke;\n  font-weight: bold;\n"]);return S=function(){return e},e}function x(){var e=Object(s.a)(["\n  border-top: 0.2rem solid whitesmoke;\n  font-weight: bold;\n"]);return x=function(){return e},e}function C(){var e=Object(s.a)(["\n  background-color: ",";\n"]);return C=function(){return e},e}function B(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 1.25rem;\n  text-align: center;\n  padding: 0.5rem;\n"]);return B=function(){return e},e}function H(){var e=Object(s.a)(["\n  overflow: auto;\n"]);return H=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: grid;\n  grid-gap: 0.1rem;\n  grid-template-columns: 1fr 1fr;\n"]);return R=function(){return e},e}var A=d.b.div(R()),W=Object(d.b)(A)(H()),M=d.b.div(B(),"#fefeff"),N=d.b.div(C(),"#282725"),U=Object(d.b)(A)(x()),I=Object(d.b)(A)(S()),J=d.b.div(y(),"#fefeff"),T=function(e){var n=e.game,t=e.setScoreboardMinHeight,r=e.teams,i=Object(o.useRef)(null),c=Object(o.useRef)(null),u=Object(o.useRef)(null),l=Object(o.useRef)(null);return Object(o.useEffect)(function(){var e=i.current;null!==e&&e.scrollIntoView({behavior:"smooth",block:"end"})},[n.length]),Object(o.useLayoutEffect)(function(){var e=c.current,n=u.current,r=l.current;if(null!==e&&null!==n&&null!==r){var o="".concat(e.offsetHeight+n.offsetHeight+r.offsetHeight,"px");t(o)}},[]),a.a.createElement(J,null,a.a.createElement(I,{ref:c},r.map(function(e){return a.a.createElement(N,{key:e},a.a.createElement(M,null,e.toUpperCase()))})),a.a.createElement(W,null,r.map(function(e){return a.a.createElement(N,{key:e,ref:i},n.map(function(n){return n.score&&a.a.createElement(M,{key:n.round},n.score[e])}))})),a.a.createElement(U,{ref:u},r.map(function(e){return a.a.createElement(N,{key:e},a.a.createElement(M,{ref:l},n.reduce(function(n,t){return t.score?n+t.score[e]:n},0)))})))};function L(){var e=Object(s.a)(["\n  * {\n    font-family: 'Roboto', sans-serif;\n    }\n  \n  body {\n    background-color: black;\n    overscroll-behavior: contain;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none;\n  }\n"]);return L=function(){return e},e}function V(){var e=Object(s.a)(["\n  background-color: ",";\n  box-shadow: inset 0 0 10rem black;\n  display: grid;\n  grid-gap: ","rem;\n  grid-template:\n    minmax(",", 1fr)\n    auto / minmax(0, 1fr);\n  height: calc(100vh - ","rem);\n  padding: ","rem;\n\n  @media screen and (orientation: landscape) {\n    grid-template:\n      minmax(",", 1fr)\n      / minmax(min-content, 2fr) minmax(min-content, 1fr);\n    overflow: auto;\n  }\n"]);return V=function(){return e},e}var z=d.b.div(V(),"#006e3b",1,function(e){return e.scoreboardMinHeight},2,1,function(e){return e.scoreboardMinHeight}),P=Object(d.a)(L()),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var q=document.getElementById("root");c.a.render(a.a.createElement(function(){var e=Object(o.useState)(["vi","de"]),n=Object(f.a)(e,1)[0],t=Object(o.useState)(function(){var e=sessionStorage.getItem("game");return null===e?[{phase:r.Bidding,round:1}]:JSON.parse(e)}),i=Object(f.a)(t,2),c=i[0],s=i[1],d=c[c.length-1],m=Object(o.useState)("0"),b=Object(f.a)(m,2),v=b[0],g=b[1];Object(o.useEffect)(function(){sessionStorage.setItem("game",JSON.stringify(c))},[c]);var p=d.phase===r.Bidding?function(e){s([].concat(Object(l.a)(c.slice(0,-1)),[Object(u.a)({},d,{bid:e,phase:r.Score})]))}:function(e){var t=d.bid;if(t){var o=t.points,a=t.team,i=n.reduce(function(n,t){return n[t]=t===e.team?e.points:14-e.points,t===a&&n[t]<o&&(n[t]=-o),n},{});s([].concat(Object(l.a)(c.slice(0,-1)),[Object(u.a)({},d,{score:i}),{phase:r.Bidding,round:d.round+1}]))}};return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null),a.a.createElement(z,{scoreboardMinHeight:v},a.a.createElement(T,{game:c,setScoreboardMinHeight:g,teams:n}),a.a.createElement(E,{phase:d.phase,teams:n,updateSet:p})))},null),q),function(e){if("serviceWorker"in navigator){if(new URL("/pidro-counter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pidro-counter","/service-worker.js");F?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):$(n,e)})}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.582f25af.chunk.js.map