(function(){"use strict";var t={1952:function(t,n,r){var e=r(7764),o=r(4108);const a={class:"page-wrap"};function s(t,n,r,e,s,c){const u=(0,o.E1)("NavBar"),i=(0,o.E1)("router-view");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.K2)(u),(0,o.QD)("div",a,[(0,o.K2)(i,{user:s.user},null,8,["user"])])],64)}var c=r(1504);const u={class:"nav-bar"},i={class:"logo-wrap"},l=["src"],d={class:"nav-buttons-wrap"},p=(0,o.QD)("button",null,"Shopping Cart",-1);function m(t,n,r,e,a,s){const c=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)("div",u,[(0,o.K2)(c,{to:"/products",class:"products-link"},{default:(0,o.Ql)((()=>[(0,o.QD)("div",i,[(0,o.QD)("img",{src:a.logo},null,8,l)])])),_:1}),(0,o.QD)("div",d,[(0,o.QD)("button",{onClick:n[0]||(n[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out "),(0,o.K2)(c,{to:"/cart"},{default:(0,o.Ql)((()=>[p])),_:1})])])}var h=r.p+"img/logo-hexagon.d2768201.svg",g={name:"NavBar",data(){return{logo:h}},methods:{signOut(){const t=(0,c.Iv)();(0,c.Az)(t)}}},f=r(4100);const v=(0,f.c)(g,[["render",m]]);var A=v,O={name:"App",components:{NavBar:A},data(){return{user:null}},created(){const t=(0,c.Iv)();(0,c.E3)(t,(t=>{this.user=t}))}};const I=(0,f.c)(O,[["render",s]]);var D=I,C=r(7464);const w=(0,o.QD)("h1",null,"Shopping Cart",-1),y={key:0},b=(0,o.QD)("button",{class:"checkout-button"},"Proceed To Checkout",-1),Q={key:1};function k(t,n,r,e,a,s){const c=(0,o.E1)("ShoppingCartList");return(0,o.Wz)(),(0,o.An)(o.ae,null,[w,a.cartItems.length>0?((0,o.Wz)(),(0,o.An)("div",y,[(0,o.K2)(c,{onRemoveFromCart:n[0]||(n[0]=t=>s.removeFromCart(t)),products:a.cartItems},null,8,["products"]),b])):(0,o.g1)("",!0),0===a.cartItems.length?((0,o.Wz)(),(0,o.An)("div",Q," YOU CURRENTLY HAVE NO ITEMS IN YOUR CART ")):(0,o.g1)("",!0)],64)}var N=r(2964),P=r(9096);const W=["src"],S={class:"details-wrap"},T=["onClick"];function z(t,n,r,e,a,s){return(0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(r.products,(n=>((0,o.Wz)(),(0,o.An)("div",{class:"product-container",key:n.id},[(0,o.QD)("img",{class:"product-image",src:n.imageUrl},null,8,W),(0,o.QD)("div",S,[(0,o.QD)("h3",null,(0,P.WA)(n.name),1),(0,o.QD)("p",null,(0,P.WA)(n.price),1)]),(0,o.QD)("button",{onClick:r=>t.$emit("remove-from-cart",n.id),class:"remove-button"},"Remove From Cart",8,T)])))),128)}var E={name:"ShoppingCartList",props:["products"]};const F=(0,f.c)(E,[["render",z]]);var G=F,K={name:"ShoppingCartPage",props:["user"],components:{ShoppingCartList:G},data(){return{cartItems:[]}},watch:{async user(t){if(t){const n=await N.c.get(`/api/users/${t.uid}/cart`),r=n.data;this.cartItems=r}}},methods:{async removeFromCart(t){const n=await N.c.delete(`/api/users/${this.user.uid}/cart/${t}`),r=n.data;this.cartItems=r}},async created(){if(this.user){const t=await N.c.get(`/api/users/${this.user.uid}/cart`),n=t.data;this.cartItems=n}}};const U=(0,f.c)(K,[["render",k]]);var B=U;const $=(0,o.QD)("h1",null,"Products",-1);function j(t,n,r,e,a,s){const c=(0,o.E1)("ProductsList");return(0,o.Wz)(),(0,o.An)(o.ae,null,[$,(0,o.K2)(c,{products:a.products},null,8,["products"])],64)}const _={class:"grid-wrap"},L=["src"],R={class:"product-name"},x={class:"product-price"},M=(0,o.QD)("button",null,"View Details",-1);function Y(t,n,r,e,a,s){const c=(0,o.E1)("router-link");return(0,o.Wz)(),(0,o.An)("div",_,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(r.products,(t=>((0,o.Wz)(),(0,o.An)("div",{class:"product-item",key:t.id},[(0,o.QD)("img",{src:t.imageUrl},null,8,L),(0,o.QD)("h3",R,(0,P.WA)(t.name),1),(0,o.QD)("p",x,(0,P.WA)(t.price),1),(0,o.K2)(c,{to:"/products/"+t.id},{default:(0,o.Ql)((()=>[M])),_:2},1032,["to"])])))),128))])}var V={name:"ProductsList",props:["products"]};const q=(0,f.c)(V,[["render",Y]]);var H=q,J={name:"ProductsPage",components:{ProductsList:H},data(){return{products:[]}},async created(){const t=await N.c.get("/api/products"),n=t.data;this.products=n}};const X=(0,f.c)(J,[["render",j]]);var Z=X;const tt={key:0},nt={class:"img-wrap"},rt=["src"],et={class:"product-details"},ot={class:"price"},at={key:1,class:"grey-button"},st={key:1};function ct(t,n,r,e,a,s){const c=(0,o.E1)("NotFoundPage");return a.product?((0,o.Wz)(),(0,o.An)("div",tt,[(0,o.QD)("div",nt,[(0,o.QD)("img",{src:a.product.imageUrl},null,8,rt)]),(0,o.QD)("div",et,[(0,o.QD)("h1",null,(0,P.WA)(a.product.name),1),(0,o.QD)("h3",ot,(0,P.WA)(a.product.price),1),r.user&&!s.itemIsInCart?((0,o.Wz)(),(0,o.An)("button",{key:0,onClick:n[0]||(n[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add To Cart")):(0,o.g1)("",!0),r.user&&s.itemIsInCart?((0,o.Wz)(),(0,o.An)("button",at,"Item Is In Cart")):(0,o.g1)("",!0),r.user?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("button",{key:2,class:"sign-in",onClick:n[1]||(n[1]=(...t)=>s.signIn&&s.signIn(...t))},"Sign in to add to cart"))])])):((0,o.Wz)(),(0,o.An)("div",st,[(0,o.K2)(c)]))}const ut=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),it=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),lt=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),dt=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),pt=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),mt=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),ht=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),gt=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1),ft=(0,o.QD)("h1",null,"404: PAGE NOT FOUND!!! GO BACK",-1);function vt(t,n,r,e,a,s){return(0,o.Wz)(),(0,o.An)(o.ae,null,[ut,it,lt,dt,pt,mt,ht,gt,ft],64)}var At={name:"NotFoundPage"};const Ot=(0,f.c)(At,[["render",vt]]);var It=Ot,Dt={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:[]}},computed:{itemIsInCart(){return this.cartItems.some((t=>t.id===this.$route.params.productId))}},watch:{async user(t){if(t){const n=await N.c.get(`/api/users/${t.uid}/cart`),r=n.data;this.cartItems=r}}},methods:{async addToCart(){await N.c.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("This has been added to cart!!")},async signIn(){const t=prompt("Please enter your email to sign in"),n=(0,c.Iv)(),r={url:`https://full-stack-vue-test.onrender.com/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,c.Wy)(n,t,r),alert("Check your email - We sent a link to login"),window.localStorage.setItem("emailForSignIn",t)}},components:{NotFoundPage:It},async created(){const t=(0,c.Iv)();if((0,c.G6)(t,window.location.href)){const n=window.localStorage.getItem("emailForSignIn");await(0,c.Gm)(t,n,window.location.href),alert("Sign in complete"),window.localStorage.removeItem("emailForSignIn")}const n=await N.c.get(`/api/products/${this.$route.params.productId}`),r=n.data;if(this.product=r,this.user){const t=await N.c.get(`/api/users/${this.user.uid}/cart`),n=t.data;this.cartItems=n}}};const Ct=(0,f.c)(Dt,[["render",ct]]);var wt=Ct,yt=r(8508);const bt={apiKey:"AIzaSyBzYptNCMfJq8FR3-fLmKheams8ba7OlWI",authDomain:"vue-site-73ef4.firebaseapp.com",projectId:"vue-site-73ef4",storageBucket:"vue-site-73ef4.appspot.com",messagingSenderId:"14715019104",appId:"1:14715019104:web:ff68fa5969cbc32e9c0805"};(0,yt.mg)(bt),(0,e.W0)(D).use(C.gv({history:C.oz("/"),routes:[{path:"/cart",component:B},{path:"/products",component:Z},{path:"/products/:productId",component:wt},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:It}]})).mount("#app")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(n,e,o,a){if(!e){var s=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],a=t[l][2];for(var c=!0,u=0;u<e.length;u++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(c=!1,a<s&&(s=a));if(c){t.splice(l--,1);var i=o();void 0!==i&&(n=i)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[e,o,a]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={524:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,a,s=e[0],c=e[1],u=e[2],i=0;if(s.some((function(n){return 0!==t[n]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var l=u(r)}for(n&&n(e);i<s.length;i++)a=s[i],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(l)},e=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[999],(function(){return r(1952)}));e=r.O(e)})();
//# sourceMappingURL=app.f354b572.js.map