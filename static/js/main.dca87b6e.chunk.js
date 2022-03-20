(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(16),o=a.n(c),s=a(10),r=(a(15),a(8)),l=a(0);var i=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(r.b,{className:"navbar-brand",to:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{className:"nav-link",to:"/about",children:"About"})})]}),Object(l.jsx)("button",{type:"button",className:"btn btn-light",id:"btn1",onClick:e.onToggle,children:"Enable Light Mode"})]})]})})})};a(31);var d=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"accordion",id:"accordionExample",children:Object(l.jsxs)("div",{className:"accordion-item",children:[Object(l.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(l.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(l.jsx)("strong",{children:"About TextUtils"})})}),Object(l.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(l.jsxs)("div",{className:"accordion-body",children:["Formatting text refers to controlling how text appears in your document.Formatted text can draw the reader's attention to specific parts of a document and emphasize important information. ",Object(l.jsx)("strong",{children:"TextUtils make it more easy to uderstand your text."})," It helps you to format your text in your desired way and also let you know about the time taken to read that particular text."]})})]})})})};a(32);function b(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],o=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"mb-3 my-3",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsx)("textarea",{className:"form-control",id:"my-box",onChange:function(e){console.log("Typed something"),o(e.target.value)},rows:"8",value:c})]}),Object(l.jsx)("button",{className:"btn btn-success mx-3 my-3",onClick:function(e){console.log("Text to uppercase");var t=c.toUpperCase();o(t)},children:"Convert To Uppercase"}),Object(l.jsx)("button",{className:"btn btn-danger mx-3 my-3",onClick:function(e){console.log("Text to Lowercase");var t=c.toLowerCase();o(t)},children:"Convert To Lowercase"}),Object(l.jsx)("button",{className:"btn btn-warning mx-3 my-3",onClick:function(){console.log("Clearing Text"),o("")},children:"Clear Text"})]}),Object(l.jsxs)("div",{className:"container my-4",children:[Object(l.jsx)("h3",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:[c.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",c.length," characters"]}),Object(l.jsxs)("p",{children:[.008*c.split(" ").length," minutes read"]}),Object(l.jsx)("h3",{children:"Preview"}),Object(l.jsx)("p",{children:c})]})]})}var j=a(2);var m=function(){var e=Object(n.useState)("dark"),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(i,{title:"TextUtils",mode:a,onToggle:function(){console.log("I am called"),"light"===a?(c("dark"),document.getElementById("btn1").innerHTML="Enable Light Mode",document.getElementById("btn1").style.backgroundColor="white",document.getElementById("btn1").style.color="black",document.title="TextUtils-Dark Mode"):(c("light"),document.getElementById("btn1").innerHTML="Enable Dark Mode",document.getElementById("btn1").style.backgroundColor="black",document.getElementById("btn1").style.color="white",document.title="TextUtils-Light Mode")}}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/about",children:Object(l.jsx)(d,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(b,{title:"Enter The Text Below:"})})]})]})})};o.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.dca87b6e.chunk.js.map