(this["webpackJsonpcheckout-prism-merchant-ui"]=this["webpackJsonpcheckout-prism-merchant-ui"]||[]).push([[5],{451:function(t,e,n){"use strict";let r;n.d(e,"a",(function(){return r})),function(t){t.ADD_BLACKLIST_ENTRY="ADD_BLACKLIST_ENTRY",t.DELETE_BLACKLIST_ENTRY="DELETE_BLACKLIST_ENTRY",t.IMPORT_BLACKLIST_ENTRY="IMPORT_BLACKLIST_ENTRY",t.ADD_SCORING_RULE="ADD_SCORING_RULE",t.DELETE_SCORING_RULE="DELETE_SCORING_RULE",t.ADD_RISK_PROFILE_SCORING_RULE="ADD_RISK_PROFILE_SCORING_RULE",t.ADD_LIST="ADD_LIST",t.ADD_LISTS_ENTRY="ADD_LISTS_ENTRY",t.DELETE_LIST_ENTRY="DELETE_LIST_ENTRY",t.DELETE_CUSTOM_LIST="DELETE_CUSTOM_LIST",t.ADD_ROUTING_TREE_NODE="ADD_ROUTING_TREE_NODE",t.ROUTING_INFO="ROUTING_INFO",t.ROUTING_INFO_BINARY="ROUTING_INFO_BINARY",t.ROUTING_STEP_INFO="ROUTING_STEP_INFO",t.RISK_PROFILE_INFO="RISK_PROFILE_INFO",t.RULE_PROFILE_INFO="RULE_PROFILE_INFO",t.LIST_INFO="LIST_INFO",t.ADD_RISK_PROFILE="ADD_RISK_PROFILE",t.ROUTING_RISK_PROFILE_FORM="ROUTING_RISK_PROFILE_FORM",t.ROUTING_ML_MODULE_FORM="ROUTING_ML_MODULE_FORM",t.DELETE_RISK_PROFILE="DELETE_RISK_PROFILE",t.RENAME_RISK_PROFILE="RENAME_RISK_PROFILE",t.COPY_RISK_PROFILE="COPY_RISK_PROFILE",t.RESET_ROUTING_TREE_DATA="RESET_ROUTING_TREE_DATA",t.SAVE_PRIMARY_ROUTING_TREE_DATA="SAVE_PRIMARY_ROUTING_TREE_DATA",t.PROMOTE_DRAFT_ROUTING_TREE="PROMOTE_DRAFT_ROUTING_TREE",t.RULES_EDITOR_INFO="RULES_EDITOR_INFO",t.RULE_BUILDER_NAME_PROMPT="RULE_BUILDER_NAME_PROMPT",t.RULE_BUILDER_RULE_PROMPT="RULE_BUILDER_RULE_PROMPT",t.RULE_BUILDER_SAVE_PROMPT="RULE_BUILDER_SAVE_PROMPT",t.DELETE_ROUTING_TREE_ELEMENT="DELETE_ROUTING_TREE_ELEMENT",t.ROUTING_CREATE_RISK_PROFILE_FORM="ROUTING_CREATE_RISK_PROFILE_FORM",t.ML_INFO_MODAL="ML_INFO_MODAL"}(r||(r={}))},452:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(6),c=n(468),a=n(0);var o=t=>{const e=Object(a.useContext)(c.c),n=Object(a.useContext)(c.b),o=Object(a.useCallback)(((e={})=>{n((n=>Object(r.a)(Object(r.a)({},n),{},{[t]:e})))}),[t,n]),i=Object(a.useCallback)((()=>{o(null)}),[o]);return{modalData:e[t],openModal:o,closeModal:i}}},468:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return s}));var r=n(1),c=n(7),a=n(0),o=n.n(a);const i=o.a.createContext({}),u=o.a.createContext((()=>{})),s=({children:t,defaultModals:e={}})=>{const n=Object(a.useState)(e),o=Object(c.a)(n,2),s=o[0],l=o[1];return Object(r.jsx)(i.Provider,{value:s,children:Object(r.jsx)(u.Provider,{value:l,children:t})})}},471:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(6),c=n(17),a=n.n(c),o=n(25),i=n(139),u=n(138),s=n(76),l=n(0);var O=(t,e={})=>{const n=Object(i.a)(),c=Object(s.a)();return Object(l.useCallback)(function(){var i=Object(o.a)(a.a.mark((function o(i,s,l=e){var O,d,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return O=e.sent,d=s?"/".concat(s):"",e.prev=4,e.next=7,Object(u.d)("".concat(t).concat(d),i,Object(r.a)(Object(r.a)({},l),{},{headers:Object(r.a)(Object(r.a)({},O),l&&l.headers)}));case 7:return b=e.sent,e.abrupt("return",b.data);case 11:throw e.prev=11,e.t0=e.catch(4),401===e.t0.response.status&&c.logout(),e.t0;case 15:case"end":return e.stop()}}),o,null,[[4,11]])})));return function(t,e){return i.apply(this,arguments)}}(),[c,n,e,t])},d=n(34);const b={put:O,post:n(577).a},f=(t,e,n={})=>{const c=(0,b[t])(e);return Object(d.c)((({data:t,path:e})=>c(t,e)),Object(r.a)(Object(r.a)({},n),{},{throwOnError:!0}))}},478:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(145),c=n(0);var a=()=>Object(c.useContext)(r.a)},484:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var r=n(8),c=n(5),a=n(2);function o(){const t=Object(r.a)([""]);return o=function(){return t},t}var i=Object(c.default)(a.TextInline).attrs((()=>({$as:"strong",fontWeight:500})))(o());function u(){const t=Object(r.a)([""]);return u=function(){return t},t}var s=Object(c.default)(a.Text).attrs((()=>({lineHeight:"24px",mb:2})))(u())},487:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var r=n(1),c=(n(0),n(452)),a=n(2);var o=({modalKey:t,title:e,children:n})=>{const o=Object(c.a)(t),i=o.modalData,u=o.closeModal;return i?Object(r.jsx)(a.Modal,{size:"large",type:"success",title:e,closeModal:u,children:n}):null},i=n(5),u=n(18),s=Object(i.default)(u.l).withConfig({displayName:"OpenInfoModalButton___StyledIconActionInfo",componentId:"fm6jll-0"})(["margin-right:6px;"]);var l=({modalKey:t,buttonText:e="Learn more"})=>{const n=Object(c.a)(t).openModal;return Object(r.jsxs)(a.OutlineButton,{onClick:()=>n(),children:[Object(r.jsx)(s,{}),e]})}},494:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"g",(function(){return d})),n.d(e,"d",(function(){return b})),n.d(e,"h",(function(){return f})),n.d(e,"e",(function(){return j})),n.d(e,"c",(function(){return h})),n.d(e,"f",(function(){return p})),n.d(e,"b",(function(){return E}));var r=n(17),c=n.n(r),a=n(501),o=n(25);const i=function(){var t=Object(o.a)(c.a.mark((function t(e,n,r){var o,i,u,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=Object(a.a)(n),t.prev=1,o.s();case 3:if((i=o.n()).done){t.next=12;break}return u=i.value,t.next=7,u(e,r);case 7:if(null===(s=t.sent)){t.next=10;break}return t.abrupt("return",s);case 10:t.next=3;break;case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),o.e(t.t0);case 17:return t.prev=17,o.f(),t.finish(17);case 20:return t.abrupt("return",null);case 21:case"end":return t.stop()}}),t,null,[[1,14,17,20]])})));return function(e,n,r){return t.apply(this,arguments)}}(),u=function(){var t=Object(o.a)(c.a.mark((function t(e,n){var r,a,o,u,s,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r={},a=Object.keys(n),o=0;case 3:if(!(o<a.length)){t.next=13;break}return u=a[o],s=n[u],t.next=8,i(e[u],s,e);case 8:null!==(l=t.sent)&&(r[u]=l);case 10:o++,t.next=3;break;case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();var s=t=>function(){var e=Object(o.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(716),O=n.n(l);const d=(t="This value is required")=>e=>O.a.empty(e)||O.a.not.existy(e)||"string"===typeof e&&O.a.empty(e.trim())?t:null,b=(t="This value must be a integer")=>e=>O.a.not.integer(Number(e))?t:null,f=(t="This value is required")=>e=>{for(var n=0,r=Object.values(e);n<r.length;n++){let e=r[n];if(O.a.empty(e)||O.a.not.existy(e))return t}return null},j=(t,e="The value exceeds the maximum length of ".concat(t," characters"))=>n=>n.length>=t?e:null,h=(t,e="The value contains invalid characters")=>n=>t.test(n)?null:e,p=(t,e="The value contains invalid characters")=>n=>t.test(n)?e:null,E=(t,e="The value must be a unique")=>(n,r)=>n===r[t]?e:null},508:function(t,e,n){"use strict";n.d(e,"d",(function(){return r.a})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(549),c=n(6),a=n(40),o=n(471);const i=(t,e)=>Object(o.a)("post",a.a.rules,{onSuccess:t,onSettled:(t,n,r)=>{t&&e(Object(c.a)(Object(c.a)({},t),r.data))}}),u=t=>Object(o.a)("put",a.a.rules,{onSuccess:t});var s=n(509);const l=t=>Object(s.a)(a.a.rules,{onSuccess:t});var O=n(56),d=n(34);const b=()=>{const t=Object(O.a)();return Object(d.e)([a.a.rules,"available-properties"],(()=>t("".concat(a.a.rules,"/available-properties"))))}},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(6),c=n(34),a=n(17),o=n.n(a),i=n(25),u=n(139),s=n(138),l=n(76),O=n(0);var d=t=>{const e=Object(u.a)(),n=Object(l.a)();return Object(O.useCallback)(function(){var r=Object(i.a)(o.a.mark((function r(c){var a,i;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e();case 2:return a=r.sent,r.prev=3,r.next=6,Object(s.a)("".concat(t,"/").concat(c),{headers:a});case 6:return i=r.sent,r.abrupt("return",i.data);case 10:throw r.prev=10,r.t0=r.catch(3),401===r.t0.response.status&&n.logout(),r.t0;case 14:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(t){return r.apply(this,arguments)}}(),[n,t,e])};const b=(t,e={})=>{const n=d(t);return Object(c.c)((t=>n(t)),Object(r.a)(Object(r.a)({},e),{},{throwOnError:!0}))}},517:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(1),c=n(8),a=(n(0),n(2)),o=n(104),i=n(18),u=n(5);function s(){const t=Object(c.a)(["\n  & > g {\n    fill: #cf5858;\n  }\n"]);return s=function(){return t},t}const l=Object(u.default)(i.k)(s());var O=({children:t})=>Object(r.jsx)(a.Box,{bg:"#F6E3E3",mt:3,px:3,py:2,borderRadius:1,"data-testid":"inline-alert",children:Object(r.jsxs)(o.a,{p:0,children:[Object(r.jsx)(a.Box,{children:Object(r.jsx)(l,{})}),Object(r.jsx)(a.Box,{pl:3,children:Object(r.jsx)(a.Text,{color:"#cf5858",fontSize:0,lineHeight:0,children:t})})]})})},529:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1),c=(n(0),n(2)),a=n(487);var o=({title:t,modalKey:e})=>Object(r.jsxs)(c.Flex,{alignItems:"center",pb:2,children:[Object(r.jsx)(c.Box,{mr:2,children:Object(r.jsx)(c.Box,{py:3,children:Object(r.jsx)(c.TextHeadingOne,{children:t})})}),e&&Object(r.jsx)(a.a,{modalKey:e})]})},530:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(8),c=n(5),a=n(2);function o(){const t=Object(r.a)(["\n  padding: 0;\n\n  button {\n    margin-left: 0;\n    margin-right: 16px;\n    :hover {\n      z-index: 10;\n    }\n  }\n\n  button:last-child {\n    margin-right: 0;\n  }\n"]);return o=function(){return t},t}var i=Object(c.default)(a.Flex)(o())},544:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(1),c=n(6),a=n(7),o=n(22),i=(n(0),n(466)),u=n(2),s=n(546);var l=t=>{let e=t.label,n=t.mb,l=void 0===n?2:n,O=t.name,d=t.type,b=void 0===d?"text":d,f=t.submitCount,j=t.displayFieldError,h=void 0===j||j,p=Object(o.a)(t,["label","mb","name","type","submitCount","displayFieldError"]);const E=Object(i.c)(O),_=Object(a.a)(E,2),x=_[0],R=_[1].error,T=f>0&&void 0!==R;return Object(r.jsxs)(u.Box,{mb:l,children:[Object(r.jsx)(u.TextFieldWithLabel,Object(c.a)(Object(c.a)({style:{fontSize:"13px"},title:e,type:b,error:T},x),p)),h&&T&&Object(r.jsx)(s.a,{"data-testid":"".concat(x.name,"-error-messsage"),children:R})]})}},546:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(8),c=n(2),a=n(5);function o(){const t=Object(r.a)([""]);return o=function(){return t},t}const i=Object(a.default)(c.Text)(o());i.defaultProps={fontWeight:400,color:"#BE4343"};var u=i},547:function(t,e,n){"use strict";var r=n(468);n.d(e,"a",(function(){return r.a}))},549:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(34),c=n(40),a=n(56);const o=()=>{const t=Object(a.a)();return Object(r.e)(c.a.rules,(()=>t(c.a.rules)))}},561:function(t,e,n){"use strict";n.d(e,"d",(function(){return E})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return I}));var r=n(1),c=n(8),a=(n(0),n(2)),o=n(18),i=n(5),u=n(12);function s(){const t=Object(c.a)(["\n  width: 35px;\n"]);return s=function(){return t},t}function l(){const t=Object(c.a)(["\n  font-size: 13px;\n  color: #1da177;\n  ","\n"]);return l=function(){return t},t}function O(){const t=Object(c.a)(["\n  align-self: center;\n  margin: 0 8px 0 4px !important;\n"]);return O=function(){return t},t}const d=Object(i.default)(o.o)(O()),b=Object(i.default)(a.ClickableElement)(l(),u.space),f=i.default.div(s());var j=({searchTerm:t,setSearchTerm:e})=>{const n=t&&t.length>0?Object(r.jsx)(b,{"data-cy":"searchClearButton",px:1,onClick:()=>{e("")},children:"clear"}):Object(r.jsx)(f,{});return Object(r.jsx)(a.TextField,{style:{fontSize:"13px"},prefix:Object(r.jsx)(d,{}),suffix:n,onChange:t=>{e(t.target.value)},value:t||"","data-cy":"searchInput",placeholder:"Search"})};function h(){const t=Object(c.a)(["\n  margin: 0 12px;\n  height: 24px;\n  width: 1px;\n  background-color: ",";\n"]);return h=function(){return t},t}const p=Object(i.default)(a.Box)(h(),(t=>t.theme.colors.baseLight));var E=({searchTerm:t,setSearchTerm:e,totalCount:n})=>{return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.Flex,{flexBasis:"290px",children:Object(r.jsx)(j,{searchTerm:t,setSearchTerm:e})}),Object(r.jsx)(p,{}),Object(r.jsx)(a.Box,{style:{lineHeight:"20px"},children:Object(r.jsx)(a.Text,{color:"#7b8d93",fontSize:0,children:"".concat(Number(n).toLocaleString()," ").concat((c="result",o="results",i=n,1===i?c:o))})})]});var c,o,i},_=n(101);function x(){const t=Object(c.a)(["\n  align-items: center;\n  justify-self: end;\n"]);return x=function(){return t},t}function R(){const t=Object(c.a)(["\n  align-items: center;\n"]);return R=function(){return t},t}function T(){const t=Object(c.a)(["\n  grid-template-columns: auto auto;\n  padding: 8px 16px;\n  align-items: center;\n"]);return T=function(){return t},t}const m=Object(i.default)(_.a)(T()),v=Object(i.default)(a.Flex)(R()),I=Object(i.default)(a.Flex)(x())},576:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(8),c=n(5),a=n(2);function o(){const t=Object(r.a)([""]);return o=function(){return t},t}var i=Object(c.default)(a.Box).attrs((()=>({mb:4})))(o())},577:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(17),c=n.n(r),a=n(6),o=n(25),i=n(139),u=n(138),s=n(76),l=n(0);var O=(t,e={})=>{const n=Object(i.a)(),r=Object(s.a)();return Object(l.useCallback)(function(){var i=Object(o.a)(c.a.mark((function o(i,s,l=e){var O,d,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return O=e.sent,d=s?"/".concat(s):"",e.prev=4,e.next=7,Object(u.c)("".concat(t).concat(d),i,Object(a.a)(Object(a.a)({},l),{},{headers:Object(a.a)(Object(a.a)({},O),l&&l.headers)}));case 7:return b=e.sent,e.abrupt("return",b.data);case 11:throw e.prev=11,e.t0=e.catch(4),401===e.t0.response.status&&r.logout(),e.t0;case 15:case"end":return e.stop()}}),o,null,[[4,11]])})));return function(t,e){return i.apply(this,arguments)}}(),[r,n,e,t])}},621:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(1),c=n(8),a=(n(0),n(18)),o=n(5),i=n(12),u=n(80);function s(){const t=Object(c.a)(["\n  ","\n  border: 1px solid ",";\n  border-radius: 3px;\n  background-color: #ffffff;\n  font-size: 16px;\n  line-height: 1em;\n\n  table & {\n    opacity: 0;\n  }\n\n  tr:hover &,\n  &:focus {\n    opacity: 1;\n  }\n\n  &:hover {\n    box-shadow: 0 1px 3px 0 rgba(123, 141, 147, 0.15);\n  }\n"]);return s=function(){return t},t}const l="32px",O="26px",d=Object(o.default)(u.a)(s(),Object(i.variant)({variants:{medium:{height:"".concat(O),width:"".concat(O)},large:{height:"".concat(l),width:"".concat(l)}}}),(t=>t.theme.colors.baseLight));var b=({onClick:t,dataCy:e="delete-button",variant:n="medium"})=>Object(r.jsx)(d,{"data-cy":e,onClick:t,variant:n,children:Object(r.jsx)(a.f,{})})},623:function(t,e,n){"use strict";var r=n(1),c=(n(0),n(2)),a=n(517);e.a=({handleClose:t,itemType:e,itemName:n,onDelete:o,onCancel:i,loading:u,submissionErrorMessage:s})=>Object(r.jsxs)(c.Modal,{type:"alert",title:"Delete ".concat(e),closeModal:t,children:[Object(r.jsxs)(c.Box,{pb:4,children:[Object(r.jsxs)(c.Text,{fontSize:0,pb:3,children:["Are you sure you want to delete"," ",Object(r.jsx)(c.TextInline,{as:"strong",fontWeight:500,children:n}),"?"]}),Object(r.jsx)(c.Text,{fontSize:0,fontWeight:400,color:"#BE4343",children:"This action is permanent."})]}),Object(r.jsxs)(c.Flex,{alignItems:"center",p:0,children:[Object(r.jsx)(c.Box,{children:Object(r.jsx)(c.DangerButton,{onClick:o,"data-testid":"delete-button",children:u?"Deleting":"Delete"})}),Object(r.jsx)(c.Box,{pl:3,children:Object(r.jsx)(c.OutlineButton,{onClick:i,children:"Cancel"})})]}),s&&Object(r.jsx)(a.a,{children:s})]})},970:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(1),c=n(0),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var c in e=arguments[n])Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}).apply(this,arguments)};var o=function(t){var e=t.animate,n=t.backgroundColor,r=t.backgroundOpacity,o=t.baseUrl,i=t.children,u=t.foregroundColor,s=t.foregroundOpacity,l=t.gradientRatio,O=t.uniqueKey,d=t.interval,b=t.rtl,f=t.speed,j=t.style,h=t.title,p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(t);c<r.length;c++)e.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(t,r[c])&&(n[r[c]]=t[r[c]])}return n}(t,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),E=O||Math.random().toString(36).substring(6),_=E+"-diff",x=E+"-animated-diff",R=E+"-aria",T=b?{transform:"scaleX(-1)"}:null,m="0; "+d+"; 1",v=f+"s";return Object(c.createElement)("svg",a({"aria-labelledby":R,role:"img",style:a(a({},j),T)},p),h?Object(c.createElement)("title",{id:R},h):null,Object(c.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+o+"#"+_+")",style:{fill:"url("+o+"#"+x+")"}}),Object(c.createElement)("defs",{role:"presentation"},Object(c.createElement)("clipPath",{id:_},i),Object(c.createElement)("linearGradient",{id:x},Object(c.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:r},e&&Object(c.createElement)("animate",{attributeName:"offset",values:-l+"; "+-l+"; 1",keyTimes:m,dur:v,repeatCount:"indefinite"})),Object(c.createElement)("stop",{offset:"50%",stopColor:u,stopOpacity:s},e&&Object(c.createElement)("animate",{attributeName:"offset",values:-l/2+"; "+-l/2+"; "+(1+l/2),keyTimes:m,dur:v,repeatCount:"indefinite"})),Object(c.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:r},e&&Object(c.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+l),keyTimes:m,dur:v,repeatCount:"indefinite"})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var i=function(t){return t.children?Object(c.createElement)(o,a({},t)):Object(c.createElement)(u,a({},t))},u=function(t){return Object(c.createElement)(i,a({viewBox:"0 0 476 124"},t),Object(c.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(c.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(c.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},s=i;var l=({height:t,width:e,speed:n=2,children:c})=>Object(r.jsx)(s,{height:t,width:e,speed:n,backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:c});const O=({length:t})=>Object(r.jsx)("div",{"data-cy":"loading-placeholder",children:Object(r.jsx)(l,{height:215,width:180,children:Array.from({length:t},((t,e)=>Object(r.jsx)("rect",{x:"0",y:0!==e?215*e/6:0,rx:"0",ry:"0",width:"100%",height:"20"},e)))})});var d=Object(c.memo)(O)}}]);
//# sourceMappingURL=5.87ee134d.chunk.js.map