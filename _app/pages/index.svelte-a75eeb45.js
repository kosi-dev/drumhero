import{S as a,i as t,s as e,e as l,t as s,k as n,c,a as r,g as o,d as h,n as i,b as u,f,F as v,H as g,I as p,h as P,G as m,J as d,K as E,z as T}from"../chunks/vendor-b243af11.js";function b(a,t,e){const l=a.slice();return l[17]=t[e],l[18]=t,l[19]=e,l}function I(a){let t,e,m,d,E,T,b,I,B,k,H,U,M,N=a[17]+"",w=a[8](a[0][a[19]],a[3])+"";function x(){a[11].call(k,a[19])}return{c(){t=l("li"),e=l("p"),m=s(a[19]),d=s(":"),E=s(N),T=n(),b=l("p"),I=s(w),B=n(),k=l("input"),H=n(),this.h()},l(l){t=c(l,"LI",{});var s=r(t);e=c(s,"P",{class:!0});var n=r(e);m=o(n,a[19]),d=o(n,":"),E=o(n,N),n.forEach(h),T=i(s),b=c(s,"P",{class:!0});var u=r(b);I=o(u,w),u.forEach(h),B=i(s),k=c(s,"INPUT",{}),H=i(s),s.forEach(h),this.h()},h(){u(e,"class","svelte-v07gg4"),u(b,"class","svelte-v07gg4")},m(l,s){f(l,t,s),v(t,e),v(e,m),v(e,d),v(e,E),v(t,T),v(t,b),v(b,I),v(t,B),v(t,k),g(k,a[0][a[19]]),v(t,H),U||(M=p(k,"input",x),U=!0)},p(t,e){a=t,9&e&&w!==(w=a[8](a[0][a[19]],a[3])+"")&&P(I,w),1&e&&k.value!==a[0][a[19]]&&g(k,a[0][a[19]])},d(a){a&&h(t),U=!1,M()}}}function B(a){let t,e,T,B,k,H,U,M,N,w,x,y,A,S,D,L,W,j,z,F,G,J,K,O,X,q,C=a[4]?"Stop beat!":"Play beat!",Q=a[5],R=[];for(let l=0;l<Q.length;l+=1)R[l]=I(b(a,Q,l));return{c(){t=l("h1"),e=s("Welcome to DrumHero!"),T=n(),B=l("p"),k=s("Time: "),H=s(a[3]),U=n(),M=l("button"),N=s(C),w=n(),x=l("p"),y=s("BPM:"),A=n(),S=l("input"),D=n(),L=l("p"),W=s("BPB:"),j=n(),z=l("input"),F=n(),G=l("h2"),J=s("Tracks"),K=n(),O=l("ul");for(let a=0;a<R.length;a+=1)R[a].c();this.h()},l(l){t=c(l,"H1",{class:!0});var s=r(t);e=o(s,"Welcome to DrumHero!"),s.forEach(h),T=i(l),B=c(l,"P",{class:!0});var n=r(B);k=o(n,"Time: "),H=o(n,a[3]),n.forEach(h),U=i(l),M=c(l,"BUTTON",{class:!0});var u=r(M);N=o(u,C),u.forEach(h),w=i(l),x=c(l,"P",{class:!0});var f=r(x);y=o(f,"BPM:"),f.forEach(h),A=i(l),S=c(l,"INPUT",{}),D=i(l),L=c(l,"P",{class:!0});var v=r(L);W=o(v,"BPB:"),v.forEach(h),j=i(l),z=c(l,"INPUT",{}),F=i(l),G=c(l,"H2",{class:!0});var g=r(G);J=o(g,"Tracks"),g.forEach(h),K=i(l),O=c(l,"UL",{});var p=r(O);for(let a=0;a<R.length;a+=1)R[a].l(p);p.forEach(h),this.h()},h(){u(t,"class","svelte-v07gg4"),u(B,"class","svelte-v07gg4"),u(M,"class","svelte-v07gg4"),u(x,"class","svelte-v07gg4"),u(L,"class","svelte-v07gg4"),u(G,"class","svelte-v07gg4")},m(l,s){f(l,t,s),v(t,e),f(l,T,s),f(l,B,s),v(B,k),v(B,H),f(l,U,s),f(l,M,s),v(M,N),f(l,w,s),f(l,x,s),v(x,y),f(l,A,s),f(l,S,s),g(S,a[1]),f(l,D,s),f(l,L,s),v(L,W),f(l,j,s),f(l,z,s),g(z,a[2]),f(l,F,s),f(l,G,s),v(G,J),f(l,K,s),f(l,O,s);for(let a=0;a<R.length;a+=1)R[a].m(O,null);X||(q=[p(M,"click",a[6]),p(S,"input",a[9]),p(S,"change",a[7]),p(z,"input",a[10]),p(z,"change",a[7])],X=!0)},p(a,[t]){if(8&t&&P(H,a[3]),16&t&&C!==(C=a[4]?"Stop beat!":"Play beat!")&&P(N,C),2&t&&S.value!==a[1]&&g(S,a[1]),4&t&&z.value!==a[2]&&g(z,a[2]),297&t){let e;for(Q=a[5],e=0;e<Q.length;e+=1){const l=b(a,Q,e);R[e]?R[e].p(l,t):(R[e]=I(l),R[e].c(),R[e].m(O,null))}for(;e<R.length;e+=1)R[e].d(1);R.length=Q.length}},i:m,o:m,d(a){a&&h(t),a&&h(T),a&&h(B),a&&h(U),a&&h(M),a&&h(w),a&&h(x),a&&h(A),a&&h(S),a&&h(D),a&&h(L),a&&h(j),a&&h(z),a&&h(F),a&&h(G),a&&h(K),a&&h(O),d(R,a),X=!1,E(q)}}}function k(a,t,e){let l,s=["1010101010001010","0000000010000000","0010010000010101","10001","00001"],n=60,c=4,r=0,o=["hit","coin","blop","explode","powerup"],h=!1;function i(){if(h){var a=u();if(0!=a){e(3,r=(r+1)%a);for(let a=0;a<Math.min(s.length,o.length);a++){var t=s[a];if(!(r>t.length))if("1"==t.charAt(r))new Audio(o[a]+".wav").play()}}}}function u(){return s.flatMap((a=>a.length)).sort(((a,t)=>a-t))[s.length-1]}function f(){clearInterval(l),l=setInterval(i,6e4/(n*c))}return T((()=>(f(),()=>{clearInterval(l)}))),[s,n,c,r,h,o,function(){e(4,h=!h),e(3,r=0)},f,function(a,t){for(var e=u();a.length<e;)a+="0";for(var l=a.slice(t,e);l.length<32;)l+=a;for(;l.includes("0");)l=l.replace("0","-");return"1"==l.charAt(0)&&(l=l.replace("1","X")),l.slice(0,32)},function(){n=this.value,e(1,n)},function(){c=this.value,e(2,c)},function(a){s[a]=this.value,e(0,s)}]}export default class extends a{constructor(a){super(),t(this,a,k,B,e,{})}}