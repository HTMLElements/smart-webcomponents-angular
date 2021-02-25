
/* Smart UI v9.1.1 (2021-Feb) 
Copyright (c) 2011-2021 jQWidgets. 
License: https://htmlelements.com/license/ */ //

!function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=34)}({34:function(t,e){Smart.Utilities.Assign("Draw",class{constructor(t,e){const i=this;i.host=t,i.renderEngine=e||"",i.refresh();const r=["clear","removeElement","attr","getAttr","line","circle","rect","path","pieslice","pieSlicePath","text","measureText"];for(let t in r)i._addFn(Smart.Utilities.Draw.prototype,r[t])}_addFn(t,e){t[e]||(t[e]=function(){return this.renderer[e].apply(this.renderer,arguments)})}_initRenderer(t){return this.createRenderer(this,t)}_internalRefresh(){const t=this;if(t.renderer||(t.host.innerHTML="",t._initRenderer(t.host)),"none"===window.getComputedStyle(t.host).display)return;const e=t.renderer;if(!e)return;const i=e.getRect();t._render({x:1,y:1,width:i.width,height:i.height})}_render(t){this._plotRect=t}refresh(){this._internalRefresh()}getSize(){const t=this._plotRect;return{width:t.width,height:t.height}}toGreyScale(t){if(-1===t.indexOf("#"))return t;const e=this.cssToRgb(t);e[0]=e[1]=e[2]=Math.round(.3*e[0]+.59*e[1]+.11*e[2]);const i=this.rgbToHex(e[0],e[1],e[2]);return"#"+i[0]+i[1]+i[2]}decToHex(t){return t.toString(16)}hexToDec(t){return parseInt(t,16)}rgbToHex(t,e,i){return[this.decToHex(t),this.decToHex(e),this.decToHex(i)]}hexToRgb(t,e,i){return[this.hexToDec(t),this.hexToDec(e),this.hexToDec(i)]}cssToRgb(t){return t.indexOf("rgb")<=-1?this.hexToRgb(t.substring(1,3),t.substring(3,5),t.substring(5,7)):t.substring(4,t.length-1).split(",")}hslToRgb(t){let e,i,r;const s=parseFloat(t[0]),n=parseFloat(t[1]),a=parseFloat(t[2]);if(0===n)e=i=r=a;else{const t=a<.5?a*(1+n):a+n-a*n,h=2*a-t;e=this.hueToRgb(h,t,s+1/3),i=this.hueToRgb(h,t,s),r=this.hueToRgb(h,t,s-1/3)}return[255*e,255*i,255*r]}hueToRgb(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}rgbToHsl(t){const e=parseFloat(t[0])/255,i=parseFloat(t[1])/255,r=parseFloat(t[2])/255,s=Math.max(e,i,r),n=Math.min(e,i,r);let a,h,o=(s+n)/2;if(s===n)a=h=0;else{const t=s-n;switch(h=o>.5?t/(2-s-n):t/(s+n),s){case e:a=(i-r)/t+(i<r?6:0);break;case i:a=(r-e)/t+2;break;case r:a=(e-i)/t+4}a/=6}return[a,h,o]}swap(t,e){const i=t;t=e,e=i}getNum(t){if(t.constructor!==Array){if(isNaN(t))return 0}else for(let e=0;e<t.length;e++)if(!isNaN(t[e]))return t[e];return 0}_ptRotate(t,e,i,r,s){const n=Math.sqrt(Math.pow(Math.abs(t-i),2)+Math.pow(Math.abs(e-r),2)),a=Math.asin((t-i)/n)+s;return{x:t=i+Math.cos(a)*n,y:e=r+Math.sin(a)*n}}log(t,e){return Math.log(t)/(e?Math.log(e):1)}_mod(t,e){const i=Math.abs(t>e?e:t);let r=1;if(0!==i)for(;i*r<100;)r*=10;return(t*=r)%(e*=r)/r}createRenderer(t,e){const i=t;let r=i.renderer=null;return document.createElementNS&&"HTML5"!==i.renderEngine&&(r=new Smart.Utilities.SvgRenderer(this)),null!==r||"HTML5"!==i.renderEngine&&void 0!==i.renderEngine||(r=new Smart.Utilities.HTML5Renderer(this)),r.init(e),i.renderer=r,r}getByPriority(t){let e=void 0;for(let i=0;i<t.length;i++){const r=t[i];if(null!=r&&""!==r){e=r;break}}return e}get(t,e,i){return void 0!==i?t[e][i]:t[e]}min(t,e){let i=NaN;for(let r=0;r<t.length;r++){const s=this.get(t,r,e);(isNaN(i)||s<i)&&(i=s)}return i}max(t,e){let i=NaN;for(let r=0;r<t.length;r++){const s=this.get(t,r,e);(isNaN(i)||s>i)&&(i=s)}return i}sum(t,e){let i=0;for(let r=0;r<t.length;r++){const s=this.get(t,r,e);isNaN(s)||(i+=s)}return i}count(t,e){let i=0;for(let r=0;r<t.length;r++){const s=this.get(t,r,e);isNaN(s)||i++}return i}avg(t,e){return this.sum(t,e)/Math.max(1,this.count(t,e))}filter(t,e){if(!e)return t;const i=[];for(let r=0;r<t.length;r++)e(t[r])&&i.push(t[r]);return i}scale(t,e,i,r){if(isNaN(t))return NaN;if((t<Math.min(e.min,e.max)||t>Math.max(e.min,e.max))&&(!r||!0!==r.ignore_range))return NaN;let s=NaN,n=1;if(void 0===e.type||"logarithmic"!==e.type){let i=Math.abs(e.max-e.min);i||(i=1),n=Math.abs(t-Math.min(e.min,e.max))/i}else if("logarithmic"===e.type){let i=e.base;isNaN(i)&&(i=10);let r=Math.min(e.min,e.max);r<=0&&(r=1);let s=Math.max(e.min,e.max);s<=0&&(s=1);const a=this.log(s,i);s=Math.pow(i,a);const h=this.log(r,i);r=Math.pow(i,h);const o=this.log(t,i);n=Math.abs(o-h)/(a-h)}if("logarithmic"===i.type){let t=i.base;isNaN(t)&&(t=10);const e=this.log(i.max,t),r=this.log(i.min,t);i.flip&&(n=1-n);const a=Math.min(r,e)+n*Math.abs(e-r);s=Math.pow(t,a)}else s=Math.min(i.min,i.max)+n*Math.abs(i.max-i.min),i.flip&&(s=Math.max(i.min,i.max)-s+i.min);return s}axis(t,e,i){if(i<=1)return[e,t];(isNaN(i)||i<2)&&(i=2);let r=0;for(;Math.round(t)!==t&&Math.round(e)!==e&&r<10;)t*=10,e*=10,r++;let s=(e-t)/i;for(;r<10&&Math.round(s)!==s;)t*=10,e*=10,s*=10,r++;const n=[1,2,5];let a,h=0;for(;;){let t=h%n.length,e=Math.floor(h/n.length),i=Math.pow(10,e)*n[t];if(t=(h+1)%n.length,e=Math.floor((h+1)/n.length),a=Math.pow(10,e)*n[t],s>=i&&s<a)break;h++}const o=a,l=[];let d=this.renderer._rnd(t,o,!1);const c=r<=0?1:Math.pow(10,r);for(;d<e+o;)l.push(d/c),d+=o;return l}_widgetToImage(t,e,i,r,s){let n=t;if(!n)return!1;void 0!==i&&""!==i||(i="image."+e);let a=n.renderEngine,h=n.animation;if(n.animation="none",n.renderEngine="HTML5",n.renderEngine!==a)try{n.refresh()}catch(t){return n.renderEngine=a,n.refresh(),n.animation=h,!1}let o=n.renderer.getContainer().firstElementChild,l=!0;"function"==typeof r&&(l=r(t,o));let d=!0;return l&&(d=this.exportImage(t,o,e,i,s)),n.renderEngine!==a&&(n.renderEngine=a,n.refresh(),n.animation=h),d}_saveAsImage(t,e){return this._widgetToImage(this,t,e)}saveAsPNG(t){return this._saveAsImage("png",t)}saveAsJPEG(t){return this._saveAsImage("jpeg",t)}exportImage(t,e,i,r,s){if(!e)return!1;let n="pdf"===i.toLowerCase();n&&(i="jpeg"),void 0!==r&&""!==r||(r="image."+i);let a=!0;if("print"!==i){try{if(e)if(n){s=s||"portrait";const n={content:{image:e.toDataURL("image/"+i),width:Math.min(e.width/1.35,"portrait"===s?515:762)},pageOrientation:s};try{pdfMake.createPdf(n).download(r)}catch(e){t.error(t.localize("missingReference",{files:"pdfmake.min.js"}))}}else{Smart.Utilities.DataExporter||t.error(t.localize("missingReference",{files:"smart.export.js"}));const s=new Smart.Utilities.DataExporter;e.toBlob((function(t){s.downloadFile(t,i,r)}))}}catch(t){a=!1}return a}{const t=window.open("","","width=800,height=500"),i=t.document.open(),r='<!DOCTYPE html><html><head><meta charset="utf-8" /><title>jQWidgets Chart</title></head><body><img src="'+e.toDataURL()+'" /></html>';try{i.write(r),i.close(),setTimeout((function(){t.print(),t.close()}),100)}catch(t){}}}}),Smart.Utilities.Assign("Renderer",class{constructor(t){this.draw=t,this._gradients={},this._toRadiansCoefficient=2*Math.PI/360}pieSlicePath(t,e,i,r,s,n,a){r||(r=1);const h=Math.abs(s-n),o=h>180?1:0;h>=360&&(n=s+359.99);const l=s*this._toRadiansCoefficient,d=n*this._toRadiansCoefficient;let c=t,u=t,p=e,g=e;const f=!isNaN(i)&&i>0;f&&(a=0);const m=Math.cos(l),_=Math.sin(l),x=Math.cos(d),M=Math.sin(d);if(a+i>0){if(a>0){const i=(h/2+s)*this._toRadiansCoefficient;t+=a*Math.cos(i),e-=a*Math.sin(i)}f&&(c=t+i*m,p=e-i*_,u=t+i*x,g=e-i*M)}const y=t+r*m,w=t+r*x,v=e-r*_,N=e-r*M;let b="";const C=Math.abs(Math.abs(n-s)-360)>.02;return f?(b="M "+u+","+g,b+=" a"+i+","+i,b+=" 0 "+o+",1 "+(c-u)+","+(p-g),b+=C?" L"+y+","+v:" M"+y+","+v,b+=" a"+r+","+r,b+=" 0 "+o+",0 "+(w-y)+","+(N-v),C&&(b+=" Z")):(b="M "+w+","+N,b+=" a"+r+","+r,b+=" 0 "+o+",1 "+(y-w)+","+(v-N),C&&(b+=" L"+t+","+e,b+=" Z")),b}measureText(t,e,i,r){const s=this._getTextParts(t,e,i),n=s.width;let a=s.height;!1===r&&(a/=.6);let h={};if(isNaN(e)&&(e=0),0===e)h={width:this._rup(n),height:this._rup(a)};else{const t=e*Math.PI*2/360,i=Math.abs(Math.sin(t)),r=Math.abs(Math.cos(t)),s=Math.abs(n*i+a*r),o=Math.abs(n*r+a*i);h={width:this._rup(o),height:this._rup(s)}}return r&&(h.textPartsInfo=s),h}alignTextInRect(t,e,i,r,s,n,a,h,o,l){const d=o*Math.PI*2/360,c=Math.sin(d),u=Math.cos(d),p=s*c,g=s*u;"center"===a||""===a||"undefined"===a?t+=i/2:"right"===a&&(t+=i),"center"===h||"middle"===h||""===h||"undefined"===h?e+=r/2:"bottom"===h?e+=r-n/2:"top"===h&&(e+=n/2);let f="middle";-1!==(l=l||"").indexOf("top")?f="top":-1!==l.indexOf("bottom")&&(f="bottom");let m="center";return-1!==l.indexOf("left")?m="left":-1!==l.indexOf("right")&&(m="right"),"center"===m?(t-=g/2,e-=p/2):"right"===m&&(t-=g,e-=p),"top"===f?(t-=n*c,e+=n*u):"middle"===f&&(t-=n*c/2,e+=n*u/2),{x:t=this._rup(t),y:e=this._rup(e)}}adjustColor(t,e){if("string"!=typeof t)return"#000000";if(-1===t.indexOf("#"))return t;const i=this.draw;let r=i.cssToRgb(t);const s=i.rgbToHsl(r);s[2]=Math.min(1,s[2]*e),s[1]=Math.min(1,s[1]*e*1.1),r=i.hslToRgb(s),t="#";for(let e=0;e<3;e++){let s=Math.round(r[e]);s=i.decToHex(s),1===s.toString().length&&(t+="0"),t+=s}return t.toUpperCase()}_rup(t){let e=Math.round(t);return t>e&&e++,e}_ptdist(t,e,i,r){return Math.sqrt((i-t)*(i-t)+(r-e)*(r-e))}_rnd(t,e,i,r){if(isNaN(t))return t;void 0===r&&(r=!0);let s=t-(!0===r?t%e:this._mod(t,e));return t===s?s:(i?t>s&&(s+=e):s>t&&(s-=e),1===e?Math.round(s):s)}_ptrnd(t){if(!document.createElementNS)return Math.round(t)===t?t:this._rnd(t,1,!1,!0);const e=this._rnd(t,.5,!1,!0);return.5!==Math.abs(e-Math.round(e))?e>t?e-.5:e+.5:e}_getContrastColor(t){if(void 0===t)return;let e=this.draw.hexToRgb(t.slice(1,3),t.slice(3,5),t.slice(5,7));return(.299*e[0]+.61*e[1]+.114*e[2])/255>.6?"#000000":"#FFFFFF"}}),Smart.Utilities.Assign("SvgRenderer",class extends Smart.Utilities.Renderer{constructor(t){super(t);this._svgns="http://www.w3.org/2000/svg",this._openGroups=[],this._clipId=0}init(t){const e=document.createElement("div");e.className="drawContainer",e.onselectstart=function(){return!1},t.appendChild(e),this.host=t,this.container=e;try{const t=document.createElementNS(this._svgns,"svg");t.setAttribute("version","1.1"),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("overflow","hidden"),e.appendChild(t),this.canvas=t}catch(t){return!1}return this._id=(new Date).getTime(),this.clear(),!0}getType(){return"SVG"}refresh(){}getRect(){return{x:0,y:0,width:Math.max(this._rup(this.host.offsetWidth)-1,0),height:Math.max(this._rup(this.host.offsetHeight)-1,0)}}getContainer(){return this.container}clear(){for(;this.canvas.childNodes.length>0;)this.removeElement(this.canvas.firstElementChild);this._defaultParent=void 0,this._defs=document.createElementNS(this._svgns,"defs"),this._gradients={},this.canvas.appendChild(this._defs)}removeElement(t){if(void 0!==t)try{for(;t.firstChild;)this.removeElement(t.firstChild);t.parentNode?t.parentNode.removeChild(t):this.canvas.removeChild(t)}catch(t){}}beginGroup(){const t=this._activeParent(),e=document.createElementNS(this._svgns,"g");return t.appendChild(e),this._openGroups.push(e),e}endGroup(){0!==this._openGroups.length&&this._openGroups.pop()}_activeParent(){return 0===this._openGroups.length?this.canvas:this._openGroups[this._openGroups.length-1]}createClipRect(t){const e=document.createElementNS(this._svgns,"clipPath"),i=document.createElementNS(this._svgns,"rect");return this.attr(i,{x:t.x,y:t.y,width:t.width,height:t.height,fill:"none"}),this._clipId=this._clipId||0,e.id="cl"+this._id+"_"+(++this._clipId).toString(),e.appendChild(i),this._defs.appendChild(e),e}getWindowHref(){let t=window.location.href;return t?(t=t.replace(/([\('\)])/g,"\\$1"),t=t.replace(/#.*$/,""),t):t}setClip(t,e){const i="url("+this.getWindowHref()+"#"+e.id+")";return this.attr(t,{"clip-path":i})}addHandler(t,e,i){t.addEventListener(e,i)}removeHandler(){}on(t,e,i){this.addHandler(t,e,i)}off(t,e,i){this.removeHandler(t,e,i)}shape(t,e){const i=document.createElementNS(this._svgns,t);if(i){for(let t in e)i.setAttribute(t,e[t]);return this._activeParent().appendChild(i),i}}_getTextParts(t,e,i){const r={width:0,height:0,parts:[]};if(void 0===t)return r;const s=t.toString().split("<br>"),n=this._activeParent(),a=document.createElementNS(this._svgns,"text");this.attr(a,i);for(let t=0;t<s.length;t++){const e=s[t],i=a.ownerDocument.createTextNode(e);let h;a.appendChild(i),n.appendChild(a);try{h=a.getBBox()}catch(t){}const o=this._rup(h.width),l=this._rup(.6*h.height);a.removeChild(i),r.width=Math.max(r.width,o),r.height+=l+(t>0?4:0),r.parts.push({width:o,height:l,text:e})}return n.removeChild(a),r}_measureText(t,e,i,r){return super.measureText(t,e,i,r)}measureText(t,e,i){return this._measureText(t,e,i,!1)}text(t,e,i,r,s,n,a,h,o,l,d){const c=this._measureText(t,n,a,!0,this).textPartsInfo,u=c.parts,p=this._getContrastColor(arguments[11]);let g;if(o||(o="center"),l||(l="center"),(u.length>1||h)&&(g=this.beginGroup()),h){const t=this.createClipRect({x:this._rup(e)-1,y:this._rup(i)-1,width:this._rup(r)+2,height:this._rup(s)+2});this.setClip(g,t)}let f=this._activeParent(),m=0,_=0;m=c.width,_=c.height,(isNaN(r)||r<=0)&&(r=m),(isNaN(s)||s<=0)&&(s=_);const x=r||0,M=s||0;let y=0;if(!n||0===n){let t;i+=_,"center"===l||"middle"===l?i+=(M-_)/2:"bottom"===l&&(i+=M-_),r||(r=m),s||(s=_),f=this._activeParent();for(let r=u.length-1;r>=0;r--){t=document.createElementNS(this._svgns,"text"),this.attr(t,a),this.attr(t,{cursor:"default"});const s=t.ownerDocument.createTextNode(u[r].text);t.appendChild(s);let n=e;const h=u[r].width,l=u[r].height;"center"===o?n+=(x-h)/2:"right"===o&&(n+=x-h),this.attr(t,{x:this._rup(n),y:this._rup(i+y),width:this._rup(h),height:this._rup(l)}),void 0!==p&&(t.style.fill=p),f.appendChild(t),y-=u[r].height+4}return g?(this.endGroup(),g):t}const w=this.alignTextInRect(e,i,r,s,m,_,o,l,n,d);e=w.x,i=w.y;const v=this.shape("g",{transform:"translate("+e+","+i+")"}),N=this.shape("g",{transform:"rotate("+n+")"});v.appendChild(N),y=0;for(let t=u.length-1;t>=0;t--){const e=document.createElementNS(this._svgns,"text");this.attr(e,a),this.attr(e,{cursor:"default"});const i=e.ownerDocument.createTextNode(u[t].text);e.appendChild(i);let r=0;const s=u[t].width,n=u[t].height;"center"===o?r+=(c.width-s)/2:"right"===o&&(r+=c.width-s),this.attr(e,{x:this._rup(r),y:this._rup(y),width:this._rup(s),height:this._rup(n)}),N.appendChild(e),y-=n+4}return f.appendChild(v),g&&this.endGroup(),v}line(t,e,i,r,s){const n=this.shape("line",{x1:t,y1:e,x2:i,y2:r});return this.attr(n,s),n}path(t,e){const i=this.shape("path");return i.setAttribute("d",t),e&&this.attr(i,e),i}rect(t,e,i,r,s){t=this._ptrnd(t),e=this._ptrnd(e),i=Math.max(1,this._rnd(i,1,!1)),r=Math.max(1,this._rnd(r,1,!1));const n=this.shape("rect",{x:t,y:e,width:i,height:r});return s&&this.attr(n,s),n}circle(t,e,i,r){const s=this.shape("circle",{cx:t,cy:e,r:i});return r&&this.attr(s,r),s}pieslice(t,e,i,r,s,n,a,h){const o=this.pieSlicePath(t,e,i,r,s,n,a),l=this.shape("path");return l.setAttribute("d",o),h&&this.attr(l,h),l}attr(t,e){if(t&&e)for(let i in e)"textContent"===i?t.textContent=e[i]:"width"===i||"height"===i?t.setAttribute(i,Math.max(0,e[i])):t.setAttribute(i,e[i])}removeAttr(t,e){if(t&&e)for(let i in e)"textContent"===i?t.textContent="":t.removeAttribute(e[i])}getAttr(t,e){return t.getAttribute(e)}_toLinearGradient(t,e,i){const r="grd"+this._id+t.replace("#","")+(e?"v":"h"),s="url("+this.getWindowHref()+"#"+r+")";if(this._gradients[s])return s;const n=document.createElementNS(this._svgns,"linearGradient");this.attr(n,{x1:"0%",y1:"0%",x2:e?"0%":"100%",y2:e?"100%":"0%",id:r});for(let e=0;e<i.length;e++){const r=i[e],s=document.createElementNS(this._svgns,"stop"),a="stop-color:"+this.adjustColor(t,r[1]);this.attr(s,{offset:r[0]+"%",style:a}),n.appendChild(s)}return this._defs.appendChild(n),this._gradients[s]=!0,s}_toRadialGradient(t,e,i){const r="grd"+this._id+t.replace("#","")+"r"+(void 0!==i?i.key:""),s="url("+this.getWindowHref()+"#"+r+")";if(this._gradients[s])return s;const n=document.createElementNS(this._svgns,"radialGradient");void 0===i?this.attr(n,{cx:"50%",cy:"50%",r:"100%",fx:"50%",fy:"50%",id:r}):this.attr(n,{cx:i.x,cy:i.y,r:i.outerRadius,id:r,gradientUnits:"userSpaceOnUse"});for(let i=0;i<e.length;i++){const r=e[i],s=document.createElementNS(this._svgns,"stop"),a="stop-color:"+this.adjustColor(t,r[1]);this.attr(s,{offset:r[0]+"%",style:a}),n.appendChild(s)}return this._defs.appendChild(n),this._gradients[s]=!0,s}}),Smart.Utilities.Assign("HTML5Renderer",class extends Smart.Utilities.Renderer{constructor(t){super(t);this._renderers=new Smart.Utilities.HTML5RenderHelpers(this)}init(t){try{this.host=t;const e=document.createElement("div"),i=document.createElement("canvas");e.className="chartContainer",e.style.position="relative",e.onselectstart=function(){return!1},i.id="__smartCanvasWrap",i.style.width="100%",i.style.height="100%",e.appendChild(i),t.appendChild(e),this.canvas=i,i.width=t.offsetWidth,i.height=t.offsetHeight,this.ctx=i.getContext("2d"),this._elements={},this._maxId=0,this._gradientId=0,this._gradients={},this._currentPoint={x:0,y:0},this._lastCmd="",this._pos=0}catch(t){return!1}return!0}getType(){return"HTML5"}getContainer(){return this.host.getElementsByClassName("chartContainer")[0]}getRect(){return{x:0,y:0,width:this.canvas.width-1,height:this.canvas.height-1}}beginGroup(){}endGroup(){}setClip(){}createClipRect(){}addHandler(){}removeHandler(){}on(t,e,i){this.addHandler(t,e,i)}off(t,e,i){this.removeHandler(t,e,i)}clear(){this._elements={},this._maxId=0,this._renderers._gradients={},this._gradientId=0}removeElement(t){void 0!==t&&this._elements[t.id]&&delete this._elements[t.id]}shape(t,e){let i={type:t,id:this._maxId++};for(let t in e)i[t]=e[t];return this._elements[i.id]=i,i}attr(t,e){for(let i in e)t[i]=e[i]}removeAttr(t,e){for(let i in e)delete t[e[i]]}rect(t,e,i,r,s){if(isNaN(t))throw'Invalid value for "x"';if(isNaN(e))throw'Invalid value for "y"';if(isNaN(i))throw'Invalid value for "width"';if(isNaN(r))throw'Invalid value for "height"';let n=this.shape("rect",{x:t,y:e,width:i,height:r});return s&&this.attr(n,s),n}path(t,e){let i=this.shape("path",e);return this.attr(i,{d:t}),i}line(t,e,i,r,s){return this.path("M "+t+","+e+" L "+i+","+r,s)}circle(t,e,i,r){let s=this.shape("circle",{x:t,y:e,r:i});return r&&this.attr(s,r),s}pieslice(t,e,i,r,s,n,a,h){let o=this.path(this.pieSlicePath(t,e,i,r,s,n,a),h);return this.attr(o,{x:t,y:e,innerRadius:i,outerRadius:r,angleFrom:s,angleTo:n}),o}_getCSSStyle(t){const e=document.createElement("div");e.className=t,e.style.position="absolute",e.style.visibility="hidden",this.host.appendChild(e);let i=window.getComputedStyle(e);return i={color:i.color,fontFamily:i.fontFamily,fontSize:i.fontSize,fontWeight:i.fontWeight},this.host.removeChild(e),i}_getTextParts(t,e,i){let r="Arial",s="10pt",n="";if(i&&i.class){let t=this._getCSSStyle(i.class);t.fontSize&&(s=t.fontSize),t.fontFamily&&(r=t.fontFamily),t.fontWeight&&(n=t.fontWeight)}this.ctx.font=n+" "+s+" "+r;let a={width:0,height:0,parts:[]},h=t.toString().split("<br>");for(let t=0;t<h.length;t++){let e=h[t],i=this.ctx.measureText(e).width,r=document.createElement("span");r.className="chart",r.font=this.ctx.font,r.textContent=e,this.host.appendChild(r);let s=.6*r.offsetHeight;this.host.removeChild(r),a.width=Math.max(a.width,this._rup(i)),a.height+=s+(t>0?4:0),a.parts.push({width:i,height:s,text:e})}return a}_measureText(t,e,i,r){return super.measureText(t,e,i,r)}measureText(t,e,i){return this._measureText(t,e,i,!1)}text(t,e,i,r,s,n,a,h,o,l,d){let c=this.shape("text",{text:t,x:e,y:i,width:r,height:s,angle:n,clip:h,halign:o,valign:l,rotateAround:d});if(a&&this.attr(c,a),c.fontFamily="Arial",c.fontSize="10pt",c.fontWeight="",c.color=this._getContrastColor(arguments[11]),a&&a.class){let t=this._getCSSStyle(a.class);c.fontFamily=t.fontFamily||c.fontFamily,c.fontSize=t.fontSize||c.fontSize,c.fontWeight=t.fontWeight||c.fontWeight,c.color=c.color||t.color}c.color=c.color||"#000000";let u=this._measureText(t,0,a,!0);return this.attr(c,{textPartsInfo:u.textPartsInfo,textWidth:u.width,textHeight:u.height}),(r<=0||isNaN(r))&&this.attr(c,{width:u.width}),(s<=0||isNaN(s))&&this.attr(c,{height:u.height}),c}_toLinearGradient(t,e,i){if(this._renderers._gradients[t])return t;let r=[];for(let e=0;e<i.length;e++)r.push({percent:i[e][0]/100,color:this.adjustColor(t,i[e][1])});let s="gr"+this._gradientId++;return this.createGradient(s,e?"vertical":"horizontal",r),s}_toRadialGradient(t,e){if(this._renderers._gradients[t])return t;let i=[];for(let r=0;r<e.length;r++)i.push({percent:e[r][0]/100,color:this.adjustColor(t,e[r][1])});let r="gr"+this._gradientId++;return this.createGradient(r,"radial",i),r}createGradient(t,e,i){this._renderers.createGradient(this,t,e,i)}refresh(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(let t in this._elements){let e=this._elements[t];this._renderers.setFillStyle(this,e),this._renderers.setStroke(this,e),this._renderers[this._elements[t].type](this.ctx,e)}}}),Smart.Utilities.Assign("HTML5RenderHelpers",class{constructor(t){this.HTML5Renderer=t,this._cmds="mlcazq"}ptrnd(t){if(.5===Math.abs(Math.round(t)-t))return t;let e=Math.round(t);return e<t&&(e-=1),e+.5}createGradient(t,e,i,r){t._gradients[e]={orientation:i,colorStops:r}}setStroke(t,e){let i=t.ctx,r=e["stroke-width"];i.strokeStyle=e.stroke||"transparent",i.lineWidth=0===r?.01:void 0!==r?r:1,void 0!==e["fill-opacity"]?i.globalAlpha=e["fill-opacity"]:void 0!==e.opacity?i.globalAlpha=e.opacity:i.globalAlpha=1,i.setLineDash&&(e["stroke-dasharray"]?i.setLineDash(e["stroke-dasharray"].split(",")):i.setLineDash([]))}setFillStyle(t,e){let i=t.ctx;if(i.fillStyle="transparent",void 0!==e["fill-opacity"]?i.globalAlpha=e["fill-opacity"]:void 0!==e.opacity?i.globalAlpha=e.opacity:i.globalAlpha=1,e.fill&&-1===e.fill.indexOf("#")&&t._gradients[e.fill]){let r,s="horizontal"!==t._gradients[e.fill].orientation,n="radial"===t._gradients[e.fill].orientation,a=this.ptrnd(e.x),h=this.ptrnd(e.y),o=this.ptrnd(e.x+(s?0:e.width)),l=this.ptrnd(e.y+(s?e.height:0));if(("circle"===e.type||"path"===e.type||"rect"===e.type)&&n){let t=this.ptrnd(e.x),s=this.ptrnd(e.y);const n=e.innerRadius||0,a=e.outerRadius||e.r||0;"rect"===e.type&&(t+=e.width/2,s+=e.height/2),r=i.createRadialGradient(t,s,n,t,s,a)}n||((isNaN(a)||isNaN(o)||isNaN(h)||isNaN(l))&&(a=0,h=0,o=s?0:i.canvas.width,l=s?i.canvas.height:0),r=i.createLinearGradient(a,h,o,l));let d=t._gradients[e.fill].colorStops;for(let t=0;t<d.length;t++)r.addColorStop(d[t].percent,d[t].color);i.fillStyle=r}else e.fill&&(i.fillStyle=e.fill)}rect(t,e){0!==e.width&&0!==e.height&&(t.fillRect(this.ptrnd(e.x),this.ptrnd(e.y),e.width,e.height),t.strokeRect(this.ptrnd(e.x),this.ptrnd(e.y),e.width,e.height))}circle(t,e){0!==e.r&&(t.beginPath(),t.arc(this.ptrnd(e.x),this.ptrnd(e.y),e.r,0,2*Math.PI,!1),t.closePath(),t.fill(),t.stroke())}_parsePoint(t){return{x:this._parseNumber(t),y:this._parseNumber(t)}}_parseNumber(t){let e,i=!1;for(e=this._pos;e<t.length;e++)if(t[e]>="0"&&t[e]<="9"||"."===t[e]||"e"===t[e]||"-"===t[e]&&!i||"-"===t[e]&&e>=1&&"e"===t[e-1])i=!0;else{if(i||" "!==t[e]&&","!==t[e])break;this._pos++}let r=parseFloat(t.substring(this._pos,e));if(!isNaN(r))return this._pos=e,r}_isRelativeCmd(t){return-1!==this._cmds.indexOf(t)}_parseCmd(t){for(let e=this._pos;e<t.length;e++){if(-1!==this._cmds.toLowerCase().indexOf(t[e].toLowerCase()))return this._pos=e+1,this._lastCmd=t[e],this._lastCmd;if(" "!==t[e]){if(t[e]>="0"&&t[e]<="9"){if(this._pos=e,""===this._lastCmd)break;return this._lastCmd}}else this._pos++}}_toAbsolutePoint(t){return{x:this._currentPoint.x+t.x,y:this._currentPoint.y+t.y}}path(t,e){let i=e.d;this._pos=0,this._lastCmd="";let r=void 0;for(this._currentPoint={x:0,y:0},t.beginPath();this._pos<i.length;){let e=this._parseCmd(i);if(void 0===e)break;if("M"!==e&&"m"!==e)if("L"!==e&&"l"!==e)if("A"!==e&&"a"!==e)if("Z"!==e&&"z"!==e||void 0===r)if("C"!==e&&"c"!==e)if("Q"!==e&&"q"!==e);else{let e=this._parsePoint(i),r=this._parsePoint(i);t.quadraticCurveTo(e.x,e.y,r.x,r.y),this._currentPoint=r}else{let e=this._parsePoint(i),r=this._parsePoint(i),s=this._parsePoint(i);t.bezierCurveTo(e.x,e.y,r.x,r.y,s.x,s.y),this._currentPoint=s}else t.lineTo(r.x,r.y),this._currentPoint=r;else{let r=this._parseNumber(i),s=this._parseNumber(i),n=this._parseNumber(i)*(Math.PI/180),a=this._parseNumber(i),h=this._parseNumber(i),o=this._parsePoint(i);if(this._isRelativeCmd(e)&&(o=this._toAbsolutePoint(o)),0===r||0===s)continue;let l=this._currentPoint,d={x:Math.cos(n)*(l.x-o.x)/2+Math.sin(n)*(l.y-o.y)/2,y:-Math.sin(n)*(l.x-o.x)/2+Math.cos(n)*(l.y-o.y)/2},c=Math.pow(d.x,2)/Math.pow(r,2)+Math.pow(d.y,2)/Math.pow(s,2);c>1&&(r*=Math.sqrt(c),s*=Math.sqrt(c));let u=(a===h?-1:1)*Math.sqrt((Math.pow(r,2)*Math.pow(s,2)-Math.pow(r,2)*Math.pow(d.y,2)-Math.pow(s,2)*Math.pow(d.x,2))/(Math.pow(r,2)*Math.pow(d.y,2)+Math.pow(s,2)*Math.pow(d.x,2)));isNaN(u)&&(u=0);let p={x:u*r*d.y/s,y:u*-s*d.x/r},g={x:(l.x+o.x)/2+Math.cos(n)*p.x-Math.sin(n)*p.y,y:(l.y+o.y)/2+Math.sin(n)*p.x+Math.cos(n)*p.y},f=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},m=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(f(t)*f(e))},_=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(m(t,e))},x=_([1,0],[(d.x-p.x)/r,(d.y-p.y)/s]),M=[(d.x-p.x)/r,(d.y-p.y)/s],y=[(-d.x-p.x)/r,(-d.y-p.y)/s],w=_(M,y);m(M,y)<=-1&&(w=Math.PI),m(M,y)>=1&&(w=0),0===h&&w>0&&(w-=2*Math.PI),1===h&&w<0&&(w+=2*Math.PI);let v=r>s?r:s,N=r>s?1:r/s,b=r>s?s/r:1;t.translate(g.x,g.y),t.rotate(n),t.scale(N,b),t.arc(0,0,v,x,x+w,1-h),t.scale(1/N,1/b),t.rotate(-n),t.translate(-g.x,-g.y)}else{let e=this._parsePoint(i);if(void 0===e)break;t.lineTo(e.x,e.y),this._currentPoint=e}else{let e=this._parsePoint(i);if(void 0===e)break;t.moveTo(e.x,e.y),this._currentPoint=e,void 0===r&&(r=e)}}t.fill(),t.stroke(),t.closePath()}text(t,e){let i=this.ptrnd(e.x),r=this.ptrnd(e.y),s=this.ptrnd(e.width),n=this.ptrnd(e.height),a=e.halign,h=e.valign,o=e.angle,l=e.rotateAround,d=e.textPartsInfo,c=d.parts,u=e.clip;void 0===u&&(u=!0),t.save(),a||(a="center"),h||(h="center"),u&&(t.rect(i,r,s,n),t.clip());let p=e.textWidth,g=e.textHeight,f=s||0,m=n||0;if(t.fillStyle=e.color,t.font=e.fontWeight+" "+e.fontSize+" "+e.fontFamily,!o||0===o){r+=g,"center"===h||"middle"===h?r+=(m-g)/2:"bottom"===h&&(r+=m-g),s||(s=p),n||(n=g);let e=0;for(let s=c.length-1;s>=0;s--){let n=c[s],h=i,o=c[s].width;"center"===a?h+=(f-o)/2:"right"===a&&(h+=f-o),t.fillText(n.text,h,r+e),e-=n.height+(s>0?4:0)}return void t.restore()}let _=this.HTML5Renderer.alignTextInRect(i,r,s,n,p,g,a,h,o,l);i=_.x,r=_.y;let x=o*Math.PI*2/360;t.translate(i,r),t.rotate(x);let M=0,y=d.width;for(let e=c.length-1;e>=0;e--){let i=0;"center"===a?i+=(y-c[e].width)/2:"right"===a&&(i+=y-c[e].width),t.fillText(c[e].text,i,M),M-=c[e].height+4}t.restore()}}),Smart.Utilities.Assign("Plot",class{constructor(t){this.renderer=t}get(t,e,i){return void 0!==i?t[e][i]:t[e]}min(t,e){let i=NaN;for(let r=0;r<t.length;r++){let s=this.get(t,r,e);(isNaN(i)||s<i)&&(i=s)}return i}max(t,e){let i=NaN;for(let r=0;r<t.length;r++){let s=this.get(t,r,e);(isNaN(i)||s>i)&&(i=s)}return i}sum(t,e){let i=0;for(let r=0;r<t.length;r++){let s=this.get(t,r,e);isNaN(s)||(i+=s)}return i}count(t,e){let i=0;for(let r=0;r<t.length;r++){let s=this.get(t,r,e);isNaN(s)||i++}return i}avg(t,e){return this.sum(t,e)/Math.max(1,this.count(t,e))}filter(t,e){if(!e)return t;let i=[];for(let r=0;r<t.length;r++)e(t[r])&&i.push(t[r]);return i}scale(t,e,i,r){if(isNaN(t))return NaN;if((t<Math.min(e.min,e.max)||t>Math.max(e.min,e.max))&&(!r||!0!==r.ignore_range))return NaN;let s=NaN,n=1;if(void 0===e.type||"logarithmic"!==e.type){let i=Math.abs(e.max-e.min);i||(i=1),n=Math.abs(t-Math.min(e.min,e.max))/i}else if("logarithmic"===e.type){let i=e.base;isNaN(i)&&(i=10);let r=Math.min(e.min,e.max);r<=0&&(r=1);let s=Math.max(e.min,e.max);s<=0&&(s=1);let a=Math.log(s)/Math.log(i);s=Math.pow(i,a);let h=Math.log(r)/Math.log(i);r=Math.pow(i,h);let o=Math.log(t)/Math.log(i);n=Math.abs(o-h)/(a-h)}if("logarithmic"===i.type){let t=i.base;isNaN(t)&&(t=10);let e=Math.log(i.max)/Math.log(t),r=Math.log(i.min)/Math.log(t);i.flip&&(n=1-n);let a=Math.min(r,e)+n*Math.abs(e-r);s=Math.pow(t,a)}else s=Math.min(i.min,i.max)+n*Math.abs(i.max-i.min),i.flip&&(s=Math.max(i.min,i.max)-s+i.min);return s}axis(t,e,i){if(i<=1)return[e,t];(isNaN(i)||i<2)&&(i=2);let r=0;for(;Math.round(t)!==t&&Math.round(e)!==e&&r<10;)t*=10,e*=10,r++;let s=(e-t)/i;for(;r<10&&Math.round(s)!==s;)t*=10,e*=10,s*=10,r++;let n,a=[1,2,5],h=0;for(;;){let t=h%a.length,e=Math.floor(h/a.length),i=Math.pow(10,e)*a[t];if(t=(h+1)%a.length,e=Math.floor((h+1)/a.length),n=Math.pow(10,e)*a[t],s>=i&&s<n)break;h++}let o=n,l=[],d=this.renderer._rnd(t,o,!1),c=r<=0?1:Math.pow(10,r);for(;d<e+o;)l.push(d/c),d+=o;return l}})}});