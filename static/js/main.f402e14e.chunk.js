(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{44:function(e,t,a){e.exports=a(95)},49:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},51:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),l=a.n(r),c=(a(49),a(50),a(51),a(7)),s=a(37),i=a.n(s),u=function(){return i.a.get("https://randomuser.me/api/?results=300")};var m=a(43),d=[{label:"Image",field:"image",width:150},{label:"Name",field:"name",sort:"asc",width:270},{label:"Phone",field:"phone",width:200},{label:"Email",field:"email",sort:"asc",width:100},{label:"DOB",field:"dob",sort:"asc",width:150}];function f(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!0),s=Object(c.a)(l,2),i=s[0],f=s[1],h=Object(n.useState)({}),p=Object(c.a)(h,2),g=p[0],b=p[1];return Object(n.useEffect)((function(){u().then((function(e){console.log("res: ",e.data.results),r(e.data.results),console.log("Users: ",a);var t=a.map((function(e,t){return{image:o.a.createElement("img",{src:e.picture.large,alt:"Image of a person"}),name:e.name.first+" "+e.name.last,phone:e.cell,email:e.email,dob:e.dob.date.split("T")[0]}}));console.log("newRows: ",t),b({columns:d,rows:t}),f(!1)})).catch((function(e){return console.log(e)}))}),[i]),i?o.a.createElement("div",null,"loading..."):a.length?o.a.createElement(m.c,{hover:!0,entriesOptions:[5,20,25],entries:5,pagesAmount:4,data:g,searchTop:!0,searchBottom:!1}):o.a.createElement("div",null,"Didnt get any users")}var h=function(e){return o.a.createElement("div",{className:"container",style:e.style},e.children)};var p=function(e){return o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container text-center"},o.a.createElement("h1",{className:"display-4"},"Employee Directory"),o.a.createElement("p",null,"Please user our searchbar below to find and sort any particular users you may be looking for.")))};a(94);var g=function(){return o.a.createElement("div",null,o.a.createElement(p,null),o.a.createElement(h,null,o.a.createElement(f,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.f402e14e.chunk.js.map