(function(t){function a(a){for(var o,r,i=a[0],c=a[1],m=a[2],u=0,l=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(a);while(l.length)l.shift()();return n.push.apply(n,m||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],o=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(o=!1)}o&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var o={},s={app:0},n=[];function r(a){if(o[a])return o[a].exports;var e=o[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)r.d(e,o,function(a){return t[a]}.bind(null,o));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var m=0;m<i.length;m++)a(i[m]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(e("034f"),e("2877")),i={},c=Object(r["a"])(i,s,n,!1,null,null,null),m=c.exports,d=e("8c4f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container my-4"},[t._m(0),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(a){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),t.editar?e("form",{on:{submit:function(a){return a.preventDefault(),t.editarMascota(t.mascotaEditar)}}},[e("br"),e("h3",[t._v("Editar información de mascota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.nombre,expression:"mascotaEditar.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.mascotaEditar.nombre},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"nombre",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.tipo,expression:"mascotaEditar.tipo"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tipo"},domProps:{value:t.mascotaEditar.tipo},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"tipo",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.genero,expression:"mascotaEditar.genero"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Género"},domProps:{value:t.mascotaEditar.genero},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"genero",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.tamano,expression:"mascotaEditar.tamano"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tamaño"},domProps:{value:t.mascotaEditar.tamano},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"tamano",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.edad,expression:"mascotaEditar.edad"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Edad (meses)"},domProps:{value:t.mascotaEditar.edad},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"edad",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.descripcion,expression:"mascotaEditar.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Descripción"},domProps:{value:t.mascotaEditar.descripcion},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"descripcion",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascotaEditar.ruta_img,expression:"mascotaEditar.ruta_img"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ruta de imagen"},domProps:{value:t.mascotaEditar.ruta_img},on:{input:function(a){a.target.composing||t.$set(t.mascotaEditar,"ruta_img",a.target.value)}}}),e("b-button",{staticClass:"btn-success m-2",attrs:{type:"submit"}},[t._v("Editar")]),e("b-button",{staticClass:"btn-danger",attrs:{type:"submit"},on:{click:function(a){t.editar=!1}}},[t._v("Cancelar")])],1):t._e(),t.editar?t._e():e("form",{on:{submit:function(a){return a.preventDefault(),t.agregarMascota()}}},[e("br"),e("h3",[t._v("Agregar una nueva mascota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.nombre,expression:"mascota.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.mascota.nombre},on:{input:function(a){a.target.composing||t.$set(t.mascota,"nombre",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.tipo,expression:"mascota.tipo"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tipo"},domProps:{value:t.mascota.tipo},on:{input:function(a){a.target.composing||t.$set(t.mascota,"tipo",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.genero,expression:"mascota.genero"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Género"},domProps:{value:t.mascota.genero},on:{input:function(a){a.target.composing||t.$set(t.mascota,"genero",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.tamano,expression:"mascota.tamano"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Tamaño"},domProps:{value:t.mascota.tamano},on:{input:function(a){a.target.composing||t.$set(t.mascota,"tamano",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.edad,expression:"mascota.edad"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Edad (meses)"},domProps:{value:t.mascota.edad},on:{input:function(a){a.target.composing||t.$set(t.mascota,"edad",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.descripcion,expression:"mascota.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Descripción"},domProps:{value:t.mascota.descripcion},on:{input:function(a){a.target.composing||t.$set(t.mascota,"descripcion",a.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mascota.ruta_img,expression:"mascota.ruta_img"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ruta de imagen"},domProps:{value:t.mascota.ruta_img},on:{input:function(a){a.target.composing||t.$set(t.mascota,"ruta_img",a.target.value)}}}),e("b-button",{staticClass:"btn-success my-2",attrs:{type:"submit"}},[t._v("Agregar")])],1),e("br"),e("br"),e("h3",[t._v("Registro de las mascotas")]),e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.mascotas,(function(a,o){return e("tr",{key:o},[e("td",[t._v(t._s(a.nombre))]),e("td",[t._v(t._s(a.tipo))]),e("td",[t._v(t._s(a.genero))]),e("td",[t._v(t._s(a.tamano))]),e("td",[t._v(t._s(a.edad)+" meses")]),e("td",[t._v(t._s(a.descripcion))]),e("td",[t._v(t._s(a.ruta_img))]),e("td",[e("b-button",{staticClass:"btn-warning m-2",on:{click:function(e){return t.activarEdicion(a._id)}}},[t._v("Editar")]),e("b-button",{staticClass:"btn-danger",on:{click:function(e){return t.eliminarMascota(a._id)}}},[t._v("Eliminar")])],1)])})),0)])],1)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h1",[e("b",[e("u",[t._v("CRUD - My Adoption Center")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Tipo")]),e("th",{attrs:{scope:"col"}},[t._v("Género")]),e("th",{attrs:{scope:"col"}},[t._v("Tamaño")]),e("th",{attrs:{scope:"col"}},[t._v("Edad")]),e("th",{attrs:{scope:"col"}},[t._v("Descripción")]),e("th",{attrs:{scope:"col"}},[t._v("Ruta imagen")]),e("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],p=(e("c740"),e("a434"),{data:function(){return{mensaje:{color:"success",texto:""},dismissSecs:5,dismissCountDown:0,mascotas:[],mascota:{nombre:"",tipo:"",genero:"",tamano:"",edad:"",descripcion:"",ruta_img:""},editar:!1,mascotaEditar:{}}},created:function(){this.listarMascotas()},methods:{listarMascotas:function(){var t=this;this.axios.get("/mascota").then((function(a){t.mascotas=a.data})).catch((function(t){console.log(t.response)}))},agregarMascota:function(){var t=this;this.axios.post("/mascota",this.mascota).then((function(a){t.mascotas.push(a.data),t.mascota.nombre="",t.mascota.tipo="",t.mascota.genero="",t.mascota.tamano="",t.mascota.edad="",t.mascota.descripcion="",t.mascota.ruta_img="",t.mensaje.color="success",t.mensaje.texto="Mascota agregada",t.showAlert()})).catch((function(t){console.log(t.response)}))},eliminarMascota:function(t){var a=this;this.axios.delete("mascota/".concat(t)).then((function(t){var e=a.mascotas.findIndex((function(a){return a._id===t.data.id}));a.mascotas.splice(e,1),a.mensaje.color="success",a.mensaje.texto="Mascota eliminada",a.showAlert()})).catch((function(t){console.log(t.response)}))},activarEdicion:function(t){var a=this;this.editar=!0,this.axios.get("mascota/".concat(t)).then((function(t){a.mascotaEditar=t.data})).catch((function(t){console.log(t.response)}))},editarMascota:function(t){var a=this;this.axios.put("mascota/".concat(t._id),t).then((function(t){var e=a.mascotas.findIndex((function(a){return a._id===t.data._id}));a.mascotas[e].nombre=t.data.nombre,a.mascotas[e].tipo=t.data.tipo,a.mascotas[e].genero=t.data.genero,a.mascotas[e].tamano=t.data.tamano,a.mascotas[e].edad=t.data.edad,a.mascotas[e].descripcion=t.data.descripcion,a.mascotas[e].ruta_img=t.data.ruta_img,a.mensaje.color="success",a.mensaje.texto="Mascota editada",a.showAlert(),a.editar=!1})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),v=p,f=Object(r["a"])(v,u,l,!1,null,null,null),g=f.exports;o["default"].use(d["a"]);var h=[{path:"/crud",name:"crud",component:g}],b=new d["a"]({mode:"history",base:"/",routes:h}),_=b,y=e("2f62");o["default"].use(y["a"]);var x=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),E=e("5f5b"),w=(e("f9e3"),e("2dd8"),e("bc3a")),C=e.n(w),P=e("130e");o["default"].use(E["a"]),o["default"].use(P["a"],C.a),C.a.defaults.baseURL="http://localhost:3000/api",o["default"].config.productionTip=!1,new o["default"]({router:_,store:x,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.8ea7e4cf.js.map