(this["webpackJsonpecommerce-with-react"]=this["webpackJsonpecommerce-with-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/ecommerceland.b78100d8.png"},45:function(e,t,a){e.exports=a.p+"static/media/slide.ca306869.jpg"},50:function(e,t,a){e.exports=a(87)},55:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(55),a(25)),u=a(26),s=a(29),i=a(28),m=a(18),d=a(22);a(63),a(64),a(65);d.initializeApp({apiKey:"AIzaSyDSGu760OOAqGh7DmmnN4rsFKzJw_OgR40",authDomain:"ecommerce-website-85737.firebaseapp.com",databaseURL:"https://ecommerce-website-85737.firebaseio.com",projectId:"ecommerce-website-85737",storageBucket:"ecommerce-website-85737.appspot.com",messagingSenderId:"893071101658",appId:"1:893071101658:web:86210a42d39b20c52f9fe3",measurementId:"G-QZ8QDPE6QH"});var p=d.auth(),E=d.firestore(),f=d.storage(),g=Object(n.createContext)(),b=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={products:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.products;E.collection("Products").onSnapshot((function(a){a.docChanges().forEach((function(a){"added"===a.type&&t.push({ProductID:a.doc.id,ProductName:a.doc.data().ProductName,ProductPrice:a.doc.data().ProductPrice,ProductImg:a.doc.data().ProductImg}),e.setState({products:t})}))}))}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:{products:Object(m.a)(this.state.products)}},this.props.children)}}]),a}(r.a.Component),h=a(31),v=a(30),y=function(){return r.a.createElement("footer",{style:{backgroundColor:"#f8f9fa",padding:"10px",width:"100%",bottom:"0"}},r.a.createElement("h3",{style:{textAlign:"center"}},"Follow Us :"),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noopener noreferrer",style:{margin:"0 10px"}},r.a.createElement(h.a,{icon:v.a,size:"2x"})),r.a.createElement("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noopener noreferrer",style:{margin:"0 10px"}},r.a.createElement(h.a,{icon:v.c,size:"2x"})),r.a.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer",style:{margin:"0 10px"}},r.a.createElement(h.a,{icon:v.b,size:"2x"}))),r.a.createElement("div",{style:{padding:"10px 0"}},r.a.createElement("hr",{style:{borderTop:"1px solid #000",width:"80%",margin:"0 auto"}})),r.a.createElement("p",{style:{textAlign:"center"}},"\xa9 2024 CODMARKT"))},N=a(19),P=a.n(N),O=a(6),j=a(20),C=a(43),w=a(4),S=a(36),D=a(3),I=a(35);a(80);I.a.configure();var A=function(e,t){var a,n,r,c,l=e.shoppingCart,o=e.totalPrice,u=e.totalQty;switch(t.type){case"ADD_TO_CART":return l.find((function(e){return e.ProductID===t.id}))?(I.a.info("this product is already in your cart",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0}),e):((a=t.product).qty=1,a.TotalProductPrice=a.ProductPrice*a.qty,c=u+1,r=o+a.ProductPrice,{shoppingCart:[a].concat(Object(m.a)(l)),totalPrice:r,totalQty:c});case"INC":return(a=t.cart).qty=++a.qty,a.TotalProductPrice=a.qty*a.ProductPrice,c=u+1,r=o+a.ProductPrice,n=l.findIndex((function(e){return e.ProductID===t.id})),l[n]=a,{shoppingCart:Object(m.a)(l),totalPrice:r,totalQty:c};case"DEC":return(a=t.cart).qty>1?(a.qty=a.qty-1,a.TotalProductPrice=a.qty*a.ProductPrice,r=o-a.ProductPrice,c=u-1,n=l.findIndex((function(e){return e.ProductID===t.id})),l[n]=a,{shoppingCart:Object(m.a)(l),totalPrice:r,totalQty:c}):e;case"DELETE":var s=l.filter((function(e){return e.ProductID!==t.id}));return c=u-(a=t.cart).qty,r=o-a.qty*a.ProductPrice,{shoppingCart:Object(m.a)(s),totalPrice:r,totalQty:c};case"EMPTY":return{shoppingCart:[],totalPrice:0,totalQty:0};default:return e}},x=Object(n.createContext)(),k=function(e){var t=Object(n.useReducer)(A,{shoppingCart:[],totalPrice:0,totalQty:0}),a=Object(D.a)(t,2),c=a[0],l=a[1];return r.a.createElement(x.Provider,{value:Object(S.a)(Object(S.a)({},c),{},{dispatch:l})},e.children)},T=function(e){var t=e.user,a=Object(w.f)(),c=Object(n.useContext)(x).totalQty;return r.a.createElement("div",{className:"navbox"},r.a.createElement("div",{className:"leftside"},r.a.createElement("img",{src:P.a,alt:""})),!t&&r.a.createElement("div",{className:"rightside"},r.a.createElement("span",null,r.a.createElement(O.b,{to:"signup",className:"navlink"},"SIGN UP")),r.a.createElement("span",null,r.a.createElement(O.b,{to:"login",className:"navlink"},"LOGIN"))),t&&r.a.createElement("div",{className:"rightside"},r.a.createElement("span",null,r.a.createElement(O.b,{to:"/",className:"navlink"},t)),r.a.createElement("span",null,r.a.createElement(O.b,{to:"cartproducts",className:"navlink"},r.a.createElement(j.Icon,{icon:C.cart}))),r.a.createElement("span",{className:"no-of-products"},c),r.a.createElement("span",null,r.a.createElement("button",{className:"logout-btn",onClick:function(){p.signOut().then((function(){a.push("/login")}))}},"Logout"))))},q=a(45),F=a.n(q),B=function(){var e=Object(n.useContext)(g).products,t=Object(n.useContext)(x).dispatch;return r.a.createElement(r.a.Fragment,null,0!==e.length&&r.a.createElement("img",{className:"slideer",src:F.a,alt:"Product"}),0!==e.length&&r.a.createElement("h1",null,"Products"),r.a.createElement("div",{className:"products-container"},0===e.length&&r.a.createElement("div",null,"No products to display"),e.map((function(e){return r.a.createElement("div",{className:"product-card",key:e.ProductID},r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:e.ProductImg,alt:"not found"})),r.a.createElement("div",{className:"product-name"},e.ProductName),r.a.createElement("div",{className:"product-price"},e.ProductPrice,".00 MAD"),r.a.createElement("button",{className:"addcart-btn",onClick:function(){return t({type:"ADD_TO_CART",id:e.ProductID,product:e})}},"ADD TO CART"))}))))},Q=a(49),R=function(){return r.a.createElement("div",{className:"contact-container"},r.a.createElement("h2",{className:"contact-heading"},"Contact Us"),r.a.createElement("p",{className:"contact-info"},"Phone: +1234567890"),r.a.createElement("p",{className:"contact-info"},"Email: contact@lorem.org"),r.a.createElement("p",{className:"contact-info"},"Address: 11 Rue Maurice Bouchor 75014 PARIS"),r.a.createElement("p",{className:"contact-info"},"WhatsApp: +212656246627"),r.a.createElement("a",{href:"https://wa.me/1234567890",className:"contact-link"},r.a.createElement("button",{className:"whatsapp-button"},r.a.createElement(Q.a,null)," WhatsApp")))},U=function(e){var t=e.user,a=Object(w.f)();return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){e||a.push("/login")}))})),r.a.createElement("div",{className:"wrapper"},r.a.createElement(T,{user:t}),r.a.createElement(B,null),r.a.createElement(R,null),r.a.createElement(y,null))},_=(a(83),function(){var e=Object(n.useState)(""),t=Object(D.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(D.a)(l,2),u=o[0],s=o[1],i=Object(n.useState)(""),m=Object(D.a)(i,2),d=m[0],f=m[1],g=Object(n.useState)(""),b=Object(D.a)(g,2),h=b[0],v=b[1],y=Object(w.f)();return r.a.createElement("div",{className:"signup-container"},r.a.createElement("form",{className:"signup-form",onSubmit:function(e){e.preventDefault(),p.createUserWithEmailAndPassword(u,d).then((function(e){E.collection("SignedUpUsersData").doc(e.user.uid).set({Name:a,Email:u,Password:d}).then((function(){c(""),s(""),f(""),v(""),y.push("/login")})).catch((function(e){return v(e.message)}))})).catch((function(e){return v(e.message)}))}},r.a.createElement("img",{className:"logo",src:P.a,alt:"Logo"}),r.a.createElement("h2",null,"Sign up"),h&&r.a.createElement("span",{className:"error-msg"},h),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",id:"name",required:!0,onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",required:!0,onChange:function(e){return s(e.target.value)},value:u}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",required:!0,onChange:function(e){return f(e.target.value)},value:d}),r.a.createElement("button",{type:"submit",className:"btn-submit"},"SUBMIT"),r.a.createElement("span",null,"Already have an account? Login ",r.a.createElement(O.b,{to:"/login"},"Here"))))}),M=(a(84),function(e){var t=Object(n.useState)(""),a=Object(D.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),u=Object(D.a)(o,2),s=u[0],i=u[1],m=Object(n.useState)(""),d=Object(D.a)(m,2),E=d[0],f=d[1];return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-form"},r.a.createElement("img",{className:"logo",src:P.a,alt:"Logo"}),r.a.createElement("h2",null,"Sign in"),r.a.createElement("form",{autoComplete:"off",onSubmit:function(t){t.preventDefault(),p.signInWithEmailAndPassword(c,s).then((function(){l(""),i(""),f(""),e.history.push("/")})).catch((function(e){return f(e.message)}))}},r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:function(e){return l(e.target.value)},value:c}),r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,onChange:function(e){return i(e.target.value)},value:s}),r.a.createElement("div",{className:"remember-me"},r.a.createElement("input",{type:"checkbox",id:"remember"}),r.a.createElement("label",{htmlFor:"remember"},"Remember password")),r.a.createElement("button",{type:"submit",className:"login-btn"},"LOGIN")),E&&r.a.createElement("span",{className:"error-msg"},E),r.a.createElement("span",null,"Don't have an account? Register",r.a.createElement(O.b,{to:"signup"}," Here"))))}),L=function(){return r.a.createElement("div",null,"notfound")},z=a(46),G=a(47),W=a(48),H=function(e){var t=e.user,a=Object(n.useContext)(x),c=a.shoppingCart,l=a.dispatch,o=a.totalPrice,u=a.totalQty,s=Object(w.f)();return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){e||s.push("/login")}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{user:t}),r.a.createElement(r.a.Fragment,null,0!==c.length&&r.a.createElement("h1",null,"Shopping Cart"),r.a.createElement("div",{className:"cart-container"},0===c.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"no items in your cart or slow internet causing trouble (Refresh the page) or you are not logged in"),r.a.createElement("div",null,r.a.createElement(O.b,{to:"/"},"Return to Home page"))),c&&c.map((function(e){return r.a.createElement("div",{className:"cart-card",key:e.ProductID},r.a.createElement("div",{className:"cart-img"},r.a.createElement("img",{src:e.ProductImg,alt:"not found"})),r.a.createElement("div",{className:"cart-name"},e.ProductName),r.a.createElement("div",{className:"cart-price-orignal"},e.ProductPrice,".00 MAD"),r.a.createElement("div",{className:"inc",onClick:function(){return l({type:"INC",id:e.ProductID,cart:e})}},r.a.createElement(j.Icon,{icon:z.ic_add,size:24})),r.a.createElement("div",{className:"quantity"},e.qty),r.a.createElement("div",{className:"dec",onClick:function(){return l({type:"DEC",id:e.ProductID,cart:e})}},r.a.createElement(j.Icon,{icon:G.ic_remove,size:24})),r.a.createElement("div",{className:"cart-price"},e.TotalProductPrice,".00 MAD"),r.a.createElement("button",{className:"delete-btn",onClick:function(){return l({type:"DELETE",id:e.ProductID,cart:e})}},r.a.createElement(j.Icon,{icon:W.iosTrashOutline,size:24})))})),c.length>0&&r.a.createElement("div",{className:"cart-summary"},r.a.createElement("div",{className:"cart-summary-heading"},"Cart-Summary"),r.a.createElement("div",{className:"cart-summary-price"},r.a.createElement("span",null,"Total Price"),r.a.createElement("span",null,o)),r.a.createElement("div",{className:"cart-summary-price"},r.a.createElement("span",null,"Total Qty"),r.a.createElement("span",null,u)),r.a.createElement(O.b,{to:"cashout",className:"cashout-link"},r.a.createElement("button",{className:"btn btn-success btn-md",style:{marginTop:"5px"}},"Cash on delivery"))))))},Y=(a(85),function(e){var t=e.user,a=Object(w.f)(),c=Object(n.useState)(""),l=Object(D.a)(c,2),o=l[0],u=l[1],s=Object(n.useState)(0),i=Object(D.a)(s,2),m=i[0],d=i[1],g=Object(n.useState)(null),b=Object(D.a)(g,2),h=b[0],v=b[1],y=Object(n.useState)(""),N=Object(D.a)(y,2),P=N[0],O=N[1],j=["image/png","image/jpeg","image/jpg"];return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){e||a.push("/login")}))}),[a]),r.a.createElement("div",{className:"container"},r.a.createElement(T,{user:t}),r.a.createElement("h2",null,"Add New Product"),r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),f.ref("product-images/".concat(h.name)).put(h).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log(t)}),(function(e){return O(e.message)}),(function(){f.ref("product-images").child(h.name).getDownloadURL().then((function(e){E.collection("Products").add({ProductName:o,ProductPrice:Number(m),ProductImg:e}).then((function(){u(""),d(0),v(""),O(""),document.getElementById("file").value=""})).catch((function(e){return O(e.message)}))}))}))},className:"form-group"},r.a.createElement("label",{htmlFor:"product-name"},"Product Name"),r.a.createElement("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return u(e.target.value)},value:o}),r.a.createElement("label",{htmlFor:"product-price"},"Product Price"),r.a.createElement("input",{type:"number",className:"form-control",required:!0,onChange:function(e){return d(e.target.value)},value:m}),r.a.createElement("label",{htmlFor:"product-img"},"Product Image"),r.a.createElement("input",{type:"file",className:"form-control",id:"file",required:!0,onChange:function(e){var t=e.target.files[0];t&&j.includes(t.type)?(v(t),O("")):(v(null),O("Please select a valid image type (jpg or jpeg or png)"))}}),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-md mybtn"},"Add Product")),P&&r.a.createElement("span",{className:"error-msg"},P))}),J=function(e){var t=Object(w.f)(),a=Object(n.useContext)(x),c=a.totalPrice,l=a.totalQty,o=a.dispatch,u=Object(n.useState)(""),s=Object(D.a)(u,2),i=s[0],m=s[1],d=Object(n.useState)(""),f=Object(D.a)(d,2),g=f[0],b=f[1],h=Object(n.useState)(""),v=Object(D.a)(h,2),y=v[0],N=v[1],P=Object(n.useState)(""),O=Object(D.a)(P,2),j=O[0],C=O[1],S=Object(n.useState)(""),I=Object(D.a)(S,2),A=I[0],k=I[1],q=Object(n.useState)(""),F=Object(D.a)(q,2),B=F[0],Q=F[1];Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){e?E.collection("SignedUpUsersData").doc(e.uid).onSnapshot((function(e){m(e.data().Name),b(e.data().Email)})):t.push("/login")}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{user:e.user}),r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("h2",null,"Cashout Details"),r.a.createElement("br",null),B&&r.a.createElement("div",{className:"success-msg"},B),r.a.createElement("form",{autoComplete:"off",className:"form-group",onSubmit:function(e){e.preventDefault(),p.onAuthStateChanged((function(e){if(e){var a=(new Date).getTime();E.collection("Buyer-info "+e.uid).doc("_"+a).set({BuyerName:i,BuyerEmail:g,BuyerCell:y,BuyerAddress:j,BuyerPayment:c,BuyerQuantity:l}).then((function(){N(""),C(""),o({type:"EMPTY"}),Q("Your order has been placed successfully. Thanks for visiting us. You will be redirected to home page after 5 seconds"),setTimeout((function(){t.push("/")}),5e3)})).catch((function(e){return k(e.message)}))}}))}},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",required:!0,value:i,disabled:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",required:!0,value:g,disabled:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"Cell No"},"Cell No"),r.a.createElement("input",{type:"number",className:"form-control",required:!0,onChange:function(e){return N(e.target.value)},value:y,placeholder:"eg 03123456789"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"Delivery Address"},"Delivery Address"),r.a.createElement("input",{type:"text",className:"form-control",required:!0,onChange:function(e){return C(e.target.value)},value:j}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"Price To Pay"},"Price To Pay"),r.a.createElement("input",{type:"number",className:"form-control",required:!0,value:c,disabled:!0}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"Total No of Products"},"Total No of Products"),r.a.createElement("input",{type:"number",className:"form-control",required:!0,value:l,disabled:!0}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-md mybtn"},"SUBMIT")),A&&r.a.createElement("span",{className:"error-msg"},A)))},K=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.onAuthStateChanged((function(t){t?E.collection("SignedUpUsersData").doc(t.uid).get().then((function(a){var n=a.data();n?e.setState({user:n.Name}):console.log("No document found with id: ".concat(t.uid))})):e.setState({user:null})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(b,null,r.a.createElement(k,null,r.a.createElement(O.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:function(){return r.a.createElement(U,{user:e.state.user})}}),r.a.createElement(w.a,{path:"/signup",component:_}),r.a.createElement(w.a,{path:"/login",component:M}),r.a.createElement(w.a,{path:"/cartproducts",component:function(){return r.a.createElement(H,{user:e.state.user})}}),r.a.createElement(w.a,{path:"/addproducts",component:Y}),r.a.createElement(w.a,{path:"/cashout",component:function(){return r.a.createElement(J,{user:e.state.user})}}),r.a.createElement(w.a,{component:L})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(86);l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.cebb5590.chunk.js.map