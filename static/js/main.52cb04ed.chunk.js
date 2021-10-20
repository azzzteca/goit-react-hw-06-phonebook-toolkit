(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(e,t,n){e.exports={app:"App_app__3iPeU"}},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),i=n(8),o=n.n(i),s=n(3),b=n(15),u=n(4),j=n(10),l=n(18),d=n(2),O=n(34),m=Object(u.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(O.a)(),name:t,number:n}}})),f=Object(u.b)("contacts/delete"),h=Object(u.b)("contacts/filter"),p=[{id:Object(O.a)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(O.a)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(O.a)(),name:"Eden Clements",number:"645-17-79"},{id:Object(O.a)(),name:"Annie Copeland",number:"227-91-26"}],x=Object(u.c)(p,(c={},Object(j.a)(c,m,(function(e,t){var n=t.payload;if(e.find((function(e){return n.name.toLowerCase()===e.name.toLowerCase()})))return alert("".concat(n.name," is alredy in contacts")),e;var c={id:Object(O.a)(),name:n.name,number:n.number};return[].concat(Object(l.a)(e),[c])})),Object(j.a)(c,f,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),v=Object(u.c)("",Object(j.a)({},h,(function(e,t){return t.payload.toLowerCase()}))),g=Object(d.b)({items:x,filter:v}),w=n(5),y=n(16),C={key:"items",storage:n.n(y).a,blacklist:["filter"]},k=Object(u.a)({reducer:{contacts:Object(w.g)(C,g)},middleware:Object(u.d)({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}}),devTools:!1}),A={store:k,persistor:Object(w.h)(k)},S=(n(29),n(1));function N(e){var t=e.title,n=e.children;return Object(S.jsxs)("div",{className:"section",children:[t&&Object(S.jsx)("h2",{children:t}),n]})}var z=n(7);function J(e,t){var n=Object(r.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(z.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,i]}n(31);function L(){var e=J("name",""),t=Object(z.a)(e,2),n=t[0],c=t[1],r=J("number",""),a=Object(z.a)(r,2),i=a[0],o=a[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":c(r);break;case"number":o(r)}},u=Object(s.b)();return Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u(m({name:n,number:i})),c(""),o(""),e.target.reset()},children:[Object(S.jsxs)("label",{children:["Name",Object(S.jsx)("input",{onChange:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(S.jsxs)("label",{children:["Number",Object(S.jsx)("input",{onChange:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(S.jsx)("button",{type:"submit",children:"Add contact"})]})}n(32);function E(){var e=Object(s.b)();return Object(S.jsxs)("label",{children:["Find contacts by name",Object(S.jsx)("input",{type:"text",onChange:function(t){return e(h(t.target.value))}})]})}function I(e){var t=e.contact,n=Object(s.b)();return Object(S.jsxs)(S.Fragment,{children:[t.name," ",t.number,Object(S.jsx)("button",{type:"button",id:t.id,onClick:function(e){return n(f(e.target.id))},children:"Delete"})]})}function Z(e){var t=e.children,n=Object(s.c)((function(e){return e.contacts.items})),c=Object(s.c)((function(e){return e.contacts.filter}));return Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"Contacts"}),t,Object(S.jsx)("ul",{children:c?n.filter((function(e){return e.name.toLowerCase().includes(c)})).map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(I,{contact:e})},e.id)})):n.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(I,{contact:e})},Object(O.a)())}))})]})}var _=n(17),q=n.n(_);function B(){var e=Object(s.c)((function(e){return e.contacts.items}));return Object(S.jsx)("div",{className:q.a.app,children:Object(S.jsxs)(N,{title:"Phonebook",children:[Object(S.jsx)(L,{}),Object(S.jsx)(Z,{children:e.length>2&&Object(S.jsx)(E,{})})]})})}o.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(s.a,{store:A.store,children:Object(S.jsx)(b.a,{loading:null,persistor:A.persistor,children:Object(S.jsx)(B,{})})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.52cb04ed.chunk.js.map