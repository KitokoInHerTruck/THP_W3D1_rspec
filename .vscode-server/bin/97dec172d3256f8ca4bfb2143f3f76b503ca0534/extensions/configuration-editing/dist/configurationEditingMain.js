(()=>{"use strict";var e={516:(e,t,n)=>{function r(e,t){void 0===t&&(t=!1);var n=e.length,r=0,s="",l=0,c=16,f=0,u=0,h=0,d=0,p=0;function g(t,n){for(var o=0,i=0;o<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)i=16*i+a-48;else if(a>=65&&a<=70)i=16*i+a-65+10;else{if(!(a>=97&&a<=102))break;i=16*i+a-97+10}r++,o++}return o<t&&(i=-1),i}function m(){if(s="",p=0,l=r,u=f,d=h,r>=n)return l=n,c=17;var t=e.charCodeAt(r);if(o(t)){do{r++,s+=String.fromCharCode(t),t=e.charCodeAt(r)}while(o(t));return c=15}if(i(t))return r++,s+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,s+="\n"),f++,h=r,c=14;switch(t){case 123:return r++,c=1;case 125:return r++,c=2;case 91:return r++,c=3;case 93:return r++,c=4;case 58:return r++,c=6;case 44:return r++,c=5;case 34:return r++,s=function(){for(var t="",o=r;;){if(r>=n){t+=e.substring(o,r),p=2;break}var a=e.charCodeAt(r);if(34===a){t+=e.substring(o,r),r++;break}if(92!==a){if(a>=0&&a<=31){if(i(a)){t+=e.substring(o,r),p=2;break}p=6}r++}else{if(t+=e.substring(o,r),++r>=n){p=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var s=g(4,!0);s>=0?t+=String.fromCharCode(s):p=4;break;default:p=5}o=r}}return t}(),c=10;case 47:var m=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!i(e.charCodeAt(r));)r++;return s=e.substring(m,r),c=12}if(42===e.charCodeAt(r+1)){r+=2;for(var b=n-1,y=!1;r<b;){var k=e.charCodeAt(r);if(42===k&&47===e.charCodeAt(r+1)){r+=2,y=!0;break}r++,i(k)&&(13===k&&10===e.charCodeAt(r)&&r++,f++,h=r)}return y||(r++,p=1),s=e.substring(m,r),c=13}return s+=String.fromCharCode(t),r++,c=16;case 45:if(s+=String.fromCharCode(t),++r===n||!a(e.charCodeAt(r)))return c=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&a(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&a(e.charCodeAt(r))))return p=3,e.substring(t,r);for(r++;r<e.length&&a(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&a(e.charCodeAt(r))){for(r++;r<e.length&&a(e.charCodeAt(r));)r++;n=r}else p=3;return e.substring(t,n)}(),c=11;default:for(;r<n&&v(t);)r++,t=e.charCodeAt(r);if(l!==r){switch(s=e.substring(l,r)){case"true":return c=8;case"false":return c=9;case"null":return c=7}return c=16}return s+=String.fromCharCode(t),r++,c=16}}function v(e){if(o(e)||i(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,s="",l=0,c=16,p=0},getPosition:function(){return r},scan:t?function(){var e;do{e=m()}while(e>=12&&e<=15);return e}:m,getToken:function(){return c},getTokenValue:function(){return s},getTokenOffset:function(){return l},getTokenLength:function(){return r-l},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return l-d},getTokenError:function(){return p}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function i(e){return 10===e||13===e||8232===e||8233===e}function a(e){return e>=48&&e<=57}function s(e,t,n){var o,i,a,s,f;if(t){for(s=t.offset,f=s+t.length,a=s;a>0&&!c(e,a-1);)a--;for(var u=f;u<e.length&&!c(e,u);)u++;i=e.substring(a,u),o=function(e,t){for(var n=0,r=0,o=t.tabSize||4;n<e.length;){var i=e.charAt(n);if(" "===i)r++;else{if("\t"!==i)break;r+=o}n++}return Math.floor(r/o)}(i,n)}else i=e,o=0,a=0,s=0,f=e.length;var h,d=function(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n);if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}(n,e),p=!1,g=0;h=n.insertSpaces?l(" ",n.tabSize||4):"\t";var m=r(i,!1),v=!1;function b(){return d+l(h,o+g)}function y(){var e=m.scan();for(p=!1;15===e||14===e;)p=p||14===e,e=m.scan();return v=16===e||0!==m.getTokenError(),e}var k=[];function w(t,n,r){!v&&n<f&&r>s&&e.substring(n,r)!==t&&k.push({offset:n,length:r-n,content:t})}var x=y();if(17!==x){var A=m.getTokenOffset()+a;w(l(h,o),a,A)}for(;17!==x;){for(var T=m.getTokenOffset()+m.getTokenLength()+a,C=y(),E="";!p&&(12===C||13===C);)w(" ",T,m.getTokenOffset()+a),T=m.getTokenOffset()+m.getTokenLength()+a,E=12===C?b():"",C=y();if(2===C)1!==x&&(g--,E=b());else if(4===C)3!==x&&(g--,E=b());else{switch(x){case 3:case 1:g++,E=b();break;case 5:case 12:E=b();break;case 13:E=p?b():" ";break;case 6:E=" ";break;case 10:if(6===C){E="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===C||13===C?E=" ":5!==C&&17!==C&&(v=!0);break;case 16:v=!0}!p||12!==C&&13!==C||(E=b())}w(E,T,m.getTokenOffset()+a),x=C}return k}function l(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}function c(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}var f;function u(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=f.DEFAULT);var r={type:"array",offset:-1,length:-1,children:[],parent:void 0};function o(e){"property"===r.type&&(r.length=e-r.offset,r=r.parent)}function i(e){return r.children.push(e),e}d(e,{onObjectBegin:function(e){r=i({type:"object",offset:e,length:-1,parent:r,children:[]})},onObjectProperty:function(e,t,n){(r=i({type:"property",offset:t,length:-1,parent:r,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:r})},onObjectEnd:function(e,t){o(e+t),r.length=e+t-r.offset,r=r.parent,o(e+t)},onArrayBegin:function(e,t){r=i({type:"array",offset:e,length:-1,parent:r,children:[]})},onArrayEnd:function(e,t){r.length=e+t-r.offset,r=r.parent,o(e+t)},onLiteralValue:function(e,t,n){i({type:p(e),offset:t,length:n,parent:r,value:e}),o(t+n)},onSeparator:function(e,t,n){"property"===r.type&&(":"===e?r.colonOffset=t:","===e&&o(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n);var a=r.children[0];return a&&delete a.parent,a}function h(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var i=o[r];if("string"==typeof i){if("object"!==n.type||!Array.isArray(n.children))return;for(var a=!1,s=0,l=n.children;s<l.length;s++){var c=l[s];if(Array.isArray(c.children)&&c.children[0].value===i){n=c.children[1],a=!0;break}}if(!a)return}else{var f=i;if("array"!==n.type||f<0||!Array.isArray(n.children)||f>=n.children.length)return;n=n.children[f]}}return n}}function d(e,t,n){void 0===n&&(n=f.DEFAULT);var o=r(e,!1);function i(e){return e?function(){return e(o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}function a(e){return e?function(t){return e(t,o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}var s=i(t.onObjectBegin),l=a(t.onObjectProperty),c=i(t.onObjectEnd),u=i(t.onArrayBegin),h=i(t.onArrayEnd),d=a(t.onLiteralValue),p=a(t.onSeparator),g=i(t.onComment),m=a(t.onError),v=n&&n.disallowComments,b=n&&n.allowTrailingComma;function y(){for(;;){var e=o.scan();switch(o.getTokenError()){case 4:k(14);break;case 5:k(15);break;case 3:k(13);break;case 1:v||k(11);break;case 2:k(12);break;case 6:k(16)}switch(e){case 12:case 13:v?k(10):g();break;case 16:k(1);break;case 15:case 14:break;default:return e}}}function k(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),m(e),t.length+n.length>0)for(var r=o.getToken();17!==r;){if(-1!==t.indexOf(r)){y();break}if(-1!==n.indexOf(r))break;r=y()}}function w(e){var t=o.getTokenValue();return e?d(t):l(t),y(),!0}return y(),17===o.getToken()?!!n.allowEmptyContent||(k(4,[],[]),!1):function e(){switch(o.getToken()){case 3:return function(){u(),y();for(var t=!1;4!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||k(4,[],[]),p(","),y(),4===o.getToken()&&b)break}else t&&k(6,[],[]);e()||k(4,[],[4,5]),t=!0}return h(),4!==o.getToken()?k(8,[4],[]):y(),!0}();case 1:return function(){s(),y();for(var t=!1;2!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||k(4,[],[]),p(","),y(),2===o.getToken()&&b)break}else t&&k(6,[],[]);(10!==o.getToken()?(k(3,[],[2,5]),0):(w(!1),6===o.getToken()?(p(":"),y(),e()||k(4,[],[2,5])):k(5,[],[2,5]),1))||k(4,[],[2,5]),t=!0}return c(),2!==o.getToken()?k(7,[2],[]):y(),!0}();case 10:return w(!0);default:return function(){switch(o.getToken()){case 11:var e=0;try{"number"!=typeof(e=JSON.parse(o.getTokenValue()))&&(k(2),e=0)}catch(e){k(2)}d(e);break;case 7:d(null);break;case 8:d(!0);break;case 9:d(!1);break;default:return!1}return y(),!0}()}}()?(17!==o.getToken()&&k(9,[],[]),!0):(k(4,[],[]),!1)}function p(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"object":return e?Array.isArray(e)?"array":"object":"null";default:return"null"}}function g(e,t,n){var r=m(e,t),o=t.offset,i=t.offset+t.content.length;if(0===t.length||0===t.content.length){for(;o>0&&!c(r,o-1);)o--;for(;i<r.length&&!c(r,i);)i++}for(var a=s(r,{offset:o,length:i-o},n),l=a.length-1;l>=0;l--){var f=a[l];r=m(r,f),o=Math.min(o,f.offset),i=Math.max(i,f.offset+f.length),i+=f.content.length-f.length}return[{offset:o,length:e.length-(r.length-i)-o,content:r.substring(o,i)}]}function m(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}n.r(t),n.d(t,{applyEdits:()=>j,createScanner:()=>v,findNodeAtLocation:()=>w,findNodeAtOffset:()=>x,format:()=>S,getLocation:()=>b,getNodePath:()=>A,getNodeValue:()=>T,modify:()=>P,parse:()=>y,parseTree:()=>k,printParseErrorCode:()=>O,stripComments:()=>E,visit:()=>C}),function(e){e.DEFAULT={allowTrailingComma:!1}}(f||(f={}));var v=r,b=function(e,t){var n=[],r=new Object,o=void 0,i={value:{},offset:0,length:0,type:"object",parent:void 0},a=!1;function s(e,t,n,r){i.value=e,i.offset=t,i.length=n,i.type=r,i.colonOffset=void 0,o=i}try{d(e,{onObjectBegin:function(e,i){if(t<=e)throw r;o=void 0,a=t>e,n.push("")},onObjectProperty:function(e,o,i){if(t<o)throw r;if(s(e,o,i,"property"),n[n.length-1]=e,t<=o+i)throw r},onObjectEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onArrayBegin:function(e,i){if(t<=e)throw r;o=void 0,n.push(0)},onArrayEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onLiteralValue:function(e,n,o){if(t<n)throw r;if(s(e,n,o,p(e)),t<=n+o)throw r},onSeparator:function(e,i,s){if(t<=i)throw r;if(":"===e&&o&&"property"===o.type)o.colonOffset=i,a=!1,o=void 0;else if(","===e){var l=n[n.length-1];"number"==typeof l?n[n.length-1]=l+1:(a=!0,n[n.length-1]=""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:n,previousNode:o,isAtPropertyKey:a,matches:function(e){for(var t=0,r=0;t<e.length&&r<n.length;r++)if(e[t]===n[r]||"*"===e[t])t++;else if("**"!==e[t])return!1;return t===e.length}}},y=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=f.DEFAULT);var r=null,o=[],i=[];function a(e){Array.isArray(o)?o.push(e):null!==r&&(o[r]=e)}return d(e,{onObjectBegin:function(){var e={};a(e),i.push(o),o=e,r=null},onObjectProperty:function(e){r=e},onObjectEnd:function(){o=i.pop()},onArrayBegin:function(){var e=[];a(e),i.push(o),o=e,r=null},onArrayEnd:function(){o=i.pop()},onLiteralValue:a,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n),o[0]},k=u,w=h,x=function e(t,n,r){if(void 0===r&&(r=!1),function(e,t,n){return void 0===n&&(n=!1),t>=e.offset&&t<e.offset+e.length||n&&t===e.offset+e.length}(t,n,r)){var o=t.children;if(Array.isArray(o))for(var i=0;i<o.length&&o[i].offset<=n;i++){var a=e(o[i],n,r);if(a)return a}return t}},A=function e(t){if(!t.parent||!t.parent.children)return[];var n=e(t.parent);if("property"===t.parent.type){var r=t.parent.children[0].value;n.push(r)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&n.push(o)}return n},T=function e(t){switch(t.type){case"array":return t.children.map(e);case"object":for(var n=Object.create(null),r=0,o=t.children;r<o.length;r++){var i=o[r],a=i.children[1];a&&(n[i.children[0].value]=e(a))}return n;case"null":case"string":case"number":case"boolean":return t.value;default:return}},C=d,E=function(e,t){var n,o,i=r(e),a=[],s=0;do{switch(o=i.getPosition(),n=i.scan()){case 12:case 13:case 17:s!==o&&a.push(e.substring(s,o)),void 0!==t&&a.push(i.getTokenValue().replace(/[^\r\n]/g,t)),s=i.getPosition()}}while(17!==n);return a.join("")};function O(e){switch(e){case 1:return"InvalidSymbol";case 2:return"InvalidNumberFormat";case 3:return"PropertyNameExpected";case 4:return"ValueExpected";case 5:return"ColonExpected";case 6:return"CommaExpected";case 7:return"CloseBraceExpected";case 8:return"CloseBracketExpected";case 9:return"EndOfFileExpected";case 10:return"InvalidCommentToken";case 11:return"UnexpectedEndOfComment";case 12:return"UnexpectedEndOfString";case 13:return"UnexpectedEndOfNumber";case 14:return"InvalidUnicode";case 15:return"InvalidEscapeCharacter";case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"}function S(e,t,n){return s(e,t,n)}function P(e,t,n,r){return function(e,t,n,r,o){for(var i,a=t.slice(),s=u(e,[]),l=void 0,c=void 0;a.length>0&&(c=a.pop(),void 0===(l=h(s,a))&&void 0!==n);)"string"==typeof c?((i={})[c]=n,n=i):n=[n];if(l){if("object"===l.type&&"string"==typeof c&&Array.isArray(l.children)){var f=h(l,[c]);if(void 0!==f){if(void 0===n){if(!f.parent)throw new Error("Malformed AST");var d=l.children.indexOf(f.parent),p=void 0,m=f.parent.offset+f.parent.length;return d>0?p=(x=l.children[d-1]).offset+x.length:(p=l.offset+1,l.children.length>1&&(m=l.children[1].offset)),g(e,{offset:p,length:m-p,content:""},r)}return g(e,{offset:f.offset,length:f.length,content:JSON.stringify(n)},r)}if(void 0===n)return[];var v=JSON.stringify(c)+": "+JSON.stringify(n),b=o?o(l.children.map((function(e){return e.children[0].value}))):l.children.length,y=void 0;return g(e,y=b>0?{offset:(x=l.children[b-1]).offset+x.length,length:0,content:","+v}:0===l.children.length?{offset:l.offset+1,length:0,content:v}:{offset:l.offset+1,length:0,content:v+","},r)}if("array"===l.type&&"number"==typeof c&&Array.isArray(l.children)){if(-1===c)return v=""+JSON.stringify(n),y=void 0,g(e,y=0===l.children.length?{offset:l.offset+1,length:0,content:v}:{offset:(x=l.children[l.children.length-1]).offset+x.length,length:0,content:","+v},r);if(void 0===n&&l.children.length>=0){var k=c,w=l.children[k];if(y=void 0,1===l.children.length)y={offset:l.offset+1,length:l.length-2,content:""};else if(l.children.length-1===k){var x,A=(x=l.children[k-1]).offset+x.length;y={offset:A,length:l.offset+l.length-2-A,content:""}}else y={offset:w.offset,length:l.children[k+1].offset-w.offset,content:""};return g(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof c?"index":"property")+" to parent of type "+l.type)}if(void 0===n)throw new Error("Can not delete in empty document");return g(e,{offset:s?s.offset:0,length:s?s.length:0,content:JSON.stringify(n)},r)}(e,t,n,r.formattingOptions,r.getInsertionIndex)}function j(e,t){for(var n=t.length-1;n>=0;n--)e=m(e,t[n]);return e}},252:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.provideWorkspaceTrustExtensionProposals=t.provideInstalledExtensionProposals=void 0;const r=n(549);t.provideInstalledExtensionProposals=async function(e,t,n,o){if(Array.isArray(e)){const i=(o?r.extensions.all:r.extensions.all.filter((e=>!(e.id.startsWith("vscode.")||"Microsoft.vscode-markdown"===e.id)))).filter((t=>-1===e.indexOf(t.id)));if(i.length)return i.map((e=>{const o=new r.CompletionItem(e.id),i=`"${e.id}"${t}`;return o.kind=r.CompletionItemKind.Value,o.insertText=i,o.range=n,o.filterText=i,o}));{const e=new r.CompletionItem(r.l10n.t("Example"));return e.insertText='"vscode.csharp"',e.kind=r.CompletionItemKind.Value,e.range=n,[e]}}return[]},t.provideWorkspaceTrustExtensionProposals=async function(e,t){if(Array.isArray(e)){const n=r.extensions.all.filter((e=>e.packageJSON.main)).filter((t=>-1===e.indexOf(t.id)));if(n.length)return n.map((e=>{const n=new r.CompletionItem(e.id),o=`"${e.id}": {\n\t"supported": false,\n\t"version": "${e.packageJSON.version}"\n}`;return n.kind=r.CompletionItemKind.Value,n.insertText=o,n.range=t,n.filterText=o,n}));{const e=new r.CompletionItem(r.l10n.t("Example"));return e.insertText='"vscode.csharp: {\n\t"supported": false,\n\t"version": "0.0.0"\n}`;"',e.kind=r.CompletionItemKind.Value,e.range=t,[e]}}return[]}},305:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsDocument=void 0;const r=n(549),o=n(516),i=n(252),a=/\[([^\[\]]*)\]/g;t.SettingsDocument=class{constructor(e){this.a=e}async provideCompletionItems(e,t){const n=(0,o.getLocation)(this.a.getText(),this.a.offsetAt(e));if("window.title"===n.path[0])return this.d(n,e);if("files.associations"===n.path[0])return this.f(n,e);if("files.exclude"===n.path[0]||"search.exclude"===n.path[0]||"explorer.autoRevealExclude"===n.path[0])return this.g(n,e);if("files.defaultLanguage"===n.path[0])return this.h(n,e);if("settingsSync.ignoredExtensions"===n.path[0]){let t=[];try{t=(0,o.parse)(this.a.getText())["settingsSync.ignoredExtensions"]}catch(e){}const r=this.b(n,e);return(0,i.provideInstalledExtensionProposals)(t,"",r,!0)}if("remote.extensionKind"===n.path[0]&&2===n.path.length&&n.isAtPropertyKey){let t=[];try{t=Object.keys((0,o.parse)(this.a.getText())["remote.extensionKind"])}catch(e){}const r=this.b(n,e);return(0,i.provideInstalledExtensionProposals)(t,n.previousNode?"":': [\n\t"ui"\n]',r,!0)}return"remote.portsAttributes"===n.path[0]&&2===n.path.length&&n.isAtPropertyKey?this.k(this.b(n,e)):this.j(n,e)}b(e,t){const n=e.previousNode;if(n){const e=this.a.positionAt(n.offset),o=this.a.positionAt(n.offset+n.length);if(e.isBeforeOrEqual(t)&&o.isAfterOrEqual(t))return new r.Range(e,o)}return new r.Range(t,t)}c(e,t){if(e.isAtPropertyKey)return!1;const n=e.previousNode;if(n){const e=this.a.offsetAt(t);return e>=n.offset&&e<=n.offset+n.length}return!0}async d(e,t){const n=[];if(!this.c(e,t))return n;let o=this.a.getWordRangeAtPosition(t,/\$\{[^"\}]*\}?/);(!o||o.start.isEqual(t)||o.end.isEqual(t)&&this.a.getText(o).endsWith("}"))&&(o=new r.Range(t,t));const i=t=>{const n="${"+t+"}";return e.previousNode?n:JSON.stringify(n)};return n.push(this.m(i("activeEditorShort"),o,r.l10n.t("the file name (e.g. myFile.txt)"))),n.push(this.m(i("activeEditorMedium"),o,r.l10n.t("the path of the file relative to the workspace folder (e.g. myFolder/myFileFolder/myFile.txt)"))),n.push(this.m(i("activeEditorLong"),o,r.l10n.t("the full path of the file (e.g. /Users/Development/myFolder/myFileFolder/myFile.txt)"))),n.push(this.m(i("activeFolderShort"),o,r.l10n.t("the name of the folder the file is contained in (e.g. myFileFolder)"))),n.push(this.m(i("activeFolderMedium"),o,r.l10n.t("the path of the folder the file is contained in, relative to the workspace folder (e.g. myFolder/myFileFolder)"))),n.push(this.m(i("activeFolderLong"),o,r.l10n.t("the full path of the folder the file is contained in (e.g. /Users/Development/myFolder/myFileFolder)"))),n.push(this.m(i("rootName"),o,r.l10n.t("name of the workspace (e.g. myFolder or myWorkspace)"))),n.push(this.m(i("rootPath"),o,r.l10n.t("file path of the workspace (e.g. /Users/Development/myWorkspace)"))),n.push(this.m(i("folderName"),o,r.l10n.t("name of the workspace folder the file is contained in (e.g. myFolder)"))),n.push(this.m(i("folderPath"),o,r.l10n.t("file path of the workspace folder the file is contained in (e.g. /Users/Development/myFolder)"))),n.push(this.m(i("appName"),o,r.l10n.t("e.g. VS Code"))),n.push(this.m(i("remoteName"),o,r.l10n.t("e.g. SSH"))),n.push(this.m(i("dirty"),o,r.l10n.t("an indicator for when the active editor has unsaved changes"))),n.push(this.m(i("separator"),o,r.l10n.t("a conditional separator (' - ') that only shows when surrounded by variables with values"))),n}async f(e,t){const n=[];if(2===e.path.length)if(""===e.path[1]){const o=this.b(e,t);n.push(this.n({label:r.l10n.t("Files with Extension"),documentation:r.l10n.t("Map all files matching the glob pattern in their filename to the language with the given identifier."),snippet:e.isAtPropertyKey?'"*.${1:extension}": "${2:language}"':'{ "*.${1:extension}": "${2:language}" }',range:o})),n.push(this.n({label:r.l10n.t("Files with Path"),documentation:r.l10n.t("Map all files matching the absolute path glob pattern in their path to the language with the given identifier."),snippet:e.isAtPropertyKey?'"/${1:path to file}/*.${2:extension}": "${3:language}"':'{ "/${1:path to file}/*.${2:extension}": "${3:language}" }',range:o}))}else if(this.c(e,t))return this.i(this.b(e,t));return n}async g(e,t){const n=[];if(1===e.path.length||2===e.path.length&&""===e.path[1]){const o=this.b(e,t);n.push(this.n({label:r.l10n.t("Files by Extension"),documentation:r.l10n.t("Match all files of a specific file extension."),snippet:2===e.path.length?'"**/*.${1:extension}": true':'{ "**/*.${1:extension}": true }',range:o})),n.push(this.n({label:r.l10n.t("Files with Multiple Extensions"),documentation:r.l10n.t("Match all files with any of the file extensions."),snippet:2===e.path.length?'"**/*.{ext1,ext2,ext3}": true':'{ "**/*.{ext1,ext2,ext3}": true }',range:o})),n.push(this.n({label:r.l10n.t("Files with Siblings by Name"),documentation:r.l10n.t("Match files that have siblings with the same name but a different extension."),snippet:2===e.path.length?'"**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" }':'{ "**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" } }',range:o})),n.push(this.n({label:r.l10n.t("Folder by Name (Top Level)"),documentation:r.l10n.t("Match a top level folder with a specific name."),snippet:2===e.path.length?'"${1:name}": true':'{ "${1:name}": true }',range:o})),n.push(this.n({label:r.l10n.t("Folders with Multiple Names (Top Level)"),documentation:r.l10n.t("Match multiple top level folders."),snippet:2===e.path.length?'"{folder1,folder2,folder3}": true':'{ "{folder1,folder2,folder3}": true }',range:o})),n.push(this.n({label:r.l10n.t("Folder by Name (Any Location)"),documentation:r.l10n.t("Match a folder with a specific name in any location."),snippet:2===e.path.length?'"**/${1:name}": true':'{ "**/${1:name}": true }',range:o}))}else if(2===e.path.length&&this.c(e,t)){const o=this.b(e,t);n.push(this.n({label:r.l10n.t("Files with Siblings by Name"),documentation:r.l10n.t("Match files that have siblings with the same name but a different extension."),snippet:'{ "when": "$(basename).${1:extension}" }',range:o}))}return n}async h(e,t){if(1===e.path.length&&this.c(e,t)){const n=this.b(e,t),o=await r.languages.getLanguages();return[this.m(JSON.stringify("${activeEditorLanguage}"),n,r.l10n.t("Use the language of the currently active text editor if any")),...o.map((e=>this.m(JSON.stringify(e),n)))]}return[]}async i(e){const t=await r.languages.getLanguages(),n=[];for(const o of t){const t=new r.CompletionItem(JSON.stringify(o));t.kind=r.CompletionItemKind.Property,t.range=e,n.push(t)}return n}async j(e,t){if(1===e.path.length&&e.isAtPropertyKey&&e.previousNode&&"string"==typeof e.previousNode.value&&e.previousNode.value.startsWith("[")){const n=this.a.positionAt(e.previousNode.offset+1),o=n.translate(void 0,e.previousNode.value.length),i=[],s=[];let l,c=a.exec(e.previousNode.value);for(;c?.length;)l=new r.Range(this.a.positionAt(e.previousNode.offset+1+c.index),this.a.positionAt(e.previousNode.offset+1+c.index+c[0].length)),s.push(l),l.contains(t)||i.push(c[1].trim()),c=a.exec(e.previousNode.value);const f=l?l.end:n;f.isBefore(o)&&s.push(new r.Range(f,o));const u=s.find((e=>e.contains(t)));if(u&&!u.isEqual(s[0])){const e=await r.languages.getLanguages(),t=[];for(const n of e)if(!i.includes(n)){const e=new r.CompletionItem(`[${n}]`);e.kind=r.CompletionItemKind.Property,e.range=u,t.push(e)}return t}}return[]}k(e){return[this.n({label:'"3000"',documentation:"Single Port Attribute",range:e,snippet:'\n  "${1:3000}": {\n    "label": "${2:Application}",\n    "onAutoForward": "${3:openPreview}"\n  }\n'}),this.n({label:'"5000-6000"',documentation:"Ranged Port Attribute",range:e,snippet:'\n  "${1:40000-55000}": {\n    "onAutoForward": "${2:ignore}"\n  }\n'}),this.n({label:'".+\\\\/server.js"',documentation:"Command Match Port Attribute",range:e,snippet:'\n  "${1:.+\\\\/server.js}": {\n    "label": "${2:Application}",\n    "onAutoForward": "${3:openPreview}"\n  }\n'})]}m(e,t,n,o){const i=new r.CompletionItem(e);return i.kind=r.CompletionItemKind.Value,i.detail=n,i.insertText=o||e,i.range=t,i}n(e){const t=new r.CompletionItem(e.label);return t.kind=r.CompletionItemKind.Value,t.documentation=e.documentation,t.insertText=new r.SnippetString(e.snippet),t.range=e.range,t}}},549:e=>{e.exports=require("vscode")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=n(516),o=n(549),i=n(305),a=n(252);function s(e){return o.languages.registerCompletionItemProvider({language:"jsonc",pattern:e},{provideCompletionItems(e,n,r){const i=(0,t.getLocation)(e.getText(),e.offsetAt(n));if(l(e,i,n)){if(e.fileName.endsWith(".code-workspace")&&!function(e,t){return["launch","tasks"].includes(e.path[0])}(i))return[];let t=e.getWordRangeAtPosition(n,/\$\{[^"\}]*\}?/);return(!t||t.start.isEqual(n)||t.end.isEqual(n)&&e.getText(t).endsWith("}"))&&(t=new o.Range(n,n)),[{label:"workspaceFolder",detail:o.l10n.t("The path of the folder opened in VS Code")},{label:"workspaceFolderBasename",detail:o.l10n.t("The name of the folder opened in VS Code without any slashes (/)")},{label:"relativeFile",detail:o.l10n.t("The current opened file relative to ${workspaceFolder}")},{label:"relativeFileDirname",detail:o.l10n.t("The current opened file's dirname relative to ${workspaceFolder}")},{label:"file",detail:o.l10n.t("The current opened file")},{label:"cwd",detail:o.l10n.t("The task runner's current working directory on startup")},{label:"lineNumber",detail:o.l10n.t("The current selected line number in the active file")},{label:"selectedText",detail:o.l10n.t("The current selected text in the active file")},{label:"fileDirname",detail:o.l10n.t("The current opened file's dirname")},{label:"fileExtname",detail:o.l10n.t("The current opened file's extension")},{label:"fileBasename",detail:o.l10n.t("The current opened file's basename")},{label:"fileBasenameNoExtension",detail:o.l10n.t("The current opened file's basename with no file extension")},{label:"defaultBuildTask",detail:o.l10n.t("The name of the default build task. If there is not a single default build task then a quick pick is shown to choose the build task.")},{label:"pathSeparator",detail:o.l10n.t("The character used by the operating system to separate components in file paths")},{label:"extensionInstallFolder",detail:o.l10n.t("The path where an an extension is installed."),param:"publisher.extension"}].map((e=>({label:`\${${e.label}}`,range:t,insertText:e.param?new o.SnippetString(`\${${e.label}:`).appendPlaceholder(e.param).appendText("}"):`\${${e.label}}`,detail:e.detail})))}return[]}})}function l(e,t,n){if(t.isAtPropertyKey)return!1;const r=t.previousNode;if(r&&"string"===r.type){const t=e.offsetAt(n);return t>r.offset&&t<r.offset+r.length}return!1}function c(e,t,n){const r=t.previousNode;if(r){const t=e.positionAt(r.offset),i=e.positionAt(r.offset+r.length);if(t.isBeforeOrEqual(n)&&i.isAfterOrEqual(n))return new o.Range(t,i)}return new o.Range(n,n)}e.activate=function(e){e.subscriptions.push(o.languages.registerCompletionItemProvider({language:"jsonc",pattern:"**/settings.json"},{provideCompletionItems:(e,t,n)=>new i.SettingsDocument(e).provideCompletionItems(t,n)})),e.subscriptions.push(o.languages.registerCompletionItemProvider({pattern:"**/extensions.json"},{provideCompletionItems(e,n,r){const o=(0,t.getLocation)(e.getText(),e.offsetAt(n));if("recommendations"===o.path[0]){const r=c(e,o,n),i=(0,t.parse)(e.getText());return(0,a.provideInstalledExtensionProposals)(i&&i.recommendations||[],"",r,!1)}return[]}}),o.languages.registerCompletionItemProvider({pattern:"**/*.code-workspace"},{provideCompletionItems(e,n,r){const o=(0,t.getLocation)(e.getText(),e.offsetAt(n));if("extensions"===o.path[0]&&"recommendations"===o.path[1]){const r=c(e,o,n),i=(0,t.parse)(e.getText()).extensions;return(0,a.provideInstalledExtensionProposals)(i&&i.recommendations||[],"",r,!1)}return[]}})),e.subscriptions.push(s("**/launch.json")),e.subscriptions.push(s("**/tasks.json")),e.subscriptions.push(s("**/*.code-workspace")),e.subscriptions.push(function(){const e=new Map([[{language:"jsonc",pattern:"**/keybindings.json"},[["*","when"]]],[{language:"json",pattern:"**/package.json"},[["contributes","menus","*","*","when"],["contributes","views","*","*","when"],["contributes","viewsWelcome","*","when"],["contributes","keybindings","*","when"],["contributes","keybindings","when"]]]]);return o.languages.registerCompletionItemProvider([...e.keys()],{async provideCompletionItems(n,r,i){const a=(0,t.getLocation)(n.getText(),n.offsetAt(r));if(a.isAtPropertyKey)return;let s=!1;for(const[t,r]of e)if(o.languages.match(t,n)&&r.some(a.matches.bind(a))){s=!0;break}if(!s||!l(n,a,r))return;const c=n.getWordRangeAtPosition(r,/[a-zA-Z.]+/)||new o.Range(r,r),f=c.with(void 0,r),u=await o.commands.executeCommand("getContextKeyInfo");if(i.isCancellationRequested||!u)return;const h=new o.CompletionList;for(const e of u){const t=new o.CompletionItem(e.key,o.CompletionItemKind.Constant);t.detail=e.type,t.range={replacing:c,inserting:f},t.documentation=e.description,h.items.push(t)}return h}})}())},o.languages.registerDocumentSymbolProvider({pattern:"**/launch.json",language:"jsonc"},{provideDocumentSymbols(e,n){const r=[];let i="",a="",s=0,l=0;return(0,t.visit)(e.getText(),{onObjectProperty:(e,t,n)=>{a=e},onLiteralValue:(e,t,n)=>{"name"===a&&(i=e)},onObjectBegin:(e,t)=>{l++,2===l&&(s=e)},onObjectEnd:(t,n)=>{i&&2===l&&r.push(new o.SymbolInformation(i,o.SymbolKind.Object,new o.Range(e.positionAt(s),e.positionAt(t)))),l--}}),r}},{label:"Launch Targets"})})();var o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/97dec172d3256f8ca4bfb2143f3f76b503ca0534/extensions/configuration-editing/dist/configurationEditingMain.js.map