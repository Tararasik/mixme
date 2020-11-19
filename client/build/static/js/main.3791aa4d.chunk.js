(this.webpackJsonpmixme=this.webpackJsonpmixme||[]).push([[0],{20:function(e,t){e.exports={API_URL:"http://localhost:3001"}},23:function(e,t,n){e.exports=n(37)},28:function(e,t,n){},29:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),l=(n(28),n(7)),i=n(1),u=n(22),m=n(3),s=n(20),d="".concat(s.API_URL,"/api"),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";return fetch("".concat(d,"/ingredients/").concat(e,"/").concat(t)).then((function(e){return e.json()}))},f=function(e){return fetch("".concat(d,"/cocktails/").concat(e)).then((function(e){return e.json()}))},E=function(e){return e.toLowerCase().replace(/ /g,"-")},h=(n(29),[{id:1,name:"Popular ingredients",groupCode:"PO"},{id:2,name:"Spirits",groupCode:"SP"},{id:3,name:"Liqueurs",groupCode:"LQ"},{id:4,name:"Wines and Champagnes",groupCode:"WI"},{id:5,name:"Beers and Ciders",groupCode:"BE"},{id:6,name:"Mixers",groupCode:"MX"},{id:7,name:"Others",groupCode:"OT"}]),b=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),l=Object(m.a)(o,2),i=l[0],s=l[1],d=Object(a.useState)([]),f=Object(m.a)(d,2),b=f[0],v=f[1],g=function(e){var t=Object(u.a)(b);t.find((function(t){return t.id===e.id}))?t=t.filter((function(t){return t.id!==e.id})):t.push(e),v(t)};return c.a.createElement("div",{className:"bar"},c.a.createElement("div",{className:"bar__ingredients"},c.a.createElement("div",{className:"bar__ingredientsList"},c.a.createElement("ul",{"data-testid":"groupList"},h.map((function(e){return c.a.createElement("li",{key:e.groupCode},c.a.createElement("button",{onClick:function(){return t=e.groupCode,s([]),void p(t).then((function(e){"PO"===t?s(e):r(e)}));var t}},e.name))})))),c.a.createElement("div",{className:"bar__ingredientsList"},c.a.createElement("ul",null,n.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("button",{onClick:function(){return t=e.groupCode,n=e.id,void p(t,n).then(s);var t,n}},e.name))})))),c.a.createElement("div",{className:"bar__ingredientsList"},c.a.createElement("ul",null,i.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("button",{onClick:function(){return g(e)}},e.name))})))),c.a.createElement("div",{className:"bar__ingredientsList"},c.a.createElement("h4",null,"My bar"),c.a.createElement("ul",null,b.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("button",{onClick:function(){return g(e)}},e.name))}))),b.length>0&&c.a.createElement("a",{href:"/cocktails/my?ingr=".concat(E(b.map((function(e){return e.name.toLowerCase()})).join(",")))},"Get cocktails"))))},v=n(9),g=n.n(v),k=n(13),j=function(e){var t=e.cocktails;return c.a.createElement("div",{className:"cocktails"},c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e._id},c.a.createElement(l.b,{to:"/cocktail/".concat(E(e.title))},e.title))}))))},O=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),l=Object(m.a)(o,2),i=l[0],u=l[1];Object(a.useEffect)((function(){(function(){var e=Object(k.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=i,fetch("".concat(d,"/cocktails?q=").concat(n)).then((function(e){return e.json()}));case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);return c.a.createElement("div",{className:"cocktails"},c.a.createElement("input",{type:"text",value:i,onChange:function(e){var t=e.currentTarget;u(t.value)}}),c.a.createElement(j,{cocktails:n}))},C=Object(i.f)((function(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){(function(e){return fetch("".concat(d,"/cocktails-by-ingredients?ingredients=").concat(e.join(","))).then((function(e){return e.json()}))})((function(e){for(var t={},n=("?"===e[0]?e.substr(1):e).split("&"),a=0;a<n.length;a+=1){var c=n[a].split("="),r=Object(m.a)(c,2),o=r[0],l=r[1];o&&(t[decodeURIComponent(o)]=decodeURIComponent(l||""))}return t}(e.location?e.location.search:"").ingr||"").split(",")).then(o)}),[]),c.a.createElement("div",{className:"myCocktails"},c.a.createElement("h1",null,"My cocktails"),r.length>0?c.a.createElement(j,{cocktails:r}):c.a.createElement("p",null,"Your ",c.a.createElement("a",{href:"/bar"},"bar")," is empy"))})),y=Object(i.f)((function(e){var t=(e&&e.match?e.match.params:{name:""}).name,n=Object(a.useState)(),r=Object(m.a)(n,2),o=r[0],l=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(k.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t.toLowerCase());case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),o?c.a.createElement("div",{className:"cocktail"},c.a.createElement("h1",null,o.title),o.image&&c.a.createElement("img",{src:o.image,alt:""}),c.a.createElement("p",null,o.glassType),c.a.createElement("p",null,o.method),c.a.createElement("ul",null,o.ingredients.map((function(e){return c.a.createElement("li",{key:e.name},e.name,": ",e.amount," ",e.measure)})))):null}));n(36);var _=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(l.a,null,c.a.createElement("nav",{className:"app__nav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/bar"},"Bar")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/cocktails"},"Cocktails"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(l.b,{to:"/cocktails/my"},"My Cocktails")))))),c.a.createElement("div",{className:"app__content"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/bar",component:b}),c.a.createElement(i.a,{path:"/cocktail/:name",component:y}),c.a.createElement(i.a,{path:"/cocktails",component:O,exact:!0}),c.a.createElement(i.a,{path:"/cocktails/my",component:C}),c.a.createElement(i.a,{path:"/"},c.a.createElement("div",null,"Home page"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.3791aa4d.chunk.js.map