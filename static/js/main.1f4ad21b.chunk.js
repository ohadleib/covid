(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{41:function(e,t,a){e.exports=a(77)},46:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(32),c=a.n(r),o=(a(46),a(13)),s=a(6),u=a(35),i=(a(47),a(15)),m=a.n(i),d=a(40),E=a(17),h=a(16),p=a(39),y=a(33),x=a.n(y);a(71);var g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),y=i[0],g=i[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),b=v[0],T=v[1],w=Object(n.useState)(!0),S=Object(o.a)(w,2),j=S[0],O=S[1],k=Object(n.useState)(!1),C=Object(o.a)(k,2),B=C[0];C[1],Object(n.useEffect)((function(){m.a.all([m.a.get("https://corona.lmao.ninja/v2/all"),m.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){r(e[0].data),g(e[1].data),O(!1)})).catch((function(e){console.log(e)}))}),[]);var I=new Date(parseInt(a.updated)).toString(),L=y.filter((function(e){return""!==b?e.country.toLowerCase().includes(b.toLowerCase()):e})),N=(L.sort((function(e,t){return t.cases-e.cases})),L.map((function(e,t){return l.a.createElement(s.a,{key:t,bg:B?"dark":"light",text:B?"light":"dark",className:"text-center",style:{margin:"10px"},id:"b"},l.a.createElement(s.a.Img,{id:"a",variant:"top",src:e.countryInfo.flag}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,e.country),l.a.createElement(s.a.Text,null,"Cases : ",e.cases),l.a.createElement(s.a.Text,null,"Deaths : ",e.deaths),l.a.createElement(s.a.Text,null,"Recovered : ",e.recovered),l.a.createElement(s.a.Text,null,"Tests : ",e.tests),l.a.createElement(s.a.Text,null,"Today's cases : ",e.todayCases),l.a.createElement(s.a.Text,null,"Today's deaths : ",e.todayDeaths),l.a.createElement(s.a.Text,null,"Active : ",e.active),l.a.createElement(s.a.Text,null,"Critical : ",e.critical)))})));return l.a.createElement("div",{className:"home",style:{backgroundColor:B?"black":"white",color:B?"white":"black"}},l.a.createElement("br",null),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(x.a,{size:50,color:"gray",loading:j})),l.a.createElement("br",null),l.a.createElement("h2",{className:"header","data-tip":"By Ohad Leibovich",style:{textAlign:"center"}},"COVID-19"),l.a.createElement(p.a,{effect:"solid"}),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(s.a,{bg:"secondary",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Cases"),l.a.createElement(h.a,{value:a.cases,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}})),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",I))),l.a.createElement(s.a,{bg:"danger",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Deaths"),l.a.createElement(s.a.Text,null," ",l.a.createElement(h.a,{value:a.deaths,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}}))),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",I))),l.a.createElement(s.a,{bg:"success",text:"white",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Recovered"),l.a.createElement(s.a.Text,null," ",l.a.createElement(h.a,{value:a.recovered,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}}))),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",I)))),l.a.createElement(E.a.Group,{controlId:"formGroupSearch"},l.a.createElement(E.a.Control,{bg:"dark",type:"text",placeholder:"Search for countries",onChange:function(e){return T(e.target.value)}})),l.a.createElement(E.a,null),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},N))},f=a(36),v=a(12);var b=function(){return l.a.createElement(f.a,null,l.a.createElement("div",null,l.a.createElement(v.c,null,l.a.createElement(v.a,{exact:!0,path:"/",component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.1f4ad21b.chunk.js.map