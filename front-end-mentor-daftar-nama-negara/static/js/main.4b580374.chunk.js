(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{21:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(2),a=n.n(s),r=n(23),i=n.n(r),o=(n(21),n(9)),l=n(3),j=n(24),u=n(10),b=n.n(u),d=n(13),O=n(5),h=a.a.createContext(),x=function(e){var t=e.children,n=Object(s.useState)("a"),a=Object(O.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)([]),l=Object(O.a)(o,2),j=l[0],u=l[1],x=Object(s.useState)(!0),p=Object(O.a)(x,2),f=p[0],m=p[1],g=Object(s.useState)(!1),v=Object(O.a)(g,2),N=v[0],y=v[1],k=Object(s.useCallback)(Object(d.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,fetch("".concat("https://restcountries.eu/rest/v2/name/").concat(r));case 4:return t=e.sent,e.next=7,t.json();case 7:(n=e.sent)?(c=n.map((function(e){var t=e.callingCodes,n=e.name,c=e.region,s=e.flag,a=e.capital,r=e.population;return{id:e.numericCode,name:n,region:c,flag:s,capital:a,population:r,num:t}})),u(c)):u([]),m(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),m(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])}))),[r]);return Object(s.useEffect)((function(){k()}),[r,k]),Object(c.jsx)(h.Provider,{value:{countries:j,loading:f,input:r,setInput:i,setCountries:u,displayRegion:N,regionalDisplay:function(){y(!N)}},children:t})},p=function(){return Object(s.useContext)(h)},f=function(){var e=p().setInput,t=Object(s.useRef)("");Object(s.useEffect)((function(){t.current.focus()}),[]);return Object(c.jsx)("main",{className:"search-cont",children:Object(c.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault()},children:[Object(c.jsx)(j.a,{className:"search-icon"}),Object(c.jsx)("input",{type:"text",id:"country-name",placeholder:"Search for a country...",ref:t,onChange:function(t){e(t.target.value)}})]})})},m=n(27),g=n(25),v=function(){var e=p(),t=(e.countries,e.setCountries),n=e.displayRegion,a=(e.setDisplayRegion,e.regionalDisplay),r=Object(s.useState)([]),i=Object(O.a)(r,2),o=i[0],l=i[1],j=Object(s.useState)(null),u=Object(O.a)(j,2),h=u[0],x=u[1],f=function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent)?(c=new Set(n.map((function(e){return e.region}))),x(n),l(["All"].concat(Object(m.a)(c)))):x(null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){f()}),[]),Object(c.jsxs)("section",{className:"filter",children:[Object(c.jsxs)("p",{className:"by-region",onClick:a,children:["Filter by Region",Object(c.jsx)(g.a,{})]}),Object(c.jsx)("div",{className:n?"filters":"nondisplay",children:o.map((function(e,n){return e.length>0?Object(c.jsx)("button",{type:"button",onClick:function(){return function(e){if("All"!==e){var n=h.filter((function(t){return t.region===e}));t(n)}else t(h)}(e)},className:"btn",children:e},n):null}))})]})},N=n(28),y=function(){return Object(c.jsx)("div",{className:"loader"})},k=function(e){var t=e.id,n=e.name,s=e.population,a=e.region,r=e.capital,i=e.flag;return Object(c.jsxs)("section",{className:"each-country",children:[Object(c.jsx)("img",{src:i,alt:n}),Object(c.jsxs)("div",{className:"country-info",children:[Object(c.jsx)("h2",{children:n}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Population: "}),s]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Region: "}),a]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Capital: "}),r]})]}),Object(c.jsx)(o.b,{className:"link",to:"/country/".concat(n),children:"More info"})]},t)},C=function(){var e=p(),t=e.loading,n=e.countries;return t?Object(c.jsx)(y,{}):n.length<1?Object(c.jsx)("h2",{className:"no-result",children:"No country matches your search input"}):Object(c.jsx)("section",{className:"countries",id:"countries",children:n.map((function(e){return Object(c.jsx)(k,Object(N.a)({},e),e.id)}))})},S=function(){return Object(c.jsxs)("main",{className:"Home",children:[Object(c.jsx)(f,{}),Object(c.jsx)(v,{}),Object(c.jsx)(C,{})]})},w=n(11),D=function(){return Object(c.jsx)("section",{className:"error",children:Object(c.jsxs)("div",{className:"error-container",children:[Object(c.jsx)("h1",{children:"OOps! It's a dead end"}),Object(c.jsxs)(o.b,{to:"/",children:[Object(c.jsx)(w.a,{}),"Back"]})]})})},R=function(){var e=Object(l.f)().name,t=a.a.useState(!1),n=Object(O.a)(t,2),s=n[0],r=n[1],i=a.a.useState(null),j=Object(O.a)(i,2),u=j[0],h=j[1],x=a.a.useCallback(Object(d.a)(b.a.mark((function t(){var n,c,s,a,i,o,l,j,u,d,O,x,p,f;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,fetch("".concat("https://restcountries.eu/rest/v2/name/").concat(e));case 4:return n=t.sent,t.next=7,n.json();case 7:(c=t.sent)?(s=c[0],a=s.name,i=s.nativeName,o=s.population,l=s.region,j=s.subregion,u=s.capital,d=s.topLevelDomain,O=s.currencies,x=s.borders,p=s.flag,f=s.languages,h({info:a,nativeName:i,population:o,region:l,subregion:j,capital:u,topLevelDomain:d,currencies:O,borders:x,flag:p,languages:f})):(h(null),r(!1)),r(!1),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0),r(!1);case 16:case"end":return t.stop()}}),t,null,[[1,12]])}))),[e]);if(a.a.useEffect((function(){x()}),[e,x]),s)return Object(c.jsx)(y,{});if(!u)return Object(c.jsx)("div",{className:"no-country",children:Object(c.jsx)("h1",{children:"No country to display"})});var p=u.info,f=u.borders,m=u.nativeName,g=u.population,v=u.region,N=u.subregion,k=u.capital,C=u.topLevelDomain,S=u.currencies,D=u.flag,R=u.languages;return console.log(R),Object(c.jsx)("main",{className:"one-country",children:Object(c.jsxs)("section",{className:"single",children:[Object(c.jsxs)(o.b,{to:"/",className:"back",children:[Object(c.jsx)(w.a,{className:"back-icon"}),"Back"]}),Object(c.jsxs)("section",{className:"content",children:[Object(c.jsx)("img",{src:D,alt:p}),Object(c.jsx)("h2",{className:"info",children:p}),Object(c.jsxs)("div",{className:"more-info1",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Native Name: "}),m]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Population: "}),g]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Region: "}),v]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Sub Region: "}),N]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Capital: "}),k]})]}),Object(c.jsxs)("div",{className:"more-info2",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Top Level Domain: "}),C]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Currencies: "}),S[0].name]}),Object(c.jsxs)("div",{className:"lanuguages",children:[Object(c.jsx)("span",{children:"Languages: "}),R.map((function(e){var t=e.name;return Object(c.jsx)("p",{className:"languages",children:t})}))]})]}),Object(c.jsxs)("div",{className:"borders",children:[Object(c.jsx)("h3",{children:"Border Countries:"}),Object(c.jsx)("ul",{className:"border-countries",children:f.length>0?f.map((function(e,t){return Object(c.jsx)("li",{className:"list",children:e},t)})):Object(c.jsx)("p",{children:"No border country on record"})})]})]})]})})},L=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],r={paddingRight:"8px",fontSize:"25px"},i=function(e){document.getElementById("body").classList.toggle("dark"),a(!n)};return Object(c.jsxs)("nav",{className:"nav",style:{display:"flex",justifyContent:"space-between"},children:[Object(c.jsx)(o.b,{className:"where",to:"/",children:"What in the world?"}),n?Object(c.jsxs)("button",{className:"btn-mode",onClick:i,children:[Object(c.jsx)(w.c,{style:r}),Object(c.jsx)("span",{children:"LightMode"})]}):Object(c.jsxs)("button",{className:"btn-mode",onClick:i,children:[Object(c.jsx)(w.b,{style:r}),Object(c.jsx)("span",{children:"DarkMode"})]})]})};var E=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(L,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(S,{})}),Object(c.jsx)(l.a,{path:"/country/:name",children:Object(c.jsx)(R,{})}),Object(c.jsx)(l.a,{path:"*",children:Object(c.jsx)(D,{})})]})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{children:Object(c.jsx)(E,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4b580374.chunk.js.map