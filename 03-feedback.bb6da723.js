let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i="Expected a function",o=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return o;if(b(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var i=f.test(e);return i||u.test(e)?l(e.slice(2),i?2:8):a.test(e)?o:+e}n=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),function(e,t,n){var o,r,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw TypeError(i);function S(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){var n=e-l,i=e-c;return void 0===l||n>=t||n<0||m&&i>=a}function T(){var e,n,i,o=p();if(j(o))return h(o);u=setTimeout(T,(e=o-l,n=o-c,i=t-e,m?v(i,a-n):i))}function h(e){return(u=void 0,d&&o)?S(e):(o=r=void 0,f)}function O(){var e,n=p(),i=j(n);if(o=arguments,r=this,l=n,i){if(void 0===u)return c=e=l,u=setTimeout(T,t),s?S(e):f;if(m)return u=setTimeout(T,t),S(l)}return void 0===u&&(u=setTimeout(T,t)),f}return t=y(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?g(y(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},O.flush=function(){return void 0===u?f:h(p())},O}(e,t,{leading:o,maxWait:t,trailing:r})};const S=document.querySelector("input[name=email]"),j=document.querySelector(".feedback-form"),T=document.querySelector("textarea[name=message]");let h="";localStorage.getItem("feedback-form-state")&&((e=JSON.parse(localStorage.getItem("feedback-form-state"))).email||e.message)&&(S.value=e.email,T.value=e.message);const O={email:S.value,message:T.value};j.addEventListener("input",n(function(){O.email=S.value,O.message=T.value,h=JSON.stringify(O),localStorage.setItem("feedback-form-state",h)},500)),j.addEventListener("submit",function(e){e.preventDefault(),O.email&&O.message?(e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(O)):alert("Заповніть усі поля")});
//# sourceMappingURL=03-feedback.bb6da723.js.map
