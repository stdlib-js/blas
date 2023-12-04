"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var Un=c(function(XQ,Qn){
var Jn=require('@stdlib/strided/base/reinterpret-complex64/dist');function oO(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0)return i;if(u=Jn(e,0),v=Jn(i,0),a===1&&r===1){for(q=0;q<n*2;q+=2)v[q]=u[q],v[q+1]=u[q+1];return i}for(a<0?t=2*(1-n)*a:t=0,r<0?f=2*(1-n)*r:f=0,s=a*2,o=r*2,q=0;q<n;q++)v[f]=u[t],v[f+1]=u[t+1],t+=s,f+=o;return i}Qn.exports=oO
});var hn=c(function(dQ,$n){
var Wn=require('@stdlib/strided/base/reinterpret-complex64/dist');function fO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;for(s=Wn(e,0),o=Wn(r,0),t=a*2,f=u*2,q=i*2,m=v*2,p=0;p<n;p++)o[m]=s[q],o[m+1]=s[q+1],q+=t,m+=f;return r}$n.exports=fO
});var dn=c(function(xQ,Xn){
var qO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yn=Un(),cO=hn();qO(Yn,"ndarray",cO);Xn.exports=Yn
});var rv=c(function(NQ,Nn){
var mO=require("path").join,lO=require('@stdlib/utils/try-require/dist'),pO=require('@stdlib/assert/is-error/dist'),jO=dn(),na,xn=lO(mO(__dirname,"./native.js"));pO(xn)?na=jO:na=xn;Nn.exports=na
});var uv=c(function(rU,av){
var ev=require('@stdlib/strided/base/reinterpret-complex64/dist');function gO(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return i;if(u=ev(e,0),v=ev(i,0),a===1&&r===1){for(m=0;m<n*2;m+=2)s=u[m],u[m]=v[m],v[m]=s,p=m+1,s=u[p],u[p]=v[p],v[p]=s;return i}for(a<0?f=2*(1-n)*a:f=0,r<0?q=2*(1-n)*r:q=0,o=a*2,t=r*2,m=0;m<n;m++)s=u[f],u[f]=v[q],v[q]=s,s=u[f+1],u[f+1]=v[q+1],v[q+1]=s,f+=o,q+=t;return i}av.exports=gO
});var vv=c(function(eU,nv){
var iv=require('@stdlib/strided/base/reinterpret-complex64/dist');function bO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(n<=0)return r;for(s=iv(e,0),o=iv(r,0),f=a*2,q=u*2,m=i*2,p=v*2,l=0;l<n;l++)t=s[m],s[m]=o[p],o[p]=t,t=s[m+1],s[m+1]=o[p+1],o[p+1]=t,m+=f,p+=q;return r}nv.exports=bO
});var ov=c(function(aU,tv){
var wO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sv=uv(),yO=vv();wO(sv,"ndarray",yO);tv.exports=sv
});var cv=c(function(uU,qv){
var RO=require("path").join,kO=require('@stdlib/utils/try-require/dist'),_O=require('@stdlib/assert/is-error/dist'),EO=ov(),va,fv=kO(RO(__dirname,"./native.js"));_O(fv)?va=EO:va=fv;qv.exports=va
});var lv=c(function(iU,mv){
var d=require('@stdlib/math/base/special/abs/dist'),sa=6;function OO(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%sa,r>0)for(u=0;u<r;u++)i+=d(e[u]);if(n<sa)return i;for(u=r;u<n;u+=sa)i+=d(e[u])+d(e[u+1])+d(e[u+2])+d(e[u+3])+d(e[u+4])+d(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=d(e[u]);return i}mv.exports=OO
});var jv=c(function(nU,pv){
var x=require('@stdlib/math/base/special/abs/dist'),Fr=6;function FO(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Fr,v>0)for(s=0;s<v;s++)r+=x(e[u]),u+=a;if(n<Fr)return r;for(s=v;s<n;s+=Fr)r+=x(e[u])+x(e[u+1])+x(e[u+2])+x(e[u+3])+x(e[u+4])+x(e[u+5]),u+=Fr;return r}for(s=0;s<n;s++)r+=x(e[u]),u+=a;return r}pv.exports=FO
});var wv=c(function(vU,bv){
var MO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gv=lv(),TO=jv();MO(gv,"ndarray",TO);bv.exports=gv
});var kv=c(function(sU,Rv){
var SO=require("path").join,ZO=require('@stdlib/utils/try-require/dist'),PO=require('@stdlib/assert/is-error/dist'),AO=wv(),ta,yv=ZO(SO(__dirname,"./native.js"));PO(yv)?ta=AO:ta=yv;Rv.exports=ta
});var Ev=c(function(tU,_v){
var oa=4;function LO(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%oa,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<oa)return r;for(t=o;t<n;t+=oa)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}_v.exports=LO
});var Fv=c(function(oU,Ov){
var fr=4;function BO(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%fr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<fr)return u;for(q=f;q<n;q+=fr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=fr,t+=fr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Ov.exports=BO
});var Sv=c(function(fU,Tv){
var CO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mv=Ev(),GO=Fv();CO(Mv,"ndarray",GO);Tv.exports=Mv
});var Av=c(function(qU,Pv){
var IO=require("path").join,KO=require('@stdlib/utils/try-require/dist'),VO=require('@stdlib/assert/is-error/dist'),zO=Sv(),fa,Zv=KO(IO(__dirname,"./native.js"));VO(Zv)?fa=zO:fa=Zv;Pv.exports=fa
});var Bv=c(function(cU,Lv){
var qa=8;function DO(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%qa,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<qa)return i;for(o=s;o<n;o+=qa)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}Lv.exports=DO
});var Gv=c(function(mU,Cv){
var qr=8;function HO(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%qr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<qr)return r;for(f=t;f<n;f+=qr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=qr,o+=qr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}Cv.exports=HO
});var Vv=c(function(lU,Kv){
var JO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Iv=Bv(),QO=Gv();JO(Iv,"ndarray",QO);Kv.exports=Iv
});var Hv=c(function(pU,Dv){
var UO=require("path").join,WO=require('@stdlib/utils/try-require/dist'),$O=require('@stdlib/assert/is-error/dist'),hO=Vv(),ca,zv=WO(UO(__dirname,"./native.js"));$O(zv)?ca=hO:ca=zv;Dv.exports=ca
});var Qv=c(function(jU,Jv){
var ma=5;function YO(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%ma,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<ma)return u;for(t=o;t<n;t+=ma)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}Jv.exports=YO
});var Wv=c(function(gU,Uv){
var cr=5;function XO(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%cr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<cr)return s;for(q=f;q<n;q+=cr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=cr,t+=cr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Uv.exports=XO
});var Yv=c(function(bU,hv){
var dO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$v=Qv(),xO=Wv();dO($v,"ndarray",xO);hv.exports=$v
});var Mr=c(function(wU,dv){
var NO=require("path").join,r5=require('@stdlib/utils/try-require/dist'),e5=require('@stdlib/assert/is-error/dist'),a5=Yv(),la,Xv=r5(NO(__dirname,"./native.js"));e5(Xv)?la=a5:la=Xv;dv.exports=la
});var es=c(function(yU,rs){
var u5=require('@stdlib/math/base/special/sqrt/dist'),xv=require('@stdlib/math/base/special/abs/dist'),Nv=require('@stdlib/math/base/special/pow/dist');function i5(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return xv(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=xv(e[v]),i<u?(r=1+r*Nv(i/u,2),i=u):r+=Nv(u/i,2));return i*u5(r)}rs.exports=i5
});var ns=c(function(RU,is){
var n5=require('@stdlib/math/base/special/sqrt/dist'),as=require('@stdlib/math/base/special/abs/dist'),us=require('@stdlib/math/base/special/pow/dist');function v5(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return as(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=as(e[s]),r<v?(u=1+u*us(r/v,2),r=v):u+=us(v/r,2)),s+=a;return r*n5(u)}is.exports=v5
});var ts=c(function(kU,ss){
var s5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),vs=es(),t5=ns();s5(vs,"ndarray",t5);ss.exports=vs
});var qs=c(function(_U,fs){
var o5=require("path").join,f5=require('@stdlib/utils/try-require/dist'),q5=require('@stdlib/assert/is-error/dist'),c5=ts(),pa,os=f5(o5(__dirname,"./native.js"));q5(os)?pa=c5:pa=os;fs.exports=pa
});var ms=c(function(EU,cs){
var ja=5;function m5(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%ja,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<ja)return a;for(r=u;r<n;r+=ja)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}cs.exports=m5
});var ps=c(function(OU,ls){
var Tr=5;function l5(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Tr,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Tr)return a;for(s=v;s<n;s+=Tr)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e,u+=Tr;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}ls.exports=l5
});var bs=c(function(FU,gs){
var p5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),js=ms(),j5=ps();p5(js,"ndarray",j5);gs.exports=js
});var Rs=c(function(MU,ys){
var g5=require("path").join,b5=require('@stdlib/utils/try-require/dist'),w5=require('@stdlib/assert/is-error/dist'),y5=bs(),ga,ws=b5(g5(__dirname,"./native.js"));w5(ws)?ga=y5:ga=ws;ys.exports=ga
});var _s=c(function(TU,ks){
var ba=5;function R5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%ba,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<ba)return u;for(t=o;t<n;t+=ba)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}ks.exports=R5
});var Os=c(function(SU,Es){
var mr=5;function k5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%mr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<mr)return s;for(q=f;q<n;q+=mr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=mr,t+=mr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Es.exports=k5
});var Ts=c(function(ZU,Ms){
var _5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fs=_s(),E5=Os();_5(Fs,"ndarray",E5);Ms.exports=Fs
});var Ps=c(function(PU,Zs){
var O5=require("path").join,F5=require('@stdlib/utils/try-require/dist'),M5=require('@stdlib/assert/is-error/dist'),T5=Ts(),wa,Ss=F5(O5(__dirname,"./native.js"));M5(Ss)?wa=T5:wa=Ss;Zs.exports=wa
});var Ls=c(function(AU,As){
var ya=3;function S5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%ya,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<ya)return i;for(t=o;t<n;t+=ya)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}As.exports=S5
});var Cs=c(function(LU,Bs){
var lr=3;function Z5(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%lr,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<lr)return r;for(q=f;q<n;q+=lr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=lr,t+=lr;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}Bs.exports=Z5
});var Ks=c(function(BU,Is){
var P5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gs=Ls(),A5=Cs();P5(Gs,"ndarray",A5);Is.exports=Gs
});var Sr=c(function(CU,zs){
var L5=require("path").join,B5=require('@stdlib/utils/try-require/dist'),C5=require('@stdlib/assert/is-error/dist'),G5=Ks(),Ra,Vs=B5(L5(__dirname,"./native.js"));C5(Vs)?Ra=G5:Ra=Vs;zs.exports=Ra
});var Hs=c(function(GU,Ds){
var N=require('@stdlib/math/base/special/abs/dist'),ka=6;function I5(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%ka,r>0)for(u=0;u<r;u++)i+=N(e[u]);if(n<ka)return i;for(u=r;u<n;u+=ka)i+=N(e[u])+N(e[u+1])+N(e[u+2])+N(e[u+3])+N(e[u+4])+N(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=N(e[u]);return i}Ds.exports=I5
});var Qs=c(function(IU,Js){
var rr=require('@stdlib/math/base/special/abs/dist'),Zr=6;function K5(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Zr,v>0)for(s=0;s<v;s++)r+=rr(e[u]),u+=a;if(n<Zr)return r;for(s=v;s<n;s+=Zr)r+=rr(e[u])+rr(e[u+1])+rr(e[u+2])+rr(e[u+3])+rr(e[u+4])+rr(e[u+5]),u+=Zr;return r}for(s=0;s<n;s++)r+=rr(e[u]),u+=a;return r}Js.exports=K5
});var $s=c(function(KU,Ws){
var V5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Us=Hs(),z5=Qs();V5(Us,"ndarray",z5);Ws.exports=Us
});var Ys=c(function(VU,hs){
var _a=4;function D5(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%_a,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<_a)return r;for(t=o;t<n;t+=_a)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}hs.exports=D5
});var ds=c(function(zU,Xs){
var pr=4;function H5(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%pr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<pr)return u;for(q=f;q<n;q+=pr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=pr,t+=pr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Xs.exports=H5
});var r0=c(function(DU,Ns){
var J5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xs=Ys(),Q5=ds();J5(xs,"ndarray",Q5);Ns.exports=xs
});var Ea=c(function(HU,e0){
function U5(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],q=i,m=v,p=0;p<n;p++)t(o,m,f(s,q)),q+=a,m+=u;return e}e0.exports=U5
});var i0=c(function(JU,u0){
var a0=require('@stdlib/array/base/arraylike2object/dist'),W5=Ea(),Oa=8;function $5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(s=a0(e),o=a0(i),s.accessorProtocol||o.accessorProtocol)return a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,W5(n,s,a,u,o,r,v),o.data;if(a===1&&r===1){if(t=n%Oa,t>0)for(f=0;f<t;f++)i[f]=e[f];if(n<Oa)return i;for(f=t;f<n;f+=Oa)i[f]=e[f],i[f+1]=e[f+1],i[f+2]=e[f+2],i[f+3]=e[f+3],i[f+4]=e[f+4],i[f+5]=e[f+5],i[f+6]=e[f+6],i[f+7]=e[f+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,f=0;f<n;f++)i[v]=e[u],u+=a,v+=r;return i}u0.exports=$5
});var s0=c(function(QU,v0){
var n0=require('@stdlib/array/base/arraylike2object/dist'),h5=Ea(),jr=8;function Y5(n,e,a,i,r,u,v){var s,o,t,f,q,m;if(n<=0)return r;if(t=n0(e),f=n0(r),t.accessorProtocol||f.accessorProtocol)return h5(n,t,a,i,f,u,v),f.data;if(s=i,o=v,a===1&&u===1){if(q=n%jr,q>0)for(m=0;m<q;m++)r[o]=e[s],s+=a,o+=u;if(n<jr)return r;for(m=q;m<n;m+=jr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=jr,o+=jr;return r}for(m=0;m<n;m++)r[o]=e[s],s+=a,o+=u;return r}v0.exports=Y5
});var f0=c(function(UU,o0){
var X5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),t0=i0(),d5=s0();X5(t0,"ndarray",d5);o0.exports=t0
});var c0=c(function(WU,q0){
var Fa=5;function x5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%Fa,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<Fa)return u;for(t=o;t<n;t+=Fa)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}q0.exports=x5
});var l0=c(function($U,m0){
var gr=5;function N5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%gr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<gr)return s;for(q=f;q<n;q+=gr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=gr,t+=gr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}m0.exports=N5
});var Ma=c(function(hU,j0){
var rF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),p0=c0(),eF=l0();rF(p0,"ndarray",eF);j0.exports=p0
});var y0=c(function(YU,w0){
var aF=require('@stdlib/math/base/special/sqrt/dist'),g0=require('@stdlib/math/base/special/abs/dist'),b0=require('@stdlib/math/base/special/pow/dist');function uF(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return g0(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=g0(e[v]),i<u?(r=1+r*b0(i/u,2),i=u):r+=b0(u/i,2));return i*aF(r)}w0.exports=uF
});var E0=c(function(XU,_0){
var iF=require('@stdlib/math/base/special/sqrt/dist'),R0=require('@stdlib/math/base/special/abs/dist'),k0=require('@stdlib/math/base/special/pow/dist');function nF(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return R0(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=R0(e[s]),r<v?(u=1+u*k0(r/v,2),r=v):u+=k0(v/r,2)),s+=a;return r*iF(u)}_0.exports=nF
});var M0=c(function(dU,F0){
var vF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O0=y0(),sF=E0();vF(O0,"ndarray",sF);F0.exports=O0
});var S0=c(function(xU,T0){
var Ta=5;function tF(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(r=n%Ta,r>0)for(u=0;u<r;u+=1)a[u]*=e;if(n<Ta)return a;for(u=r;u<n;u+=Ta)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e;return a}for(n*=i,u=0;u<n;u+=i)a[u]*=e;return a}T0.exports=tF
});var P0=c(function(NU,Z0){
var Sa=5;function oF(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Sa,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Sa)return a;for(s=v;s<n;s+=Sa)a[s]*=e,a[s+1]*=e,a[s+2]*=e,a[s+3]*=e,a[s+4]*=e;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}Z0.exports=oF
});var B0=c(function(rW,L0){
var fF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),A0=S0(),qF=P0();fF(A0,"ndarray",qF);L0.exports=A0
});var Za=c(function(eW,C0){
function cF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],m=i,p=v,l=0;l<n;l++)q=f(s,m),t(s,m,f(o,p)),t(o,p,q),m+=a,p+=u;return e}C0.exports=cF
});var K0=c(function(aW,I0){
var G0=require('@stdlib/array/base/arraylike2object/dist'),mF=Za(),Pa=3;function lF(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0)return i;if(o=G0(e),t=G0(i),o.accessorProtocol||t.accessorProtocol)return a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,mF(n,o,a,v,t,r,s),t.data;if(a===1&&r===1){if(f=n%Pa,f>0)for(q=0;q<f;q++)u=e[q],e[q]=i[q],i[q]=u;if(n<Pa)return i;for(q=f;q<n;q+=Pa)u=e[q],e[q]=i[q],i[q]=u,m=q+1,u=e[m],e[m]=i[m],i[m]=u,m+=1,u=e[m],e[m]=i[m],i[m]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,q=0;q<n;q++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}I0.exports=lF
});var D0=c(function(uW,z0){
var V0=require('@stdlib/array/base/arraylike2object/dist'),pF=Za(),br=3;function jF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;if(f=V0(e),q=V0(r),f.accessorProtocol||q.accessorProtocol)return pF(n,f,a,i,q,u,v),q.data;if(o=i,t=v,a===1&&u===1){if(m=n%br,m>0)for(p=0;p<m;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<br)return r;for(p=m;p<n;p+=br)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=br,t+=br;return r}for(p=0;p<n;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}z0.exports=jF
});var Aa=c(function(iW,J0){
var gF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),H0=K0(),bF=D0();gF(H0,"ndarray",bF);J0.exports=H0
});var U0=c(function(nW,Q0){
var wF=require('@stdlib/math/base/special/absf/dist'),yF=require('@stdlib/number/float64/base/to-float32/dist');function RF(n,e,a){var i,r;if(i=0,n<=0||a<=0)return i;for(n*=a,r=0;r<n;r+=a)i=yF(i+wF(e[r]));return i}Q0.exports=RF
});var $0=c(function(vW,W0){
var kF=require('@stdlib/math/base/special/absf/dist'),_F=require('@stdlib/number/float64/base/to-float32/dist');function EF(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;for(u=i,v=0;v<n;v++)r=_F(r+kF(e[u])),u+=a;return r}W0.exports=EF
});var X0=c(function(sW,Y0){
var OF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),h0=U0(),FF=$0();OF(h0,"ndarray",FF);Y0.exports=h0
});var N0=c(function(tW,x0){
var MF=require("path").join,TF=require('@stdlib/utils/try-require/dist'),SF=require('@stdlib/assert/is-error/dist'),ZF=X0(),La,d0=TF(MF(__dirname,"./native.js"));SF(d0)?La=ZF:La=d0;x0.exports=La
});var et=c(function(oW,rt){
var tr=require('@stdlib/number/float64/base/to-float32/dist'),Ba=4;function PF(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%Ba,o>0)for(t=0;t<o;t++)r[t]+=tr(e*a[t]);if(n<Ba)return r;for(t=o;t<n;t+=Ba)r[t]+=tr(e*a[t]),r[t+1]+=tr(e*a[t+1]),r[t+2]+=tr(e*a[t+2]),r[t+3]+=tr(e*a[t+3]);return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=tr(e*a[v]),v+=i,s+=u;return r}rt.exports=PF
});var ut=c(function(fW,at){
var or=require('@stdlib/number/float64/base/to-float32/dist'),wr=4;function AF(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%wr,f>0)for(q=0;q<f;q++)u[t]+=or(e*a[o]),o+=i,t+=v;if(n<wr)return u;for(q=f;q<n;q+=wr)u[t]+=or(e*a[o]),u[t+1]+=or(e*a[o+1]),u[t+2]+=or(e*a[o+2]),u[t+3]+=or(e*a[o+3]),o+=wr,t+=wr;return u}for(q=0;q<n;q++)u[t]+=or(e*a[o]),o+=i,t+=v;return u}at.exports=AF
});var vt=c(function(qW,nt){
var LF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),it=et(),BF=ut();LF(it,"ndarray",BF);nt.exports=it
});var ot=c(function(cW,tt){
var CF=require("path").join,GF=require('@stdlib/utils/try-require/dist'),IF=require('@stdlib/assert/is-error/dist'),KF=vt(),Ca,st=GF(CF(__dirname,"./native.js"));IF(st)?Ca=KF:Ca=st;tt.exports=Ca
});var qt=c(function(mW,ft){
var Ga=8;function VF(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%Ga,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<Ga)return i;for(o=s;o<n;o+=Ga)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}ft.exports=VF
});var mt=c(function(lW,ct){
var yr=8;function zF(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%yr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<yr)return r;for(f=t;f<n;f+=yr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=yr,o+=yr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}ct.exports=zF
});var jt=c(function(pW,pt){
var DF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lt=qt(),HF=mt();DF(lt,"ndarray",HF);pt.exports=lt
});var wt=c(function(jW,bt){
var JF=require("path").join,QF=require('@stdlib/utils/try-require/dist'),UF=require('@stdlib/assert/is-error/dist'),WF=jt(),Ia,gt=QF(JF(__dirname,"./native.js"));UF(gt)?Ia=WF:Ia=gt;bt.exports=Ia
});var kt=c(function(gW,Rt){
var yt=require('@stdlib/number/float64/base/to-float32/dist');function $F(n,e,a,i,r){var u,v,s,o;if(u=0,n<=0)return u;for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,o=0;o<n;o++)u=yt(u+yt(e[v]*i[s])),v+=a,s+=r;return u}Rt.exports=$F
});var Ot=c(function(bW,Et){
var _t=require('@stdlib/number/float64/base/to-float32/dist');function hF(n,e,a,i,r,u,v){var s,o,t,f;if(s=0,n<=0)return s;for(o=i,t=v,f=0;f<n;f++)s=_t(s+_t(e[o]*r[t])),o+=a,t+=u;return s}Et.exports=hF
});var Tt=c(function(wW,Mt){
var YF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ft=kt(),XF=Ot();YF(Ft,"ndarray",XF);Mt.exports=Ft
});var Pr=c(function(yW,Zt){
var dF=require("path").join,xF=require('@stdlib/utils/try-require/dist'),NF=require('@stdlib/assert/is-error/dist'),rM=Tt(),Ka,St=xF(dF(__dirname,"./native.js"));NF(St)?Ka=rM:Ka=St;Zt.exports=Ka
});var At=c(function(RW,Pt){
var Ar=require('@stdlib/number/float64/base/to-float32/dist'),Va=5;function eM(n,e,a,i,r,u){var v,s,o,t,f;if(v=e,n<=0)return Ar(v);if(i===1&&u===1){if(t=n%Va,t>0)for(f=0;f<t;f++)v+=a[f]*r[f];if(n<Va)return Ar(v);for(f=t;f<n;f+=Va)v+=a[f]*r[f]+a[f+1]*r[f+1]+a[f+2]*r[f+2]+a[f+3]*r[f+3]+a[f+4]*r[f+4];return Ar(v)}for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,f=0;f<n;f++)v+=a[s]*r[o],s+=i,o+=u;return Ar(v)}Pt.exports=eM
});var Bt=c(function(kW,Lt){
var Lr=require('@stdlib/number/float64/base/to-float32/dist'),Rr=5;function aM(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(o=e,n<=0)return Lr(o);if(t=r,f=s,i===1&&v===1){if(q=n%Rr,q>0)for(m=0;m<q;m++)o+=a[t]*u[f],t+=1,f+=1;if(n<Rr)return Lr(o);for(m=q;m<n;m+=Rr)o+=a[t]*u[f]+a[t+1]*u[f+1]+a[t+2]*u[f+2]+a[t+3]*u[f+3]+a[t+4]*u[f+4],t+=Rr,f+=Rr;return Lr(o)}for(m=0;m<n;m++)o+=a[t]*u[f],t+=i,f+=v;return Lr(o)}Lt.exports=aM
});var It=c(function(_W,Gt){
var uM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ct=At(),iM=Bt();uM(Ct,"ndarray",iM);Gt.exports=Ct
});var zt=c(function(EW,Vt){
var nM=require("path").join,vM=require('@stdlib/utils/try-require/dist'),sM=require('@stdlib/assert/is-error/dist'),tM=It(),za,Kt=vM(nM(__dirname,"./native.js"));sM(Kt)?za=tM:za=Kt;Vt.exports=za
});var Qt=c(function(OW,Jt){
var oM=require('@stdlib/math/base/special/sqrt/dist'),Dt=require('@stdlib/math/base/special/abs/dist'),Ht=require('@stdlib/math/base/special/pow/dist'),Da=require('@stdlib/number/float64/base/to-float32/dist');function fM(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return Dt(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=Dt(e[v]),i<u?(r=Da(1+r*Ht(i/u,2)),i=u):r=Da(r+Ht(u/i,2)));return Da(i*oM(r))}Jt.exports=fM
});var ht=c(function(FW,$t){
var qM=require('@stdlib/math/base/special/sqrt/dist'),Ut=require('@stdlib/math/base/special/abs/dist'),Wt=require('@stdlib/math/base/special/pow/dist'),Ha=require('@stdlib/number/float64/base/to-float32/dist');function cM(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return Ut(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=Ut(e[s]),r<v?(u=Ha(1+u*Wt(r/v,2)),r=v):u=Ha(u+Wt(v/r,2))),s+=a;return Ha(r*qM(u))}$t.exports=cM
});var dt=c(function(MW,Xt){
var mM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yt=Qt(),lM=ht();mM(Yt,"ndarray",lM);Xt.exports=Yt
});var ro=c(function(TW,Nt){
var pM=require("path").join,jM=require('@stdlib/utils/try-require/dist'),gM=require('@stdlib/assert/is-error/dist'),bM=dt(),Ja,xt=jM(pM(__dirname,"./native.js"));gM(xt)?Ja=bM:Ja=xt;Nt.exports=Ja
});var Qa=c(function(SW,io){
var Y=require('@stdlib/number/float64/base/to-float32/dist'),eo=require('@stdlib/math/base/special/absf/dist'),wM=require('@stdlib/math/base/special/sqrtf/dist'),ao=require('@stdlib/math/base/special/abs2f/dist'),uo=require('@stdlib/math/base/special/copysignf/dist');function yM(n,e,a,i,r){var u,v,s,o,t,f,q,m;return s=eo(n),o=eo(e),s>o?v=uo(1,n):v=uo(1,e),u=Y(s+o),u===0?(f=1,q=0,t=0,m=0):(t=Y(u*wM(Y(ao(Y(n/u))+ao(Y(e/u))))),t=Y(t*v),f=Y(n/t),q=Y(e/t),m=1,s>o?m=q:f!==0&&(m=Y(1/f))),n=t,e=m,a[r]=n,a[r+i]=e,a[r+2*i]=f,a[r+3*i]=q,a}io.exports=yM
});var vo=c(function(ZW,no){
var RM=require('@stdlib/array/float32/dist'),kM=Qa();function _M(n,e){var a=new RM(4);return kM(n,e,a,1,0)}no.exports=_M
});var oo=c(function(PW,to){
var EM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),so=vo(),OM=Qa();EM(so,"assign",OM);to.exports=so
});var qo=c(function(AW,fo){
var Ua=5;function FM(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%Ua,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<Ua)return a;for(r=u;r<n;r+=Ua)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}fo.exports=FM
});var mo=c(function(LW,co){
var Br=5;function MM(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(s=n%Br,s>0)for(v=0;v<s;v++)a[u]*=e,u+=i;if(n<Br)return a;for(v=s;v<n;v+=Br)a[v]*=e,a[v+1]*=e,a[v+2]*=e,a[v+3]*=e,a[v+4]*=e,u+=Br;return a}for(v=0;v<n;v++)a[u]*=e,u+=i;return a}co.exports=MM
});var jo=c(function(BW,po){
var TM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lo=qo(),SM=mo();TM(lo,"ndarray",SM);po.exports=lo
});var wo=c(function(CW,bo){
var ZM=require("path").join,PM=require('@stdlib/utils/try-require/dist'),AM=require('@stdlib/assert/is-error/dist'),LM=jo(),Wa,go=PM(ZM(__dirname,"./native.js"));AM(go)?Wa=LM:Wa=go;bo.exports=Wa
});var Ro=c(function(GW,yo){
var $a=3;function BM(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%$a,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<$a)return i;for(t=o;t<n;t+=$a)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}yo.exports=BM
});var _o=c(function(IW,ko){
var kr=3;function CM(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%kr,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<kr)return r;for(q=f;q<n;q+=kr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=kr,t+=kr;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}ko.exports=CM
});var Fo=c(function(KW,Oo){
var GM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Eo=Ro(),IM=_o();GM(Eo,"ndarray",IM);Oo.exports=Eo
});var Cr=c(function(VW,To){
var KM=require("path").join,VM=require('@stdlib/utils/try-require/dist'),zM=require('@stdlib/assert/is-error/dist'),DM=Fo(),ha,Mo=VM(KM(__dirname,"./native.js"));zM(Mo)?ha=DM:ha=Mo;To.exports=ha
});var Zo=c(function(zW,So){
var F=require('@stdlib/utils/define-read-only-property/dist'),O={};F(O,"ccopy",rv());F(O,"cswap",cv());F(O,"dasum",kv());F(O,"daxpy",Av());F(O,"dcopy",Hv());F(O,"ddot",Mr());F(O,"dnrm2",qs());F(O,"dscal",Rs());F(O,"dsdot",Ps());F(O,"dswap",Sr());F(O,"gasum",$s());F(O,"gaxpy",r0());F(O,"gcopy",f0());F(O,"gdot",Ma());F(O,"gnrm2",M0());F(O,"gscal",B0());F(O,"gswap",Aa());F(O,"sasum",N0());F(O,"saxpy",ot());F(O,"scopy",wt());F(O,"sdot",Pr());F(O,"sdsdot",zt());F(O,"snrm2",ro());F(O,"srotg",oo());F(O,"sscal",wo());F(O,"sswap",Cr());So.exports=O
});var Lo=c(function(DW,Ao){
var Po=require('@stdlib/assert/is-float64vector-like/dist'),Ya=require('@stdlib/string/format/dist'),HM=Mr().ndarray;function JM(n,e){if(!Po(n))throw new TypeError(Ya('0G9D8',n));if(!Po(e))throw new TypeError(Ya('0G9D9',e));if(n.length!==e.length)throw new RangeError(Ya('0G93S',n.length,e.length));return HM(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}Ao.exports=JM
});var Co=c(function(HW,Bo){
var QM=Lo();Bo.exports=QM
});var Ko=c(function(JW,Io){
var Go=require('@stdlib/assert/is-float64vector-like/dist'),Xa=require('@stdlib/string/format/dist'),UM=Sr().ndarray;function WM(n,e){if(!Go(n))throw new TypeError(Xa('0G9D8',n));if(!Go(e))throw new TypeError(Xa('0G9D9',e));if(n.length!==e.length)throw new RangeError(Xa('0G93S',n.length,e.length));return UM(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}Io.exports=WM
});var zo=c(function(QW,Vo){
var $M=Ko();Vo.exports=$M
});var Ho=c(function(UW,Do){
var da=5;function hM(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%da,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<da)return a;for(u=v;u<n;u+=da)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}Do.exports=hM
});var Qo=c(function(WW,Jo){
var Gr=5;function YM(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Gr,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Gr)return a;for(s=v;s<n;s+=Gr)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Gr;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}Jo.exports=YM
});var $o=c(function($W,Wo){
var XM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Uo=Ho(),dM=Qo();XM(Uo,"ndarray",dM);Wo.exports=Uo
});var Xo=c(function(hW,Yo){
var xM=require("path").join,NM=require('@stdlib/utils/try-require/dist'),r7=require('@stdlib/assert/is-error/dist'),e7=$o(),xa,ho=NM(xM(__dirname,"./native.js"));r7(ho)?xa=e7:xa=ho;Yo.exports=xa
});var rf=c(function(YW,No){
var xo=require('@stdlib/math/base/special/abs/dist');function a7(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,xo(r)>=xo(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}No.exports=a7
});var uf=c(function(XW,af){
var ef=require('@stdlib/math/base/special/abs/dist');function u7(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,ef(u)>=ef(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}af.exports=u7
});var sf=c(function(dW,vf){
var i7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nf=rf(),n7=uf();i7(nf,"ndarray",n7);vf.exports=nf
});var Ir=c(function(xW,of){
var v7=require("path").join,s7=require('@stdlib/utils/try-require/dist'),t7=require('@stdlib/assert/is-error/dist'),o7=sf(),Na,tf=s7(v7(__dirname,"./native.js"));t7(tf)?Na=o7:Na=tf;of.exports=Na
});var qf=c(function(NW,ff){
var f7=Ir();function q7(n,e,a,i){return f7(n,e,a,i)}ff.exports=q7
});var mf=c(function(r9,cf){
var c7=Ir().ndarray;function m7(n,e,a,i,r){return c7(n,e,a,i,r)}cf.exports=m7
});var jf=c(function(e9,pf){
var l7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lf=qf(),p7=mf();l7(lf,"ndarray",p7);pf.exports=lf
});var wf=c(function(a9,bf){
var j7=require("path").join,g7=require('@stdlib/utils/try-require/dist'),b7=require('@stdlib/assert/is-error/dist'),w7=jf(),ru,gf=g7(j7(__dirname,"./native.js"));b7(gf)?ru=w7:ru=gf;bf.exports=ru
});var Rf=c(function(u9,yf){
var Kr=require('@stdlib/math/base/special/abs/dist');function y7(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,Kr(r)>=Kr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Kr(s)>=Kr(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}yf.exports=y7
});var _f=c(function(i9,kf){
var Vr=require('@stdlib/math/base/special/abs/dist');function R7(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,Vr(u)>=Vr(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,Vr(o)>=Vr(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}kf.exports=R7
});var Ff=c(function(n9,Of){
var k7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ef=Rf(),_7=_f();k7(Ef,"ndarray",_7);Of.exports=Ef
});var Sf=c(function(v9,Tf){
var E7=require("path").join,O7=require('@stdlib/utils/try-require/dist'),F7=require('@stdlib/assert/is-error/dist'),M7=Ff(),eu,Mf=O7(E7(__dirname,"./native.js"));F7(Mf)?eu=M7:eu=Mf;Tf.exports=eu
});var Pf=c(function(s9,Zf){
function T7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Zf.exports=T7
});var Lf=c(function(t9,Af){
function S7(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Af.exports=S7
});var Gf=c(function(o9,Cf){
var Z7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Bf=Pf(),P7=Lf();Z7(Bf,"ndarray",P7);Cf.exports=Bf
});var Vf=c(function(f9,Kf){
var A7=require("path").join,L7=require('@stdlib/utils/try-require/dist'),B7=require('@stdlib/assert/is-error/dist'),C7=Gf(),au,If=L7(A7(__dirname,"./native.js"));B7(If)?au=C7:au=If;Kf.exports=au
});var iu=c(function(q9,zf){
var G7=require('@stdlib/math/base/special/floor/dist'),I7=128;function uu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=I7){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=G7(n/2),g-=g%8,uu(g,e,a,i,u)+uu(n-g,e,a,i,u+g*i)}zf.exports=uu
});var Hf=c(function(c9,Df){
var K7=iu();function V7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return K7(n,e,a,i,r)}Df.exports=V7
});var Uf=c(function(m9,Qf){
var z7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Jf=Hf(),D7=iu();z7(Jf,"ndarray",D7);Qf.exports=Jf
});var hf=c(function(l9,$f){
var H7=require("path").join,J7=require('@stdlib/utils/try-require/dist'),Q7=require('@stdlib/assert/is-error/dist'),U7=Uf(),nu,Wf=J7(H7(__dirname,"./native.js"));Q7(Wf)?nu=U7:nu=Wf;$f.exports=nu
});var su=c(function(p9,Yf){
var W7=require('@stdlib/math/base/special/floor/dist'),M=require('@stdlib/math/base/special/abs/dist'),$7=128;function vu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return M(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=M(e[r]),r+=a;return l}if(n<=$7){for(u=M(e[r]),v=M(e[r+a]),s=M(e[r+2*a]),o=M(e[r+3*a]),t=M(e[r+4*a]),f=M(e[r+5*a]),q=M(e[r+6*a]),m=M(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=M(e[r]),v+=M(e[r+a]),s+=M(e[r+2*a]),o+=M(e[r+3*a]),t+=M(e[r+4*a]),f+=M(e[r+5*a]),q+=M(e[r+6*a]),m+=M(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=M(e[r]),r+=a;return l}return j=W7(n/2),j-=j%8,vu(j,e,a,r)+vu(n-j,e,a,r+j*a)}Yf.exports=vu
});var xf=c(function(j9,df){
var Xf=require('@stdlib/math/base/special/abs/dist'),h7=su();function Y7(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Xf(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=Xf(e[i]),i+=a;return r}return h7(n,e,a,i)}df.exports=Y7
});var eq=c(function(g9,rq){
var X7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Nf=xf(),d7=su();X7(Nf,"ndarray",d7);rq.exports=Nf
});var iq=c(function(b9,uq){
var x7=require("path").join,N7=require('@stdlib/utils/try-require/dist'),rT=require('@stdlib/assert/is-error/dist'),eT=eq(),tu,aq=N7(x7(__dirname,"./native.js"));rT(aq)?tu=eT:tu=aq;uq.exports=tu
});var sq=c(function(w9,vq){
var nq=require('@stdlib/math/base/special/abs/dist');function aT(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,nq(o)>=nq(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}vq.exports=aT
});var fq=c(function(y9,oq){
var tq=require('@stdlib/math/base/special/abs/dist');function uT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,tq(f)>=tq(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}oq.exports=uT
});var mq=c(function(R9,cq){
var iT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qq=sq(),nT=fq();iT(qq,"ndarray",nT);cq.exports=qq
});var zr=c(function(k9,pq){
var vT=require("path").join,sT=require('@stdlib/utils/try-require/dist'),tT=require('@stdlib/assert/is-error/dist'),oT=mq(),ou,lq=sT(vT(__dirname,"./native.js"));tT(lq)?ou=oT:ou=lq;pq.exports=ou
});var gq=c(function(_9,jq){
var fT=zr();function qT(n,e,a,i,r,u){return fT(n,e,a,i,r,u)}jq.exports=qT
});var wq=c(function(E9,bq){
var cT=zr().ndarray;function mT(n,e,a,i,r,u,v,s){return cT(n,e,a,i,r,u,v,s)}bq.exports=mT
});var kq=c(function(O9,Rq){
var lT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yq=gq(),pT=wq();lT(yq,"ndarray",pT);Rq.exports=yq
});var Oq=c(function(F9,Eq){
var jT=require("path").join,gT=require('@stdlib/utils/try-require/dist'),bT=require('@stdlib/assert/is-error/dist'),wT=kq(),fu,_q=gT(jT(__dirname,"./native.js"));bT(_q)?fu=wT:fu=_q;Eq.exports=fu
});var Mq=c(function(M9,Fq){
var Dr=require('@stdlib/math/base/special/abs/dist');function yT(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,Dr(e)>=Dr(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,Dr(t)>=Dr(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}Fq.exports=yT
});var Sq=c(function(T9,Tq){
var Hr=require('@stdlib/math/base/special/abs/dist');function RT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=e+p,Hr(e)>=Hr(p)?j=e-l+p:j=p-l+e,e=l,l=q+j,Hr(q)>=Hr(j)?m=q-l+j:m=j-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}Tq.exports=RT
});var Aq=c(function(S9,Pq){
var kT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Zq=Mq(),_T=Sq();kT(Zq,"ndarray",_T);Pq.exports=Zq
});var Cq=c(function(Z9,Bq){
var ET=require("path").join,OT=require('@stdlib/utils/try-require/dist'),FT=require('@stdlib/assert/is-error/dist'),MT=Aq(),qu,Lq=OT(ET(__dirname,"./native.js"));FT(Lq)?qu=MT:qu=Lq;Bq.exports=qu
});var Iq=c(function(P9,Gq){
function TT(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}Gq.exports=TT
});var Vq=c(function(A9,Kq){
function ST(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}Kq.exports=ST
});var Hq=c(function(L9,Dq){
var ZT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zq=Iq(),PT=Vq();ZT(zq,"ndarray",PT);Dq.exports=zq
});var Uq=c(function(B9,Qq){
var AT=require("path").join,LT=require('@stdlib/utils/try-require/dist'),BT=require('@stdlib/assert/is-error/dist'),CT=Hq(),cu,Jq=LT(AT(__dirname,"./native.js"));BT(Jq)?cu=CT:cu=Jq;Qq.exports=cu
});var lu=c(function(C9,Wq){
var GT=require('@stdlib/math/base/special/floor/dist'),IT=128;function mu(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=IT){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=GT(n/2),mu(q,e,a,i,o,u,v,t),t+=(q-1)*v,mu(n-q,u[t],a,i,o+q*i,u,v,t+v),u}Wq.exports=mu
});var hq=c(function(G9,$q){
var KT=lu();function VT(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,KT(n,e,a,i,v,r,u,s))}$q.exports=VT
});var dq=c(function(I9,Xq){
var zT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yq=hq(),DT=lu();zT(Yq,"ndarray",DT);Xq.exports=Yq
});var rc=c(function(K9,Nq){
var HT=require("path").join,JT=require('@stdlib/utils/try-require/dist'),QT=require('@stdlib/assert/is-error/dist'),UT=dq(),pu,xq=JT(HT(__dirname,"./native.js"));QT(xq)?pu=UT:pu=xq;Nq.exports=pu
});var ac=c(function(V9,ec){
var ju=8;function WT(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ju,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ju)return a;for(u=v;u<n;u+=ju)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}ec.exports=WT
});var ic=c(function(z9,uc){
var Jr=8;function $T(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%Jr,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<Jr)return a;for(s=v;s<n;s+=Jr)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=Jr;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}uc.exports=$T
});var sc=c(function(D9,vc){
var hT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nc=ac(),YT=ic();hT(nc,"ndarray",YT);vc.exports=nc
});var fc=c(function(H9,oc){
var XT=require("path").join,dT=require('@stdlib/utils/try-require/dist'),xT=require('@stdlib/assert/is-error/dist'),NT=sc(),gu,tc=dT(XT(__dirname,"./native.js"));xT(tc)?gu=NT:gu=tc;oc.exports=gu
});var lc=c(function(J9,mc){
var qc=require('@stdlib/math/base/assert/is-nan/dist'),cc=require('@stdlib/math/base/special/abs/dist');function rS(n,e,a){var i,r,u,v;if(n<=0)return 0;if(n===1||a===0)return qc(e[0])?0:cc(e[0]);for(a<0?r=(1-n)*a:r=0,i=0,v=0;v<n;v++)u=e[r],qc(u)===!1&&(i+=cc(u)),r+=a;return i}mc.exports=rS
});var bc=c(function(Q9,gc){
var pc=require('@stdlib/math/base/assert/is-nan/dist'),jc=require('@stdlib/math/base/special/abs/dist');function eS(n,e,a,i){var r,u,v,s;if(n<=0)return 0;if(n===1||a===0)return pc(e[i])?0:jc(e[i]);for(u=i,r=0,s=0;s<n;s++)v=e[u],pc(v)===!1&&(r+=jc(v)),u+=a;return r}gc.exports=eS
});var Rc=c(function(U9,yc){
var aS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wc=lc(),uS=bc();aS(wc,"ndarray",uS);yc.exports=wc
});var Qr=c(function(W9,_c){
var iS=require("path").join,nS=require('@stdlib/utils/try-require/dist'),vS=require('@stdlib/assert/is-error/dist'),sS=Rc(),bu,kc=nS(iS(__dirname,"./native.js"));vS(kc)?bu=sS:bu=kc;_c.exports=bu
});var Oc=c(function($9,Ec){
var tS=Qr();function oS(n,e,a){return tS(n,e,a)}Ec.exports=oS
});var Mc=c(function(h9,Fc){
var fS=Qr().ndarray;function qS(n,e,a,i){return fS(n,e,a,i)}Fc.exports=qS
});var Zc=c(function(Y9,Sc){
var cS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Tc=Oc(),mS=Mc();cS(Tc,"ndarray",mS);Sc.exports=Tc
});var Lc=c(function(X9,Ac){
var lS=require("path").join,pS=require('@stdlib/utils/try-require/dist'),jS=require('@stdlib/assert/is-error/dist'),gS=Zc(),wu,Pc=pS(lS(__dirname,"./native.js"));jS(Pc)?wu=gS:wu=Pc;Ac.exports=wu
});var Ic=c(function(d9,Gc){
var Bc=require('@stdlib/math/base/assert/is-nan/dist'),Cc=require('@stdlib/math/base/special/abs/dist');function bS(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Bc(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Bc(o)===!1&&(t=u+o,Cc(u)>=Cc(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Gc.exports=bS
});var Dc=c(function(x9,zc){
var Kc=require('@stdlib/math/base/assert/is-nan/dist'),Vc=require('@stdlib/math/base/special/abs/dist');function wS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Kc(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],Kc(f)===!1&&(q=s+f,Vc(s)>=Vc(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}zc.exports=wS
});var Qc=c(function(N9,Jc){
var yS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hc=Ic(),RS=Dc();yS(Hc,"ndarray",RS);Jc.exports=Hc
});var Ur=c(function(r$,Wc){
var kS=require("path").join,_S=require('@stdlib/utils/try-require/dist'),ES=require('@stdlib/assert/is-error/dist'),OS=Qc(),yu,Uc=_S(kS(__dirname,"./native.js"));ES(Uc)?yu=OS:yu=Uc;Wc.exports=yu
});var hc=c(function(e$,$c){
var FS=Ur();function MS(n,e,a,i,r){return FS(n,e,a,i,r)}$c.exports=MS
});var Xc=c(function(a$,Yc){
var TS=Ur().ndarray;function SS(n,e,a,i,r,u,v){return TS(n,e,a,i,r,u,v)}Yc.exports=SS
});var Nc=c(function(u$,xc){
var ZS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),dc=hc(),PS=Xc();ZS(dc,"ndarray",PS);xc.exports=dc
});var am=c(function(i$,em){
var AS=require("path").join,LS=require('@stdlib/utils/try-require/dist'),BS=require('@stdlib/assert/is-error/dist'),CS=Nc(),Ru,rm=LS(AS(__dirname,"./native.js"));BS(rm)?Ru=CS:Ru=rm;em.exports=Ru
});var nm=c(function(n$,im){
var um=require('@stdlib/math/base/assert/is-nan/dist'),Wr=require('@stdlib/math/base/special/abs/dist');function GS(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j;if(a<0?t=(1-n)*a:t=0,r<0?f=-r:f=0,u=0,n<=0)return i[f]=u,i[f+r]=0,i;if(n===1||a===0)return um(e[t])?(i[f]=u,i[f+r]=0,i):(i[f]=e[t],i[f+r]=1,i);for(v=0,s=0,l=0,j=0;j<n;j++)q=e[t],um(q)===!1&&(m=u+q,Wr(u)>=Wr(q)?p=u-m+q:p=q-m+u,u=m,m=s+p,Wr(s)>=Wr(p)?o=s-m+p:o=p-m+s,s=m,v+=o,l+=1),t+=a;return i[f]=u+s+v,i[f+r]=l,i}im.exports=GS
});var tm=c(function(v$,sm){
var vm=require('@stdlib/math/base/assert/is-nan/dist'),$r=require('@stdlib/math/base/special/abs/dist');function IS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,j,g,b;if(q=i,m=v,s=0,n<=0)return r[m]=s,r[m+u]=0,r;if(n===1||a===0)return vm(e[q])?(r[m]=s,r[m+u]=0,r):(r[m]=e[q],r[m+u]=1,r);for(o=0,t=0,g=0,b=0;b<n;b++)p=e[q],vm(p)===!1&&(l=s+p,$r(s)>=$r(p)?j=s-l+p:j=p-l+s,s=l,l=t+j,$r(t)>=$r(j)?f=t-l+j:f=j-l+t,t=l,o+=f,g+=1),q+=a;return r[m]=s+t+o,r[m+u]=g,r}sm.exports=IS
});var qm=c(function(s$,fm){
var KS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),om=nm(),VS=tm();KS(om,"ndarray",VS);fm.exports=om
});var lm=c(function(t$,mm){
var zS=require("path").join,DS=require('@stdlib/utils/try-require/dist'),HS=require('@stdlib/assert/is-error/dist'),JS=qm(),ku,cm=DS(zS(__dirname,"./native.js"));HS(cm)?ku=JS:ku=cm;mm.exports=ku
});var gm=c(function(o$,jm){
var pm=require('@stdlib/math/base/assert/is-nan/dist');function QS(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return pm(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)pm(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}jm.exports=QS
});var ym=c(function(f$,wm){
var bm=require('@stdlib/math/base/assert/is-nan/dist');function US(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return bm(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)bm(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}wm.exports=US
});var _m=c(function(q$,km){
var WS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Rm=gm(),$S=ym();WS(Rm,"ndarray",$S);km.exports=Rm
});var Fm=c(function(c$,Om){
var hS=require("path").join,YS=require('@stdlib/utils/try-require/dist'),XS=require('@stdlib/assert/is-error/dist'),dS=_m(),_u,Em=YS(hS(__dirname,"./native.js"));XS(Em)?_u=dS:_u=Em;Om.exports=_u
});var Ou=c(function(m$,Mm){
var xS=require('@stdlib/math/base/assert/is-nan/dist'),NS=require('@stdlib/math/base/special/floor/dist'),rZ=128;function Eu(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,j,g,b,R,_,k,h;if(n<=0)return r;if(s=i,o=v,n===1||a===0)return xS(e[s])||(r[o]+=e[s],r[o+u]+=1),r;if(n<8){for(R=0,_=0,h=0;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}if(n<=rZ){for(t=0,f=0,q=0,m=0,p=0,l=0,j=0,g=0,_=0,b=n%8,h=0;h<n-b;h+=8)k=e[s],k===k&&(t+=k,_+=1),s+=a,k=e[s],k===k&&(f+=k,_+=1),s+=a,k=e[s],k===k&&(q+=k,_+=1),s+=a,k=e[s],k===k&&(m+=k,_+=1),s+=a,k=e[s],k===k&&(p+=k,_+=1),s+=a,k=e[s],k===k&&(l+=k,_+=1),s+=a,k=e[s],k===k&&(j+=k,_+=1),s+=a,k=e[s],k===k&&(g+=k,_+=1),s+=a;for(R=t+f+(q+m)+(p+l+(j+g)),h;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}return _=NS(n/2),_-=_%8,Eu(_,e,a,s,r,u,v),Eu(n-_,e,a,s+_*a,r,u,v),r}Mm.exports=Eu
});var Sm=c(function(l$,Tm){
var eZ=Ou();function aZ(n,e,a,i,r){var u,v;return a<0?u=(1-n)*a:u=0,r<0?v=-r:v=0,i[v]=0,i[v+r]=0,eZ(n,e,a,u,i,r,v),i}Tm.exports=aZ
});var Pm=c(function(p$,Zm){
var uZ=Ou();function iZ(n,e,a,i,r,u,v){return r[v]=0,r[v+u]=0,uZ(n,e,a,i,r,u,v),r}Zm.exports=iZ
});var Bm=c(function(j$,Lm){
var nZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Am=Sm(),vZ=Pm();nZ(Am,"ndarray",vZ);Lm.exports=Am
});var Im=c(function(g$,Gm){
var sZ=require("path").join,tZ=require('@stdlib/utils/try-require/dist'),oZ=require('@stdlib/assert/is-error/dist'),fZ=Bm(),Fu,Cm=tZ(sZ(__dirname,"./native.js"));oZ(Cm)?Fu=fZ:Fu=Cm;Gm.exports=Fu
});var Dm=c(function(b$,zm){
var Km=require('@stdlib/math/base/assert/is-nan/dist'),Vm=require('@stdlib/math/base/special/abs/dist');function qZ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return Km(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],Km(u)===!1&&(v=i+u,Vm(i)>=Vm(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}zm.exports=qZ
});var Um=c(function(w$,Qm){
var Hm=require('@stdlib/math/base/assert/is-nan/dist'),Jm=require('@stdlib/math/base/special/abs/dist');function cZ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return Hm(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],Hm(v)===!1&&(s=r+v,Jm(r)>=Jm(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}Qm.exports=cZ
});var hm=c(function(y$,$m){
var mZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Wm=Dm(),lZ=Um();mZ(Wm,"ndarray",lZ);$m.exports=Wm
});var hr=c(function(R$,Xm){
var pZ=require("path").join,jZ=require('@stdlib/utils/try-require/dist'),gZ=require('@stdlib/assert/is-error/dist'),bZ=hm(),Mu,Ym=jZ(pZ(__dirname,"./native.js"));gZ(Ym)?Mu=bZ:Mu=Ym;Xm.exports=Mu
});var xm=c(function(k$,dm){
var wZ=hr();function yZ(n,e,a){return wZ(n,e,a)}dm.exports=yZ
});var r1=c(function(_$,Nm){
var RZ=hr().ndarray;function kZ(n,e,a,i){return RZ(n,e,a,i)}Nm.exports=kZ
});var u1=c(function(E$,a1){
var _Z=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),e1=xm(),EZ=r1();_Z(e1,"ndarray",EZ);a1.exports=e1
});var v1=c(function(O$,n1){
var OZ=require("path").join,FZ=require('@stdlib/utils/try-require/dist'),MZ=require('@stdlib/assert/is-error/dist'),TZ=u1(),Tu,i1=FZ(OZ(__dirname,"./native.js"));MZ(i1)?Tu=TZ:Tu=i1;n1.exports=Tu
});var o1=c(function(F$,t1){
var s1=require('@stdlib/math/base/assert/is-nan/dist'),Yr=require('@stdlib/math/base/special/abs/dist');function SZ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return s1(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],s1(o)===!1&&(t=i+o,Yr(i)>=Yr(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Yr(v)>=Yr(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}t1.exports=SZ
});var c1=c(function(M$,q1){
var f1=require('@stdlib/math/base/assert/is-nan/dist'),Xr=require('@stdlib/math/base/special/abs/dist');function ZZ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return f1(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f1(t)===!1&&(f=r+t,Xr(r)>=Xr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Xr(s)>=Xr(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}q1.exports=ZZ
});var p1=c(function(T$,l1){
var PZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),m1=o1(),AZ=c1();PZ(m1,"ndarray",AZ);l1.exports=m1
});var b1=c(function(S$,g1){
var LZ=require("path").join,BZ=require('@stdlib/utils/try-require/dist'),CZ=require('@stdlib/assert/is-error/dist'),GZ=p1(),Su,j1=BZ(LZ(__dirname,"./native.js"));CZ(j1)?Su=GZ:Su=j1;g1.exports=Su
});var R1=c(function(Z$,y1){
var w1=require('@stdlib/math/base/assert/is-nan/dist');function IZ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return w1(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)w1(e[r])===!1&&(i+=e[r]),r+=a;return i}y1.exports=IZ
});var E1=c(function(P$,_1){
var k1=require('@stdlib/math/base/assert/is-nan/dist');function KZ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return k1(e[i])?r:e[i];for(u=i,v=0;v<n;v++)k1(e[u])===!1&&(r+=e[u]),u+=a;return r}_1.exports=KZ
});var M1=c(function(A$,F1){
var VZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O1=R1(),zZ=E1();VZ(O1,"ndarray",zZ);F1.exports=O1
});var Z1=c(function(L$,S1){
var DZ=require("path").join,HZ=require('@stdlib/utils/try-require/dist'),JZ=require('@stdlib/assert/is-error/dist'),QZ=M1(),Zu,T1=HZ(DZ(__dirname,"./native.js"));JZ(T1)?Zu=QZ:Zu=T1;S1.exports=Zu
});var Au=c(function(B$,P1){
var T=require('@stdlib/math/base/assert/is-nan/dist'),UZ=require('@stdlib/math/base/special/floor/dist'),WZ=128;function Pu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return T(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=WZ){for(u=T(e[r])?0:e[r],r+=a,v=T(e[r])?0:e[r],r+=a,s=T(e[r])?0:e[r],r+=a,o=T(e[r])?0:e[r],r+=a,t=T(e[r])?0:e[r],r+=a,f=T(e[r])?0:e[r],r+=a,q=T(e[r])?0:e[r],r+=a,m=T(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=T(e[r])?0:e[r],r+=a,v+=T(e[r])?0:e[r],r+=a,s+=T(e[r])?0:e[r],r+=a,o+=T(e[r])?0:e[r],r+=a,t+=T(e[r])?0:e[r],r+=a,f+=T(e[r])?0:e[r],r+=a,q+=T(e[r])?0:e[r],r+=a,m+=T(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=UZ(n/2),j-=j%8,Pu(j,e,a,r)+Pu(n-j,e,a,r+j*a)}P1.exports=Pu
});var B1=c(function(C$,L1){
var A1=require('@stdlib/math/base/assert/is-nan/dist'),$Z=Au();function hZ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return A1(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)A1(e[i])===!1&&(r+=e[i]),i+=a;return r}return $Z(n,e,a,i)}L1.exports=hZ
});var I1=c(function(G$,G1){
var YZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),C1=B1(),XZ=Au();YZ(C1,"ndarray",XZ);G1.exports=C1
});var z1=c(function(I$,V1){
var dZ=require("path").join,xZ=require('@stdlib/utils/try-require/dist'),NZ=require('@stdlib/assert/is-error/dist'),rP=I1(),Lu,K1=xZ(dZ(__dirname,"./native.js"));NZ(K1)?Lu=rP:Lu=K1;V1.exports=Lu
});var H1=c(function(K$,D1){
var eP=require('@stdlib/math/base/special/floor/dist'),dr=3;function aP(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=eP(n/2),a===1){if(v=s%dr,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<dr)return e;for(r=v;r<s;r+=dr)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=dr;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}D1.exports=aP
});var Q1=c(function(V$,J1){
var uP=require('@stdlib/math/base/special/floor/dist'),_r=3;function iP(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=uP(n/2),u=i,a===1){if(s=o%_r,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<_r)return e;for(t=s;t<o;t+=_r)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=_r,v-=_r;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}J1.exports=iP
});var $1=c(function(z$,W1){
var nP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),U1=H1(),vP=Q1();nP(U1,"ndarray",vP);W1.exports=U1
});var X1=c(function(D$,Y1){
var sP=require("path").join,tP=require('@stdlib/utils/try-require/dist'),oP=require('@stdlib/assert/is-error/dist'),fP=$1(),Bu,h1=tP(sP(__dirname,"./native.js"));oP(h1)?Bu=fP:Bu=h1;Y1.exports=Bu
});var Gu=c(function(H$,d1){
var qP=require('@stdlib/math/base/special/floor/dist'),cP=128;function Cu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=cP){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=qP(n/2),g-=g%8,Cu(g,e,a,i,u)+Cu(n-g,e,a,i,u+g*i)}d1.exports=Cu
});var N1=c(function(J$,x1){
var mP=Gu();function lP(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return mP(n,e,a,i,r)}x1.exports=lP
});var al=c(function(Q$,el){
var pP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),rl=N1(),jP=Gu();pP(rl,"ndarray",jP);el.exports=rl
});var xr=c(function(U$,il){
var gP=require("path").join,bP=require('@stdlib/utils/try-require/dist'),wP=require('@stdlib/assert/is-error/dist'),yP=al(),Iu,ul=bP(gP(__dirname,"./native.js"));wP(ul)?Iu=yP:Iu=ul;il.exports=Iu
});var vl=c(function(W$,nl){
var RP=xr();function kP(n,e,a,i){return RP(n,e,a,i)}nl.exports=kP
});var tl=c(function($$,sl){
var _P=xr().ndarray;function EP(n,e,a,i,r){return _P(n,e,a,i,r)}sl.exports=EP
});var ql=c(function(h$,fl){
var OP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ol=vl(),FP=tl();OP(ol,"ndarray",FP);fl.exports=ol
});var ll=c(function(Y$,ml){
var MP=require("path").join,TP=require('@stdlib/utils/try-require/dist'),SP=require('@stdlib/assert/is-error/dist'),ZP=ql(),Ku,cl=TP(MP(__dirname,"./native.js"));SP(cl)?Ku=ZP:Ku=cl;ml.exports=Ku
});var gl=c(function(X$,jl){
var pl=require('@stdlib/math/base/assert/is-nan/dist');function PP(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return pl(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)pl(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}jl.exports=PP
});var yl=c(function(d$,wl){
var bl=require('@stdlib/math/base/assert/is-nan/dist');function AP(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return bl(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)bl(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}wl.exports=AP
});var _l=c(function(x$,kl){
var LP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Rl=gl(),BP=yl();LP(Rl,"ndarray",BP);kl.exports=Rl
});var Fl=c(function(N$,Ol){
var CP=require("path").join,GP=require('@stdlib/utils/try-require/dist'),IP=require('@stdlib/assert/is-error/dist'),KP=_l(),Vu,El=GP(CP(__dirname,"./native.js"));IP(El)?Vu=KP:Vu=El;Ol.exports=Vu
});var Du=c(function(rh,Ml){
var S=require('@stdlib/math/base/assert/is-nanf/dist'),VP=require('@stdlib/math/base/special/floor/dist'),zP=128;function zu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return S(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=zP){for(u=S(e[r])?0:e[r],r+=a,v=S(e[r])?0:e[r],r+=a,s=S(e[r])?0:e[r],r+=a,o=S(e[r])?0:e[r],r+=a,t=S(e[r])?0:e[r],r+=a,f=S(e[r])?0:e[r],r+=a,q=S(e[r])?0:e[r],r+=a,m=S(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=S(e[r])?0:e[r],r+=a,v+=S(e[r])?0:e[r],r+=a,s+=S(e[r])?0:e[r],r+=a,o+=S(e[r])?0:e[r],r+=a,t+=S(e[r])?0:e[r],r+=a,f+=S(e[r])?0:e[r],r+=a,q+=S(e[r])?0:e[r],r+=a,m+=S(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=VP(n/2),j-=j%8,zu(j,e,a,r)+zu(n-j,e,a,r+j*a)}Ml.exports=zu
});var Zl=c(function(eh,Sl){
var Tl=require('@stdlib/math/base/assert/is-nanf/dist'),DP=Du();function HP(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Tl(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Tl(e[i])===!1&&(r+=e[i]),i+=a;return r}return DP(n,e,a,i)}Sl.exports=HP
});var Ll=c(function(ah,Al){
var JP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Pl=Zl(),QP=Du();JP(Pl,"ndarray",QP);Al.exports=Pl
});var Nr=c(function(uh,Cl){
var UP=require("path").join,WP=require('@stdlib/utils/try-require/dist'),$P=require('@stdlib/assert/is-error/dist'),hP=Ll(),Hu,Bl=WP(UP(__dirname,"./native.js"));$P(Bl)?Hu=hP:Hu=Bl;Cl.exports=Hu
});var Il=c(function(ih,Gl){
var YP=Nr();function XP(n,e,a){return YP(n,e,a)}Gl.exports=XP
});var Vl=c(function(nh,Kl){
var dP=Nr().ndarray;function xP(n,e,a,i){return dP(n,e,a,i)}Kl.exports=xP
});var Hl=c(function(vh,Dl){
var NP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zl=Il(),rA=Vl();NP(zl,"ndarray",rA);Dl.exports=zl
});var Ul=c(function(sh,Ql){
var eA=require("path").join,aA=require('@stdlib/utils/try-require/dist'),uA=require('@stdlib/assert/is-error/dist'),iA=Hl(),Ju,Jl=aA(eA(__dirname,"./native.js"));uA(Jl)?Ju=iA:Ju=Jl;Ql.exports=Ju
});var hl=c(function(th,$l){
var Wl=require('@stdlib/math/base/assert/is-nan/dist');function nA(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return Wl(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)Wl(e[r])===!1&&(i+=e[r]),r+=a;return i}$l.exports=nA
});var dl=c(function(oh,Xl){
var Yl=require('@stdlib/math/base/assert/is-nan/dist');function vA(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return Yl(e[i])?r:e[i];for(u=i,v=0;v<n;v++)Yl(e[u])===!1&&(r+=e[u]),u+=a;return r}Xl.exports=vA
});var rp=c(function(fh,Nl){
var sA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xl=hl(),tA=dl();sA(xl,"ndarray",tA);Nl.exports=xl
});var up=c(function(qh,ap){
var oA=require("path").join,fA=require('@stdlib/utils/try-require/dist'),qA=require('@stdlib/assert/is-error/dist'),cA=rp(),Qu,ep=fA(oA(__dirname,"./native.js"));qA(ep)?Qu=cA:Qu=ep;ap.exports=Qu
});var sp=c(function(ch,vp){
var ip=require('@stdlib/math/base/assert/is-positive-zero/dist'),np=require('@stdlib/math/base/assert/is-nan/dist'),mA=require('@stdlib/math/base/special/floor/dist');function lA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=mA(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||np(f)||f===q&&ip(f))&&(t+=1)),f=a[v+t*i],f>m||np(f)||f===m&&ip(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}vp.exports=lA
});var qp=c(function(mh,fp){
var tp=require('@stdlib/math/base/assert/is-positive-zero/dist'),op=require('@stdlib/math/base/assert/is-nan/dist'),pA=require('@stdlib/math/base/special/floor/dist');function jA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=pA(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||op(f)||f===q&&tp(f))&&(t+=1)),f=a[r+t*i],f>m||op(f)||f===m&&tp(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}fp.exports=jA
});var lp=c(function(lh,mp){
var gA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),cp=sp(),bA=qp();gA(cp,"ndarray",bA);mp.exports=cp
});var gp=c(function(ph,jp){
var wA=require("path").join,yA=require('@stdlib/utils/try-require/dist'),RA=require('@stdlib/assert/is-error/dist'),kA=lp(),Uu,pp=yA(wA(__dirname,"./native.js"));RA(pp)?Uu=kA:Uu=pp;jp.exports=Uu
});var yp=c(function(jh,wp){
var re=require('@stdlib/math/base/assert/is-negative-zero/dist'),bp=require('@stdlib/math/base/assert/is-nan/dist');function _A(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],bp(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=re(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&re(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],bp(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=re(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&re(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}wp.exports=_A
});var _p=c(function(gh,kp){
var ee=require('@stdlib/math/base/assert/is-negative-zero/dist'),Rp=require('@stdlib/math/base/assert/is-nan/dist');function EA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],Rp(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=ee(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ee(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],Rp(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=ee(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ee(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}kp.exports=EA
});var Fp=c(function(bh,Op){
var OA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ep=yp(),FA=_p();OA(Ep,"ndarray",FA);Op.exports=Ep
});var Sp=c(function(wh,Tp){
var MA=require("path").join,TA=require('@stdlib/utils/try-require/dist'),SA=require('@stdlib/assert/is-error/dist'),ZA=Fp(),Wu,Mp=TA(MA(__dirname,"./native.js"));SA(Mp)?Wu=ZA:Wu=Mp;Tp.exports=Wu
});var $u=c(function(yh,PA){PA.exports=[701,301,132,57,23,10,4,1]});var Ap=c(function(Rh,Pp){
var AA=require('@stdlib/math/base/assert/is-negative-zero/dist'),LA=require('@stdlib/math/base/assert/is-nan/dist'),Zp=$u(),BA=Zp.length;function CA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<BA;p++)for(t=Zp[p],l=t;l<n;l++)if(f=a[v+l*i],!LA(f)){for(q=r[s+l*u],o=AA(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}Pp.exports=CA
});var Cp=c(function(kh,Bp){
var GA=require('@stdlib/math/base/assert/is-negative-zero/dist'),IA=require('@stdlib/math/base/assert/is-nan/dist'),Lp=$u(),KA=Lp.length;function VA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<KA;p++)for(t=Lp[p],l=t;l<n;l++)if(f=a[r+l*i],!IA(f)){for(q=u[s+l*v],o=GA(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}Bp.exports=VA
});var Kp=c(function(_h,Ip){
var zA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gp=Ap(),DA=Cp();zA(Gp,"ndarray",DA);Ip.exports=Gp
});var Dp=c(function(Eh,zp){
var HA=require("path").join,JA=require('@stdlib/utils/try-require/dist'),QA=require('@stdlib/assert/is-error/dist'),UA=Kp(),hu,Vp=JA(HA(__dirname,"./native.js"));QA(Vp)?hu=UA:hu=Vp;zp.exports=hu
});var Up=c(function(Oh,Qp){
var Hp=require('@stdlib/math/base/assert/is-positive-zero/dist'),Jp=require('@stdlib/math/base/assert/is-nan/dist'),WA=require('@stdlib/math/base/special/floor/dist');function $A(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=WA(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Jp(s)||s===o&&Hp(s))&&(v+=1)),s=a[r+v*i],s>f||Jp(s)||s===f&&Hp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Qp.exports=$A
});var Yp=c(function(Fh,hp){
var Wp=require('@stdlib/math/base/assert/is-positive-zero/dist'),$p=require('@stdlib/math/base/assert/is-nan/dist'),hA=require('@stdlib/math/base/special/floor/dist');function YA(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=hA(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||$p(s)||s===o&&Wp(s))&&(v+=1)),s=a[r+v*i],s>f||$p(s)||s===f&&Wp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}hp.exports=YA
});var xp=c(function(Mh,dp){
var XA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xp=Up(),dA=Yp();XA(Xp,"ndarray",dA);dp.exports=Xp
});var e2=c(function(Th,r2){
var xA=require("path").join,NA=require('@stdlib/utils/try-require/dist'),rL=require('@stdlib/assert/is-error/dist'),eL=xp(),Yu,Np=NA(xA(__dirname,"./native.js"));rL(Np)?Yu=eL:Yu=Np;r2.exports=Yu
});var i2=c(function(Sh,u2){
var ae=require('@stdlib/math/base/assert/is-negative-zero/dist'),a2=require('@stdlib/math/base/assert/is-nan/dist');function aL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],a2(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ae(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ae(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],a2(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ae(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ae(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}u2.exports=aL
});var s2=c(function(Zh,v2){
var ue=require('@stdlib/math/base/assert/is-negative-zero/dist'),n2=require('@stdlib/math/base/assert/is-nan/dist');function uL(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],n2(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ue(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ue(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],n2(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ue(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ue(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}v2.exports=uL
});var f2=c(function(Ph,o2){
var iL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),t2=i2(),nL=s2();iL(t2,"ndarray",nL);o2.exports=t2
});var m2=c(function(Ah,c2){
var vL=require("path").join,sL=require('@stdlib/utils/try-require/dist'),tL=require('@stdlib/assert/is-error/dist'),oL=f2(),Xu,q2=sL(vL(__dirname,"./native.js"));tL(q2)?Xu=oL:Xu=q2;c2.exports=Xu
});var du=c(function(Lh,fL){fL.exports=[701,301,132,57,23,10,4,1]});var j2=c(function(Bh,p2){
var qL=require('@stdlib/math/base/assert/is-negative-zero/dist'),cL=require('@stdlib/math/base/assert/is-nan/dist'),l2=du(),mL=l2.length;function lL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<mL;t++)for(v=l2[t],f=v;f<n;f++)if(s=a[r+f*i],!cL(s)){for(u=qL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}p2.exports=lL
});var w2=c(function(Ch,b2){
var pL=require('@stdlib/math/base/assert/is-negative-zero/dist'),jL=require('@stdlib/math/base/assert/is-nan/dist'),g2=du(),gL=g2.length;function bL(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<gL;t++)for(v=g2[t],f=v;f<n;f++)if(s=a[r+f*i],!jL(s)){for(u=pL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}b2.exports=bL
});var k2=c(function(Gh,R2){
var wL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),y2=j2(),yL=w2();wL(y2,"ndarray",yL);R2.exports=y2
});var O2=c(function(Ih,E2){
var RL=require("path").join,kL=require('@stdlib/utils/try-require/dist'),_L=require('@stdlib/assert/is-error/dist'),EL=k2(),xu,_2=kL(RL(__dirname,"./native.js"));_L(_2)?xu=EL:xu=_2;E2.exports=xu
});var ri=c(function(Kh,F2){
var OL=require('@stdlib/math/base/special/floor/dist'),FL=128;function Nu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=FL){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=OL(n/2),j-=j%8,Nu(j,e,a,r)+Nu(n-j,e,a,r+j*a)}F2.exports=Nu
});var T2=c(function(Vh,M2){
var ML=ri();function TL(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return ML(n,e,a,i)}M2.exports=TL
});var P2=c(function(zh,Z2){
var SL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),S2=T2(),ZL=ri();SL(S2,"ndarray",ZL);Z2.exports=S2
});var ie=c(function(Dh,L2){
var PL=require("path").join,AL=require('@stdlib/utils/try-require/dist'),LL=require('@stdlib/assert/is-error/dist'),BL=P2(),ei,A2=AL(PL(__dirname,"./native.js"));LL(A2)?ei=BL:ei=A2;L2.exports=ei
});var C2=c(function(Hh,B2){
var CL=ie();function GL(n,e,a){return CL(n,e,a)}B2.exports=GL
});var I2=c(function(Jh,G2){
var IL=ie().ndarray;function KL(n,e,a,i){return IL(n,e,a,i)}G2.exports=KL
});var z2=c(function(Qh,V2){
var VL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),K2=C2(),zL=I2();VL(K2,"ndarray",zL);V2.exports=K2
});var J2=c(function(Uh,H2){
var DL=require("path").join,HL=require('@stdlib/utils/try-require/dist'),JL=require('@stdlib/assert/is-error/dist'),QL=z2(),ai,D2=HL(DL(__dirname,"./native.js"));JL(D2)?ai=QL:ai=D2;H2.exports=ai
});var U2=c(function(Wh,Q2){
var ui=6;function UL(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ui,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ui)return i;for(v=u;v<n;v+=ui)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}Q2.exports=UL
});var $2=c(function($h,W2){
var ne=6;function WL(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%ne,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<ne)return r;for(s=v;s<n;s+=ne)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=ne;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}W2.exports=WL
});var X2=c(function(hh,Y2){
var $L=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),h2=U2(),hL=$2();$L(h2,"ndarray",hL);Y2.exports=h2
});var N2=c(function(Yh,x2){
var YL=require("path").join,XL=require('@stdlib/utils/try-require/dist'),dL=require('@stdlib/assert/is-error/dist'),xL=X2(),ii,d2=XL(YL(__dirname,"./native.js"));dL(d2)?ii=xL:ii=d2;x2.exports=ii
});var aj=c(function(Xh,ej){
var rj=require('@stdlib/math/base/special/abs/dist');function NL(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,rj(i)>=rj(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}ej.exports=NL
});var nj=c(function(dh,ij){
var uj=require('@stdlib/math/base/special/abs/dist');function rB(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,uj(r)>=uj(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}ij.exports=rB
});var tj=c(function(xh,sj){
var eB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),vj=aj(),aB=nj();eB(vj,"ndarray",aB);sj.exports=vj
});var ve=c(function(Nh,fj){
var uB=require("path").join,iB=require('@stdlib/utils/try-require/dist'),nB=require('@stdlib/assert/is-error/dist'),vB=tj(),ni,oj=iB(uB(__dirname,"./native.js"));nB(oj)?ni=vB:ni=oj;fj.exports=ni
});var cj=c(function(rY,qj){
var sB=ve();function tB(n,e,a){return sB(n,e,a)}qj.exports=tB
});var lj=c(function(eY,mj){
var oB=ve().ndarray;function fB(n,e,a,i){return oB(n,e,a,i)}mj.exports=fB
});var gj=c(function(aY,jj){
var qB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pj=cj(),cB=lj();qB(pj,"ndarray",cB);jj.exports=pj
});var yj=c(function(uY,wj){
var mB=require("path").join,lB=require('@stdlib/utils/try-require/dist'),pB=require('@stdlib/assert/is-error/dist'),jB=gj(),vi,bj=lB(mB(__dirname,"./native.js"));pB(bj)?vi=jB:vi=bj;wj.exports=vi
});var kj=c(function(iY,Rj){
var se=require('@stdlib/math/base/special/abs/dist');function gB(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,se(i)>=se(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,se(v)>=se(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}Rj.exports=gB
});var Ej=c(function(nY,_j){
var te=require('@stdlib/math/base/special/abs/dist');function bB(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,te(r)>=te(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,te(s)>=te(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}_j.exports=bB
});var Mj=c(function(vY,Fj){
var wB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Oj=kj(),yB=Ej();wB(Oj,"ndarray",yB);Fj.exports=Oj
});var Zj=c(function(sY,Sj){
var RB=require("path").join,kB=require('@stdlib/utils/try-require/dist'),_B=require('@stdlib/assert/is-error/dist'),EB=Mj(),si,Tj=kB(RB(__dirname,"./native.js"));_B(Tj)?si=EB:si=Tj;Sj.exports=si
});var Aj=c(function(tY,Pj){
var ti=6;function OB(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ti,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ti)return i;for(v=u;v<n;v+=ti)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}Pj.exports=OB
});var Bj=c(function(oY,Lj){
var oe=6;function FB(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%oe,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<oe)return r;for(s=v;s<n;s+=oe)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=oe;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}Lj.exports=FB
});var Ij=c(function(fY,Gj){
var MB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Cj=Aj(),TB=Bj();MB(Cj,"ndarray",TB);Gj.exports=Cj
});var zj=c(function(qY,Vj){
var SB=require("path").join,ZB=require('@stdlib/utils/try-require/dist'),PB=require('@stdlib/assert/is-error/dist'),AB=Ij(),oi,Kj=ZB(SB(__dirname,"./native.js"));PB(Kj)?oi=AB:oi=Kj;Vj.exports=oi
});var qi=c(function(cY,Dj){
var LB=require('@stdlib/math/base/special/floor/dist'),BB=128;function fi(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=BB){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=LB(n/2),j-=j%8,fi(j,e,a,r)+fi(n-j,e,a,r+j*a)}Dj.exports=fi
});var Jj=c(function(mY,Hj){
var CB=qi();function GB(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return CB(n,e,a,i)}Hj.exports=GB
});var Wj=c(function(lY,Uj){
var IB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qj=Jj(),KB=qi();IB(Qj,"ndarray",KB);Uj.exports=Qj
});var Yj=c(function(pY,hj){
var VB=require("path").join,zB=require('@stdlib/utils/try-require/dist'),DB=require('@stdlib/assert/is-error/dist'),HB=Wj(),ci,$j=zB(VB(__dirname,"./native.js"));DB($j)?ci=HB:ci=$j;hj.exports=ci
});var dj=c(function(jY,Xj){
var mi=5;function JB(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%mi,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<mi)return a;for(u=v;u<n;u+=mi)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}Xj.exports=JB
});var Nj=c(function(gY,xj){
var fe=5;function QB(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%fe,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<fe)return a;for(s=v;s<n;s+=fe)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=fe;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}xj.exports=QB
});var ag=c(function(bY,eg){
var UB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),rg=dj(),WB=Nj();UB(rg,"ndarray",WB);eg.exports=rg
});var ng=c(function(wY,ig){
var ug=require('@stdlib/math/base/special/abs/dist');function $B(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,ug(r)>=ug(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}ig.exports=$B
});var tg=c(function(yY,sg){
var vg=require('@stdlib/math/base/special/abs/dist');function hB(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,vg(u)>=vg(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}sg.exports=hB
});var qe=c(function(RY,fg){
var YB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),og=ng(),XB=tg();YB(og,"ndarray",XB);fg.exports=og
});var cg=c(function(kY,qg){
var dB=qe();function xB(n,e,a,i){return dB(n,e,a,i)}qg.exports=xB
});var lg=c(function(_Y,mg){
var NB=qe().ndarray;function rC(n,e,a,i,r){return NB(n,e,a,i,r)}mg.exports=rC
});var gg=c(function(EY,jg){
var eC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pg=cg(),aC=lg();eC(pg,"ndarray",aC);jg.exports=pg
});var wg=c(function(OY,bg){
var ce=require('@stdlib/math/base/special/abs/dist');function uC(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,ce(r)>=ce(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,ce(s)>=ce(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}bg.exports=uC
});var Rg=c(function(FY,yg){
var me=require('@stdlib/math/base/special/abs/dist');function iC(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,me(u)>=me(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,me(o)>=me(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}yg.exports=iC
});var Eg=c(function(MY,_g){
var nC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kg=wg(),vC=Rg();nC(kg,"ndarray",vC);_g.exports=kg
});var Fg=c(function(TY,Og){
function sC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Og.exports=sC
});var Tg=c(function(SY,Mg){
function tC(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Mg.exports=tC
});var Pg=c(function(ZY,Zg){
var oC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Sg=Fg(),fC=Tg();oC(Sg,"ndarray",fC);Zg.exports=Sg
});var pi=c(function(PY,Ag){
var qC=require('@stdlib/math/base/special/floor/dist'),cC=128;function li(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=cC){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=qC(n/2),g-=g%8,li(g,e,a,i,u)+li(n-g,e,a,i,u+g*i)}Ag.exports=li
});var Bg=c(function(AY,Lg){
var mC=pi();function lC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return mC(n,e,a,i,r)}Lg.exports=lC
});var Ig=c(function(LY,Gg){
var pC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Cg=Bg(),jC=pi();pC(Cg,"ndarray",jC);Gg.exports=Cg
});var gi=c(function(BY,Kg){
var gC=require('@stdlib/math/base/special/floor/dist'),Z=require('@stdlib/math/base/special/abs/dist'),bC=128;function ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return Z(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=Z(e[r]),r+=a;return l}if(n<=bC){for(u=Z(e[r]),v=Z(e[r+a]),s=Z(e[r+2*a]),o=Z(e[r+3*a]),t=Z(e[r+4*a]),f=Z(e[r+5*a]),q=Z(e[r+6*a]),m=Z(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=Z(e[r]),v+=Z(e[r+a]),s+=Z(e[r+2*a]),o+=Z(e[r+3*a]),t+=Z(e[r+4*a]),f+=Z(e[r+5*a]),q+=Z(e[r+6*a]),m+=Z(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=Z(e[r]),r+=a;return l}return j=gC(n/2),j-=j%8,ji(j,e,a,r)+ji(n-j,e,a,r+j*a)}Kg.exports=ji
});var Dg=c(function(CY,zg){
var Vg=require('@stdlib/math/base/special/abs/dist'),wC=gi();function yC(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Vg(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=Vg(e[i]),i+=a;return r}return wC(n,e,a,i)}zg.exports=yC
});var Qg=c(function(GY,Jg){
var RC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hg=Dg(),kC=gi();RC(Hg,"ndarray",kC);Jg.exports=Hg
});var $g=c(function(IY,Wg){
var Ug=require('@stdlib/math/base/special/abs/dist');function _C(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,Ug(o)>=Ug(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}Wg.exports=_C
});var Xg=c(function(KY,Yg){
var hg=require('@stdlib/math/base/special/abs/dist');function EC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,hg(f)>=hg(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}Yg.exports=EC
});var le=c(function(VY,xg){
var OC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),dg=$g(),FC=Xg();OC(dg,"ndarray",FC);xg.exports=dg
});var rb=c(function(zY,Ng){
var MC=le();function TC(n,e,a,i,r,u){return MC(n,e,a,i,r,u)}Ng.exports=TC
});var ab=c(function(DY,eb){
var SC=le().ndarray;function ZC(n,e,a,i,r,u,v,s){return SC(n,e,a,i,r,u,v,s)}eb.exports=ZC
});var nb=c(function(HY,ib){
var PC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ub=rb(),AC=ab();PC(ub,"ndarray",AC);ib.exports=ub
});var sb=c(function(JY,vb){
var pe=require('@stdlib/math/base/special/abs/dist');function LC(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,pe(e)>=pe(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,pe(t)>=pe(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}vb.exports=LC
});var ob=c(function(QY,tb){
var je=require('@stdlib/math/base/special/abs/dist');function BC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=e+p,je(e)>=je(p)?j=e-l+p:j=p-l+e,e=l,l=q+j,je(q)>=je(j)?m=q-l+j:m=j-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}tb.exports=BC
});var cb=c(function(UY,qb){
var CC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),fb=sb(),GC=ob();CC(fb,"ndarray",GC);qb.exports=fb
});var lb=c(function(WY,mb){
function IC(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}mb.exports=IC
});var jb=c(function($Y,pb){
function KC(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}pb.exports=KC
});var wb=c(function(hY,bb){
var VC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gb=lb(),zC=jb();VC(gb,"ndarray",zC);bb.exports=gb
});var wi=c(function(YY,yb){
var DC=require('@stdlib/math/base/special/floor/dist'),HC=128;function bi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=HC){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=DC(n/2),bi(q,e,a,i,o,u,v,t),t+=(q-1)*v,bi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}yb.exports=bi
});var kb=c(function(XY,Rb){
var JC=wi();function QC(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,JC(n,e,a,i,v,r,u,s))}Rb.exports=QC
});var Ob=c(function(dY,Eb){
var UC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_b=kb(),WC=wi();UC(_b,"ndarray",WC);Eb.exports=_b
});var yi=c(function(xY,Fb){
function $C(n,e,a,i,r){var u,v,s,o;for(u=a.data,v=a.accessors[1],s=r,o=0;o<n;o++)v(u,s,e),s+=i;return a}Fb.exports=$C
});var Tb=c(function(NY,Mb){
var hC=require('@stdlib/array/base/arraylike2object/dist'),YC=yi(),Ri=8;function XC(n,e,a,i){var r,u,v,s;if(n<=0)return a;if(s=hC(a),s.accessorProtocol)return i<0?r=(1-n)*i:r=0,YC(n,e,s,i,r),s.data;if(i===1){if(v=n%Ri,v>0)for(u=0;u<v;u++)a[u]=e;if(n<Ri)return a;for(u=v;u<n;u+=Ri)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}Mb.exports=XC
});var Zb=c(function(rX,Sb){
var dC=require('@stdlib/array/base/arraylike2object/dist'),xC=yi(),ge=8;function NC(n,e,a,i,r){var u,v,s,o;if(n<=0)return a;if(s=dC(a),s.accessorProtocol)return xC(n,e,s,i,r),s.data;if(u=r,i===1){if(v=n%ge,v>0)for(o=0;o<v;o++)a[u]=e,u+=i;if(n<ge)return a;for(o=v;o<n;o+=ge)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=ge;return a}for(o=0;o<n;o++)a[u]=e,u+=i;return a}Sb.exports=NC
});var Lb=c(function(eX,Ab){
var rG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Pb=Tb(),eG=Zb();rG(Pb,"ndarray",eG);Ab.exports=Pb
});var ki=c(function(aX,Bb){
function aG(n,e,a,i,r,u){var v,s,o,t,f;for(v=e.data,o=e.accessors[0],s=e.accessors[1],t=i,f=0;f<n;f++)s(v,t,r.call(u,o(v,t),f,t,e)),t+=a;return e}Bb.exports=aG
});var Gb=c(function(uX,Cb){
var uG=require('@stdlib/array/base/arraylike2object/dist'),iG=ki();function nG(n,e,a,i,r){var u,v,s;if(n<=0)return e;if(a<0?u=(1-n)*a:u=0,v=uG(e),v.accessorProtocol)return iG(n,v,a,u,i,r),v.data;for(s=0;s<n;s++)e[u]=i.call(r,e[u],s,u,e),u+=a;return e}Cb.exports=nG
});var Kb=c(function(iX,Ib){
var vG=require('@stdlib/array/base/arraylike2object/dist'),sG=ki();function tG(n,e,a,i,r,u){var v,s,o;if(n<=0)return e;if(s=vG(e),s.accessorProtocol)return sG(n,s,a,i,r,u),s.data;for(v=i,o=0;o<n;o++)e[v]=r.call(u,e[v],o,v,e),v+=a;return e}Ib.exports=tG
});var Db=c(function(nX,zb){
var oG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Vb=Gb(),fG=Kb();oG(Vb,"ndarray",fG);zb.exports=Vb
});var Ub=c(function(vX,Qb){
var Hb=require('@stdlib/math/base/assert/is-nan/dist'),Jb=require('@stdlib/math/base/special/abs/dist');function qG(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Hb(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Hb(o)===!1&&(t=u+o,Jb(u)>=Jb(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Qb.exports=qG
});var Yb=c(function(sX,hb){
var Wb=require('@stdlib/math/base/assert/is-nan/dist'),$b=require('@stdlib/math/base/special/abs/dist');function cG(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return Wb(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],Wb(f)===!1&&(q=s+f,$b(s)>=$b(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}hb.exports=cG
});var xb=c(function(tX,db){
var mG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xb=Ub(),lG=Yb();mG(Xb,"ndarray",lG);db.exports=Xb
});var aw=c(function(oX,ew){
var Nb=require('@stdlib/math/base/assert/is-nan/dist'),rw=require('@stdlib/math/base/special/abs/dist');function pG(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return Nb(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],Nb(u)===!1&&(v=i+u,rw(i)>=rw(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}ew.exports=pG
});var vw=c(function(fX,nw){
var uw=require('@stdlib/math/base/assert/is-nan/dist'),iw=require('@stdlib/math/base/special/abs/dist');function jG(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return uw(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],uw(v)===!1&&(s=r+v,iw(r)>=iw(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}nw.exports=jG
});var be=c(function(qX,tw){
var gG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sw=aw(),bG=vw();gG(sw,"ndarray",bG);tw.exports=sw
});var fw=c(function(cX,ow){
var wG=be();function yG(n,e,a){return wG(n,e,a)}ow.exports=yG
});var cw=c(function(mX,qw){
var RG=be().ndarray;function kG(n,e,a,i){return RG(n,e,a,i)}qw.exports=kG
});var pw=c(function(lX,lw){
var _G=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mw=fw(),EG=cw();_G(mw,"ndarray",EG);lw.exports=mw
});var bw=c(function(pX,gw){
var jw=require('@stdlib/math/base/assert/is-nan/dist'),we=require('@stdlib/math/base/special/abs/dist');function OG(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return jw(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],jw(o)===!1&&(t=i+o,we(i)>=we(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,we(v)>=we(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}gw.exports=OG
});var Rw=c(function(jX,yw){
var ww=require('@stdlib/math/base/assert/is-nan/dist'),ye=require('@stdlib/math/base/special/abs/dist');function FG(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return ww(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],ww(t)===!1&&(f=r+t,ye(r)>=ye(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,ye(s)>=ye(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}yw.exports=FG
});var Ew=c(function(gX,_w){
var MG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kw=bw(),TG=Rw();MG(kw,"ndarray",TG);_w.exports=kw
});var Mw=c(function(bX,Fw){
var Ow=require('@stdlib/math/base/assert/is-nan/dist');function SG(n,e,a){var i,r,u;if(r=0,n<=0)return r;if(n===1||a===0)return Ow(e[0])?r:e[0];for(a<0?i=(1-n)*a:i=0,u=0;u<n;u++)Ow(e[i])===!1&&(r+=e[i]),i+=a;return r}Fw.exports=SG
});var Zw=c(function(wX,Sw){
var Tw=require('@stdlib/math/base/assert/is-nan/dist');function ZG(n,e,a,i){var r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return Tw(e[i])?u:e[i];for(r=i,v=0;v<n;v++)Tw(e[r])===!1&&(u+=e[r]),r+=a;return u}Sw.exports=ZG
});var Lw=c(function(yX,Aw){
var PG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Pw=Mw(),AG=Zw();PG(Pw,"ndarray",AG);Aw.exports=Pw
});var Ei=c(function(RX,Bw){
var P=require('@stdlib/math/base/assert/is-nan/dist'),LG=require('@stdlib/math/base/special/floor/dist'),BG=128;function _i(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return P(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=BG){for(u=P(e[r])?0:e[r],r+=a,v=P(e[r])?0:e[r],r+=a,s=P(e[r])?0:e[r],r+=a,o=P(e[r])?0:e[r],r+=a,t=P(e[r])?0:e[r],r+=a,f=P(e[r])?0:e[r],r+=a,q=P(e[r])?0:e[r],r+=a,m=P(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=P(e[r])?0:e[r],r+=a,v+=P(e[r])?0:e[r],r+=a,s+=P(e[r])?0:e[r],r+=a,o+=P(e[r])?0:e[r],r+=a,t+=P(e[r])?0:e[r],r+=a,f+=P(e[r])?0:e[r],r+=a,q+=P(e[r])?0:e[r],r+=a,m+=P(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=LG(n/2),j-=j%8,_i(j,e,a,r)+_i(n-j,e,a,r+j*a)}Bw.exports=_i
});var Iw=c(function(kX,Gw){
var Cw=require('@stdlib/math/base/assert/is-nan/dist'),CG=Ei();function GG(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Cw(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Cw(e[i])===!1&&(r+=e[i]),i+=a;return r}return CG(n,e,a,i)}Gw.exports=GG
});var zw=c(function(_X,Vw){
var IG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Kw=Iw(),KG=Ei();IG(Kw,"ndarray",KG);Vw.exports=Kw
});var Oi=c(function(EX,Dw){
var VG=require('@stdlib/math/base/special/floor/dist');function zG(n,e,a,i){var r,u,v,s,o,t,f,q;for(r=e.data,v=e.accessors[0],u=e.accessors[1],f=VG(n/2),o=i,t=o+(n-1)*a,q=0;q<f;q++)s=v(r,o),u(r,o,v(r,t)),u(r,t,s),o+=a,t-=a;return e}Dw.exports=zG
});var Jw=c(function(OX,Hw){
var DG=require('@stdlib/math/base/special/floor/dist'),HG=require('@stdlib/array/base/arraylike2object/dist'),JG=Oi(),Re=3;function QG(n,e,a){var i,r,u,v,s,o,t;if(n<=0)return e;if(v=HG(e),v.accessorProtocol)return a<0?r=(1-n)*a:r=0,JG(n,v,a,r),v.data;if(o=DG(n/2),a===1){if(s=o%Re,u=n-1,s>0)for(r=0;r<s;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(o<Re)return e;for(r=s;r<o;r+=Re)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=Re;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,t=0;t<o;t++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}Hw.exports=QG
});var Uw=c(function(FX,Qw){
var UG=require('@stdlib/math/base/special/floor/dist'),WG=require('@stdlib/array/base/arraylike2object/dist'),$G=Oi(),Er=3;function hG(n,e,a,i){var r,u,v,s,o,t,f;if(n<=0)return e;if(s=WG(e),s.accessorProtocol)return $G(n,s,a,i),s.data;if(t=UG(n/2),u=i,a===1){if(o=t%Er,v=u+n-1,o>0)for(f=0;f<o;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(t<Er)return e;for(f=o;f<t;f+=Er)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Er,v-=Er;return e}for(v=u+(n-1)*a,f=0;f<t;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}Qw.exports=hG
});var hw=c(function(MX,$w){
var YG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ww=Jw(),XG=Uw();YG(Ww,"ndarray",XG);$w.exports=Ww
});var xw=c(function(TX,dw){
var Yw=require('@stdlib/math/base/assert/is-positive-zero/dist'),Xw=require('@stdlib/math/base/assert/is-nan/dist'),dG=require('@stdlib/math/base/special/floor/dist');function xG(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=dG(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||Xw(f)||f===q&&Yw(f))&&(t+=1)),f=a[v+t*i],f>m||Xw(f)||f===m&&Yw(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}dw.exports=xG
});var ay=c(function(SX,ey){
var Nw=require('@stdlib/math/base/assert/is-positive-zero/dist'),ry=require('@stdlib/math/base/assert/is-nan/dist'),NG=require('@stdlib/math/base/special/floor/dist');function rI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=NG(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||ry(f)||f===q&&Nw(f))&&(t+=1)),f=a[r+t*i],f>m||ry(f)||f===m&&Nw(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}ey.exports=rI
});var ny=c(function(ZX,iy){
var eI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),uy=xw(),aI=ay();eI(uy,"ndarray",aI);iy.exports=uy
});var ty=c(function(PX,sy){
var ke=require('@stdlib/math/base/assert/is-negative-zero/dist'),vy=require('@stdlib/math/base/assert/is-nan/dist');function uI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],vy(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=ke(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&ke(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],vy(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=ke(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&ke(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}sy.exports=uI
});var qy=c(function(AX,fy){
var _e=require('@stdlib/math/base/assert/is-negative-zero/dist'),oy=require('@stdlib/math/base/assert/is-nan/dist');function iI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],oy(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=_e(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&_e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],oy(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=_e(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&_e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}fy.exports=iI
});var ly=c(function(LX,my){
var nI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),cy=ty(),vI=qy();nI(cy,"ndarray",vI);my.exports=cy
});var Fi=c(function(BX,sI){sI.exports=[701,301,132,57,23,10,4,1]});var gy=c(function(CX,jy){
var tI=require('@stdlib/math/base/assert/is-negative-zero/dist'),oI=require('@stdlib/math/base/assert/is-nan/dist'),py=Fi(),fI=py.length;function qI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<fI;p++)for(t=py[p],l=t;l<n;l++)if(f=a[v+l*i],!oI(f)){for(q=r[s+l*u],o=tI(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}jy.exports=qI
});var yy=c(function(GX,wy){
var cI=require('@stdlib/math/base/assert/is-negative-zero/dist'),mI=require('@stdlib/math/base/assert/is-nan/dist'),by=Fi(),lI=by.length;function pI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<lI;p++)for(t=by[p],l=t;l<n;l++)if(f=a[r+l*i],!mI(f)){for(q=u[s+l*v],o=cI(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}wy.exports=pI
});var _y=c(function(IX,ky){
var jI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ry=gy(),gI=yy();jI(Ry,"ndarray",gI);ky.exports=Ry
});var My=c(function(KX,Fy){
var Ey=require('@stdlib/math/base/assert/is-positive-zero/dist'),Oy=require('@stdlib/math/base/assert/is-nan/dist'),bI=require('@stdlib/math/base/special/floor/dist');function wI(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=bI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Oy(s)||s===o&&Ey(s))&&(v+=1)),s=a[r+v*i],s>f||Oy(s)||s===f&&Ey(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Fy.exports=wI
});var Py=c(function(VX,Zy){
var Ty=require('@stdlib/math/base/assert/is-positive-zero/dist'),Sy=require('@stdlib/math/base/assert/is-nan/dist'),yI=require('@stdlib/math/base/special/floor/dist');function RI(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=yI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Sy(s)||s===o&&Ty(s))&&(v+=1)),s=a[r+v*i],s>f||Sy(s)||s===f&&Ty(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Zy.exports=RI
});var By=c(function(zX,Ly){
var kI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ay=My(),_I=Py();kI(Ay,"ndarray",_I);Ly.exports=Ay
});var Iy=c(function(DX,Gy){
var Ee=require('@stdlib/math/base/assert/is-negative-zero/dist'),Cy=require('@stdlib/math/base/assert/is-nan/dist');function EI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],Cy(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Ee(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Ee(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],Cy(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Ee(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Ee(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}Gy.exports=EI
});var zy=c(function(HX,Vy){
var Oe=require('@stdlib/math/base/assert/is-negative-zero/dist'),Ky=require('@stdlib/math/base/assert/is-nan/dist');function OI(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],Ky(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Oe(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Oe(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],Ky(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Oe(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Oe(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}Vy.exports=OI
});var Jy=c(function(JX,Hy){
var FI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Dy=Iy(),MI=zy();FI(Dy,"ndarray",MI);Hy.exports=Dy
});var Mi=c(function(QX,TI){TI.exports=[701,301,132,57,23,10,4,1]});var Wy=c(function(UX,Uy){
var SI=require('@stdlib/math/base/assert/is-negative-zero/dist'),ZI=require('@stdlib/math/base/assert/is-nan/dist'),Qy=Mi(),PI=Qy.length;function AI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<PI;t++)for(v=Qy[t],f=v;f<n;f++)if(s=a[r+f*i],!ZI(s)){for(u=SI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}Uy.exports=AI
});var Yy=c(function(WX,hy){
var LI=require('@stdlib/math/base/assert/is-negative-zero/dist'),BI=require('@stdlib/math/base/assert/is-nan/dist'),$y=Mi(),CI=$y.length;function GI(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<CI;t++)for(v=$y[t],f=v;f<n;f++)if(s=a[r+f*i],!BI(s)){for(u=LI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}hy.exports=GI
});var xy=c(function($X,dy){
var II=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Xy=Wy(),KI=Yy();II(Xy,"ndarray",KI);dy.exports=Xy
});var eR=c(function(hX,rR){
var Ny=require('@stdlib/math/base/special/abs/dist');function VI(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,Ny(i)>=Ny(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}rR.exports=VI
});var iR=c(function(YX,uR){
var aR=require('@stdlib/math/base/special/abs/dist');function zI(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,aR(r)>=aR(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}uR.exports=zI
});var Fe=c(function(XX,vR){
var DI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nR=eR(),HI=iR();DI(nR,"ndarray",HI);vR.exports=nR
});var tR=c(function(dX,sR){
var JI=Fe();function QI(n,e,a){return JI(n,e,a)}sR.exports=QI
});var fR=c(function(xX,oR){
var UI=Fe().ndarray;function WI(n,e,a,i){return UI(n,e,a,i)}oR.exports=WI
});var mR=c(function(NX,cR){
var $I=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qR=tR(),hI=fR();$I(qR,"ndarray",hI);cR.exports=qR
});var pR=c(function(rd,lR){
var Me=require('@stdlib/math/base/special/abs/dist');function YI(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,Me(i)>=Me(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Me(v)>=Me(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}lR.exports=YI
});var gR=c(function(ed,jR){
var Te=require('@stdlib/math/base/special/abs/dist');function XI(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,Te(r)>=Te(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Te(s)>=Te(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}jR.exports=XI
});var yR=c(function(ad,wR){
var dI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),bR=pR(),xI=gR();dI(bR,"ndarray",xI);wR.exports=bR
});var kR=c(function(ud,RR){
var Ti=6;function NI(n,e,a){var i,r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return e[0];if(a===1){if(r=n%Ti,r>0)for(v=0;v<r;v++)u+=e[v];if(n<Ti)return u;for(v=r;v<n;v+=Ti)u+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return u}for(a<0?i=(1-n)*a:i=0,v=0;v<n;v++)u+=e[i],i+=a;return u}RR.exports=NI
});var ER=c(function(id,_R){
var Se=6;function rK(n,e,a,i){var r,u,v,s;if(v=0,n<=0)return v;if(n===1||a===0)return e[i];if(r=i,a===1){if(u=n%Se,u>0)for(s=0;s<u;s++)v+=e[r],r+=a;if(n<Se)return v;for(s=u;s<n;s+=Se)v+=e[r]+e[r+1]+e[r+2]+e[r+3]+e[r+4]+e[r+5],r+=Se;return v}for(s=0;s<n;s++)v+=e[r],r+=a;return v}_R.exports=rK
});var MR=c(function(nd,FR){
var eK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),OR=kR(),aK=ER();eK(OR,"ndarray",aK);FR.exports=OR
});var Zi=c(function(vd,TR){
var uK=require('@stdlib/math/base/special/floor/dist'),iK=128;function Si(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=iK){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=uK(n/2),j-=j%8,Si(j,e,a,r)+Si(n-j,e,a,r+j*a)}TR.exports=Si
});var ZR=c(function(sd,SR){
var nK=Zi();function vK(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return nK(n,e,a,i)}SR.exports=vK
});var LR=c(function(td,AR){
var sK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),PR=ZR(),tK=Zi();sK(PR,"ndarray",tK);AR.exports=PR
});var CR=c(function(od,BR){
var Pi=5;function oK(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%Pi,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<Pi)return a;for(u=v;u<n;u+=Pi)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}BR.exports=oK
});var IR=c(function(fd,GR){
var Ze=5;function fK(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Ze,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Ze)return a;for(s=v;s<n;s+=Ze)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Ze;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}GR.exports=fK
});var zR=c(function(qd,VR){
var qK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),KR=CR(),cK=IR();qK(KR,"ndarray",cK);VR.exports=KR
});var JR=c(function(cd,HR){
var mK=require("path").join,lK=require('@stdlib/utils/try-require/dist'),pK=require('@stdlib/assert/is-error/dist'),jK=zR(),Ai,DR=lK(mK(__dirname,"./native.js"));pK(DR)?Ai=jK:Ai=DR;HR.exports=Ai
});var WR=c(function(md,UR){
var W=require('@stdlib/number/float64/base/to-float32/dist'),QR=require('@stdlib/math/base/special/abs/dist');function gK(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return W(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=W(e+a[u]),s=W(r+v),QR(r)>=QR(v)?o=W(o+W(W(r-s)+v)):o=W(o+W(W(v-s)+r)),r=s,u+=i;return W(r+o)}UR.exports=gK
});var YR=c(function(ld,hR){
var $=require('@stdlib/number/float64/base/to-float32/dist'),$R=require('@stdlib/math/base/special/abs/dist');function bK(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return $(e+a[r]);for(v=r,u=0,t=0,f=0;f<n;f++)s=$(e+a[v]),o=$(u+s),$R(u)>=$R(s)?t=$(t+$($(u-o)+s)):t=$(t+$($(s-o)+u)),u=o,v+=i;return $(u+t)}hR.exports=bK
});var xR=c(function(pd,dR){
var wK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),XR=WR(),yK=YR();wK(XR,"ndarray",yK);dR.exports=XR
});var Pe=c(function(jd,rk){
var RK=require("path").join,kK=require('@stdlib/utils/try-require/dist'),_K=require('@stdlib/assert/is-error/dist'),EK=xR(),Li,NR=kK(RK(__dirname,"./native.js"));_K(NR)?Li=EK:Li=NR;rk.exports=Li
});var ak=c(function(gd,ek){
var OK=Pe();function FK(n,e,a,i){return OK(n,e,a,i)}ek.exports=FK
});var ik=c(function(bd,uk){
var MK=Pe().ndarray;function TK(n,e,a,i,r){return MK(n,e,a,i,r)}uk.exports=TK
});var sk=c(function(wd,vk){
var SK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nk=ak(),ZK=ik();SK(nk,"ndarray",ZK);vk.exports=nk
});var fk=c(function(yd,ok){
var PK=require("path").join,AK=require('@stdlib/utils/try-require/dist'),LK=require('@stdlib/assert/is-error/dist'),BK=sk(),Bi,tk=AK(PK(__dirname,"./native.js"));LK(tk)?Bi=BK:Bi=tk;ok.exports=Bi
});var ck=c(function(Rd,qk){
var K=require('@stdlib/number/float64/base/to-float32/dist'),Ae=require('@stdlib/math/base/special/abs/dist');function CK(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return K(e+a[0]);for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=K(e+a[v]),f=K(r+t),Ae(r)>=Ae(t)?q=K(K(r-f)+t):q=K(K(t-f)+r),r=f,f=K(s+q),Ae(s)>=Ae(q)?o=K(K(s-f)+q):o=K(K(q-f)+s),s=f,u=K(u+o),v+=i;return K(r+K(s+u))}qk.exports=CK
});var lk=c(function(kd,mk){
var V=require('@stdlib/number/float64/base/to-float32/dist'),Le=require('@stdlib/math/base/special/abs/dist');function GK(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return V(e+a[r]);for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=V(e+a[s]),q=V(u+f),Le(u)>=Le(f)?m=V(V(u-q)+f):m=V(V(f-q)+u),u=q,q=V(o+m),Le(o)>=Le(m)?t=V(V(o-q)+m):t=V(V(m-q)+o),o=q,v=V(v+t),s+=i;return V(u+V(o+v))}mk.exports=GK
});var gk=c(function(_d,jk){
var IK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pk=ck(),KK=lk();IK(pk,"ndarray",KK);jk.exports=pk
});var yk=c(function(Ed,wk){
var VK=require("path").join,zK=require('@stdlib/utils/try-require/dist'),DK=require('@stdlib/assert/is-error/dist'),HK=gk(),Ci,bk=zK(VK(__dirname,"./native.js"));DK(bk)?Ci=HK:Ci=bk;wk.exports=Ci
});var kk=c(function(Od,Rk){
var Gi=require('@stdlib/number/float64/base/to-float32/dist');function JK(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Gi(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r=Gi(r+Gi(e+a[u])),u+=i;return r}Rk.exports=JK
});var Ek=c(function(Fd,_k){
var Ii=require('@stdlib/number/float64/base/to-float32/dist');function QK(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return Ii(e+a[0]);for(v=r,u=0,s=0;s<n;s++)u=Ii(u+Ii(e+a[v])),v+=i;return u}_k.exports=QK
});var Mk=c(function(Md,Fk){
var UK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ok=kk(),WK=Ek();UK(Ok,"ndarray",WK);Fk.exports=Ok
});var Zk=c(function(Td,Sk){
var $K=require("path").join,hK=require('@stdlib/utils/try-require/dist'),YK=require('@stdlib/assert/is-error/dist'),XK=Mk(),Ki,Tk=hK($K(__dirname,"./native.js"));YK(Tk)?Ki=XK:Ki=Tk;Sk.exports=Ki
});var zi=c(function(Sd,Pk){
var E=require('@stdlib/number/float64/base/to-float32/dist'),dK=require('@stdlib/math/base/special/floor/dist'),xK=128;function Vi(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return E(e+a[r]);if(u=r,n<8){for(j=0,b=0;b<n;b++)j=E(j+E(e+a[u])),u+=i;return j}if(n<=xK){for(v=E(e+a[u]),s=E(e+a[u+i]),o=E(e+a[u+2*i]),t=E(e+a[u+3*i]),f=E(e+a[u+4*i]),q=E(e+a[u+5*i]),m=E(e+a[u+6*i]),p=E(e+a[u+7*i]),u+=8*i,l=n%8,b=8;b<n-l;b+=8)v=E(v+E(e+a[u])),s=E(s+E(e+a[u+i])),o=E(o+E(e+a[u+2*i])),t=E(t+E(e+a[u+3*i])),f=E(f+E(e+a[u+4*i])),q=E(q+E(e+a[u+5*i])),m=E(m+E(e+a[u+6*i])),p=E(p+E(e+a[u+7*i])),u+=8*i;for(j=E(E(E(v+s)+E(o+t))+E(E(f+q)+E(m+p))),b;b<n;b++)j=E(j+E(e+a[u])),u+=i;return j}return g=dK(n/2),g-=g%8,E(Vi(g,e,a,i,u)+Vi(n-g,e,a,i,u+g*i))}Pk.exports=Vi
});var Lk=c(function(Zd,Ak){
var Di=require('@stdlib/number/float64/base/to-float32/dist'),NK=zi();function rV(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Di(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u=Di(u+Di(e+a[r])),r+=i;return u}return NK(n,e,a,i,r)}Ak.exports=rV
});var Gk=c(function(Pd,Ck){
var eV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Bk=Lk(),aV=zi();eV(Bk,"ndarray",aV);Ck.exports=Bk
});var Vk=c(function(Ad,Kk){
var uV=require("path").join,iV=require('@stdlib/utils/try-require/dist'),nV=require('@stdlib/assert/is-error/dist'),vV=Gk(),Hi,Ik=iV(uV(__dirname,"./native.js"));nV(Ik)?Hi=vV:Hi=Ik;Kk.exports=Hi
});var Qi=c(function(Ld,zk){
var C=require('@stdlib/number/float64/base/to-float32/dist'),sV=require('@stdlib/math/base/special/floor/dist'),A=require('@stdlib/math/base/special/abs/dist'),tV=128;function Ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return A(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l=C(l+A(e[r])),r+=a;return l}if(n<=tV){for(u=A(e[r]),v=A(e[r+a]),s=A(e[r+2*a]),o=A(e[r+3*a]),t=A(e[r+4*a]),f=A(e[r+5*a]),q=A(e[r+6*a]),m=A(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u=C(u+A(e[r])),v=C(v+A(e[r+a])),s=C(s+A(e[r+2*a])),o=C(o+A(e[r+3*a])),t=C(t+A(e[r+4*a])),f=C(f+A(e[r+5*a])),q=C(q+A(e[r+6*a])),m=C(m+A(e[r+7*a])),r+=8*a;for(l=C(C(C(u+v)+C(s+o))+C(C(t+f)+C(q+m))),g;g<n;g++)l=C(l+A(e[r])),r+=a;return l}return j=sV(n/2),j-=j%8,C(Ji(j,e,a,r)+Ji(n-j,e,a,r+j*a))}zk.exports=Ji
});var Jk=c(function(Bd,Hk){
var oV=require('@stdlib/number/float64/base/to-float32/dist'),Dk=require('@stdlib/math/base/special/abs/dist'),fV=Qi();function qV(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Dk(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=oV(r+Dk(e[i])),i+=a;return r}return fV(n,e,a,i)}Hk.exports=qV
});var Wk=c(function(Cd,Uk){
var cV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qk=Jk(),mV=Qi();cV(Qk,"ndarray",mV);Uk.exports=Qk
});var Yk=c(function(Gd,hk){
var lV=require("path").join,pV=require('@stdlib/utils/try-require/dist'),jV=require('@stdlib/assert/is-error/dist'),gV=Wk(),Ui,$k=pV(lV(__dirname,"./native.js"));jV($k)?Ui=gV:Ui=$k;hk.exports=Ui
});var xk=c(function(Id,dk){
var er=require('@stdlib/number/float64/base/to-float32/dist'),Xk=require('@stdlib/math/base/special/abs/dist');function bV(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=er(o+t),Xk(o)>=Xk(t)?q=er(q+er(er(o-f)+t)):q=er(q+er(er(t-f)+o)),o=f,r[s]=er(o+q),v+=i,s+=u;return r}dk.exports=bV
});var e3=c(function(Kd,r3){
var ar=require('@stdlib/number/float64/base/to-float32/dist'),Nk=require('@stdlib/math/base/special/abs/dist');function wV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=ar(f+q),Nk(f)>=Nk(q)?p=ar(p+ar(ar(f-m)+q)):p=ar(p+ar(ar(q-m)+f)),f=m,u[t]=ar(f+p),o+=i,t+=v;return u}r3.exports=wV
});var i3=c(function(Vd,u3){
var yV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),a3=xk(),RV=e3();yV(a3,"ndarray",RV);u3.exports=a3
});var Be=c(function(zd,v3){
var kV=require("path").join,_V=require('@stdlib/utils/try-require/dist'),EV=require('@stdlib/assert/is-error/dist'),OV=i3(),Wi,n3=_V(kV(__dirname,"./native.js"));EV(n3)?Wi=OV:Wi=n3;v3.exports=Wi
});var t3=c(function(Dd,s3){
var FV=Be();function MV(n,e,a,i,r,u){return FV(n,e,a,i,r,u)}s3.exports=MV
});var f3=c(function(Hd,o3){
var TV=Be().ndarray;function SV(n,e,a,i,r,u,v,s){return TV(n,e,a,i,r,u,v,s)}o3.exports=SV
});var m3=c(function(Jd,c3){
var ZV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),q3=t3(),PV=f3();ZV(q3,"ndarray",PV);c3.exports=q3
});var j3=c(function(Qd,p3){
var AV=require("path").join,LV=require('@stdlib/utils/try-require/dist'),BV=require('@stdlib/assert/is-error/dist'),CV=m3(),$i,l3=LV(AV(__dirname,"./native.js"));BV(l3)?$i=CV:$i=l3;p3.exports=$i
});var b3=c(function(Ud,g3){
var z=require('@stdlib/number/float64/base/to-float32/dist'),Ce=require('@stdlib/math/base/special/abs/dist');function GV(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=z(e+q),Ce(e)>=Ce(q)?p=z(z(e-m)+q):p=z(z(q-m)+e),e=m,m=z(t+p),Ce(t)>=Ce(p)?f=z(z(t-m)+p):f=z(z(p-m)+t),t=m,v=z(v+f),r[o]=z(e+z(t+v)),s+=i,o+=u;return r}g3.exports=GV
});var y3=c(function(Wd,w3){
var D=require('@stdlib/number/float64/base/to-float32/dist'),Ge=require('@stdlib/math/base/special/abs/dist');function IV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=D(e+p),Ge(e)>=Ge(p)?j=D(D(e-l)+p):j=D(D(p-l)+e),e=l,l=D(q+j),Ge(q)>=Ge(j)?m=D(D(q-l)+j):m=D(D(j-l)+q),q=l,o=D(o+m),u[f]=D(e+D(q+o)),t+=i,f+=v;return u}w3.exports=IV
});var _3=c(function($d,k3){
var KV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),R3=b3(),VV=y3();KV(R3,"ndarray",VV);k3.exports=R3
});var F3=c(function(hd,O3){
var zV=require("path").join,DV=require('@stdlib/utils/try-require/dist'),HV=require('@stdlib/assert/is-error/dist'),JV=_3(),hi,E3=DV(zV(__dirname,"./native.js"));HV(E3)?hi=JV:hi=E3;O3.exports=hi
});var T3=c(function(Yd,M3){
var QV=require('@stdlib/number/float64/base/to-float32/dist');function UV(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e=QV(e+a[v]),r[s]=e,v+=i,s+=u;return r}M3.exports=UV
});var Z3=c(function(Xd,S3){
var WV=require('@stdlib/number/float64/base/to-float32/dist');function $V(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e=WV(e+a[o]),u[t]=e,o+=i,t+=v;return u}S3.exports=$V
});var L3=c(function(dd,A3){
var hV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),P3=T3(),YV=Z3();hV(P3,"ndarray",YV);A3.exports=P3
});var G3=c(function(xd,C3){
var XV=require("path").join,dV=require('@stdlib/utils/try-require/dist'),xV=require('@stdlib/assert/is-error/dist'),NV=L3(),Yi,B3=dV(XV(__dirname,"./native.js"));xV(B3)?Yi=NV:Yi=B3;C3.exports=Yi
});var di=c(function(Nd,K3){
var I3=require('@stdlib/number/float64/base/to-float32/dist'),rz=require('@stdlib/math/base/special/floor/dist'),ez=128;function Xi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=ez){for(f=0,m=0;m<n;m++)f=I3(f+a[o]),u[t]=I3(e+f),o+=i,t+=v;return u}return q=rz(n/2),Xi(q,e,a,i,o,u,v,t),t+=(q-1)*v,Xi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}K3.exports=Xi
});var z3=c(function(rx,V3){
var az=di();function uz(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,az(n,e,a,i,v,r,u,s))}V3.exports=uz
});var J3=c(function(ex,H3){
var iz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),D3=z3(),nz=di();iz(D3,"ndarray",nz);H3.exports=D3
});var W3=c(function(ax,U3){
var vz=require("path").join,sz=require('@stdlib/utils/try-require/dist'),tz=require('@stdlib/assert/is-error/dist'),oz=J3(),xi,Q3=sz(vz(__dirname,"./native.js"));tz(Q3)?xi=oz:xi=Q3;U3.exports=xi
});var rn=c(function(ux,$3){
var Ie=require('@stdlib/number/float64/base/to-float32/dist'),fz=require('@stdlib/math/base/special/floor/dist'),qz=128;function Ni(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return Ie(e+a[r]);if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return Ie(j)}if(n<=qz){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return Ie(j)}return g=fz(n/2),g-=g%8,Ie(Ni(g,e,a,i,u)+Ni(n-g,e,a,i,u+g*i))}$3.exports=Ni
});var X3=c(function(ix,Y3){
var h3=require('@stdlib/number/float64/base/to-float32/dist'),cz=rn();function mz(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return h3(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return h3(u)}return cz(n,e,a,i,r)}Y3.exports=mz
});var N3=c(function(nx,x3){
var lz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),d3=X3(),pz=rn();lz(d3,"ndarray",pz);x3.exports=d3
});var Ke=c(function(vx,e_){
var jz=require("path").join,gz=require('@stdlib/utils/try-require/dist'),bz=require('@stdlib/assert/is-error/dist'),wz=N3(),en,r_=gz(jz(__dirname,"./native.js"));bz(r_)?en=wz:en=r_;e_.exports=en
});var u_=c(function(sx,a_){
var yz=Ke();function Rz(n,e,a,i){return yz(n,e,a,i)}a_.exports=Rz
});var n_=c(function(tx,i_){
var kz=Ke().ndarray;function _z(n,e,a,i,r){return kz(n,e,a,i,r)}i_.exports=_z
});var t_=c(function(ox,s_){
var Ez=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),v_=u_(),Oz=n_();Ez(v_,"ndarray",Oz);s_.exports=v_
});var q_=c(function(fx,f_){
var Fz=require("path").join,Mz=require('@stdlib/utils/try-require/dist'),Tz=require('@stdlib/assert/is-error/dist'),Sz=t_(),an,o_=Mz(Fz(__dirname,"./native.js"));Tz(o_)?an=Sz:an=o_;f_.exports=an
});var vn=c(function(qx,c_){
var un=require('@stdlib/number/float64/base/to-float32/dist'),L=require('@stdlib/math/base/assert/is-nanf/dist'),Zz=require('@stdlib/math/base/special/floor/dist'),Pz=128;function nn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return L(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)L(e[r])===!1&&(l+=e[r]),r+=a;return un(l)}if(n<=Pz){for(u=L(e[r])?0:e[r],r+=a,v=L(e[r])?0:e[r],r+=a,s=L(e[r])?0:e[r],r+=a,o=L(e[r])?0:e[r],r+=a,t=L(e[r])?0:e[r],r+=a,f=L(e[r])?0:e[r],r+=a,q=L(e[r])?0:e[r],r+=a,m=L(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=L(e[r])?0:e[r],r+=a,v+=L(e[r])?0:e[r],r+=a,s+=L(e[r])?0:e[r],r+=a,o+=L(e[r])?0:e[r],r+=a,t+=L(e[r])?0:e[r],r+=a,f+=L(e[r])?0:e[r],r+=a,q+=L(e[r])?0:e[r],r+=a,m+=L(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)L(e[r])===!1&&(l+=e[r]),r+=a;return un(l)}return j=Zz(n/2),j-=j%8,un(nn(j,e,a,r)+nn(n-j,e,a,r+j*a))}c_.exports=nn
});var p_=c(function(cx,l_){
var Az=require('@stdlib/number/float64/base/to-float32/dist'),m_=require('@stdlib/math/base/assert/is-nanf/dist'),Lz=vn();function Bz(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return m_(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)m_(e[i])===!1&&(r+=e[i]),i+=a;return Az(r)}return Lz(n,e,a,i)}l_.exports=Bz
});var b_=c(function(mx,g_){
var Cz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),j_=p_(),Gz=vn();Cz(j_,"ndarray",Gz);g_.exports=j_
});var Ve=c(function(lx,y_){
var Iz=require("path").join,Kz=require('@stdlib/utils/try-require/dist'),Vz=require('@stdlib/assert/is-error/dist'),zz=b_(),sn,w_=Kz(Iz(__dirname,"./native.js"));Vz(w_)?sn=zz:sn=w_;y_.exports=sn
});var k_=c(function(px,R_){
var Dz=Ve();function Hz(n,e,a){return Dz(n,e,a)}R_.exports=Hz
});var E_=c(function(jx,__){
var Jz=Ve().ndarray;function Qz(n,e,a,i){return Jz(n,e,a,i)}__.exports=Qz
});var M_=c(function(gx,F_){
var Uz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O_=k_(),Wz=E_();Uz(O_,"ndarray",Wz);F_.exports=O_
});var Z_=c(function(bx,S_){
var $z=require("path").join,hz=require('@stdlib/utils/try-require/dist'),Yz=require('@stdlib/assert/is-error/dist'),Xz=M_(),tn,T_=hz($z(__dirname,"./native.js"));Yz(T_)?tn=Xz:tn=T_;S_.exports=tn
});var qn=c(function(wx,P_){
var on=require('@stdlib/number/float64/base/to-float32/dist'),dz=require('@stdlib/math/base/special/floor/dist'),xz=128;function fn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return on(l)}if(n<=xz){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return on(l)}return j=dz(n/2),j-=j%8,on(fn(j,e,a,r)+fn(n-j,e,a,r+j*a))}P_.exports=fn
});var L_=c(function(yx,A_){
var Nz=require('@stdlib/number/float64/base/to-float32/dist'),rD=qn();function eD(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return Nz(r)}return rD(n,e,a,i)}A_.exports=eD
});var G_=c(function(Rx,C_){
var aD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),B_=L_(),uD=qn();aD(B_,"ndarray",uD);C_.exports=B_
});var ze=c(function(kx,K_){
var iD=require("path").join,nD=require('@stdlib/utils/try-require/dist'),vD=require('@stdlib/assert/is-error/dist'),sD=G_(),cn,I_=nD(iD(__dirname,"./native.js"));vD(I_)?cn=sD:cn=I_;K_.exports=cn
});var z_=c(function(_x,V_){
var tD=ze();function oD(n,e,a){return tD(n,e,a)}V_.exports=oD
});var H_=c(function(Ex,D_){
var fD=ze().ndarray;function qD(n,e,a,i){return fD(n,e,a,i)}D_.exports=qD
});var U_=c(function(Ox,Q_){
var cD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),J_=z_(),mD=H_();cD(J_,"ndarray",mD);Q_.exports=J_
});var h_=c(function(Fx,$_){
var lD=require("path").join,pD=require('@stdlib/utils/try-require/dist'),jD=require('@stdlib/assert/is-error/dist'),gD=U_(),mn,W_=pD(lD(__dirname,"./native.js"));jD(W_)?mn=gD:mn=W_;$_.exports=mn
});var X_=c(function(Mx,Y_){
var ln=8;function bD(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ln,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ln)return a;for(u=v;u<n;u+=ln)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}Y_.exports=bD
});var x_=c(function(Tx,d_){
var De=8;function wD(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%De,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<De)return a;for(s=v;s<n;s+=De)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=De;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}d_.exports=wD
});var e4=c(function(Sx,r4){
var yD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),N_=X_(),RD=x_();yD(N_,"ndarray",RD);r4.exports=N_
});var i4=c(function(Zx,u4){
var kD=require("path").join,_D=require('@stdlib/utils/try-require/dist'),ED=require('@stdlib/assert/is-error/dist'),OD=e4(),pn,a4=_D(kD(__dirname,"./native.js"));ED(a4)?pn=OD:pn=a4;u4.exports=pn
});var t4=c(function(Px,s4){
var vr=require('@stdlib/number/float64/base/to-float32/dist'),n4=require('@stdlib/math/base/assert/is-nanf/dist'),v4=require('@stdlib/math/base/special/abs/dist');function FD(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return n4(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],n4(u)===!1&&(v=i+u,v4(i)>=v4(u)?s=vr(s+vr(vr(i-v)+u)):s=vr(s+vr(vr(u-v)+i)),i=v),r+=a;return vr(i+s)}s4.exports=FD
});var c4=c(function(Ax,q4){
var sr=require('@stdlib/number/float64/base/to-float32/dist'),o4=require('@stdlib/math/base/assert/is-nanf/dist'),f4=require('@stdlib/math/base/special/abs/dist');function MD(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return o4(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],o4(v)===!1&&(s=r+v,f4(r)>=f4(v)?o=sr(o+sr(sr(r-s)+v)):o=sr(o+sr(sr(v-s)+r)),r=s),u+=a;return sr(r+o)}q4.exports=MD
});var p4=c(function(Lx,l4){
var TD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),m4=t4(),SD=c4();TD(m4,"ndarray",SD);l4.exports=m4
});var He=c(function(Bx,g4){
var ZD=require("path").join,PD=require('@stdlib/utils/try-require/dist'),AD=require('@stdlib/assert/is-error/dist'),LD=p4(),jn,j4=PD(ZD(__dirname,"./native.js"));AD(j4)?jn=LD:jn=j4;g4.exports=jn
});var w4=c(function(Cx,b4){
var BD=He();function CD(n,e,a){return BD(n,e,a)}b4.exports=CD
});var R4=c(function(Gx,y4){
var GD=He().ndarray;function ID(n,e,a,i){return GD(n,e,a,i)}y4.exports=ID
});var E4=c(function(Ix,_4){
var KD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),k4=w4(),VD=R4();KD(k4,"ndarray",VD);_4.exports=k4
});var M4=c(function(Kx,F4){
var zD=require("path").join,DD=require('@stdlib/utils/try-require/dist'),HD=require('@stdlib/assert/is-error/dist'),JD=E4(),gn,O4=DD(zD(__dirname,"./native.js"));HD(O4)?gn=JD:gn=O4;F4.exports=gn
});var Z4=c(function(Vx,S4){
var H=require('@stdlib/number/float64/base/to-float32/dist'),T4=require('@stdlib/math/base/assert/is-nanf/dist'),Je=require('@stdlib/math/base/special/abs/dist');function QD(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return T4(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],T4(o)===!1&&(t=H(i+o),Je(i)>=Je(o)?f=H(H(i-t)+o):f=H(H(o-t)+i),i=t,t=H(v+f),Je(v)>=Je(f)?s=H(H(v-t)+f):s=H(H(f-t)+v),v=t,r=H(r+s)),u+=a;return H(i+H(v+r))}S4.exports=QD
});var L4=c(function(zx,A4){
var J=require('@stdlib/number/float64/base/to-float32/dist'),P4=require('@stdlib/math/base/assert/is-nanf/dist'),Qe=require('@stdlib/math/base/special/abs/dist');function UD(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return P4(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],P4(t)===!1&&(f=J(r+t),Qe(r)>=Qe(t)?q=J(J(r-f)+t):q=J(J(t-f)+r),r=f,f=J(s+q),Qe(s)>=Qe(q)?o=J(J(s-f)+q):o=J(J(q-f)+s),s=f,u=J(u+o)),v+=a;return J(r+J(s+u))}A4.exports=UD
});var G4=c(function(Dx,C4){
var WD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),B4=Z4(),$D=L4();WD(B4,"ndarray",$D);C4.exports=B4
});var V4=c(function(Hx,K4){
var hD=require("path").join,YD=require('@stdlib/utils/try-require/dist'),XD=require('@stdlib/assert/is-error/dist'),dD=G4(),bn,I4=YD(hD(__dirname,"./native.js"));XD(I4)?bn=dD:bn=I4;K4.exports=bn
});var H4=c(function(Jx,D4){
var xD=require('@stdlib/number/float64/base/to-float32/dist'),z4=require('@stdlib/math/base/assert/is-nanf/dist');function ND(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return z4(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)z4(e[r])===!1&&(i=xD(i+e[r])),r+=a;return i}D4.exports=ND
});var U4=c(function(Qx,Q4){
var rH=require('@stdlib/number/float64/base/to-float32/dist'),J4=require('@stdlib/math/base/assert/is-nanf/dist');function eH(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return J4(e[i])?r:e[i];for(u=i,v=0;v<n;v++)J4(e[u])===!1&&(r=rH(r+e[u])),u+=a;return r}Q4.exports=eH
});var h4=c(function(Ux,$4){
var aH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),W4=H4(),uH=U4();aH(W4,"ndarray",uH);$4.exports=W4
});var d4=c(function(Wx,X4){
var iH=require("path").join,nH=require('@stdlib/utils/try-require/dist'),vH=require('@stdlib/assert/is-error/dist'),sH=h4(),wn,Y4=nH(iH(__dirname,"./native.js"));vH(Y4)?wn=sH:wn=Y4;X4.exports=wn
});var Rn=c(function($x,x4){
var G=require('@stdlib/number/float64/base/to-float32/dist'),B=require('@stdlib/math/base/assert/is-nanf/dist'),tH=require('@stdlib/math/base/special/floor/dist'),oH=128;function yn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return B(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}if(n<=oH){for(u=B(e[r])?0:e[r],r+=a,v=B(e[r])?0:e[r],r+=a,s=B(e[r])?0:e[r],r+=a,o=B(e[r])?0:e[r],r+=a,t=B(e[r])?0:e[r],r+=a,f=B(e[r])?0:e[r],r+=a,q=B(e[r])?0:e[r],r+=a,m=B(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u=B(e[r])?u:G(u+e[r]),r+=a,v=B(e[r])?v:G(v+e[r]),r+=a,s=B(e[r])?s:G(s+e[r]),r+=a,o=B(e[r])?o:G(o+e[r]),r+=a,t=B(e[r])?t:G(t+e[r]),r+=a,f=B(e[r])?f:G(f+e[r]),r+=a,q=B(e[r])?q:G(q+e[r]),r+=a,m=B(e[r])?m:G(m+e[r]),r+=a;for(l=G(G(G(u+v)+G(s+o))+G(G(t+f)+G(q+m))),g;g<n;g++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}return j=tH(n/2),j-=j%8,G(yn(j,e,a,r)+yn(n-j,e,a,r+j*a))}x4.exports=yn
});var e8=c(function(hx,r8){
var fH=require('@stdlib/number/float64/base/to-float32/dist'),N4=require('@stdlib/math/base/assert/is-nanf/dist'),qH=Rn();function cH(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return N4(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)N4(e[i])===!1&&(r=fH(r+e[i])),i+=a;return r}return qH(n,e,a,i)}r8.exports=cH
});var i8=c(function(Yx,u8){
var mH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),a8=e8(),lH=Rn();mH(a8,"ndarray",lH);u8.exports=a8
});var s8=c(function(Xx,v8){
var pH=require("path").join,jH=require('@stdlib/utils/try-require/dist'),gH=require('@stdlib/assert/is-error/dist'),bH=i8(),kn,n8=jH(pH(__dirname,"./native.js"));gH(n8)?kn=bH:kn=n8;v8.exports=kn
});var o8=c(function(dx,t8){
var wH=require('@stdlib/math/base/special/floor/dist'),Ue=3;function yH(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=wH(n/2),a===1){if(v=s%Ue,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<Ue)return e;for(r=v;r<s;r+=Ue)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=Ue;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}t8.exports=yH
});var q8=c(function(xx,f8){
var RH=require('@stdlib/math/base/special/floor/dist'),Or=3;function kH(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=RH(n/2),u=i,a===1){if(s=o%Or,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<Or)return e;for(t=s;t<o;t+=Or)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Or,v-=Or;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}f8.exports=kH
});var l8=c(function(Nx,m8){
var _H=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),c8=o8(),EH=q8();_H(c8,"ndarray",EH);m8.exports=c8
});var g8=c(function(rN,j8){
var OH=require("path").join,FH=require('@stdlib/utils/try-require/dist'),MH=require('@stdlib/assert/is-error/dist'),TH=l8(),_n,p8=FH(OH(__dirname,"./native.js"));MH(p8)?_n=TH:_n=p8;j8.exports=_n
});var R8=c(function(eN,y8){
var b8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),w8=require('@stdlib/math/base/assert/is-nanf/dist'),SH=require('@stdlib/math/base/special/floor/dist');function ZH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=SH(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||w8(f)||f===q&&b8(f))&&(t+=1)),f=a[v+t*i],f>m||w8(f)||f===m&&b8(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}y8.exports=ZH
});var O8=c(function(aN,E8){
var k8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),_8=require('@stdlib/math/base/assert/is-nanf/dist'),PH=require('@stdlib/math/base/special/floor/dist');function AH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=PH(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||_8(f)||f===q&&k8(f))&&(t+=1)),f=a[r+t*i],f>m||_8(f)||f===m&&k8(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}E8.exports=AH
});var T8=c(function(uN,M8){
var LH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),F8=R8(),BH=O8();LH(F8,"ndarray",BH);M8.exports=F8
});var P8=c(function(iN,Z8){
var CH=require("path").join,GH=require('@stdlib/utils/try-require/dist'),IH=require('@stdlib/assert/is-error/dist'),KH=T8(),En,S8=GH(CH(__dirname,"./native.js"));IH(S8)?En=KH:En=S8;Z8.exports=En
});var B8=c(function(nN,L8){
var We=require('@stdlib/math/base/assert/is-negative-zerof/dist'),A8=require('@stdlib/math/base/assert/is-nanf/dist');function VH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],A8(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=We(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&We(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],A8(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=We(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&We(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}L8.exports=VH
});var I8=c(function(vN,G8){
var $e=require('@stdlib/math/base/assert/is-negative-zerof/dist'),C8=require('@stdlib/math/base/assert/is-nanf/dist');function zH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],C8(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=$e(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&$e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],C8(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=$e(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&$e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}G8.exports=zH
});var z8=c(function(sN,V8){
var DH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),K8=B8(),HH=I8();DH(K8,"ndarray",HH);V8.exports=K8
});var J8=c(function(tN,H8){
var JH=require("path").join,QH=require('@stdlib/utils/try-require/dist'),UH=require('@stdlib/assert/is-error/dist'),WH=z8(),On,D8=QH(JH(__dirname,"./native.js"));UH(D8)?On=WH:On=D8;H8.exports=On
});var Fn=c(function(oN,$H){$H.exports=[701,301,132,57,23,10,4,1]});var W8=c(function(fN,U8){
var hH=require('@stdlib/math/base/assert/is-negative-zerof/dist'),YH=require('@stdlib/math/base/assert/is-nanf/dist'),Q8=Fn(),XH=Q8.length;function dH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<XH;p++)for(t=Q8[p],l=t;l<n;l++)if(f=a[v+l*i],!YH(f)){for(q=r[s+l*u],o=hH(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}U8.exports=dH
});var Y8=c(function(qN,h8){
var xH=require('@stdlib/math/base/assert/is-negative-zerof/dist'),NH=require('@stdlib/math/base/assert/is-nanf/dist'),$8=Fn(),rJ=$8.length;function eJ(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<rJ;p++)for(t=$8[p],l=t;l<n;l++)if(f=a[r+l*i],!NH(f)){for(q=u[s+l*v],o=xH(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}h8.exports=eJ
});var x8=c(function(cN,d8){
var aJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),X8=W8(),uJ=Y8();aJ(X8,"ndarray",uJ);d8.exports=X8
});var eE=c(function(mN,rE){
var iJ=require("path").join,nJ=require('@stdlib/utils/try-require/dist'),vJ=require('@stdlib/assert/is-error/dist'),sJ=x8(),Mn,N8=nJ(iJ(__dirname,"./native.js"));vJ(N8)?Mn=sJ:Mn=N8;rE.exports=Mn
});var nE=c(function(lN,iE){
var aE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),uE=require('@stdlib/math/base/assert/is-nanf/dist'),tJ=require('@stdlib/math/base/special/floor/dist');function oJ(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=tJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||uE(s)||s===o&&aE(s))&&(v+=1)),s=a[r+v*i],s>f||uE(s)||s===f&&aE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}iE.exports=oJ
});var oE=c(function(pN,tE){
var vE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),sE=require('@stdlib/math/base/assert/is-nanf/dist'),fJ=require('@stdlib/math/base/special/floor/dist');function qJ(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=fJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||sE(s)||s===o&&vE(s))&&(v+=1)),s=a[r+v*i],s>f||sE(s)||s===f&&vE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}tE.exports=qJ
});var cE=c(function(jN,qE){
var cJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),fE=nE(),mJ=oE();cJ(fE,"ndarray",mJ);qE.exports=fE
});var pE=c(function(gN,lE){
var lJ=require("path").join,pJ=require('@stdlib/utils/try-require/dist'),jJ=require('@stdlib/assert/is-error/dist'),gJ=cE(),Tn,mE=pJ(lJ(__dirname,"./native.js"));jJ(mE)?Tn=gJ:Tn=mE;lE.exports=Tn
});var bE=c(function(bN,gE){
var he=require('@stdlib/math/base/assert/is-negative-zerof/dist'),jE=require('@stdlib/math/base/assert/is-nanf/dist');function bJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],jE(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=he(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&he(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],jE(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=he(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&he(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}gE.exports=bJ
});var RE=c(function(wN,yE){
var Ye=require('@stdlib/math/base/assert/is-negative-zerof/dist'),wE=require('@stdlib/math/base/assert/is-nanf/dist');function wJ(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],wE(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Ye(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Ye(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],wE(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Ye(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Ye(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}yE.exports=wJ
});var EE=c(function(yN,_E){
var yJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kE=bE(),RJ=RE();yJ(kE,"ndarray",RJ);_E.exports=kE
});var ME=c(function(RN,FE){
var kJ=require("path").join,_J=require('@stdlib/utils/try-require/dist'),EJ=require('@stdlib/assert/is-error/dist'),OJ=EE(),Sn,OE=_J(kJ(__dirname,"./native.js"));EJ(OE)?Sn=OJ:Sn=OE;FE.exports=Sn
});var Zn=c(function(kN,FJ){FJ.exports=[701,301,132,57,23,10,4,1]});var ZE=c(function(_N,SE){
var MJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),TJ=require('@stdlib/math/base/assert/is-nanf/dist'),TE=Zn(),SJ=TE.length;function ZJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<SJ;t++)for(v=TE[t],f=v;f<n;f++)if(s=a[r+f*i],!TJ(s)){for(u=MJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}SE.exports=ZJ
});var LE=c(function(EN,AE){
var PJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),AJ=require('@stdlib/math/base/assert/is-nanf/dist'),PE=Zn(),LJ=PE.length;function BJ(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<LJ;t++)for(v=PE[t],f=v;f<n;f++)if(s=a[r+f*i],!AJ(s)){for(u=PJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}AE.exports=BJ
});var GE=c(function(ON,CE){
var CJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),BE=ZE(),GJ=LE();CJ(BE,"ndarray",GJ);CE.exports=BE
});var VE=c(function(FN,KE){
var IJ=require("path").join,KJ=require('@stdlib/utils/try-require/dist'),VJ=require('@stdlib/assert/is-error/dist'),zJ=GE(),Pn,IE=KJ(IJ(__dirname,"./native.js"));VJ(IE)?Pn=zJ:Pn=IE;KE.exports=Pn
});var HE=c(function(MN,DE){
var ur=require('@stdlib/number/float64/base/to-float32/dist'),zE=require('@stdlib/math/base/special/abs/dist');function DJ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=ur(i+u),zE(i)>=zE(u)?s=ur(s+ur(ur(i-v)+u)):s=ur(s+ur(ur(u-v)+i)),i=v,r+=a;return ur(i+s)}DE.exports=DJ
});var UE=c(function(TN,QE){
var ir=require('@stdlib/number/float64/base/to-float32/dist'),JE=require('@stdlib/math/base/special/abs/dist');function HJ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=ir(r+v),JE(r)>=JE(v)?o=ir(o+ir(ir(r-s)+v)):o=ir(o+ir(ir(v-s)+r)),r=s,u+=a;return ir(r+o)}QE.exports=HJ
});var hE=c(function(SN,$E){
var JJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),WE=HE(),QJ=UE();JJ(WE,"ndarray",QJ);$E.exports=WE
});var Xe=c(function(ZN,XE){
var UJ=require("path").join,WJ=require('@stdlib/utils/try-require/dist'),$J=require('@stdlib/assert/is-error/dist'),hJ=hE(),An,YE=WJ(UJ(__dirname,"./native.js"));$J(YE)?An=hJ:An=YE;XE.exports=An
});var xE=c(function(PN,dE){
var YJ=Xe();function XJ(n,e,a){return YJ(n,e,a)}dE.exports=XJ
});var r6=c(function(AN,NE){
var dJ=Xe().ndarray;function xJ(n,e,a,i){return dJ(n,e,a,i)}NE.exports=xJ
});var u6=c(function(LN,a6){
var NJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),e6=xE(),rQ=r6();NJ(e6,"ndarray",rQ);a6.exports=e6
});var v6=c(function(BN,n6){
var eQ=require("path").join,aQ=require('@stdlib/utils/try-require/dist'),uQ=require('@stdlib/assert/is-error/dist'),iQ=u6(),Ln,i6=aQ(eQ(__dirname,"./native.js"));uQ(i6)?Ln=iQ:Ln=i6;n6.exports=Ln
});var t6=c(function(CN,s6){
var Q=require('@stdlib/number/float64/base/to-float32/dist'),de=require('@stdlib/math/base/special/abs/dist');function nQ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=Q(i+o),de(i)>=de(o)?f=Q(Q(i-t)+o):f=Q(Q(o-t)+i),i=t,t=Q(v+f),de(v)>=de(f)?s=Q(Q(v-t)+f):s=Q(Q(f-t)+v),v=t,r=Q(r+s),u+=a;return Q(i+Q(v+r))}s6.exports=nQ
});var f6=c(function(GN,o6){
var U=require('@stdlib/number/float64/base/to-float32/dist'),xe=require('@stdlib/math/base/special/abs/dist');function vQ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=U(r+t),xe(r)>=xe(t)?q=U(U(r-f)+t):q=U(U(t-f)+r),r=f,f=U(s+q),xe(s)>=xe(q)?o=U(U(s-f)+q):o=U(U(q-f)+s),s=f,u=U(u+o),v+=a;return U(r+U(s+u))}o6.exports=vQ
});var m6=c(function(IN,c6){
var sQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),q6=t6(),tQ=f6();sQ(q6,"ndarray",tQ);c6.exports=q6
});var j6=c(function(KN,p6){
var oQ=require("path").join,fQ=require('@stdlib/utils/try-require/dist'),qQ=require('@stdlib/assert/is-error/dist'),cQ=m6(),Bn,l6=fQ(oQ(__dirname,"./native.js"));qQ(l6)?Bn=cQ:Bn=l6;p6.exports=Bn
});var b6=c(function(VN,g6){
var mQ=require('@stdlib/number/float64/base/to-float32/dist');function lQ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)i=mQ(i+e[r]),r+=a;return i}g6.exports=lQ
});var y6=c(function(zN,w6){
var pQ=require('@stdlib/number/float64/base/to-float32/dist');function jQ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];for(u=i,v=0;v<n;v++)r=pQ(r+e[u]),u+=a;return r}w6.exports=jQ
});var _6=c(function(DN,k6){
var gQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),R6=b6(),bQ=y6();gQ(R6,"ndarray",bQ);k6.exports=R6
});var F6=c(function(HN,O6){
var wQ=require("path").join,yQ=require('@stdlib/utils/try-require/dist'),RQ=require('@stdlib/assert/is-error/dist'),kQ=_6(),Cn,E6=yQ(wQ(__dirname,"./native.js"));RQ(E6)?Cn=kQ:Cn=E6;O6.exports=Cn
});var In=c(function(JN,M6){
var I=require('@stdlib/number/float64/base/to-float32/dist'),_Q=require('@stdlib/math/base/special/floor/dist'),EQ=128;function Gn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l=I(l+e[r]),r+=a;return l}if(n<=EQ){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u=I(u+e[r]),v=I(v+e[r+a]),s=I(s+e[r+2*a]),o=I(o+e[r+3*a]),t=I(t+e[r+4*a]),f=I(f+e[r+5*a]),q=I(q+e[r+6*a]),m=I(m+e[r+7*a]),r+=8*a;for(l=I(I(I(u+v)+I(s+o))+I(I(t+f)+I(q+m))),g;g<n;g++)l=I(l+e[r]),r+=a;return l}return j=_Q(n/2),j-=j%8,I(Gn(j,e,a,r)+Gn(n-j,e,a,r+j*a))}M6.exports=Gn
});var S6=c(function(QN,T6){
var OQ=require('@stdlib/number/float64/base/to-float32/dist'),FQ=In();function MQ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=OQ(r+e[i]),i+=a;return r}return FQ(n,e,a,i)}T6.exports=MQ
});var A6=c(function(UN,P6){
var TQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Z6=S6(),SQ=In();TQ(Z6,"ndarray",SQ);P6.exports=Z6
});var C6=c(function(WN,B6){
var ZQ=require("path").join,PQ=require('@stdlib/utils/try-require/dist'),AQ=require('@stdlib/assert/is-error/dist'),LQ=A6(),Kn,L6=PQ(ZQ(__dirname,"./native.js"));AQ(L6)?Kn=LQ:Kn=L6;B6.exports=Kn
});var I6=c(function($N,G6){
var y=require('@stdlib/utils/define-read-only-property/dist'),w={};y(w,"dapx",Xo());y(w,"dapxsum",wf());y(w,"dapxsumkbn",Ir());y(w,"dapxsumkbn2",Sf());y(w,"dapxsumors",Vf());y(w,"dapxsumpw",hf());y(w,"dasumpw",iq());y(w,"dcusum",Oq());y(w,"dcusumkbn",zr());y(w,"dcusumkbn2",Cq());y(w,"dcusumors",Uq());y(w,"dcusumpw",rc());y(w,"dfill",fc());y(w,"dnanasum",Lc());y(w,"dnanasumors",Qr());y(w,"dnannsum",am());y(w,"dnannsumkbn",Ur());y(w,"dnannsumkbn2",lm());y(w,"dnannsumors",Fm());y(w,"dnannsumpw",Im());y(w,"dnansum",v1());y(w,"dnansumkbn",hr());y(w,"dnansumkbn2",b1());y(w,"dnansumors",Z1());y(w,"dnansumpw",z1());y(w,"drev",X1());y(w,"dsapxsum",ll());y(w,"dsapxsumpw",xr());y(w,"dsnannsumors",Fl());y(w,"dsnansum",Ul());y(w,"dsnansumors",up());y(w,"dsnansumpw",Nr());y(w,"dsort2hp",gp());y(w,"dsort2ins",Sp());y(w,"dsort2sh",Dp());y(w,"dsorthp",e2());y(w,"dsortins",m2());y(w,"dsortsh",O2());y(w,"dssum",J2());y(w,"dssumors",N2());y(w,"dssumpw",ie());y(w,"dsum",yj());y(w,"dsumkbn",ve());y(w,"dsumkbn2",Zj());y(w,"dsumors",zj());y(w,"dsumpw",Yj());y(w,"gapx",ag());y(w,"gapxsum",gg());y(w,"gapxsumkbn",qe());y(w,"gapxsumkbn2",Eg());y(w,"gapxsumors",Pg());y(w,"gapxsumpw",Ig());y(w,"gasumpw",Qg());y(w,"gcusum",nb());y(w,"gcusumkbn",le());y(w,"gcusumkbn2",cb());y(w,"gcusumors",wb());y(w,"gcusumpw",Ob());y(w,"gfill",Lb());y(w,"gfillBy",Db());y(w,"gnannsumkbn",xb());y(w,"gnansum",pw());y(w,"gnansumkbn",be());y(w,"gnansumkbn2",Ew());y(w,"gnansumors",Lw());y(w,"gnansumpw",zw());y(w,"grev",hw());y(w,"gsort2hp",ny());y(w,"gsort2ins",ly());y(w,"gsort2sh",_y());y(w,"gsorthp",By());y(w,"gsortins",Jy());y(w,"gsortsh",xy());y(w,"gsum",mR());y(w,"gsumkbn",Fe());y(w,"gsumkbn2",yR());y(w,"gsumors",MR());y(w,"gsumpw",LR());y(w,"sapx",JR());y(w,"sapxsum",fk());y(w,"sapxsumkbn",Pe());y(w,"sapxsumkbn2",yk());y(w,"sapxsumors",Zk());y(w,"sapxsumpw",Vk());y(w,"sasumpw",Yk());y(w,"scusum",j3());y(w,"scusumkbn",Be());y(w,"scusumkbn2",F3());y(w,"scusumors",G3());y(w,"scusumpw",W3());y(w,"sdsapxsum",q_());y(w,"sdsapxsumpw",Ke());y(w,"sdsnansum",Z_());y(w,"sdsnansumpw",Ve());y(w,"sdssum",h_());y(w,"sdssumpw",ze());y(w,"sfill",i4());y(w,"snansum",M4());y(w,"snansumkbn",He());y(w,"snansumkbn2",V4());y(w,"snansumors",d4());y(w,"snansumpw",s8());y(w,"srev",g8());y(w,"ssort2hp",P8());y(w,"ssort2ins",J8());y(w,"ssort2sh",eE());y(w,"ssorthp",pE());y(w,"ssortins",ME());y(w,"ssortsh",VE());y(w,"ssum",v6());y(w,"ssumkbn",Xe());y(w,"ssumkbn2",j6());y(w,"ssumors",F6());y(w,"ssumpw",C6());G6.exports=w
});var z6=c(function(hN,V6){
var BQ=require('@stdlib/utils/define-read-only-property/dist'),K6={};BQ(K6,"base",I6());V6.exports=K6
});var Q6=c(function(YN,J6){
var D6=require('@stdlib/assert/is-ndarray-like/dist'),H6=require('@stdlib/assert/is-collection/dist'),Ne=require('@stdlib/assert/is-float64array/dist'),ra=require('@stdlib/assert/is-float32array/dist'),Vn=require('@stdlib/string/format/dist'),CQ=Mr().ndarray,GQ=Pr().ndarray,ea=Ma().ndarray;function IQ(n,e){var a,i,r,u,v,s,o,t;if(v=D6(n),o=D6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=Ne(n.data),i=a?!1:ra(n.data);else if(v===!1&&H6(n))a=Ne(n),i=a?!1:ra(n);else throw new TypeError(Vn('0G93T',n));if(t)r=Ne(e.data),u=r?!1:ra(e.data);else if(o===!1&&H6(e))r=Ne(e),u=r?!1:ra(e);else throw new TypeError(Vn('0G93U',e));if(n.length!==e.length)throw new RangeError(Vn('0G93S',n.length,e.length));return s&&t?a&&r?CQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):i&&u?GQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):ea(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):s?ea(n.length,n.data,n.strides[0],n.offset,e,1,0):t?ea(n.length,n,1,0,e.data,e.strides[0],e.offset):ea(n.length,n,1,0,e,1,0)}J6.exports=IQ
});var W6=c(function(XN,U6){
var KQ=Q6();U6.exports=KQ
});var X6=c(function(dN,Y6){
var $6=require('@stdlib/assert/is-ndarray-like/dist'),h6=require('@stdlib/assert/is-collection/dist'),aa=require('@stdlib/assert/is-float64array/dist'),ua=require('@stdlib/assert/is-float32array/dist'),zn=require('@stdlib/string/format/dist'),VQ=Sr().ndarray,zQ=Cr().ndarray,ia=Aa().ndarray;function DQ(n,e){var a,i,r,u,v,s,o,t;if(v=$6(n),o=$6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=aa(n.data),i=a?!1:ua(n.data);else if(v===!1&&h6(n))a=aa(n),i=a?!1:ua(n);else throw new TypeError(zn('0G93T',n));if(t)r=aa(e.data),u=r?!1:ua(e.data);else if(o===!1&&h6(e))r=aa(e),u=r?!1:ua(e);else throw new TypeError(zn('0G93U',e));if(n.length!==e.length)throw new RangeError(zn('0G93S',n.length,e.length));return s&&t?a&&r?(VQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):i&&u?(zQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):(ia(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):s?(ia(n.length,n.data,n.strides[0],n.offset,e,1,0),e):t?(ia(n.length,n,1,0,e.data,e.strides[0],e.offset),e):(ia(n.length,n,1,0,e,1,0),e)}Y6.exports=DQ
});var x6=c(function(xN,d6){
var HQ=X6();d6.exports=HQ
});var eO=c(function(NN,rO){
var N6=require('@stdlib/assert/is-float32vector-like/dist'),JQ=Pr().ndarray,Dn=require('@stdlib/string/format/dist');function QQ(n,e){if(!N6(n))throw new TypeError(Dn('0G9DA',n));if(!N6(e))throw new TypeError(Dn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Dn('0G93S',n.length,e.length));return JQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}rO.exports=QQ
});var uO=c(function(rrr,aO){
var UQ=eO();aO.exports=UQ
});var vO=c(function(err,nO){
var iO=require('@stdlib/assert/is-float32vector-like/dist'),Hn=require('@stdlib/string/format/dist'),WQ=Cr().ndarray;function $Q(n,e){if(!iO(n))throw new TypeError(Hn('0G9DA',n));if(!iO(e))throw new TypeError(Hn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Hn('0G93S',n.length,e.length));return WQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}nO.exports=$Q
});var tO=c(function(arr,sO){
var hQ=vO();sO.exports=hQ
});var nr=require('@stdlib/utils/define-read-only-property/dist'),X={};nr(X,"base",Zo());nr(X,"ddot",Co());nr(X,"dswap",zo());nr(X,"ext",z6());nr(X,"gdot",W6());nr(X,"gswap",x6());nr(X,"sdot",uO());nr(X,"sswap",tO());module.exports=X;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
