"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var Un=c(function(hQ,Qn){
var Jn=require('@stdlib/strided/base/reinterpret-complex64/dist');function sO(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0)return i;if(u=Jn(e,0),v=Jn(i,0),a===1&&r===1){for(q=0;q<n*2;q+=2)v[q]=u[q],v[q+1]=u[q+1];return i}for(a<0?t=2*(1-n)*a:t=0,r<0?f=2*(1-n)*r:f=0,s=a*2,o=r*2,q=0;q<n;q++)v[f]=u[t],v[f+1]=u[t+1],t+=s,f+=o;return i}Qn.exports=sO
});var hn=c(function(YQ,$n){
var Wn=require('@stdlib/strided/base/reinterpret-complex64/dist');function tO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;for(s=Wn(e,0),o=Wn(r,0),t=a*2,f=u*2,q=i*2,m=v*2,p=0;p<n;p++)o[m]=s[q],o[m+1]=s[q+1],q+=t,m+=f;return r}$n.exports=tO
});var dn=c(function(XQ,Xn){
var oO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yn=Un(),fO=hn();oO(Yn,"ndarray",fO);Xn.exports=Yn
});var rv=c(function(dQ,Nn){
var qO=require("path").join,cO=require('@stdlib/utils/try-require/dist'),mO=require('@stdlib/assert/is-error/dist'),lO=dn(),sa,xn=cO(qO(__dirname,"./native.js"));mO(xn)?sa=lO:sa=xn;Nn.exports=sa
});var uv=c(function(xQ,av){
var ev=require('@stdlib/strided/base/reinterpret-complex64/dist');function pO(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return i;if(u=ev(e,0),v=ev(i,0),a===1&&r===1){for(m=0;m<n*2;m+=2)s=u[m],u[m]=v[m],v[m]=s,p=m+1,s=u[p],u[p]=v[p],v[p]=s;return i}for(a<0?f=2*(1-n)*a:f=0,r<0?q=2*(1-n)*r:q=0,o=a*2,t=r*2,m=0;m<n;m++)s=u[f],u[f]=v[q],v[q]=s,s=u[f+1],u[f+1]=v[q+1],v[q+1]=s,f+=o,q+=t;return i}av.exports=pO
});var vv=c(function(NQ,nv){
var iv=require('@stdlib/strided/base/reinterpret-complex64/dist');function jO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(n<=0)return r;for(s=iv(e,0),o=iv(r,0),f=a*2,q=u*2,m=i*2,p=v*2,l=0;l<n;l++)t=s[m],s[m]=o[p],o[p]=t,t=s[m+1],s[m+1]=o[p+1],o[p+1]=t,m+=f,p+=q;return r}nv.exports=jO
});var ov=c(function(rU,tv){
var gO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sv=uv(),bO=vv();gO(sv,"ndarray",bO);tv.exports=sv
});var cv=c(function(eU,qv){
var wO=require("path").join,yO=require('@stdlib/utils/try-require/dist'),RO=require('@stdlib/assert/is-error/dist'),kO=ov(),ta,fv=yO(wO(__dirname,"./native.js"));RO(fv)?ta=kO:ta=fv;qv.exports=ta
});var lv=c(function(aU,mv){
var d=require('@stdlib/math/base/special/abs/dist'),oa=6;function _O(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%oa,r>0)for(u=0;u<r;u++)i+=d(e[u]);if(n<oa)return i;for(u=r;u<n;u+=oa)i+=d(e[u])+d(e[u+1])+d(e[u+2])+d(e[u+3])+d(e[u+4])+d(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=d(e[u]);return i}mv.exports=_O
});var jv=c(function(uU,pv){
var x=require('@stdlib/math/base/special/abs/dist'),Tr=6;function EO(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Tr,v>0)for(s=0;s<v;s++)r+=x(e[u]),u+=a;if(n<Tr)return r;for(s=v;s<n;s+=Tr)r+=x(e[u])+x(e[u+1])+x(e[u+2])+x(e[u+3])+x(e[u+4])+x(e[u+5]),u+=Tr;return r}for(s=0;s<n;s++)r+=x(e[u]),u+=a;return r}pv.exports=EO
});var wv=c(function(iU,bv){
var OO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gv=lv(),FO=jv();OO(gv,"ndarray",FO);bv.exports=gv
});var kv=c(function(nU,Rv){
var MO=require("path").join,TO=require('@stdlib/utils/try-require/dist'),SO=require('@stdlib/assert/is-error/dist'),ZO=wv(),fa,yv=TO(MO(__dirname,"./native.js"));SO(yv)?fa=ZO:fa=yv;Rv.exports=fa
});var Ev=c(function(vU,_v){
var qa=4;function PO(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%qa,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<qa)return r;for(t=o;t<n;t+=qa)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}_v.exports=PO
});var Fv=c(function(sU,Ov){
var cr=4;function AO(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%cr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<cr)return u;for(q=f;q<n;q+=cr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=cr,t+=cr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Ov.exports=AO
});var Sv=c(function(tU,Tv){
var LO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mv=Ev(),BO=Fv();LO(Mv,"ndarray",BO);Tv.exports=Mv
});var Av=c(function(oU,Pv){
var CO=require("path").join,GO=require('@stdlib/utils/try-require/dist'),IO=require('@stdlib/assert/is-error/dist'),KO=Sv(),ca,Zv=GO(CO(__dirname,"./native.js"));IO(Zv)?ca=KO:ca=Zv;Pv.exports=ca
});var Bv=c(function(fU,Lv){
var ma=8;function VO(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%ma,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<ma)return i;for(o=s;o<n;o+=ma)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}Lv.exports=VO
});var Gv=c(function(qU,Cv){
var mr=8;function zO(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%mr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<mr)return r;for(f=t;f<n;f+=mr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=mr,o+=mr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}Cv.exports=zO
});var Vv=c(function(cU,Kv){
var DO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Iv=Bv(),HO=Gv();DO(Iv,"ndarray",HO);Kv.exports=Iv
});var Hv=c(function(mU,Dv){
var JO=require("path").join,QO=require('@stdlib/utils/try-require/dist'),UO=require('@stdlib/assert/is-error/dist'),WO=Vv(),la,zv=QO(JO(__dirname,"./native.js"));UO(zv)?la=WO:la=zv;Dv.exports=la
});var Qv=c(function(lU,Jv){
var pa=5;function $O(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%pa,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<pa)return u;for(t=o;t<n;t+=pa)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}Jv.exports=$O
});var Wv=c(function(pU,Uv){
var lr=5;function hO(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%lr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<lr)return s;for(q=f;q<n;q+=lr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=lr,t+=lr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Uv.exports=hO
});var Yv=c(function(jU,hv){
var YO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$v=Qv(),XO=Wv();YO($v,"ndarray",XO);hv.exports=$v
});var Sr=c(function(gU,dv){
var dO=require("path").join,xO=require('@stdlib/utils/try-require/dist'),NO=require('@stdlib/assert/is-error/dist'),r5=Yv(),ja,Xv=xO(dO(__dirname,"./native.js"));NO(Xv)?ja=r5:ja=Xv;dv.exports=ja
});var es=c(function(bU,rs){
var e5=require('@stdlib/math/base/special/sqrt/dist'),xv=require('@stdlib/math/base/special/abs/dist'),Nv=require('@stdlib/math/base/special/pow/dist');function a5(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return xv(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=xv(e[v]),i<u?(r=1+r*Nv(i/u,2),i=u):r+=Nv(u/i,2));return i*e5(r)}rs.exports=a5
});var ns=c(function(wU,is){
var u5=require('@stdlib/math/base/special/sqrt/dist'),as=require('@stdlib/math/base/special/abs/dist'),us=require('@stdlib/math/base/special/pow/dist');function i5(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return as(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=as(e[s]),r<v?(u=1+u*us(r/v,2),r=v):u+=us(v/r,2)),s+=a;return r*u5(u)}is.exports=i5
});var ts=c(function(yU,ss){
var n5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),vs=es(),v5=ns();n5(vs,"ndarray",v5);ss.exports=vs
});var qs=c(function(RU,fs){
var s5=require("path").join,t5=require('@stdlib/utils/try-require/dist'),o5=require('@stdlib/assert/is-error/dist'),f5=ts(),ga,os=t5(s5(__dirname,"./native.js"));o5(os)?ga=f5:ga=os;fs.exports=ga
});var ms=c(function(kU,cs){
var ba=5;function q5(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%ba,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<ba)return a;for(r=u;r<n;r+=ba)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}cs.exports=q5
});var ps=c(function(_U,ls){
var Zr=5;function c5(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Zr,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Zr)return a;for(s=v;s<n;s+=Zr)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e,u+=Zr;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}ls.exports=c5
});var bs=c(function(EU,gs){
var m5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),js=ms(),l5=ps();m5(js,"ndarray",l5);gs.exports=js
});var Rs=c(function(OU,ys){
var p5=require("path").join,j5=require('@stdlib/utils/try-require/dist'),g5=require('@stdlib/assert/is-error/dist'),b5=bs(),wa,ws=j5(p5(__dirname,"./native.js"));g5(ws)?wa=b5:wa=ws;ys.exports=wa
});var _s=c(function(FU,ks){
var ya=5;function w5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%ya,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<ya)return u;for(t=o;t<n;t+=ya)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}ks.exports=w5
});var Os=c(function(MU,Es){
var pr=5;function y5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%pr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<pr)return s;for(q=f;q<n;q+=pr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=pr,t+=pr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Es.exports=y5
});var Ts=c(function(TU,Ms){
var R5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fs=_s(),k5=Os();R5(Fs,"ndarray",k5);Ms.exports=Fs
});var Ps=c(function(SU,Zs){
var _5=require("path").join,E5=require('@stdlib/utils/try-require/dist'),O5=require('@stdlib/assert/is-error/dist'),F5=Ts(),Ra,Ss=E5(_5(__dirname,"./native.js"));O5(Ss)?Ra=F5:Ra=Ss;Zs.exports=Ra
});var Ls=c(function(ZU,As){
var ka=3;function M5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%ka,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<ka)return i;for(t=o;t<n;t+=ka)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}As.exports=M5
});var Cs=c(function(PU,Bs){
var jr=3;function T5(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%jr,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<jr)return r;for(q=f;q<n;q+=jr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=jr,t+=jr;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}Bs.exports=T5
});var Ks=c(function(AU,Is){
var S5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gs=Ls(),Z5=Cs();S5(Gs,"ndarray",Z5);Is.exports=Gs
});var Pr=c(function(LU,zs){
var P5=require("path").join,A5=require('@stdlib/utils/try-require/dist'),L5=require('@stdlib/assert/is-error/dist'),B5=Ks(),_a,Vs=A5(P5(__dirname,"./native.js"));L5(Vs)?_a=B5:_a=Vs;zs.exports=_a
});var Hs=c(function(BU,Ds){
var N=require('@stdlib/math/base/special/abs/dist'),Ea=6;function C5(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%Ea,r>0)for(u=0;u<r;u++)i+=N(e[u]);if(n<Ea)return i;for(u=r;u<n;u+=Ea)i+=N(e[u])+N(e[u+1])+N(e[u+2])+N(e[u+3])+N(e[u+4])+N(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=N(e[u]);return i}Ds.exports=C5
});var Qs=c(function(CU,Js){
var rr=require('@stdlib/math/base/special/abs/dist'),Ar=6;function G5(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Ar,v>0)for(s=0;s<v;s++)r+=rr(e[u]),u+=a;if(n<Ar)return r;for(s=v;s<n;s+=Ar)r+=rr(e[u])+rr(e[u+1])+rr(e[u+2])+rr(e[u+3])+rr(e[u+4])+rr(e[u+5]),u+=Ar;return r}for(s=0;s<n;s++)r+=rr(e[u]),u+=a;return r}Js.exports=G5
});var $s=c(function(GU,Ws){
var I5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Us=Hs(),K5=Qs();I5(Us,"ndarray",K5);Ws.exports=Us
});var Ys=c(function(IU,hs){
var Oa=4;function V5(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%Oa,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<Oa)return r;for(t=o;t<n;t+=Oa)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}hs.exports=V5
});var ds=c(function(KU,Xs){
var gr=4;function z5(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%gr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<gr)return u;for(q=f;q<n;q+=gr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=gr,t+=gr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Xs.exports=z5
});var r0=c(function(VU,Ns){
var D5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xs=Ys(),H5=ds();D5(xs,"ndarray",H5);Ns.exports=xs
});var Fa=c(function(zU,e0){
function J5(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],q=i,m=v,p=0;p<n;p++)t(o,m,f(s,q)),q+=a,m+=u;return e}e0.exports=J5
});var i0=c(function(DU,u0){
var a0=require('@stdlib/array/base/arraylike2object/dist'),Q5=Fa(),Ma=8;function U5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(s=a0(e),o=a0(i),s.accessorProtocol||o.accessorProtocol)return a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,Q5(n,s,a,u,o,r,v),o.data;if(a===1&&r===1){if(t=n%Ma,t>0)for(f=0;f<t;f++)i[f]=e[f];if(n<Ma)return i;for(f=t;f<n;f+=Ma)i[f]=e[f],i[f+1]=e[f+1],i[f+2]=e[f+2],i[f+3]=e[f+3],i[f+4]=e[f+4],i[f+5]=e[f+5],i[f+6]=e[f+6],i[f+7]=e[f+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,f=0;f<n;f++)i[v]=e[u],u+=a,v+=r;return i}u0.exports=U5
});var s0=c(function(HU,v0){
var n0=require('@stdlib/array/base/arraylike2object/dist'),W5=Fa(),br=8;function $5(n,e,a,i,r,u,v){var s,o,t,f,q,m;if(n<=0)return r;if(t=n0(e),f=n0(r),t.accessorProtocol||f.accessorProtocol)return W5(n,t,a,i,f,u,v),f.data;if(s=i,o=v,a===1&&u===1){if(q=n%br,q>0)for(m=0;m<q;m++)r[o]=e[s],s+=a,o+=u;if(n<br)return r;for(m=q;m<n;m+=br)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=br,o+=br;return r}for(m=0;m<n;m++)r[o]=e[s],s+=a,o+=u;return r}v0.exports=$5
});var f0=c(function(JU,o0){
var h5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),t0=i0(),Y5=s0();h5(t0,"ndarray",Y5);o0.exports=t0
});var c0=c(function(QU,q0){
var Ta=5;function X5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%Ta,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<Ta)return u;for(t=o;t<n;t+=Ta)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}q0.exports=X5
});var l0=c(function(UU,m0){
var wr=5;function d5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%wr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<wr)return s;for(q=f;q<n;q+=wr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=wr,t+=wr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}m0.exports=d5
});var Sa=c(function(WU,j0){
var x5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),p0=c0(),N5=l0();x5(p0,"ndarray",N5);j0.exports=p0
});var y0=c(function($U,w0){
var rF=require('@stdlib/math/base/special/sqrt/dist'),g0=require('@stdlib/math/base/special/abs/dist'),b0=require('@stdlib/math/base/special/pow/dist');function eF(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return g0(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=g0(e[v]),i<u?(r=1+r*b0(i/u,2),i=u):r+=b0(u/i,2));return i*rF(r)}w0.exports=eF
});var E0=c(function(hU,_0){
var aF=require('@stdlib/math/base/special/sqrt/dist'),R0=require('@stdlib/math/base/special/abs/dist'),k0=require('@stdlib/math/base/special/pow/dist');function uF(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return R0(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=R0(e[s]),r<v?(u=1+u*k0(r/v,2),r=v):u+=k0(v/r,2)),s+=a;return r*aF(u)}_0.exports=uF
});var M0=c(function(YU,F0){
var iF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O0=y0(),nF=E0();iF(O0,"ndarray",nF);F0.exports=O0
});var S0=c(function(XU,T0){
var Za=5;function vF(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(r=n%Za,r>0)for(u=0;u<r;u+=1)a[u]*=e;if(n<Za)return a;for(u=r;u<n;u+=Za)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e;return a}for(n*=i,u=0;u<n;u+=i)a[u]*=e;return a}T0.exports=vF
});var P0=c(function(dU,Z0){
var Pa=5;function sF(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Pa,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Pa)return a;for(s=v;s<n;s+=Pa)a[s]*=e,a[s+1]*=e,a[s+2]*=e,a[s+3]*=e,a[s+4]*=e;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}Z0.exports=sF
});var B0=c(function(xU,L0){
var tF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),A0=S0(),oF=P0();tF(A0,"ndarray",oF);L0.exports=A0
});var Aa=c(function(NU,C0){
function fF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],m=i,p=v,l=0;l<n;l++)q=f(s,m),t(s,m,f(o,p)),t(o,p,q),m+=a,p+=u;return e}C0.exports=fF
});var K0=c(function(rW,I0){
var G0=require('@stdlib/array/base/arraylike2object/dist'),qF=Aa(),La=3;function cF(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0)return i;if(o=G0(e),t=G0(i),o.accessorProtocol||t.accessorProtocol)return a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,qF(n,o,a,v,t,r,s),t.data;if(a===1&&r===1){if(f=n%La,f>0)for(q=0;q<f;q++)u=e[q],e[q]=i[q],i[q]=u;if(n<La)return i;for(q=f;q<n;q+=La)u=e[q],e[q]=i[q],i[q]=u,m=q+1,u=e[m],e[m]=i[m],i[m]=u,m+=1,u=e[m],e[m]=i[m],i[m]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,q=0;q<n;q++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}I0.exports=cF
});var D0=c(function(eW,z0){
var V0=require('@stdlib/array/base/arraylike2object/dist'),mF=Aa(),yr=3;function lF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;if(f=V0(e),q=V0(r),f.accessorProtocol||q.accessorProtocol)return mF(n,f,a,i,q,u,v),q.data;if(o=i,t=v,a===1&&u===1){if(m=n%yr,m>0)for(p=0;p<m;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<yr)return r;for(p=m;p<n;p+=yr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=yr,t+=yr;return r}for(p=0;p<n;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}z0.exports=lF
});var Ba=c(function(aW,J0){
var pF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),H0=K0(),jF=D0();pF(H0,"ndarray",jF);J0.exports=H0
});var U0=c(function(uW,Q0){
var gF=require('@stdlib/math/base/special/absf/dist'),bF=require('@stdlib/number/float64/base/to-float32/dist');function wF(n,e,a){var i,r;if(i=0,n<=0||a<=0)return i;for(n*=a,r=0;r<n;r+=a)i=bF(i+gF(e[r]));return i}Q0.exports=wF
});var $0=c(function(iW,W0){
var yF=require('@stdlib/math/base/special/absf/dist'),RF=require('@stdlib/number/float64/base/to-float32/dist');function kF(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;for(u=i,v=0;v<n;v++)r=RF(r+yF(e[u])),u+=a;return r}W0.exports=kF
});var X0=c(function(nW,Y0){
var _F=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),h0=U0(),EF=$0();_F(h0,"ndarray",EF);Y0.exports=h0
});var N0=c(function(vW,x0){
var OF=require("path").join,FF=require('@stdlib/utils/try-require/dist'),MF=require('@stdlib/assert/is-error/dist'),TF=X0(),Ca,d0=FF(OF(__dirname,"./native.js"));MF(d0)?Ca=TF:Ca=d0;x0.exports=Ca
});var et=c(function(sW,rt){
var fr=require('@stdlib/number/float64/base/to-float32/dist'),Ga=4;function SF(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%Ga,o>0)for(t=0;t<o;t++)r[t]+=fr(e*a[t]);if(n<Ga)return r;for(t=o;t<n;t+=Ga)r[t]+=fr(e*a[t]),r[t+1]+=fr(e*a[t+1]),r[t+2]+=fr(e*a[t+2]),r[t+3]+=fr(e*a[t+3]);return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=fr(e*a[v]),v+=i,s+=u;return r}rt.exports=SF
});var ut=c(function(tW,at){
var qr=require('@stdlib/number/float64/base/to-float32/dist'),Rr=4;function ZF(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%Rr,f>0)for(q=0;q<f;q++)u[t]+=qr(e*a[o]),o+=i,t+=v;if(n<Rr)return u;for(q=f;q<n;q+=Rr)u[t]+=qr(e*a[o]),u[t+1]+=qr(e*a[o+1]),u[t+2]+=qr(e*a[o+2]),u[t+3]+=qr(e*a[o+3]),o+=Rr,t+=Rr;return u}for(q=0;q<n;q++)u[t]+=qr(e*a[o]),o+=i,t+=v;return u}at.exports=ZF
});var vt=c(function(oW,nt){
var PF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),it=et(),AF=ut();PF(it,"ndarray",AF);nt.exports=it
});var ot=c(function(fW,tt){
var LF=require("path").join,BF=require('@stdlib/utils/try-require/dist'),CF=require('@stdlib/assert/is-error/dist'),GF=vt(),Ia,st=BF(LF(__dirname,"./native.js"));CF(st)?Ia=GF:Ia=st;tt.exports=Ia
});var qt=c(function(qW,ft){
var Ka=8;function IF(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%Ka,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<Ka)return i;for(o=s;o<n;o+=Ka)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}ft.exports=IF
});var mt=c(function(cW,ct){
var kr=8;function KF(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%kr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<kr)return r;for(f=t;f<n;f+=kr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=kr,o+=kr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}ct.exports=KF
});var jt=c(function(mW,pt){
var VF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lt=qt(),zF=mt();VF(lt,"ndarray",zF);pt.exports=lt
});var wt=c(function(lW,bt){
var DF=require("path").join,HF=require('@stdlib/utils/try-require/dist'),JF=require('@stdlib/assert/is-error/dist'),QF=jt(),Va,gt=HF(DF(__dirname,"./native.js"));JF(gt)?Va=QF:Va=gt;bt.exports=Va
});var kt=c(function(pW,Rt){
var yt=require('@stdlib/number/float64/base/to-float32/dist');function UF(n,e,a,i,r){var u,v,s,o;if(u=0,n<=0)return u;for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,o=0;o<n;o++)u=yt(u+yt(e[v]*i[s])),v+=a,s+=r;return u}Rt.exports=UF
});var Ot=c(function(jW,Et){
var _t=require('@stdlib/number/float64/base/to-float32/dist');function WF(n,e,a,i,r,u,v){var s,o,t,f;if(s=0,n<=0)return s;for(o=i,t=v,f=0;f<n;f++)s=_t(s+_t(e[o]*r[t])),o+=a,t+=u;return s}Et.exports=WF
});var Tt=c(function(gW,Mt){
var $F=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ft=kt(),hF=Ot();$F(Ft,"ndarray",hF);Mt.exports=Ft
});var Lr=c(function(bW,Zt){
var YF=require("path").join,XF=require('@stdlib/utils/try-require/dist'),dF=require('@stdlib/assert/is-error/dist'),xF=Tt(),za,St=XF(YF(__dirname,"./native.js"));dF(St)?za=xF:za=St;Zt.exports=za
});var At=c(function(wW,Pt){
var Br=require('@stdlib/number/float64/base/to-float32/dist'),Da=5;function NF(n,e,a,i,r,u){var v,s,o,t,f;if(v=e,n<=0)return Br(v);if(i===1&&u===1){if(t=n%Da,t>0)for(f=0;f<t;f++)v+=a[f]*r[f];if(n<Da)return Br(v);for(f=t;f<n;f+=Da)v+=a[f]*r[f]+a[f+1]*r[f+1]+a[f+2]*r[f+2]+a[f+3]*r[f+3]+a[f+4]*r[f+4];return Br(v)}for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,f=0;f<n;f++)v+=a[s]*r[o],s+=i,o+=u;return Br(v)}Pt.exports=NF
});var Bt=c(function(yW,Lt){
var Cr=require('@stdlib/number/float64/base/to-float32/dist'),_r=5;function rM(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(o=e,n<=0)return Cr(o);if(t=r,f=s,i===1&&v===1){if(q=n%_r,q>0)for(m=0;m<q;m++)o+=a[t]*u[f],t+=1,f+=1;if(n<_r)return Cr(o);for(m=q;m<n;m+=_r)o+=a[t]*u[f]+a[t+1]*u[f+1]+a[t+2]*u[f+2]+a[t+3]*u[f+3]+a[t+4]*u[f+4],t+=_r,f+=_r;return Cr(o)}for(m=0;m<n;m++)o+=a[t]*u[f],t+=i,f+=v;return Cr(o)}Lt.exports=rM
});var It=c(function(RW,Gt){
var eM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ct=At(),aM=Bt();eM(Ct,"ndarray",aM);Gt.exports=Ct
});var zt=c(function(kW,Vt){
var uM=require("path").join,iM=require('@stdlib/utils/try-require/dist'),nM=require('@stdlib/assert/is-error/dist'),vM=It(),Ha,Kt=iM(uM(__dirname,"./native.js"));nM(Kt)?Ha=vM:Ha=Kt;Vt.exports=Ha
});var Jt=c(function(_W,Ht){
var sM=require('@stdlib/math/base/special/sqrtf/dist'),Dt=require('@stdlib/math/base/special/absf/dist'),er=require('@stdlib/number/float64/base/to-float32/dist');function tM(n,e,a){var i,r,u,v,s;if(n<=0||a<=0)return 0;if(n===1)return Dt(e[0]);for(i=0,r=1,n*=a,s=0;s<n;s+=a)e[s]!==0&&(u=Dt(e[s]),i<u?(v=er(i/u),r=er(1+er(r*er(v*v))),i=u):(v=er(u/i),r=er(r+er(v*v))));return er(i*sM(r))}Ht.exports=tM
});var Wt=c(function(EW,Ut){
var oM=require('@stdlib/math/base/special/sqrtf/dist'),Qt=require('@stdlib/math/base/special/absf/dist'),ar=require('@stdlib/number/float64/base/to-float32/dist');function fM(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1)return Qt(e[i]);for(s=i,r=0,u=1,t=0;t<n;t++)e[s]!==0&&(v=Qt(e[s]),r<v?(o=ar(r/v),u=ar(1+ar(u*ar(o*o))),r=v):(o=ar(v/r),u=ar(u+ar(o*o)))),s+=a;return ar(r*oM(u))}Ut.exports=fM
});var Yt=c(function(OW,ht){
var qM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$t=Jt(),cM=Wt();qM($t,"ndarray",cM);ht.exports=$t
});var xt=c(function(FW,dt){
var mM=require("path").join,lM=require('@stdlib/utils/try-require/dist'),pM=require('@stdlib/assert/is-error/dist'),jM=Yt(),Ja,Xt=lM(mM(__dirname,"./native.js"));pM(Xt)?Ja=jM:Ja=Xt;dt.exports=Ja
});var Qa=c(function(MW,ao){
var Y=require('@stdlib/number/float64/base/to-float32/dist'),Nt=require('@stdlib/math/base/special/absf/dist'),gM=require('@stdlib/math/base/special/sqrtf/dist'),ro=require('@stdlib/math/base/special/abs2f/dist'),eo=require('@stdlib/math/base/special/copysignf/dist');function bM(n,e,a,i,r){var u,v,s,o,t,f,q,m;return s=Nt(n),o=Nt(e),s>o?v=eo(1,n):v=eo(1,e),u=Y(s+o),u===0?(f=1,q=0,t=0,m=0):(t=Y(u*gM(Y(ro(Y(n/u))+ro(Y(e/u))))),t=Y(t*v),f=Y(n/t),q=Y(e/t),m=1,s>o?m=q:f!==0&&(m=Y(1/f))),n=t,e=m,a[r]=n,a[r+i]=e,a[r+2*i]=f,a[r+3*i]=q,a}ao.exports=bM
});var io=c(function(TW,uo){
var wM=require('@stdlib/array/float32/dist'),yM=Qa();function RM(n,e){var a=new wM(4);return yM(n,e,a,1,0)}uo.exports=RM
});var so=c(function(SW,vo){
var kM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),no=io(),_M=Qa();kM(no,"assign",_M);vo.exports=no
});var oo=c(function(ZW,to){
var Ua=5;function EM(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%Ua,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<Ua)return a;for(r=u;r<n;r+=Ua)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}to.exports=EM
});var qo=c(function(PW,fo){
var Gr=5;function OM(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(s=n%Gr,s>0)for(v=0;v<s;v++)a[u]*=e,u+=i;if(n<Gr)return a;for(v=s;v<n;v+=Gr)a[v]*=e,a[v+1]*=e,a[v+2]*=e,a[v+3]*=e,a[v+4]*=e,u+=Gr;return a}for(v=0;v<n;v++)a[u]*=e,u+=i;return a}fo.exports=OM
});var lo=c(function(AW,mo){
var FM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),co=oo(),MM=qo();FM(co,"ndarray",MM);mo.exports=co
});var go=c(function(LW,jo){
var TM=require("path").join,SM=require('@stdlib/utils/try-require/dist'),ZM=require('@stdlib/assert/is-error/dist'),PM=lo(),Wa,po=SM(TM(__dirname,"./native.js"));ZM(po)?Wa=PM:Wa=po;jo.exports=Wa
});var wo=c(function(BW,bo){
var $a=3;function AM(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%$a,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<$a)return i;for(t=o;t<n;t+=$a)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}bo.exports=AM
});var Ro=c(function(CW,yo){
var Er=3;function LM(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%Er,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<Er)return r;for(q=f;q<n;q+=Er)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=Er,t+=Er;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}yo.exports=LM
});var Eo=c(function(GW,_o){
var BM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ko=wo(),CM=Ro();BM(ko,"ndarray",CM);_o.exports=ko
});var Ir=c(function(IW,Fo){
var GM=require("path").join,IM=require('@stdlib/utils/try-require/dist'),KM=require('@stdlib/assert/is-error/dist'),VM=Eo(),ha,Oo=IM(GM(__dirname,"./native.js"));KM(Oo)?ha=VM:ha=Oo;Fo.exports=ha
});var To=c(function(KW,Mo){
var F=require('@stdlib/utils/define-read-only-property/dist'),O={};F(O,"ccopy",rv());F(O,"cswap",cv());F(O,"dasum",kv());F(O,"daxpy",Av());F(O,"dcopy",Hv());F(O,"ddot",Sr());F(O,"dnrm2",qs());F(O,"dscal",Rs());F(O,"dsdot",Ps());F(O,"dswap",Pr());F(O,"gasum",$s());F(O,"gaxpy",r0());F(O,"gcopy",f0());F(O,"gdot",Sa());F(O,"gnrm2",M0());F(O,"gscal",B0());F(O,"gswap",Ba());F(O,"sasum",N0());F(O,"saxpy",ot());F(O,"scopy",wt());F(O,"sdot",Lr());F(O,"sdsdot",zt());F(O,"snrm2",xt());F(O,"srotg",so());F(O,"sscal",go());F(O,"sswap",Ir());Mo.exports=O
});var Po=c(function(VW,Zo){
var So=require('@stdlib/assert/is-float64vector-like/dist'),Ya=require('@stdlib/string/format/dist'),zM=Sr().ndarray;function DM(n,e){if(!So(n))throw new TypeError(Ya('0G9D8',n));if(!So(e))throw new TypeError(Ya('0G9D9',e));if(n.length!==e.length)throw new RangeError(Ya('0G93S',n.length,e.length));return zM(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}Zo.exports=DM
});var Lo=c(function(zW,Ao){
var HM=Po();Ao.exports=HM
});var Go=c(function(DW,Co){
var Bo=require('@stdlib/assert/is-float64vector-like/dist'),Xa=require('@stdlib/string/format/dist'),JM=Pr().ndarray;function QM(n,e){if(!Bo(n))throw new TypeError(Xa('0G9D8',n));if(!Bo(e))throw new TypeError(Xa('0G9D9',e));if(n.length!==e.length)throw new RangeError(Xa('0G93S',n.length,e.length));return JM(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}Co.exports=QM
});var Ko=c(function(HW,Io){
var UM=Go();Io.exports=UM
});var zo=c(function(JW,Vo){
var da=5;function WM(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%da,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<da)return a;for(u=v;u<n;u+=da)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}Vo.exports=WM
});var Ho=c(function(QW,Do){
var Kr=5;function $M(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Kr,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Kr)return a;for(s=v;s<n;s+=Kr)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Kr;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}Do.exports=$M
});var Uo=c(function(UW,Qo){
var hM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Jo=zo(),YM=Ho();hM(Jo,"ndarray",YM);Qo.exports=Jo
});var ho=c(function(WW,$o){
var XM=require("path").join,dM=require('@stdlib/utils/try-require/dist'),xM=require('@stdlib/assert/is-error/dist'),NM=Uo(),xa,Wo=dM(XM(__dirname,"./native.js"));xM(Wo)?xa=NM:xa=Wo;$o.exports=xa
});var xo=c(function($W,Xo){
var Yo=require('@stdlib/math/base/special/abs/dist');function r7(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,Yo(r)>=Yo(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}Xo.exports=r7
});var ef=c(function(hW,rf){
var No=require('@stdlib/math/base/special/abs/dist');function e7(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,No(u)>=No(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}rf.exports=e7
});var nf=c(function(YW,uf){
var a7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),af=xo(),u7=ef();a7(af,"ndarray",u7);uf.exports=af
});var Vr=c(function(XW,sf){
var i7=require("path").join,n7=require('@stdlib/utils/try-require/dist'),v7=require('@stdlib/assert/is-error/dist'),s7=nf(),Na,vf=n7(i7(__dirname,"./native.js"));v7(vf)?Na=s7:Na=vf;sf.exports=Na
});var of=c(function(dW,tf){
var t7=Vr();function o7(n,e,a,i){return t7(n,e,a,i)}tf.exports=o7
});var qf=c(function(xW,ff){
var f7=Vr().ndarray;function q7(n,e,a,i,r){return f7(n,e,a,i,r)}ff.exports=q7
});var lf=c(function(NW,mf){
var c7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),cf=of(),m7=qf();c7(cf,"ndarray",m7);mf.exports=cf
});var gf=c(function(r9,jf){
var l7=require("path").join,p7=require('@stdlib/utils/try-require/dist'),j7=require('@stdlib/assert/is-error/dist'),g7=lf(),ru,pf=p7(l7(__dirname,"./native.js"));j7(pf)?ru=g7:ru=pf;jf.exports=ru
});var wf=c(function(e9,bf){
var zr=require('@stdlib/math/base/special/abs/dist');function b7(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,zr(r)>=zr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,zr(s)>=zr(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}bf.exports=b7
});var Rf=c(function(a9,yf){
var Dr=require('@stdlib/math/base/special/abs/dist');function w7(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,Dr(u)>=Dr(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,Dr(o)>=Dr(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}yf.exports=w7
});var Ef=c(function(u9,_f){
var y7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kf=wf(),R7=Rf();y7(kf,"ndarray",R7);_f.exports=kf
});var Mf=c(function(i9,Ff){
var k7=require("path").join,_7=require('@stdlib/utils/try-require/dist'),E7=require('@stdlib/assert/is-error/dist'),O7=Ef(),eu,Of=_7(k7(__dirname,"./native.js"));E7(Of)?eu=O7:eu=Of;Ff.exports=eu
});var Sf=c(function(n9,Tf){
function F7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Tf.exports=F7
});var Pf=c(function(v9,Zf){
function M7(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Zf.exports=M7
});var Bf=c(function(s9,Lf){
var T7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Af=Sf(),S7=Pf();T7(Af,"ndarray",S7);Lf.exports=Af
});var If=c(function(t9,Gf){
var Z7=require("path").join,P7=require('@stdlib/utils/try-require/dist'),A7=require('@stdlib/assert/is-error/dist'),L7=Bf(),au,Cf=P7(Z7(__dirname,"./native.js"));A7(Cf)?au=L7:au=Cf;Gf.exports=au
});var iu=c(function(o9,Kf){
var B7=require('@stdlib/math/base/special/floor/dist'),C7=128;function uu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=C7){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=B7(n/2),g-=g%8,uu(g,e,a,i,u)+uu(n-g,e,a,i,u+g*i)}Kf.exports=uu
});var zf=c(function(f9,Vf){
var G7=iu();function I7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return G7(n,e,a,i,r)}Vf.exports=I7
});var Jf=c(function(q9,Hf){
var K7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Df=zf(),V7=iu();K7(Df,"ndarray",V7);Hf.exports=Df
});var Wf=c(function(c9,Uf){
var z7=require("path").join,D7=require('@stdlib/utils/try-require/dist'),H7=require('@stdlib/assert/is-error/dist'),J7=Jf(),nu,Qf=D7(z7(__dirname,"./native.js"));H7(Qf)?nu=J7:nu=Qf;Uf.exports=nu
});var su=c(function(m9,$f){
var Q7=require('@stdlib/math/base/special/floor/dist'),M=require('@stdlib/math/base/special/abs/dist'),U7=128;function vu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return M(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=M(e[r]),r+=a;return l}if(n<=U7){for(u=M(e[r]),v=M(e[r+a]),s=M(e[r+2*a]),o=M(e[r+3*a]),t=M(e[r+4*a]),f=M(e[r+5*a]),q=M(e[r+6*a]),m=M(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=M(e[r]),v+=M(e[r+a]),s+=M(e[r+2*a]),o+=M(e[r+3*a]),t+=M(e[r+4*a]),f+=M(e[r+5*a]),q+=M(e[r+6*a]),m+=M(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=M(e[r]),r+=a;return l}return j=Q7(n/2),j-=j%8,vu(j,e,a,r)+vu(n-j,e,a,r+j*a)}$f.exports=vu
});var Xf=c(function(l9,Yf){
var hf=require('@stdlib/math/base/special/abs/dist'),W7=su();function $7(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return hf(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=hf(e[i]),i+=a;return r}return W7(n,e,a,i)}Yf.exports=$7
});var Nf=c(function(p9,xf){
var h7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),df=Xf(),Y7=su();h7(df,"ndarray",Y7);xf.exports=df
});var aq=c(function(j9,eq){
var X7=require("path").join,d7=require('@stdlib/utils/try-require/dist'),x7=require('@stdlib/assert/is-error/dist'),N7=Nf(),tu,rq=d7(X7(__dirname,"./native.js"));x7(rq)?tu=N7:tu=rq;eq.exports=tu
});var nq=c(function(g9,iq){
var uq=require('@stdlib/math/base/special/abs/dist');function rT(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,uq(o)>=uq(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}iq.exports=rT
});var tq=c(function(b9,sq){
var vq=require('@stdlib/math/base/special/abs/dist');function eT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,vq(f)>=vq(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}sq.exports=eT
});var qq=c(function(w9,fq){
var aT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),oq=nq(),uT=tq();aT(oq,"ndarray",uT);fq.exports=oq
});var Hr=c(function(y9,mq){
var iT=require("path").join,nT=require('@stdlib/utils/try-require/dist'),vT=require('@stdlib/assert/is-error/dist'),sT=qq(),ou,cq=nT(iT(__dirname,"./native.js"));vT(cq)?ou=sT:ou=cq;mq.exports=ou
});var pq=c(function(R9,lq){
var tT=Hr();function oT(n,e,a,i,r,u){return tT(n,e,a,i,r,u)}lq.exports=oT
});var gq=c(function(k9,jq){
var fT=Hr().ndarray;function qT(n,e,a,i,r,u,v,s){return fT(n,e,a,i,r,u,v,s)}jq.exports=qT
});var yq=c(function(_9,wq){
var cT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),bq=pq(),mT=gq();cT(bq,"ndarray",mT);wq.exports=bq
});var _q=c(function(E9,kq){
var lT=require("path").join,pT=require('@stdlib/utils/try-require/dist'),jT=require('@stdlib/assert/is-error/dist'),gT=yq(),fu,Rq=pT(lT(__dirname,"./native.js"));jT(Rq)?fu=gT:fu=Rq;kq.exports=fu
});var Oq=c(function(O9,Eq){
var Jr=require('@stdlib/math/base/special/abs/dist');function bT(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,Jr(e)>=Jr(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,Jr(t)>=Jr(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}Eq.exports=bT
});var Mq=c(function(F9,Fq){
var Qr=require('@stdlib/math/base/special/abs/dist');function wT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=e+p,Qr(e)>=Qr(p)?j=e-l+p:j=p-l+e,e=l,l=q+j,Qr(q)>=Qr(j)?m=q-l+j:m=j-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}Fq.exports=wT
});var Zq=c(function(M9,Sq){
var yT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Tq=Oq(),RT=Mq();yT(Tq,"ndarray",RT);Sq.exports=Tq
});var Lq=c(function(T9,Aq){
var kT=require("path").join,_T=require('@stdlib/utils/try-require/dist'),ET=require('@stdlib/assert/is-error/dist'),OT=Zq(),qu,Pq=_T(kT(__dirname,"./native.js"));ET(Pq)?qu=OT:qu=Pq;Aq.exports=qu
});var Cq=c(function(S9,Bq){
function FT(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}Bq.exports=FT
});var Iq=c(function(Z9,Gq){
function MT(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}Gq.exports=MT
});var zq=c(function(P9,Vq){
var TT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Kq=Cq(),ST=Iq();TT(Kq,"ndarray",ST);Vq.exports=Kq
});var Jq=c(function(A9,Hq){
var ZT=require("path").join,PT=require('@stdlib/utils/try-require/dist'),AT=require('@stdlib/assert/is-error/dist'),LT=zq(),cu,Dq=PT(ZT(__dirname,"./native.js"));AT(Dq)?cu=LT:cu=Dq;Hq.exports=cu
});var lu=c(function(L9,Qq){
var BT=require('@stdlib/math/base/special/floor/dist'),CT=128;function mu(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=CT){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=BT(n/2),mu(q,e,a,i,o,u,v,t),t+=(q-1)*v,mu(n-q,u[t],a,i,o+q*i,u,v,t+v),u}Qq.exports=mu
});var Wq=c(function(B9,Uq){
var GT=lu();function IT(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,GT(n,e,a,i,v,r,u,s))}Uq.exports=IT
});var Yq=c(function(C9,hq){
var KT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$q=Wq(),VT=lu();KT($q,"ndarray",VT);hq.exports=$q
});var xq=c(function(G9,dq){
var zT=require("path").join,DT=require('@stdlib/utils/try-require/dist'),HT=require('@stdlib/assert/is-error/dist'),JT=Yq(),pu,Xq=DT(zT(__dirname,"./native.js"));HT(Xq)?pu=JT:pu=Xq;dq.exports=pu
});var rc=c(function(I9,Nq){
var ju=8;function QT(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ju,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ju)return a;for(u=v;u<n;u+=ju)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}Nq.exports=QT
});var ac=c(function(K9,ec){
var Ur=8;function UT(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%Ur,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<Ur)return a;for(s=v;s<n;s+=Ur)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=Ur;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}ec.exports=UT
});var nc=c(function(V9,ic){
var WT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),uc=rc(),$T=ac();WT(uc,"ndarray",$T);ic.exports=uc
});var tc=c(function(z9,sc){
var hT=require("path").join,YT=require('@stdlib/utils/try-require/dist'),XT=require('@stdlib/assert/is-error/dist'),dT=nc(),gu,vc=YT(hT(__dirname,"./native.js"));XT(vc)?gu=dT:gu=vc;sc.exports=gu
});var cc=c(function(D9,qc){
var oc=require('@stdlib/math/base/assert/is-nan/dist'),fc=require('@stdlib/math/base/special/abs/dist');function xT(n,e,a){var i,r,u,v;if(n<=0)return 0;if(n===1||a===0)return oc(e[0])?0:fc(e[0]);for(a<0?r=(1-n)*a:r=0,i=0,v=0;v<n;v++)u=e[r],oc(u)===!1&&(i+=fc(u)),r+=a;return i}qc.exports=xT
});var jc=c(function(H9,pc){
var mc=require('@stdlib/math/base/assert/is-nan/dist'),lc=require('@stdlib/math/base/special/abs/dist');function NT(n,e,a,i){var r,u,v,s;if(n<=0)return 0;if(n===1||a===0)return mc(e[i])?0:lc(e[i]);for(u=i,r=0,s=0;s<n;s++)v=e[u],mc(v)===!1&&(r+=lc(v)),u+=a;return r}pc.exports=NT
});var wc=c(function(J9,bc){
var rS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gc=cc(),eS=jc();rS(gc,"ndarray",eS);bc.exports=gc
});var Wr=c(function(Q9,Rc){
var aS=require("path").join,uS=require('@stdlib/utils/try-require/dist'),iS=require('@stdlib/assert/is-error/dist'),nS=wc(),bu,yc=uS(aS(__dirname,"./native.js"));iS(yc)?bu=nS:bu=yc;Rc.exports=bu
});var _c=c(function(U9,kc){
var vS=Wr();function sS(n,e,a){return vS(n,e,a)}kc.exports=sS
});var Oc=c(function(W9,Ec){
var tS=Wr().ndarray;function oS(n,e,a,i){return tS(n,e,a,i)}Ec.exports=oS
});var Tc=c(function($9,Mc){
var fS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fc=_c(),qS=Oc();fS(Fc,"ndarray",qS);Mc.exports=Fc
});var Pc=c(function(h9,Zc){
var cS=require("path").join,mS=require('@stdlib/utils/try-require/dist'),lS=require('@stdlib/assert/is-error/dist'),pS=Tc(),wu,Sc=mS(cS(__dirname,"./native.js"));lS(Sc)?wu=pS:wu=Sc;Zc.exports=wu
});var Cc=c(function(Y9,Bc){
var Ac=require('@stdlib/math/base/assert/is-nan/dist'),Lc=require('@stdlib/math/base/special/abs/dist');function jS(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Ac(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Ac(o)===!1&&(t=u+o,Lc(u)>=Lc(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Bc.exports=jS
});var Vc=c(function(X9,Kc){
var Gc=require('@stdlib/math/base/assert/is-nan/dist'),Ic=require('@stdlib/math/base/special/abs/dist');function gS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Gc(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],Gc(f)===!1&&(q=s+f,Ic(s)>=Ic(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}Kc.exports=gS
});var Hc=c(function(d9,Dc){
var bS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zc=Cc(),wS=Vc();bS(zc,"ndarray",wS);Dc.exports=zc
});var $r=c(function(x9,Qc){
var yS=require("path").join,RS=require('@stdlib/utils/try-require/dist'),kS=require('@stdlib/assert/is-error/dist'),_S=Hc(),yu,Jc=RS(yS(__dirname,"./native.js"));kS(Jc)?yu=_S:yu=Jc;Qc.exports=yu
});var Wc=c(function(N9,Uc){
var ES=$r();function OS(n,e,a,i,r){return ES(n,e,a,i,r)}Uc.exports=OS
});var hc=c(function(r$,$c){
var FS=$r().ndarray;function MS(n,e,a,i,r,u,v){return FS(n,e,a,i,r,u,v)}$c.exports=MS
});var dc=c(function(e$,Xc){
var TS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yc=Wc(),SS=hc();TS(Yc,"ndarray",SS);Xc.exports=Yc
});var rm=c(function(a$,Nc){
var ZS=require("path").join,PS=require('@stdlib/utils/try-require/dist'),AS=require('@stdlib/assert/is-error/dist'),LS=dc(),Ru,xc=PS(ZS(__dirname,"./native.js"));AS(xc)?Ru=LS:Ru=xc;Nc.exports=Ru
});var um=c(function(u$,am){
var em=require('@stdlib/math/base/assert/is-nan/dist'),hr=require('@stdlib/math/base/special/abs/dist');function BS(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j;if(a<0?t=(1-n)*a:t=0,r<0?f=-r:f=0,u=0,n<=0)return i[f]=u,i[f+r]=0,i;if(n===1||a===0)return em(e[t])?(i[f]=u,i[f+r]=0,i):(i[f]=e[t],i[f+r]=1,i);for(v=0,s=0,l=0,j=0;j<n;j++)q=e[t],em(q)===!1&&(m=u+q,hr(u)>=hr(q)?p=u-m+q:p=q-m+u,u=m,m=s+p,hr(s)>=hr(p)?o=s-m+p:o=p-m+s,s=m,v+=o,l+=1),t+=a;return i[f]=u+s+v,i[f+r]=l,i}am.exports=BS
});var vm=c(function(i$,nm){
var im=require('@stdlib/math/base/assert/is-nan/dist'),Yr=require('@stdlib/math/base/special/abs/dist');function CS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,j,g,b;if(q=i,m=v,s=0,n<=0)return r[m]=s,r[m+u]=0,r;if(n===1||a===0)return im(e[q])?(r[m]=s,r[m+u]=0,r):(r[m]=e[q],r[m+u]=1,r);for(o=0,t=0,g=0,b=0;b<n;b++)p=e[q],im(p)===!1&&(l=s+p,Yr(s)>=Yr(p)?j=s-l+p:j=p-l+s,s=l,l=t+j,Yr(t)>=Yr(j)?f=t-l+j:f=j-l+t,t=l,o+=f,g+=1),q+=a;return r[m]=s+t+o,r[m+u]=g,r}nm.exports=CS
});var om=c(function(n$,tm){
var GS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sm=um(),IS=vm();GS(sm,"ndarray",IS);tm.exports=sm
});var cm=c(function(v$,qm){
var KS=require("path").join,VS=require('@stdlib/utils/try-require/dist'),zS=require('@stdlib/assert/is-error/dist'),DS=om(),ku,fm=VS(KS(__dirname,"./native.js"));zS(fm)?ku=DS:ku=fm;qm.exports=ku
});var pm=c(function(s$,lm){
var mm=require('@stdlib/math/base/assert/is-nan/dist');function HS(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return mm(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)mm(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}lm.exports=HS
});var bm=c(function(t$,gm){
var jm=require('@stdlib/math/base/assert/is-nan/dist');function JS(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return jm(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)jm(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}gm.exports=JS
});var Rm=c(function(o$,ym){
var QS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wm=pm(),US=bm();QS(wm,"ndarray",US);ym.exports=wm
});var Em=c(function(f$,_m){
var WS=require("path").join,$S=require('@stdlib/utils/try-require/dist'),hS=require('@stdlib/assert/is-error/dist'),YS=Rm(),_u,km=$S(WS(__dirname,"./native.js"));hS(km)?_u=YS:_u=km;_m.exports=_u
});var Ou=c(function(q$,Om){
var XS=require('@stdlib/math/base/assert/is-nan/dist'),dS=require('@stdlib/math/base/special/floor/dist'),xS=128;function Eu(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,j,g,b,R,_,k,h;if(n<=0)return r;if(s=i,o=v,n===1||a===0)return XS(e[s])||(r[o]+=e[s],r[o+u]+=1),r;if(n<8){for(R=0,_=0,h=0;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}if(n<=xS){for(t=0,f=0,q=0,m=0,p=0,l=0,j=0,g=0,_=0,b=n%8,h=0;h<n-b;h+=8)k=e[s],k===k&&(t+=k,_+=1),s+=a,k=e[s],k===k&&(f+=k,_+=1),s+=a,k=e[s],k===k&&(q+=k,_+=1),s+=a,k=e[s],k===k&&(m+=k,_+=1),s+=a,k=e[s],k===k&&(p+=k,_+=1),s+=a,k=e[s],k===k&&(l+=k,_+=1),s+=a,k=e[s],k===k&&(j+=k,_+=1),s+=a,k=e[s],k===k&&(g+=k,_+=1),s+=a;for(R=t+f+(q+m)+(p+l+(j+g)),h;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}return _=dS(n/2),_-=_%8,Eu(_,e,a,s,r,u,v),Eu(n-_,e,a,s+_*a,r,u,v),r}Om.exports=Eu
});var Mm=c(function(c$,Fm){
var NS=Ou();function rZ(n,e,a,i,r){var u,v;return a<0?u=(1-n)*a:u=0,r<0?v=-r:v=0,i[v]=0,i[v+r]=0,NS(n,e,a,u,i,r,v),i}Fm.exports=rZ
});var Sm=c(function(m$,Tm){
var eZ=Ou();function aZ(n,e,a,i,r,u,v){return r[v]=0,r[v+u]=0,eZ(n,e,a,i,r,u,v),r}Tm.exports=aZ
});var Am=c(function(l$,Pm){
var uZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Zm=Mm(),iZ=Sm();uZ(Zm,"ndarray",iZ);Pm.exports=Zm
});var Cm=c(function(p$,Bm){
var nZ=require("path").join,vZ=require('@stdlib/utils/try-require/dist'),sZ=require('@stdlib/assert/is-error/dist'),tZ=Am(),Fu,Lm=vZ(nZ(__dirname,"./native.js"));sZ(Lm)?Fu=tZ:Fu=Lm;Bm.exports=Fu
});var Vm=c(function(j$,Km){
var Gm=require('@stdlib/math/base/assert/is-nan/dist'),Im=require('@stdlib/math/base/special/abs/dist');function oZ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return Gm(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],Gm(u)===!1&&(v=i+u,Im(i)>=Im(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}Km.exports=oZ
});var Jm=c(function(g$,Hm){
var zm=require('@stdlib/math/base/assert/is-nan/dist'),Dm=require('@stdlib/math/base/special/abs/dist');function fZ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return zm(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],zm(v)===!1&&(s=r+v,Dm(r)>=Dm(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}Hm.exports=fZ
});var Wm=c(function(b$,Um){
var qZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qm=Vm(),cZ=Jm();qZ(Qm,"ndarray",cZ);Um.exports=Qm
});var Xr=c(function(w$,hm){
var mZ=require("path").join,lZ=require('@stdlib/utils/try-require/dist'),pZ=require('@stdlib/assert/is-error/dist'),jZ=Wm(),Mu,$m=lZ(mZ(__dirname,"./native.js"));pZ($m)?Mu=jZ:Mu=$m;hm.exports=Mu
});var Xm=c(function(y$,Ym){
var gZ=Xr();function bZ(n,e,a){return gZ(n,e,a)}Ym.exports=bZ
});var xm=c(function(R$,dm){
var wZ=Xr().ndarray;function yZ(n,e,a,i){return wZ(n,e,a,i)}dm.exports=yZ
});var e1=c(function(k$,r1){
var RZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Nm=Xm(),kZ=xm();RZ(Nm,"ndarray",kZ);r1.exports=Nm
});var i1=c(function(_$,u1){
var _Z=require("path").join,EZ=require('@stdlib/utils/try-require/dist'),OZ=require('@stdlib/assert/is-error/dist'),FZ=e1(),Tu,a1=EZ(_Z(__dirname,"./native.js"));OZ(a1)?Tu=FZ:Tu=a1;u1.exports=Tu
});var s1=c(function(E$,v1){
var n1=require('@stdlib/math/base/assert/is-nan/dist'),dr=require('@stdlib/math/base/special/abs/dist');function MZ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return n1(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],n1(o)===!1&&(t=i+o,dr(i)>=dr(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,dr(v)>=dr(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}v1.exports=MZ
});var f1=c(function(O$,o1){
var t1=require('@stdlib/math/base/assert/is-nan/dist'),xr=require('@stdlib/math/base/special/abs/dist');function TZ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return t1(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],t1(t)===!1&&(f=r+t,xr(r)>=xr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,xr(s)>=xr(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}o1.exports=TZ
});var m1=c(function(F$,c1){
var SZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),q1=s1(),ZZ=f1();SZ(q1,"ndarray",ZZ);c1.exports=q1
});var j1=c(function(M$,p1){
var PZ=require("path").join,AZ=require('@stdlib/utils/try-require/dist'),LZ=require('@stdlib/assert/is-error/dist'),BZ=m1(),Su,l1=AZ(PZ(__dirname,"./native.js"));LZ(l1)?Su=BZ:Su=l1;p1.exports=Su
});var w1=c(function(T$,b1){
var g1=require('@stdlib/math/base/assert/is-nan/dist');function CZ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return g1(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)g1(e[r])===!1&&(i+=e[r]),r+=a;return i}b1.exports=CZ
});var k1=c(function(S$,R1){
var y1=require('@stdlib/math/base/assert/is-nan/dist');function GZ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return y1(e[i])?r:e[i];for(u=i,v=0;v<n;v++)y1(e[u])===!1&&(r+=e[u]),u+=a;return r}R1.exports=GZ
});var O1=c(function(Z$,E1){
var IZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_1=w1(),KZ=k1();IZ(_1,"ndarray",KZ);E1.exports=_1
});var T1=c(function(P$,M1){
var VZ=require("path").join,zZ=require('@stdlib/utils/try-require/dist'),DZ=require('@stdlib/assert/is-error/dist'),HZ=O1(),Zu,F1=zZ(VZ(__dirname,"./native.js"));DZ(F1)?Zu=HZ:Zu=F1;M1.exports=Zu
});var Au=c(function(A$,S1){
var T=require('@stdlib/math/base/assert/is-nan/dist'),JZ=require('@stdlib/math/base/special/floor/dist'),QZ=128;function Pu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return T(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=QZ){for(u=T(e[r])?0:e[r],r+=a,v=T(e[r])?0:e[r],r+=a,s=T(e[r])?0:e[r],r+=a,o=T(e[r])?0:e[r],r+=a,t=T(e[r])?0:e[r],r+=a,f=T(e[r])?0:e[r],r+=a,q=T(e[r])?0:e[r],r+=a,m=T(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=T(e[r])?0:e[r],r+=a,v+=T(e[r])?0:e[r],r+=a,s+=T(e[r])?0:e[r],r+=a,o+=T(e[r])?0:e[r],r+=a,t+=T(e[r])?0:e[r],r+=a,f+=T(e[r])?0:e[r],r+=a,q+=T(e[r])?0:e[r],r+=a,m+=T(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=JZ(n/2),j-=j%8,Pu(j,e,a,r)+Pu(n-j,e,a,r+j*a)}S1.exports=Pu
});var A1=c(function(L$,P1){
var Z1=require('@stdlib/math/base/assert/is-nan/dist'),UZ=Au();function WZ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Z1(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Z1(e[i])===!1&&(r+=e[i]),i+=a;return r}return UZ(n,e,a,i)}P1.exports=WZ
});var C1=c(function(B$,B1){
var $Z=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),L1=A1(),hZ=Au();$Z(L1,"ndarray",hZ);B1.exports=L1
});var K1=c(function(C$,I1){
var YZ=require("path").join,XZ=require('@stdlib/utils/try-require/dist'),dZ=require('@stdlib/assert/is-error/dist'),xZ=C1(),Lu,G1=XZ(YZ(__dirname,"./native.js"));dZ(G1)?Lu=xZ:Lu=G1;I1.exports=Lu
});var z1=c(function(G$,V1){
var NZ=require('@stdlib/math/base/special/floor/dist'),Nr=3;function rP(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=NZ(n/2),a===1){if(v=s%Nr,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<Nr)return e;for(r=v;r<s;r+=Nr)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=Nr;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}V1.exports=rP
});var H1=c(function(I$,D1){
var eP=require('@stdlib/math/base/special/floor/dist'),Or=3;function aP(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=eP(n/2),u=i,a===1){if(s=o%Or,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<Or)return e;for(t=s;t<o;t+=Or)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Or,v-=Or;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}D1.exports=aP
});var U1=c(function(K$,Q1){
var uP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),J1=z1(),iP=H1();uP(J1,"ndarray",iP);Q1.exports=J1
});var h1=c(function(V$,$1){
var nP=require("path").join,vP=require('@stdlib/utils/try-require/dist'),sP=require('@stdlib/assert/is-error/dist'),tP=U1(),Bu,W1=vP(nP(__dirname,"./native.js"));sP(W1)?Bu=tP:Bu=W1;$1.exports=Bu
});var Gu=c(function(z$,Y1){
var oP=require('@stdlib/math/base/special/floor/dist'),fP=128;function Cu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=fP){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=oP(n/2),g-=g%8,Cu(g,e,a,i,u)+Cu(n-g,e,a,i,u+g*i)}Y1.exports=Cu
});var d1=c(function(D$,X1){
var qP=Gu();function cP(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return qP(n,e,a,i,r)}X1.exports=cP
});var rl=c(function(H$,N1){
var mP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),x1=d1(),lP=Gu();mP(x1,"ndarray",lP);N1.exports=x1
});var re=c(function(J$,al){
var pP=require("path").join,jP=require('@stdlib/utils/try-require/dist'),gP=require('@stdlib/assert/is-error/dist'),bP=rl(),Iu,el=jP(pP(__dirname,"./native.js"));gP(el)?Iu=bP:Iu=el;al.exports=Iu
});var il=c(function(Q$,ul){
var wP=re();function yP(n,e,a,i){return wP(n,e,a,i)}ul.exports=yP
});var vl=c(function(U$,nl){
var RP=re().ndarray;function kP(n,e,a,i,r){return RP(n,e,a,i,r)}nl.exports=kP
});var ol=c(function(W$,tl){
var _P=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sl=il(),EP=vl();_P(sl,"ndarray",EP);tl.exports=sl
});var cl=c(function($$,ql){
var OP=require("path").join,FP=require('@stdlib/utils/try-require/dist'),MP=require('@stdlib/assert/is-error/dist'),TP=ol(),Ku,fl=FP(OP(__dirname,"./native.js"));MP(fl)?Ku=TP:Ku=fl;ql.exports=Ku
});var pl=c(function(h$,ll){
var ml=require('@stdlib/math/base/assert/is-nan/dist');function SP(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return ml(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)ml(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}ll.exports=SP
});var bl=c(function(Y$,gl){
var jl=require('@stdlib/math/base/assert/is-nan/dist');function ZP(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return jl(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)jl(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}gl.exports=ZP
});var Rl=c(function(X$,yl){
var PP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wl=pl(),AP=bl();PP(wl,"ndarray",AP);yl.exports=wl
});var El=c(function(d$,_l){
var LP=require("path").join,BP=require('@stdlib/utils/try-require/dist'),CP=require('@stdlib/assert/is-error/dist'),GP=Rl(),Vu,kl=BP(LP(__dirname,"./native.js"));CP(kl)?Vu=GP:Vu=kl;_l.exports=Vu
});var Du=c(function(x$,Ol){
var S=require('@stdlib/math/base/assert/is-nanf/dist'),IP=require('@stdlib/math/base/special/floor/dist'),KP=128;function zu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return S(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=KP){for(u=S(e[r])?0:e[r],r+=a,v=S(e[r])?0:e[r],r+=a,s=S(e[r])?0:e[r],r+=a,o=S(e[r])?0:e[r],r+=a,t=S(e[r])?0:e[r],r+=a,f=S(e[r])?0:e[r],r+=a,q=S(e[r])?0:e[r],r+=a,m=S(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=S(e[r])?0:e[r],r+=a,v+=S(e[r])?0:e[r],r+=a,s+=S(e[r])?0:e[r],r+=a,o+=S(e[r])?0:e[r],r+=a,t+=S(e[r])?0:e[r],r+=a,f+=S(e[r])?0:e[r],r+=a,q+=S(e[r])?0:e[r],r+=a,m+=S(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=IP(n/2),j-=j%8,zu(j,e,a,r)+zu(n-j,e,a,r+j*a)}Ol.exports=zu
});var Tl=c(function(N$,Ml){
var Fl=require('@stdlib/math/base/assert/is-nanf/dist'),VP=Du();function zP(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Fl(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Fl(e[i])===!1&&(r+=e[i]),i+=a;return r}return VP(n,e,a,i)}Ml.exports=zP
});var Pl=c(function(rh,Zl){
var DP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sl=Tl(),HP=Du();DP(Sl,"ndarray",HP);Zl.exports=Sl
});var ee=c(function(eh,Ll){
var JP=require("path").join,QP=require('@stdlib/utils/try-require/dist'),UP=require('@stdlib/assert/is-error/dist'),WP=Pl(),Hu,Al=QP(JP(__dirname,"./native.js"));UP(Al)?Hu=WP:Hu=Al;Ll.exports=Hu
});var Cl=c(function(ah,Bl){
var $P=ee();function hP(n,e,a){return $P(n,e,a)}Bl.exports=hP
});var Il=c(function(uh,Gl){
var YP=ee().ndarray;function XP(n,e,a,i){return YP(n,e,a,i)}Gl.exports=XP
});var zl=c(function(ih,Vl){
var dP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Kl=Cl(),xP=Il();dP(Kl,"ndarray",xP);Vl.exports=Kl
});var Jl=c(function(nh,Hl){
var NP=require("path").join,rA=require('@stdlib/utils/try-require/dist'),eA=require('@stdlib/assert/is-error/dist'),aA=zl(),Ju,Dl=rA(NP(__dirname,"./native.js"));eA(Dl)?Ju=aA:Ju=Dl;Hl.exports=Ju
});var Wl=c(function(vh,Ul){
var Ql=require('@stdlib/math/base/assert/is-nan/dist');function uA(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return Ql(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)Ql(e[r])===!1&&(i+=e[r]),r+=a;return i}Ul.exports=uA
});var Yl=c(function(sh,hl){
var $l=require('@stdlib/math/base/assert/is-nan/dist');function iA(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return $l(e[i])?r:e[i];for(u=i,v=0;v<n;v++)$l(e[u])===!1&&(r+=e[u]),u+=a;return r}hl.exports=iA
});var xl=c(function(th,dl){
var nA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xl=Wl(),vA=Yl();nA(Xl,"ndarray",vA);dl.exports=Xl
});var ep=c(function(oh,rp){
var sA=require("path").join,tA=require('@stdlib/utils/try-require/dist'),oA=require('@stdlib/assert/is-error/dist'),fA=xl(),Qu,Nl=tA(sA(__dirname,"./native.js"));oA(Nl)?Qu=fA:Qu=Nl;rp.exports=Qu
});var np=c(function(fh,ip){
var ap=require('@stdlib/math/base/assert/is-positive-zero/dist'),up=require('@stdlib/math/base/assert/is-nan/dist'),qA=require('@stdlib/math/base/special/floor/dist');function cA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=qA(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||up(f)||f===q&&ap(f))&&(t+=1)),f=a[v+t*i],f>m||up(f)||f===m&&ap(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}ip.exports=cA
});var op=c(function(qh,tp){
var vp=require('@stdlib/math/base/assert/is-positive-zero/dist'),sp=require('@stdlib/math/base/assert/is-nan/dist'),mA=require('@stdlib/math/base/special/floor/dist');function lA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=mA(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||sp(f)||f===q&&vp(f))&&(t+=1)),f=a[r+t*i],f>m||sp(f)||f===m&&vp(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}tp.exports=lA
});var cp=c(function(ch,qp){
var pA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),fp=np(),jA=op();pA(fp,"ndarray",jA);qp.exports=fp
});var pp=c(function(mh,lp){
var gA=require("path").join,bA=require('@stdlib/utils/try-require/dist'),wA=require('@stdlib/assert/is-error/dist'),yA=cp(),Uu,mp=bA(gA(__dirname,"./native.js"));wA(mp)?Uu=yA:Uu=mp;lp.exports=Uu
});var bp=c(function(lh,gp){
var ae=require('@stdlib/math/base/assert/is-negative-zero/dist'),jp=require('@stdlib/math/base/assert/is-nan/dist');function RA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],jp(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=ae(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&ae(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],jp(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=ae(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&ae(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}gp.exports=RA
});var Rp=c(function(ph,yp){
var ue=require('@stdlib/math/base/assert/is-negative-zero/dist'),wp=require('@stdlib/math/base/assert/is-nan/dist');function kA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],wp(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=ue(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ue(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],wp(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=ue(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ue(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}yp.exports=kA
});var Ep=c(function(jh,_p){
var _A=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kp=bp(),EA=Rp();_A(kp,"ndarray",EA);_p.exports=kp
});var Mp=c(function(gh,Fp){
var OA=require("path").join,FA=require('@stdlib/utils/try-require/dist'),MA=require('@stdlib/assert/is-error/dist'),TA=Ep(),Wu,Op=FA(OA(__dirname,"./native.js"));MA(Op)?Wu=TA:Wu=Op;Fp.exports=Wu
});var $u=c(function(bh,SA){SA.exports=[701,301,132,57,23,10,4,1]});var Zp=c(function(wh,Sp){
var ZA=require('@stdlib/math/base/assert/is-negative-zero/dist'),PA=require('@stdlib/math/base/assert/is-nan/dist'),Tp=$u(),AA=Tp.length;function LA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<AA;p++)for(t=Tp[p],l=t;l<n;l++)if(f=a[v+l*i],!PA(f)){for(q=r[s+l*u],o=ZA(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}Sp.exports=LA
});var Lp=c(function(yh,Ap){
var BA=require('@stdlib/math/base/assert/is-negative-zero/dist'),CA=require('@stdlib/math/base/assert/is-nan/dist'),Pp=$u(),GA=Pp.length;function IA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<GA;p++)for(t=Pp[p],l=t;l<n;l++)if(f=a[r+l*i],!CA(f)){for(q=u[s+l*v],o=BA(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}Ap.exports=IA
});var Gp=c(function(Rh,Cp){
var KA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Bp=Zp(),VA=Lp();KA(Bp,"ndarray",VA);Cp.exports=Bp
});var Vp=c(function(kh,Kp){
var zA=require("path").join,DA=require('@stdlib/utils/try-require/dist'),HA=require('@stdlib/assert/is-error/dist'),JA=Gp(),hu,Ip=DA(zA(__dirname,"./native.js"));HA(Ip)?hu=JA:hu=Ip;Kp.exports=hu
});var Jp=c(function(_h,Hp){
var zp=require('@stdlib/math/base/assert/is-positive-zero/dist'),Dp=require('@stdlib/math/base/assert/is-nan/dist'),QA=require('@stdlib/math/base/special/floor/dist');function UA(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=QA(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Dp(s)||s===o&&zp(s))&&(v+=1)),s=a[r+v*i],s>f||Dp(s)||s===f&&zp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Hp.exports=UA
});var $p=c(function(Eh,Wp){
var Qp=require('@stdlib/math/base/assert/is-positive-zero/dist'),Up=require('@stdlib/math/base/assert/is-nan/dist'),WA=require('@stdlib/math/base/special/floor/dist');function $A(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=WA(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Up(s)||s===o&&Qp(s))&&(v+=1)),s=a[r+v*i],s>f||Up(s)||s===f&&Qp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Wp.exports=$A
});var Xp=c(function(Oh,Yp){
var hA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hp=Jp(),YA=$p();hA(hp,"ndarray",YA);Yp.exports=hp
});var Np=c(function(Fh,xp){
var XA=require("path").join,dA=require('@stdlib/utils/try-require/dist'),xA=require('@stdlib/assert/is-error/dist'),NA=Xp(),Yu,dp=dA(XA(__dirname,"./native.js"));xA(dp)?Yu=NA:Yu=dp;xp.exports=Yu
});var a2=c(function(Mh,e2){
var ie=require('@stdlib/math/base/assert/is-negative-zero/dist'),r2=require('@stdlib/math/base/assert/is-nan/dist');function rL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],r2(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ie(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ie(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],r2(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ie(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ie(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}e2.exports=rL
});var n2=c(function(Th,i2){
var ne=require('@stdlib/math/base/assert/is-negative-zero/dist'),u2=require('@stdlib/math/base/assert/is-nan/dist');function eL(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],u2(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ne(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ne(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],u2(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ne(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ne(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}i2.exports=eL
});var t2=c(function(Sh,s2){
var aL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),v2=a2(),uL=n2();aL(v2,"ndarray",uL);s2.exports=v2
});var q2=c(function(Zh,f2){
var iL=require("path").join,nL=require('@stdlib/utils/try-require/dist'),vL=require('@stdlib/assert/is-error/dist'),sL=t2(),Xu,o2=nL(iL(__dirname,"./native.js"));vL(o2)?Xu=sL:Xu=o2;f2.exports=Xu
});var du=c(function(Ph,tL){tL.exports=[701,301,132,57,23,10,4,1]});var l2=c(function(Ah,m2){
var oL=require('@stdlib/math/base/assert/is-negative-zero/dist'),fL=require('@stdlib/math/base/assert/is-nan/dist'),c2=du(),qL=c2.length;function cL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<qL;t++)for(v=c2[t],f=v;f<n;f++)if(s=a[r+f*i],!fL(s)){for(u=oL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}m2.exports=cL
});var g2=c(function(Lh,j2){
var mL=require('@stdlib/math/base/assert/is-negative-zero/dist'),lL=require('@stdlib/math/base/assert/is-nan/dist'),p2=du(),pL=p2.length;function jL(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<pL;t++)for(v=p2[t],f=v;f<n;f++)if(s=a[r+f*i],!lL(s)){for(u=mL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}j2.exports=jL
});var y2=c(function(Bh,w2){
var gL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),b2=l2(),bL=g2();gL(b2,"ndarray",bL);w2.exports=b2
});var _2=c(function(Ch,k2){
var wL=require("path").join,yL=require('@stdlib/utils/try-require/dist'),RL=require('@stdlib/assert/is-error/dist'),kL=y2(),xu,R2=yL(wL(__dirname,"./native.js"));RL(R2)?xu=kL:xu=R2;k2.exports=xu
});var ri=c(function(Gh,E2){
var _L=require('@stdlib/math/base/special/floor/dist'),EL=128;function Nu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=EL){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=_L(n/2),j-=j%8,Nu(j,e,a,r)+Nu(n-j,e,a,r+j*a)}E2.exports=Nu
});var F2=c(function(Ih,O2){
var OL=ri();function FL(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return OL(n,e,a,i)}O2.exports=FL
});var S2=c(function(Kh,T2){
var ML=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),M2=F2(),TL=ri();ML(M2,"ndarray",TL);T2.exports=M2
});var ve=c(function(Vh,P2){
var SL=require("path").join,ZL=require('@stdlib/utils/try-require/dist'),PL=require('@stdlib/assert/is-error/dist'),AL=S2(),ei,Z2=ZL(SL(__dirname,"./native.js"));PL(Z2)?ei=AL:ei=Z2;P2.exports=ei
});var L2=c(function(zh,A2){
var LL=ve();function BL(n,e,a){return LL(n,e,a)}A2.exports=BL
});var C2=c(function(Dh,B2){
var CL=ve().ndarray;function GL(n,e,a,i){return CL(n,e,a,i)}B2.exports=GL
});var K2=c(function(Hh,I2){
var IL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),G2=L2(),KL=C2();IL(G2,"ndarray",KL);I2.exports=G2
});var D2=c(function(Jh,z2){
var VL=require("path").join,zL=require('@stdlib/utils/try-require/dist'),DL=require('@stdlib/assert/is-error/dist'),HL=K2(),ai,V2=zL(VL(__dirname,"./native.js"));DL(V2)?ai=HL:ai=V2;z2.exports=ai
});var J2=c(function(Qh,H2){
var ui=6;function JL(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ui,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ui)return i;for(v=u;v<n;v+=ui)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}H2.exports=JL
});var U2=c(function(Uh,Q2){
var se=6;function QL(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%se,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<se)return r;for(s=v;s<n;s+=se)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=se;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}Q2.exports=QL
});var h2=c(function(Wh,$2){
var UL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),W2=J2(),WL=U2();UL(W2,"ndarray",WL);$2.exports=W2
});var d2=c(function($h,X2){
var $L=require("path").join,hL=require('@stdlib/utils/try-require/dist'),YL=require('@stdlib/assert/is-error/dist'),XL=h2(),ii,Y2=hL($L(__dirname,"./native.js"));YL(Y2)?ii=XL:ii=Y2;X2.exports=ii
});var rj=c(function(hh,N2){
var x2=require('@stdlib/math/base/special/abs/dist');function dL(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,x2(i)>=x2(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}N2.exports=dL
});var uj=c(function(Yh,aj){
var ej=require('@stdlib/math/base/special/abs/dist');function xL(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,ej(r)>=ej(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}aj.exports=xL
});var vj=c(function(Xh,nj){
var NL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ij=rj(),rB=uj();NL(ij,"ndarray",rB);nj.exports=ij
});var te=c(function(dh,tj){
var eB=require("path").join,aB=require('@stdlib/utils/try-require/dist'),uB=require('@stdlib/assert/is-error/dist'),iB=vj(),ni,sj=aB(eB(__dirname,"./native.js"));uB(sj)?ni=iB:ni=sj;tj.exports=ni
});var fj=c(function(xh,oj){
var nB=te();function vB(n,e,a){return nB(n,e,a)}oj.exports=vB
});var cj=c(function(Nh,qj){
var sB=te().ndarray;function tB(n,e,a,i){return sB(n,e,a,i)}qj.exports=tB
});var pj=c(function(rY,lj){
var oB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mj=fj(),fB=cj();oB(mj,"ndarray",fB);lj.exports=mj
});var bj=c(function(eY,gj){
var qB=require("path").join,cB=require('@stdlib/utils/try-require/dist'),mB=require('@stdlib/assert/is-error/dist'),lB=pj(),vi,jj=cB(qB(__dirname,"./native.js"));mB(jj)?vi=lB:vi=jj;gj.exports=vi
});var yj=c(function(aY,wj){
var oe=require('@stdlib/math/base/special/abs/dist');function pB(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,oe(i)>=oe(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,oe(v)>=oe(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}wj.exports=pB
});var kj=c(function(uY,Rj){
var fe=require('@stdlib/math/base/special/abs/dist');function jB(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,fe(r)>=fe(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,fe(s)>=fe(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}Rj.exports=jB
});var Oj=c(function(iY,Ej){
var gB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_j=yj(),bB=kj();gB(_j,"ndarray",bB);Ej.exports=_j
});var Tj=c(function(nY,Mj){
var wB=require("path").join,yB=require('@stdlib/utils/try-require/dist'),RB=require('@stdlib/assert/is-error/dist'),kB=Oj(),si,Fj=yB(wB(__dirname,"./native.js"));RB(Fj)?si=kB:si=Fj;Mj.exports=si
});var Zj=c(function(vY,Sj){
var ti=6;function _B(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ti,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ti)return i;for(v=u;v<n;v+=ti)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}Sj.exports=_B
});var Aj=c(function(sY,Pj){
var qe=6;function EB(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%qe,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<qe)return r;for(s=v;s<n;s+=qe)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=qe;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}Pj.exports=EB
});var Cj=c(function(tY,Bj){
var OB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lj=Zj(),FB=Aj();OB(Lj,"ndarray",FB);Bj.exports=Lj
});var Kj=c(function(oY,Ij){
var MB=require("path").join,TB=require('@stdlib/utils/try-require/dist'),SB=require('@stdlib/assert/is-error/dist'),ZB=Cj(),oi,Gj=TB(MB(__dirname,"./native.js"));SB(Gj)?oi=ZB:oi=Gj;Ij.exports=oi
});var qi=c(function(fY,Vj){
var PB=require('@stdlib/math/base/special/floor/dist'),AB=128;function fi(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=AB){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=PB(n/2),j-=j%8,fi(j,e,a,r)+fi(n-j,e,a,r+j*a)}Vj.exports=fi
});var Dj=c(function(qY,zj){
var LB=qi();function BB(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return LB(n,e,a,i)}zj.exports=BB
});var Qj=c(function(cY,Jj){
var CB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hj=Dj(),GB=qi();CB(Hj,"ndarray",GB);Jj.exports=Hj
});var $j=c(function(mY,Wj){
var IB=require("path").join,KB=require('@stdlib/utils/try-require/dist'),VB=require('@stdlib/assert/is-error/dist'),zB=Qj(),ci,Uj=KB(IB(__dirname,"./native.js"));VB(Uj)?ci=zB:ci=Uj;Wj.exports=ci
});var Yj=c(function(lY,hj){
var mi=5;function DB(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%mi,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<mi)return a;for(u=v;u<n;u+=mi)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}hj.exports=DB
});var dj=c(function(pY,Xj){
var ce=5;function HB(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%ce,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<ce)return a;for(s=v;s<n;s+=ce)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=ce;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}Xj.exports=HB
});var rg=c(function(jY,Nj){
var JB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xj=Yj(),QB=dj();JB(xj,"ndarray",QB);Nj.exports=xj
});var ug=c(function(gY,ag){
var eg=require('@stdlib/math/base/special/abs/dist');function UB(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,eg(r)>=eg(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}ag.exports=UB
});var vg=c(function(bY,ng){
var ig=require('@stdlib/math/base/special/abs/dist');function WB(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,ig(u)>=ig(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}ng.exports=WB
});var me=c(function(wY,tg){
var $B=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sg=ug(),hB=vg();$B(sg,"ndarray",hB);tg.exports=sg
});var fg=c(function(yY,og){
var YB=me();function XB(n,e,a,i){return YB(n,e,a,i)}og.exports=XB
});var cg=c(function(RY,qg){
var dB=me().ndarray;function xB(n,e,a,i,r){return dB(n,e,a,i,r)}qg.exports=xB
});var pg=c(function(kY,lg){
var NB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mg=fg(),rC=cg();NB(mg,"ndarray",rC);lg.exports=mg
});var gg=c(function(_Y,jg){
var le=require('@stdlib/math/base/special/abs/dist');function eC(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,le(r)>=le(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,le(s)>=le(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}jg.exports=eC
});var wg=c(function(EY,bg){
var pe=require('@stdlib/math/base/special/abs/dist');function aC(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,pe(u)>=pe(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,pe(o)>=pe(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}bg.exports=aC
});var kg=c(function(OY,Rg){
var uC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yg=gg(),iC=wg();uC(yg,"ndarray",iC);Rg.exports=yg
});var Eg=c(function(FY,_g){
function nC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}_g.exports=nC
});var Fg=c(function(MY,Og){
function vC(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Og.exports=vC
});var Sg=c(function(TY,Tg){
var sC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mg=Eg(),tC=Fg();sC(Mg,"ndarray",tC);Tg.exports=Mg
});var pi=c(function(SY,Zg){
var oC=require('@stdlib/math/base/special/floor/dist'),fC=128;function li(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=fC){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=oC(n/2),g-=g%8,li(g,e,a,i,u)+li(n-g,e,a,i,u+g*i)}Zg.exports=li
});var Ag=c(function(ZY,Pg){
var qC=pi();function cC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return qC(n,e,a,i,r)}Pg.exports=cC
});var Cg=c(function(PY,Bg){
var mC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lg=Ag(),lC=pi();mC(Lg,"ndarray",lC);Bg.exports=Lg
});var gi=c(function(AY,Gg){
var pC=require('@stdlib/math/base/special/floor/dist'),Z=require('@stdlib/math/base/special/abs/dist'),jC=128;function ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return Z(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=Z(e[r]),r+=a;return l}if(n<=jC){for(u=Z(e[r]),v=Z(e[r+a]),s=Z(e[r+2*a]),o=Z(e[r+3*a]),t=Z(e[r+4*a]),f=Z(e[r+5*a]),q=Z(e[r+6*a]),m=Z(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=Z(e[r]),v+=Z(e[r+a]),s+=Z(e[r+2*a]),o+=Z(e[r+3*a]),t+=Z(e[r+4*a]),f+=Z(e[r+5*a]),q+=Z(e[r+6*a]),m+=Z(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=Z(e[r]),r+=a;return l}return j=pC(n/2),j-=j%8,ji(j,e,a,r)+ji(n-j,e,a,r+j*a)}Gg.exports=ji
});var Vg=c(function(LY,Kg){
var Ig=require('@stdlib/math/base/special/abs/dist'),gC=gi();function bC(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Ig(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=Ig(e[i]),i+=a;return r}return gC(n,e,a,i)}Kg.exports=bC
});var Hg=c(function(BY,Dg){
var wC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zg=Vg(),yC=gi();wC(zg,"ndarray",yC);Dg.exports=zg
});var Ug=c(function(CY,Qg){
var Jg=require('@stdlib/math/base/special/abs/dist');function RC(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,Jg(o)>=Jg(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}Qg.exports=RC
});var hg=c(function(GY,$g){
var Wg=require('@stdlib/math/base/special/abs/dist');function kC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,Wg(f)>=Wg(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}$g.exports=kC
});var je=c(function(IY,Xg){
var _C=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yg=Ug(),EC=hg();_C(Yg,"ndarray",EC);Xg.exports=Yg
});var xg=c(function(KY,dg){
var OC=je();function FC(n,e,a,i,r,u){return OC(n,e,a,i,r,u)}dg.exports=FC
});var rb=c(function(VY,Ng){
var MC=je().ndarray;function TC(n,e,a,i,r,u,v,s){return MC(n,e,a,i,r,u,v,s)}Ng.exports=TC
});var ub=c(function(zY,ab){
var SC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),eb=xg(),ZC=rb();SC(eb,"ndarray",ZC);ab.exports=eb
});var nb=c(function(DY,ib){
var ge=require('@stdlib/math/base/special/abs/dist');function PC(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,ge(e)>=ge(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,ge(t)>=ge(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}ib.exports=PC
});var sb=c(function(HY,vb){
var be=require('@stdlib/math/base/special/abs/dist');function AC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=e+p,be(e)>=be(p)?j=e-l+p:j=p-l+e,e=l,l=q+j,be(q)>=be(j)?m=q-l+j:m=j-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}vb.exports=AC
});var fb=c(function(JY,ob){
var LC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tb=nb(),BC=sb();LC(tb,"ndarray",BC);ob.exports=tb
});var cb=c(function(QY,qb){
function CC(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}qb.exports=CC
});var lb=c(function(UY,mb){
function GC(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}mb.exports=GC
});var gb=c(function(WY,jb){
var IC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pb=cb(),KC=lb();IC(pb,"ndarray",KC);jb.exports=pb
});var wi=c(function($Y,bb){
var VC=require('@stdlib/math/base/special/floor/dist'),zC=128;function bi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=zC){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=VC(n/2),bi(q,e,a,i,o,u,v,t),t+=(q-1)*v,bi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}bb.exports=bi
});var yb=c(function(hY,wb){
var DC=wi();function HC(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,DC(n,e,a,i,v,r,u,s))}wb.exports=HC
});var _b=c(function(YY,kb){
var JC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Rb=yb(),QC=wi();JC(Rb,"ndarray",QC);kb.exports=Rb
});var yi=c(function(XY,Eb){
function UC(n,e,a,i,r){var u,v,s,o;for(u=a.data,v=a.accessors[1],s=r,o=0;o<n;o++)v(u,s,e),s+=i;return a}Eb.exports=UC
});var Fb=c(function(dY,Ob){
var WC=require('@stdlib/array/base/arraylike2object/dist'),$C=yi(),Ri=8;function hC(n,e,a,i){var r,u,v,s;if(n<=0)return a;if(s=WC(a),s.accessorProtocol)return i<0?r=(1-n)*i:r=0,$C(n,e,s,i,r),s.data;if(i===1){if(v=n%Ri,v>0)for(u=0;u<v;u++)a[u]=e;if(n<Ri)return a;for(u=v;u<n;u+=Ri)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}Ob.exports=hC
});var Tb=c(function(xY,Mb){
var YC=require('@stdlib/array/base/arraylike2object/dist'),XC=yi(),we=8;function dC(n,e,a,i,r){var u,v,s,o;if(n<=0)return a;if(s=YC(a),s.accessorProtocol)return XC(n,e,s,i,r),s.data;if(u=r,i===1){if(v=n%we,v>0)for(o=0;o<v;o++)a[u]=e,u+=i;if(n<we)return a;for(o=v;o<n;o+=we)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=we;return a}for(o=0;o<n;o++)a[u]=e,u+=i;return a}Mb.exports=dC
});var Pb=c(function(NY,Zb){
var xC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sb=Fb(),NC=Tb();xC(Sb,"ndarray",NC);Zb.exports=Sb
});var ki=c(function(rX,Ab){
function rG(n,e,a,i,r,u){var v,s,o,t,f;for(v=e.data,o=e.accessors[0],s=e.accessors[1],t=i,f=0;f<n;f++)s(v,t,r.call(u,o(v,t),f,t,e)),t+=a;return e}Ab.exports=rG
});var Bb=c(function(eX,Lb){
var eG=require('@stdlib/array/base/arraylike2object/dist'),aG=ki();function uG(n,e,a,i,r){var u,v,s;if(n<=0)return e;if(a<0?u=(1-n)*a:u=0,v=eG(e),v.accessorProtocol)return aG(n,v,a,u,i,r),v.data;for(s=0;s<n;s++)e[u]=i.call(r,e[u],s,u,e),u+=a;return e}Lb.exports=uG
});var Gb=c(function(aX,Cb){
var iG=require('@stdlib/array/base/arraylike2object/dist'),nG=ki();function vG(n,e,a,i,r,u){var v,s,o;if(n<=0)return e;if(s=iG(e),s.accessorProtocol)return nG(n,s,a,i,r,u),s.data;for(v=i,o=0;o<n;o++)e[v]=r.call(u,e[v],o,v,e),v+=a;return e}Cb.exports=vG
});var Vb=c(function(uX,Kb){
var sG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ib=Bb(),tG=Gb();sG(Ib,"ndarray",tG);Kb.exports=Ib
});var Jb=c(function(iX,Hb){
var zb=require('@stdlib/math/base/assert/is-nan/dist'),Db=require('@stdlib/math/base/special/abs/dist');function oG(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return zb(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],zb(o)===!1&&(t=u+o,Db(u)>=Db(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Hb.exports=oG
});var $b=c(function(nX,Wb){
var Qb=require('@stdlib/math/base/assert/is-nan/dist'),Ub=require('@stdlib/math/base/special/abs/dist');function fG(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Qb(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],Qb(f)===!1&&(q=s+f,Ub(s)>=Ub(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}Wb.exports=fG
});var Xb=c(function(vX,Yb){
var qG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hb=Jb(),cG=$b();qG(hb,"ndarray",cG);Yb.exports=hb
});var rw=c(function(sX,Nb){
var db=require('@stdlib/math/base/assert/is-nan/dist'),xb=require('@stdlib/math/base/special/abs/dist');function mG(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return db(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],db(u)===!1&&(v=i+u,xb(i)>=xb(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}Nb.exports=mG
});var iw=c(function(tX,uw){
var ew=require('@stdlib/math/base/assert/is-nan/dist'),aw=require('@stdlib/math/base/special/abs/dist');function lG(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return ew(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],ew(v)===!1&&(s=r+v,aw(r)>=aw(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}uw.exports=lG
});var ye=c(function(oX,vw){
var pG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nw=rw(),jG=iw();pG(nw,"ndarray",jG);vw.exports=nw
});var tw=c(function(fX,sw){
var gG=ye();function bG(n,e,a){return gG(n,e,a)}sw.exports=bG
});var fw=c(function(qX,ow){
var wG=ye().ndarray;function yG(n,e,a,i){return wG(n,e,a,i)}ow.exports=yG
});var mw=c(function(cX,cw){
var RG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qw=tw(),kG=fw();RG(qw,"ndarray",kG);cw.exports=qw
});var jw=c(function(mX,pw){
var lw=require('@stdlib/math/base/assert/is-nan/dist'),Re=require('@stdlib/math/base/special/abs/dist');function _G(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return lw(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],lw(o)===!1&&(t=i+o,Re(i)>=Re(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Re(v)>=Re(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}pw.exports=_G
});var ww=c(function(lX,bw){
var gw=require('@stdlib/math/base/assert/is-nan/dist'),ke=require('@stdlib/math/base/special/abs/dist');function EG(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return gw(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],gw(t)===!1&&(f=r+t,ke(r)>=ke(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,ke(s)>=ke(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}bw.exports=EG
});var kw=c(function(pX,Rw){
var OG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yw=jw(),FG=ww();OG(yw,"ndarray",FG);Rw.exports=yw
});var Ow=c(function(jX,Ew){
var _w=require('@stdlib/math/base/assert/is-nan/dist');function MG(n,e,a){var i,r,u;if(r=0,n<=0)return r;if(n===1||a===0)return _w(e[0])?r:e[0];for(a<0?i=(1-n)*a:i=0,u=0;u<n;u++)_w(e[i])===!1&&(r+=e[i]),i+=a;return r}Ew.exports=MG
});var Tw=c(function(gX,Mw){
var Fw=require('@stdlib/math/base/assert/is-nan/dist');function TG(n,e,a,i){var r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return Fw(e[i])?u:e[i];for(r=i,v=0;v<n;v++)Fw(e[r])===!1&&(u+=e[r]),r+=a;return u}Mw.exports=TG
});var Pw=c(function(bX,Zw){
var SG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sw=Ow(),ZG=Tw();SG(Sw,"ndarray",ZG);Zw.exports=Sw
});var Ei=c(function(wX,Aw){
var P=require('@stdlib/math/base/assert/is-nan/dist'),PG=require('@stdlib/math/base/special/floor/dist'),AG=128;function _i(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return P(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=AG){for(u=P(e[r])?0:e[r],r+=a,v=P(e[r])?0:e[r],r+=a,s=P(e[r])?0:e[r],r+=a,o=P(e[r])?0:e[r],r+=a,t=P(e[r])?0:e[r],r+=a,f=P(e[r])?0:e[r],r+=a,q=P(e[r])?0:e[r],r+=a,m=P(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=P(e[r])?0:e[r],r+=a,v+=P(e[r])?0:e[r],r+=a,s+=P(e[r])?0:e[r],r+=a,o+=P(e[r])?0:e[r],r+=a,t+=P(e[r])?0:e[r],r+=a,f+=P(e[r])?0:e[r],r+=a,q+=P(e[r])?0:e[r],r+=a,m+=P(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=PG(n/2),j-=j%8,_i(j,e,a,r)+_i(n-j,e,a,r+j*a)}Aw.exports=_i
});var Cw=c(function(yX,Bw){
var Lw=require('@stdlib/math/base/assert/is-nan/dist'),LG=Ei();function BG(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Lw(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Lw(e[i])===!1&&(r+=e[i]),i+=a;return r}return LG(n,e,a,i)}Bw.exports=BG
});var Kw=c(function(RX,Iw){
var CG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gw=Cw(),GG=Ei();CG(Gw,"ndarray",GG);Iw.exports=Gw
});var Oi=c(function(kX,Vw){
var IG=require('@stdlib/math/base/special/floor/dist');function KG(n,e,a,i){var r,u,v,s,o,t,f,q;for(r=e.data,v=e.accessors[0],u=e.accessors[1],f=IG(n/2),o=i,t=o+(n-1)*a,q=0;q<f;q++)s=v(r,o),u(r,o,v(r,t)),u(r,t,s),o+=a,t-=a;return e}Vw.exports=KG
});var Dw=c(function(_X,zw){
var VG=require('@stdlib/math/base/special/floor/dist'),zG=require('@stdlib/array/base/arraylike2object/dist'),DG=Oi(),_e=3;function HG(n,e,a){var i,r,u,v,s,o,t;if(n<=0)return e;if(v=zG(e),v.accessorProtocol)return a<0?r=(1-n)*a:r=0,DG(n,v,a,r),v.data;if(o=VG(n/2),a===1){if(s=o%_e,u=n-1,s>0)for(r=0;r<s;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(o<_e)return e;for(r=s;r<o;r+=_e)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=_e;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,t=0;t<o;t++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}zw.exports=HG
});var Jw=c(function(EX,Hw){
var JG=require('@stdlib/math/base/special/floor/dist'),QG=require('@stdlib/array/base/arraylike2object/dist'),UG=Oi(),Fr=3;function WG(n,e,a,i){var r,u,v,s,o,t,f;if(n<=0)return e;if(s=QG(e),s.accessorProtocol)return UG(n,s,a,i),s.data;if(t=JG(n/2),u=i,a===1){if(o=t%Fr,v=u+n-1,o>0)for(f=0;f<o;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(t<Fr)return e;for(f=o;f<t;f+=Fr)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Fr,v-=Fr;return e}for(v=u+(n-1)*a,f=0;f<t;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}Hw.exports=WG
});var Ww=c(function(OX,Uw){
var $G=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qw=Dw(),hG=Jw();$G(Qw,"ndarray",hG);Uw.exports=Qw
});var Xw=c(function(FX,Yw){
var $w=require('@stdlib/math/base/assert/is-positive-zero/dist'),hw=require('@stdlib/math/base/assert/is-nan/dist'),YG=require('@stdlib/math/base/special/floor/dist');function XG(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=YG(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||hw(f)||f===q&&$w(f))&&(t+=1)),f=a[v+t*i],f>m||hw(f)||f===m&&$w(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}Yw.exports=XG
});var ry=c(function(MX,Nw){
var dw=require('@stdlib/math/base/assert/is-positive-zero/dist'),xw=require('@stdlib/math/base/assert/is-nan/dist'),dG=require('@stdlib/math/base/special/floor/dist');function xG(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=dG(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||xw(f)||f===q&&dw(f))&&(t+=1)),f=a[r+t*i],f>m||xw(f)||f===m&&dw(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}Nw.exports=xG
});var uy=c(function(TX,ay){
var NG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ey=Xw(),rI=ry();NG(ey,"ndarray",rI);ay.exports=ey
});var vy=c(function(SX,ny){
var Ee=require('@stdlib/math/base/assert/is-negative-zero/dist'),iy=require('@stdlib/math/base/assert/is-nan/dist');function eI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],iy(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=Ee(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&Ee(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],iy(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=Ee(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&Ee(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}ny.exports=eI
});var oy=c(function(ZX,ty){
var Oe=require('@stdlib/math/base/assert/is-negative-zero/dist'),sy=require('@stdlib/math/base/assert/is-nan/dist');function aI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],sy(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=Oe(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Oe(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],sy(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=Oe(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Oe(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}ty.exports=aI
});var cy=c(function(PX,qy){
var uI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),fy=vy(),iI=oy();uI(fy,"ndarray",iI);qy.exports=fy
});var Fi=c(function(AX,nI){nI.exports=[701,301,132,57,23,10,4,1]});var py=c(function(LX,ly){
var vI=require('@stdlib/math/base/assert/is-negative-zero/dist'),sI=require('@stdlib/math/base/assert/is-nan/dist'),my=Fi(),tI=my.length;function oI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<tI;p++)for(t=my[p],l=t;l<n;l++)if(f=a[v+l*i],!sI(f)){for(q=r[s+l*u],o=vI(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}ly.exports=oI
});var by=c(function(BX,gy){
var fI=require('@stdlib/math/base/assert/is-negative-zero/dist'),qI=require('@stdlib/math/base/assert/is-nan/dist'),jy=Fi(),cI=jy.length;function mI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<cI;p++)for(t=jy[p],l=t;l<n;l++)if(f=a[r+l*i],!qI(f)){for(q=u[s+l*v],o=fI(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}gy.exports=mI
});var Ry=c(function(CX,yy){
var lI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wy=py(),pI=by();lI(wy,"ndarray",pI);yy.exports=wy
});var Oy=c(function(GX,Ey){
var ky=require('@stdlib/math/base/assert/is-positive-zero/dist'),_y=require('@stdlib/math/base/assert/is-nan/dist'),jI=require('@stdlib/math/base/special/floor/dist');function gI(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=jI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||_y(s)||s===o&&ky(s))&&(v+=1)),s=a[r+v*i],s>f||_y(s)||s===f&&ky(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Ey.exports=gI
});var Sy=c(function(IX,Ty){
var Fy=require('@stdlib/math/base/assert/is-positive-zero/dist'),My=require('@stdlib/math/base/assert/is-nan/dist'),bI=require('@stdlib/math/base/special/floor/dist');function wI(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=bI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||My(s)||s===o&&Fy(s))&&(v+=1)),s=a[r+v*i],s>f||My(s)||s===f&&Fy(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Ty.exports=wI
});var Ay=c(function(KX,Py){
var yI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Zy=Oy(),RI=Sy();yI(Zy,"ndarray",RI);Py.exports=Zy
});var Cy=c(function(VX,By){
var Fe=require('@stdlib/math/base/assert/is-negative-zero/dist'),Ly=require('@stdlib/math/base/assert/is-nan/dist');function kI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],Ly(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Fe(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Fe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],Ly(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Fe(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Fe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}By.exports=kI
});var Ky=c(function(zX,Iy){
var Me=require('@stdlib/math/base/assert/is-negative-zero/dist'),Gy=require('@stdlib/math/base/assert/is-nan/dist');function _I(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],Gy(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Me(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Me(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],Gy(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Me(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Me(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}Iy.exports=_I
});var Dy=c(function(DX,zy){
var EI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Vy=Cy(),OI=Ky();EI(Vy,"ndarray",OI);zy.exports=Vy
});var Mi=c(function(HX,FI){FI.exports=[701,301,132,57,23,10,4,1]});var Qy=c(function(JX,Jy){
var MI=require('@stdlib/math/base/assert/is-negative-zero/dist'),TI=require('@stdlib/math/base/assert/is-nan/dist'),Hy=Mi(),SI=Hy.length;function ZI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<SI;t++)for(v=Hy[t],f=v;f<n;f++)if(s=a[r+f*i],!TI(s)){for(u=MI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}Jy.exports=ZI
});var $y=c(function(QX,Wy){
var PI=require('@stdlib/math/base/assert/is-negative-zero/dist'),AI=require('@stdlib/math/base/assert/is-nan/dist'),Uy=Mi(),LI=Uy.length;function BI(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<LI;t++)for(v=Uy[t],f=v;f<n;f++)if(s=a[r+f*i],!AI(s)){for(u=PI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}Wy.exports=BI
});var Xy=c(function(UX,Yy){
var CI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hy=Qy(),GI=$y();CI(hy,"ndarray",GI);Yy.exports=hy
});var Ny=c(function(WX,xy){
var dy=require('@stdlib/math/base/special/abs/dist');function II(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,dy(i)>=dy(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}xy.exports=II
});var aR=c(function($X,eR){
var rR=require('@stdlib/math/base/special/abs/dist');function KI(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,rR(r)>=rR(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}eR.exports=KI
});var Te=c(function(hX,iR){
var VI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),uR=Ny(),zI=aR();VI(uR,"ndarray",zI);iR.exports=uR
});var vR=c(function(YX,nR){
var DI=Te();function HI(n,e,a){return DI(n,e,a)}nR.exports=HI
});var tR=c(function(XX,sR){
var JI=Te().ndarray;function QI(n,e,a,i){return JI(n,e,a,i)}sR.exports=QI
});var qR=c(function(dX,fR){
var UI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),oR=vR(),WI=tR();UI(oR,"ndarray",WI);fR.exports=oR
});var mR=c(function(xX,cR){
var Se=require('@stdlib/math/base/special/abs/dist');function $I(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,Se(i)>=Se(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Se(v)>=Se(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}cR.exports=$I
});var pR=c(function(NX,lR){
var Ze=require('@stdlib/math/base/special/abs/dist');function hI(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,Ze(r)>=Ze(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Ze(s)>=Ze(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}lR.exports=hI
});var bR=c(function(rd,gR){
var YI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jR=mR(),XI=pR();YI(jR,"ndarray",XI);gR.exports=jR
});var yR=c(function(ed,wR){
var Ti=6;function dI(n,e,a){var i,r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return e[0];if(a===1){if(r=n%Ti,r>0)for(v=0;v<r;v++)u+=e[v];if(n<Ti)return u;for(v=r;v<n;v+=Ti)u+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return u}for(a<0?i=(1-n)*a:i=0,v=0;v<n;v++)u+=e[i],i+=a;return u}wR.exports=dI
});var kR=c(function(ad,RR){
var Pe=6;function xI(n,e,a,i){var r,u,v,s;if(v=0,n<=0)return v;if(n===1||a===0)return e[i];if(r=i,a===1){if(u=n%Pe,u>0)for(s=0;s<u;s++)v+=e[r],r+=a;if(n<Pe)return v;for(s=u;s<n;s+=Pe)v+=e[r]+e[r+1]+e[r+2]+e[r+3]+e[r+4]+e[r+5],r+=Pe;return v}for(s=0;s<n;s++)v+=e[r],r+=a;return v}RR.exports=xI
});var OR=c(function(ud,ER){
var NI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_R=yR(),rK=kR();NI(_R,"ndarray",rK);ER.exports=_R
});var Zi=c(function(id,FR){
var eK=require('@stdlib/math/base/special/floor/dist'),aK=128;function Si(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=aK){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=eK(n/2),j-=j%8,Si(j,e,a,r)+Si(n-j,e,a,r+j*a)}FR.exports=Si
});var TR=c(function(nd,MR){
var uK=Zi();function iK(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return uK(n,e,a,i)}MR.exports=iK
});var PR=c(function(vd,ZR){
var nK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),SR=TR(),vK=Zi();nK(SR,"ndarray",vK);ZR.exports=SR
});var LR=c(function(sd,AR){
var Pi=5;function sK(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%Pi,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<Pi)return a;for(u=v;u<n;u+=Pi)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}AR.exports=sK
});var CR=c(function(td,BR){
var Ae=5;function tK(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Ae,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Ae)return a;for(s=v;s<n;s+=Ae)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Ae;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}BR.exports=tK
});var KR=c(function(od,IR){
var oK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),GR=LR(),fK=CR();oK(GR,"ndarray",fK);IR.exports=GR
});var DR=c(function(fd,zR){
var qK=require("path").join,cK=require('@stdlib/utils/try-require/dist'),mK=require('@stdlib/assert/is-error/dist'),lK=KR(),Ai,VR=cK(qK(__dirname,"./native.js"));mK(VR)?Ai=lK:Ai=VR;zR.exports=Ai
});var QR=c(function(qd,JR){
var W=require('@stdlib/number/float64/base/to-float32/dist'),HR=require('@stdlib/math/base/special/abs/dist');function pK(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return W(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=W(e+a[u]),s=W(r+v),HR(r)>=HR(v)?o=W(o+W(W(r-s)+v)):o=W(o+W(W(v-s)+r)),r=s,u+=i;return W(r+o)}JR.exports=pK
});var $R=c(function(cd,WR){
var $=require('@stdlib/number/float64/base/to-float32/dist'),UR=require('@stdlib/math/base/special/abs/dist');function jK(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return $(e+a[r]);for(v=r,u=0,t=0,f=0;f<n;f++)s=$(e+a[v]),o=$(u+s),UR(u)>=UR(s)?t=$(t+$($(u-o)+s)):t=$(t+$($(s-o)+u)),u=o,v+=i;return $(u+t)}WR.exports=jK
});var XR=c(function(md,YR){
var gK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hR=QR(),bK=$R();gK(hR,"ndarray",bK);YR.exports=hR
});var Le=c(function(ld,xR){
var wK=require("path").join,yK=require('@stdlib/utils/try-require/dist'),RK=require('@stdlib/assert/is-error/dist'),kK=XR(),Li,dR=yK(wK(__dirname,"./native.js"));RK(dR)?Li=kK:Li=dR;xR.exports=Li
});var rk=c(function(pd,NR){
var _K=Le();function EK(n,e,a,i){return _K(n,e,a,i)}NR.exports=EK
});var ak=c(function(jd,ek){
var OK=Le().ndarray;function FK(n,e,a,i,r){return OK(n,e,a,i,r)}ek.exports=FK
});var nk=c(function(gd,ik){
var MK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),uk=rk(),TK=ak();MK(uk,"ndarray",TK);ik.exports=uk
});var tk=c(function(bd,sk){
var SK=require("path").join,ZK=require('@stdlib/utils/try-require/dist'),PK=require('@stdlib/assert/is-error/dist'),AK=nk(),Bi,vk=ZK(SK(__dirname,"./native.js"));PK(vk)?Bi=AK:Bi=vk;sk.exports=Bi
});var fk=c(function(wd,ok){
var K=require('@stdlib/number/float64/base/to-float32/dist'),Be=require('@stdlib/math/base/special/abs/dist');function LK(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return K(e+a[0]);for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=K(e+a[v]),f=K(r+t),Be(r)>=Be(t)?q=K(K(r-f)+t):q=K(K(t-f)+r),r=f,f=K(s+q),Be(s)>=Be(q)?o=K(K(s-f)+q):o=K(K(q-f)+s),s=f,u=K(u+o),v+=i;return K(r+K(s+u))}ok.exports=LK
});var ck=c(function(yd,qk){
var V=require('@stdlib/number/float64/base/to-float32/dist'),Ce=require('@stdlib/math/base/special/abs/dist');function BK(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return V(e+a[r]);for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=V(e+a[s]),q=V(u+f),Ce(u)>=Ce(f)?m=V(V(u-q)+f):m=V(V(f-q)+u),u=q,q=V(o+m),Ce(o)>=Ce(m)?t=V(V(o-q)+m):t=V(V(m-q)+o),o=q,v=V(v+t),s+=i;return V(u+V(o+v))}qk.exports=BK
});var pk=c(function(Rd,lk){
var CK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mk=fk(),GK=ck();CK(mk,"ndarray",GK);lk.exports=mk
});var bk=c(function(kd,gk){
var IK=require("path").join,KK=require('@stdlib/utils/try-require/dist'),VK=require('@stdlib/assert/is-error/dist'),zK=pk(),Ci,jk=KK(IK(__dirname,"./native.js"));VK(jk)?Ci=zK:Ci=jk;gk.exports=Ci
});var yk=c(function(_d,wk){
var Gi=require('@stdlib/number/float64/base/to-float32/dist');function DK(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Gi(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r=Gi(r+Gi(e+a[u])),u+=i;return r}wk.exports=DK
});var kk=c(function(Ed,Rk){
var Ii=require('@stdlib/number/float64/base/to-float32/dist');function HK(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return Ii(e+a[0]);for(v=r,u=0,s=0;s<n;s++)u=Ii(u+Ii(e+a[v])),v+=i;return u}Rk.exports=HK
});var Ok=c(function(Od,Ek){
var JK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_k=yk(),QK=kk();JK(_k,"ndarray",QK);Ek.exports=_k
});var Tk=c(function(Fd,Mk){
var UK=require("path").join,WK=require('@stdlib/utils/try-require/dist'),$K=require('@stdlib/assert/is-error/dist'),hK=Ok(),Ki,Fk=WK(UK(__dirname,"./native.js"));$K(Fk)?Ki=hK:Ki=Fk;Mk.exports=Ki
});var zi=c(function(Md,Sk){
var E=require('@stdlib/number/float64/base/to-float32/dist'),YK=require('@stdlib/math/base/special/floor/dist'),XK=128;function Vi(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return E(e+a[r]);if(u=r,n<8){for(j=0,b=0;b<n;b++)j=E(j+E(e+a[u])),u+=i;return j}if(n<=XK){for(v=E(e+a[u]),s=E(e+a[u+i]),o=E(e+a[u+2*i]),t=E(e+a[u+3*i]),f=E(e+a[u+4*i]),q=E(e+a[u+5*i]),m=E(e+a[u+6*i]),p=E(e+a[u+7*i]),u+=8*i,l=n%8,b=8;b<n-l;b+=8)v=E(v+E(e+a[u])),s=E(s+E(e+a[u+i])),o=E(o+E(e+a[u+2*i])),t=E(t+E(e+a[u+3*i])),f=E(f+E(e+a[u+4*i])),q=E(q+E(e+a[u+5*i])),m=E(m+E(e+a[u+6*i])),p=E(p+E(e+a[u+7*i])),u+=8*i;for(j=E(E(E(v+s)+E(o+t))+E(E(f+q)+E(m+p))),b;b<n;b++)j=E(j+E(e+a[u])),u+=i;return j}return g=YK(n/2),g-=g%8,E(Vi(g,e,a,i,u)+Vi(n-g,e,a,i,u+g*i))}Sk.exports=Vi
});var Pk=c(function(Td,Zk){
var Di=require('@stdlib/number/float64/base/to-float32/dist'),dK=zi();function xK(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Di(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u=Di(u+Di(e+a[r])),r+=i;return u}return dK(n,e,a,i,r)}Zk.exports=xK
});var Bk=c(function(Sd,Lk){
var NK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ak=Pk(),rV=zi();NK(Ak,"ndarray",rV);Lk.exports=Ak
});var Ik=c(function(Zd,Gk){
var eV=require("path").join,aV=require('@stdlib/utils/try-require/dist'),uV=require('@stdlib/assert/is-error/dist'),iV=Bk(),Hi,Ck=aV(eV(__dirname,"./native.js"));uV(Ck)?Hi=iV:Hi=Ck;Gk.exports=Hi
});var Qi=c(function(Pd,Kk){
var C=require('@stdlib/number/float64/base/to-float32/dist'),nV=require('@stdlib/math/base/special/floor/dist'),A=require('@stdlib/math/base/special/abs/dist'),vV=128;function Ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return A(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l=C(l+A(e[r])),r+=a;return l}if(n<=vV){for(u=A(e[r]),v=A(e[r+a]),s=A(e[r+2*a]),o=A(e[r+3*a]),t=A(e[r+4*a]),f=A(e[r+5*a]),q=A(e[r+6*a]),m=A(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u=C(u+A(e[r])),v=C(v+A(e[r+a])),s=C(s+A(e[r+2*a])),o=C(o+A(e[r+3*a])),t=C(t+A(e[r+4*a])),f=C(f+A(e[r+5*a])),q=C(q+A(e[r+6*a])),m=C(m+A(e[r+7*a])),r+=8*a;for(l=C(C(C(u+v)+C(s+o))+C(C(t+f)+C(q+m))),g;g<n;g++)l=C(l+A(e[r])),r+=a;return l}return j=nV(n/2),j-=j%8,C(Ji(j,e,a,r)+Ji(n-j,e,a,r+j*a))}Kk.exports=Ji
});var Dk=c(function(Ad,zk){
var sV=require('@stdlib/number/float64/base/to-float32/dist'),Vk=require('@stdlib/math/base/special/abs/dist'),tV=Qi();function oV(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Vk(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=sV(r+Vk(e[i])),i+=a;return r}return tV(n,e,a,i)}zk.exports=oV
});var Qk=c(function(Ld,Jk){
var fV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hk=Dk(),qV=Qi();fV(Hk,"ndarray",qV);Jk.exports=Hk
});var $k=c(function(Bd,Wk){
var cV=require("path").join,mV=require('@stdlib/utils/try-require/dist'),lV=require('@stdlib/assert/is-error/dist'),pV=Qk(),Ui,Uk=mV(cV(__dirname,"./native.js"));lV(Uk)?Ui=pV:Ui=Uk;Wk.exports=Ui
});var Xk=c(function(Cd,Yk){
var ur=require('@stdlib/number/float64/base/to-float32/dist'),hk=require('@stdlib/math/base/special/abs/dist');function jV(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=ur(o+t),hk(o)>=hk(t)?q=ur(q+ur(ur(o-f)+t)):q=ur(q+ur(ur(t-f)+o)),o=f,r[s]=ur(o+q),v+=i,s+=u;return r}Yk.exports=jV
});var Nk=c(function(Gd,xk){
var ir=require('@stdlib/number/float64/base/to-float32/dist'),dk=require('@stdlib/math/base/special/abs/dist');function gV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=ir(f+q),dk(f)>=dk(q)?p=ir(p+ir(ir(f-m)+q)):p=ir(p+ir(ir(q-m)+f)),f=m,u[t]=ir(f+p),o+=i,t+=v;return u}xk.exports=gV
});var a3=c(function(Id,e3){
var bV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),r3=Xk(),wV=Nk();bV(r3,"ndarray",wV);e3.exports=r3
});var Ge=c(function(Kd,i3){
var yV=require("path").join,RV=require('@stdlib/utils/try-require/dist'),kV=require('@stdlib/assert/is-error/dist'),_V=a3(),Wi,u3=RV(yV(__dirname,"./native.js"));kV(u3)?Wi=_V:Wi=u3;i3.exports=Wi
});var v3=c(function(Vd,n3){
var EV=Ge();function OV(n,e,a,i,r,u){return EV(n,e,a,i,r,u)}n3.exports=OV
});var t3=c(function(zd,s3){
var FV=Ge().ndarray;function MV(n,e,a,i,r,u,v,s){return FV(n,e,a,i,r,u,v,s)}s3.exports=MV
});var q3=c(function(Dd,f3){
var TV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),o3=v3(),SV=t3();TV(o3,"ndarray",SV);f3.exports=o3
});var l3=c(function(Hd,m3){
var ZV=require("path").join,PV=require('@stdlib/utils/try-require/dist'),AV=require('@stdlib/assert/is-error/dist'),LV=q3(),$i,c3=PV(ZV(__dirname,"./native.js"));AV(c3)?$i=LV:$i=c3;m3.exports=$i
});var j3=c(function(Jd,p3){
var z=require('@stdlib/number/float64/base/to-float32/dist'),Ie=require('@stdlib/math/base/special/abs/dist');function BV(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=z(e+q),Ie(e)>=Ie(q)?p=z(z(e-m)+q):p=z(z(q-m)+e),e=m,m=z(t+p),Ie(t)>=Ie(p)?f=z(z(t-m)+p):f=z(z(p-m)+t),t=m,v=z(v+f),r[o]=z(e+z(t+v)),s+=i,o+=u;return r}p3.exports=BV
});var b3=c(function(Qd,g3){
var D=require('@stdlib/number/float64/base/to-float32/dist'),Ke=require('@stdlib/math/base/special/abs/dist');function CV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=D(e+p),Ke(e)>=Ke(p)?j=D(D(e-l)+p):j=D(D(p-l)+e),e=l,l=D(q+j),Ke(q)>=Ke(j)?m=D(D(q-l)+j):m=D(D(j-l)+q),q=l,o=D(o+m),u[f]=D(e+D(q+o)),t+=i,f+=v;return u}g3.exports=CV
});var R3=c(function(Ud,y3){
var GV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),w3=j3(),IV=b3();GV(w3,"ndarray",IV);y3.exports=w3
});var E3=c(function(Wd,_3){
var KV=require("path").join,VV=require('@stdlib/utils/try-require/dist'),zV=require('@stdlib/assert/is-error/dist'),DV=R3(),hi,k3=VV(KV(__dirname,"./native.js"));zV(k3)?hi=DV:hi=k3;_3.exports=hi
});var F3=c(function($d,O3){
var HV=require('@stdlib/number/float64/base/to-float32/dist');function JV(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e=HV(e+a[v]),r[s]=e,v+=i,s+=u;return r}O3.exports=JV
});var T3=c(function(hd,M3){
var QV=require('@stdlib/number/float64/base/to-float32/dist');function UV(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e=QV(e+a[o]),u[t]=e,o+=i,t+=v;return u}M3.exports=UV
});var P3=c(function(Yd,Z3){
var WV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),S3=F3(),$V=T3();WV(S3,"ndarray",$V);Z3.exports=S3
});var B3=c(function(Xd,L3){
var hV=require("path").join,YV=require('@stdlib/utils/try-require/dist'),XV=require('@stdlib/assert/is-error/dist'),dV=P3(),Yi,A3=YV(hV(__dirname,"./native.js"));XV(A3)?Yi=dV:Yi=A3;L3.exports=Yi
});var di=c(function(dd,G3){
var C3=require('@stdlib/number/float64/base/to-float32/dist'),xV=require('@stdlib/math/base/special/floor/dist'),NV=128;function Xi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=NV){for(f=0,m=0;m<n;m++)f=C3(f+a[o]),u[t]=C3(e+f),o+=i,t+=v;return u}return q=xV(n/2),Xi(q,e,a,i,o,u,v,t),t+=(q-1)*v,Xi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}G3.exports=Xi
});var K3=c(function(xd,I3){
var rz=di();function ez(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,rz(n,e,a,i,v,r,u,s))}I3.exports=ez
});var D3=c(function(Nd,z3){
var az=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),V3=K3(),uz=di();az(V3,"ndarray",uz);z3.exports=V3
});var Q3=c(function(rx,J3){
var iz=require("path").join,nz=require('@stdlib/utils/try-require/dist'),vz=require('@stdlib/assert/is-error/dist'),sz=D3(),xi,H3=nz(iz(__dirname,"./native.js"));vz(H3)?xi=sz:xi=H3;J3.exports=xi
});var rn=c(function(ex,U3){
var Ve=require('@stdlib/number/float64/base/to-float32/dist'),tz=require('@stdlib/math/base/special/floor/dist'),oz=128;function Ni(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return Ve(e+a[r]);if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return Ve(j)}if(n<=oz){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return Ve(j)}return g=tz(n/2),g-=g%8,Ve(Ni(g,e,a,i,u)+Ni(n-g,e,a,i,u+g*i))}U3.exports=Ni
});var h3=c(function(ax,$3){
var W3=require('@stdlib/number/float64/base/to-float32/dist'),fz=rn();function qz(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return W3(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return W3(u)}return fz(n,e,a,i,r)}$3.exports=qz
});var d3=c(function(ux,X3){
var cz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Y3=h3(),mz=rn();cz(Y3,"ndarray",mz);X3.exports=Y3
});var ze=c(function(ix,N3){
var lz=require("path").join,pz=require('@stdlib/utils/try-require/dist'),jz=require('@stdlib/assert/is-error/dist'),gz=d3(),en,x3=pz(lz(__dirname,"./native.js"));jz(x3)?en=gz:en=x3;N3.exports=en
});var e_=c(function(nx,r_){
var bz=ze();function wz(n,e,a,i){return bz(n,e,a,i)}r_.exports=wz
});var u_=c(function(vx,a_){
var yz=ze().ndarray;function Rz(n,e,a,i,r){return yz(n,e,a,i,r)}a_.exports=Rz
});var v_=c(function(sx,n_){
var kz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),i_=e_(),_z=u_();kz(i_,"ndarray",_z);n_.exports=i_
});var o_=c(function(tx,t_){
var Ez=require("path").join,Oz=require('@stdlib/utils/try-require/dist'),Fz=require('@stdlib/assert/is-error/dist'),Mz=v_(),an,s_=Oz(Ez(__dirname,"./native.js"));Fz(s_)?an=Mz:an=s_;t_.exports=an
});var vn=c(function(ox,f_){
var un=require('@stdlib/number/float64/base/to-float32/dist'),L=require('@stdlib/math/base/assert/is-nanf/dist'),Tz=require('@stdlib/math/base/special/floor/dist'),Sz=128;function nn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return L(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)L(e[r])===!1&&(l+=e[r]),r+=a;return un(l)}if(n<=Sz){for(u=L(e[r])?0:e[r],r+=a,v=L(e[r])?0:e[r],r+=a,s=L(e[r])?0:e[r],r+=a,o=L(e[r])?0:e[r],r+=a,t=L(e[r])?0:e[r],r+=a,f=L(e[r])?0:e[r],r+=a,q=L(e[r])?0:e[r],r+=a,m=L(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=L(e[r])?0:e[r],r+=a,v+=L(e[r])?0:e[r],r+=a,s+=L(e[r])?0:e[r],r+=a,o+=L(e[r])?0:e[r],r+=a,t+=L(e[r])?0:e[r],r+=a,f+=L(e[r])?0:e[r],r+=a,q+=L(e[r])?0:e[r],r+=a,m+=L(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)L(e[r])===!1&&(l+=e[r]),r+=a;return un(l)}return j=Tz(n/2),j-=j%8,un(nn(j,e,a,r)+nn(n-j,e,a,r+j*a))}f_.exports=nn
});var m_=c(function(fx,c_){
var Zz=require('@stdlib/number/float64/base/to-float32/dist'),q_=require('@stdlib/math/base/assert/is-nanf/dist'),Pz=vn();function Az(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return q_(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)q_(e[i])===!1&&(r+=e[i]),i+=a;return Zz(r)}return Pz(n,e,a,i)}c_.exports=Az
});var j_=c(function(qx,p_){
var Lz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),l_=m_(),Bz=vn();Lz(l_,"ndarray",Bz);p_.exports=l_
});var De=c(function(cx,b_){
var Cz=require("path").join,Gz=require('@stdlib/utils/try-require/dist'),Iz=require('@stdlib/assert/is-error/dist'),Kz=j_(),sn,g_=Gz(Cz(__dirname,"./native.js"));Iz(g_)?sn=Kz:sn=g_;b_.exports=sn
});var y_=c(function(mx,w_){
var Vz=De();function zz(n,e,a){return Vz(n,e,a)}w_.exports=zz
});var k_=c(function(lx,R_){
var Dz=De().ndarray;function Hz(n,e,a,i){return Dz(n,e,a,i)}R_.exports=Hz
});var O_=c(function(px,E_){
var Jz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),__=y_(),Qz=k_();Jz(__,"ndarray",Qz);E_.exports=__
});var T_=c(function(jx,M_){
var Uz=require("path").join,Wz=require('@stdlib/utils/try-require/dist'),$z=require('@stdlib/assert/is-error/dist'),hz=O_(),tn,F_=Wz(Uz(__dirname,"./native.js"));$z(F_)?tn=hz:tn=F_;M_.exports=tn
});var qn=c(function(gx,S_){
var on=require('@stdlib/number/float64/base/to-float32/dist'),Yz=require('@stdlib/math/base/special/floor/dist'),Xz=128;function fn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return on(l)}if(n<=Xz){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return on(l)}return j=Yz(n/2),j-=j%8,on(fn(j,e,a,r)+fn(n-j,e,a,r+j*a))}S_.exports=fn
});var P_=c(function(bx,Z_){
var dz=require('@stdlib/number/float64/base/to-float32/dist'),xz=qn();function Nz(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return dz(r)}return xz(n,e,a,i)}Z_.exports=Nz
});var B_=c(function(wx,L_){
var rD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),A_=P_(),eD=qn();rD(A_,"ndarray",eD);L_.exports=A_
});var He=c(function(yx,G_){
var aD=require("path").join,uD=require('@stdlib/utils/try-require/dist'),iD=require('@stdlib/assert/is-error/dist'),nD=B_(),cn,C_=uD(aD(__dirname,"./native.js"));iD(C_)?cn=nD:cn=C_;G_.exports=cn
});var K_=c(function(Rx,I_){
var vD=He();function sD(n,e,a){return vD(n,e,a)}I_.exports=sD
});var z_=c(function(kx,V_){
var tD=He().ndarray;function oD(n,e,a,i){return tD(n,e,a,i)}V_.exports=oD
});var J_=c(function(_x,H_){
var fD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),D_=K_(),qD=z_();fD(D_,"ndarray",qD);H_.exports=D_
});var W_=c(function(Ex,U_){
var cD=require("path").join,mD=require('@stdlib/utils/try-require/dist'),lD=require('@stdlib/assert/is-error/dist'),pD=J_(),mn,Q_=mD(cD(__dirname,"./native.js"));lD(Q_)?mn=pD:mn=Q_;U_.exports=mn
});var h_=c(function(Ox,$_){
var ln=8;function jD(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ln,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ln)return a;for(u=v;u<n;u+=ln)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}$_.exports=jD
});var X_=c(function(Fx,Y_){
var Je=8;function gD(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%Je,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<Je)return a;for(s=v;s<n;s+=Je)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=Je;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}Y_.exports=gD
});var N_=c(function(Mx,x_){
var bD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),d_=h_(),wD=X_();bD(d_,"ndarray",wD);x_.exports=d_
});var a4=c(function(Tx,e4){
var yD=require("path").join,RD=require('@stdlib/utils/try-require/dist'),kD=require('@stdlib/assert/is-error/dist'),_D=N_(),pn,r4=RD(yD(__dirname,"./native.js"));kD(r4)?pn=_D:pn=r4;e4.exports=pn
});var v4=c(function(Sx,n4){
var tr=require('@stdlib/number/float64/base/to-float32/dist'),u4=require('@stdlib/math/base/assert/is-nanf/dist'),i4=require('@stdlib/math/base/special/abs/dist');function ED(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return u4(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],u4(u)===!1&&(v=i+u,i4(i)>=i4(u)?s=tr(s+tr(tr(i-v)+u)):s=tr(s+tr(tr(u-v)+i)),i=v),r+=a;return tr(i+s)}n4.exports=ED
});var f4=c(function(Zx,o4){
var or=require('@stdlib/number/float64/base/to-float32/dist'),s4=require('@stdlib/math/base/assert/is-nanf/dist'),t4=require('@stdlib/math/base/special/abs/dist');function OD(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return s4(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s4(v)===!1&&(s=r+v,t4(r)>=t4(v)?o=or(o+or(or(r-s)+v)):o=or(o+or(or(v-s)+r)),r=s),u+=a;return or(r+o)}o4.exports=OD
});var m4=c(function(Px,c4){
var FD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),q4=v4(),MD=f4();FD(q4,"ndarray",MD);c4.exports=q4
});var Qe=c(function(Ax,p4){
var TD=require("path").join,SD=require('@stdlib/utils/try-require/dist'),ZD=require('@stdlib/assert/is-error/dist'),PD=m4(),jn,l4=SD(TD(__dirname,"./native.js"));ZD(l4)?jn=PD:jn=l4;p4.exports=jn
});var g4=c(function(Lx,j4){
var AD=Qe();function LD(n,e,a){return AD(n,e,a)}j4.exports=LD
});var w4=c(function(Bx,b4){
var BD=Qe().ndarray;function CD(n,e,a,i){return BD(n,e,a,i)}b4.exports=CD
});var k4=c(function(Cx,R4){
var GD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),y4=g4(),ID=w4();GD(y4,"ndarray",ID);R4.exports=y4
});var O4=c(function(Gx,E4){
var KD=require("path").join,VD=require('@stdlib/utils/try-require/dist'),zD=require('@stdlib/assert/is-error/dist'),DD=k4(),gn,_4=VD(KD(__dirname,"./native.js"));zD(_4)?gn=DD:gn=_4;E4.exports=gn
});var T4=c(function(Ix,M4){
var H=require('@stdlib/number/float64/base/to-float32/dist'),F4=require('@stdlib/math/base/assert/is-nanf/dist'),Ue=require('@stdlib/math/base/special/abs/dist');function HD(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return F4(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],F4(o)===!1&&(t=H(i+o),Ue(i)>=Ue(o)?f=H(H(i-t)+o):f=H(H(o-t)+i),i=t,t=H(v+f),Ue(v)>=Ue(f)?s=H(H(v-t)+f):s=H(H(f-t)+v),v=t,r=H(r+s)),u+=a;return H(i+H(v+r))}M4.exports=HD
});var P4=c(function(Kx,Z4){
var J=require('@stdlib/number/float64/base/to-float32/dist'),S4=require('@stdlib/math/base/assert/is-nanf/dist'),We=require('@stdlib/math/base/special/abs/dist');function JD(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return S4(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],S4(t)===!1&&(f=J(r+t),We(r)>=We(t)?q=J(J(r-f)+t):q=J(J(t-f)+r),r=f,f=J(s+q),We(s)>=We(q)?o=J(J(s-f)+q):o=J(J(q-f)+s),s=f,u=J(u+o)),v+=a;return J(r+J(s+u))}Z4.exports=JD
});var B4=c(function(Vx,L4){
var QD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),A4=T4(),UD=P4();QD(A4,"ndarray",UD);L4.exports=A4
});var I4=c(function(zx,G4){
var WD=require("path").join,$D=require('@stdlib/utils/try-require/dist'),hD=require('@stdlib/assert/is-error/dist'),YD=B4(),bn,C4=$D(WD(__dirname,"./native.js"));hD(C4)?bn=YD:bn=C4;G4.exports=bn
});var z4=c(function(Dx,V4){
var XD=require('@stdlib/number/float64/base/to-float32/dist'),K4=require('@stdlib/math/base/assert/is-nanf/dist');function dD(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return K4(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)K4(e[r])===!1&&(i=XD(i+e[r])),r+=a;return i}V4.exports=dD
});var J4=c(function(Hx,H4){
var xD=require('@stdlib/number/float64/base/to-float32/dist'),D4=require('@stdlib/math/base/assert/is-nanf/dist');function ND(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return D4(e[i])?r:e[i];for(u=i,v=0;v<n;v++)D4(e[u])===!1&&(r=xD(r+e[u])),u+=a;return r}H4.exports=ND
});var W4=c(function(Jx,U4){
var rH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Q4=z4(),eH=J4();rH(Q4,"ndarray",eH);U4.exports=Q4
});var Y4=c(function(Qx,h4){
var aH=require("path").join,uH=require('@stdlib/utils/try-require/dist'),iH=require('@stdlib/assert/is-error/dist'),nH=W4(),wn,$4=uH(aH(__dirname,"./native.js"));iH($4)?wn=nH:wn=$4;h4.exports=wn
});var Rn=c(function(Ux,X4){
var G=require('@stdlib/number/float64/base/to-float32/dist'),B=require('@stdlib/math/base/assert/is-nanf/dist'),vH=require('@stdlib/math/base/special/floor/dist'),sH=128;function yn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return B(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}if(n<=sH){for(u=B(e[r])?0:e[r],r+=a,v=B(e[r])?0:e[r],r+=a,s=B(e[r])?0:e[r],r+=a,o=B(e[r])?0:e[r],r+=a,t=B(e[r])?0:e[r],r+=a,f=B(e[r])?0:e[r],r+=a,q=B(e[r])?0:e[r],r+=a,m=B(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u=B(e[r])?u:G(u+e[r]),r+=a,v=B(e[r])?v:G(v+e[r]),r+=a,s=B(e[r])?s:G(s+e[r]),r+=a,o=B(e[r])?o:G(o+e[r]),r+=a,t=B(e[r])?t:G(t+e[r]),r+=a,f=B(e[r])?f:G(f+e[r]),r+=a,q=B(e[r])?q:G(q+e[r]),r+=a,m=B(e[r])?m:G(m+e[r]),r+=a;for(l=G(G(G(u+v)+G(s+o))+G(G(t+f)+G(q+m))),g;g<n;g++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}return j=vH(n/2),j-=j%8,G(yn(j,e,a,r)+yn(n-j,e,a,r+j*a))}X4.exports=yn
});var N4=c(function(Wx,x4){
var tH=require('@stdlib/number/float64/base/to-float32/dist'),d4=require('@stdlib/math/base/assert/is-nanf/dist'),oH=Rn();function fH(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return d4(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)d4(e[i])===!1&&(r=tH(r+e[i])),i+=a;return r}return oH(n,e,a,i)}x4.exports=fH
});var a8=c(function($x,e8){
var qH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),r8=N4(),cH=Rn();qH(r8,"ndarray",cH);e8.exports=r8
});var n8=c(function(hx,i8){
var mH=require("path").join,lH=require('@stdlib/utils/try-require/dist'),pH=require('@stdlib/assert/is-error/dist'),jH=a8(),kn,u8=lH(mH(__dirname,"./native.js"));pH(u8)?kn=jH:kn=u8;i8.exports=kn
});var s8=c(function(Yx,v8){
var gH=require('@stdlib/math/base/special/floor/dist'),$e=3;function bH(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=gH(n/2),a===1){if(v=s%$e,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<$e)return e;for(r=v;r<s;r+=$e)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=$e;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}v8.exports=bH
});var o8=c(function(Xx,t8){
var wH=require('@stdlib/math/base/special/floor/dist'),Mr=3;function yH(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=wH(n/2),u=i,a===1){if(s=o%Mr,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<Mr)return e;for(t=s;t<o;t+=Mr)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Mr,v-=Mr;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}t8.exports=yH
});var c8=c(function(dx,q8){
var RH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),f8=s8(),kH=o8();RH(f8,"ndarray",kH);q8.exports=f8
});var p8=c(function(xx,l8){
var _H=require("path").join,EH=require('@stdlib/utils/try-require/dist'),OH=require('@stdlib/assert/is-error/dist'),FH=c8(),_n,m8=EH(_H(__dirname,"./native.js"));OH(m8)?_n=FH:_n=m8;l8.exports=_n
});var w8=c(function(Nx,b8){
var j8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),g8=require('@stdlib/math/base/assert/is-nanf/dist'),MH=require('@stdlib/math/base/special/floor/dist');function TH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=MH(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||g8(f)||f===q&&j8(f))&&(t+=1)),f=a[v+t*i],f>m||g8(f)||f===m&&j8(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}b8.exports=TH
});var _8=c(function(rN,k8){
var y8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),R8=require('@stdlib/math/base/assert/is-nanf/dist'),SH=require('@stdlib/math/base/special/floor/dist');function ZH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=SH(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||R8(f)||f===q&&y8(f))&&(t+=1)),f=a[r+t*i],f>m||R8(f)||f===m&&y8(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}k8.exports=ZH
});var F8=c(function(eN,O8){
var PH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),E8=w8(),AH=_8();PH(E8,"ndarray",AH);O8.exports=E8
});var S8=c(function(aN,T8){
var LH=require("path").join,BH=require('@stdlib/utils/try-require/dist'),CH=require('@stdlib/assert/is-error/dist'),GH=F8(),En,M8=BH(LH(__dirname,"./native.js"));CH(M8)?En=GH:En=M8;T8.exports=En
});var A8=c(function(uN,P8){
var he=require('@stdlib/math/base/assert/is-negative-zerof/dist'),Z8=require('@stdlib/math/base/assert/is-nanf/dist');function IH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],Z8(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=he(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&he(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],Z8(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=he(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&he(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}P8.exports=IH
});var C8=c(function(iN,B8){
var Ye=require('@stdlib/math/base/assert/is-negative-zerof/dist'),L8=require('@stdlib/math/base/assert/is-nanf/dist');function KH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],L8(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=Ye(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Ye(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],L8(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=Ye(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&Ye(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}B8.exports=KH
});var K8=c(function(nN,I8){
var VH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),G8=A8(),zH=C8();VH(G8,"ndarray",zH);I8.exports=G8
});var D8=c(function(vN,z8){
var DH=require("path").join,HH=require('@stdlib/utils/try-require/dist'),JH=require('@stdlib/assert/is-error/dist'),QH=K8(),On,V8=HH(DH(__dirname,"./native.js"));JH(V8)?On=QH:On=V8;z8.exports=On
});var Fn=c(function(sN,UH){UH.exports=[701,301,132,57,23,10,4,1]});var Q8=c(function(tN,J8){
var WH=require('@stdlib/math/base/assert/is-negative-zerof/dist'),$H=require('@stdlib/math/base/assert/is-nanf/dist'),H8=Fn(),hH=H8.length;function YH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<hH;p++)for(t=H8[p],l=t;l<n;l++)if(f=a[v+l*i],!$H(f)){for(q=r[s+l*u],o=WH(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}J8.exports=YH
});var $8=c(function(oN,W8){
var XH=require('@stdlib/math/base/assert/is-negative-zerof/dist'),dH=require('@stdlib/math/base/assert/is-nanf/dist'),U8=Fn(),xH=U8.length;function NH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<xH;p++)for(t=U8[p],l=t;l<n;l++)if(f=a[r+l*i],!dH(f)){for(q=u[s+l*v],o=XH(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}W8.exports=NH
});var X8=c(function(fN,Y8){
var rJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),h8=Q8(),eJ=$8();rJ(h8,"ndarray",eJ);Y8.exports=h8
});var N8=c(function(qN,x8){
var aJ=require("path").join,uJ=require('@stdlib/utils/try-require/dist'),iJ=require('@stdlib/assert/is-error/dist'),nJ=X8(),Mn,d8=uJ(aJ(__dirname,"./native.js"));iJ(d8)?Mn=nJ:Mn=d8;x8.exports=Mn
});var uE=c(function(cN,aE){
var rE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),eE=require('@stdlib/math/base/assert/is-nanf/dist'),vJ=require('@stdlib/math/base/special/floor/dist');function sJ(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=vJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||eE(s)||s===o&&rE(s))&&(v+=1)),s=a[r+v*i],s>f||eE(s)||s===f&&rE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}aE.exports=sJ
});var sE=c(function(mN,vE){
var iE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),nE=require('@stdlib/math/base/assert/is-nanf/dist'),tJ=require('@stdlib/math/base/special/floor/dist');function oJ(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=tJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||nE(s)||s===o&&iE(s))&&(v+=1)),s=a[r+v*i],s>f||nE(s)||s===f&&iE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}vE.exports=oJ
});var fE=c(function(lN,oE){
var fJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tE=uE(),qJ=sE();fJ(tE,"ndarray",qJ);oE.exports=tE
});var mE=c(function(pN,cE){
var cJ=require("path").join,mJ=require('@stdlib/utils/try-require/dist'),lJ=require('@stdlib/assert/is-error/dist'),pJ=fE(),Tn,qE=mJ(cJ(__dirname,"./native.js"));lJ(qE)?Tn=pJ:Tn=qE;cE.exports=Tn
});var jE=c(function(jN,pE){
var Xe=require('@stdlib/math/base/assert/is-negative-zerof/dist'),lE=require('@stdlib/math/base/assert/is-nanf/dist');function jJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],lE(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Xe(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Xe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],lE(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Xe(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Xe(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}pE.exports=jJ
});var wE=c(function(gN,bE){
var de=require('@stdlib/math/base/assert/is-negative-zerof/dist'),gE=require('@stdlib/math/base/assert/is-nanf/dist');function gJ(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],gE(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=de(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&de(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],gE(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=de(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&de(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}bE.exports=gJ
});var kE=c(function(bN,RE){
var bJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yE=jE(),wJ=wE();bJ(yE,"ndarray",wJ);RE.exports=yE
});var OE=c(function(wN,EE){
var yJ=require("path").join,RJ=require('@stdlib/utils/try-require/dist'),kJ=require('@stdlib/assert/is-error/dist'),_J=kE(),Sn,_E=RJ(yJ(__dirname,"./native.js"));kJ(_E)?Sn=_J:Sn=_E;EE.exports=Sn
});var Zn=c(function(yN,EJ){EJ.exports=[701,301,132,57,23,10,4,1]});var TE=c(function(RN,ME){
var OJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),FJ=require('@stdlib/math/base/assert/is-nanf/dist'),FE=Zn(),MJ=FE.length;function TJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<MJ;t++)for(v=FE[t],f=v;f<n;f++)if(s=a[r+f*i],!FJ(s)){for(u=OJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}ME.exports=TJ
});var PE=c(function(kN,ZE){
var SJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),ZJ=require('@stdlib/math/base/assert/is-nanf/dist'),SE=Zn(),PJ=SE.length;function AJ(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<PJ;t++)for(v=SE[t],f=v;f<n;f++)if(s=a[r+f*i],!ZJ(s)){for(u=SJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}ZE.exports=AJ
});var BE=c(function(_N,LE){
var LJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),AE=TE(),BJ=PE();LJ(AE,"ndarray",BJ);LE.exports=AE
});var IE=c(function(EN,GE){
var CJ=require("path").join,GJ=require('@stdlib/utils/try-require/dist'),IJ=require('@stdlib/assert/is-error/dist'),KJ=BE(),Pn,CE=GJ(CJ(__dirname,"./native.js"));IJ(CE)?Pn=KJ:Pn=CE;GE.exports=Pn
});var zE=c(function(ON,VE){
var nr=require('@stdlib/number/float64/base/to-float32/dist'),KE=require('@stdlib/math/base/special/abs/dist');function VJ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=nr(i+u),KE(i)>=KE(u)?s=nr(s+nr(nr(i-v)+u)):s=nr(s+nr(nr(u-v)+i)),i=v,r+=a;return nr(i+s)}VE.exports=VJ
});var JE=c(function(FN,HE){
var vr=require('@stdlib/number/float64/base/to-float32/dist'),DE=require('@stdlib/math/base/special/abs/dist');function zJ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=vr(r+v),DE(r)>=DE(v)?o=vr(o+vr(vr(r-s)+v)):o=vr(o+vr(vr(v-s)+r)),r=s,u+=a;return vr(r+o)}HE.exports=zJ
});var WE=c(function(MN,UE){
var DJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),QE=zE(),HJ=JE();DJ(QE,"ndarray",HJ);UE.exports=QE
});var xe=c(function(TN,hE){
var JJ=require("path").join,QJ=require('@stdlib/utils/try-require/dist'),UJ=require('@stdlib/assert/is-error/dist'),WJ=WE(),An,$E=QJ(JJ(__dirname,"./native.js"));UJ($E)?An=WJ:An=$E;hE.exports=An
});var XE=c(function(SN,YE){
var $J=xe();function hJ(n,e,a){return $J(n,e,a)}YE.exports=hJ
});var xE=c(function(ZN,dE){
var YJ=xe().ndarray;function XJ(n,e,a,i){return YJ(n,e,a,i)}dE.exports=XJ
});var e6=c(function(PN,r6){
var dJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),NE=XE(),xJ=xE();dJ(NE,"ndarray",xJ);r6.exports=NE
});var i6=c(function(AN,u6){
var NJ=require("path").join,rQ=require('@stdlib/utils/try-require/dist'),eQ=require('@stdlib/assert/is-error/dist'),aQ=e6(),Ln,a6=rQ(NJ(__dirname,"./native.js"));eQ(a6)?Ln=aQ:Ln=a6;u6.exports=Ln
});var v6=c(function(LN,n6){
var Q=require('@stdlib/number/float64/base/to-float32/dist'),Ne=require('@stdlib/math/base/special/abs/dist');function uQ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=Q(i+o),Ne(i)>=Ne(o)?f=Q(Q(i-t)+o):f=Q(Q(o-t)+i),i=t,t=Q(v+f),Ne(v)>=Ne(f)?s=Q(Q(v-t)+f):s=Q(Q(f-t)+v),v=t,r=Q(r+s),u+=a;return Q(i+Q(v+r))}n6.exports=uQ
});var t6=c(function(BN,s6){
var U=require('@stdlib/number/float64/base/to-float32/dist'),ra=require('@stdlib/math/base/special/abs/dist');function iQ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=U(r+t),ra(r)>=ra(t)?q=U(U(r-f)+t):q=U(U(t-f)+r),r=f,f=U(s+q),ra(s)>=ra(q)?o=U(U(s-f)+q):o=U(U(q-f)+s),s=f,u=U(u+o),v+=a;return U(r+U(s+u))}s6.exports=iQ
});var q6=c(function(CN,f6){
var nQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),o6=v6(),vQ=t6();nQ(o6,"ndarray",vQ);f6.exports=o6
});var l6=c(function(GN,m6){
var sQ=require("path").join,tQ=require('@stdlib/utils/try-require/dist'),oQ=require('@stdlib/assert/is-error/dist'),fQ=q6(),Bn,c6=tQ(sQ(__dirname,"./native.js"));oQ(c6)?Bn=fQ:Bn=c6;m6.exports=Bn
});var j6=c(function(IN,p6){
var qQ=require('@stdlib/number/float64/base/to-float32/dist');function cQ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)i=qQ(i+e[r]),r+=a;return i}p6.exports=cQ
});var b6=c(function(KN,g6){
var mQ=require('@stdlib/number/float64/base/to-float32/dist');function lQ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];for(u=i,v=0;v<n;v++)r=mQ(r+e[u]),u+=a;return r}g6.exports=lQ
});var R6=c(function(VN,y6){
var pQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),w6=j6(),jQ=b6();pQ(w6,"ndarray",jQ);y6.exports=w6
});var E6=c(function(zN,_6){
var gQ=require("path").join,bQ=require('@stdlib/utils/try-require/dist'),wQ=require('@stdlib/assert/is-error/dist'),yQ=R6(),Cn,k6=bQ(gQ(__dirname,"./native.js"));wQ(k6)?Cn=yQ:Cn=k6;_6.exports=Cn
});var In=c(function(DN,O6){
var I=require('@stdlib/number/float64/base/to-float32/dist'),RQ=require('@stdlib/math/base/special/floor/dist'),kQ=128;function Gn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l=I(l+e[r]),r+=a;return l}if(n<=kQ){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u=I(u+e[r]),v=I(v+e[r+a]),s=I(s+e[r+2*a]),o=I(o+e[r+3*a]),t=I(t+e[r+4*a]),f=I(f+e[r+5*a]),q=I(q+e[r+6*a]),m=I(m+e[r+7*a]),r+=8*a;for(l=I(I(I(u+v)+I(s+o))+I(I(t+f)+I(q+m))),g;g<n;g++)l=I(l+e[r]),r+=a;return l}return j=RQ(n/2),j-=j%8,I(Gn(j,e,a,r)+Gn(n-j,e,a,r+j*a))}O6.exports=Gn
});var M6=c(function(HN,F6){
var _Q=require('@stdlib/number/float64/base/to-float32/dist'),EQ=In();function OQ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=_Q(r+e[i]),i+=a;return r}return EQ(n,e,a,i)}F6.exports=OQ
});var Z6=c(function(JN,S6){
var FQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),T6=M6(),MQ=In();FQ(T6,"ndarray",MQ);S6.exports=T6
});var L6=c(function(QN,A6){
var TQ=require("path").join,SQ=require('@stdlib/utils/try-require/dist'),ZQ=require('@stdlib/assert/is-error/dist'),PQ=Z6(),Kn,P6=SQ(TQ(__dirname,"./native.js"));ZQ(P6)?Kn=PQ:Kn=P6;A6.exports=Kn
});var C6=c(function(UN,B6){
var y=require('@stdlib/utils/define-read-only-property/dist'),w={};y(w,"dapx",ho());y(w,"dapxsum",gf());y(w,"dapxsumkbn",Vr());y(w,"dapxsumkbn2",Mf());y(w,"dapxsumors",If());y(w,"dapxsumpw",Wf());y(w,"dasumpw",aq());y(w,"dcusum",_q());y(w,"dcusumkbn",Hr());y(w,"dcusumkbn2",Lq());y(w,"dcusumors",Jq());y(w,"dcusumpw",xq());y(w,"dfill",tc());y(w,"dnanasum",Pc());y(w,"dnanasumors",Wr());y(w,"dnannsum",rm());y(w,"dnannsumkbn",$r());y(w,"dnannsumkbn2",cm());y(w,"dnannsumors",Em());y(w,"dnannsumpw",Cm());y(w,"dnansum",i1());y(w,"dnansumkbn",Xr());y(w,"dnansumkbn2",j1());y(w,"dnansumors",T1());y(w,"dnansumpw",K1());y(w,"drev",h1());y(w,"dsapxsum",cl());y(w,"dsapxsumpw",re());y(w,"dsnannsumors",El());y(w,"dsnansum",Jl());y(w,"dsnansumors",ep());y(w,"dsnansumpw",ee());y(w,"dsort2hp",pp());y(w,"dsort2ins",Mp());y(w,"dsort2sh",Vp());y(w,"dsorthp",Np());y(w,"dsortins",q2());y(w,"dsortsh",_2());y(w,"dssum",D2());y(w,"dssumors",d2());y(w,"dssumpw",ve());y(w,"dsum",bj());y(w,"dsumkbn",te());y(w,"dsumkbn2",Tj());y(w,"dsumors",Kj());y(w,"dsumpw",$j());y(w,"gapx",rg());y(w,"gapxsum",pg());y(w,"gapxsumkbn",me());y(w,"gapxsumkbn2",kg());y(w,"gapxsumors",Sg());y(w,"gapxsumpw",Cg());y(w,"gasumpw",Hg());y(w,"gcusum",ub());y(w,"gcusumkbn",je());y(w,"gcusumkbn2",fb());y(w,"gcusumors",gb());y(w,"gcusumpw",_b());y(w,"gfill",Pb());y(w,"gfillBy",Vb());y(w,"gnannsumkbn",Xb());y(w,"gnansum",mw());y(w,"gnansumkbn",ye());y(w,"gnansumkbn2",kw());y(w,"gnansumors",Pw());y(w,"gnansumpw",Kw());y(w,"grev",Ww());y(w,"gsort2hp",uy());y(w,"gsort2ins",cy());y(w,"gsort2sh",Ry());y(w,"gsorthp",Ay());y(w,"gsortins",Dy());y(w,"gsortsh",Xy());y(w,"gsum",qR());y(w,"gsumkbn",Te());y(w,"gsumkbn2",bR());y(w,"gsumors",OR());y(w,"gsumpw",PR());y(w,"sapx",DR());y(w,"sapxsum",tk());y(w,"sapxsumkbn",Le());y(w,"sapxsumkbn2",bk());y(w,"sapxsumors",Tk());y(w,"sapxsumpw",Ik());y(w,"sasumpw",$k());y(w,"scusum",l3());y(w,"scusumkbn",Ge());y(w,"scusumkbn2",E3());y(w,"scusumors",B3());y(w,"scusumpw",Q3());y(w,"sdsapxsum",o_());y(w,"sdsapxsumpw",ze());y(w,"sdsnansum",T_());y(w,"sdsnansumpw",De());y(w,"sdssum",W_());y(w,"sdssumpw",He());y(w,"sfill",a4());y(w,"snansum",O4());y(w,"snansumkbn",Qe());y(w,"snansumkbn2",I4());y(w,"snansumors",Y4());y(w,"snansumpw",n8());y(w,"srev",p8());y(w,"ssort2hp",S8());y(w,"ssort2ins",D8());y(w,"ssort2sh",N8());y(w,"ssorthp",mE());y(w,"ssortins",OE());y(w,"ssortsh",IE());y(w,"ssum",i6());y(w,"ssumkbn",xe());y(w,"ssumkbn2",l6());y(w,"ssumors",E6());y(w,"ssumpw",L6());B6.exports=w
});var K6=c(function(WN,I6){
var AQ=require('@stdlib/utils/define-read-only-property/dist'),G6={};AQ(G6,"base",C6());I6.exports=G6
});var H6=c(function($N,D6){
var V6=require('@stdlib/assert/is-ndarray-like/dist'),z6=require('@stdlib/assert/is-collection/dist'),ea=require('@stdlib/assert/is-float64array/dist'),aa=require('@stdlib/assert/is-float32array/dist'),Vn=require('@stdlib/string/format/dist'),LQ=Sr().ndarray,BQ=Lr().ndarray,ua=Sa().ndarray;function CQ(n,e){var a,i,r,u,v,s,o,t;if(v=V6(n),o=V6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=ea(n.data),i=a?!1:aa(n.data);else if(v===!1&&z6(n))a=ea(n),i=a?!1:aa(n);else throw new TypeError(Vn('0G93T',n));if(t)r=ea(e.data),u=r?!1:aa(e.data);else if(o===!1&&z6(e))r=ea(e),u=r?!1:aa(e);else throw new TypeError(Vn('0G93U',e));if(n.length!==e.length)throw new RangeError(Vn('0G93S',n.length,e.length));return s&&t?a&&r?LQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):i&&u?BQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):ua(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):s?ua(n.length,n.data,n.strides[0],n.offset,e,1,0):t?ua(n.length,n,1,0,e.data,e.strides[0],e.offset):ua(n.length,n,1,0,e,1,0)}D6.exports=CQ
});var Q6=c(function(hN,J6){
var GQ=H6();J6.exports=GQ
});var h6=c(function(YN,$6){
var U6=require('@stdlib/assert/is-ndarray-like/dist'),W6=require('@stdlib/assert/is-collection/dist'),ia=require('@stdlib/assert/is-float64array/dist'),na=require('@stdlib/assert/is-float32array/dist'),zn=require('@stdlib/string/format/dist'),IQ=Pr().ndarray,KQ=Ir().ndarray,va=Ba().ndarray;function VQ(n,e){var a,i,r,u,v,s,o,t;if(v=U6(n),o=U6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=ia(n.data),i=a?!1:na(n.data);else if(v===!1&&W6(n))a=ia(n),i=a?!1:na(n);else throw new TypeError(zn('0G93T',n));if(t)r=ia(e.data),u=r?!1:na(e.data);else if(o===!1&&W6(e))r=ia(e),u=r?!1:na(e);else throw new TypeError(zn('0G93U',e));if(n.length!==e.length)throw new RangeError(zn('0G93S',n.length,e.length));return s&&t?a&&r?(IQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):i&&u?(KQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):(va(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):s?(va(n.length,n.data,n.strides[0],n.offset,e,1,0),e):t?(va(n.length,n,1,0,e.data,e.strides[0],e.offset),e):(va(n.length,n,1,0,e,1,0),e)}$6.exports=VQ
});var X6=c(function(XN,Y6){
var zQ=h6();Y6.exports=zQ
});var N6=c(function(dN,x6){
var d6=require('@stdlib/assert/is-float32vector-like/dist'),DQ=Lr().ndarray,Dn=require('@stdlib/string/format/dist');function HQ(n,e){if(!d6(n))throw new TypeError(Dn('0G9DA',n));if(!d6(e))throw new TypeError(Dn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Dn('0G93S',n.length,e.length));return DQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}x6.exports=HQ
});var eO=c(function(xN,rO){
var JQ=N6();rO.exports=JQ
});var iO=c(function(NN,uO){
var aO=require('@stdlib/assert/is-float32vector-like/dist'),Hn=require('@stdlib/string/format/dist'),QQ=Ir().ndarray;function UQ(n,e){if(!aO(n))throw new TypeError(Hn('0G9DA',n));if(!aO(e))throw new TypeError(Hn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Hn('0G93S',n.length,e.length));return QQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}uO.exports=UQ
});var vO=c(function(rrr,nO){
var WQ=iO();nO.exports=WQ
});var sr=require('@stdlib/utils/define-read-only-property/dist'),X={};sr(X,"base",To());sr(X,"ddot",Lo());sr(X,"dswap",Ko());sr(X,"ext",K6());sr(X,"gdot",Q6());sr(X,"gswap",X6());sr(X,"sdot",eO());sr(X,"sswap",vO());module.exports=X;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
