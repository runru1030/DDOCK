(this.webpackJsonpddock=this.webpackJsonpddock||[]).push([[0],{86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(47),r=n.n(s),i=n(9),o=n.n(i),j=n(12),l=n(6),d=n(25);n(57),n(89),n(88);d.a.initializeApp({apiKey:"AIzaSyChe3P0GL2PXyHyHwa1at5vEIv837gs9MU",authDomain:"ddock-6438e.firebaseapp.com",projectId:"ddock-6438e",storageBucket:"ddock-6438e.appspot.com",messagingSenderId:"266904048115",appId:"266904048115"});d.a;var u=d.a.auth(),b=d.a.firestore(),O=d.a.storage(),p=n(49),h=n(8),m=n(18),x=n(5),f=n(30),g=n.n(f),v=n(31),w=n(90),S=n(1),N=function(e){var t=e.hostObj,n=Object(a.useState)({storeName:"",storeSubName:"",storeAddress:"",storeCall:"",openTime:"",closeTime:"",storeInfo:"",menuURL:"",remain:0,wait:0,hostEmail:t.hostEmail}),c=Object(l.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(!1),d=Object(l.a)(i,2),u=d[0],p=d[1],f=Object(a.useState)(""),N=Object(l.a)(f,2),C=N[0],k=N[1],y=Object(a.useState)(""),I=Object(l.a)(y,2),L=I[0],R=I[1],F=Object(a.useState)(),A=Object(l.a)(F,2),E=A[0],T=A[1],D=Object(h.f)(),U=function(){p((function(e){return!e}))},q=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a=n.name,c=n.value,r((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},a,c))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(o.a.mark((function e(n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,""==L&&new Error("\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),a="",""===E){e.next=12;break}return c=O.ref().child("".concat(t.hostId,"/").concat(Object(w.a)())),e.next=8,c.putString(E,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:a=e.sent;case 12:return e.next=14,b.collection("Stores").add(Object(x.a)(Object(x.a)({},s),{},{menuURL:a}));case 14:D.push("/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),k(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"Container",children:[Object(S.jsx)("span",{className:"title",children:"\ub098\uc758 \ub9e4\uc7a5 \ub4f1\ub85d "}),Object(S.jsx)("div",{className:"centerContainer aboutStore",children:Object(S.jsxs)("form",{onSubmit:J,className:"aboutStore-form",children:[Object(S.jsxs)("span",{children:["\ub9e4\uc7a5\uba85 ",Object(S.jsx)("span",{id:"require-mark",children:"*"})]}),Object(S.jsx)("input",{type:"text",placeholder:"\ub9e4\uc7a5\uba85",name:"storeName",onChange:q,required:!0,value:s.storeName}),Object(S.jsxs)("span",{children:["\uc9c0\uc810\uba85 ",Object(S.jsx)("span",{id:"require-mark",children:"*"})]}),Object(S.jsx)("input",{type:"text",placeholder:"\uc9c0\uc810\uba85",name:"storeSubName",onChange:q,required:!0,value:s.storeSubName}),Object(S.jsxs)("span",{children:["\ub9e4\uc7a5 \uc8fc\uc18c ",Object(S.jsx)("span",{id:"require-mark",children:"*"})]}),u?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("span",{onClick:U,id:"search-box",children:"\ucde8\uc18c"}),Object(S.jsx)(g.a,{onComplete:function(e){var t=e.address,n="";"R"===e.addressType&&(""!==e.bname&&(n+=e.bname),""!==e.buildingName&&(n+=""!==n?", ".concat(e.buildingName):e.buildingName),t+=""!==n?" (".concat(n,")"):""),R(t),p(!1),r((function(e){return Object(x.a)(Object(x.a)({},e),{},{storeAddress:t})}))},className:"postCode"})]}):Object(S.jsx)("span",{onClick:U,id:"search-box",children:"\uc8fc\uc18c \uac80\uc0c9"}),Object(S.jsx)("span",{id:"address",children:L}),Object(S.jsx)("span",{children:"\uc601\uc5c5 \uc2dc\uac04"}),Object(S.jsxs)("div",{className:"aboutStore-form-time",children:[Object(S.jsx)("input",{type:"tel",placeholder:"\uc624\ud508",name:"openTime",onChange:q,value:s.openTime}),Object(S.jsx)("span",{children:" - "}),Object(S.jsx)("input",{type:"tel",placeholder:"\ub9c8\uac10",name:"closeTime",onChange:q,value:s.closeTime})]}),Object(S.jsx)("span",{children:"\ub9e4\uc7a5 \uc5f0\ub77d\ucc98"}),Object(S.jsx)("input",{type:"tel",name:"storeCall",onChange:q,required:!0,value:s.storeCall}),Object(S.jsx)("span",{children:"\ub9e4\uc7a5 \uc18c\uac1c"}),Object(S.jsx)(v.a,{placeholder:"\ub9e4\uc7a5 \uc18c\uac1c\uae00",name:"storeInfo",onChange:q,value:s.storeInfo,id:"textArea"}),Object(S.jsx)("span",{children:"\uba54\ub274 \uc0ac\uc9c4"}),!E&&Object(S.jsx)("label",{for:"attach-Menu",id:"search-box",children:"\uc0ac\uc9c4 \uc120\ud0dd"}),Object(S.jsx)("input",{id:"attach-Menu",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;T(t)},n.readAsDataURL(t)},style:{display:"none"}}),E&&Object(S.jsxs)("div",{className:"attachment",children:[Object(S.jsx)("span",{id:"attachmentDel",onClick:function(){return T("")},children:"\uc0ac\uc9c4 \ucde8\uc18c"}),Object(S.jsx)("img",{src:E,width:"100%"})]}),Object(S.jsx)("span",{id:"error",children:C}),Object(S.jsx)("input",{type:"submit",value:"\ub9e4\uc7a5 \ub4f1\ub85d"})]})})]})},C=function(){var e=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("storeObj"))||0})),t=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("storeObj"))||0})),n=Object(l.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("hostObj"))||0})),i=Object(a.useState)(!1),d=Object(l.a)(i,2),u=d[0],p=d[1],f=Object(a.useState)(""),N=Object(l.a)(f,2),C=N[0],k=N[1],y=Object(a.useState)(""),I=Object(l.a)(y,2),L=I[0],R=I[1],F=Object(a.useState)(""),A=Object(l.a)(F,2),E=A[0],T=A[1],D=Object(h.f)(),U=function(){p((function(e){return!e}))},q=function(){var t=Object(j.a)(o.a.mark((function t(n){var a,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,""==L&&new Error("\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),a="",""===E){t.next=16;break}return s=O.ref().child("".concat(r[0].hostId,"/").concat(Object(w.a)())),t.next=8,s.putString(E,"data_url");case 8:return i=t.sent,t.next=11,i.ref.getDownloadURL();case 11:return a=t.sent,t.next=14,b.collection("Stores").doc(e[0].id).update(Object(x.a)(Object(x.a)({},c),{},{menuURL:a}));case 14:t.next=18;break;case 16:return t.next=18,b.collection("Stores").doc(e[0].id).update(Object(x.a)({},c));case 18:window.localStorage.setItem("storeObj",JSON.stringify(c)),D.push("/"),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(1),k(t.t0.message);case 25:case"end":return t.stop()}}),t,null,[[1,22]])})));return function(e){return t.apply(this,arguments)}}(),J=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e[0].menuURL),t.next=3,O.refFromURL(e[0].menuURL).delete();case 3:T(""),s((function(e){return Object(x.a)(Object(x.a)({},e),{},{menuURL:""})}));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a=n.name,c=n.value,s((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},a,c))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"Container",children:[Object(S.jsx)("span",{className:"title",children:"\ub9e4\uc7a5\uc815\ubcf4 \uc218\uc815"}),Object(S.jsx)("div",{className:"centerContainer aboutStore",children:Object(S.jsxs)("form",{onSubmit:q,className:"aboutStore-form",children:[Object(S.jsxs)("span",{children:["\ub9e4\uc7a5\uba85 ",Object(S.jsx)("span",{id:"require-mark",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"storeName",onChange:M,required:!0,value:c.storeName}),Object(S.jsxs)("span",{children:["\uc9c0\uc810\uba85 ",Object(S.jsx)("span",{id:"require-mark",children:"*"})]}),Object(S.jsx)("input",{type:"text",name:"storeSubName",onChange:M,required:!0,value:c.storeSubName}),Object(S.jsxs)("span",{children:["\ub9e4\uc7a5 \uc8fc\uc18c ",Object(S.jsx)("span",{id:"require-mark",children:"*"})]}),u?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("span",{onClick:U,id:"search-box",children:"\ucde8\uc18c"}),Object(S.jsx)(g.a,{onComplete:function(e){var t=e.address,n="";"R"===e.addressType&&(""!==e.bname&&(n+=e.bname),""!==e.buildingName&&(n+=""!==n?", ".concat(e.buildingName):e.buildingName),t+=""!==n?" (".concat(n,")"):""),R(t),p(!1),s((function(e){return Object(x.a)(Object(x.a)({},e),{},{storeAddress:t})}))},className:"postCode"})]}):Object(S.jsx)("span",{onClick:U,id:"search-box",children:"\uc8fc\uc18c \uac80\uc0c9"}),Object(S.jsx)("span",{id:"address",children:c.storeAddress}),Object(S.jsx)("span",{children:"\uc601\uc5c5 \uc2dc\uac04"}),Object(S.jsxs)("div",{className:"aboutStore-form-time",children:[Object(S.jsx)("input",{type:"text",placeholder:"\uc624\ud508",name:"openTime",onChange:M,value:c.openTime}),Object(S.jsx)("span",{children:" - "}),Object(S.jsx)("input",{type:"text",placeholder:"\ub9c8\uac10",name:"closeTime",onChange:M,value:c.closeTime})]}),Object(S.jsx)("span",{children:"\ub9e4\uc7a5 \uc5f0\ub77d\ucc98"}),Object(S.jsx)("input",{type:"tel",name:"storeCall",onChange:M,value:c.storeCall}),Object(S.jsx)("span",{children:"\ub9e4\uc7a5 \uc18c\uac1c"}),Object(S.jsx)(v.a,{placeholder:"\ub9e4\uc7a5 \uc18c\uac1c\uae00",name:"storeInfo",onChange:M,value:c.storeInfo,id:"textArea"}),Object(S.jsx)("span",{children:"\uba54\ub274 \uc0ac\uc9c4"}),Object(S.jsx)("input",{id:"attach-Menu",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;T(t)},n.readAsDataURL(t)},style:{display:"none"}}),c.menuURL?Object(S.jsxs)("div",{className:"attachment",children:[Object(S.jsx)("span",{id:"attachmentDel",onClick:J,children:"\uc0ac\uc9c4 \uc0ad\uc81c"}),Object(S.jsx)("img",{src:c.menuURL,width:"100%"})]}):Object(S.jsx)(S.Fragment,{children:E?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("span",{id:"attachmentDel",onClick:function(){return T("")},children:"\uc0ac\uc9c4 \ucde8\uc18c"}),Object(S.jsx)("img",{src:E,width:"100%"})]}):Object(S.jsx)("label",{for:"attach-Menu",id:"search-box",children:"\uc0ac\uc9c4 \uc120\ud0dd"})}),Object(S.jsx)("span",{id:"error",children:C}),Object(S.jsx)("input",{type:"submit",value:"\uc218\uc815 \uc644\ub8cc"})]})})]})},k=n(50),y=function(){var e=window.kakao,t=JSON.parse(window.localStorage.getItem("storeObj"))||0;return Object(a.useEffect)((function(){var n=document.getElementById("map"),a={center:new e.maps.LatLng(33.450701,126.570667),level:3},c=new e.maps.Map(n,a);(new e.maps.services.Geocoder).addressSearch(t.storeAddress,(function(t,n){if(n===e.maps.services.Status.OK){var a=new e.maps.LatLng(t[0].y,t[0].x);new e.maps.Marker({map:c,position:a});c.setCenter(a)}}))}),[t.storeAddress]),Object(S.jsx)("div",{id:"map",style:{width:"100%",height:"300px"}})},I=function(){var e=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("storeObj"))||0})),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],d=r[1],u=Object(a.useState)({name:"",people:"",phoneNum:"",createAtTime:""}),O=Object(l.a)(u,2),p=O[0],h=O[1];Object(a.useEffect)((function(){b.doc("Stores/".concat(n.id)).onSnapshot((function(e){window.localStorage.setItem("storeObj",JSON.stringify(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))),c(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))}))}),[]);var f=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a=n.name,c=n.value,h((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},a,c))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new Date,e.next=4,b.doc("Stores/".concat(n.id)).update({wait:n.wait+1});case 4:return e.next=6,b.collection("ReserveList").doc(n.id).get().then(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.exists){e.next=5;break}return e.next=3,b.collection("ReserveList").doc(n.id).set({waiting:[].concat(Object(k.a)(t.data().waiting),[Object(x.a)(Object(x.a)({},p),{},{createAtTime:"".concat(a.getHours(),":").concat(a.getMinutes())})])});case 3:e.next=7;break;case 5:return e.next=7,b.collection("ReserveList").doc(n.id).set({waiting:[Object(x.a)(Object(x.a)({},p),{},{createAtTime:"".concat(a.getHours(),":").concat(a.getMinutes())})]});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:h({name:"",people:"",phoneNum:""}),d(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"Container",children:[Object(S.jsxs)("div",{className:"centerContainer storeContainer",children:[Object(S.jsx)("span",{id:"storeName",children:n.storeName}),Object(S.jsx)("span",{id:"storeSubName",children:n.storeSubName}),Object(S.jsxs)("div",{className:"waitInfo",children:[Object(S.jsxs)("div",{className:"waitInfo-span-wrap",children:[Object(S.jsx)("span",{children:"\uc5ec\uc11d"}),Object(S.jsx)("span",{id:"number",children:n.remain}),Object(S.jsx)("span",{id:"small",children:"\ud14c\uc774\ube14"})]}),Object(S.jsxs)("div",{className:"waitInfo-span-wrap",children:[Object(S.jsx)("span",{children:"\ub300\uae30"}),Object(S.jsx)("span",{id:"number",children:n.wait}),Object(S.jsx)("span",{id:"small",children:"\ud300"})]})]}),0==n.remain&&Object(S.jsx)("span",{onClick:function(){d((function(e){return!e}))},className:"blue-button",id:"reserve",children:i?"\ucde8\uc18c":"\uc608\uc57d\ud558\uae30"}),i&&Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"centerContainer reserve-wrap",children:[Object(S.jsxs)("form",{onSubmit:g,className:"centerContainer",children:[Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:"reserve-input",children:[Object(S.jsx)("span",{children:"\uc774\ub984"}),Object(S.jsx)("input",{type:"text",name:"name",required:!0,value:p.name,onChange:f})]}),Object(S.jsxs)("div",{className:"reserve-input",children:[Object(S.jsx)("span",{children:"\uc778\uc6d0"}),Object(S.jsx)("input",{type:"tel",placeholder:"\uba85",name:"people",required:!0,value:p.people,onChange:f})]}),Object(S.jsxs)("div",{className:"reserve-input phone",children:[Object(S.jsx)("span",{children:"\uc5f0\ub77d\ucc98"}),Object(S.jsx)("input",{type:"tel",maxLength:"11",placeholder:"(-)\uc5c6\uc774 \uc785\ub825",name:"phoneNum",required:!0,value:p.phoneNum,onChange:f})]})]}),Object(S.jsx)("input",{className:"blue-button",type:"submit",value:"\uc608\uc57d"})]}),Object(S.jsx)("span",{className:"ment",children:"\uc785\uc7a5 \ubb38\uc790 \ubc1c\uc1a1 \ud6c4, 5\ubd84\uc774\ub0b4\ub85c \uc785\uc7a5\ud558\uc9c0 \uc54a\uc73c\uba74 \uc790\ub3d9 \ucde8\uc18c\ub429\ub2c8\ub2e4."})]})})]}),Object(S.jsxs)("div",{className:"storeinfo",children:[Object(S.jsx)("span",{id:"title",children:"\ub9e4\uc7a5 \uc704\uce58"}),Object(S.jsx)("span",{children:n.storeAddress}),Object(S.jsx)(y,{}),Object(S.jsx)("hr",{}),Object(S.jsx)("span",{id:"title",children:"\ub9e4\uc7a5 \uc5f0\ub77d\ucc98"}),Object(S.jsxs)("span",{children:[n.storeCall,Object(S.jsx)("span",{children:Object(S.jsx)("a",{className:"blue-button",id:"call-link",href:"tel:".concat(n.storeCall),children:"\uc804\ud654\uac78\uae30"})})]}),Object(S.jsx)("hr",{}),Object(S.jsx)("span",{id:"title",children:"\ub9e4\uc7a5 \uc18c\uac1c\uae00"}),Object(S.jsx)("span",{children:n.storeInfo}),Object(S.jsx)("hr",{}),Object(S.jsx)("span",{id:"title",children:"\uc601\uc5c5 \uc2dc\uac04"}),Object(S.jsxs)("span",{children:["\uc624\ud508 : ",n.openTime," - \ub9c8\uac10 : ",n.closeTime]}),Object(S.jsx)("hr",{}),Object(S.jsx)("span",{id:"title",children:"\uba54\ub274\ud310 \uc0ac\uc9c4"}),Object(S.jsx)("span",{children:n.menuURL?Object(S.jsx)("img",{width:"350px",src:n.menuURL}):"."})]})]})})},L=n(21),R=n(22),F=function(e){var t=e.isHost,n=e.storeObj,a=Object(h.f)();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"box-container storeBox",onClick:function(){window.localStorage.setItem("storeObj",JSON.stringify(n)),t?a.push({pathname:"/hostStore",state:{storeObj:n}}):a.push({pathname:"/guestStore",state:{storeObj:n}})},children:[Object(S.jsx)("span",{children:n.storeName}),Object(S.jsx)("span",{id:"subName",children:n.storeSubName}),Object(S.jsx)("span",{id:"go",children:Object(S.jsx)(L.a,{icon:R.a})})]})})},A=function(e){var t=e.hostObj,n=Object(h.f)(),c=Object(a.useState)([]),s=Object(l.a)(c,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){window.localStorage.removeItem("storeObj"),b.collection("Stores").where("hostEmail","==",t.hostEmail).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(x.a)({id:e.id},e.data())}));i(t)}))})),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"Container",children:[Object(S.jsxs)("div",{className:"centerContainer title hostHome",children:[Object(S.jsx)("span",{onClick:function(){window.localStorage.removeItem("hostObj"),u.signOut(),n.push("/")},id:"side-menu",children:"\ub85c\uadf8\uc544\uc6c3"}),Object(S.jsx)("span",{children:"\ub098\uc758 \ub9e4\uc7a5"})]}),r.map((function(e){return Object(S.jsx)(F,{isHost:!0,storeObj:e})})),Object(S.jsxs)("span",{onClick:function(){n.push("/AddStore")},className:"blue-button",id:"add-btn",children:["\ub9e4\uc7a5 \ucd94\uac00 ",Object(S.jsx)(L.a,{icon:R.c})]})]})})},E=function(){var e=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("storeObj"))||0})),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("storeObj"))||0})),r=Object(l.a)(s,2),i=r[0],d=r[1],u=Object(a.useState)(!1),O=Object(l.a)(u,2),p=O[0],f=O[1],g=Object(h.f)();Object(a.useEffect)((function(){b.doc("Stores/".concat(n.id)).onSnapshot((function(e){window.localStorage.setItem("storeObj",JSON.stringify(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))),console.log(e.data()),c(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))}))}),[]);var v=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a=n.name,c=n.value,d((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},a,c))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b.doc("Stores/".concat(n.id)).update({remain:i.remain,wait:i.wait});case 3:f(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"Container",children:[Object(S.jsxs)("div",{className:"centerContainer storeContainer",children:[Object(S.jsx)("span",{onClick:function(){g.push("/waiting")},id:"side-menu2",children:"\ub300\uae30 \uad00\ub9ac"}),Object(S.jsx)("span",{id:"side-menu3",onClick:function(){g.push("/editStore")},children:"\ub9e4\uc7a5\uc815\ubcf4 \uc218\uc815"}),Object(S.jsx)("span",{id:"storeName",children:n.storeName}),Object(S.jsx)("span",{id:"storeSubName",children:n.storeSubName}),Object(S.jsxs)("div",{className:"centerContainer waitInfo-wrap",children:[Object(S.jsxs)("form",{onSubmit:w,className:"centerContainer",children:[Object(S.jsxs)("div",{className:"waitInfo",children:[Object(S.jsxs)("div",{className:"waitInfo-span-wrap",children:[Object(S.jsx)("span",{children:"\uc5ec\uc11d"}),p?Object(S.jsx)("input",{type:"text",value:i.remain,onChange:v,name:"remain"}):Object(S.jsx)("span",{id:"number",children:n.remain}),Object(S.jsx)("span",{id:"small",children:"\ud14c\uc774\ube14"})]}),Object(S.jsxs)("div",{className:"waitInfo-span-wrap",children:[Object(S.jsx)("span",{children:"\ub300\uae30"}),Object(S.jsx)("span",{id:"number",children:n.wait}),Object(S.jsx)("span",{id:"small",children:"\ud300"})]})]}),p&&Object(S.jsx)("input",{type:"submit",value:"\ubcc0\uacbd"})]}),0==n.wait&&Object(S.jsx)("span",{onClick:function(){f((function(e){return!e}))},className:"toggle-btn",children:p?"\ucde8\uc18c":Object(S.jsx)(S.Fragment,{children:"\uc5ec\uc11d \uc218\uc815"})})]})]}),Object(S.jsx)("span",{onClick:function(){window.confirm("\ub9e4\uc7a5\uc744 \uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&(b.doc("Stores/".concat(n.id)).delete(),b.doc("ReserveList/".concat(n.id)).delete(),g.push("/"))},id:"store-del",children:"\ub9e4\uc7a5 \uc81c\uac70"})]})},T=n(34),D=n.n(T),U=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],d=r[1],O=Object(a.useState)({email:"",password:""}),p=Object(l.a)(O,2),h=p[0],f=p[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),w=v[0],N=v[1],C=Object(a.useState)([]),k=Object(l.a)(C,2),y=k[0],I=k[1],A=Object(a.useState)(""),E=Object(l.a)(A,2),T=E[0],D=E[1],U=function(){c((function(e){return!e})),D("")},q=function(){var e=Object(j.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,a=n.name,c=n.value,"search"==a?N(c):f((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(m.a)({},a,c))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!i){e.next=8;break}return e.next=5,u.createUserWithEmailAndPassword(h.email,h.password);case 5:e.sent,e.next=11;break;case 8:return e.next=10,u.signInWithEmailAndPassword(h.email,h.password);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),D(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w&&b.collection("Stores").onSnapshot((function(e){var t=e.docs.filter((function(e){return 0==e.data().storeName.indexOf(w)})).map((function(e){return Object(x.a)({id:e.id},e.data())}));I(t)}))})),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:"Container",children:n?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("span",{id:"changeSpan",onClick:U,children:[Object(S.jsx)(L.a,{icon:R.b})," ",n?"\uac8c\uc2a4\ud2b8":"\ud638\uc2a4\ud2b8"]}),Object(S.jsxs)("div",{className:"centerContainer hostContainer",children:[Object(S.jsx)("img",{src:"src/images/logo.png",width:"200px"}),Object(S.jsxs)("form",{onSubmit:J,className:"centerContainer",children:[Object(S.jsx)("input",{type:"text",name:"email",placeholder:"\uc774\uba54\uc77c",onChange:q,required:!0,value:h.email}),Object(S.jsx)("input",{type:"password",name:"password",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:q,required:!0,value:h.password}),Object(S.jsx)("input",{type:"submit",value:i?"\uac00\uc785":"\ub85c\uadf8\uc778"})]}),Object(S.jsx)("span",{id:"error",children:T}),Object(S.jsx)("span",{onClick:function(){d((function(e){return!e})),D("")},id:"toggle",children:i?"\ub85c\uadf8\uc778":"\ud638\uc2a4\ud2b8 \uac00\uc785"})]})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("span",{id:"changeSpan",onClick:U,children:[Object(S.jsx)(L.a,{icon:R.b})," ",n?"\uac8c\uc2a4\ud2b8":"\ud638\uc2a4\ud2b8"]}),Object(S.jsx)("div",{className:"centerContainer guestContainer",children:Object(S.jsxs)("div",{className:"centerContainer search",children:[Object(S.jsx)("img",{src:"src/images/logo.png",width:"200px"}),Object(S.jsx)("input",{type:"text",placeholder:"\ub9e4\uc7a5\uba85",name:"search",value:w,onChange:q})]})}),y.length?Object(S.jsx)("div",{className:"storeShow",children:y.map((function(e){return Object(S.jsx)(F,{storeObj:e,isHost:!1})}))}):Object(S.jsx)(S.Fragment,{children:""==w?Object(S.jsxs)("div",{className:"centerContainer guest-search-ment",children:[Object(S.jsx)("span",{children:"\ub9e4\uc7a5\uba85\uc744 \uac80\uc0c9\ud574\ubcf4\uc138\uc694"}),Object(S.jsx)(L.a,{icon:R.e})]}):Object(S.jsxs)("div",{className:"centerContainer guest-search-ment",id:"nothing-ment",children:[Object(S.jsx)("span",{children:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"}),Object(S.jsx)(L.a,{icon:R.d,width:"50px"})]})})]})})})},q=function(e){var t=e.waitingObj,n=e.storeObj;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"box-container waitingBox",children:[Object(S.jsx)("span",{children:t.name}),Object(S.jsxs)("span",{children:["\uc778\uc6d0 : ",t.people]}),Object(S.jsxs)("span",{children:["\uc5f0\ub77d\ucc98 : ",t.phoneNum]}),Object(S.jsx)("span",{id:"time",children:t.createAtTime}),Object(S.jsx)("span",{onClick:function(){D.a.get("/sms/".concat(t.phoneNum,"/").concat(n.storeName)).then((function(e){return console.log(e.data)})),b.doc("ReserveList/".concat(n.id)).get().then((function(e){b.doc("ReserveList/".concat(n.id)).update({waiting:e.data().waiting.slice(1,e.data().waiting.length)}),b.doc("Stores/".concat(n.id)).update({wait:e.data().waiting.length-1})}))},className:"enter-btn",children:"\uc785\uc7a5"})]})})},J=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("storeObj"))||0})),r=Object(l.a)(s,2),i=r[0];r[1];return Object(a.useEffect)((function(){b.doc("ReserveList/".concat(i.id)).onSnapshot((function(e){e.exists&&c(e.data().waiting)}))})),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{className:"Container",children:[Object(S.jsx)("span",{className:"title",children:"\ub300\uae30 \ub9ac\uc2a4\ud2b8"}),Object(S.jsxs)("span",{id:"waiting-count",children:["\ub300\uae30 ",n.length,"\ud300"]}),n.map((function(e){return Object(S.jsx)(q,{waitingObj:e,storeObj:i})})),!n.length&&Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("span",{className:"waiting-ment",children:"\ub300\uae30\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})]})})},M=function(e){var t=e.ishost,n=e.hostObj;return Object(S.jsx)(p.a,{children:Object(S.jsx)(h.c,{children:t?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{exact:!0,path:"/",children:Object(S.jsx)(A,{hostObj:n})}),Object(S.jsx)(h.a,{exact:!0,path:"/AddStore",children:Object(S.jsx)(N,{hostObj:n})}),Object(S.jsx)(h.a,{exact:!0,path:"/hostStore",children:Object(S.jsx)(E,{})}),Object(S.jsx)(h.a,{exact:!0,path:"/waiting",children:Object(S.jsx)(J,{})}),Object(S.jsx)(h.a,{exact:!0,path:"/editStore",children:Object(S.jsx)(C,{})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{exact:!0,path:"/",children:Object(S.jsx)(U,{})}),Object(S.jsx)(h.a,{exact:!0,path:"/guestStore",children:Object(S.jsx)(I,{})})]})})})};var H=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(l.a)(s,2),i=r[0],d=r[1],b=Object(a.useState)({hostEmail:"",hostId:""}),O=Object(l.a)(b,2),p=O[0],h=O[1];return Object(a.useEffect)((function(){u.onAuthStateChanged(function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?(c(!0),h({hostEmail:t.email,hostId:t.uid}),window.localStorage.setItem("hostObj",JSON.stringify({hostEmail:t.email,hostId:t.uid}))):c(!1),d(!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("head",{children:Object(S.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0 user-scalable=no"})}),i?Object(S.jsx)(M,{ishost:n,hostObj:p}):Object(S.jsx)("span",{id:"loading",children:"Loading..."}),Object(S.jsxs)("footer",{children:["\xa9 DDOCK ",(new Date).getFullYear()," by keeper"]})]})};n(86);r.a.render(Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(H,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.eec045fe.chunk.js.map