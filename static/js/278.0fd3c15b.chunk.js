"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{1077:function(t,n,e){e.d(n,{Gv:function(){return m},Zx:function(){return h},jx:function(){return d},rS:function(){return x},tr:function(){return l},xq:function(){return f}});var r,a,i,u,s,c,o=e(168),p=e(7691),l=p.default.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  list-style: none;\n"]))),f=p.default.li(a||(a=(0,o.Z)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  cursor: pointer;\n  transition: filter 300ms ease-in-out;\n  &:hover,\n  &:focus {\n    filter: drop-shadow(1px 1px 15px black);\n  }\n  width: calc((100% - 32px) / 3);\n"]))),d=p.default.img(i||(i=(0,o.Z)(["\n  border-radius: 5px;\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n  transition: filter 300ms ease-in-out;\n  max-width: 350px;\n  height: 500px;\n"]))),h=p.default.div(u||(u=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 16px;\n  padding-top: 12px;\n"]))),m=p.default.p(s||(s=(0,o.Z)(["\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 19.5px;\n  line-height: 1.2;\n"]))),x=p.default.h1(c||(c=(0,o.Z)(["\n  text-align: center;\n"])))},9278:function(t,n,e){e.r(n);var r=e(9439),a=e(2791),i=e(1087),u=e(7689),s=e(528),c=e(4281),o=e(171),p=e(1077),l=e(184);n.default=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],f=n[1],d=(0,i.lr)(),h=(0,r.Z)(d,2),m=h[0],x=h[1],v=m.get("query"),y=(0,u.TH)();(0,a.useEffect)((function(){null!==m&&""!==m&&(0,o.WK)(v).then(f)}),[m,v]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{action:"",onSubmit:function(t){t.preventDefault();var n=t.target;x({query:t.target.elements.query.value}),n.reset()},children:[(0,l.jsx)(s.Z,{name:"query",color:"secondary",id:"outlined-basic",label:"Search Film",variant:"outlined"}),(0,l.jsx)(c.Z,{type:"submit",variant:"outlined",size:"medium",sx:{ml:2},children:"Search"})]}),e&&(0,l.jsx)(p.tr,{children:e.map((function(t){return(0,l.jsx)(p.xq,{children:(0,l.jsxs)(i.rU,{to:"/movies/".concat(t.id),state:{from:y},children:[(0,l.jsx)(p.jx,{src:t.poster_path?"https://image.tmdb.org/t/p/w500/"+t.poster_path:"https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg",alt:"",width:"500",height:"750"}),(0,l.jsx)(p.Zx,{children:(0,l.jsx)(p.Gv,{children:t.title?t.title:t.name})})]})},t.id)}))})]})}},171:function(t,n,e){e.d(n,{DF:function(){return f},J0:function(){return h},KS:function(){return c},VQ:function(){return p},WK:function(){return x}});var r=e(5861),a=e(4687),i=e.n(a),u=e(1243),s="fe2081c2f49497d6a2d78b7f4a32d1d7";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("trending/all/day",{params:{api_key:s}});case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("movie/".concat(n),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("movie/".concat(n,"/reviews"),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("movie/".concat(n,"/credits"),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("search/movie",{params:{api_key:s,query:n,language:"en-US",page:1}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=278.0fd3c15b.chunk.js.map