(this.webpackJsonppuhelinluettelo_frontend=this.webpackJsonppuhelinluettelo_frontend||[]).push([[0],{15:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(4),r=t(2),c=t(0),o=t.n(c),l=t(14),u=t.n(l),i=function(e){var n=e.handleChangeInput,t=e.handleSubmit,a=e.newName,r=e.newNumber;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:t},o.a.createElement("div",null,"name: ",o.a.createElement("input",{id:"name",value:a,onChange:n})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{id:"number",value:r,onChange:n})),o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.persons,t=e.handleDelete;return o.a.createElement("div",null,n.map((function(e){return o.a.createElement("p",{key:e.id},e.name," ",e.number," ",o.a.createElement("button",{id:e.id,onClick:t},"Delete"))})))},m=function(e){var n=e.handleSearchInput;e.search;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{id:"name",onChange:n}))))},s=t(3),f=t.n(s),h="/api/persons",p=function(e){return f.a.post(h,e).then((function(e){return e.data}))},b=function(){return f.a.get(h).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n)},g=function(e){return f.a.delete("".concat(h,"/").concat(e))},E={width:"50vw",border:"solid 1px #A52A2A",backgroundColor:"#FFC0CB",marginBottom:"10px",padding:"10px"},w={width:"50vw",border:"solid 1px #006400",backgroundColor:"#98FB98",marginBottom:"10px",padding:"10px"},j=function(e){var n,t=e.message,a=e.success;return null===t?null:(n=a?w:E,o.a.createElement("div",{style:n},t))},O=(t(37),function(){var e=Object(c.useState)(""),n=Object(r.a)(e,2),t=n[0],l=n[1],u=Object(c.useState)(""),s=Object(r.a)(u,2),f=s[0],h=s[1],E=Object(c.useState)([]),w=Object(r.a)(E,2),O=w[0],S=w[1],C=Object(c.useState)([]),x=Object(r.a)(C,2),k=x[0],y=x[1],A=Object(c.useState)(null),D=Object(r.a)(A,2),I=D[0],B=D[1],N=Object(c.useState)(null),F=Object(r.a)(N,2),J=F[0],L=F[1];Object(c.useEffect)((function(){b().then((function(e){y(e)}))}),[]);var _=function(e){B(e),setTimeout((function(){B(null),L(null)}),2e3)};return o.a.createElement("div",{style:{margin:"50px"}},o.a.createElement("h2",null,"Phonebook"),o.a.createElement(j,{message:I,success:J}),o.a.createElement(m,{handleSearchInput:function(e){if(""!==e.target.value){var n="^"+e.target.value,t=new RegExp(n,"i"),a=k.filter((function(e){return t.test(e.name)}));S(a)}else S([])}}),o.a.createElement("h3",null,"Add a new"),o.a.createElement(i,{handleChangeInput:function(e){"name"===e.target.id&&l(e.target.value),"number"===e.target.id&&h(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=k.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}));if("undefined"!==typeof n){if(window.confirm("".concat(t," is already added to phonebook, replace the old number with a new one?"))){var r=Object(a.a)(Object(a.a)({},n),{},{number:f});v(r.id,r).then((function(e){y(k.map((function(e){return e.id===r.id?r:e}))),_("".concat(r.name," updated!")),L(!0)}))}}else p({name:t,number:f}).then((function(e){y(k.concat(e)),_("Added ".concat(t)),L(!0)})).catch((function(e){var n=e.response.data.error?e.response.data.error:e.response.data;B(n),L(!1)}));l(""),h("")},newName:t,newNumber:f}),0===O.length?o.a.createElement("h3",null,"All Numbers"):o.a.createElement("h3",null,"Search results"),o.a.createElement(d,{persons:0===O.length?k:O,handleDelete:function(e){console.log("ev.target.id",e.target.id);var n=e.target.id,t=k.find((function(e){return e.id===n}));console.log("toDel",t),console.log("persons",k),window.confirm("Delete ".concat(t.name,"?"))&&g(n).then((function(){y(k.filter((function(e){return e.id!==t.id}))),_("".concat(t.name," deleted")),L(!0)})).catch((function(){_("Info for ".concat(t.name," has already been removed from server")),L(!1)}))}}),o.a.createElement("a",{href:"/info/"},"info!"))});u.a.render(o.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4b96e251.chunk.js.map