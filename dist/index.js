"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var Wn=c(function(qU,Un){
var Qn=require('@stdlib/strided/base/reinterpret-complex64/dist');function jO(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0)return i;if(u=Qn(e,0),v=Qn(i,0),a===1&&r===1){for(q=0;q<n*2;q+=2)v[q]=u[q],v[q+1]=u[q+1];return i}for(a<0?t=2*(1-n)*a:t=0,r<0?f=2*(1-n)*r:f=0,s=a*2,o=r*2,q=0;q<n;q++)v[f]=u[t],v[f+1]=u[t+1],t+=s,f+=o;return i}Un.exports=jO
});var Yn=c(function(cU,hn){
var $n=require('@stdlib/strided/base/reinterpret-complex64/dist');function bO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;for(s=$n(e,0),o=$n(r,0),t=a*2,f=u*2,q=i*2,m=v*2,p=0;p<n;p++)o[m]=s[q],o[m+1]=s[q+1],q+=t,m+=f;return r}hn.exports=bO
});var xn=c(function(mU,dn){
var wO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xn=Wn(),yO=Yn();wO(Xn,"ndarray",yO);dn.exports=Xn
});var ev=c(function(lU,rv){
var RO=require("path").join,kO=require('@stdlib/utils/try-require/dist'),_O=require('@stdlib/assert/is-error/dist'),EO=xn(),sa,Nn=kO(RO(__dirname,"./native.js"));_O(Nn)?sa=EO:sa=Nn;rv.exports=sa
});var iv=c(function(pU,uv){
var av=require('@stdlib/strided/base/reinterpret-complex64/dist');function OO(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return i;if(u=av(e,0),v=av(i,0),a===1&&r===1){for(m=0;m<n*2;m+=2)s=u[m],u[m]=v[m],v[m]=s,p=m+1,s=u[p],u[p]=v[p],v[p]=s;return i}for(a<0?f=2*(1-n)*a:f=0,r<0?q=2*(1-n)*r:q=0,o=a*2,t=r*2,m=0;m<n;m++)s=u[f],u[f]=v[q],v[q]=s,s=u[f+1],u[f+1]=v[q+1],v[q+1]=s,f+=o,q+=t;return i}uv.exports=OO
});var sv=c(function(gU,vv){
var nv=require('@stdlib/strided/base/reinterpret-complex64/dist');function FO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(n<=0)return r;for(s=nv(e,0),o=nv(r,0),f=a*2,q=u*2,m=i*2,p=v*2,l=0;l<n;l++)t=s[m],s[m]=o[p],o[p]=t,t=s[m+1],s[m+1]=o[p+1],o[p+1]=t,m+=f,p+=q;return r}vv.exports=FO
});var fv=c(function(jU,ov){
var MO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tv=iv(),TO=sv();MO(tv,"ndarray",TO);ov.exports=tv
});var mv=c(function(bU,cv){
var SO=require("path").join,ZO=require('@stdlib/utils/try-require/dist'),PO=require('@stdlib/assert/is-error/dist'),AO=fv(),ta,qv=ZO(SO(__dirname,"./native.js"));PO(qv)?ta=AO:ta=qv;cv.exports=ta
});var pv=c(function(wU,lv){
var d=require('@stdlib/math/base/special/abs/dist'),oa=6;function LO(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%oa,r>0)for(u=0;u<r;u++)i+=d(e[u]);if(n<oa)return i;for(u=r;u<n;u+=oa)i+=d(e[u])+d(e[u+1])+d(e[u+2])+d(e[u+3])+d(e[u+4])+d(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=d(e[u]);return i}lv.exports=LO
});var jv=c(function(yU,gv){
var x=require('@stdlib/math/base/special/abs/dist'),Tr=6;function BO(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Tr,v>0)for(s=0;s<v;s++)r+=x(e[u]),u+=a;if(n<Tr)return r;for(s=v;s<n;s+=Tr)r+=x(e[u])+x(e[u+1])+x(e[u+2])+x(e[u+3])+x(e[u+4])+x(e[u+5]),u+=Tr;return r}for(s=0;s<n;s++)r+=x(e[u]),u+=a;return r}gv.exports=BO
});var yv=c(function(RU,wv){
var CO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),bv=pv(),GO=jv();CO(bv,"ndarray",GO);wv.exports=bv
});var _v=c(function(kU,kv){
var IO=require("path").join,KO=require('@stdlib/utils/try-require/dist'),VO=require('@stdlib/assert/is-error/dist'),zO=yv(),fa,Rv=KO(IO(__dirname,"./native.js"));VO(Rv)?fa=zO:fa=Rv;kv.exports=fa
});var Ov=c(function(_U,Ev){
var qa=4;function DO(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%qa,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<qa)return r;for(t=o;t<n;t+=qa)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}Ev.exports=DO
});var Mv=c(function(EU,Fv){
var cr=4;function HO(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%cr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<cr)return u;for(q=f;q<n;q+=cr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=cr,t+=cr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Fv.exports=HO
});var Zv=c(function(OU,Sv){
var JO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Tv=Ov(),QO=Mv();JO(Tv,"ndarray",QO);Sv.exports=Tv
});var Lv=c(function(FU,Av){
var UO=require("path").join,WO=require('@stdlib/utils/try-require/dist'),$O=require('@stdlib/assert/is-error/dist'),hO=Zv(),ca,Pv=WO(UO(__dirname,"./native.js"));$O(Pv)?ca=hO:ca=Pv;Av.exports=ca
});var Cv=c(function(MU,Bv){
var ma=8;function YO(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%ma,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<ma)return i;for(o=s;o<n;o+=ma)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}Bv.exports=YO
});var Iv=c(function(TU,Gv){
var mr=8;function XO(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%mr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<mr)return r;for(f=t;f<n;f+=mr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=mr,o+=mr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}Gv.exports=XO
});var zv=c(function(SU,Vv){
var dO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Kv=Cv(),xO=Iv();dO(Kv,"ndarray",xO);Vv.exports=Kv
});var Jv=c(function(ZU,Hv){
var NO=require("path").join,r5=require('@stdlib/utils/try-require/dist'),e5=require('@stdlib/assert/is-error/dist'),a5=zv(),la,Dv=r5(NO(__dirname,"./native.js"));e5(Dv)?la=a5:la=Dv;Hv.exports=la
});var Uv=c(function(PU,Qv){
var pa=5;function u5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%pa,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<pa)return u;for(t=o;t<n;t+=pa)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}Qv.exports=u5
});var $v=c(function(AU,Wv){
var lr=5;function i5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%lr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<lr)return s;for(q=f;q<n;q+=lr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=lr,t+=lr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Wv.exports=i5
});var Xv=c(function(LU,Yv){
var n5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hv=Uv(),v5=$v();n5(hv,"ndarray",v5);Yv.exports=hv
});var Sr=c(function(BU,xv){
var s5=require("path").join,t5=require('@stdlib/utils/try-require/dist'),o5=require('@stdlib/assert/is-error/dist'),f5=Xv(),ga,dv=t5(s5(__dirname,"./native.js"));o5(dv)?ga=f5:ga=dv;xv.exports=ga
});var as=c(function(CU,es){
var q5=require('@stdlib/math/base/special/sqrt/dist'),Nv=require('@stdlib/math/base/special/abs/dist'),rs=require('@stdlib/math/base/special/pow/dist');function c5(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return Nv(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=Nv(e[v]),i<u?(r=1+r*rs(i/u,2),i=u):r+=rs(u/i,2));return i*q5(r)}es.exports=c5
});var vs=c(function(GU,ns){
var m5=require('@stdlib/math/base/special/sqrt/dist'),us=require('@stdlib/math/base/special/abs/dist'),is=require('@stdlib/math/base/special/pow/dist');function l5(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return us(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=us(e[s]),r<v?(u=1+u*is(r/v,2),r=v):u+=is(v/r,2)),s+=a;return r*m5(u)}ns.exports=l5
});var os=c(function(IU,ts){
var p5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ss=as(),g5=vs();p5(ss,"ndarray",g5);ts.exports=ss
});var cs=c(function(KU,qs){
var j5=require("path").join,b5=require('@stdlib/utils/try-require/dist'),w5=require('@stdlib/assert/is-error/dist'),y5=os(),ja,fs=b5(j5(__dirname,"./native.js"));w5(fs)?ja=y5:ja=fs;qs.exports=ja
});var ba=c(function(VU,gs){
var ms=require('@stdlib/math/base/special/abs/dist'),R5=require('@stdlib/math/base/special/sqrt/dist'),ls=require('@stdlib/math/base/special/abs2/dist'),ps=require('@stdlib/math/base/special/copysign/dist');function k5(n,e,a,i,r){var u,v,s,o,t,f,q,m;return s=ms(n),o=ms(e),s>o?v=ps(1,n):v=ps(1,e),u=s+o,u===0?(f=1,q=0,t=0,m=0):(t=u*R5(ls(n/u)+ls(e/u)),t*=v,f=n/t,q=e/t,m=1,s>o?m=q:f!==0&&(m=1/f)),n=t,e=m,a[r]=n,a[r+i]=e,a[r+2*i]=f,a[r+3*i]=q,a}gs.exports=k5
});var bs=c(function(zU,js){
var _5=require('@stdlib/array/float64/dist'),E5=ba();function O5(n,e){var a=new _5(4);return E5(n,e,a,1,0)}js.exports=O5
});var Rs=c(function(DU,ys){
var F5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ws=bs(),M5=ba();F5(ws,"assign",M5);ys.exports=ws
});var _s=c(function(HU,ks){
var wa=5;function T5(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%wa,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<wa)return a;for(r=u;r<n;r+=wa)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}ks.exports=T5
});var Os=c(function(JU,Es){
var Zr=5;function S5(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Zr,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Zr)return a;for(s=v;s<n;s+=Zr)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e,u+=Zr;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}Es.exports=S5
});var Ts=c(function(QU,Ms){
var Z5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fs=_s(),P5=Os();Z5(Fs,"ndarray",P5);Ms.exports=Fs
});var Ps=c(function(UU,Zs){
var A5=require("path").join,L5=require('@stdlib/utils/try-require/dist'),B5=require('@stdlib/assert/is-error/dist'),C5=Ts(),ya,Ss=L5(A5(__dirname,"./native.js"));B5(Ss)?ya=C5:ya=Ss;Zs.exports=ya
});var Ls=c(function(WU,As){
var Ra=5;function G5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%Ra,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<Ra)return u;for(t=o;t<n;t+=Ra)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}As.exports=G5
});var Cs=c(function($U,Bs){
var pr=5;function I5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%pr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<pr)return s;for(q=f;q<n;q+=pr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=pr,t+=pr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Bs.exports=I5
});var Ks=c(function(hU,Is){
var K5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gs=Ls(),V5=Cs();K5(Gs,"ndarray",V5);Is.exports=Gs
});var Ds=c(function(YU,zs){
var z5=require("path").join,D5=require('@stdlib/utils/try-require/dist'),H5=require('@stdlib/assert/is-error/dist'),J5=Ks(),ka,Vs=D5(z5(__dirname,"./native.js"));H5(Vs)?ka=J5:ka=Vs;zs.exports=ka
});var Js=c(function(XU,Hs){
var _a=3;function Q5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%_a,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<_a)return i;for(t=o;t<n;t+=_a)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}Hs.exports=Q5
});var Us=c(function(dU,Qs){
var gr=3;function U5(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%gr,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<gr)return r;for(q=f;q<n;q+=gr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=gr,t+=gr;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}Qs.exports=U5
});var hs=c(function(xU,$s){
var W5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ws=Js(),$5=Us();W5(Ws,"ndarray",$5);$s.exports=Ws
});var Pr=c(function(NU,Xs){
var h5=require("path").join,Y5=require('@stdlib/utils/try-require/dist'),X5=require('@stdlib/assert/is-error/dist'),d5=hs(),Ea,Ys=Y5(h5(__dirname,"./native.js"));X5(Ys)?Ea=d5:Ea=Ys;Xs.exports=Ea
});var xs=c(function(rW,ds){
var N=require('@stdlib/math/base/special/abs/dist'),Oa=6;function x5(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%Oa,r>0)for(u=0;u<r;u++)i+=N(e[u]);if(n<Oa)return i;for(u=r;u<n;u+=Oa)i+=N(e[u])+N(e[u+1])+N(e[u+2])+N(e[u+3])+N(e[u+4])+N(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=N(e[u]);return i}ds.exports=x5
});var r0=c(function(eW,Ns){
var rr=require('@stdlib/math/base/special/abs/dist'),Ar=6;function N5(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Ar,v>0)for(s=0;s<v;s++)r+=rr(e[u]),u+=a;if(n<Ar)return r;for(s=v;s<n;s+=Ar)r+=rr(e[u])+rr(e[u+1])+rr(e[u+2])+rr(e[u+3])+rr(e[u+4])+rr(e[u+5]),u+=Ar;return r}for(s=0;s<n;s++)r+=rr(e[u]),u+=a;return r}Ns.exports=N5
});var u0=c(function(aW,a0){
var rF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),e0=xs(),eF=r0();rF(e0,"ndarray",eF);a0.exports=e0
});var n0=c(function(uW,i0){
var Fa=4;function aF(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%Fa,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<Fa)return r;for(t=o;t<n;t+=Fa)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}i0.exports=aF
});var s0=c(function(iW,v0){
var jr=4;function uF(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%jr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<jr)return u;for(q=f;q<n;q+=jr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=jr,t+=jr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}v0.exports=uF
});var f0=c(function(nW,o0){
var iF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),t0=n0(),nF=s0();iF(t0,"ndarray",nF);o0.exports=t0
});var Ma=c(function(vW,q0){
function vF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],q=i,m=v,p=0;p<n;p++)t(o,m,f(s,q)),q+=a,m+=u;return e}q0.exports=vF
});var l0=c(function(sW,m0){
var c0=require('@stdlib/array/base/arraylike2object/dist'),sF=Ma(),Ta=8;function tF(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(s=c0(e),o=c0(i),s.accessorProtocol||o.accessorProtocol)return a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,sF(n,s,a,u,o,r,v),o.data;if(a===1&&r===1){if(t=n%Ta,t>0)for(f=0;f<t;f++)i[f]=e[f];if(n<Ta)return i;for(f=t;f<n;f+=Ta)i[f]=e[f],i[f+1]=e[f+1],i[f+2]=e[f+2],i[f+3]=e[f+3],i[f+4]=e[f+4],i[f+5]=e[f+5],i[f+6]=e[f+6],i[f+7]=e[f+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,f=0;f<n;f++)i[v]=e[u],u+=a,v+=r;return i}m0.exports=tF
});var j0=c(function(tW,g0){
var p0=require('@stdlib/array/base/arraylike2object/dist'),oF=Ma(),br=8;function fF(n,e,a,i,r,u,v){var s,o,t,f,q,m;if(n<=0)return r;if(t=p0(e),f=p0(r),t.accessorProtocol||f.accessorProtocol)return oF(n,t,a,i,f,u,v),f.data;if(s=i,o=v,a===1&&u===1){if(q=n%br,q>0)for(m=0;m<q;m++)r[o]=e[s],s+=a,o+=u;if(n<br)return r;for(m=q;m<n;m+=br)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=br,o+=br;return r}for(m=0;m<n;m++)r[o]=e[s],s+=a,o+=u;return r}g0.exports=fF
});var y0=c(function(oW,w0){
var qF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),b0=l0(),cF=j0();qF(b0,"ndarray",cF);w0.exports=b0
});var k0=c(function(fW,R0){
var Sa=5;function mF(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%Sa,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<Sa)return u;for(t=o;t<n;t+=Sa)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}R0.exports=mF
});var E0=c(function(qW,_0){
var wr=5;function lF(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%wr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<wr)return s;for(q=f;q<n;q+=wr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=wr,t+=wr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}_0.exports=lF
});var Za=c(function(cW,F0){
var pF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O0=k0(),gF=E0();pF(O0,"ndarray",gF);F0.exports=O0
});var Z0=c(function(mW,S0){
var jF=require('@stdlib/math/base/special/sqrt/dist'),M0=require('@stdlib/math/base/special/abs/dist'),T0=require('@stdlib/math/base/special/pow/dist');function bF(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return M0(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=M0(e[v]),i<u?(r=1+r*T0(i/u,2),i=u):r+=T0(u/i,2));return i*jF(r)}S0.exports=bF
});var B0=c(function(lW,L0){
var wF=require('@stdlib/math/base/special/sqrt/dist'),P0=require('@stdlib/math/base/special/abs/dist'),A0=require('@stdlib/math/base/special/pow/dist');function yF(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return P0(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=P0(e[s]),r<v?(u=1+u*A0(r/v,2),r=v):u+=A0(v/r,2)),s+=a;return r*wF(u)}L0.exports=yF
});var I0=c(function(pW,G0){
var RF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),C0=Z0(),kF=B0();RF(C0,"ndarray",kF);G0.exports=C0
});var V0=c(function(gW,K0){
var Pa=5;function _F(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(r=n%Pa,r>0)for(u=0;u<r;u+=1)a[u]*=e;if(n<Pa)return a;for(u=r;u<n;u+=Pa)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e;return a}for(n*=i,u=0;u<n;u+=i)a[u]*=e;return a}K0.exports=_F
});var D0=c(function(jW,z0){
var Aa=5;function EF(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Aa,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Aa)return a;for(s=v;s<n;s+=Aa)a[s]*=e,a[s+1]*=e,a[s+2]*=e,a[s+3]*=e,a[s+4]*=e;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}z0.exports=EF
});var Q0=c(function(bW,J0){
var OF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),H0=V0(),FF=D0();OF(H0,"ndarray",FF);J0.exports=H0
});var La=c(function(wW,U0){
function MF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],m=i,p=v,l=0;l<n;l++)q=f(s,m),t(s,m,f(o,p)),t(o,p,q),m+=a,p+=u;return e}U0.exports=MF
});var h0=c(function(yW,$0){
var W0=require('@stdlib/array/base/arraylike2object/dist'),TF=La(),Ba=3;function SF(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0)return i;if(o=W0(e),t=W0(i),o.accessorProtocol||t.accessorProtocol)return a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,TF(n,o,a,v,t,r,s),t.data;if(a===1&&r===1){if(f=n%Ba,f>0)for(q=0;q<f;q++)u=e[q],e[q]=i[q],i[q]=u;if(n<Ba)return i;for(q=f;q<n;q+=Ba)u=e[q],e[q]=i[q],i[q]=u,m=q+1,u=e[m],e[m]=i[m],i[m]=u,m+=1,u=e[m],e[m]=i[m],i[m]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,q=0;q<n;q++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}$0.exports=SF
});var d0=c(function(RW,X0){
var Y0=require('@stdlib/array/base/arraylike2object/dist'),ZF=La(),yr=3;function PF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;if(f=Y0(e),q=Y0(r),f.accessorProtocol||q.accessorProtocol)return ZF(n,f,a,i,q,u,v),q.data;if(o=i,t=v,a===1&&u===1){if(m=n%yr,m>0)for(p=0;p<m;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<yr)return r;for(p=m;p<n;p+=yr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=yr,t+=yr;return r}for(p=0;p<n;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}X0.exports=PF
});var Ca=c(function(kW,N0){
var AF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),x0=h0(),LF=d0();AF(x0,"ndarray",LF);N0.exports=x0
});var et=c(function(_W,rt){
var BF=require('@stdlib/math/base/special/absf/dist'),CF=require('@stdlib/number/float64/base/to-float32/dist');function GF(n,e,a){var i,r;if(i=0,n<=0||a<=0)return i;for(n*=a,r=0;r<n;r+=a)i=CF(i+BF(e[r]));return i}rt.exports=GF
});var ut=c(function(EW,at){
var IF=require('@stdlib/math/base/special/absf/dist'),KF=require('@stdlib/number/float64/base/to-float32/dist');function VF(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;for(u=i,v=0;v<n;v++)r=KF(r+IF(e[u])),u+=a;return r}at.exports=VF
});var vt=c(function(OW,nt){
var zF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),it=et(),DF=ut();zF(it,"ndarray",DF);nt.exports=it
});var ot=c(function(FW,tt){
var HF=require("path").join,JF=require('@stdlib/utils/try-require/dist'),QF=require('@stdlib/assert/is-error/dist'),UF=vt(),Ga,st=JF(HF(__dirname,"./native.js"));QF(st)?Ga=UF:Ga=st;tt.exports=Ga
});var qt=c(function(MW,ft){
var fr=require('@stdlib/number/float64/base/to-float32/dist'),Ia=4;function WF(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%Ia,o>0)for(t=0;t<o;t++)r[t]+=fr(e*a[t]);if(n<Ia)return r;for(t=o;t<n;t+=Ia)r[t]+=fr(e*a[t]),r[t+1]+=fr(e*a[t+1]),r[t+2]+=fr(e*a[t+2]),r[t+3]+=fr(e*a[t+3]);return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=fr(e*a[v]),v+=i,s+=u;return r}ft.exports=WF
});var mt=c(function(TW,ct){
var qr=require('@stdlib/number/float64/base/to-float32/dist'),Rr=4;function $F(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%Rr,f>0)for(q=0;q<f;q++)u[t]+=qr(e*a[o]),o+=i,t+=v;if(n<Rr)return u;for(q=f;q<n;q+=Rr)u[t]+=qr(e*a[o]),u[t+1]+=qr(e*a[o+1]),u[t+2]+=qr(e*a[o+2]),u[t+3]+=qr(e*a[o+3]),o+=Rr,t+=Rr;return u}for(q=0;q<n;q++)u[t]+=qr(e*a[o]),o+=i,t+=v;return u}ct.exports=$F
});var gt=c(function(SW,pt){
var hF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lt=qt(),YF=mt();hF(lt,"ndarray",YF);pt.exports=lt
});var wt=c(function(ZW,bt){
var XF=require("path").join,dF=require('@stdlib/utils/try-require/dist'),xF=require('@stdlib/assert/is-error/dist'),NF=gt(),Ka,jt=dF(XF(__dirname,"./native.js"));xF(jt)?Ka=NF:Ka=jt;bt.exports=Ka
});var Rt=c(function(PW,yt){
var Va=8;function rM(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%Va,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<Va)return i;for(o=s;o<n;o+=Va)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}yt.exports=rM
});var _t=c(function(AW,kt){
var kr=8;function eM(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%kr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<kr)return r;for(f=t;f<n;f+=kr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=kr,o+=kr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}kt.exports=eM
});var Ft=c(function(LW,Ot){
var aM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Et=Rt(),uM=_t();aM(Et,"ndarray",uM);Ot.exports=Et
});var St=c(function(BW,Tt){
var iM=require("path").join,nM=require('@stdlib/utils/try-require/dist'),vM=require('@stdlib/assert/is-error/dist'),sM=Ft(),za,Mt=nM(iM(__dirname,"./native.js"));vM(Mt)?za=sM:za=Mt;Tt.exports=za
});var At=c(function(CW,Pt){
var Zt=require('@stdlib/number/float64/base/to-float32/dist');function tM(n,e,a,i,r){var u,v,s,o;if(u=0,n<=0)return u;for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,o=0;o<n;o++)u=Zt(u+Zt(e[v]*i[s])),v+=a,s+=r;return u}Pt.exports=tM
});var Ct=c(function(GW,Bt){
var Lt=require('@stdlib/number/float64/base/to-float32/dist');function oM(n,e,a,i,r,u,v){var s,o,t,f;if(s=0,n<=0)return s;for(o=i,t=v,f=0;f<n;f++)s=Lt(s+Lt(e[o]*r[t])),o+=a,t+=u;return s}Bt.exports=oM
});var Kt=c(function(IW,It){
var fM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gt=At(),qM=Ct();fM(Gt,"ndarray",qM);It.exports=Gt
});var Lr=c(function(KW,zt){
var cM=require("path").join,mM=require('@stdlib/utils/try-require/dist'),lM=require('@stdlib/assert/is-error/dist'),pM=Kt(),Da,Vt=mM(cM(__dirname,"./native.js"));lM(Vt)?Da=pM:Da=Vt;zt.exports=Da
});var Ht=c(function(VW,Dt){
var Br=require('@stdlib/number/float64/base/to-float32/dist'),Ha=5;function gM(n,e,a,i,r,u){var v,s,o,t,f;if(v=e,n<=0)return Br(v);if(i===1&&u===1){if(t=n%Ha,t>0)for(f=0;f<t;f++)v+=a[f]*r[f];if(n<Ha)return Br(v);for(f=t;f<n;f+=Ha)v+=a[f]*r[f]+a[f+1]*r[f+1]+a[f+2]*r[f+2]+a[f+3]*r[f+3]+a[f+4]*r[f+4];return Br(v)}for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,f=0;f<n;f++)v+=a[s]*r[o],s+=i,o+=u;return Br(v)}Dt.exports=gM
});var Qt=c(function(zW,Jt){
var Cr=require('@stdlib/number/float64/base/to-float32/dist'),_r=5;function jM(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(o=e,n<=0)return Cr(o);if(t=r,f=s,i===1&&v===1){if(q=n%_r,q>0)for(m=0;m<q;m++)o+=a[t]*u[f],t+=1,f+=1;if(n<_r)return Cr(o);for(m=q;m<n;m+=_r)o+=a[t]*u[f]+a[t+1]*u[f+1]+a[t+2]*u[f+2]+a[t+3]*u[f+3]+a[t+4]*u[f+4],t+=_r,f+=_r;return Cr(o)}for(m=0;m<n;m++)o+=a[t]*u[f],t+=i,f+=v;return Cr(o)}Jt.exports=jM
});var $t=c(function(DW,Wt){
var bM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ut=Ht(),wM=Qt();bM(Ut,"ndarray",wM);Wt.exports=Ut
});var Xt=c(function(HW,Yt){
var yM=require("path").join,RM=require('@stdlib/utils/try-require/dist'),kM=require('@stdlib/assert/is-error/dist'),_M=$t(),Ja,ht=RM(yM(__dirname,"./native.js"));kM(ht)?Ja=_M:Ja=ht;Yt.exports=Ja
});var Nt=c(function(JW,xt){
var EM=require('@stdlib/math/base/special/sqrtf/dist'),dt=require('@stdlib/math/base/special/absf/dist'),er=require('@stdlib/number/float64/base/to-float32/dist');function OM(n,e,a){var i,r,u,v,s;if(n<=0||a<=0)return 0;if(n===1)return dt(e[0]);for(i=0,r=1,n*=a,s=0;s<n;s+=a)e[s]!==0&&(u=dt(e[s]),i<u?(v=er(i/u),r=er(1+er(r*er(v*v))),i=u):(v=er(u/i),r=er(r+er(v*v))));return er(i*EM(r))}xt.exports=OM
});var ao=c(function(QW,eo){
var FM=require('@stdlib/math/base/special/sqrtf/dist'),ro=require('@stdlib/math/base/special/absf/dist'),ar=require('@stdlib/number/float64/base/to-float32/dist');function MM(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1)return ro(e[i]);for(s=i,r=0,u=1,t=0;t<n;t++)e[s]!==0&&(v=ro(e[s]),r<v?(o=ar(r/v),u=ar(1+ar(u*ar(o*o))),r=v):(o=ar(v/r),u=ar(u+ar(o*o)))),s+=a;return ar(r*FM(u))}eo.exports=MM
});var no=c(function(UW,io){
var TM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),uo=Nt(),SM=ao();TM(uo,"ndarray",SM);io.exports=uo
});var to=c(function(WW,so){
var ZM=require("path").join,PM=require('@stdlib/utils/try-require/dist'),AM=require('@stdlib/assert/is-error/dist'),LM=no(),Qa,vo=PM(ZM(__dirname,"./native.js"));AM(vo)?Qa=LM:Qa=vo;so.exports=Qa
});var Ua=c(function($W,co){
var Y=require('@stdlib/number/float64/base/to-float32/dist'),oo=require('@stdlib/math/base/special/absf/dist'),BM=require('@stdlib/math/base/special/sqrtf/dist'),fo=require('@stdlib/math/base/special/abs2f/dist'),qo=require('@stdlib/math/base/special/copysignf/dist');function CM(n,e,a,i,r){var u,v,s,o,t,f,q,m;return s=oo(n),o=oo(e),s>o?v=qo(1,n):v=qo(1,e),u=Y(s+o),u===0?(f=1,q=0,t=0,m=0):(t=Y(u*BM(Y(fo(Y(n/u))+fo(Y(e/u))))),t=Y(t*v),f=Y(n/t),q=Y(e/t),m=1,s>o?m=q:f!==0&&(m=Y(1/f))),n=t,e=m,a[r]=n,a[r+i]=e,a[r+2*i]=f,a[r+3*i]=q,a}co.exports=CM
});var lo=c(function(hW,mo){
var GM=require('@stdlib/array/float32/dist'),IM=Ua();function KM(n,e){var a=new GM(4);return IM(n,e,a,1,0)}mo.exports=KM
});var jo=c(function(YW,go){
var VM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),po=lo(),zM=Ua();VM(po,"assign",zM);go.exports=po
});var wo=c(function(XW,bo){
var Wa=5;function DM(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%Wa,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<Wa)return a;for(r=u;r<n;r+=Wa)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}bo.exports=DM
});var Ro=c(function(dW,yo){
var Gr=5;function HM(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(s=n%Gr,s>0)for(v=0;v<s;v++)a[u]*=e,u+=i;if(n<Gr)return a;for(v=s;v<n;v+=Gr)a[v]*=e,a[v+1]*=e,a[v+2]*=e,a[v+3]*=e,a[v+4]*=e,u+=Gr;return a}for(v=0;v<n;v++)a[u]*=e,u+=i;return a}yo.exports=HM
});var Eo=c(function(xW,_o){
var JM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ko=wo(),QM=Ro();JM(ko,"ndarray",QM);_o.exports=ko
});var Mo=c(function(NW,Fo){
var UM=require("path").join,WM=require('@stdlib/utils/try-require/dist'),$M=require('@stdlib/assert/is-error/dist'),hM=Eo(),$a,Oo=WM(UM(__dirname,"./native.js"));$M(Oo)?$a=hM:$a=Oo;Fo.exports=$a
});var So=c(function(r9,To){
var ha=3;function YM(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%ha,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<ha)return i;for(t=o;t<n;t+=ha)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}To.exports=YM
});var Po=c(function(e9,Zo){
var Er=3;function XM(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%Er,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<Er)return r;for(q=f;q<n;q+=Er)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=Er,t+=Er;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}Zo.exports=XM
});var Bo=c(function(a9,Lo){
var dM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ao=So(),xM=Po();dM(Ao,"ndarray",xM);Lo.exports=Ao
});var Ir=c(function(u9,Go){
var NM=require("path").join,r7=require('@stdlib/utils/try-require/dist'),e7=require('@stdlib/assert/is-error/dist'),a7=Bo(),Ya,Co=r7(NM(__dirname,"./native.js"));e7(Co)?Ya=a7:Ya=Co;Go.exports=Ya
});var Ko=c(function(i9,Io){
var F=require('@stdlib/utils/define-read-only-property/dist'),O={};F(O,"ccopy",ev());F(O,"cswap",mv());F(O,"dasum",_v());F(O,"daxpy",Lv());F(O,"dcopy",Jv());F(O,"ddot",Sr());F(O,"dnrm2",cs());F(O,"drotg",Rs());F(O,"dscal",Ps());F(O,"dsdot",Ds());F(O,"dswap",Pr());F(O,"gasum",u0());F(O,"gaxpy",f0());F(O,"gcopy",y0());F(O,"gdot",Za());F(O,"gnrm2",I0());F(O,"gscal",Q0());F(O,"gswap",Ca());F(O,"sasum",ot());F(O,"saxpy",wt());F(O,"scopy",St());F(O,"sdot",Lr());F(O,"sdsdot",Xt());F(O,"snrm2",to());F(O,"srotg",jo());F(O,"sscal",Mo());F(O,"sswap",Ir());Io.exports=O
});var Do=c(function(n9,zo){
var Vo=require('@stdlib/assert/is-float64vector-like/dist'),Xa=require('@stdlib/string/format/dist'),u7=Sr().ndarray;function i7(n,e){if(!Vo(n))throw new TypeError(Xa('0G9D8',n));if(!Vo(e))throw new TypeError(Xa('0G9D9',e));if(n.length!==e.length)throw new RangeError(Xa('0G93S',n.length,e.length));return u7(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}zo.exports=i7
});var Jo=c(function(v9,Ho){
var n7=Do();Ho.exports=n7
});var Wo=c(function(s9,Uo){
var Qo=require('@stdlib/assert/is-float64vector-like/dist'),da=require('@stdlib/string/format/dist'),v7=Pr().ndarray;function s7(n,e){if(!Qo(n))throw new TypeError(da('0G9D8',n));if(!Qo(e))throw new TypeError(da('0G9D9',e));if(n.length!==e.length)throw new RangeError(da('0G93S',n.length,e.length));return v7(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}Uo.exports=s7
});var ho=c(function(t9,$o){
var t7=Wo();$o.exports=t7
});var Xo=c(function(o9,Yo){
var xa=5;function o7(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%xa,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<xa)return a;for(u=v;u<n;u+=xa)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}Yo.exports=o7
});var No=c(function(f9,xo){
var Kr=5;function f7(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Kr,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Kr)return a;for(s=v;s<n;s+=Kr)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Kr;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}xo.exports=f7
});var af=c(function(q9,ef){
var q7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),rf=Xo(),c7=No();q7(rf,"ndarray",c7);ef.exports=rf
});var vf=c(function(c9,nf){
var m7=require("path").join,l7=require('@stdlib/utils/try-require/dist'),p7=require('@stdlib/assert/is-error/dist'),g7=af(),Na,uf=l7(m7(__dirname,"./native.js"));p7(uf)?Na=g7:Na=uf;nf.exports=Na
});var of=c(function(m9,tf){
var sf=require('@stdlib/math/base/special/abs/dist');function j7(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,sf(r)>=sf(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}tf.exports=j7
});var cf=c(function(l9,qf){
var ff=require('@stdlib/math/base/special/abs/dist');function b7(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,ff(u)>=ff(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}qf.exports=b7
});var pf=c(function(p9,lf){
var w7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mf=of(),y7=cf();w7(mf,"ndarray",y7);lf.exports=mf
});var Vr=c(function(g9,jf){
var R7=require("path").join,k7=require('@stdlib/utils/try-require/dist'),_7=require('@stdlib/assert/is-error/dist'),E7=pf(),ru,gf=k7(R7(__dirname,"./native.js"));_7(gf)?ru=E7:ru=gf;jf.exports=ru
});var wf=c(function(j9,bf){
var O7=Vr();function F7(n,e,a,i){return O7(n,e,a,i)}bf.exports=F7
});var Rf=c(function(b9,yf){
var M7=Vr().ndarray;function T7(n,e,a,i,r){return M7(n,e,a,i,r)}yf.exports=T7
});var Ef=c(function(w9,_f){
var S7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kf=wf(),Z7=Rf();S7(kf,"ndarray",Z7);_f.exports=kf
});var Mf=c(function(y9,Ff){
var P7=require("path").join,A7=require('@stdlib/utils/try-require/dist'),L7=require('@stdlib/assert/is-error/dist'),B7=Ef(),eu,Of=A7(P7(__dirname,"./native.js"));L7(Of)?eu=B7:eu=Of;Ff.exports=eu
});var Sf=c(function(R9,Tf){
var zr=require('@stdlib/math/base/special/abs/dist');function C7(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,zr(r)>=zr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,zr(s)>=zr(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}Tf.exports=C7
});var Pf=c(function(k9,Zf){
var Dr=require('@stdlib/math/base/special/abs/dist');function G7(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,Dr(u)>=Dr(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,Dr(o)>=Dr(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}Zf.exports=G7
});var Bf=c(function(_9,Lf){
var I7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Af=Sf(),K7=Pf();I7(Af,"ndarray",K7);Lf.exports=Af
});var If=c(function(E9,Gf){
var V7=require("path").join,z7=require('@stdlib/utils/try-require/dist'),D7=require('@stdlib/assert/is-error/dist'),H7=Bf(),au,Cf=z7(V7(__dirname,"./native.js"));D7(Cf)?au=H7:au=Cf;Gf.exports=au
});var Vf=c(function(O9,Kf){
function J7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Kf.exports=J7
});var Df=c(function(F9,zf){
function Q7(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}zf.exports=Q7
});var Qf=c(function(M9,Jf){
var U7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hf=Vf(),W7=Df();U7(Hf,"ndarray",W7);Jf.exports=Hf
});var $f=c(function(T9,Wf){
var $7=require("path").join,h7=require('@stdlib/utils/try-require/dist'),Y7=require('@stdlib/assert/is-error/dist'),X7=Qf(),uu,Uf=h7($7(__dirname,"./native.js"));Y7(Uf)?uu=X7:uu=Uf;Wf.exports=uu
});var nu=c(function(S9,hf){
var d7=require('@stdlib/math/base/special/floor/dist'),x7=128;function iu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,g,j,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(g=0,b=0;b<n;b++)g+=e+a[u],u+=i;return g}if(n<=x7){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(g=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)g+=e+a[u],u+=i;return g}return j=d7(n/2),j-=j%8,iu(j,e,a,i,u)+iu(n-j,e,a,i,u+j*i)}hf.exports=iu
});var Xf=c(function(Z9,Yf){
var N7=nu();function rT(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return N7(n,e,a,i,r)}Yf.exports=rT
});var Nf=c(function(P9,xf){
var eT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),df=Xf(),aT=nu();eT(df,"ndarray",aT);xf.exports=df
});var aq=c(function(A9,eq){
var uT=require("path").join,iT=require('@stdlib/utils/try-require/dist'),nT=require('@stdlib/assert/is-error/dist'),vT=Nf(),vu,rq=iT(uT(__dirname,"./native.js"));nT(rq)?vu=vT:vu=rq;eq.exports=vu
});var tu=c(function(L9,uq){
var sT=require('@stdlib/math/base/special/floor/dist'),M=require('@stdlib/math/base/special/abs/dist'),tT=128;function su(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return M(e[i]);if(r=i,n<8){for(l=0,j=0;j<n;j++)l+=M(e[r]),r+=a;return l}if(n<=tT){for(u=M(e[r]),v=M(e[r+a]),s=M(e[r+2*a]),o=M(e[r+3*a]),t=M(e[r+4*a]),f=M(e[r+5*a]),q=M(e[r+6*a]),m=M(e[r+7*a]),r+=8*a,p=n%8,j=8;j<n-p;j+=8)u+=M(e[r]),v+=M(e[r+a]),s+=M(e[r+2*a]),o+=M(e[r+3*a]),t+=M(e[r+4*a]),f+=M(e[r+5*a]),q+=M(e[r+6*a]),m+=M(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)l+=M(e[r]),r+=a;return l}return g=sT(n/2),g-=g%8,su(g,e,a,r)+su(n-g,e,a,r+g*a)}uq.exports=su
});var vq=c(function(B9,nq){
var iq=require('@stdlib/math/base/special/abs/dist'),oT=tu();function fT(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return iq(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=iq(e[i]),i+=a;return r}return oT(n,e,a,i)}nq.exports=fT
});var oq=c(function(C9,tq){
var qT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sq=vq(),cT=tu();qT(sq,"ndarray",cT);tq.exports=sq
});var cq=c(function(G9,qq){
var mT=require("path").join,lT=require('@stdlib/utils/try-require/dist'),pT=require('@stdlib/assert/is-error/dist'),gT=oq(),ou,fq=lT(mT(__dirname,"./native.js"));pT(fq)?ou=gT:ou=fq;qq.exports=ou
});var pq=c(function(I9,lq){
var mq=require('@stdlib/math/base/special/abs/dist');function jT(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,mq(o)>=mq(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}lq.exports=jT
});var bq=c(function(K9,jq){
var gq=require('@stdlib/math/base/special/abs/dist');function bT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,gq(f)>=gq(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}jq.exports=bT
});var Rq=c(function(V9,yq){
var wT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wq=pq(),yT=bq();wT(wq,"ndarray",yT);yq.exports=wq
});var Hr=c(function(z9,_q){
var RT=require("path").join,kT=require('@stdlib/utils/try-require/dist'),_T=require('@stdlib/assert/is-error/dist'),ET=Rq(),fu,kq=kT(RT(__dirname,"./native.js"));_T(kq)?fu=ET:fu=kq;_q.exports=fu
});var Oq=c(function(D9,Eq){
var OT=Hr();function FT(n,e,a,i,r,u){return OT(n,e,a,i,r,u)}Eq.exports=FT
});var Mq=c(function(H9,Fq){
var MT=Hr().ndarray;function TT(n,e,a,i,r,u,v,s){return MT(n,e,a,i,r,u,v,s)}Fq.exports=TT
});var Zq=c(function(J9,Sq){
var ST=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Tq=Oq(),ZT=Mq();ST(Tq,"ndarray",ZT);Sq.exports=Tq
});var Lq=c(function(Q9,Aq){
var PT=require("path").join,AT=require('@stdlib/utils/try-require/dist'),LT=require('@stdlib/assert/is-error/dist'),BT=Zq(),qu,Pq=AT(PT(__dirname,"./native.js"));LT(Pq)?qu=BT:qu=Pq;Aq.exports=qu
});var Cq=c(function(U9,Bq){
var Jr=require('@stdlib/math/base/special/abs/dist');function CT(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,Jr(e)>=Jr(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,Jr(t)>=Jr(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}Bq.exports=CT
});var Iq=c(function(W9,Gq){
var Qr=require('@stdlib/math/base/special/abs/dist');function GT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j;if(n<=0)return u;for(t=r,f=s,o=0,q=0,j=0;j<n;j++)p=a[t],l=e+p,Qr(e)>=Qr(p)?g=e-l+p:g=p-l+e,e=l,l=q+g,Qr(q)>=Qr(g)?m=q-l+g:m=g-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}Gq.exports=GT
});var zq=c(function($9,Vq){
var IT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Kq=Cq(),KT=Iq();IT(Kq,"ndarray",KT);Vq.exports=Kq
});var Jq=c(function(h9,Hq){
var VT=require("path").join,zT=require('@stdlib/utils/try-require/dist'),DT=require('@stdlib/assert/is-error/dist'),HT=zq(),cu,Dq=zT(VT(__dirname,"./native.js"));DT(Dq)?cu=HT:cu=Dq;Hq.exports=cu
});var Uq=c(function(Y9,Qq){
function JT(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}Qq.exports=JT
});var $q=c(function(X9,Wq){
function QT(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}Wq.exports=QT
});var Xq=c(function(d9,Yq){
var UT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hq=Uq(),WT=$q();UT(hq,"ndarray",WT);Yq.exports=hq
});var Nq=c(function(x9,xq){
var $T=require("path").join,hT=require('@stdlib/utils/try-require/dist'),YT=require('@stdlib/assert/is-error/dist'),XT=Xq(),mu,dq=hT($T(__dirname,"./native.js"));YT(dq)?mu=XT:mu=dq;xq.exports=mu
});var pu=c(function(N9,rc){
var dT=require('@stdlib/math/base/special/floor/dist'),xT=128;function lu(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=xT){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=dT(n/2),lu(q,e,a,i,o,u,v,t),t+=(q-1)*v,lu(n-q,u[t],a,i,o+q*i,u,v,t+v),u}rc.exports=lu
});var ac=c(function(r$,ec){
var NT=pu();function rS(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,NT(n,e,a,i,v,r,u,s))}ec.exports=rS
});var nc=c(function(e$,ic){
var eS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),uc=ac(),aS=pu();eS(uc,"ndarray",aS);ic.exports=uc
});var tc=c(function(a$,sc){
var uS=require("path").join,iS=require('@stdlib/utils/try-require/dist'),nS=require('@stdlib/assert/is-error/dist'),vS=nc(),gu,vc=iS(uS(__dirname,"./native.js"));nS(vc)?gu=vS:gu=vc;sc.exports=gu
});var fc=c(function(u$,oc){
var ju=8;function sS(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ju,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ju)return a;for(u=v;u<n;u+=ju)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}oc.exports=sS
});var cc=c(function(i$,qc){
var Ur=8;function tS(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%Ur,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<Ur)return a;for(s=v;s<n;s+=Ur)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=Ur;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}qc.exports=tS
});var pc=c(function(n$,lc){
var oS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mc=fc(),fS=cc();oS(mc,"ndarray",fS);lc.exports=mc
});var bc=c(function(v$,jc){
var qS=require("path").join,cS=require('@stdlib/utils/try-require/dist'),mS=require('@stdlib/assert/is-error/dist'),lS=pc(),bu,gc=cS(qS(__dirname,"./native.js"));mS(gc)?bu=lS:bu=gc;jc.exports=bu
});var kc=c(function(s$,Rc){
var wc=require('@stdlib/math/base/assert/is-nan/dist'),yc=require('@stdlib/math/base/special/abs/dist');function pS(n,e,a){var i,r,u,v;if(n<=0)return 0;if(n===1||a===0)return wc(e[0])?0:yc(e[0]);for(a<0?r=(1-n)*a:r=0,i=0,v=0;v<n;v++)u=e[r],wc(u)===!1&&(i+=yc(u)),r+=a;return i}Rc.exports=pS
});var Fc=c(function(t$,Oc){
var _c=require('@stdlib/math/base/assert/is-nan/dist'),Ec=require('@stdlib/math/base/special/abs/dist');function gS(n,e,a,i){var r,u,v,s;if(n<=0)return 0;if(n===1||a===0)return _c(e[i])?0:Ec(e[i]);for(u=i,r=0,s=0;s<n;s++)v=e[u],_c(v)===!1&&(r+=Ec(v)),u+=a;return r}Oc.exports=gS
});var Sc=c(function(o$,Tc){
var jS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mc=kc(),bS=Fc();jS(Mc,"ndarray",bS);Tc.exports=Mc
});var Wr=c(function(f$,Pc){
var wS=require("path").join,yS=require('@stdlib/utils/try-require/dist'),RS=require('@stdlib/assert/is-error/dist'),kS=Sc(),wu,Zc=yS(wS(__dirname,"./native.js"));RS(Zc)?wu=kS:wu=Zc;Pc.exports=wu
});var Lc=c(function(q$,Ac){
var _S=Wr();function ES(n,e,a){return _S(n,e,a)}Ac.exports=ES
});var Cc=c(function(c$,Bc){
var OS=Wr().ndarray;function FS(n,e,a,i){return OS(n,e,a,i)}Bc.exports=FS
});var Kc=c(function(m$,Ic){
var MS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gc=Lc(),TS=Cc();MS(Gc,"ndarray",TS);Ic.exports=Gc
});var Dc=c(function(l$,zc){
var SS=require("path").join,ZS=require('@stdlib/utils/try-require/dist'),PS=require('@stdlib/assert/is-error/dist'),AS=Kc(),yu,Vc=ZS(SS(__dirname,"./native.js"));PS(Vc)?yu=AS:yu=Vc;zc.exports=yu
});var Uc=c(function(p$,Qc){
var Hc=require('@stdlib/math/base/assert/is-nan/dist'),Jc=require('@stdlib/math/base/special/abs/dist');function LS(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Hc(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Hc(o)===!1&&(t=u+o,Jc(u)>=Jc(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Qc.exports=LS
});var Yc=c(function(g$,hc){
var Wc=require('@stdlib/math/base/assert/is-nan/dist'),$c=require('@stdlib/math/base/special/abs/dist');function BS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Wc(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],Wc(f)===!1&&(q=s+f,$c(s)>=$c(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}hc.exports=BS
});var xc=c(function(j$,dc){
var CS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xc=Uc(),GS=Yc();CS(Xc,"ndarray",GS);dc.exports=Xc
});var $r=c(function(b$,rm){
var IS=require("path").join,KS=require('@stdlib/utils/try-require/dist'),VS=require('@stdlib/assert/is-error/dist'),zS=xc(),Ru,Nc=KS(IS(__dirname,"./native.js"));VS(Nc)?Ru=zS:Ru=Nc;rm.exports=Ru
});var am=c(function(w$,em){
var DS=$r();function HS(n,e,a,i,r){return DS(n,e,a,i,r)}em.exports=HS
});var im=c(function(y$,um){
var JS=$r().ndarray;function QS(n,e,a,i,r,u,v){return JS(n,e,a,i,r,u,v)}um.exports=QS
});var sm=c(function(R$,vm){
var US=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nm=am(),WS=im();US(nm,"ndarray",WS);vm.exports=nm
});var fm=c(function(k$,om){
var $S=require("path").join,hS=require('@stdlib/utils/try-require/dist'),YS=require('@stdlib/assert/is-error/dist'),XS=sm(),ku,tm=hS($S(__dirname,"./native.js"));YS(tm)?ku=XS:ku=tm;om.exports=ku
});var mm=c(function(_$,cm){
var qm=require('@stdlib/math/base/assert/is-nan/dist'),hr=require('@stdlib/math/base/special/abs/dist');function dS(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,g;if(a<0?t=(1-n)*a:t=0,r<0?f=-r:f=0,u=0,n<=0)return i[f]=u,i[f+r]=0,i;if(n===1||a===0)return qm(e[t])?(i[f]=u,i[f+r]=0,i):(i[f]=e[t],i[f+r]=1,i);for(v=0,s=0,l=0,g=0;g<n;g++)q=e[t],qm(q)===!1&&(m=u+q,hr(u)>=hr(q)?p=u-m+q:p=q-m+u,u=m,m=s+p,hr(s)>=hr(p)?o=s-m+p:o=p-m+s,s=m,v+=o,l+=1),t+=a;return i[f]=u+s+v,i[f+r]=l,i}cm.exports=dS
});var gm=c(function(E$,pm){
var lm=require('@stdlib/math/base/assert/is-nan/dist'),Yr=require('@stdlib/math/base/special/abs/dist');function xS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,g,j,b;if(q=i,m=v,s=0,n<=0)return r[m]=s,r[m+u]=0,r;if(n===1||a===0)return lm(e[q])?(r[m]=s,r[m+u]=0,r):(r[m]=e[q],r[m+u]=1,r);for(o=0,t=0,j=0,b=0;b<n;b++)p=e[q],lm(p)===!1&&(l=s+p,Yr(s)>=Yr(p)?g=s-l+p:g=p-l+s,s=l,l=t+g,Yr(t)>=Yr(g)?f=t-l+g:f=g-l+t,t=l,o+=f,j+=1),q+=a;return r[m]=s+t+o,r[m+u]=j,r}pm.exports=xS
});var wm=c(function(O$,bm){
var NS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jm=mm(),rZ=gm();NS(jm,"ndarray",rZ);bm.exports=jm
});var km=c(function(F$,Rm){
var eZ=require("path").join,aZ=require('@stdlib/utils/try-require/dist'),uZ=require('@stdlib/assert/is-error/dist'),iZ=wm(),_u,ym=aZ(eZ(__dirname,"./native.js"));uZ(ym)?_u=iZ:_u=ym;Rm.exports=_u
});var Om=c(function(M$,Em){
var _m=require('@stdlib/math/base/assert/is-nan/dist');function nZ(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return _m(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)_m(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}Em.exports=nZ
});var Tm=c(function(T$,Mm){
var Fm=require('@stdlib/math/base/assert/is-nan/dist');function vZ(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Fm(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)Fm(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}Mm.exports=vZ
});var Pm=c(function(S$,Zm){
var sZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sm=Om(),tZ=Tm();sZ(Sm,"ndarray",tZ);Zm.exports=Sm
});var Bm=c(function(Z$,Lm){
var oZ=require("path").join,fZ=require('@stdlib/utils/try-require/dist'),qZ=require('@stdlib/assert/is-error/dist'),cZ=Pm(),Eu,Am=fZ(oZ(__dirname,"./native.js"));qZ(Am)?Eu=cZ:Eu=Am;Lm.exports=Eu
});var Fu=c(function(P$,Cm){
var mZ=require('@stdlib/math/base/assert/is-nan/dist'),lZ=require('@stdlib/math/base/special/floor/dist'),pZ=128;function Ou(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,g,j,b,R,_,k,h;if(n<=0)return r;if(s=i,o=v,n===1||a===0)return mZ(e[s])||(r[o]+=e[s],r[o+u]+=1),r;if(n<8){for(R=0,_=0,h=0;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}if(n<=pZ){for(t=0,f=0,q=0,m=0,p=0,l=0,g=0,j=0,_=0,b=n%8,h=0;h<n-b;h+=8)k=e[s],k===k&&(t+=k,_+=1),s+=a,k=e[s],k===k&&(f+=k,_+=1),s+=a,k=e[s],k===k&&(q+=k,_+=1),s+=a,k=e[s],k===k&&(m+=k,_+=1),s+=a,k=e[s],k===k&&(p+=k,_+=1),s+=a,k=e[s],k===k&&(l+=k,_+=1),s+=a,k=e[s],k===k&&(g+=k,_+=1),s+=a,k=e[s],k===k&&(j+=k,_+=1),s+=a;for(R=t+f+(q+m)+(p+l+(g+j)),h;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}return _=lZ(n/2),_-=_%8,Ou(_,e,a,s,r,u,v),Ou(n-_,e,a,s+_*a,r,u,v),r}Cm.exports=Ou
});var Im=c(function(A$,Gm){
var gZ=Fu();function jZ(n,e,a,i,r){var u,v;return a<0?u=(1-n)*a:u=0,r<0?v=-r:v=0,i[v]=0,i[v+r]=0,gZ(n,e,a,u,i,r,v),i}Gm.exports=jZ
});var Vm=c(function(L$,Km){
var bZ=Fu();function wZ(n,e,a,i,r,u,v){return r[v]=0,r[v+u]=0,bZ(n,e,a,i,r,u,v),r}Km.exports=wZ
});var Hm=c(function(B$,Dm){
var yZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zm=Im(),RZ=Vm();yZ(zm,"ndarray",RZ);Dm.exports=zm
});var Um=c(function(C$,Qm){
var kZ=require("path").join,_Z=require('@stdlib/utils/try-require/dist'),EZ=require('@stdlib/assert/is-error/dist'),OZ=Hm(),Mu,Jm=_Z(kZ(__dirname,"./native.js"));EZ(Jm)?Mu=OZ:Mu=Jm;Qm.exports=Mu
});var Ym=c(function(G$,hm){
var Wm=require('@stdlib/math/base/assert/is-nan/dist'),$m=require('@stdlib/math/base/special/abs/dist');function FZ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return Wm(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],Wm(u)===!1&&(v=i+u,$m(i)>=$m(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}hm.exports=FZ
});var Nm=c(function(I$,xm){
var Xm=require('@stdlib/math/base/assert/is-nan/dist'),dm=require('@stdlib/math/base/special/abs/dist');function MZ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return Xm(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],Xm(v)===!1&&(s=r+v,dm(r)>=dm(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}xm.exports=MZ
});var a1=c(function(K$,e1){
var TZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),r1=Ym(),SZ=Nm();TZ(r1,"ndarray",SZ);e1.exports=r1
});var Xr=c(function(V$,i1){
var ZZ=require("path").join,PZ=require('@stdlib/utils/try-require/dist'),AZ=require('@stdlib/assert/is-error/dist'),LZ=a1(),Tu,u1=PZ(ZZ(__dirname,"./native.js"));AZ(u1)?Tu=LZ:Tu=u1;i1.exports=Tu
});var v1=c(function(z$,n1){
var BZ=Xr();function CZ(n,e,a){return BZ(n,e,a)}n1.exports=CZ
});var t1=c(function(D$,s1){
var GZ=Xr().ndarray;function IZ(n,e,a,i){return GZ(n,e,a,i)}s1.exports=IZ
});var q1=c(function(H$,f1){
var KZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),o1=v1(),VZ=t1();KZ(o1,"ndarray",VZ);f1.exports=o1
});var l1=c(function(J$,m1){
var zZ=require("path").join,DZ=require('@stdlib/utils/try-require/dist'),HZ=require('@stdlib/assert/is-error/dist'),JZ=q1(),Su,c1=DZ(zZ(__dirname,"./native.js"));HZ(c1)?Su=JZ:Su=c1;m1.exports=Su
});var j1=c(function(Q$,g1){
var p1=require('@stdlib/math/base/assert/is-nan/dist'),dr=require('@stdlib/math/base/special/abs/dist');function QZ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return p1(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],p1(o)===!1&&(t=i+o,dr(i)>=dr(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,dr(v)>=dr(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}g1.exports=QZ
});var y1=c(function(U$,w1){
var b1=require('@stdlib/math/base/assert/is-nan/dist'),xr=require('@stdlib/math/base/special/abs/dist');function UZ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return b1(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],b1(t)===!1&&(f=r+t,xr(r)>=xr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,xr(s)>=xr(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}w1.exports=UZ
});var _1=c(function(W$,k1){
var WZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),R1=j1(),$Z=y1();WZ(R1,"ndarray",$Z);k1.exports=R1
});var F1=c(function($$,O1){
var hZ=require("path").join,YZ=require('@stdlib/utils/try-require/dist'),XZ=require('@stdlib/assert/is-error/dist'),dZ=_1(),Zu,E1=YZ(hZ(__dirname,"./native.js"));XZ(E1)?Zu=dZ:Zu=E1;O1.exports=Zu
});var S1=c(function(h$,T1){
var M1=require('@stdlib/math/base/assert/is-nan/dist');function xZ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return M1(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)M1(e[r])===!1&&(i+=e[r]),r+=a;return i}T1.exports=xZ
});var A1=c(function(Y$,P1){
var Z1=require('@stdlib/math/base/assert/is-nan/dist');function NZ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return Z1(e[i])?r:e[i];for(u=i,v=0;v<n;v++)Z1(e[u])===!1&&(r+=e[u]),u+=a;return r}P1.exports=NZ
});var C1=c(function(X$,B1){
var rP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),L1=S1(),eP=A1();rP(L1,"ndarray",eP);B1.exports=L1
});var K1=c(function(d$,I1){
var aP=require("path").join,uP=require('@stdlib/utils/try-require/dist'),iP=require('@stdlib/assert/is-error/dist'),nP=C1(),Pu,G1=uP(aP(__dirname,"./native.js"));iP(G1)?Pu=nP:Pu=G1;I1.exports=Pu
});var Lu=c(function(x$,V1){
var T=require('@stdlib/math/base/assert/is-nan/dist'),vP=require('@stdlib/math/base/special/floor/dist'),sP=128;function Au(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return T(e[i])?0:e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=sP){for(u=T(e[r])?0:e[r],r+=a,v=T(e[r])?0:e[r],r+=a,s=T(e[r])?0:e[r],r+=a,o=T(e[r])?0:e[r],r+=a,t=T(e[r])?0:e[r],r+=a,f=T(e[r])?0:e[r],r+=a,q=T(e[r])?0:e[r],r+=a,m=T(e[r])?0:e[r],r+=a,p=n%8,j=8;j<n-p;j+=8)u+=T(e[r])?0:e[r],r+=a,v+=T(e[r])?0:e[r],r+=a,s+=T(e[r])?0:e[r],r+=a,o+=T(e[r])?0:e[r],r+=a,t+=T(e[r])?0:e[r],r+=a,f+=T(e[r])?0:e[r],r+=a,q+=T(e[r])?0:e[r],r+=a,m+=T(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}return g=vP(n/2),g-=g%8,Au(g,e,a,r)+Au(n-g,e,a,r+g*a)}V1.exports=Au
});var H1=c(function(N$,D1){
var z1=require('@stdlib/math/base/assert/is-nan/dist'),tP=Lu();function oP(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return z1(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)z1(e[i])===!1&&(r+=e[i]),i+=a;return r}return tP(n,e,a,i)}D1.exports=oP
});var U1=c(function(rh,Q1){
var fP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),J1=H1(),qP=Lu();fP(J1,"ndarray",qP);Q1.exports=J1
});var h1=c(function(eh,$1){
var cP=require("path").join,mP=require('@stdlib/utils/try-require/dist'),lP=require('@stdlib/assert/is-error/dist'),pP=U1(),Bu,W1=mP(cP(__dirname,"./native.js"));lP(W1)?Bu=pP:Bu=W1;$1.exports=Bu
});var X1=c(function(ah,Y1){
var gP=require('@stdlib/math/base/special/floor/dist'),Nr=3;function jP(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=gP(n/2),a===1){if(v=s%Nr,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<Nr)return e;for(r=v;r<s;r+=Nr)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=Nr;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}Y1.exports=jP
});var x1=c(function(uh,d1){
var bP=require('@stdlib/math/base/special/floor/dist'),Or=3;function wP(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=bP(n/2),u=i,a===1){if(s=o%Or,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<Or)return e;for(t=s;t<o;t+=Or)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Or,v-=Or;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}d1.exports=wP
});var el=c(function(ih,rl){
var yP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),N1=X1(),RP=x1();yP(N1,"ndarray",RP);rl.exports=N1
});var il=c(function(nh,ul){
var kP=require("path").join,_P=require('@stdlib/utils/try-require/dist'),EP=require('@stdlib/assert/is-error/dist'),OP=el(),Cu,al=_P(kP(__dirname,"./native.js"));EP(al)?Cu=OP:Cu=al;ul.exports=Cu
});var Iu=c(function(vh,nl){
var FP=require('@stdlib/math/base/special/floor/dist'),MP=128;function Gu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,g,j,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(g=0,b=0;b<n;b++)g+=e+a[u],u+=i;return g}if(n<=MP){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(g=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)g+=e+a[u],u+=i;return g}return j=FP(n/2),j-=j%8,Gu(j,e,a,i,u)+Gu(n-j,e,a,i,u+j*i)}nl.exports=Gu
});var sl=c(function(sh,vl){
var TP=Iu();function SP(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return TP(n,e,a,i,r)}vl.exports=SP
});var fl=c(function(th,ol){
var ZP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tl=sl(),PP=Iu();ZP(tl,"ndarray",PP);ol.exports=tl
});var re=c(function(oh,cl){
var AP=require("path").join,LP=require('@stdlib/utils/try-require/dist'),BP=require('@stdlib/assert/is-error/dist'),CP=fl(),Ku,ql=LP(AP(__dirname,"./native.js"));BP(ql)?Ku=CP:Ku=ql;cl.exports=Ku
});var ll=c(function(fh,ml){
var GP=re();function IP(n,e,a,i){return GP(n,e,a,i)}ml.exports=IP
});var gl=c(function(qh,pl){
var KP=re().ndarray;function VP(n,e,a,i,r){return KP(n,e,a,i,r)}pl.exports=VP
});var wl=c(function(ch,bl){
var zP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jl=ll(),DP=gl();zP(jl,"ndarray",DP);bl.exports=jl
});var kl=c(function(mh,Rl){
var HP=require("path").join,JP=require('@stdlib/utils/try-require/dist'),QP=require('@stdlib/assert/is-error/dist'),UP=wl(),Vu,yl=JP(HP(__dirname,"./native.js"));QP(yl)?Vu=UP:Vu=yl;Rl.exports=Vu
});var Ol=c(function(lh,El){
var _l=require('@stdlib/math/base/assert/is-nan/dist');function WP(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return _l(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)_l(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}El.exports=WP
});var Tl=c(function(ph,Ml){
var Fl=require('@stdlib/math/base/assert/is-nan/dist');function $P(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Fl(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)Fl(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}Ml.exports=$P
});var Pl=c(function(gh,Zl){
var hP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sl=Ol(),YP=Tl();hP(Sl,"ndarray",YP);Zl.exports=Sl
});var Bl=c(function(jh,Ll){
var XP=require("path").join,dP=require('@stdlib/utils/try-require/dist'),xP=require('@stdlib/assert/is-error/dist'),NP=Pl(),zu,Al=dP(XP(__dirname,"./native.js"));xP(Al)?zu=NP:zu=Al;Ll.exports=zu
});var Hu=c(function(bh,Cl){
var S=require('@stdlib/math/base/assert/is-nanf/dist'),rA=require('@stdlib/math/base/special/floor/dist'),eA=128;function Du(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return S(e[i])?0:e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=eA){for(u=S(e[r])?0:e[r],r+=a,v=S(e[r])?0:e[r],r+=a,s=S(e[r])?0:e[r],r+=a,o=S(e[r])?0:e[r],r+=a,t=S(e[r])?0:e[r],r+=a,f=S(e[r])?0:e[r],r+=a,q=S(e[r])?0:e[r],r+=a,m=S(e[r])?0:e[r],r+=a,p=n%8,j=8;j<n-p;j+=8)u+=S(e[r])?0:e[r],r+=a,v+=S(e[r])?0:e[r],r+=a,s+=S(e[r])?0:e[r],r+=a,o+=S(e[r])?0:e[r],r+=a,t+=S(e[r])?0:e[r],r+=a,f+=S(e[r])?0:e[r],r+=a,q+=S(e[r])?0:e[r],r+=a,m+=S(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}return g=rA(n/2),g-=g%8,Du(g,e,a,r)+Du(n-g,e,a,r+g*a)}Cl.exports=Du
});var Kl=c(function(wh,Il){
var Gl=require('@stdlib/math/base/assert/is-nanf/dist'),aA=Hu();function uA(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Gl(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Gl(e[i])===!1&&(r+=e[i]),i+=a;return r}return aA(n,e,a,i)}Il.exports=uA
});var Dl=c(function(yh,zl){
var iA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Vl=Kl(),nA=Hu();iA(Vl,"ndarray",nA);zl.exports=Vl
});var ee=c(function(Rh,Jl){
var vA=require("path").join,sA=require('@stdlib/utils/try-require/dist'),tA=require('@stdlib/assert/is-error/dist'),oA=Dl(),Ju,Hl=sA(vA(__dirname,"./native.js"));tA(Hl)?Ju=oA:Ju=Hl;Jl.exports=Ju
});var Ul=c(function(kh,Ql){
var fA=ee();function qA(n,e,a){return fA(n,e,a)}Ql.exports=qA
});var $l=c(function(_h,Wl){
var cA=ee().ndarray;function mA(n,e,a,i){return cA(n,e,a,i)}Wl.exports=mA
});var Xl=c(function(Eh,Yl){
var lA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hl=Ul(),pA=$l();lA(hl,"ndarray",pA);Yl.exports=hl
});var Nl=c(function(Oh,xl){
var gA=require("path").join,jA=require('@stdlib/utils/try-require/dist'),bA=require('@stdlib/assert/is-error/dist'),wA=Xl(),Qu,dl=jA(gA(__dirname,"./native.js"));bA(dl)?Qu=wA:Qu=dl;xl.exports=Qu
});var ap=c(function(Fh,ep){
var rp=require('@stdlib/math/base/assert/is-nan/dist');function yA(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return rp(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)rp(e[r])===!1&&(i+=e[r]),r+=a;return i}ep.exports=yA
});var np=c(function(Mh,ip){
var up=require('@stdlib/math/base/assert/is-nan/dist');function RA(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return up(e[i])?r:e[i];for(u=i,v=0;v<n;v++)up(e[u])===!1&&(r+=e[u]),u+=a;return r}ip.exports=RA
});var tp=c(function(Th,sp){
var kA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),vp=ap(),_A=np();kA(vp,"ndarray",_A);sp.exports=vp
});var qp=c(function(Sh,fp){
var EA=require("path").join,OA=require('@stdlib/utils/try-require/dist'),FA=require('@stdlib/assert/is-error/dist'),MA=tp(),Uu,op=OA(EA(__dirname,"./native.js"));FA(op)?Uu=MA:Uu=op;fp.exports=Uu
});var pp=c(function(Zh,lp){
var cp=require('@stdlib/math/base/assert/is-positive-zero/dist'),mp=require('@stdlib/math/base/assert/is-nan/dist'),TA=require('@stdlib/math/base/special/floor/dist');function SA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,j=n,o=TA(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(j-=1,j===0)return a;l=v+j*i,m=a[l],g=s+j*u,p=r[g],a[l]=a[v],r[g]=r[s]}for(b=o,t=b*2+1;t<j&&(R=t+1,R<j&&(f=a[v+R*i],q=a[v+t*i],(f>q||mp(f)||f===q&&cp(f))&&(t+=1)),f=a[v+t*i],f>m||mp(f)||f===m&&cp(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}lp.exports=SA
});var wp=c(function(Ph,bp){
var gp=require('@stdlib/math/base/assert/is-positive-zero/dist'),jp=require('@stdlib/math/base/assert/is-nan/dist'),ZA=require('@stdlib/math/base/special/floor/dist');function PA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),j=n,o=ZA(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(j-=1,j===0)return a;l=r+j*i,m=a[l],g=s+j*v,p=u[g],a[l]=a[r],u[g]=u[s]}for(b=o,t=b*2+1;t<j&&(R=t+1,R<j&&(f=a[r+R*i],q=a[r+t*i],(f>q||jp(f)||f===q&&gp(f))&&(t+=1)),f=a[r+t*i],f>m||jp(f)||f===m&&gp(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}bp.exports=PA
});var kp=c(function(Ah,Rp){
var AA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yp=pp(),LA=wp();AA(yp,"ndarray",LA);Rp.exports=yp
});var Op=c(function(Lh,Ep){
var BA=require("path").join,CA=require('@stdlib/utils/try-require/dist'),GA=require('@stdlib/assert/is-error/dist'),IA=kp(),Wu,_p=CA(BA(__dirname,"./native.js"));GA(_p)?Wu=IA:Wu=_p;Ep.exports=Wu
});var Tp=c(function(Bh,Mp){
var ae=require('@stdlib/math/base/assert/is-negative-zero/dist'),Fp=require('@stdlib/math/base/assert/is-nan/dist');function KA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(g=a[s],j=r[q],Fp(g)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=g,r[l]=j}else{for(v=ae(g),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=g&&!(v&&b===g&&ae(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=g,r[m+u]=j,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(g=a[s],j=r[q],Fp(g)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=g,r[l]=j}else{for(v=ae(g),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=g&&!(v&&b===g&&ae(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=g,r[m+u]=j,s+=i,q+=u}return a}Mp.exports=KA
});var Pp=c(function(Ch,Zp){
var ue=require('@stdlib/math/base/assert/is-negative-zero/dist'),Sp=require('@stdlib/math/base/assert/is-nan/dist');function VA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,g=s,j=g+(n-1)*v,p=g+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],Sp(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[j]=R}else{for(o=ue(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ue(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],Sp(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[j]=R}else{for(o=ue(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ue(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}Zp.exports=VA
});var Bp=c(function(Gh,Lp){
var zA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ap=Tp(),DA=Pp();zA(Ap,"ndarray",DA);Lp.exports=Ap
});var Ip=c(function(Ih,Gp){
var HA=require("path").join,JA=require('@stdlib/utils/try-require/dist'),QA=require('@stdlib/assert/is-error/dist'),UA=Bp(),$u,Cp=JA(HA(__dirname,"./native.js"));QA(Cp)?$u=UA:$u=Cp;Gp.exports=$u
});var hu=c(function(Kh,WA){WA.exports=[701,301,132,57,23,10,4,1]});var zp=c(function(Vh,Vp){
var $A=require('@stdlib/math/base/assert/is-negative-zero/dist'),hA=require('@stdlib/math/base/assert/is-nan/dist'),Kp=hu(),YA=Kp.length;function XA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<YA;p++)for(t=Kp[p],l=t;l<n;l++)if(f=a[v+l*i],!hA(f)){for(q=r[s+l*u],o=$A(f),g=l;g>=t&&(m=a[v+(g-t)*i],!(m<=f&&!(o&&m===f)));g-=t)a[v+g*i]=m,r[s+g*u]=r[s+(g-t)*u];a[v+g*i]=f,r[s+g*u]=q}return a}Vp.exports=XA
});var Jp=c(function(zh,Hp){
var dA=require('@stdlib/math/base/assert/is-negative-zero/dist'),xA=require('@stdlib/math/base/assert/is-nan/dist'),Dp=hu(),NA=Dp.length;function rL(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<NA;p++)for(t=Dp[p],l=t;l<n;l++)if(f=a[r+l*i],!xA(f)){for(q=u[s+l*v],o=dA(f),g=l;g>=t&&(m=a[r+(g-t)*i],!(m<=f&&!(o&&m===f)));g-=t)a[r+g*i]=m,u[s+g*v]=u[s+(g-t)*v];a[r+g*i]=f,u[s+g*v]=q}return a}Hp.exports=rL
});var Wp=c(function(Dh,Up){
var eL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qp=zp(),aL=Jp();eL(Qp,"ndarray",aL);Up.exports=Qp
});var Yp=c(function(Hh,hp){
var uL=require("path").join,iL=require('@stdlib/utils/try-require/dist'),nL=require('@stdlib/assert/is-error/dist'),vL=Wp(),Yu,$p=iL(uL(__dirname,"./native.js"));nL($p)?Yu=vL:Yu=$p;hp.exports=Yu
});var Np=c(function(Jh,xp){
var Xp=require('@stdlib/math/base/assert/is-positive-zero/dist'),dp=require('@stdlib/math/base/assert/is-nan/dist'),sL=require('@stdlib/math/base/special/floor/dist');function tL(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=sL(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||dp(s)||s===o&&Xp(s))&&(v+=1)),s=a[r+v*i],s>f||dp(s)||s===f&&Xp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}xp.exports=tL
});var u2=c(function(Qh,a2){
var r2=require('@stdlib/math/base/assert/is-positive-zero/dist'),e2=require('@stdlib/math/base/assert/is-nan/dist'),oL=require('@stdlib/math/base/special/floor/dist');function fL(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=oL(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||e2(s)||s===o&&r2(s))&&(v+=1)),s=a[r+v*i],s>f||e2(s)||s===f&&r2(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}a2.exports=fL
});var v2=c(function(Uh,n2){
var qL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),i2=Np(),cL=u2();qL(i2,"ndarray",cL);n2.exports=i2
});var o2=c(function(Wh,t2){
var mL=require("path").join,lL=require('@stdlib/utils/try-require/dist'),pL=require('@stdlib/assert/is-error/dist'),gL=v2(),Xu,s2=lL(mL(__dirname,"./native.js"));pL(s2)?Xu=gL:Xu=s2;t2.exports=Xu
});var c2=c(function($h,q2){
var ie=require('@stdlib/math/base/assert/is-negative-zero/dist'),f2=require('@stdlib/math/base/assert/is-nan/dist');function jL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],f2(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ie(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ie(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],f2(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ie(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ie(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}q2.exports=jL
});var p2=c(function(hh,l2){
var ne=require('@stdlib/math/base/assert/is-negative-zero/dist'),m2=require('@stdlib/math/base/assert/is-nan/dist');function bL(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],m2(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ne(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ne(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],m2(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ne(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ne(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}l2.exports=bL
});var b2=c(function(Yh,j2){
var wL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),g2=c2(),yL=p2();wL(g2,"ndarray",yL);j2.exports=g2
});var R2=c(function(Xh,y2){
var RL=require("path").join,kL=require('@stdlib/utils/try-require/dist'),_L=require('@stdlib/assert/is-error/dist'),EL=b2(),du,w2=kL(RL(__dirname,"./native.js"));_L(w2)?du=EL:du=w2;y2.exports=du
});var xu=c(function(dh,OL){OL.exports=[701,301,132,57,23,10,4,1]});var E2=c(function(xh,_2){
var FL=require('@stdlib/math/base/assert/is-negative-zero/dist'),ML=require('@stdlib/math/base/assert/is-nan/dist'),k2=xu(),TL=k2.length;function SL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<TL;t++)for(v=k2[t],f=v;f<n;f++)if(s=a[r+f*i],!ML(s)){for(u=FL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}_2.exports=SL
});var M2=c(function(Nh,F2){
var ZL=require('@stdlib/math/base/assert/is-negative-zero/dist'),PL=require('@stdlib/math/base/assert/is-nan/dist'),O2=xu(),AL=O2.length;function LL(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<AL;t++)for(v=O2[t],f=v;f<n;f++)if(s=a[r+f*i],!PL(s)){for(u=ZL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}F2.exports=LL
});var Z2=c(function(rY,S2){
var BL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),T2=E2(),CL=M2();BL(T2,"ndarray",CL);S2.exports=T2
});var L2=c(function(eY,A2){
var GL=require("path").join,IL=require('@stdlib/utils/try-require/dist'),KL=require('@stdlib/assert/is-error/dist'),VL=Z2(),Nu,P2=IL(GL(__dirname,"./native.js"));KL(P2)?Nu=VL:Nu=P2;A2.exports=Nu
});var ei=c(function(aY,B2){
var zL=require('@stdlib/math/base/special/floor/dist'),DL=128;function ri(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)l+=e[r],r+=a;return l}if(n<=DL){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,j=8;j<n-p;j+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)l+=e[r],r+=a;return l}return g=zL(n/2),g-=g%8,ri(g,e,a,r)+ri(n-g,e,a,r+g*a)}B2.exports=ri
});var G2=c(function(uY,C2){
var HL=ei();function JL(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return HL(n,e,a,i)}C2.exports=JL
});var V2=c(function(iY,K2){
var QL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),I2=G2(),UL=ei();QL(I2,"ndarray",UL);K2.exports=I2
});var ve=c(function(nY,D2){
var WL=require("path").join,$L=require('@stdlib/utils/try-require/dist'),hL=require('@stdlib/assert/is-error/dist'),YL=V2(),ai,z2=$L(WL(__dirname,"./native.js"));hL(z2)?ai=YL:ai=z2;D2.exports=ai
});var J2=c(function(vY,H2){
var XL=ve();function dL(n,e,a){return XL(n,e,a)}H2.exports=dL
});var U2=c(function(sY,Q2){
var xL=ve().ndarray;function NL(n,e,a,i){return xL(n,e,a,i)}Q2.exports=NL
});var h2=c(function(tY,$2){
var rB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),W2=J2(),eB=U2();rB(W2,"ndarray",eB);$2.exports=W2
});var d2=c(function(oY,X2){
var aB=require("path").join,uB=require('@stdlib/utils/try-require/dist'),iB=require('@stdlib/assert/is-error/dist'),nB=h2(),ui,Y2=uB(aB(__dirname,"./native.js"));iB(Y2)?ui=nB:ui=Y2;X2.exports=ui
});var N2=c(function(fY,x2){
var ii=6;function vB(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ii,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ii)return i;for(v=u;v<n;v+=ii)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}x2.exports=vB
});var eg=c(function(qY,rg){
var se=6;function sB(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%se,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<se)return r;for(s=v;s<n;s+=se)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=se;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}rg.exports=sB
});var ig=c(function(cY,ug){
var tB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ag=N2(),oB=eg();tB(ag,"ndarray",oB);ug.exports=ag
});var sg=c(function(mY,vg){
var fB=require("path").join,qB=require('@stdlib/utils/try-require/dist'),cB=require('@stdlib/assert/is-error/dist'),mB=ig(),ni,ng=qB(fB(__dirname,"./native.js"));cB(ng)?ni=mB:ni=ng;vg.exports=ni
});var fg=c(function(lY,og){
var tg=require('@stdlib/math/base/special/abs/dist');function lB(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,tg(i)>=tg(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}og.exports=lB
});var mg=c(function(pY,cg){
var qg=require('@stdlib/math/base/special/abs/dist');function pB(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,qg(r)>=qg(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}cg.exports=pB
});var gg=c(function(gY,pg){
var gB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lg=fg(),jB=mg();gB(lg,"ndarray",jB);pg.exports=lg
});var te=c(function(jY,bg){
var bB=require("path").join,wB=require('@stdlib/utils/try-require/dist'),yB=require('@stdlib/assert/is-error/dist'),RB=gg(),vi,jg=wB(bB(__dirname,"./native.js"));yB(jg)?vi=RB:vi=jg;bg.exports=vi
});var yg=c(function(bY,wg){
var kB=te();function _B(n,e,a){return kB(n,e,a)}wg.exports=_B
});var kg=c(function(wY,Rg){
var EB=te().ndarray;function OB(n,e,a,i){return EB(n,e,a,i)}Rg.exports=OB
});var Og=c(function(yY,Eg){
var FB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_g=yg(),MB=kg();FB(_g,"ndarray",MB);Eg.exports=_g
});var Tg=c(function(RY,Mg){
var TB=require("path").join,SB=require('@stdlib/utils/try-require/dist'),ZB=require('@stdlib/assert/is-error/dist'),PB=Og(),si,Fg=SB(TB(__dirname,"./native.js"));ZB(Fg)?si=PB:si=Fg;Mg.exports=si
});var Zg=c(function(kY,Sg){
var oe=require('@stdlib/math/base/special/abs/dist');function AB(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,oe(i)>=oe(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,oe(v)>=oe(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}Sg.exports=AB
});var Ag=c(function(_Y,Pg){
var fe=require('@stdlib/math/base/special/abs/dist');function LB(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,fe(r)>=fe(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,fe(s)>=fe(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}Pg.exports=LB
});var Cg=c(function(EY,Bg){
var BB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lg=Zg(),CB=Ag();BB(Lg,"ndarray",CB);Bg.exports=Lg
});var Kg=c(function(OY,Ig){
var GB=require("path").join,IB=require('@stdlib/utils/try-require/dist'),KB=require('@stdlib/assert/is-error/dist'),VB=Cg(),ti,Gg=IB(GB(__dirname,"./native.js"));KB(Gg)?ti=VB:ti=Gg;Ig.exports=ti
});var zg=c(function(FY,Vg){
var oi=6;function zB(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%oi,u>0)for(v=0;v<u;v++)i+=e[v];if(n<oi)return i;for(v=u;v<n;v+=oi)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}Vg.exports=zB
});var Hg=c(function(MY,Dg){
var qe=6;function DB(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%qe,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<qe)return r;for(s=v;s<n;s+=qe)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=qe;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}Dg.exports=DB
});var Ug=c(function(TY,Qg){
var HB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Jg=zg(),JB=Hg();HB(Jg,"ndarray",JB);Qg.exports=Jg
});var hg=c(function(SY,$g){
var QB=require("path").join,UB=require('@stdlib/utils/try-require/dist'),WB=require('@stdlib/assert/is-error/dist'),$B=Ug(),fi,Wg=UB(QB(__dirname,"./native.js"));WB(Wg)?fi=$B:fi=Wg;$g.exports=fi
});var ci=c(function(ZY,Yg){
var hB=require('@stdlib/math/base/special/floor/dist'),YB=128;function qi(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)l+=e[r],r+=a;return l}if(n<=YB){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,j=8;j<n-p;j+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)l+=e[r],r+=a;return l}return g=hB(n/2),g-=g%8,qi(g,e,a,r)+qi(n-g,e,a,r+g*a)}Yg.exports=qi
});var dg=c(function(PY,Xg){
var XB=ci();function dB(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return XB(n,e,a,i)}Xg.exports=dB
});var rj=c(function(AY,Ng){
var xB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xg=dg(),NB=ci();xB(xg,"ndarray",NB);Ng.exports=xg
});var uj=c(function(LY,aj){
var rC=require("path").join,eC=require('@stdlib/utils/try-require/dist'),aC=require('@stdlib/assert/is-error/dist'),uC=rj(),mi,ej=eC(rC(__dirname,"./native.js"));aC(ej)?mi=uC:mi=ej;aj.exports=mi
});var nj=c(function(BY,ij){
var li=5;function iC(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%li,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<li)return a;for(u=v;u<n;u+=li)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}ij.exports=iC
});var sj=c(function(CY,vj){
var ce=5;function nC(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%ce,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<ce)return a;for(s=v;s<n;s+=ce)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=ce;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}vj.exports=nC
});var fj=c(function(GY,oj){
var vC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tj=nj(),sC=sj();vC(tj,"ndarray",sC);oj.exports=tj
});var mj=c(function(IY,cj){
var qj=require('@stdlib/math/base/special/abs/dist');function tC(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,qj(r)>=qj(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}cj.exports=tC
});var gj=c(function(KY,pj){
var lj=require('@stdlib/math/base/special/abs/dist');function oC(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,lj(u)>=lj(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}pj.exports=oC
});var me=c(function(VY,bj){
var fC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jj=mj(),qC=gj();fC(jj,"ndarray",qC);bj.exports=jj
});var yj=c(function(zY,wj){
var cC=me();function mC(n,e,a,i){return cC(n,e,a,i)}wj.exports=mC
});var kj=c(function(DY,Rj){
var lC=me().ndarray;function pC(n,e,a,i,r){return lC(n,e,a,i,r)}Rj.exports=pC
});var Oj=c(function(HY,Ej){
var gC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_j=yj(),jC=kj();gC(_j,"ndarray",jC);Ej.exports=_j
});var Mj=c(function(JY,Fj){
var le=require('@stdlib/math/base/special/abs/dist');function bC(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,le(r)>=le(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,le(s)>=le(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}Fj.exports=bC
});var Sj=c(function(QY,Tj){
var pe=require('@stdlib/math/base/special/abs/dist');function wC(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,pe(u)>=pe(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,pe(o)>=pe(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}Tj.exports=wC
});var Aj=c(function(UY,Pj){
var yC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Zj=Mj(),RC=Sj();yC(Zj,"ndarray",RC);Pj.exports=Zj
});var Bj=c(function(WY,Lj){
function kC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Lj.exports=kC
});var Gj=c(function($Y,Cj){
function _C(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Cj.exports=_C
});var Vj=c(function(hY,Kj){
var EC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ij=Bj(),OC=Gj();EC(Ij,"ndarray",OC);Kj.exports=Ij
});var gi=c(function(YY,zj){
var FC=require('@stdlib/math/base/special/floor/dist'),MC=128;function pi(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,g,j,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(g=0,b=0;b<n;b++)g+=e+a[u],u+=i;return g}if(n<=MC){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(g=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)g+=e+a[u],u+=i;return g}return j=FC(n/2),j-=j%8,pi(j,e,a,i,u)+pi(n-j,e,a,i,u+j*i)}zj.exports=pi
});var Hj=c(function(XY,Dj){
var TC=gi();function SC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return TC(n,e,a,i,r)}Dj.exports=SC
});var Uj=c(function(dY,Qj){
var ZC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Jj=Hj(),PC=gi();ZC(Jj,"ndarray",PC);Qj.exports=Jj
});var bi=c(function(xY,Wj){
var AC=require('@stdlib/math/base/special/floor/dist'),Z=require('@stdlib/math/base/special/abs/dist'),LC=128;function ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return Z(e[i]);if(r=i,n<8){for(l=0,j=0;j<n;j++)l+=Z(e[r]),r+=a;return l}if(n<=LC){for(u=Z(e[r]),v=Z(e[r+a]),s=Z(e[r+2*a]),o=Z(e[r+3*a]),t=Z(e[r+4*a]),f=Z(e[r+5*a]),q=Z(e[r+6*a]),m=Z(e[r+7*a]),r+=8*a,p=n%8,j=8;j<n-p;j+=8)u+=Z(e[r]),v+=Z(e[r+a]),s+=Z(e[r+2*a]),o+=Z(e[r+3*a]),t+=Z(e[r+4*a]),f+=Z(e[r+5*a]),q+=Z(e[r+6*a]),m+=Z(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)l+=Z(e[r]),r+=a;return l}return g=AC(n/2),g-=g%8,ji(g,e,a,r)+ji(n-g,e,a,r+g*a)}Wj.exports=ji
});var Yj=c(function(NY,hj){
var $j=require('@stdlib/math/base/special/abs/dist'),BC=bi();function CC(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return $j(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=$j(e[i]),i+=a;return r}return BC(n,e,a,i)}hj.exports=CC
});var xj=c(function(rX,dj){
var GC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xj=Yj(),IC=bi();GC(Xj,"ndarray",IC);dj.exports=Xj
});var eb=c(function(eX,rb){
var Nj=require('@stdlib/math/base/special/abs/dist');function KC(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,Nj(o)>=Nj(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}rb.exports=KC
});var ib=c(function(aX,ub){
var ab=require('@stdlib/math/base/special/abs/dist');function VC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,ab(f)>=ab(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}ub.exports=VC
});var ge=c(function(uX,vb){
var zC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nb=eb(),DC=ib();zC(nb,"ndarray",DC);vb.exports=nb
});var tb=c(function(iX,sb){
var HC=ge();function JC(n,e,a,i,r,u){return HC(n,e,a,i,r,u)}sb.exports=JC
});var fb=c(function(nX,ob){
var QC=ge().ndarray;function UC(n,e,a,i,r,u,v,s){return QC(n,e,a,i,r,u,v,s)}ob.exports=UC
});var mb=c(function(vX,cb){
var WC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qb=tb(),$C=fb();WC(qb,"ndarray",$C);cb.exports=qb
});var pb=c(function(sX,lb){
var je=require('@stdlib/math/base/special/abs/dist');function hC(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,je(e)>=je(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,je(t)>=je(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}lb.exports=hC
});var jb=c(function(tX,gb){
var be=require('@stdlib/math/base/special/abs/dist');function YC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j;if(n<=0)return u;for(t=r,f=s,o=0,q=0,j=0;j<n;j++)p=a[t],l=e+p,be(e)>=be(p)?g=e-l+p:g=p-l+e,e=l,l=q+g,be(q)>=be(g)?m=q-l+g:m=g-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}gb.exports=YC
});var yb=c(function(oX,wb){
var XC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),bb=pb(),dC=jb();XC(bb,"ndarray",dC);wb.exports=bb
});var kb=c(function(fX,Rb){
function xC(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}Rb.exports=xC
});var Eb=c(function(qX,_b){
function NC(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}_b.exports=NC
});var Mb=c(function(cX,Fb){
var rG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ob=kb(),eG=Eb();rG(Ob,"ndarray",eG);Fb.exports=Ob
});var yi=c(function(mX,Tb){
var aG=require('@stdlib/math/base/special/floor/dist'),uG=128;function wi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=uG){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=aG(n/2),wi(q,e,a,i,o,u,v,t),t+=(q-1)*v,wi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}Tb.exports=wi
});var Zb=c(function(lX,Sb){
var iG=yi();function nG(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,iG(n,e,a,i,v,r,u,s))}Sb.exports=nG
});var Lb=c(function(pX,Ab){
var vG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Pb=Zb(),sG=yi();vG(Pb,"ndarray",sG);Ab.exports=Pb
});var Ri=c(function(gX,Bb){
function tG(n,e,a,i,r){var u,v,s,o;for(u=a.data,v=a.accessors[1],s=r,o=0;o<n;o++)v(u,s,e),s+=i;return a}Bb.exports=tG
});var Gb=c(function(jX,Cb){
var oG=require('@stdlib/array/base/arraylike2object/dist'),fG=Ri(),ki=8;function qG(n,e,a,i){var r,u,v,s;if(n<=0)return a;if(s=oG(a),s.accessorProtocol)return i<0?r=(1-n)*i:r=0,fG(n,e,s,i,r),s.data;if(i===1){if(v=n%ki,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ki)return a;for(u=v;u<n;u+=ki)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}Cb.exports=qG
});var Kb=c(function(bX,Ib){
var cG=require('@stdlib/array/base/arraylike2object/dist'),mG=Ri(),we=8;function lG(n,e,a,i,r){var u,v,s,o;if(n<=0)return a;if(s=cG(a),s.accessorProtocol)return mG(n,e,s,i,r),s.data;if(u=r,i===1){if(v=n%we,v>0)for(o=0;o<v;o++)a[u]=e,u+=i;if(n<we)return a;for(o=v;o<n;o+=we)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=we;return a}for(o=0;o<n;o++)a[u]=e,u+=i;return a}Ib.exports=lG
});var Db=c(function(wX,zb){
var pG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Vb=Gb(),gG=Kb();pG(Vb,"ndarray",gG);zb.exports=Vb
});var _i=c(function(yX,Hb){
function jG(n,e,a,i,r,u){var v,s,o,t,f;for(v=e.data,o=e.accessors[0],s=e.accessors[1],t=i,f=0;f<n;f++)s(v,t,r.call(u,o(v,t),f,t,e)),t+=a;return e}Hb.exports=jG
});var Qb=c(function(RX,Jb){
var bG=require('@stdlib/array/base/arraylike2object/dist'),wG=_i();function yG(n,e,a,i,r){var u,v,s;if(n<=0)return e;if(a<0?u=(1-n)*a:u=0,v=bG(e),v.accessorProtocol)return wG(n,v,a,u,i,r),v.data;for(s=0;s<n;s++)e[u]=i.call(r,e[u],s,u,e),u+=a;return e}Jb.exports=yG
});var Wb=c(function(kX,Ub){
var RG=require('@stdlib/array/base/arraylike2object/dist'),kG=_i();function _G(n,e,a,i,r,u){var v,s,o;if(n<=0)return e;if(s=RG(e),s.accessorProtocol)return kG(n,s,a,i,r,u),s.data;for(v=i,o=0;o<n;o++)e[v]=r.call(u,e[v],o,v,e),v+=a;return e}Ub.exports=_G
});var Yb=c(function(_X,hb){
var EG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$b=Qb(),OG=Wb();EG($b,"ndarray",OG);hb.exports=$b
});var Nb=c(function(EX,xb){
var Xb=require('@stdlib/math/base/assert/is-nan/dist'),db=require('@stdlib/math/base/special/abs/dist');function FG(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Xb(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Xb(o)===!1&&(t=u+o,db(u)>=db(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}xb.exports=FG
});var uw=c(function(OX,aw){
var rw=require('@stdlib/math/base/assert/is-nan/dist'),ew=require('@stdlib/math/base/special/abs/dist');function MG(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return rw(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],rw(f)===!1&&(q=s+f,ew(s)>=ew(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}aw.exports=MG
});var vw=c(function(FX,nw){
var TG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),iw=Nb(),SG=uw();TG(iw,"ndarray",SG);nw.exports=iw
});var fw=c(function(MX,ow){
var sw=require('@stdlib/math/base/assert/is-nan/dist'),tw=require('@stdlib/math/base/special/abs/dist');function ZG(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return sw(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],sw(u)===!1&&(v=i+u,tw(i)>=tw(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}ow.exports=ZG
});var lw=c(function(TX,mw){
var qw=require('@stdlib/math/base/assert/is-nan/dist'),cw=require('@stdlib/math/base/special/abs/dist');function PG(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return qw(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],qw(v)===!1&&(s=r+v,cw(r)>=cw(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}mw.exports=PG
});var ye=c(function(SX,gw){
var AG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pw=fw(),LG=lw();AG(pw,"ndarray",LG);gw.exports=pw
});var bw=c(function(ZX,jw){
var BG=ye();function CG(n,e,a){return BG(n,e,a)}jw.exports=CG
});var yw=c(function(PX,ww){
var GG=ye().ndarray;function IG(n,e,a,i){return GG(n,e,a,i)}ww.exports=IG
});var _w=c(function(AX,kw){
var KG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Rw=bw(),VG=yw();KG(Rw,"ndarray",VG);kw.exports=Rw
});var Fw=c(function(LX,Ow){
var Ew=require('@stdlib/math/base/assert/is-nan/dist'),Re=require('@stdlib/math/base/special/abs/dist');function zG(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return Ew(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],Ew(o)===!1&&(t=i+o,Re(i)>=Re(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Re(v)>=Re(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}Ow.exports=zG
});var Sw=c(function(BX,Tw){
var Mw=require('@stdlib/math/base/assert/is-nan/dist'),ke=require('@stdlib/math/base/special/abs/dist');function DG(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return Mw(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],Mw(t)===!1&&(f=r+t,ke(r)>=ke(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,ke(s)>=ke(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}Tw.exports=DG
});var Aw=c(function(CX,Pw){
var HG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Zw=Fw(),JG=Sw();HG(Zw,"ndarray",JG);Pw.exports=Zw
});var Cw=c(function(GX,Bw){
var Lw=require('@stdlib/math/base/assert/is-nan/dist');function QG(n,e,a){var i,r,u;if(r=0,n<=0)return r;if(n===1||a===0)return Lw(e[0])?r:e[0];for(a<0?i=(1-n)*a:i=0,u=0;u<n;u++)Lw(e[i])===!1&&(r+=e[i]),i+=a;return r}Bw.exports=QG
});var Kw=c(function(IX,Iw){
var Gw=require('@stdlib/math/base/assert/is-nan/dist');function UG(n,e,a,i){var r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return Gw(e[i])?u:e[i];for(r=i,v=0;v<n;v++)Gw(e[r])===!1&&(u+=e[r]),r+=a;return u}Iw.exports=UG
});var Dw=c(function(KX,zw){
var WG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Vw=Cw(),$G=Kw();WG(Vw,"ndarray",$G);zw.exports=Vw
});var Oi=c(function(VX,Hw){
var P=require('@stdlib/math/base/assert/is-nan/dist'),hG=require('@stdlib/math/base/special/floor/dist'),YG=128;function Ei(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return P(e[i])?0:e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=YG){for(u=P(e[r])?0:e[r],r+=a,v=P(e[r])?0:e[r],r+=a,s=P(e[r])?0:e[r],r+=a,o=P(e[r])?0:e[r],r+=a,t=P(e[r])?0:e[r],r+=a,f=P(e[r])?0:e[r],r+=a,q=P(e[r])?0:e[r],r+=a,m=P(e[r])?0:e[r],r+=a,p=n%8,j=8;j<n-p;j+=8)u+=P(e[r])?0:e[r],r+=a,v+=P(e[r])?0:e[r],r+=a,s+=P(e[r])?0:e[r],r+=a,o+=P(e[r])?0:e[r],r+=a,t+=P(e[r])?0:e[r],r+=a,f+=P(e[r])?0:e[r],r+=a,q+=P(e[r])?0:e[r],r+=a,m+=P(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}return g=hG(n/2),g-=g%8,Ei(g,e,a,r)+Ei(n-g,e,a,r+g*a)}Hw.exports=Ei
});var Uw=c(function(zX,Qw){
var Jw=require('@stdlib/math/base/assert/is-nan/dist'),XG=Oi();function dG(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Jw(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Jw(e[i])===!1&&(r+=e[i]),i+=a;return r}return XG(n,e,a,i)}Qw.exports=dG
});var hw=c(function(DX,$w){
var xG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ww=Uw(),NG=Oi();xG(Ww,"ndarray",NG);$w.exports=Ww
});var Fi=c(function(HX,Yw){
var rI=require('@stdlib/math/base/special/floor/dist');function eI(n,e,a,i){var r,u,v,s,o,t,f,q;for(r=e.data,v=e.accessors[0],u=e.accessors[1],f=rI(n/2),o=i,t=o+(n-1)*a,q=0;q<f;q++)s=v(r,o),u(r,o,v(r,t)),u(r,t,s),o+=a,t-=a;return e}Yw.exports=eI
});var dw=c(function(JX,Xw){
var aI=require('@stdlib/math/base/special/floor/dist'),uI=require('@stdlib/array/base/arraylike2object/dist'),iI=Fi(),_e=3;function nI(n,e,a){var i,r,u,v,s,o,t;if(n<=0)return e;if(v=uI(e),v.accessorProtocol)return a<0?r=(1-n)*a:r=0,iI(n,v,a,r),v.data;if(o=aI(n/2),a===1){if(s=o%_e,u=n-1,s>0)for(r=0;r<s;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(o<_e)return e;for(r=s;r<o;r+=_e)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=_e;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,t=0;t<o;t++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}Xw.exports=nI
});var Nw=c(function(QX,xw){
var vI=require('@stdlib/math/base/special/floor/dist'),sI=require('@stdlib/array/base/arraylike2object/dist'),tI=Fi(),Fr=3;function oI(n,e,a,i){var r,u,v,s,o,t,f;if(n<=0)return e;if(s=sI(e),s.accessorProtocol)return tI(n,s,a,i),s.data;if(t=vI(n/2),u=i,a===1){if(o=t%Fr,v=u+n-1,o>0)for(f=0;f<o;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(t<Fr)return e;for(f=o;f<t;f+=Fr)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Fr,v-=Fr;return e}for(v=u+(n-1)*a,f=0;f<t;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}xw.exports=oI
});var ay=c(function(UX,ey){
var fI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ry=dw(),qI=Nw();fI(ry,"ndarray",qI);ey.exports=ry
});var vy=c(function(WX,ny){
var uy=require('@stdlib/math/base/assert/is-positive-zero/dist'),iy=require('@stdlib/math/base/assert/is-nan/dist'),cI=require('@stdlib/math/base/special/floor/dist');function mI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,j=n,o=cI(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(j-=1,j===0)return a;l=v+j*i,m=a[l],g=s+j*u,p=r[g],a[l]=a[v],r[g]=r[s]}for(b=o,t=b*2+1;t<j&&(R=t+1,R<j&&(f=a[v+R*i],q=a[v+t*i],(f>q||iy(f)||f===q&&uy(f))&&(t+=1)),f=a[v+t*i],f>m||iy(f)||f===m&&uy(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}ny.exports=mI
});var fy=c(function($X,oy){
var sy=require('@stdlib/math/base/assert/is-positive-zero/dist'),ty=require('@stdlib/math/base/assert/is-nan/dist'),lI=require('@stdlib/math/base/special/floor/dist');function pI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),j=n,o=lI(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(j-=1,j===0)return a;l=r+j*i,m=a[l],g=s+j*v,p=u[g],a[l]=a[r],u[g]=u[s]}for(b=o,t=b*2+1;t<j&&(R=t+1,R<j&&(f=a[r+R*i],q=a[r+t*i],(f>q||ty(f)||f===q&&sy(f))&&(t+=1)),f=a[r+t*i],f>m||ty(f)||f===m&&sy(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}oy.exports=pI
});var my=c(function(hX,cy){
var gI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qy=vy(),jI=fy();gI(qy,"ndarray",jI);cy.exports=qy
});var gy=c(function(YX,py){
var Ee=require('@stdlib/math/base/assert/is-negative-zero/dist'),ly=require('@stdlib/math/base/assert/is-nan/dist');function bI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(g=a[s],j=r[q],ly(g)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=g,r[l]=j}else{for(v=Ee(g),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=g&&!(v&&b===g&&Ee(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=g,r[m+u]=j,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(g=a[s],j=r[q],ly(g)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=g,r[l]=j}else{for(v=Ee(g),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=g&&!(v&&b===g&&Ee(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=g,r[m+u]=j,s+=i,q+=u}return a}py.exports=bI
});var wy=c(function(XX,by){
var Oe=require('@stdlib/math/base/assert/is-negative-zero/dist'),jy=require('@stdlib/math/base/assert/is-nan/dist');function wI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,g=s,j=g+(n-1)*v,p=g+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],jy(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[j]=R}else{for(o=Oe(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Oe(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],jy(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[j]=R}else{for(o=Oe(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Oe(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}by.exports=wI
});var ky=c(function(dX,Ry){
var yI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yy=gy(),RI=wy();yI(yy,"ndarray",RI);Ry.exports=yy
});var Mi=c(function(xX,kI){kI.exports=[701,301,132,57,23,10,4,1]});var Oy=c(function(NX,Ey){
var _I=require('@stdlib/math/base/assert/is-negative-zero/dist'),EI=require('@stdlib/math/base/assert/is-nan/dist'),_y=Mi(),OI=_y.length;function FI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<OI;p++)for(t=_y[p],l=t;l<n;l++)if(f=a[v+l*i],!EI(f)){for(q=r[s+l*u],o=_I(f),g=l;g>=t&&(m=a[v+(g-t)*i],!(m<=f&&!(o&&m===f)));g-=t)a[v+g*i]=m,r[s+g*u]=r[s+(g-t)*u];a[v+g*i]=f,r[s+g*u]=q}return a}Ey.exports=FI
});var Ty=c(function(rd,My){
var MI=require('@stdlib/math/base/assert/is-negative-zero/dist'),TI=require('@stdlib/math/base/assert/is-nan/dist'),Fy=Mi(),SI=Fy.length;function ZI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<SI;p++)for(t=Fy[p],l=t;l<n;l++)if(f=a[r+l*i],!TI(f)){for(q=u[s+l*v],o=MI(f),g=l;g>=t&&(m=a[r+(g-t)*i],!(m<=f&&!(o&&m===f)));g-=t)a[r+g*i]=m,u[s+g*v]=u[s+(g-t)*v];a[r+g*i]=f,u[s+g*v]=q}return a}My.exports=ZI
});var Py=c(function(ed,Zy){
var PI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sy=Oy(),AI=Ty();PI(Sy,"ndarray",AI);Zy.exports=Sy
});var Cy=c(function(ad,By){
var Ay=require('@stdlib/math/base/assert/is-positive-zero/dist'),Ly=require('@stdlib/math/base/assert/is-nan/dist'),LI=require('@stdlib/math/base/special/floor/dist');function BI(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=LI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Ly(s)||s===o&&Ay(s))&&(v+=1)),s=a[r+v*i],s>f||Ly(s)||s===f&&Ay(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}By.exports=BI
});var Vy=c(function(ud,Ky){
var Gy=require('@stdlib/math/base/assert/is-positive-zero/dist'),Iy=require('@stdlib/math/base/assert/is-nan/dist'),CI=require('@stdlib/math/base/special/floor/dist');function GI(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=CI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Iy(s)||s===o&&Gy(s))&&(v+=1)),s=a[r+v*i],s>f||Iy(s)||s===f&&Gy(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Ky.exports=GI
});var Hy=c(function(id,Dy){
var II=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zy=Cy(),KI=Vy();II(zy,"ndarray",KI);Dy.exports=zy
});var Uy=c(function(nd,Qy){
var Fe=require('@stdlib/math/base/assert/is-negative-zero/dist'),Jy=require('@stdlib/math/base/assert/is-nan/dist');function VI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],Jy(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Fe(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Fe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],Jy(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Fe(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Fe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}Qy.exports=VI
});var hy=c(function(vd,$y){
var Me=require('@stdlib/math/base/assert/is-negative-zero/dist'),Wy=require('@stdlib/math/base/assert/is-nan/dist');function zI(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],Wy(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Me(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Me(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],Wy(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Me(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Me(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}$y.exports=zI
});var dy=c(function(sd,Xy){
var DI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yy=Uy(),HI=hy();DI(Yy,"ndarray",HI);Xy.exports=Yy
});var Ti=c(function(td,JI){JI.exports=[701,301,132,57,23,10,4,1]});var rR=c(function(od,Ny){
var QI=require('@stdlib/math/base/assert/is-negative-zero/dist'),UI=require('@stdlib/math/base/assert/is-nan/dist'),xy=Ti(),WI=xy.length;function $I(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<WI;t++)for(v=xy[t],f=v;f<n;f++)if(s=a[r+f*i],!UI(s)){for(u=QI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}Ny.exports=$I
});var uR=c(function(fd,aR){
var hI=require('@stdlib/math/base/assert/is-negative-zero/dist'),YI=require('@stdlib/math/base/assert/is-nan/dist'),eR=Ti(),XI=eR.length;function dI(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<XI;t++)for(v=eR[t],f=v;f<n;f++)if(s=a[r+f*i],!YI(s)){for(u=hI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}aR.exports=dI
});var vR=c(function(qd,nR){
var xI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),iR=rR(),NI=uR();xI(iR,"ndarray",NI);nR.exports=iR
});var oR=c(function(cd,tR){
var sR=require('@stdlib/math/base/special/abs/dist');function rK(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,sR(i)>=sR(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}tR.exports=rK
});var cR=c(function(md,qR){
var fR=require('@stdlib/math/base/special/abs/dist');function eK(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,fR(r)>=fR(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}qR.exports=eK
});var Te=c(function(ld,lR){
var aK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mR=oR(),uK=cR();aK(mR,"ndarray",uK);lR.exports=mR
});var gR=c(function(pd,pR){
var iK=Te();function nK(n,e,a){return iK(n,e,a)}pR.exports=nK
});var bR=c(function(gd,jR){
var vK=Te().ndarray;function sK(n,e,a,i){return vK(n,e,a,i)}jR.exports=sK
});var RR=c(function(jd,yR){
var tK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wR=gR(),oK=bR();tK(wR,"ndarray",oK);yR.exports=wR
});var _R=c(function(bd,kR){
var Se=require('@stdlib/math/base/special/abs/dist');function fK(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,Se(i)>=Se(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Se(v)>=Se(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}kR.exports=fK
});var OR=c(function(wd,ER){
var Ze=require('@stdlib/math/base/special/abs/dist');function qK(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,Ze(r)>=Ze(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Ze(s)>=Ze(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}ER.exports=qK
});var TR=c(function(yd,MR){
var cK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),FR=_R(),mK=OR();cK(FR,"ndarray",mK);MR.exports=FR
});var ZR=c(function(Rd,SR){
var Si=6;function lK(n,e,a){var i,r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return e[0];if(a===1){if(r=n%Si,r>0)for(v=0;v<r;v++)u+=e[v];if(n<Si)return u;for(v=r;v<n;v+=Si)u+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return u}for(a<0?i=(1-n)*a:i=0,v=0;v<n;v++)u+=e[i],i+=a;return u}SR.exports=lK
});var AR=c(function(kd,PR){
var Pe=6;function pK(n,e,a,i){var r,u,v,s;if(v=0,n<=0)return v;if(n===1||a===0)return e[i];if(r=i,a===1){if(u=n%Pe,u>0)for(s=0;s<u;s++)v+=e[r],r+=a;if(n<Pe)return v;for(s=u;s<n;s+=Pe)v+=e[r]+e[r+1]+e[r+2]+e[r+3]+e[r+4]+e[r+5],r+=Pe;return v}for(s=0;s<n;s++)v+=e[r],r+=a;return v}PR.exports=pK
});var CR=c(function(_d,BR){
var gK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),LR=ZR(),jK=AR();gK(LR,"ndarray",jK);BR.exports=LR
});var Pi=c(function(Ed,GR){
var bK=require('@stdlib/math/base/special/floor/dist'),wK=128;function Zi(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)l+=e[r],r+=a;return l}if(n<=wK){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,j=8;j<n-p;j+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)l+=e[r],r+=a;return l}return g=bK(n/2),g-=g%8,Zi(g,e,a,r)+Zi(n-g,e,a,r+g*a)}GR.exports=Zi
});var KR=c(function(Od,IR){
var yK=Pi();function RK(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return yK(n,e,a,i)}IR.exports=RK
});var DR=c(function(Fd,zR){
var kK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),VR=KR(),_K=Pi();kK(VR,"ndarray",_K);zR.exports=VR
});var JR=c(function(Md,HR){
var Ai=5;function EK(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%Ai,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<Ai)return a;for(u=v;u<n;u+=Ai)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}HR.exports=EK
});var UR=c(function(Td,QR){
var Ae=5;function OK(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Ae,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Ae)return a;for(s=v;s<n;s+=Ae)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Ae;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}QR.exports=OK
});var hR=c(function(Sd,$R){
var FK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),WR=JR(),MK=UR();FK(WR,"ndarray",MK);$R.exports=WR
});var dR=c(function(Zd,XR){
var TK=require("path").join,SK=require('@stdlib/utils/try-require/dist'),ZK=require('@stdlib/assert/is-error/dist'),PK=hR(),Li,YR=SK(TK(__dirname,"./native.js"));ZK(YR)?Li=PK:Li=YR;XR.exports=Li
});var rk=c(function(Pd,NR){
var W=require('@stdlib/number/float64/base/to-float32/dist'),xR=require('@stdlib/math/base/special/abs/dist');function AK(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return W(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=W(e+a[u]),s=W(r+v),xR(r)>=xR(v)?o=W(o+W(W(r-s)+v)):o=W(o+W(W(v-s)+r)),r=s,u+=i;return W(r+o)}NR.exports=AK
});var uk=c(function(Ad,ak){
var $=require('@stdlib/number/float64/base/to-float32/dist'),ek=require('@stdlib/math/base/special/abs/dist');function LK(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return $(e+a[r]);for(v=r,u=0,t=0,f=0;f<n;f++)s=$(e+a[v]),o=$(u+s),ek(u)>=ek(s)?t=$(t+$($(u-o)+s)):t=$(t+$($(s-o)+u)),u=o,v+=i;return $(u+t)}ak.exports=LK
});var vk=c(function(Ld,nk){
var BK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ik=rk(),CK=uk();BK(ik,"ndarray",CK);nk.exports=ik
});var Le=c(function(Bd,tk){
var GK=require("path").join,IK=require('@stdlib/utils/try-require/dist'),KK=require('@stdlib/assert/is-error/dist'),VK=vk(),Bi,sk=IK(GK(__dirname,"./native.js"));KK(sk)?Bi=VK:Bi=sk;tk.exports=Bi
});var fk=c(function(Cd,ok){
var zK=Le();function DK(n,e,a,i){return zK(n,e,a,i)}ok.exports=DK
});var ck=c(function(Gd,qk){
var HK=Le().ndarray;function JK(n,e,a,i,r){return HK(n,e,a,i,r)}qk.exports=JK
});var pk=c(function(Id,lk){
var QK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mk=fk(),UK=ck();QK(mk,"ndarray",UK);lk.exports=mk
});var bk=c(function(Kd,jk){
var WK=require("path").join,$K=require('@stdlib/utils/try-require/dist'),hK=require('@stdlib/assert/is-error/dist'),YK=pk(),Ci,gk=$K(WK(__dirname,"./native.js"));hK(gk)?Ci=YK:Ci=gk;jk.exports=Ci
});var yk=c(function(Vd,wk){
var K=require('@stdlib/number/float64/base/to-float32/dist'),Be=require('@stdlib/math/base/special/abs/dist');function XK(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return K(e+a[0]);for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=K(e+a[v]),f=K(r+t),Be(r)>=Be(t)?q=K(K(r-f)+t):q=K(K(t-f)+r),r=f,f=K(s+q),Be(s)>=Be(q)?o=K(K(s-f)+q):o=K(K(q-f)+s),s=f,u=K(u+o),v+=i;return K(r+K(s+u))}wk.exports=XK
});var kk=c(function(zd,Rk){
var V=require('@stdlib/number/float64/base/to-float32/dist'),Ce=require('@stdlib/math/base/special/abs/dist');function dK(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return V(e+a[r]);for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=V(e+a[s]),q=V(u+f),Ce(u)>=Ce(f)?m=V(V(u-q)+f):m=V(V(f-q)+u),u=q,q=V(o+m),Ce(o)>=Ce(m)?t=V(V(o-q)+m):t=V(V(m-q)+o),o=q,v=V(v+t),s+=i;return V(u+V(o+v))}Rk.exports=dK
});var Ok=c(function(Dd,Ek){
var xK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_k=yk(),NK=kk();xK(_k,"ndarray",NK);Ek.exports=_k
});var Tk=c(function(Hd,Mk){
var rV=require("path").join,eV=require('@stdlib/utils/try-require/dist'),aV=require('@stdlib/assert/is-error/dist'),uV=Ok(),Gi,Fk=eV(rV(__dirname,"./native.js"));aV(Fk)?Gi=uV:Gi=Fk;Mk.exports=Gi
});var Zk=c(function(Jd,Sk){
var Ii=require('@stdlib/number/float64/base/to-float32/dist');function iV(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Ii(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r=Ii(r+Ii(e+a[u])),u+=i;return r}Sk.exports=iV
});var Ak=c(function(Qd,Pk){
var Ki=require('@stdlib/number/float64/base/to-float32/dist');function nV(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return Ki(e+a[0]);for(v=r,u=0,s=0;s<n;s++)u=Ki(u+Ki(e+a[v])),v+=i;return u}Pk.exports=nV
});var Ck=c(function(Ud,Bk){
var vV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lk=Zk(),sV=Ak();vV(Lk,"ndarray",sV);Bk.exports=Lk
});var Kk=c(function(Wd,Ik){
var tV=require("path").join,oV=require('@stdlib/utils/try-require/dist'),fV=require('@stdlib/assert/is-error/dist'),qV=Ck(),Vi,Gk=oV(tV(__dirname,"./native.js"));fV(Gk)?Vi=qV:Vi=Gk;Ik.exports=Vi
});var Di=c(function($d,Vk){
var E=require('@stdlib/number/float64/base/to-float32/dist'),cV=require('@stdlib/math/base/special/floor/dist'),mV=128;function zi(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,g,j,b;if(n<=0)return 0;if(n===1||i===0)return E(e+a[r]);if(u=r,n<8){for(g=0,b=0;b<n;b++)g=E(g+E(e+a[u])),u+=i;return g}if(n<=mV){for(v=E(e+a[u]),s=E(e+a[u+i]),o=E(e+a[u+2*i]),t=E(e+a[u+3*i]),f=E(e+a[u+4*i]),q=E(e+a[u+5*i]),m=E(e+a[u+6*i]),p=E(e+a[u+7*i]),u+=8*i,l=n%8,b=8;b<n-l;b+=8)v=E(v+E(e+a[u])),s=E(s+E(e+a[u+i])),o=E(o+E(e+a[u+2*i])),t=E(t+E(e+a[u+3*i])),f=E(f+E(e+a[u+4*i])),q=E(q+E(e+a[u+5*i])),m=E(m+E(e+a[u+6*i])),p=E(p+E(e+a[u+7*i])),u+=8*i;for(g=E(E(E(v+s)+E(o+t))+E(E(f+q)+E(m+p))),b;b<n;b++)g=E(g+E(e+a[u])),u+=i;return g}return j=cV(n/2),j-=j%8,E(zi(j,e,a,i,u)+zi(n-j,e,a,i,u+j*i))}Vk.exports=zi
});var Dk=c(function(hd,zk){
var Hi=require('@stdlib/number/float64/base/to-float32/dist'),lV=Di();function pV(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Hi(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u=Hi(u+Hi(e+a[r])),r+=i;return u}return lV(n,e,a,i,r)}zk.exports=pV
});var Qk=c(function(Yd,Jk){
var gV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hk=Dk(),jV=Di();gV(Hk,"ndarray",jV);Jk.exports=Hk
});var $k=c(function(Xd,Wk){
var bV=require("path").join,wV=require('@stdlib/utils/try-require/dist'),yV=require('@stdlib/assert/is-error/dist'),RV=Qk(),Ji,Uk=wV(bV(__dirname,"./native.js"));yV(Uk)?Ji=RV:Ji=Uk;Wk.exports=Ji
});var Ui=c(function(dd,hk){
var C=require('@stdlib/number/float64/base/to-float32/dist'),kV=require('@stdlib/math/base/special/floor/dist'),A=require('@stdlib/math/base/special/abs/dist'),_V=128;function Qi(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return A(e[i]);if(r=i,n<8){for(l=0,j=0;j<n;j++)l=C(l+A(e[r])),r+=a;return l}if(n<=_V){for(u=A(e[r]),v=A(e[r+a]),s=A(e[r+2*a]),o=A(e[r+3*a]),t=A(e[r+4*a]),f=A(e[r+5*a]),q=A(e[r+6*a]),m=A(e[r+7*a]),r+=8*a,p=n%8,j=8;j<n-p;j+=8)u=C(u+A(e[r])),v=C(v+A(e[r+a])),s=C(s+A(e[r+2*a])),o=C(o+A(e[r+3*a])),t=C(t+A(e[r+4*a])),f=C(f+A(e[r+5*a])),q=C(q+A(e[r+6*a])),m=C(m+A(e[r+7*a])),r+=8*a;for(l=C(C(C(u+v)+C(s+o))+C(C(t+f)+C(q+m))),j;j<n;j++)l=C(l+A(e[r])),r+=a;return l}return g=kV(n/2),g-=g%8,C(Qi(g,e,a,r)+Qi(n-g,e,a,r+g*a))}hk.exports=Qi
});var dk=c(function(xd,Xk){
var EV=require('@stdlib/number/float64/base/to-float32/dist'),Yk=require('@stdlib/math/base/special/abs/dist'),OV=Ui();function FV(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Yk(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=EV(r+Yk(e[i])),i+=a;return r}return OV(n,e,a,i)}Xk.exports=FV
});var r3=c(function(Nd,Nk){
var MV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xk=dk(),TV=Ui();MV(xk,"ndarray",TV);Nk.exports=xk
});var u3=c(function(rx,a3){
var SV=require("path").join,ZV=require('@stdlib/utils/try-require/dist'),PV=require('@stdlib/assert/is-error/dist'),AV=r3(),Wi,e3=ZV(SV(__dirname,"./native.js"));PV(e3)?Wi=AV:Wi=e3;a3.exports=Wi
});var v3=c(function(ex,n3){
var ur=require('@stdlib/number/float64/base/to-float32/dist'),i3=require('@stdlib/math/base/special/abs/dist');function LV(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=ur(o+t),i3(o)>=i3(t)?q=ur(q+ur(ur(o-f)+t)):q=ur(q+ur(ur(t-f)+o)),o=f,r[s]=ur(o+q),v+=i,s+=u;return r}n3.exports=LV
});var o3=c(function(ax,t3){
var ir=require('@stdlib/number/float64/base/to-float32/dist'),s3=require('@stdlib/math/base/special/abs/dist');function BV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=ir(f+q),s3(f)>=s3(q)?p=ir(p+ir(ir(f-m)+q)):p=ir(p+ir(ir(q-m)+f)),f=m,u[t]=ir(f+p),o+=i,t+=v;return u}t3.exports=BV
});var c3=c(function(ux,q3){
var CV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),f3=v3(),GV=o3();CV(f3,"ndarray",GV);q3.exports=f3
});var Ge=c(function(ix,l3){
var IV=require("path").join,KV=require('@stdlib/utils/try-require/dist'),VV=require('@stdlib/assert/is-error/dist'),zV=c3(),$i,m3=KV(IV(__dirname,"./native.js"));VV(m3)?$i=zV:$i=m3;l3.exports=$i
});var g3=c(function(nx,p3){
var DV=Ge();function HV(n,e,a,i,r,u){return DV(n,e,a,i,r,u)}p3.exports=HV
});var b3=c(function(vx,j3){
var JV=Ge().ndarray;function QV(n,e,a,i,r,u,v,s){return JV(n,e,a,i,r,u,v,s)}j3.exports=QV
});var R3=c(function(sx,y3){
var UV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),w3=g3(),WV=b3();UV(w3,"ndarray",WV);y3.exports=w3
});var E3=c(function(tx,_3){
var $V=require("path").join,hV=require('@stdlib/utils/try-require/dist'),YV=require('@stdlib/assert/is-error/dist'),XV=R3(),hi,k3=hV($V(__dirname,"./native.js"));YV(k3)?hi=XV:hi=k3;_3.exports=hi
});var F3=c(function(ox,O3){
var z=require('@stdlib/number/float64/base/to-float32/dist'),Ie=require('@stdlib/math/base/special/abs/dist');function dV(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=z(e+q),Ie(e)>=Ie(q)?p=z(z(e-m)+q):p=z(z(q-m)+e),e=m,m=z(t+p),Ie(t)>=Ie(p)?f=z(z(t-m)+p):f=z(z(p-m)+t),t=m,v=z(v+f),r[o]=z(e+z(t+v)),s+=i,o+=u;return r}O3.exports=dV
});var T3=c(function(fx,M3){
var D=require('@stdlib/number/float64/base/to-float32/dist'),Ke=require('@stdlib/math/base/special/abs/dist');function xV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j;if(n<=0)return u;for(t=r,f=s,o=0,q=0,j=0;j<n;j++)p=a[t],l=D(e+p),Ke(e)>=Ke(p)?g=D(D(e-l)+p):g=D(D(p-l)+e),e=l,l=D(q+g),Ke(q)>=Ke(g)?m=D(D(q-l)+g):m=D(D(g-l)+q),q=l,o=D(o+m),u[f]=D(e+D(q+o)),t+=i,f+=v;return u}M3.exports=xV
});var P3=c(function(qx,Z3){
var NV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),S3=F3(),rz=T3();NV(S3,"ndarray",rz);Z3.exports=S3
});var B3=c(function(cx,L3){
var ez=require("path").join,az=require('@stdlib/utils/try-require/dist'),uz=require('@stdlib/assert/is-error/dist'),iz=P3(),Yi,A3=az(ez(__dirname,"./native.js"));uz(A3)?Yi=iz:Yi=A3;L3.exports=Yi
});var G3=c(function(mx,C3){
var nz=require('@stdlib/number/float64/base/to-float32/dist');function vz(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e=nz(e+a[v]),r[s]=e,v+=i,s+=u;return r}C3.exports=vz
});var K3=c(function(lx,I3){
var sz=require('@stdlib/number/float64/base/to-float32/dist');function tz(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e=sz(e+a[o]),u[t]=e,o+=i,t+=v;return u}I3.exports=tz
});var D3=c(function(px,z3){
var oz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),V3=G3(),fz=K3();oz(V3,"ndarray",fz);z3.exports=V3
});var Q3=c(function(gx,J3){
var qz=require("path").join,cz=require('@stdlib/utils/try-require/dist'),mz=require('@stdlib/assert/is-error/dist'),lz=D3(),Xi,H3=cz(qz(__dirname,"./native.js"));mz(H3)?Xi=lz:Xi=H3;J3.exports=Xi
});var xi=c(function(jx,W3){
var U3=require('@stdlib/number/float64/base/to-float32/dist'),pz=require('@stdlib/math/base/special/floor/dist'),gz=128;function di(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=gz){for(f=0,m=0;m<n;m++)f=U3(f+a[o]),u[t]=U3(e+f),o+=i,t+=v;return u}return q=pz(n/2),di(q,e,a,i,o,u,v,t),t+=(q-1)*v,di(n-q,u[t],a,i,o+q*i,u,v,t+v),u}W3.exports=di
});var h3=c(function(bx,$3){
var jz=xi();function bz(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,jz(n,e,a,i,v,r,u,s))}$3.exports=bz
});var d3=c(function(wx,X3){
var wz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Y3=h3(),yz=xi();wz(Y3,"ndarray",yz);X3.exports=Y3
});var r_=c(function(yx,N3){
var Rz=require("path").join,kz=require('@stdlib/utils/try-require/dist'),_z=require('@stdlib/assert/is-error/dist'),Ez=d3(),Ni,x3=kz(Rz(__dirname,"./native.js"));_z(x3)?Ni=Ez:Ni=x3;N3.exports=Ni
});var en=c(function(Rx,e_){
var Ve=require('@stdlib/number/float64/base/to-float32/dist'),Oz=require('@stdlib/math/base/special/floor/dist'),Fz=128;function rn(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,g,j,b;if(n<=0)return 0;if(n===1||i===0)return Ve(e+a[r]);if(u=r,n<8){for(g=0,b=0;b<n;b++)g+=e+a[u],u+=i;return Ve(g)}if(n<=Fz){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(g=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)g+=e+a[u],u+=i;return Ve(g)}return j=Oz(n/2),j-=j%8,Ve(rn(j,e,a,i,u)+rn(n-j,e,a,i,u+j*i))}e_.exports=rn
});var i_=c(function(kx,u_){
var a_=require('@stdlib/number/float64/base/to-float32/dist'),Mz=en();function Tz(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return a_(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return a_(u)}return Mz(n,e,a,i,r)}u_.exports=Tz
});var s_=c(function(_x,v_){
var Sz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),n_=i_(),Zz=en();Sz(n_,"ndarray",Zz);v_.exports=n_
});var ze=c(function(Ex,o_){
var Pz=require("path").join,Az=require('@stdlib/utils/try-require/dist'),Lz=require('@stdlib/assert/is-error/dist'),Bz=s_(),an,t_=Az(Pz(__dirname,"./native.js"));Lz(t_)?an=Bz:an=t_;o_.exports=an
});var q_=c(function(Ox,f_){
var Cz=ze();function Gz(n,e,a,i){return Cz(n,e,a,i)}f_.exports=Gz
});var m_=c(function(Fx,c_){
var Iz=ze().ndarray;function Kz(n,e,a,i,r){return Iz(n,e,a,i,r)}c_.exports=Kz
});var g_=c(function(Mx,p_){
var Vz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),l_=q_(),zz=m_();Vz(l_,"ndarray",zz);p_.exports=l_
});var w_=c(function(Tx,b_){
var Dz=require("path").join,Hz=require('@stdlib/utils/try-require/dist'),Jz=require('@stdlib/assert/is-error/dist'),Qz=g_(),un,j_=Hz(Dz(__dirname,"./native.js"));Jz(j_)?un=Qz:un=j_;b_.exports=un
});var sn=c(function(Sx,y_){
var nn=require('@stdlib/number/float64/base/to-float32/dist'),L=require('@stdlib/math/base/assert/is-nanf/dist'),Uz=require('@stdlib/math/base/special/floor/dist'),Wz=128;function vn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return L(e[i])?0:e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)L(e[r])===!1&&(l+=e[r]),r+=a;return nn(l)}if(n<=Wz){for(u=L(e[r])?0:e[r],r+=a,v=L(e[r])?0:e[r],r+=a,s=L(e[r])?0:e[r],r+=a,o=L(e[r])?0:e[r],r+=a,t=L(e[r])?0:e[r],r+=a,f=L(e[r])?0:e[r],r+=a,q=L(e[r])?0:e[r],r+=a,m=L(e[r])?0:e[r],r+=a,p=n%8,j=8;j<n-p;j+=8)u+=L(e[r])?0:e[r],r+=a,v+=L(e[r])?0:e[r],r+=a,s+=L(e[r])?0:e[r],r+=a,o+=L(e[r])?0:e[r],r+=a,t+=L(e[r])?0:e[r],r+=a,f+=L(e[r])?0:e[r],r+=a,q+=L(e[r])?0:e[r],r+=a,m+=L(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)L(e[r])===!1&&(l+=e[r]),r+=a;return nn(l)}return g=Uz(n/2),g-=g%8,nn(vn(g,e,a,r)+vn(n-g,e,a,r+g*a))}y_.exports=vn
});var __=c(function(Zx,k_){
var $z=require('@stdlib/number/float64/base/to-float32/dist'),R_=require('@stdlib/math/base/assert/is-nanf/dist'),hz=sn();function Yz(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return R_(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)R_(e[i])===!1&&(r+=e[i]),i+=a;return $z(r)}return hz(n,e,a,i)}k_.exports=Yz
});var F_=c(function(Px,O_){
var Xz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),E_=__(),dz=sn();Xz(E_,"ndarray",dz);O_.exports=E_
});var De=c(function(Ax,T_){
var xz=require("path").join,Nz=require('@stdlib/utils/try-require/dist'),rD=require('@stdlib/assert/is-error/dist'),eD=F_(),tn,M_=Nz(xz(__dirname,"./native.js"));rD(M_)?tn=eD:tn=M_;T_.exports=tn
});var Z_=c(function(Lx,S_){
var aD=De();function uD(n,e,a){return aD(n,e,a)}S_.exports=uD
});var A_=c(function(Bx,P_){
var iD=De().ndarray;function nD(n,e,a,i){return iD(n,e,a,i)}P_.exports=nD
});var C_=c(function(Cx,B_){
var vD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),L_=Z_(),sD=A_();vD(L_,"ndarray",sD);B_.exports=L_
});var K_=c(function(Gx,I_){
var tD=require("path").join,oD=require('@stdlib/utils/try-require/dist'),fD=require('@stdlib/assert/is-error/dist'),qD=C_(),on,G_=oD(tD(__dirname,"./native.js"));fD(G_)?on=qD:on=G_;I_.exports=on
});var cn=c(function(Ix,V_){
var fn=require('@stdlib/number/float64/base/to-float32/dist'),cD=require('@stdlib/math/base/special/floor/dist'),mD=128;function qn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)l+=e[r],r+=a;return fn(l)}if(n<=mD){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,j=8;j<n-p;j+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),j;j<n;j++)l+=e[r],r+=a;return fn(l)}return g=cD(n/2),g-=g%8,fn(qn(g,e,a,r)+qn(n-g,e,a,r+g*a))}V_.exports=qn
});var D_=c(function(Kx,z_){
var lD=require('@stdlib/number/float64/base/to-float32/dist'),pD=cn();function gD(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return lD(r)}return pD(n,e,a,i)}z_.exports=gD
});var Q_=c(function(Vx,J_){
var jD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),H_=D_(),bD=cn();jD(H_,"ndarray",bD);J_.exports=H_
});var He=c(function(zx,W_){
var wD=require("path").join,yD=require('@stdlib/utils/try-require/dist'),RD=require('@stdlib/assert/is-error/dist'),kD=Q_(),mn,U_=yD(wD(__dirname,"./native.js"));RD(U_)?mn=kD:mn=U_;W_.exports=mn
});var h_=c(function(Dx,$_){
var _D=He();function ED(n,e,a){return _D(n,e,a)}$_.exports=ED
});var X_=c(function(Hx,Y_){
var OD=He().ndarray;function FD(n,e,a,i){return OD(n,e,a,i)}Y_.exports=FD
});var N_=c(function(Jx,x_){
var MD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),d_=h_(),TD=X_();MD(d_,"ndarray",TD);x_.exports=d_
});var a4=c(function(Qx,e4){
var SD=require("path").join,ZD=require('@stdlib/utils/try-require/dist'),PD=require('@stdlib/assert/is-error/dist'),AD=N_(),ln,r4=ZD(SD(__dirname,"./native.js"));PD(r4)?ln=AD:ln=r4;e4.exports=ln
});var i4=c(function(Ux,u4){
var pn=8;function LD(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%pn,v>0)for(u=0;u<v;u++)a[u]=e;if(n<pn)return a;for(u=v;u<n;u+=pn)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}u4.exports=LD
});var v4=c(function(Wx,n4){
var Je=8;function BD(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%Je,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<Je)return a;for(s=v;s<n;s+=Je)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=Je;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}n4.exports=BD
});var o4=c(function($x,t4){
var CD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),s4=i4(),GD=v4();CD(s4,"ndarray",GD);t4.exports=s4
});var c4=c(function(hx,q4){
var ID=require("path").join,KD=require('@stdlib/utils/try-require/dist'),VD=require('@stdlib/assert/is-error/dist'),zD=o4(),gn,f4=KD(ID(__dirname,"./native.js"));VD(f4)?gn=zD:gn=f4;q4.exports=gn
});var g4=c(function(Yx,p4){
var tr=require('@stdlib/number/float64/base/to-float32/dist'),m4=require('@stdlib/math/base/assert/is-nanf/dist'),l4=require('@stdlib/math/base/special/abs/dist');function DD(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return m4(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],m4(u)===!1&&(v=i+u,l4(i)>=l4(u)?s=tr(s+tr(tr(i-v)+u)):s=tr(s+tr(tr(u-v)+i)),i=v),r+=a;return tr(i+s)}p4.exports=DD
});var y4=c(function(Xx,w4){
var or=require('@stdlib/number/float64/base/to-float32/dist'),j4=require('@stdlib/math/base/assert/is-nanf/dist'),b4=require('@stdlib/math/base/special/abs/dist');function HD(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return j4(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],j4(v)===!1&&(s=r+v,b4(r)>=b4(v)?o=or(o+or(or(r-s)+v)):o=or(o+or(or(v-s)+r)),r=s),u+=a;return or(r+o)}w4.exports=HD
});var _4=c(function(dx,k4){
var JD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),R4=g4(),QD=y4();JD(R4,"ndarray",QD);k4.exports=R4
});var Qe=c(function(xx,O4){
var UD=require("path").join,WD=require('@stdlib/utils/try-require/dist'),$D=require('@stdlib/assert/is-error/dist'),hD=_4(),jn,E4=WD(UD(__dirname,"./native.js"));$D(E4)?jn=hD:jn=E4;O4.exports=jn
});var M4=c(function(Nx,F4){
var YD=Qe();function XD(n,e,a){return YD(n,e,a)}F4.exports=XD
});var S4=c(function(rN,T4){
var dD=Qe().ndarray;function xD(n,e,a,i){return dD(n,e,a,i)}T4.exports=xD
});var A4=c(function(eN,P4){
var ND=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Z4=M4(),rH=S4();ND(Z4,"ndarray",rH);P4.exports=Z4
});var C4=c(function(aN,B4){
var eH=require("path").join,aH=require('@stdlib/utils/try-require/dist'),uH=require('@stdlib/assert/is-error/dist'),iH=A4(),bn,L4=aH(eH(__dirname,"./native.js"));uH(L4)?bn=iH:bn=L4;B4.exports=bn
});var K4=c(function(uN,I4){
var H=require('@stdlib/number/float64/base/to-float32/dist'),G4=require('@stdlib/math/base/assert/is-nanf/dist'),Ue=require('@stdlib/math/base/special/abs/dist');function nH(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return G4(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],G4(o)===!1&&(t=H(i+o),Ue(i)>=Ue(o)?f=H(H(i-t)+o):f=H(H(o-t)+i),i=t,t=H(v+f),Ue(v)>=Ue(f)?s=H(H(v-t)+f):s=H(H(f-t)+v),v=t,r=H(r+s)),u+=a;return H(i+H(v+r))}I4.exports=nH
});var D4=c(function(iN,z4){
var J=require('@stdlib/number/float64/base/to-float32/dist'),V4=require('@stdlib/math/base/assert/is-nanf/dist'),We=require('@stdlib/math/base/special/abs/dist');function vH(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return V4(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],V4(t)===!1&&(f=J(r+t),We(r)>=We(t)?q=J(J(r-f)+t):q=J(J(t-f)+r),r=f,f=J(s+q),We(s)>=We(q)?o=J(J(s-f)+q):o=J(J(q-f)+s),s=f,u=J(u+o)),v+=a;return J(r+J(s+u))}z4.exports=vH
});var Q4=c(function(nN,J4){
var sH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),H4=K4(),tH=D4();sH(H4,"ndarray",tH);J4.exports=H4
});var $4=c(function(vN,W4){
var oH=require("path").join,fH=require('@stdlib/utils/try-require/dist'),qH=require('@stdlib/assert/is-error/dist'),cH=Q4(),wn,U4=fH(oH(__dirname,"./native.js"));qH(U4)?wn=cH:wn=U4;W4.exports=wn
});var X4=c(function(sN,Y4){
var mH=require('@stdlib/number/float64/base/to-float32/dist'),h4=require('@stdlib/math/base/assert/is-nanf/dist');function lH(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return h4(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)h4(e[r])===!1&&(i=mH(i+e[r])),r+=a;return i}Y4.exports=lH
});var N4=c(function(tN,x4){
var pH=require('@stdlib/number/float64/base/to-float32/dist'),d4=require('@stdlib/math/base/assert/is-nanf/dist');function gH(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return d4(e[i])?r:e[i];for(u=i,v=0;v<n;v++)d4(e[u])===!1&&(r=pH(r+e[u])),u+=a;return r}x4.exports=gH
});var a8=c(function(oN,e8){
var jH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),r8=X4(),bH=N4();jH(r8,"ndarray",bH);e8.exports=r8
});var n8=c(function(fN,i8){
var wH=require("path").join,yH=require('@stdlib/utils/try-require/dist'),RH=require('@stdlib/assert/is-error/dist'),kH=a8(),yn,u8=yH(wH(__dirname,"./native.js"));RH(u8)?yn=kH:yn=u8;i8.exports=yn
});var kn=c(function(qN,v8){
var G=require('@stdlib/number/float64/base/to-float32/dist'),B=require('@stdlib/math/base/assert/is-nanf/dist'),_H=require('@stdlib/math/base/special/floor/dist'),EH=128;function Rn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return B(e[i])?0:e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}if(n<=EH){for(u=B(e[r])?0:e[r],r+=a,v=B(e[r])?0:e[r],r+=a,s=B(e[r])?0:e[r],r+=a,o=B(e[r])?0:e[r],r+=a,t=B(e[r])?0:e[r],r+=a,f=B(e[r])?0:e[r],r+=a,q=B(e[r])?0:e[r],r+=a,m=B(e[r])?0:e[r],r+=a,p=n%8,j=8;j<n-p;j+=8)u=B(e[r])?u:G(u+e[r]),r+=a,v=B(e[r])?v:G(v+e[r]),r+=a,s=B(e[r])?s:G(s+e[r]),r+=a,o=B(e[r])?o:G(o+e[r]),r+=a,t=B(e[r])?t:G(t+e[r]),r+=a,f=B(e[r])?f:G(f+e[r]),r+=a,q=B(e[r])?q:G(q+e[r]),r+=a,m=B(e[r])?m:G(m+e[r]),r+=a;for(l=G(G(G(u+v)+G(s+o))+G(G(t+f)+G(q+m))),j;j<n;j++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}return g=_H(n/2),g-=g%8,G(Rn(g,e,a,r)+Rn(n-g,e,a,r+g*a))}v8.exports=Rn
});var o8=c(function(cN,t8){
var OH=require('@stdlib/number/float64/base/to-float32/dist'),s8=require('@stdlib/math/base/assert/is-nanf/dist'),FH=kn();function MH(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return s8(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)s8(e[i])===!1&&(r=OH(r+e[i])),i+=a;return r}return FH(n,e,a,i)}t8.exports=MH
});var c8=c(function(mN,q8){
var TH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),f8=o8(),SH=kn();TH(f8,"ndarray",SH);q8.exports=f8
});var p8=c(function(lN,l8){
var ZH=require("path").join,PH=require('@stdlib/utils/try-require/dist'),AH=require('@stdlib/assert/is-error/dist'),LH=c8(),_n,m8=PH(ZH(__dirname,"./native.js"));AH(m8)?_n=LH:_n=m8;l8.exports=_n
});var j8=c(function(pN,g8){
var BH=require('@stdlib/math/base/special/floor/dist'),$e=3;function CH(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=BH(n/2),a===1){if(v=s%$e,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<$e)return e;for(r=v;r<s;r+=$e)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=$e;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}g8.exports=CH
});var w8=c(function(gN,b8){
var GH=require('@stdlib/math/base/special/floor/dist'),Mr=3;function IH(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=GH(n/2),u=i,a===1){if(s=o%Mr,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<Mr)return e;for(t=s;t<o;t+=Mr)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Mr,v-=Mr;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}b8.exports=IH
});var k8=c(function(jN,R8){
var KH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),y8=j8(),VH=w8();KH(y8,"ndarray",VH);R8.exports=y8
});var O8=c(function(bN,E8){
var zH=require("path").join,DH=require('@stdlib/utils/try-require/dist'),HH=require('@stdlib/assert/is-error/dist'),JH=k8(),En,_8=DH(zH(__dirname,"./native.js"));HH(_8)?En=JH:En=_8;E8.exports=En
});var S8=c(function(wN,T8){
var F8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),M8=require('@stdlib/math/base/assert/is-nanf/dist'),QH=require('@stdlib/math/base/special/floor/dist');function UH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,j=n,o=QH(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(j-=1,j===0)return a;l=v+j*i,m=a[l],g=s+j*u,p=r[g],a[l]=a[v],r[g]=r[s]}for(b=o,t=b*2+1;t<j&&(R=t+1,R<j&&(f=a[v+R*i],q=a[v+t*i],(f>q||M8(f)||f===q&&F8(f))&&(t+=1)),f=a[v+t*i],f>m||M8(f)||f===m&&F8(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}T8.exports=UH
});var L8=c(function(yN,A8){
var Z8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),P8=require('@stdlib/math/base/assert/is-nanf/dist'),WH=require('@stdlib/math/base/special/floor/dist');function $H(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),j=n,o=WH(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(j-=1,j===0)return a;l=r+j*i,m=a[l],g=s+j*v,p=u[g],a[l]=a[r],u[g]=u[s]}for(b=o,t=b*2+1;t<j&&(R=t+1,R<j&&(f=a[r+R*i],q=a[r+t*i],(f>q||P8(f)||f===q&&Z8(f))&&(t+=1)),f=a[r+t*i],f>m||P8(f)||f===m&&Z8(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}A8.exports=$H
});var G8=c(function(RN,C8){
var hH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),B8=S8(),YH=L8();hH(B8,"ndarray",YH);C8.exports=B8
});var V8=c(function(kN,K8){
var XH=require("path").join,dH=require('@stdlib/utils/try-require/dist'),xH=require('@stdlib/assert/is-error/dist'),NH=G8(),On,I8=dH(XH(__dirname,"./native.js"));xH(I8)?On=NH:On=I8;K8.exports=On
});var H8=c(function(_N,D8){
var he=require('@stdlib/math/base/assert/is-negative-zerof/dist'),z8=require('@stdlib/math/base/assert/is-nanf/dist');function rJ(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g,j,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(g=a[s],j=r[q],z8(g)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=g,r[l]=j}else{for(v=he(g),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=g&&!(v&&b===g&&he(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=g,r[m+u]=j,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(g=a[s],j=r[q],z8(g)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=g,r[l]=j}else{for(v=he(g),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=g&&!(v&&b===g&&he(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=g,r[m+u]=j,s+=i,q+=u}return a}D8.exports=rJ
});var U8=c(function(EN,Q8){
var Ye=require('@stdlib/math/base/assert/is-negative-zerof/dist'),J8=require('@stdlib/math/base/assert/is-nanf/dist');function eJ(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g,j,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,g=s,j=g+(n-1)*v,p=g+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],J8(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[j]=R}else{for(o=Ye(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Ye(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],J8(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[j]=R}else{for(o=Ye(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Ye(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}Q8.exports=eJ
});var h8=c(function(ON,$8){
var aJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),W8=H8(),uJ=U8();aJ(W8,"ndarray",uJ);$8.exports=W8
});var d8=c(function(FN,X8){
var iJ=require("path").join,nJ=require('@stdlib/utils/try-require/dist'),vJ=require('@stdlib/assert/is-error/dist'),sJ=h8(),Fn,Y8=nJ(iJ(__dirname,"./native.js"));vJ(Y8)?Fn=sJ:Fn=Y8;X8.exports=Fn
});var Mn=c(function(MN,tJ){tJ.exports=[701,301,132,57,23,10,4,1]});var rE=c(function(TN,N8){
var oJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),fJ=require('@stdlib/math/base/assert/is-nanf/dist'),x8=Mn(),qJ=x8.length;function cJ(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,g;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<qJ;p++)for(t=x8[p],l=t;l<n;l++)if(f=a[v+l*i],!fJ(f)){for(q=r[s+l*u],o=oJ(f),g=l;g>=t&&(m=a[v+(g-t)*i],!(m<=f&&!(o&&m===f)));g-=t)a[v+g*i]=m,r[s+g*u]=r[s+(g-t)*u];a[v+g*i]=f,r[s+g*u]=q}return a}N8.exports=cJ
});var uE=c(function(SN,aE){
var mJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),lJ=require('@stdlib/math/base/assert/is-nanf/dist'),eE=Mn(),pJ=eE.length;function gJ(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,g;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<pJ;p++)for(t=eE[p],l=t;l<n;l++)if(f=a[r+l*i],!lJ(f)){for(q=u[s+l*v],o=mJ(f),g=l;g>=t&&(m=a[r+(g-t)*i],!(m<=f&&!(o&&m===f)));g-=t)a[r+g*i]=m,u[s+g*v]=u[s+(g-t)*v];a[r+g*i]=f,u[s+g*v]=q}return a}aE.exports=gJ
});var vE=c(function(ZN,nE){
var jJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),iE=rE(),bJ=uE();jJ(iE,"ndarray",bJ);nE.exports=iE
});var oE=c(function(PN,tE){
var wJ=require("path").join,yJ=require('@stdlib/utils/try-require/dist'),RJ=require('@stdlib/assert/is-error/dist'),kJ=vE(),Tn,sE=yJ(wJ(__dirname,"./native.js"));RJ(sE)?Tn=kJ:Tn=sE;tE.exports=Tn
});var mE=c(function(AN,cE){
var fE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),qE=require('@stdlib/math/base/assert/is-nanf/dist'),_J=require('@stdlib/math/base/special/floor/dist');function EJ(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=_J(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||qE(s)||s===o&&fE(s))&&(v+=1)),s=a[r+v*i],s>f||qE(s)||s===f&&fE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}cE.exports=EJ
});var jE=c(function(LN,gE){
var lE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),pE=require('@stdlib/math/base/assert/is-nanf/dist'),OJ=require('@stdlib/math/base/special/floor/dist');function FJ(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=OJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||pE(s)||s===o&&lE(s))&&(v+=1)),s=a[r+v*i],s>f||pE(s)||s===f&&lE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}gE.exports=FJ
});var yE=c(function(BN,wE){
var MJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),bE=mE(),TJ=jE();MJ(bE,"ndarray",TJ);wE.exports=bE
});var _E=c(function(CN,kE){
var SJ=require("path").join,ZJ=require('@stdlib/utils/try-require/dist'),PJ=require('@stdlib/assert/is-error/dist'),AJ=yE(),Sn,RE=ZJ(SJ(__dirname,"./native.js"));PJ(RE)?Sn=AJ:Sn=RE;kE.exports=Sn
});var FE=c(function(GN,OE){
var Xe=require('@stdlib/math/base/assert/is-negative-zerof/dist'),EE=require('@stdlib/math/base/assert/is-nanf/dist');function LJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],EE(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Xe(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Xe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],EE(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Xe(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Xe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}OE.exports=LJ
});var SE=c(function(IN,TE){
var de=require('@stdlib/math/base/assert/is-negative-zerof/dist'),ME=require('@stdlib/math/base/assert/is-nanf/dist');function BJ(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],ME(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=de(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&de(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],ME(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=de(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&de(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}TE.exports=BJ
});var AE=c(function(KN,PE){
var CJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ZE=FE(),GJ=SE();CJ(ZE,"ndarray",GJ);PE.exports=ZE
});var CE=c(function(VN,BE){
var IJ=require("path").join,KJ=require('@stdlib/utils/try-require/dist'),VJ=require('@stdlib/assert/is-error/dist'),zJ=AE(),Zn,LE=KJ(IJ(__dirname,"./native.js"));VJ(LE)?Zn=zJ:Zn=LE;BE.exports=Zn
});var Pn=c(function(zN,DJ){DJ.exports=[701,301,132,57,23,10,4,1]});var KE=c(function(DN,IE){
var HJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),JJ=require('@stdlib/math/base/assert/is-nanf/dist'),GE=Pn(),QJ=GE.length;function UJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<QJ;t++)for(v=GE[t],f=v;f<n;f++)if(s=a[r+f*i],!JJ(s)){for(u=HJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}IE.exports=UJ
});var DE=c(function(HN,zE){
var WJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),$J=require('@stdlib/math/base/assert/is-nanf/dist'),VE=Pn(),hJ=VE.length;function YJ(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<hJ;t++)for(v=VE[t],f=v;f<n;f++)if(s=a[r+f*i],!$J(s)){for(u=WJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}zE.exports=YJ
});var QE=c(function(JN,JE){
var XJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),HE=KE(),dJ=DE();XJ(HE,"ndarray",dJ);JE.exports=HE
});var $E=c(function(QN,WE){
var xJ=require("path").join,NJ=require('@stdlib/utils/try-require/dist'),rQ=require('@stdlib/assert/is-error/dist'),eQ=QE(),An,UE=NJ(xJ(__dirname,"./native.js"));rQ(UE)?An=eQ:An=UE;WE.exports=An
});var XE=c(function(UN,YE){
var nr=require('@stdlib/number/float64/base/to-float32/dist'),hE=require('@stdlib/math/base/special/abs/dist');function aQ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=nr(i+u),hE(i)>=hE(u)?s=nr(s+nr(nr(i-v)+u)):s=nr(s+nr(nr(u-v)+i)),i=v,r+=a;return nr(i+s)}YE.exports=aQ
});var NE=c(function(WN,xE){
var vr=require('@stdlib/number/float64/base/to-float32/dist'),dE=require('@stdlib/math/base/special/abs/dist');function uQ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=vr(r+v),dE(r)>=dE(v)?o=vr(o+vr(vr(r-s)+v)):o=vr(o+vr(vr(v-s)+r)),r=s,u+=a;return vr(r+o)}xE.exports=uQ
});var a6=c(function($N,e6){
var iQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),r6=XE(),nQ=NE();iQ(r6,"ndarray",nQ);e6.exports=r6
});var xe=c(function(hN,i6){
var vQ=require("path").join,sQ=require('@stdlib/utils/try-require/dist'),tQ=require('@stdlib/assert/is-error/dist'),oQ=a6(),Ln,u6=sQ(vQ(__dirname,"./native.js"));tQ(u6)?Ln=oQ:Ln=u6;i6.exports=Ln
});var v6=c(function(YN,n6){
var fQ=xe();function qQ(n,e,a){return fQ(n,e,a)}n6.exports=qQ
});var t6=c(function(XN,s6){
var cQ=xe().ndarray;function mQ(n,e,a,i){return cQ(n,e,a,i)}s6.exports=mQ
});var q6=c(function(dN,f6){
var lQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),o6=v6(),pQ=t6();lQ(o6,"ndarray",pQ);f6.exports=o6
});var l6=c(function(xN,m6){
var gQ=require("path").join,jQ=require('@stdlib/utils/try-require/dist'),bQ=require('@stdlib/assert/is-error/dist'),wQ=q6(),Bn,c6=jQ(gQ(__dirname,"./native.js"));bQ(c6)?Bn=wQ:Bn=c6;m6.exports=Bn
});var g6=c(function(NN,p6){
var Q=require('@stdlib/number/float64/base/to-float32/dist'),Ne=require('@stdlib/math/base/special/abs/dist');function yQ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=Q(i+o),Ne(i)>=Ne(o)?f=Q(Q(i-t)+o):f=Q(Q(o-t)+i),i=t,t=Q(v+f),Ne(v)>=Ne(f)?s=Q(Q(v-t)+f):s=Q(Q(f-t)+v),v=t,r=Q(r+s),u+=a;return Q(i+Q(v+r))}p6.exports=yQ
});var b6=c(function(rrr,j6){
var U=require('@stdlib/number/float64/base/to-float32/dist'),ra=require('@stdlib/math/base/special/abs/dist');function RQ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=U(r+t),ra(r)>=ra(t)?q=U(U(r-f)+t):q=U(U(t-f)+r),r=f,f=U(s+q),ra(s)>=ra(q)?o=U(U(s-f)+q):o=U(U(q-f)+s),s=f,u=U(u+o),v+=a;return U(r+U(s+u))}j6.exports=RQ
});var R6=c(function(err,y6){
var kQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),w6=g6(),_Q=b6();kQ(w6,"ndarray",_Q);y6.exports=w6
});var E6=c(function(arr,_6){
var EQ=require("path").join,OQ=require('@stdlib/utils/try-require/dist'),FQ=require('@stdlib/assert/is-error/dist'),MQ=R6(),Cn,k6=OQ(EQ(__dirname,"./native.js"));FQ(k6)?Cn=MQ:Cn=k6;_6.exports=Cn
});var F6=c(function(urr,O6){
var TQ=require('@stdlib/number/float64/base/to-float32/dist');function SQ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)i=TQ(i+e[r]),r+=a;return i}O6.exports=SQ
});var T6=c(function(irr,M6){
var ZQ=require('@stdlib/number/float64/base/to-float32/dist');function PQ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];for(u=i,v=0;v<n;v++)r=ZQ(r+e[u]),u+=a;return r}M6.exports=PQ
});var P6=c(function(nrr,Z6){
var AQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),S6=F6(),LQ=T6();AQ(S6,"ndarray",LQ);Z6.exports=S6
});var B6=c(function(vrr,L6){
var BQ=require("path").join,CQ=require('@stdlib/utils/try-require/dist'),GQ=require('@stdlib/assert/is-error/dist'),IQ=P6(),Gn,A6=CQ(BQ(__dirname,"./native.js"));GQ(A6)?Gn=IQ:Gn=A6;L6.exports=Gn
});var Kn=c(function(srr,C6){
var I=require('@stdlib/number/float64/base/to-float32/dist'),KQ=require('@stdlib/math/base/special/floor/dist'),VQ=128;function In(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,g,j;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,j=0;j<n;j++)l=I(l+e[r]),r+=a;return l}if(n<=VQ){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,j=8;j<n-p;j+=8)u=I(u+e[r]),v=I(v+e[r+a]),s=I(s+e[r+2*a]),o=I(o+e[r+3*a]),t=I(t+e[r+4*a]),f=I(f+e[r+5*a]),q=I(q+e[r+6*a]),m=I(m+e[r+7*a]),r+=8*a;for(l=I(I(I(u+v)+I(s+o))+I(I(t+f)+I(q+m))),j;j<n;j++)l=I(l+e[r]),r+=a;return l}return g=KQ(n/2),g-=g%8,I(In(g,e,a,r)+In(n-g,e,a,r+g*a))}C6.exports=In
});var I6=c(function(trr,G6){
var zQ=require('@stdlib/number/float64/base/to-float32/dist'),DQ=Kn();function HQ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=zQ(r+e[i]),i+=a;return r}return DQ(n,e,a,i)}G6.exports=HQ
});var z6=c(function(orr,V6){
var JQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),K6=I6(),QQ=Kn();JQ(K6,"ndarray",QQ);V6.exports=K6
});var J6=c(function(frr,H6){
var UQ=require("path").join,WQ=require('@stdlib/utils/try-require/dist'),$Q=require('@stdlib/assert/is-error/dist'),hQ=z6(),Vn,D6=WQ(UQ(__dirname,"./native.js"));$Q(D6)?Vn=hQ:Vn=D6;H6.exports=Vn
});var U6=c(function(qrr,Q6){
var y=require('@stdlib/utils/define-read-only-property/dist'),w={};y(w,"dapx",vf());y(w,"dapxsum",Mf());y(w,"dapxsumkbn",Vr());y(w,"dapxsumkbn2",If());y(w,"dapxsumors",$f());y(w,"dapxsumpw",aq());y(w,"dasumpw",cq());y(w,"dcusum",Lq());y(w,"dcusumkbn",Hr());y(w,"dcusumkbn2",Jq());y(w,"dcusumors",Nq());y(w,"dcusumpw",tc());y(w,"dfill",bc());y(w,"dnanasum",Dc());y(w,"dnanasumors",Wr());y(w,"dnannsum",fm());y(w,"dnannsumkbn",$r());y(w,"dnannsumkbn2",km());y(w,"dnannsumors",Bm());y(w,"dnannsumpw",Um());y(w,"dnansum",l1());y(w,"dnansumkbn",Xr());y(w,"dnansumkbn2",F1());y(w,"dnansumors",K1());y(w,"dnansumpw",h1());y(w,"drev",il());y(w,"dsapxsum",kl());y(w,"dsapxsumpw",re());y(w,"dsnannsumors",Bl());y(w,"dsnansum",Nl());y(w,"dsnansumors",qp());y(w,"dsnansumpw",ee());y(w,"dsort2hp",Op());y(w,"dsort2ins",Ip());y(w,"dsort2sh",Yp());y(w,"dsorthp",o2());y(w,"dsortins",R2());y(w,"dsortsh",L2());y(w,"dssum",d2());y(w,"dssumors",sg());y(w,"dssumpw",ve());y(w,"dsum",Tg());y(w,"dsumkbn",te());y(w,"dsumkbn2",Kg());y(w,"dsumors",hg());y(w,"dsumpw",uj());y(w,"gapx",fj());y(w,"gapxsum",Oj());y(w,"gapxsumkbn",me());y(w,"gapxsumkbn2",Aj());y(w,"gapxsumors",Vj());y(w,"gapxsumpw",Uj());y(w,"gasumpw",xj());y(w,"gcusum",mb());y(w,"gcusumkbn",ge());y(w,"gcusumkbn2",yb());y(w,"gcusumors",Mb());y(w,"gcusumpw",Lb());y(w,"gfill",Db());y(w,"gfillBy",Yb());y(w,"gnannsumkbn",vw());y(w,"gnansum",_w());y(w,"gnansumkbn",ye());y(w,"gnansumkbn2",Aw());y(w,"gnansumors",Dw());y(w,"gnansumpw",hw());y(w,"grev",ay());y(w,"gsort2hp",my());y(w,"gsort2ins",ky());y(w,"gsort2sh",Py());y(w,"gsorthp",Hy());y(w,"gsortins",dy());y(w,"gsortsh",vR());y(w,"gsum",RR());y(w,"gsumkbn",Te());y(w,"gsumkbn2",TR());y(w,"gsumors",CR());y(w,"gsumpw",DR());y(w,"sapx",dR());y(w,"sapxsum",bk());y(w,"sapxsumkbn",Le());y(w,"sapxsumkbn2",Tk());y(w,"sapxsumors",Kk());y(w,"sapxsumpw",$k());y(w,"sasumpw",u3());y(w,"scusum",E3());y(w,"scusumkbn",Ge());y(w,"scusumkbn2",B3());y(w,"scusumors",Q3());y(w,"scusumpw",r_());y(w,"sdsapxsum",w_());y(w,"sdsapxsumpw",ze());y(w,"sdsnansum",K_());y(w,"sdsnansumpw",De());y(w,"sdssum",a4());y(w,"sdssumpw",He());y(w,"sfill",c4());y(w,"snansum",C4());y(w,"snansumkbn",Qe());y(w,"snansumkbn2",$4());y(w,"snansumors",n8());y(w,"snansumpw",p8());y(w,"srev",O8());y(w,"ssort2hp",V8());y(w,"ssort2ins",d8());y(w,"ssort2sh",oE());y(w,"ssorthp",_E());y(w,"ssortins",CE());y(w,"ssortsh",$E());y(w,"ssum",l6());y(w,"ssumkbn",xe());y(w,"ssumkbn2",E6());y(w,"ssumors",B6());y(w,"ssumpw",J6());Q6.exports=w
});var h6=c(function(crr,$6){
var YQ=require('@stdlib/utils/define-read-only-property/dist'),W6={};YQ(W6,"base",U6());$6.exports=W6
});var x6=c(function(mrr,d6){
var Y6=require('@stdlib/assert/is-ndarray-like/dist'),X6=require('@stdlib/assert/is-collection/dist'),ea=require('@stdlib/assert/is-float64array/dist'),aa=require('@stdlib/assert/is-float32array/dist'),zn=require('@stdlib/string/format/dist'),XQ=Sr().ndarray,dQ=Lr().ndarray,ua=Za().ndarray;function xQ(n,e){var a,i,r,u,v,s,o,t;if(v=Y6(n),o=Y6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=ea(n.data),i=a?!1:aa(n.data);else if(v===!1&&X6(n))a=ea(n),i=a?!1:aa(n);else throw new TypeError(zn('0G93T',n));if(t)r=ea(e.data),u=r?!1:aa(e.data);else if(o===!1&&X6(e))r=ea(e),u=r?!1:aa(e);else throw new TypeError(zn('0G93U',e));if(n.length!==e.length)throw new RangeError(zn('0G93S',n.length,e.length));return s&&t?a&&r?XQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):i&&u?dQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):ua(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):s?ua(n.length,n.data,n.strides[0],n.offset,e,1,0):t?ua(n.length,n,1,0,e.data,e.strides[0],e.offset):ua(n.length,n,1,0,e,1,0)}d6.exports=xQ
});var rO=c(function(lrr,N6){
var NQ=x6();N6.exports=NQ
});var iO=c(function(prr,uO){
var eO=require('@stdlib/assert/is-ndarray-like/dist'),aO=require('@stdlib/assert/is-collection/dist'),ia=require('@stdlib/assert/is-float64array/dist'),na=require('@stdlib/assert/is-float32array/dist'),Dn=require('@stdlib/string/format/dist'),rU=Pr().ndarray,eU=Ir().ndarray,va=Ca().ndarray;function aU(n,e){var a,i,r,u,v,s,o,t;if(v=eO(n),o=eO(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=ia(n.data),i=a?!1:na(n.data);else if(v===!1&&aO(n))a=ia(n),i=a?!1:na(n);else throw new TypeError(Dn('0G93T',n));if(t)r=ia(e.data),u=r?!1:na(e.data);else if(o===!1&&aO(e))r=ia(e),u=r?!1:na(e);else throw new TypeError(Dn('0G93U',e));if(n.length!==e.length)throw new RangeError(Dn('0G93S',n.length,e.length));return s&&t?a&&r?(rU(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):i&&u?(eU(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):(va(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):s?(va(n.length,n.data,n.strides[0],n.offset,e,1,0),e):t?(va(n.length,n,1,0,e.data,e.strides[0],e.offset),e):(va(n.length,n,1,0,e,1,0),e)}uO.exports=aU
});var vO=c(function(grr,nO){
var uU=iO();nO.exports=uU
});var oO=c(function(jrr,tO){
var sO=require('@stdlib/assert/is-float32vector-like/dist'),iU=Lr().ndarray,Hn=require('@stdlib/string/format/dist');function nU(n,e){if(!sO(n))throw new TypeError(Hn('0G9DA',n));if(!sO(e))throw new TypeError(Hn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Hn('0G93S',n.length,e.length));return iU(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}tO.exports=nU
});var qO=c(function(brr,fO){
var vU=oO();fO.exports=vU
});var lO=c(function(wrr,mO){
var cO=require('@stdlib/assert/is-float32vector-like/dist'),Jn=require('@stdlib/string/format/dist'),sU=Ir().ndarray;function tU(n,e){if(!cO(n))throw new TypeError(Jn('0G9DA',n));if(!cO(e))throw new TypeError(Jn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Jn('0G93S',n.length,e.length));return sU(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}mO.exports=tU
});var gO=c(function(yrr,pO){
var oU=lO();pO.exports=oU
});var sr=require('@stdlib/utils/define-read-only-property/dist'),X={};sr(X,"base",Ko());sr(X,"ddot",Jo());sr(X,"dswap",ho());sr(X,"ext",h6());sr(X,"gdot",rO());sr(X,"gswap",vO());sr(X,"sdot",qO());sr(X,"sswap",gO());module.exports=X;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
