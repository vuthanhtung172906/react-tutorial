(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{34:function(e,t,o){},58:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o(0),r=o.n(c),a=o(5),s=o.n(a),i=(o(34),o(19)),l=o(12),u=o(60),d=o(7),j=o(8),b=o(13),h=o(11),m=function(e){Object(b.a)(o,e);var t=Object(h.a)(o);function o(){return Object(d.a)(this,o),t.apply(this,arguments)}return Object(j.a)(o,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"header-container",children:Object(n.jsx)("h1",{className:"header-title",children:"Simple Todo App"})})}}]),o}(r.a.Component);var p=function(e){var t=e.todo,o=t.completed,c=t.id,r=t.title;return Object(n.jsx)("div",{children:Object(n.jsxs)("li",{className:"todo-item",children:[Object(n.jsx)("input",{type:"checkbox",checked:o,onChange:function(){return e.handle(c)}}),Object(n.jsx)("span",{className:o?"completed":null,children:r}),Object(n.jsx)("button",{className:"btn-style",onClick:function(){return e.deleteTodo(c)},children:" X "})]})})};var f=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{children:e.todos.map((function(t){return Object(n.jsx)(p,{todo:t,handle:e.handle,deleteTodo:e.deleteTodo})}))})})};var O=function(e){var t=this,o=Object(c.useState)(""),r=Object(l.a)(o,2),a=r[0],s=r[1];return Object(n.jsxs)("form",{className:"form-container",onSubmit:function(o){o.preventDefault(),e.addTodo(t.state.title),s("")},children:[Object(n.jsx)("input",{type:"text",placeholder:"Add Todo ...",className:"input-text",value:a,onChange:function(e){s(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"Submit",className:"input-submit"})]})},v=o(16),x=o.n(v),C=o(10),y=o(9),T=function(e){Object(b.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(d.a)(this,o),(n=t.call(this,e)).submitThemeColor=n.submitThemeColor.bind(Object(y.a)(n)),n}return Object(j.a)(o,[{key:"submitThemeColor",value:function(e){e&&(console.log("handleChangeTheme"),this.props.saveColorTheme(e))}},{key:"componentWillReceiveProps",value:function(e){console.log("UNSAFE_componentWillReceiveProps: "+JSON.stringify(e)),document.documentElement.style.setProperty("--main-color",e.themeColor.color)}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"footer",children:Object(n.jsxs)("div",{className:"vertical-center",children:[Object(n.jsx)("span",{children:"Choose Theme"}),Object(n.jsx)("button",{onClick:function(){return e.submitThemeColor("#ff0000")},className:"dot red"}),Object(n.jsx)("button",{onClick:function(){return e.submitThemeColor("#0000ff")},className:"dot blue"}),Object(n.jsx)("button",{onClick:function(){return e.submitThemeColor("#678c89")},className:"dot gray"})]})})}}]),o}(r.a.Component);var N=Object(C.b)((function(e){return{themeColor:e.color}}),(function(e){return{dispatch:e,saveColorTheme:function(t){return e(function(e){return{type:"Change Theme",payload:{color:e}}}(t))}}}))(T);var g=function(){var e=Object(c.useState)({todos:[]}),t=Object(l.a)(e,2),o=t[0],r=t[1];return Object(c.useEffect)((function(){x.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then((function(e){return r({todos:e.data})}))}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{}),Object(n.jsx)(O,{addTodo:function(e){var t={id:u.a,title:e,completed:!1};r({todos:[].concat(Object(i.a)(o.todos),[t])})}}),Object(n.jsx)(f,{todos:o.todos,handle:function(e){r({todos:o.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},deleteTodo:function(e){x.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then((function(t){return r({todos:Object(i.a)(o.todos.filter((function(t){return t.id!==e})))})}))}}),Object(n.jsx)(N,{})]})},k=o(3),S={color:"#FFFFFF"};var E=Object(k.b)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return console.log("themeReducer: "+JSON.stringify(e)),Object.assign({},e,{color:t.payload.color});default:return S}}}),F=Object(k.c)(E);s.a.render(Object(n.jsx)(C.a,{store:F,children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.42e8f61f.chunk.js.map