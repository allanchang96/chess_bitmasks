(this.webpackJsonpbitboard=this.webpackJsonpbitboard||[]).push([[0],{13:function(e,r,t){},8:function(e,r,t){"use strict";t.r(r);var n=t(3),a=t(4),c=t(7),l=t(6),u=t(1),i=t.n(u),s=t(5),o=t.n(s),h=(t(13),t(0));function v(e,r){for(var t=e.length-1,n=r.length-1,a=0,c="";t>=0||n>=0||a;){var l=0;t>=0&&(l+=e[t]-"0"),n>=0&&(l+=r[n]-"0"),(l+=a)>=10?(a=1,l-=10):a=0,t--,n--,c=l+c}return c}function b(e,r){for(var t=e.length-1,n=r.length-1,a=0,c="";t>=0;){var l=a+(e[t]-"0");a=0,n>=0&&(l-=r[n]-"0"),l<0&&(l+=10,a=-1),t--,n--,c=l+c}for(var u=0;"0"===c[u];)u++;return u===c.length?"0":c.substring(u)}for(var d=["1"],f=1;f<64;f++)d.push(v(d[f-1],d[f-1]));function j(e){var r="white",t=Math.floor(e.value/8);return e.click[e.value]?r="red":(t%2===0&&e.value%2===1||t%2===1&&e.value%2===0)&&(r="grey"),Object(h.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:r}})}function k(e){return Object(h.jsx)("div",{className:"square",style:{border:0,zIndex:-1},children:e.value})}var g=function(e){Object(c.a)(t,e);var r=Object(l.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=r.call(this,e)).state={click:Array(64).fill(!1),number:0},a}return Object(a.a)(t,[{key:"clear",value:function(){this.setState({click:Array(64).fill(!1),number:0})}},{key:"handleChange",value:function(e){var r=Array(64).fill(!1),t=e.target.value,n=!1;"-"===t[0]&&(n=!0,r[63]=!0,t=b(t=t.substring(1),"1"));for(var a=62;a>=0;a--)t.length>d[a].length||t.length===d[a].length&&t>=d[a]?(t=b(t,d[a]),n||(r[a]=!0)):n&&(r[a]=!0);"0"!==t&&(r=Array(64).fill(!1)),this.setState({click:r,number:e.target.value})}},{key:"computeSum",value:function(e){var r="0";if(e[63]){for(var t=0;t<63;t++)e[t]||(r=v(r,d[t]));r="-"+(r=v(r,"1"))}else for(var n=0;n<63;n++)e[n]&&(r=v(r,d[n]));return r}},{key:"renderLabel",value:function(e){return Object(h.jsx)(k,{value:e},e)}},{key:"renderSquare",value:function(e){var r=this;return Object(h.jsx)(j,{value:e,click:this.state.click,onClick:function(){var t=r.state.click.slice();t[e]=!t[e];var n=r.computeSum(t);r.setState({click:t,number:n})}},e)}},{key:"render",value:function(){for(var e=this,r=[],t=0;t<8;t++){for(var n=[],a=0;a<8;a++)n.push(this.renderSquare(8*t+a));n.push(this.renderLabel(8-t)),r.push(Object(h.jsx)("div",{className:"board-row",children:n},t))}for(var c=[],l=0;l<8;l++)c.push(this.renderLabel(String.fromCharCode(l+"a".charCodeAt(0))));return r.push(Object(h.jsx)("div",{className:"board-row",children:c},8)),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"board",children:r}),Object(h.jsx)("input",{type:"number",style:{width:"250px"},value:this.state.number,onChange:function(r){e.handleChange(r)}}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){return e.clear()},children:"CLEAR"})})]})}}]),t}(i.a.Component);o.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.a1ecc98d.chunk.js.map