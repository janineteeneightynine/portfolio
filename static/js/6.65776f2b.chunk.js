(this.webpackJsonpj9app=this.webpackJsonpj9app||[]).push([[6],{174:function(e,t,n){},175:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var a=n(24),r=function(e){return{type:a.c,payload:e}},c=function(e){return{type:a.b,payload:e}}},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n(14),l=n(50),o=n(33);n(174);function s(e){var t=Object(a.useState)({articles:{columnOne:[],columnTwo:[],columnThree:[]}}),n=Object(c.a)(t,2),s=n[0],u=n[1];return Object(a.useEffect)((function(){var t=[],n=[],a=[];e.articles.forEach((function(c,l){var o;o=void 0===e.articles[l]["media:content"][1]?e.articles[l]["media:content"].url:e.articles[l]["media:content"][1].url,l<=2&&t.push(r.a.createElement(i.a,{type:"design",key:e.articles[l].title,link:e.articles[l].link,categories:e.articles[l].category,img:o,title:e.articles[l].title,paragraph:e.articles[l].description})),l>2&&l<=5&&n.push(r.a.createElement(i.a,{type:"design",key:e.articles[l].title,link:e.articles[l].link,categories:e.articles[l].category,img:o,title:e.articles[l].title,paragraph:e.articles[l].description})),l>5&&l<=7&&a.push(r.a.createElement(i.a,{type:"design",key:e.articles[l].title,link:e.articles[l].link,categories:e.articles[l].category,img:o,title:e.articles[l].title,paragraph:e.articles[l].description}))})),u({articles:{columnOne:t,columnTwo:n,columnThree:a}})}),[e.articles]),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{articles:e.articles}),r.a.createElement("div",{id:"designGalleryContainer"},r.a.createElement("div",{className:"twoTenColumn"},r.a.createElement("div",{id:"postContainer"},s.articles.columnOne)),r.a.createElement("div",{className:"tenFourteenColumn"},r.a.createElement("div",{id:"postContainer"},s.articles.columnTwo)),r.a.createElement("div",{className:"fourteenEighteenColumn"},r.a.createElement("div",{id:"postContainer"},s.articles.columnThree,r.a.createElement(o.a,{type:"Design"})))))}var u=s;s.defaultProps={articles:[]};var m=n(175),p=n(34),d=n(13);t.default=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.currentArticles.designArticles}));return Object(a.useEffect)((function(){fetch("https://api.allorigins.win/get?url=".concat(encodeURIComponent("https://historytheorymethodology.wordpress.com/category/design-gallery/feed"))).then((function(e){return e.text()})).then((function(e){return JSON.parse(e).contents})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){return Object(d.c)(e)})).then((function(t){console.log(t.channel.item," this is the item"),e(Object(m.b)(t.channel.item))})).catch((function(e){console.error(e.message)}))}),[]),r.a.createElement(u,{articles:t})}}}]);
//# sourceMappingURL=6.65776f2b.chunk.js.map