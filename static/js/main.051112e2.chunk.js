(window["webpackJsonpMHG-Scansion-WebApp"]=window["webpackJsonpMHG-Scansion-WebApp"]||[]).push([[0],{46:function(e,t,n){e.exports=n(74)},51:function(e,t,n){},55:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(51),n(21)),l=n(103),u=function(e){var t=e.onClick;return r.a.createElement(l.a,{style:{marginTop:"1em",width:"fit-content"},onClick:t,variant:"outlined",color:"primary"},"Scan")},s=n(102),d=function(e){var t=e.text,n=e.setText;return r.a.createElement(s.a,{margin:"normal",label:"Ein ritter s\xf4 gel\xearet was...",variant:"outlined",fullWidth:!0,multiline:!0,rows:"10",value:t,onChange:function(e){return n(e.target.value)}})},m=(n(55),n(40)),p=n.n(m),f=function(){return function(e){var t=r.a.useState({data:null,complete:!1,pending:!1,error:!1}),n=Object(i.a)(t,2),a=n[0],o=n[1],c=r.a.useState(),l=Object(i.a)(c,2),u=l[0],s=l[1];return r.a.useEffect((function(){u&&(o({data:null,pending:!0,error:!1,complete:!1}),p()(u).then((function(e){return o({data:e.data,pending:!1,error:!1,complete:!0})})).catch((function(){return o({data:null,pending:!1,error:!0,complete:!0})})))}),[u]),[a,function(){return s(e.apply(void 0,arguments))}]}((function(e){return{url:"https://7icr15ch6f.execute-api.us-east-2.amazonaws.com/prod/mhg-scansion",method:"POST",data:e}}))};var h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=f(),l=Object(i.a)(c,2),s=l[0],m=l[1];return r.a.createElement("div",{className:"app-container"},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement("h1",null,"Middle High German Scansion"),r.a.createElement(d,{text:n,setText:o}),r.a.createElement(u,{onClick:function(){m({text:n,userId:1})}})),s.pending&&r.a.createElement("div",{className:"result pending"},"Please wait"),s.complete&&(s.error?r.a.createElement("div",{className:"result error"},"Bad Request"):r.a.createElement("div",{className:"result valid"},function(e){var t=e.split(/\n/),n=[];return t.forEach((function(e,t){t%1===0&&n.push(r.a.createElement("br",null)),n.push(e)})),n}(s.data.body))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.051112e2.chunk.js.map