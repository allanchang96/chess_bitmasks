(this.webpackJsonpbitboard=this.webpackJsonpbitboard||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var n=r(7),a=r(3),c=r(4),i=r(8),l=r(6),s=r(1),u=r.n(s),o=r(5),h=r.n(o),v=(r(14),r(0));function d(e,t){for(var r=e.length-1,n=t.length-1,a=0,c="";r>=0||n>=0||a;){var i=0;r>=0&&(i+=e[r]-"0"),n>=0&&(i+=t[n]-"0"),(i+=a)>=10?(a=1,i-=10):a=0,r--,n--,c=i+c}return c}function b(e,t){for(var r=e.length-1,n=t.length-1,a=0,c="";r>=0;){var i=a+(e[r]-"0");a=0,n>=0&&(i-=t[n]-"0"),i<0&&(i+=10,a=-1),r--,n--,c=i+c}for(var l=0;"0"===c[l];)l++;return l===c.length?"0":c.substring(l)}for(var f=["1"],j=1;j<64;j++)f.push(d(f[j-1],f[j-1]));function k(e){var t="white",r=Math.floor(e.value/8);return e.click[e.value]?t="red":(r%2===0&&e.value%2===1||r%2===1&&e.value%2===0)&&(t="grey"),Object(v.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:t}})}function m(e){return Object(v.jsx)("div",{className:"square",style:{border:0,zIndex:-1},children:e.value})}var p=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).state={click:Array(64).fill(!1),number:0},n}return Object(c.a)(r,[{key:"clear",value:function(){this.setState({click:Array(64).fill(!1),number:0})}},{key:"handleChange",value:function(e){var t=Array(64).fill(!1),r=e.target.value,n=!1;"-"===r[0]&&(n=!0,t[63]=!0,r=b(r=r.substring(1),"1"));for(var a=62;a>=0;a--)r.length>f[a].length||r.length===f[a].length&&r>=f[a]?(r=b(r,f[a]),n||(t[a]=!0)):n&&(t[a]=!0);"0"!==r&&(t=Array(64).fill(!1)),this.setState({click:t,number:e.target.value})}},{key:"computeSum",value:function(e){var t="0";if(e[63]){for(var r=0;r<63;r++)e[r]||(t=d(t,f[r]));t="-"+(t=d(t,"1"))}else for(var n=0;n<63;n++)e[n]&&(t=d(t,f[n]));return t}},{key:"computeBinary",value:function(){var e,t="",r=Object(n.a)(this.state.click);try{for(r.s();!(e=r.n()).done;){t+=e.value?"1":"0"}}catch(a){r.e(a)}finally{r.f()}return t}},{key:"computeHex",value:function(){for(var e="",t=0;t<63;t+=4){var r=0;r+=this.state.click[t]-"0",r+=2*(this.state.click[t+1]-"0"),r+=4*(this.state.click[t+2]-"0"),e+=(r+=8*(this.state.click[t+3]-"0")).toString(16)}return e.toUpperCase()}},{key:"renderLabel",value:function(e){return Object(v.jsx)(m,{value:e},e)}},{key:"renderSquare",value:function(e){var t=this;return Object(v.jsx)(k,{value:e,click:this.state.click,onClick:function(){var r=t.state.click.slice();r[e]=!r[e];var n=t.computeSum(r);t.setState({click:r,number:n})}},e)}},{key:"render",value:function(){for(var e=this,t=[],r=0;r<8;r++){for(var n=[],a=0;a<8;a++)n.push(this.renderSquare(8*r+a));n.push(this.renderLabel(8-r)),t.push(Object(v.jsx)("div",{className:"board-row",children:n},r))}for(var c=[],i=0;i<8;i++)c.push(this.renderLabel(String.fromCharCode(i+"a".charCodeAt(0))));return t.push(Object(v.jsx)("div",{className:"board-row",children:c},8)),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"board",children:t}),Object(v.jsx)("div",{children:"Binary"}),Object(v.jsx)("div",{children:this.computeBinary()}),Object(v.jsx)("div",{children:"Hexadecimal"}),Object(v.jsx)("div",{children:this.computeHex()}),Object(v.jsx)("div",{children:"Decimal"}),Object(v.jsx)("input",{type:"number",style:{width:"500px"},value:this.state.number,onChange:function(t){e.handleChange(t)}}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:function(){return e.clear()},children:"CLEAR"})})]})}}]),r}(u.a.Component);h.a.render(Object(v.jsx)(p,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.dd6aaa76.chunk.js.map