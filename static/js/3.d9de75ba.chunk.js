(this.webpackJsonpj9app=this.webpackJsonpj9app||[]).push([[3],{178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(179);t.EmailJSResponseStatus=a.EmailJSResponseStatus;var i=n(180),s=null,o="https://api.emailjs.com";function r(e,t,n){return void 0===n&&(n={}),new Promise((function(i,s){var o=new XMLHttpRequest;for(var r in o.addEventListener("load",(function(e){var t=new a.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):s(t)})),o.addEventListener("error",(function(e){s(new a.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),n)o.setRequestHeader(r,n[r]);o.send(t)}))}function c(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function l(e,t){s=e,o=t||"https://api.emailjs.com"}function u(e,t,n,a){var i={lib_version:"2.4.1",user_id:a||s,service_id:e,template_id:t,template_params:c(n)};return r(o+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function m(e,t,n,a){if("string"===typeof n&&(n=document.querySelector(n)),!n||"FORM"!==n.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(n);var c=new FormData(n);return c.append("lib_version","2.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",a||s),r(o+"/api/v1.0/email/send-form",c).then((function(e){return i.UI.successState(n),e}),(function(e){return i.UI.errorState(n),Promise.reject(e)}))}t.init=l,t.send=u,t.sendForm=m,t.default={init:l,send:u,sendForm:m}},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=a},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=a},181:function(e,t,n){e.exports=n.p+"static/media/Instagram_font_awesome.a101d6eb.svg"},182:function(e,t,n){e.exports=n.p+"static/media/linkedin.e88ceebb.svg"},183:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(0),s=n.n(i),o=n(178),r=n.n(o),c=n(181),l=n.n(c),u=n(182),m=n.n(u);n(183);t.default=function(){var e=Object(i.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],c=Object(i.useState)(""),u=Object(a.a)(c,2),d=u[0],p=u[1],f={from_name:n,reply_to:n,to_name:"Janine",message_html:d};return s.a.createElement("div",{id:"contactSection"},s.a.createElement("div",{id:"contactTitleMobile"}," Contact Janine "),s.a.createElement("div",{id:"contactInfo"},s.a.createElement("div",{id:"contactBox"},s.a.createElement("div",{id:"contactTitle"}," Contact Janine "),s.a.createElement("div",{id:"socialMediaLinks"},s.a.createElement("div",{id:"ig",onClick:function(){return window.open("https://www.instagram.com/janineteeneightynine/","_blank")}}," ",s.a.createElement("img",{src:l.a})," Follow  "),s.a.createElement("div",{id:"linkedIn",onClick:function(){return window.open("https://www.linkedin.com/in/janine-sleem-21985a32","_blank")}}," ",s.a.createElement("img",{src:m.a})," Link Up ")))),s.a.createElement("div",{id:"contactInfoMobile"},s.a.createElement("div",{id:"socialMediaLinksMobile"},s.a.createElement("div",{id:"ig",onClick:function(){return window.open("https://www.instagram.com/janineteeneightynine/","_blank")}}," ",s.a.createElement("img",{src:l.a})," Follow  "),s.a.createElement("div",{id:"linkedIn",onClick:function(){return window.open("https://www.linkedin.com/in/janine-sleem-21985a32","_blank")}}," ",s.a.createElement("img",{src:m.a})," Link Up "))),s.a.createElement("div",{id:"inputSection"},s.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),r.a.send("janineteeneightynine","template_ohYW4Djq",f,"user_tkLXlNfLDSsTsMrxlmuVn").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},s.a.createElement("input",{name:"user_email",onChange:function(e){console.log(e.target.value),o(e.target.value)},value:n,id:"email",type:"text",placeholder:"Email"}),s.a.createElement("textarea",{name:"message",onChange:function(e){console.log(e.target.value),p(e.target.value)},value:d,id:"message",placeholder:"Start a conversation"}),s.a.createElement("button",{type:"submit",id:"button"}," Send "))))}}}]);
//# sourceMappingURL=3.d9de75ba.chunk.js.map