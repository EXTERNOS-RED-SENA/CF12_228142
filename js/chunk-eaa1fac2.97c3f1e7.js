(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eaa1fac2","chunk-55d286b8"],{"0d26":function(t,e,a){"use strict";e["a"]={data:()=>({uid:Math.floor(Math.random()*10**10)}),methods:{dialogoMerge(t,e=!1){return t.dialogo?t.dialogo.map((a,s)=>({...a,id:this.uid+s+1,textoIng:e?this.splitPhrase(a.textoIng):a.textoIng,textoEsp:e?this.splitPhrase(a.textoEsp):a.textoEsp,personaje:t.personajes&&t.personajes.find(t=>t.nombre===a.personaje)})):[]},splitPhrase(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},"3b23":function(t,e,a){t.exports=a.p+"img/red-x.76179c7f.svg"},"3bff":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialogo"},[e("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[e("div",{staticClass:"mb-1"},[t._t("nombre-actividad",(function(){return[t._v("Arrastrar y soltar")]}))],2),e("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",(function(){return[t._v("Titulo de actividad - Completa la conversación")]}))],2)]),e("div",{staticClass:"px-2 py-3 p-lg-4"},[e("div",{staticClass:"row g-0"},[e("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(a,s){return e("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[e("div",{staticClass:"col-auto dialogo__chat__item__person"},[e("img",{attrs:{src:a.personaje.img}}),e("span",{staticClass:"text-small",domProps:{innerHTML:t._s(a.personaje.nombre)}})]),e("div",{staticClass:"col dialogo__chat__item__message__container"},[e("div",{staticClass:"dialogo__chat__item__message"},[e("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble dialogo__chat__item__message__bubble--tail"},[e("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[e("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(a.textoIng,(function(s,i){return["*"===s?e("div",{key:`phrase-${a.id}-${i}`,ref:"phrase-"+a.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===a.id},on:{drop:function(e){return e.preventDefault(),t.onDrop(a.id)},dragenter:function(e){return e.preventDefault(),t.onDragEnter(a.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[a.id]?e("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[a.id].palabra)}}):e("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):e("span",{key:`phrase-${a.id}-${i}`,domProps:{innerHTML:t._s(s)}})]}))],2),t.translations.includes(a.id)?e("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[e("hr",{staticClass:"my-2"}),t._l(a.textoEsp,(function(a){return["*"===a?e("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[e("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):e("span",{domProps:{innerHTML:t._s(a)}})]}))],2):t._e()]),e("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[e("Audio",{attrs:{audio:a.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),e("div",{staticClass:"d-flex justify-content-end me-3"},[e("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(e){return t.toggleTranslate(a.id)}}},[t._v("Ver traducción")])])])]),e("div",{staticClass:"col-1"})])})),0),t._m(0),e("div",{staticClass:"col dialogo__words"},[e("div",{staticClass:"dialogo__words__content"},[e("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",(function(){return[t._v("Arrastra y suelta las palabras en la conversación")]}))],2),t.wordsToShow.length?e("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(a){return e("div",{key:"word-"+a.id,ref:"word-"+a.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:a.id===t.dragId},domProps:{innerHTML:t._s(a.palabra)},on:{touchstart:function(e){return e.preventDefault(),t.onTouchStart(a.id)},touchmove:function(e){return e.preventDefault(),t.onTouchMove(e,a.id)},touchend:function(e){return e.preventDefault(),t.onTouchEnd(e,a.id)},touchcancel:function(e){return e.preventDefault(),t.onTouchCancel(e,a.id)}}})})):t._l(t.wordsToShow,(function(a){return e("div",{key:"word-"+a.id,staticClass:"h5 dialogo__words__word",class:{grabbing:a.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(a.palabra)},on:{dragstart:function(e){return t.onStartDrag(a.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),e("div",{staticClass:"dialogo__words__footer"},[t.score?e("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?e("div",{staticClass:"dialogo__score p-3 approved"},[e("div",{staticClass:"row align-items-center"},[t._m(1),e("div",{staticClass:"col"},[t._t("feedback-correcto",(function(){return[t._v("¡Muy bien!")]}))],2)])]):t._e(),"disapproved"===t.score?e("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[e("div",{staticClass:"row align-items-center"},[t._m(2),e("div",{staticClass:"col"},[t._t("feedback-incorrecto",(function(){return[t._v("Incorrecto")]}))],2)])]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?e("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?e("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?e("button",{on:{click:t.reset}},[t._v("Prueba otra vez")]):t._e()]):t._e()])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 d-md-none"},[e("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-2"},[e("div",{staticClass:"dialogo__score__icon"},[e("img",{attrs:{src:a("86bd")}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-2"},[e("div",{staticClass:"dialogo__score__icon"},[e("img",{attrs:{src:a("3b23")}})])])}],o=(a("14d9"),a("b2ea")),r=a("0d26"),n={name:"DialogoActividad",components:{Audio:o["default"]},mixins:[r["a"]],props:{dialogo:{type:Object,default:()=>({})}},data:()=>({uid:Math.floor(Math.random()*10**10),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}),computed:{dialogoComputed(){return this.dialogoMerge(this.dialogo,!0)},words(){return this.shuffle(this.dialogoComputed.map(t=>({palabra:t.palabra,id:t.id})).filter(t=>t.palabra))},answerWordsIds(){return Object.values(this.answers).map(t=>t.dragId)},wordsToShow(){return this.words.filter(t=>!this.answerWordsIds.includes(t.id))}},created(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag(t){this.dragId=t},onEndDrag(){this.dragId=null},onDrop(t){this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find(t=>t.id===this.dragId).palabra}),this.dropId=null)},onDragEnter(t){this.dropId=t},onDragLeave(){this.dropId=null},onTouchStart(t){const e=this.$refs["word-"+t][0];e.classList.add("touch-drag")},onTouchMove(t,e){const a=this.$refs["word-"+e][0],s=a.getBoundingClientRect(),i=t.touches[0];a.style.top=i.clientY-s.height/2+"px",a.style.left=i.clientX-s.width/2+"px"},onTouchEnd(t,e){if(t.changedTouches.length>1)return void this.resetDragElm(e);const a=this.$refs["chat-"+this.uid],s=a.getBoundingClientRect(),i=t.changedTouches[0],o=i.clientX>s.x&&i.clientX<s.x+s.width,r=i.clientY>s.y&&i.clientY<s.y+s.height;if(!o||!r)return void this.resetDragElm(e);let n;const d=this.words.some(t=>{const e=this.$refs["phrase-"+t.id][0],a=e.getBoundingClientRect(),s=25,o=i.clientX>a.x-s&&i.clientX<a.x+a.width+s,r=i.clientY>a.y-s&&i.clientY<a.y+a.height+s;return o&&r&&(n=t.id),o&&r});d&&this.$set(this.answers,n,{dragId:e,dropId:n,palabra:this.words.find(t=>t.id===e).palabra}),this.resetDragElm(e)},onTouchCancel(t){this.resetDragElm(t)},resetDragElm(t){const e=this.$refs["word-"+t][0];e.classList.remove("touch-drag")},toggleTranslate(t){this.translations.includes(t)?this.translations=this.translations.filter(e=>e!==t):this.translations.push(t)},onCheck(){const t=Object.values(this.answers).every(t=>t.dragId===t.dropId);this.score=t?"approved":"disapproved"},reset(){this.answers={},this.score=null},shuffle(t){for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}return t}}},d=n,l=a("2877"),c=Object(l["a"])(d,s,i,!1,null,null,null);e["default"]=c.exports},"5ccd":function(t,e,a){t.exports=a.p+"img/audio.058779f0.svg"},"86bd":function(t,e,a){t.exports=a.p+"img/green-check.f4a3fa01.svg"},"8fb3":function(t,e,a){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,audioDuration:0,currentTime:0,state:"pause"}),computed:{currentTimeDisplay(){return this.getTimeFormated(this.currentTime)},audioDurationDisplay(){return this.getTimeFormated(this.audioDuration)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=({target:t})=>{this.audioCanPlay=!0,this.audioDuration=t.duration},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"},this.audioElement.ontimeupdate=({target:t})=>{this.currentTime=t.currentTime}},beforeDestroy(){this.audioElement.remove()},methods:{getTimeFormated(t){const e=Math.floor(t);let a=Math.floor(e/60),s=e%60;return a=a<10?"0"+a:a,s=s<10?"0"+s:s,`${a}:${s}`},createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},b2ea:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?e("button",{staticClass:"audio__btn",on:{click:t.play}},[e("img",{attrs:{src:a("5ccd")}})]):e("button",{staticClass:"audio__btn",on:{click:t.pause}},[e("img",{attrs:{src:a("f034")}})]):e("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[e("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},i=[],o=a("8fb3"),r={name:"Audio",mixins:[o["a"]]},n=r,d=a("2877"),l=Object(d["a"])(n,s,i,!1,null,null,null);e["default"]=l.exports},f034:function(t,e,a){t.exports=a.p+"img/pause.8df843e4.svg"}}]);
//# sourceMappingURL=chunk-eaa1fac2.97c3f1e7.js.map