import{Ia as w,M as d,Q as i,V as m,Z as v,_a as _,aa as p,ca as C,ea as c,fa as g,ga as f,ha as n,ia as r,ja as u,na as x,qa as h,va as a,wa as s,za as y}from"./chunk-X5DVS723.js";var E=t=>({"md:flex-row-reverse":t});function k(t,o){if(t&1&&(n(0,"p",7),a(1),r()),t&2){let e=o.$implicit;i(),s(e)}}var S=class t{title="";imageSource="";text=[];imagePosition="right";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["lnss-resposive-content"]],inputs:{title:"title",imageSource:"imageSource",text:"text",imagePosition:"imagePosition"},standalone:!1,decls:10,vars:5,consts:[[1,"container","mx-auto","p-4"],[1,"flex","justify-between","items-center","mb-4"],[1,"special-header"],[1,"flex","flex-col","md:flex-row","gap-6","items-center",3,"ngClass"],[1,"w-full","md:w-1/2","md:px-4"],["alt","Image",1,"h-[260px]","w-full","rounded-lg","shadow-lg",3,"src"],[1,"w-full","md:w-1/2"],[1,"mb-4"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"div",1)(2,"h4",2),a(3),r()(),n(4,"div",3)(5,"div",4),u(6,"img",5),r(),n(7,"div",6),g(8,k,2,1,"p",7,c),r()()()),e&2&&(i(3),s(l.title),i(),p("ngClass",y(3,E,l.imagePosition==="right")),i(2),p("src",l.imageSource,d),i(2),f(l.text))},dependencies:[w],styles:["img[_ngcontent-%COMP%]{transition:transform .3s ease-in-out}img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}"]})};function T(t,o){if(t&1&&(n(0,"a",5),a(1),r()),t&2){let e=x().$implicit;p("routerLink",e.linkPath),i(),s(e.title)}}function D(t,o){if(t&1&&(n(0,"div",1),u(1,"img",2),n(2,"div",3)(3,"h5",4),a(4),r(),n(5,"p"),a(6),r()(),v(7,T,2,2,"a",5),r()),t&2){let e=o.$implicit;i(),h("alt",e.title),p("src",e.imageSrc,d),i(3),s(e.title),i(2),s(e.description),i(),C(e.linkPath?7:-1)}}var I=class t{cards=[];static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["lnss-card-grid"]],inputs:{cards:"cards"},standalone:!1,decls:3,vars:0,consts:[[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-3","gap-6","p-4"],[1,"bg-white","shadow-lg","rounded-lg","overflow-hidden","p-4","flex","flex-col","h-full"],[1,"w-full","h-40","object-cover",3,"src","alt"],[1,"flex-grow"],[1,"text-xl","my-2"],[1,"mt-2","ln-button","w-fit","self-start",3,"routerLink"]],template:function(e,l){e&1&&(n(0,"div",0),g(1,D,8,5,"div",1,c),r()),e&2&&(i(),f(l.cards))},dependencies:[_],encapsulation:2})};export{S as a,I as b};
