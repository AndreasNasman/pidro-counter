(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);t(19),t(22),t(23);var r,a=t(0),o=t.n(a),c=t(5),i=t.n(c),u=(t(29),t(9)),l=t(7),s=t(3),f=t(4),d=t.n(f),m="game",b="gameHistory",p="gameHistoryIndex",g=t(14),v=t.n(g);!function(e){e.Bidding="BIDDING",e.Score="SCORE"}(r||(r={}));var j=t(1),O=t(2);function h(){var e=Object(j.a)(["\n  column-gap: ","rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin-bottom: ","rem;\n"]);return h=function(){return e},e}function E(){var e=Object(j.a)(["\n  align-content: center;\n  display: grid;\n  grid-area: keypad;\n  min-width: max-content;\n"]);return E=function(){return e},e}function w(){var e=Object(j.a)(["\n  color: ",";\n  margin-bottom: 0.5rem;\n  margin-top: 0;\n  text-align: center;\n"]);return w=function(){return e},e}function y(){var e=Object(j.a)(["\n  display: grid;\n  grid-gap: ","rem;\n  grid-template-columns: repeat(3, 1fr);\n"]);return y=function(){return e},e}function k(){var e=Object(j.a)(["\n  background-color: ",";\n  border: 0.25rem solid ",";\n  border-radius: 0.5rem;\n  color: ",";\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding: 0.5rem;\n  text-transform: uppercase;\n\n  &:focus {\n    outline: none;\n  }\n"]);return k=function(){return e},e}var S=O.b.button(k(),function(e){return e.active?"#fff":"transparent"},"#fff",function(e){return e.active?e.activeColor:"#fff"}),C=O.b.div(y(),.1),x=O.b.h2(w(),"#fff"),R=O.b.div(E()),B=O.b.div(h(),.1,.1),I=function(e){var n=e.phase,t=e.teams,c=e.updateSet,i=Object(a.useState)(v()(6,15)),u=Object(s.a)(i,1)[0],l=Object(a.useState)(void 0),f=Object(s.a)(l,2),d=f[0],m=f[1],b=Object(a.useState)(void 0),p=Object(s.a)(b,2),g=p[0],j=p[1];Object(a.useEffect)(function(){void 0!==d&&void 0!==g&&(c({points:g,team:d}),m(void 0),j(void 0))},[d,g]);var O=function(e){var n=e.currentTarget.textContent;m(n)},h=function(e){var n=e.currentTarget.textContent,t=Number(n);j(t)};return o.a.createElement(R,null,n===r.Bidding&&o.a.createElement(x,null,"Vem bj\xf6ud?"),n===r.Score&&o.a.createElement(x,null,"Vem vann?"),o.a.createElement(B,null,t.map(function(e){return o.a.createElement(S,{active:e===d,activeColor:"#000",key:e,onClick:O},e)})),o.a.createElement(C,null,u.map(function(e){return o.a.createElement(S,{active:e===g,activeColor:"#ff534f",key:e,onClick:h},e)})))};function N(){var e=Object(j.a)(["\n  background-color: ",";\n  display: grid;\n  grid-area: scoreboard;\n  grid-template-rows: auto 1fr auto;\n  min-height: ",";\n  min-width: max-content;\n"]);return N=function(){return e},e}function H(){var e=Object(j.a)(["\n  border-bottom: 0.2rem solid ",";\n  font-weight: bold;\n"]);return H=function(){return e},e}function J(){var e=Object(j.a)(["\n  border-top: 0.2rem solid ",";\n  font-weight: bold;\n"]);return J=function(){return e},e}function W(){var e=Object(j.a)(["\n  grid-area: emoji;\n"]);return W=function(){return e},e}function A(){var e=Object(j.a)(["\n  grid-area: content;\n"]);return A=function(){return e},e}function U(){var e=Object(j.a)(["\n  background-color: ",";\n"]);return U=function(){return e},e}function T(){var e=Object(j.a)(["\n  color: ",";\n  display: grid;\n  font-size: 1.25rem;\n  grid-column-gap: 0.25rem;\n  grid-template-areas: ",";\n  grid-template-columns: repeat(3, 1fr);\n  text-align: center;\n  padding: 0.5rem;\n  text-transform: uppercase;\n"]);return T=function(){return e},e}function V(){var e=Object(j.a)(["\n  overflow: auto;\n"]);return V=function(){return e},e}function z(){var e=Object(j.a)(["\n  column-gap: 0.1rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n"]);return z=function(){return e},e}var F=O.b.div(z()),L=Object(O.b)(F)(V()),D=O.b.div(T(),"#fefeff",function(e){return!0===e.reverse?'"emoji content ."':'". content emoji"'}),M=O.b.div(U(),"#282828"),P=O.b.div(A()),G=O.b.span(W()),$=Object(O.b)(F)(J(),"#fefeff"),q=Object(O.b)(F)(H(),"#fefeff"),K=O.b.div(N(),"#fefeff",function(e){return e.scoreboardMinHeight}),Q=function(e){var n=e.game,t=Object(a.useState)("0"),r=Object(s.a)(t,2),c=r[0],i=r[1],u=Object(a.useRef)(null),l=Object(a.useRef)(null),f=Object(a.useRef)(null),m=Object(a.useRef)(null);return Object(a.useEffect)(function(){var e=u.current;null!==e&&e.scrollIntoView({behavior:"smooth",block:"end"})}),Object(a.useLayoutEffect)(function(){var e=l.current,n=f.current,t=m.current;if(null!==e&&null!==n&&null!==t){var r="".concat(e.offsetHeight+n.offsetHeight+t.offsetHeight,"px");i(r)}},[]),o.a.createElement(K,{scoreboardMinHeight:c},o.a.createElement(q,{ref:l},n.teams.map(function(e){return o.a.createElement(M,{key:e},o.a.createElement(D,{reverse:e===d()(n.teams)},n.leader===e?o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null,e),o.a.createElement(G,null,"\ud83c\udfc1")):o.a.createElement(P,null,e)))})),o.a.createElement(L,null,n.teams.map(function(e,t){return o.a.createElement(M,{key:e,ref:u},n.sets.map(function(n){return o.a.createElement(D,{key:n.round},!n.score&&n.bid.team===e&&o.a.createElement(P,null,"(",n.bid.points,")"),n.score&&o.a.createElement(P,null,n.score[t].points))}))})),o.a.createElement($,{ref:f},n.score.map(function(e){return o.a.createElement(M,{key:e.team},o.a.createElement(D,{ref:m,reverse:e.team===d()(n.teams)},void 0!==n.winner&&n.winner.team===e.team?o.a.createElement(o.a.Fragment,null,o.a.createElement(P,null,e.points),o.a.createElement(G,null,"\ud83c\udfc6")):o.a.createElement(P,null,e.points)))})))},X=t(8),Y=t(12),Z=t.n(Y);function _(){var e=Object(j.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  padding: 0.5rem;\n  pointer-events: ",";\n"]);return _=function(){return e},e}function ee(){var e=Object(j.a)(["\n  margin-top: 0;\n  text-align: center;\n"]);return ee=function(){return e},e}function ne(){var e=Object(j.a)(["\n  display: flex;\n  font-size: 1.5rem;\n  grid-area: toolbar;\n  justify-content: space-between;\n"]);return ne=function(){return e},e}function te(){var e=Object(j.a)(["\n  background-color: white;\n  border-radius: 0.5rem;\n  padding: 1rem;\n"]);return te=function(){return e},e}function re(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return re=function(){return e},e}function ae(){var e=Object(j.a)(["\n  color: ",";\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 0.5rem;\n"]);return ae=function(){return e},e}var oe=O.b.span(ae(),function(e){return e.color}),ce=O.b.div(re()),ie=O.b.div(te()),ue=O.b.div(ne()),le=O.b.h4(ee()),se=O.b.span(_(),function(e){return e.disabled?"gray":"#fefeff"},function(e){return e.disabled?"none":"auto"}),fe=function(e){var n=e.canRedo,t=e.canResetScore,r=e.canUndo,c=e.redo,i=e.resetScore,u=e.undo,l=Object(a.useState)(!1),f=Object(s.a)(l,2),d=f[0],m=f[1],b=function(){m(!1)},p=function(){b(),i()};return o.a.createElement(ue,null,o.a.createElement(se,{disabled:!r},o.a.createElement(X.c,{onClick:u})),o.a.createElement(Z.a,{content:function(e){var n=e.position,t=e.targetRect,r=e.popoverRect;return o.a.createElement(Y.ArrowContainer,{arrowColor:"#fff",popoverRect:r,position:n,targetRect:t},o.a.createElement(ie,null,o.a.createElement(le,null,"Vill du byri nyi spel?"),o.a.createElement(ce,null,o.a.createElement(oe,{color:"#12257d",onClick:p},"Jepp"),o.a.createElement(oe,{color:"#ea3f42",onClick:b},"Nepp"))))},isOpen:d,onClickOutside:b,padding:0},o.a.createElement(se,{disabled:!t,onClick:function(){m(!0)}},o.a.createElement(X.b,null))),o.a.createElement(se,{disabled:!n},o.a.createElement(X.a,{onClick:c})))};function de(){var e=Object(j.a)(["\n  * {\n    font-family: 'Roboto', sans-serif;\n    }\n  \n  body {\n    background-color: #000;\n    overscroll-behavior: contain;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-touch-callout: none;\n  }\n"]);return de=function(){return e},e}function me(){var e=Object(j.a)(["\n  display: grid;\n  grid-template: 1fr repeat(2, auto) / 1fr;\n  grid-template-areas:\n    'scoreboard'\n    'toolbar'\n    'keypad';\n  overflow: auto;\n\n  @media screen and (orientation: landscape) {\n    column-gap: ","rem;\n    grid-template: 1fr auto / 2fr 1fr;\n    grid-template-areas:\n      'scoreboard keypad'\n      'scoreboard toolbar';\n  }\n"]);return me=function(){return e},e}function be(){var e=Object(j.a)(["\n  background-color: ",";\n  box-shadow: inset 0 0 10rem black;\n  display: grid;\n  height: calc(100vh - ","rem);\n  padding: ","rem;\n"]);return be=function(){return e},e}var pe=O.b.div(be(),"#006e3b",2,1),ge=O.b.div(me(),1),ve=Object(O.a)(de()),je=function(){var e=["vi","de"],n=e.map(function(e){return{points:0,team:e}});return{phase:r.Bidding,score:n,sets:[],teams:e}},Oe=function(e,n){var t=sessionStorage.getItem(e);return null!==t?JSON.parse(t):n},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var we=document.getElementById("root");i.a.render(o.a.createElement(function(){var e=Object(a.useState)(Oe(m,je())),n=Object(s.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(Oe(b,[je()])),f=Object(s.a)(i,2),g=f[0],v=f[1],j=Object(a.useState)(Oe(p,0)),O=Object(s.a)(j,2),h=O[0],E=O[1];Object(a.useEffect)(function(){sessionStorage.setItem(m,JSON.stringify(t))},[t]),Object(a.useEffect)(function(){sessionStorage.setItem(b,JSON.stringify(g))},[g]),Object(a.useEffect)(function(){sessionStorage.setItem(p,JSON.stringify(h))},[h]);var w=function(){return t.phase===r.Bidding?r.Score:r.Bidding},y=function(e){var n=h+1;v([].concat(Object(l.a)(g.slice(0,n)),[e])),E(n)},k=h>0,S=h<g.length-1,C=g.length>1,x=t.phase===r.Bidding?function(e){var n=d()(t.sets),r=n?n.round+1:1,a=Object(u.a)({},t,{phase:w(),sets:[].concat(Object(l.a)(t.sets),[{bid:e,round:r}])});c(a),y(a)}:function(e){var n=d()(t.sets);if(n){var r,a=n.bid,o=a.points,i=a.team,f=t.teams.map(function(n){var t=n===e.team?e.points:14-e.points;return n===i&&t<o&&(t=-o),{points:t,team:n}}),m=t.teams.map(function(e,n){return{points:t.score[n].points+f[n].points,team:e}}),b=m.find(function(e){return e.team===a.team&&e.points>=62});if(b||(b=m.find(function(e){return e.points>=62})),!b){var p=Object(s.a)(m,2),g=p[0],v=p[1];g.points>v.points&&(r=g.team),v.points>g.points&&(r=v.team)}var j=Object(u.a)({},t,{leader:r,phase:w(),score:m,sets:[].concat(Object(l.a)(t.sets.slice(0,-1)),[Object(u.a)({},n,{score:f})]),winner:b});c(j),y(j)}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(ve,null),o.a.createElement(pe,null,o.a.createElement(ge,null,o.a.createElement(Q,{game:t}),o.a.createElement(fe,{canRedo:S,canResetScore:C,canUndo:k,redo:function(){var e=h+1;c(g[e]),E(e)},resetScore:function(){c(je()),v([je()]),E(0)},undo:function(){var e=h-1;c(g[e]),E(e)}}),o.a.createElement(I,{phase:t.phase,teams:t.teams,updateSet:x}))))},null),we),function(e){if("serviceWorker"in navigator){if(new URL("/pidro-counter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pidro-counter","/service-worker.js");he?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ee(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Ee(n,e)})}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.5a417088.chunk.js.map