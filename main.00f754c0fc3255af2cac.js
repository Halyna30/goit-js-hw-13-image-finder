(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{MV5A:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("MV5A");var a=n("g0JP"),o=n.n(a),l={formRef:document.querySelector(".search-form"),btnLoadMore:document.querySelector(".btnLoadMore"),btnClear:document.querySelector(".btnClear"),list:document.querySelector(".gallery"),largeImage:document.querySelector(".lightbox-image"),modal:document.querySelector(".js-lightbox"),closeModalBtn:document.querySelector(".lightbox-button"),overlay:document.querySelector(".lightbox-overlay")};function r(e){if(e.preventDefault(),"IMG"===e.target.nodeName){var t=e.target;console.log(t.dataset.source),l.largeImage.src=t.dataset.source,l.largeImage.alt=t.alt,window.addEventListener("keydown",i),l.modal.classList.add("is-open"),l.overlay.addEventListener("click",c)}}function s(){window.removeEventListener("keydown",i),l.modal.classList.remove("is-open"),l.largeImage.src="#",l.largeImage.alt=" "}function i(e){"Escape"===e.code&&s()}function c(e){e.target===e.currentTarget&&s()}l.closeModalBtn.addEventListener("click",s);var u=function(e){var t=o()(e);l.list.insertAdjacentHTML("beforeend",t),l.list.addEventListener("click",r)},d=(n("JBxO"),n("FdtR"),n("VYoj")),m=n.n(d);n("Q1vi");m.a.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"2000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var p={searchQuery:"",page:1,apiKey:"19813258-07ae0ca846b71b474a409e06e",fetchApi:function(){var e=this,t="https://pixabay.com/api/?key="+this.apiKey+"&q="+this.searchQuery+"&per_page=12&page="+this.page;return fetch(t,{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){var n=t.hits;if(0!==n.length)return e.page+=1,m.a.success("Displayed "+12*(e.page-1)+" images fo your request"),n;m.a.error("Change request")}))},resetPage:function(){this.page=1},get query(){return this.searchQuery},set query(e){this.searchQuery=e}};console.log(window),l.formRef.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget;p.query=t.elements.query.value,l.list.innerHTML="",p.resetPage(),l.btnLoadMore.classList.add("is-hidden"),p.fetchApi().then((function(e){u(e),l.btnLoadMore.classList.remove("is-hidden"),window.scrollTo({top:document.documentElement.offsetHeight,left:0,behavior:"smooth"})}))})),l.btnLoadMore.addEventListener("click",(function(){p.fetchApi().then((function(e){u(e),window.scrollTo({top:document.documentElement.offsetHeight,left:0,behavior:"smooth"})}))}))},g0JP:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var l,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,i="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="list-item"><div class="photo-card">\r\n  <img src="'+c(typeof(l=null!=(l=u(n,"webformatURL")||(null!=t?u(t,"webformatURL"):t))?l:s)===i?l.call(r,{name:"webformatURL",hash:{},data:o,loc:{start:{line:3,column:12},end:{line:3,column:28}}}):l)+'" alt="'+c(typeof(l=null!=(l=u(n,"tags")||(null!=t?u(t,"tags"):t))?l:s)===i?l.call(r,{name:"tags",hash:{},data:o,loc:{start:{line:3,column:35},end:{line:3,column:43}}}):l)+'" data-source="'+c(typeof(l=null!=(l=u(n,"largeImageURL")||(null!=t?u(t,"largeImageURL"):t))?l:s)===i?l.call(r,{name:"largeImageURL",hash:{},data:o,loc:{start:{line:3,column:58},end:{line:3,column:75}}}):l)+'" />\r\n\r\n  <div class="stats">\r\n    <p class="stats-item">\r\n      <i class="material-icons">thumb_up</i>\r\n      '+c(typeof(l=null!=(l=u(n,"likes")||(null!=t?u(t,"likes"):t))?l:s)===i?l.call(r,{name:"likes",hash:{},data:o,loc:{start:{line:8,column:6},end:{line:8,column:15}}}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">visibility</i>\r\n      '+c(typeof(l=null!=(l=u(n,"views")||(null!=t?u(t,"views"):t))?l:s)===i?l.call(r,{name:"views",hash:{},data:o,loc:{start:{line:12,column:6},end:{line:12,column:15}}}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">comment</i>\r\n      '+c(typeof(l=null!=(l=u(n,"comments")||(null!=t?u(t,"comments"):t))?l:s)===i?l.call(r,{name:"comments",hash:{},data:o,loc:{start:{line:16,column:6},end:{line:16,column:18}}}):l)+'\r\n    </p>\r\n    <p class="stats-item">\r\n      <i class="material-icons">cloud_download</i>\r\n      '+c(typeof(l=null!=(l=u(n,"downloads")||(null!=t?u(t,"downloads"):t))?l:s)===i?l.call(r,{name:"downloads",hash:{},data:o,loc:{start:{line:20,column:6},end:{line:20,column:19}}}):l)+"\r\n    </p>\r\n  </div>\r\n  </div></li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l;return null!=(l=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:4},end:{line:24,column:11}}}))?l:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.00f754c0fc3255af2cac.js.map