"use strict";var c=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var Un=c(function(NQ,Qn){
var Jn=require('@stdlib/strided/base/reinterpret-complex64/dist');function qO(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0)return i;if(u=Jn(e,0),v=Jn(i,0),a===1&&r===1){for(q=0;q<n*2;q+=2)v[q]=u[q],v[q+1]=u[q+1];return i}for(a<0?t=2*(1-n)*a:t=0,r<0?f=2*(1-n)*r:f=0,s=a*2,o=r*2,q=0;q<n;q++)v[f]=u[t],v[f+1]=u[t+1],t+=s,f+=o;return i}Qn.exports=qO
});var hn=c(function(rU,$n){
var Wn=require('@stdlib/strided/base/reinterpret-complex64/dist');function cO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;for(s=Wn(e,0),o=Wn(r,0),t=a*2,f=u*2,q=i*2,m=v*2,p=0;p<n;p++)o[m]=s[q],o[m+1]=s[q+1],q+=t,m+=f;return r}$n.exports=cO
});var dn=c(function(eU,Xn){
var mO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Yn=Un(),lO=hn();mO(Yn,"ndarray",lO);Xn.exports=Yn
});var rv=c(function(aU,Nn){
var pO=require("path").join,jO=require('@stdlib/utils/try-require/dist'),gO=require('@stdlib/assert/is-error/dist'),bO=dn(),na,xn=jO(pO(__dirname,"./native.js"));gO(xn)?na=bO:na=xn;Nn.exports=na
});var uv=c(function(uU,av){
var ev=require('@stdlib/array/float32/dist');function wO(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return i;if(u=new ev(e.buffer,e.byteOffset,e.length*2),v=new ev(i.buffer,i.byteOffset,i.length*2),a===1&&r===1){for(m=0;m<n*2;m+=2)s=u[m],u[m]=v[m],v[m]=s,p=m+1,s=u[p],u[p]=v[p],v[p]=s;return i}for(a<0?f=2*(1-n)*a:f=0,r<0?q=2*(1-n)*r:q=0,o=a*2,t=r*2,m=0;m<n;m++)s=u[f],u[f]=v[q],v[q]=s,s=u[f+1],u[f+1]=v[q+1],v[q+1]=s,f+=o,q+=t;return i}av.exports=wO
});var vv=c(function(iU,nv){
var iv=require('@stdlib/array/float32/dist');function yO(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(n<=0)return r;for(s=new iv(e.buffer,e.byteOffset,e.length*2),o=new iv(r.buffer,r.byteOffset,r.length*2),f=a*2,q=u*2,m=i*2,p=v*2,l=0;l<n;l++)t=s[m],s[m]=o[p],o[p]=t,t=s[m+1],s[m+1]=o[p+1],o[p+1]=t,m+=f,p+=q;return r}nv.exports=yO
});var ov=c(function(nU,tv){
var RO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sv=uv(),kO=vv();RO(sv,"ndarray",kO);tv.exports=sv
});var cv=c(function(vU,qv){
var _O=require("path").join,EO=require('@stdlib/utils/try-require/dist'),OO=require('@stdlib/assert/is-error/dist'),FO=ov(),va,fv=EO(_O(__dirname,"./native.js"));OO(fv)?va=FO:va=fv;qv.exports=va
});var lv=c(function(sU,mv){
var d=require('@stdlib/math/base/special/abs/dist'),sa=6;function MO(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%sa,r>0)for(u=0;u<r;u++)i+=d(e[u]);if(n<sa)return i;for(u=r;u<n;u+=sa)i+=d(e[u])+d(e[u+1])+d(e[u+2])+d(e[u+3])+d(e[u+4])+d(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=d(e[u]);return i}mv.exports=MO
});var jv=c(function(tU,pv){
var x=require('@stdlib/math/base/special/abs/dist'),Fr=6;function TO(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Fr,v>0)for(s=0;s<v;s++)r+=x(e[u]),u+=a;if(n<Fr)return r;for(s=v;s<n;s+=Fr)r+=x(e[u])+x(e[u+1])+x(e[u+2])+x(e[u+3])+x(e[u+4])+x(e[u+5]),u+=Fr;return r}for(s=0;s<n;s++)r+=x(e[u]),u+=a;return r}pv.exports=TO
});var wv=c(function(oU,bv){
var SO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gv=lv(),ZO=jv();SO(gv,"ndarray",ZO);bv.exports=gv
});var kv=c(function(fU,Rv){
var PO=require("path").join,AO=require('@stdlib/utils/try-require/dist'),LO=require('@stdlib/assert/is-error/dist'),BO=wv(),ta,yv=AO(PO(__dirname,"./native.js"));LO(yv)?ta=BO:ta=yv;Rv.exports=ta
});var Ev=c(function(qU,_v){
var oa=4;function CO(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%oa,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<oa)return r;for(t=o;t<n;t+=oa)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}_v.exports=CO
});var Fv=c(function(cU,Ov){
var fr=4;function GO(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%fr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<fr)return u;for(q=f;q<n;q+=fr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=fr,t+=fr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Ov.exports=GO
});var Sv=c(function(mU,Tv){
var IO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mv=Ev(),KO=Fv();IO(Mv,"ndarray",KO);Tv.exports=Mv
});var Av=c(function(lU,Pv){
var VO=require("path").join,zO=require('@stdlib/utils/try-require/dist'),DO=require('@stdlib/assert/is-error/dist'),HO=Sv(),fa,Zv=zO(VO(__dirname,"./native.js"));DO(Zv)?fa=HO:fa=Zv;Pv.exports=fa
});var Bv=c(function(pU,Lv){
var qa=8;function JO(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%qa,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<qa)return i;for(o=s;o<n;o+=qa)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}Lv.exports=JO
});var Gv=c(function(jU,Cv){
var qr=8;function QO(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%qr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<qr)return r;for(f=t;f<n;f+=qr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=qr,o+=qr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}Cv.exports=QO
});var Vv=c(function(gU,Kv){
var UO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Iv=Bv(),WO=Gv();UO(Iv,"ndarray",WO);Kv.exports=Iv
});var Hv=c(function(bU,Dv){
var $O=require("path").join,hO=require('@stdlib/utils/try-require/dist'),YO=require('@stdlib/assert/is-error/dist'),XO=Vv(),ca,zv=hO($O(__dirname,"./native.js"));YO(zv)?ca=XO:ca=zv;Dv.exports=ca
});var Qv=c(function(wU,Jv){
var ma=5;function dO(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%ma,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<ma)return u;for(t=o;t<n;t+=ma)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}Jv.exports=dO
});var Wv=c(function(yU,Uv){
var cr=5;function xO(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%cr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<cr)return s;for(q=f;q<n;q+=cr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=cr,t+=cr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Uv.exports=xO
});var Yv=c(function(RU,hv){
var NO=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$v=Qv(),r5=Wv();NO($v,"ndarray",r5);hv.exports=$v
});var Mr=c(function(kU,dv){
var e5=require("path").join,a5=require('@stdlib/utils/try-require/dist'),u5=require('@stdlib/assert/is-error/dist'),i5=Yv(),la,Xv=a5(e5(__dirname,"./native.js"));u5(Xv)?la=i5:la=Xv;dv.exports=la
});var es=c(function(_U,rs){
var n5=require('@stdlib/math/base/special/sqrt/dist'),xv=require('@stdlib/math/base/special/abs/dist'),Nv=require('@stdlib/math/base/special/pow/dist');function v5(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return xv(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=xv(e[v]),i<u?(r=1+r*Nv(i/u,2),i=u):r+=Nv(u/i,2));return i*n5(r)}rs.exports=v5
});var ns=c(function(EU,is){
var s5=require('@stdlib/math/base/special/sqrt/dist'),as=require('@stdlib/math/base/special/abs/dist'),us=require('@stdlib/math/base/special/pow/dist');function t5(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return as(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=as(e[s]),r<v?(u=1+u*us(r/v,2),r=v):u+=us(v/r,2)),s+=a;return r*s5(u)}is.exports=t5
});var ts=c(function(OU,ss){
var o5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),vs=es(),f5=ns();o5(vs,"ndarray",f5);ss.exports=vs
});var qs=c(function(FU,fs){
var q5=require("path").join,c5=require('@stdlib/utils/try-require/dist'),m5=require('@stdlib/assert/is-error/dist'),l5=ts(),pa,os=c5(q5(__dirname,"./native.js"));m5(os)?pa=l5:pa=os;fs.exports=pa
});var ms=c(function(MU,cs){
var ja=5;function p5(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%ja,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<ja)return a;for(r=u;r<n;r+=ja)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}cs.exports=p5
});var ps=c(function(TU,ls){
var Tr=5;function j5(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Tr,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Tr)return a;for(s=v;s<n;s+=Tr)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e,u+=Tr;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}ls.exports=j5
});var bs=c(function(SU,gs){
var g5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),js=ms(),b5=ps();g5(js,"ndarray",b5);gs.exports=js
});var Rs=c(function(ZU,ys){
var w5=require("path").join,y5=require('@stdlib/utils/try-require/dist'),R5=require('@stdlib/assert/is-error/dist'),k5=bs(),ga,ws=y5(w5(__dirname,"./native.js"));R5(ws)?ga=k5:ga=ws;ys.exports=ga
});var _s=c(function(PU,ks){
var ba=5;function _5(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%ba,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<ba)return u;for(t=o;t<n;t+=ba)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}ks.exports=_5
});var Os=c(function(AU,Es){
var mr=5;function E5(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%mr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<mr)return s;for(q=f;q<n;q+=mr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=mr,t+=mr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}Es.exports=E5
});var Ts=c(function(LU,Ms){
var O5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fs=_s(),F5=Os();O5(Fs,"ndarray",F5);Ms.exports=Fs
});var Ps=c(function(BU,Zs){
var M5=require("path").join,T5=require('@stdlib/utils/try-require/dist'),S5=require('@stdlib/assert/is-error/dist'),Z5=Ts(),wa,Ss=T5(M5(__dirname,"./native.js"));S5(Ss)?wa=Z5:wa=Ss;Zs.exports=wa
});var Ls=c(function(CU,As){
var ya=3;function P5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%ya,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<ya)return i;for(t=o;t<n;t+=ya)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}As.exports=P5
});var Cs=c(function(GU,Bs){
var lr=3;function A5(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%lr,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<lr)return r;for(q=f;q<n;q+=lr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=lr,t+=lr;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}Bs.exports=A5
});var Ks=c(function(IU,Is){
var L5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gs=Ls(),B5=Cs();L5(Gs,"ndarray",B5);Is.exports=Gs
});var Sr=c(function(KU,zs){
var C5=require("path").join,G5=require('@stdlib/utils/try-require/dist'),I5=require('@stdlib/assert/is-error/dist'),K5=Ks(),Ra,Vs=G5(C5(__dirname,"./native.js"));I5(Vs)?Ra=K5:Ra=Vs;zs.exports=Ra
});var Hs=c(function(VU,Ds){
var N=require('@stdlib/math/base/special/abs/dist'),ka=6;function V5(n,e,a){var i,r,u;if(i=0,n<=0||a<=0)return i;if(a===1){if(r=n%ka,r>0)for(u=0;u<r;u++)i+=N(e[u]);if(n<ka)return i;for(u=r;u<n;u+=ka)i+=N(e[u])+N(e[u+1])+N(e[u+2])+N(e[u+3])+N(e[u+4])+N(e[u+5]);return i}for(n*=a,u=0;u<n;u+=a)i+=N(e[u]);return i}Ds.exports=V5
});var Qs=c(function(zU,Js){
var rr=require('@stdlib/math/base/special/abs/dist'),Zr=6;function z5(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(u=i,a===1){if(v=n%Zr,v>0)for(s=0;s<v;s++)r+=rr(e[u]),u+=a;if(n<Zr)return r;for(s=v;s<n;s+=Zr)r+=rr(e[u])+rr(e[u+1])+rr(e[u+2])+rr(e[u+3])+rr(e[u+4])+rr(e[u+5]),u+=Zr;return r}for(s=0;s<n;s++)r+=rr(e[u]),u+=a;return r}Js.exports=z5
});var $s=c(function(DU,Ws){
var D5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Us=Hs(),H5=Qs();D5(Us,"ndarray",H5);Ws.exports=Us
});var Ys=c(function(HU,hs){
var _a=4;function J5(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%_a,o>0)for(t=0;t<o;t++)r[t]+=e*a[t];if(n<_a)return r;for(t=o;t<n;t+=_a)r[t]+=e*a[t],r[t+1]+=e*a[t+1],r[t+2]+=e*a[t+2],r[t+3]+=e*a[t+3];return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=e*a[v],v+=i,s+=u;return r}hs.exports=J5
});var ds=c(function(JU,Xs){
var pr=4;function Q5(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%pr,f>0)for(q=0;q<f;q++)u[t]+=e*a[o],o+=i,t+=v;if(n<pr)return u;for(q=f;q<n;q+=pr)u[t]+=e*a[o],u[t+1]+=e*a[o+1],u[t+2]+=e*a[o+2],u[t+3]+=e*a[o+3],o+=pr,t+=pr;return u}for(q=0;q<n;q++)u[t]+=e*a[o],o+=i,t+=v;return u}Xs.exports=Q5
});var r0=c(function(QU,Ns){
var U5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xs=Ys(),W5=ds();U5(xs,"ndarray",W5);Ns.exports=xs
});var Ea=c(function(UU,e0){
function $5(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],q=i,m=v,p=0;p<n;p++)t(o,m,f(s,q)),q+=a,m+=u;return e}e0.exports=$5
});var i0=c(function(WU,u0){
var a0=require('@stdlib/array/base/arraylike2object/dist'),h5=Ea(),Oa=8;function Y5(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(s=a0(e),o=a0(i),s.accessorProtocol||o.accessorProtocol)return a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,h5(n,s,a,u,o,r,v),o.data;if(a===1&&r===1){if(t=n%Oa,t>0)for(f=0;f<t;f++)i[f]=e[f];if(n<Oa)return i;for(f=t;f<n;f+=Oa)i[f]=e[f],i[f+1]=e[f+1],i[f+2]=e[f+2],i[f+3]=e[f+3],i[f+4]=e[f+4],i[f+5]=e[f+5],i[f+6]=e[f+6],i[f+7]=e[f+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,f=0;f<n;f++)i[v]=e[u],u+=a,v+=r;return i}u0.exports=Y5
});var s0=c(function($U,v0){
var n0=require('@stdlib/array/base/arraylike2object/dist'),X5=Ea(),jr=8;function d5(n,e,a,i,r,u,v){var s,o,t,f,q,m;if(n<=0)return r;if(t=n0(e),f=n0(r),t.accessorProtocol||f.accessorProtocol)return X5(n,t,a,i,f,u,v),f.data;if(s=i,o=v,a===1&&u===1){if(q=n%jr,q>0)for(m=0;m<q;m++)r[o]=e[s],s+=a,o+=u;if(n<jr)return r;for(m=q;m<n;m+=jr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=jr,o+=jr;return r}for(m=0;m<n;m++)r[o]=e[s],s+=a,o+=u;return r}v0.exports=d5
});var f0=c(function(hU,o0){
var x5=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),t0=i0(),N5=s0();x5(t0,"ndarray",N5);o0.exports=t0
});var c0=c(function(YU,q0){
var Fa=5;function rF(n,e,a,i,r){var u,v,s,o,t;if(u=0,n<=0)return u;if(a===1&&r===1){if(o=n%Fa,o>0)for(t=0;t<o;t++)u+=e[t]*i[t];if(n<Fa)return u;for(t=o;t<n;t+=Fa)u+=e[t]*i[t]+e[t+1]*i[t+1]+e[t+2]*i[t+2]+e[t+3]*i[t+3]+e[t+4]*i[t+4];return u}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u+=e[v]*i[s],v+=a,s+=r;return u}q0.exports=rF
});var l0=c(function(XU,m0){
var gr=5;function eF(n,e,a,i,r,u,v){var s,o,t,f,q;if(s=0,n<=0)return s;if(o=i,t=v,a===1&&u===1){if(f=n%gr,f>0)for(q=0;q<f;q++)s+=e[o]*r[t],o+=1,t+=1;if(n<gr)return s;for(q=f;q<n;q+=gr)s+=e[o]*r[t]+e[o+1]*r[t+1]+e[o+2]*r[t+2]+e[o+3]*r[t+3]+e[o+4]*r[t+4],o+=gr,t+=gr;return s}for(q=0;q<n;q++)s+=e[o]*r[t],o+=a,t+=u;return s}m0.exports=eF
});var Ma=c(function(dU,j0){
var aF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),p0=c0(),uF=l0();aF(p0,"ndarray",uF);j0.exports=p0
});var y0=c(function(xU,w0){
var iF=require('@stdlib/math/base/special/sqrt/dist'),g0=require('@stdlib/math/base/special/abs/dist'),b0=require('@stdlib/math/base/special/pow/dist');function nF(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return g0(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=g0(e[v]),i<u?(r=1+r*b0(i/u,2),i=u):r+=b0(u/i,2));return i*iF(r)}w0.exports=nF
});var E0=c(function(NU,_0){
var vF=require('@stdlib/math/base/special/sqrt/dist'),R0=require('@stdlib/math/base/special/abs/dist'),k0=require('@stdlib/math/base/special/pow/dist');function sF(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return R0(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=R0(e[s]),r<v?(u=1+u*k0(r/v,2),r=v):u+=k0(v/r,2)),s+=a;return r*vF(u)}_0.exports=sF
});var M0=c(function(rW,F0){
var tF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),O0=y0(),oF=E0();tF(O0,"ndarray",oF);F0.exports=O0
});var S0=c(function(eW,T0){
var fF=M0();T0.exports=fF
});var P0=c(function(aW,Z0){
var Ta=5;function qF(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(r=n%Ta,r>0)for(u=0;u<r;u+=1)a[u]*=e;if(n<Ta)return a;for(u=r;u<n;u+=Ta)a[u]*=e,a[u+1]*=e,a[u+2]*=e,a[u+3]*=e,a[u+4]*=e;return a}for(n*=i,u=0;u<n;u+=i)a[u]*=e;return a}Z0.exports=qF
});var L0=c(function(uW,A0){
var Sa=5;function cF(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(v=n%Sa,v>0)for(s=0;s<v;s++)a[u]*=e,u+=i;if(n<Sa)return a;for(s=v;s<n;s+=Sa)a[s]*=e,a[s+1]*=e,a[s+2]*=e,a[s+3]*=e,a[s+4]*=e;return a}for(s=0;s<n;s++)a[u]*=e,u+=i;return a}A0.exports=cF
});var G0=c(function(iW,C0){
var mF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),B0=P0(),lF=L0();mF(B0,"ndarray",lF);C0.exports=B0
});var Za=c(function(nW,I0){
function pF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;for(s=e.data,o=r.data,f=e.accessors[0],t=r.accessors[1],m=i,p=v,l=0;l<n;l++)q=f(s,m),t(s,m,f(o,p)),t(o,p,q),m+=a,p+=u;return e}I0.exports=pF
});var z0=c(function(vW,V0){
var K0=require('@stdlib/array/base/arraylike2object/dist'),jF=Za(),Pa=3;function gF(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0)return i;if(o=K0(e),t=K0(i),o.accessorProtocol||t.accessorProtocol)return a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,jF(n,o,a,v,t,r,s),t.data;if(a===1&&r===1){if(f=n%Pa,f>0)for(q=0;q<f;q++)u=e[q],e[q]=i[q],i[q]=u;if(n<Pa)return i;for(q=f;q<n;q+=Pa)u=e[q],e[q]=i[q],i[q]=u,m=q+1,u=e[m],e[m]=i[m],i[m]=u,m+=1,u=e[m],e[m]=i[m],i[m]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,q=0;q<n;q++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}V0.exports=gF
});var J0=c(function(sW,H0){
var D0=require('@stdlib/array/base/arraylike2object/dist'),bF=Za(),br=3;function wF(n,e,a,i,r,u,v){var s,o,t,f,q,m,p;if(n<=0)return r;if(f=D0(e),q=D0(r),f.accessorProtocol||q.accessorProtocol)return bF(n,f,a,i,q,u,v),q.data;if(o=i,t=v,a===1&&u===1){if(m=n%br,m>0)for(p=0;p<m;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<br)return r;for(p=m;p<n;p+=br)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=br,t+=br;return r}for(p=0;p<n;p++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}H0.exports=wF
});var Aa=c(function(tW,U0){
var yF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Q0=z0(),RF=J0();yF(Q0,"ndarray",RF);U0.exports=Q0
});var $0=c(function(oW,W0){
var kF=require('@stdlib/math/base/special/abs/dist'),_F=require('@stdlib/number/float64/base/to-float32/dist');function EF(n,e,a){var i,r;if(i=0,n<=0||a<=0)return i;for(n*=a,r=0;r<n;r+=a)i=_F(i+kF(e[r]));return i}W0.exports=EF
});var Y0=c(function(fW,h0){
var OF=require('@stdlib/math/base/special/abs/dist'),FF=require('@stdlib/number/float64/base/to-float32/dist');function MF(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;for(u=i,v=0;v<n;v++)r=FF(r+OF(e[u])),u+=a;return r}h0.exports=MF
});var x0=c(function(qW,d0){
var TF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),X0=$0(),SF=Y0();TF(X0,"ndarray",SF);d0.exports=X0
});var et=c(function(cW,rt){
var ZF=require("path").join,PF=require('@stdlib/utils/try-require/dist'),AF=require('@stdlib/assert/is-error/dist'),LF=x0(),La,N0=PF(ZF(__dirname,"./native.js"));AF(N0)?La=LF:La=N0;rt.exports=La
});var ut=c(function(mW,at){
var tr=require('@stdlib/number/float64/base/to-float32/dist'),Ba=4;function BF(n,e,a,i,r,u){var v,s,o,t;if(n<=0||e===0)return r;if(i===1&&u===1){if(o=n%Ba,o>0)for(t=0;t<o;t++)r[t]+=tr(e*a[t]);if(n<Ba)return r;for(t=o;t<n;t+=Ba)r[t]+=tr(e*a[t]),r[t+1]+=tr(e*a[t+1]),r[t+2]+=tr(e*a[t+2]),r[t+3]+=tr(e*a[t+3]);return r}for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,t=0;t<n;t++)r[s]+=tr(e*a[v]),v+=i,s+=u;return r}at.exports=BF
});var nt=c(function(lW,it){
var or=require('@stdlib/number/float64/base/to-float32/dist'),wr=4;function CF(n,e,a,i,r,u,v,s){var o,t,f,q;if(n<=0||e===0)return u;if(o=r,t=s,i===1&&v===1){if(f=n%wr,f>0)for(q=0;q<f;q++)u[t]+=or(e*a[o]),o+=i,t+=v;if(n<wr)return u;for(q=f;q<n;q+=wr)u[t]+=or(e*a[o]),u[t+1]+=or(e*a[o+1]),u[t+2]+=or(e*a[o+2]),u[t+3]+=or(e*a[o+3]),o+=wr,t+=wr;return u}for(q=0;q<n;q++)u[t]+=or(e*a[o]),o+=i,t+=v;return u}it.exports=CF
});var tt=c(function(pW,st){
var GF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),vt=ut(),IF=nt();GF(vt,"ndarray",IF);st.exports=vt
});var qt=c(function(jW,ft){
var KF=require("path").join,VF=require('@stdlib/utils/try-require/dist'),zF=require('@stdlib/assert/is-error/dist'),DF=tt(),Ca,ot=VF(KF(__dirname,"./native.js"));zF(ot)?Ca=DF:Ca=ot;ft.exports=Ca
});var mt=c(function(gW,ct){
var Ga=8;function HF(n,e,a,i,r){var u,v,s,o;if(n<=0)return i;if(a===1&&r===1){if(s=n%Ga,s>0)for(o=0;o<s;o++)i[o]=e[o];if(n<Ga)return i;for(o=s;o<n;o+=Ga)i[o]=e[o],i[o+1]=e[o+1],i[o+2]=e[o+2],i[o+3]=e[o+3],i[o+4]=e[o+4],i[o+5]=e[o+5],i[o+6]=e[o+6],i[o+7]=e[o+7];return i}for(a<0?u=(1-n)*a:u=0,r<0?v=(1-n)*r:v=0,o=0;o<n;o++)i[v]=e[u],u+=a,v+=r;return i}ct.exports=HF
});var pt=c(function(bW,lt){
var yr=8;function JF(n,e,a,i,r,u,v){var s,o,t,f;if(n<=0)return r;if(s=i,o=v,a===1&&u===1){if(t=n%yr,t>0)for(f=0;f<t;f++)r[o]=e[s],s+=a,o+=u;if(n<yr)return r;for(f=t;f<n;f+=yr)r[o]=e[s],r[o+1]=e[s+1],r[o+2]=e[s+2],r[o+3]=e[s+3],r[o+4]=e[s+4],r[o+5]=e[s+5],r[o+6]=e[s+6],r[o+7]=e[s+7],s+=yr,o+=yr;return r}for(f=0;f<n;f++)r[o]=e[s],s+=a,o+=u;return r}lt.exports=JF
});var bt=c(function(wW,gt){
var QF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jt=mt(),UF=pt();QF(jt,"ndarray",UF);gt.exports=jt
});var Rt=c(function(yW,yt){
var WF=require("path").join,$F=require('@stdlib/utils/try-require/dist'),hF=require('@stdlib/assert/is-error/dist'),YF=bt(),Ia,wt=$F(WF(__dirname,"./native.js"));hF(wt)?Ia=YF:Ia=wt;yt.exports=Ia
});var Et=c(function(RW,_t){
var kt=require('@stdlib/number/float64/base/to-float32/dist');function XF(n,e,a,i,r){var u,v,s,o;if(u=0,n<=0)return u;for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,o=0;o<n;o++)u=kt(u+kt(e[v]*i[s])),v+=a,s+=r;return u}_t.exports=XF
});var Mt=c(function(kW,Ft){
var Ot=require('@stdlib/number/float64/base/to-float32/dist');function dF(n,e,a,i,r,u,v){var s,o,t,f;if(s=0,n<=0)return s;for(o=i,t=v,f=0;f<n;f++)s=Ot(s+Ot(e[o]*r[t])),o+=a,t+=u;return s}Ft.exports=dF
});var Zt=c(function(_W,St){
var xF=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Tt=Et(),NF=Mt();xF(Tt,"ndarray",NF);St.exports=Tt
});var Pr=c(function(EW,At){
var rM=require("path").join,eM=require('@stdlib/utils/try-require/dist'),aM=require('@stdlib/assert/is-error/dist'),uM=Zt(),Ka,Pt=eM(rM(__dirname,"./native.js"));aM(Pt)?Ka=uM:Ka=Pt;At.exports=Ka
});var Bt=c(function(OW,Lt){
var Ar=require('@stdlib/number/float64/base/to-float32/dist'),Va=5;function iM(n,e,a,i,r,u){var v,s,o,t,f;if(v=e,n<=0)return Ar(v);if(i===1&&u===1){if(t=n%Va,t>0)for(f=0;f<t;f++)v+=a[f]*r[f];if(n<Va)return Ar(v);for(f=t;f<n;f+=Va)v+=a[f]*r[f]+a[f+1]*r[f+1]+a[f+2]*r[f+2]+a[f+3]*r[f+3]+a[f+4]*r[f+4];return Ar(v)}for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,f=0;f<n;f++)v+=a[s]*r[o],s+=i,o+=u;return Ar(v)}Lt.exports=iM
});var Gt=c(function(FW,Ct){
var Lr=require('@stdlib/number/float64/base/to-float32/dist'),Rr=5;function nM(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(o=e,n<=0)return Lr(o);if(t=r,f=s,i===1&&v===1){if(q=n%Rr,q>0)for(m=0;m<q;m++)o+=a[t]*u[f],t+=1,f+=1;if(n<Rr)return Lr(o);for(m=q;m<n;m+=Rr)o+=a[t]*u[f]+a[t+1]*u[f+1]+a[t+2]*u[f+2]+a[t+3]*u[f+3]+a[t+4]*u[f+4],t+=Rr,f+=Rr;return Lr(o)}for(m=0;m<n;m++)o+=a[t]*u[f],t+=i,f+=v;return Lr(o)}Ct.exports=nM
});var Vt=c(function(MW,Kt){
var vM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),It=Bt(),sM=Gt();vM(It,"ndarray",sM);Kt.exports=It
});var Ht=c(function(TW,Dt){
var tM=require("path").join,oM=require('@stdlib/utils/try-require/dist'),fM=require('@stdlib/assert/is-error/dist'),qM=Vt(),za,zt=oM(tM(__dirname,"./native.js"));fM(zt)?za=qM:za=zt;Dt.exports=za
});var Wt=c(function(SW,Ut){
var cM=require('@stdlib/math/base/special/sqrt/dist'),Jt=require('@stdlib/math/base/special/abs/dist'),Qt=require('@stdlib/math/base/special/pow/dist'),Da=require('@stdlib/number/float64/base/to-float32/dist');function mM(n,e,a){var i,r,u,v;if(n<=0||a<=0)return 0;if(n===1)return Jt(e[0]);for(i=0,r=1,n*=a,v=0;v<n;v+=a)e[v]!==0&&(u=Jt(e[v]),i<u?(r=Da(1+r*Qt(i/u,2)),i=u):r=Da(r+Qt(u/i,2)));return Da(i*cM(r))}Ut.exports=mM
});var Xt=c(function(ZW,Yt){
var lM=require('@stdlib/math/base/special/sqrt/dist'),$t=require('@stdlib/math/base/special/abs/dist'),ht=require('@stdlib/math/base/special/pow/dist'),Ha=require('@stdlib/number/float64/base/to-float32/dist');function pM(n,e,a,i){var r,u,v,s,o;if(n<=0)return 0;if(n===1)return $t(e[i]);for(s=i,r=0,u=1,o=0;o<n;o++)e[s]!==0&&(v=$t(e[s]),r<v?(u=Ha(1+u*ht(r/v,2)),r=v):u=Ha(u+ht(v/r,2))),s+=a;return Ha(r*lM(u))}Yt.exports=pM
});var Nt=c(function(PW,xt){
var jM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),dt=Wt(),gM=Xt();jM(dt,"ndarray",gM);xt.exports=dt
});var ao=c(function(AW,eo){
var bM=require("path").join,wM=require('@stdlib/utils/try-require/dist'),yM=require('@stdlib/assert/is-error/dist'),RM=Nt(),Ja,ro=wM(bM(__dirname,"./native.js"));yM(ro)?Ja=RM:Ja=ro;eo.exports=Ja
});var Qa=c(function(LW,vo){
var Y=require('@stdlib/number/float64/base/to-float32/dist'),uo=require('@stdlib/math/base/special/absf/dist'),kM=require('@stdlib/math/base/special/sqrtf/dist'),io=require('@stdlib/math/base/special/abs2f/dist'),no=require('@stdlib/math/base/special/copysignf/dist');function _M(n,e,a,i,r){var u,v,s,o,t,f,q,m;return s=uo(n),o=uo(e),s>o?v=no(1,n):v=no(1,e),u=Y(s+o),u===0?(f=1,q=0,t=0,m=0):(t=Y(u*kM(Y(io(Y(n/u))+io(Y(e/u))))),t=Y(t*v),f=Y(n/t),q=Y(e/t),m=1,s>o?m=q:f!==0&&(m=Y(1/f))),n=t,e=m,a[r]=n,a[r+i]=e,a[r+2*i]=f,a[r+3*i]=q,a}vo.exports=_M
});var to=c(function(BW,so){
var EM=require('@stdlib/array/float32/dist'),OM=Qa();function FM(n,e){var a=new EM(4);return OM(n,e,a,1,0)}so.exports=FM
});var qo=c(function(CW,fo){
var MM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),oo=to(),TM=Qa();MM(oo,"assign",TM);fo.exports=oo
});var mo=c(function(GW,co){
var Ua=5;function SM(n,e,a,i){var r,u;if(n<=0||i<=0||e===1)return a;if(i===1){if(u=n%Ua,u>0)for(r=0;r<u;r++)a[r]*=e;if(n<Ua)return a;for(r=u;r<n;r+=Ua)a[r]*=e,a[r+1]*=e,a[r+2]*=e,a[r+3]*=e,a[r+4]*=e;return a}for(n*=i,r=0;r<n;r+=i)a[r]*=e;return a}co.exports=SM
});var po=c(function(IW,lo){
var Br=5;function ZM(n,e,a,i,r){var u,v,s;if(n<=0||e===1)return a;if(u=r,i===1){if(s=n%Br,s>0)for(v=0;v<s;v++)a[u]*=e,u+=i;if(n<Br)return a;for(v=s;v<n;v+=Br)a[v]*=e,a[v+1]*=e,a[v+2]*=e,a[v+3]*=e,a[v+4]*=e,u+=Br;return a}for(v=0;v<n;v++)a[u]*=e,u+=i;return a}lo.exports=ZM
});var bo=c(function(KW,go){
var PM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jo=mo(),AM=po();PM(jo,"ndarray",AM);go.exports=jo
});var Ro=c(function(VW,yo){
var LM=require("path").join,BM=require('@stdlib/utils/try-require/dist'),CM=require('@stdlib/assert/is-error/dist'),GM=bo(),Wa,wo=BM(LM(__dirname,"./native.js"));CM(wo)?Wa=GM:Wa=wo;yo.exports=Wa
});var _o=c(function(zW,ko){
var $a=3;function IM(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return i;if(a===1&&r===1){if(o=n%$a,o>0)for(t=0;t<o;t++)u=e[t],e[t]=i[t],i[t]=u;if(n<$a)return i;for(t=o;t<n;t+=$a)u=e[t],e[t]=i[t],i[t]=u,f=t+1,u=e[f],e[f]=i[f],i[f]=u,f+=1,u=e[f],e[f]=i[f],i[f]=u;return i}for(a<0?v=(1-n)*a:v=0,r<0?s=(1-n)*r:s=0,t=0;t<n;t++)u=e[v],e[v]=i[s],i[s]=u,v+=a,s+=r;return i}ko.exports=IM
});var Oo=c(function(DW,Eo){
var kr=3;function KM(n,e,a,i,r,u,v){var s,o,t,f,q;if(n<=0)return r;if(o=i,t=v,a===1&&u===1){if(f=n%kr,f>0)for(q=0;q<f;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;if(n<kr)return r;for(q=f;q<n;q+=kr)s=e[o],e[o]=r[t],r[t]=s,s=e[o+1],e[o+1]=r[t+1],r[t+1]=s,s=e[o+2],e[o+2]=r[t+2],r[t+2]=s,o+=kr,t+=kr;return r}for(q=0;q<n;q++)s=e[o],e[o]=r[t],r[t]=s,o+=a,t+=u;return r}Eo.exports=KM
});var To=c(function(HW,Mo){
var VM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fo=_o(),zM=Oo();VM(Fo,"ndarray",zM);Mo.exports=Fo
});var Cr=c(function(JW,Zo){
var DM=require("path").join,HM=require('@stdlib/utils/try-require/dist'),JM=require('@stdlib/assert/is-error/dist'),QM=To(),ha,So=HM(DM(__dirname,"./native.js"));JM(So)?ha=QM:ha=So;Zo.exports=ha
});var Ao=c(function(QW,Po){
var F=require('@stdlib/utils/define-read-only-property/dist'),O={};F(O,"ccopy",rv());F(O,"cswap",cv());F(O,"dasum",kv());F(O,"daxpy",Av());F(O,"dcopy",Hv());F(O,"ddot",Mr());F(O,"dnrm2",qs());F(O,"dscal",Rs());F(O,"dsdot",Ps());F(O,"dswap",Sr());F(O,"gasum",$s());F(O,"gaxpy",r0());F(O,"gcopy",f0());F(O,"gdot",Ma());F(O,"gnrm2",S0());F(O,"gscal",G0());F(O,"gswap",Aa());F(O,"sasum",et());F(O,"saxpy",qt());F(O,"scopy",Rt());F(O,"sdot",Pr());F(O,"sdsdot",Ht());F(O,"snrm2",ao());F(O,"srotg",qo());F(O,"sscal",Ro());F(O,"sswap",Cr());Po.exports=O
});var Co=c(function(UW,Bo){
var Lo=require('@stdlib/assert/is-float64vector-like/dist'),Ya=require('@stdlib/string/format/dist'),UM=Mr().ndarray;function WM(n,e){if(!Lo(n))throw new TypeError(Ya('0G9D8',n));if(!Lo(e))throw new TypeError(Ya('0G9D9',e));if(n.length!==e.length)throw new RangeError(Ya('0G93S',n.length,e.length));return UM(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}Bo.exports=WM
});var Io=c(function(WW,Go){
var $M=Co();Go.exports=$M
});var zo=c(function($W,Vo){
var Ko=require('@stdlib/assert/is-float64vector-like/dist'),Xa=require('@stdlib/string/format/dist'),hM=Sr().ndarray;function YM(n,e){if(!Ko(n))throw new TypeError(Xa('0G9D8',n));if(!Ko(e))throw new TypeError(Xa('0G9D9',e));if(n.length!==e.length)throw new RangeError(Xa('0G93S',n.length,e.length));return hM(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}Vo.exports=YM
});var Ho=c(function(hW,Do){
var XM=zo();Do.exports=XM
});var Qo=c(function(YW,Jo){
var da=5;function dM(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%da,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<da)return a;for(u=v;u<n;u+=da)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}Jo.exports=dM
});var Wo=c(function(XW,Uo){
var Gr=5;function xM(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Gr,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Gr)return a;for(s=v;s<n;s+=Gr)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Gr;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}Uo.exports=xM
});var Yo=c(function(dW,ho){
var NM=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$o=Qo(),r7=Wo();NM($o,"ndarray",r7);ho.exports=$o
});var No=c(function(xW,xo){
var e7=require("path").join,a7=require('@stdlib/utils/try-require/dist'),u7=require('@stdlib/assert/is-error/dist'),i7=Yo(),xa,Xo=a7(e7(__dirname,"./native.js"));u7(Xo)?xa=i7:xa=Xo;xo.exports=xa
});var af=c(function(NW,ef){
var rf=require('@stdlib/math/base/special/abs/dist');function n7(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,rf(r)>=rf(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}ef.exports=n7
});var vf=c(function(r9,nf){
var uf=require('@stdlib/math/base/special/abs/dist');function v7(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,uf(u)>=uf(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}nf.exports=v7
});var of=c(function(e9,tf){
var s7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sf=af(),t7=vf();s7(sf,"ndarray",t7);tf.exports=sf
});var Ir=c(function(a9,qf){
var o7=require("path").join,f7=require('@stdlib/utils/try-require/dist'),q7=require('@stdlib/assert/is-error/dist'),c7=of(),Na,ff=f7(o7(__dirname,"./native.js"));q7(ff)?Na=c7:Na=ff;qf.exports=Na
});var mf=c(function(u9,cf){
var m7=Ir();function l7(n,e,a,i){return m7(n,e,a,i)}cf.exports=l7
});var pf=c(function(i9,lf){
var p7=Ir().ndarray;function j7(n,e,a,i,r){return p7(n,e,a,i,r)}lf.exports=j7
});var bf=c(function(n9,gf){
var g7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),jf=mf(),b7=pf();g7(jf,"ndarray",b7);gf.exports=jf
});var Rf=c(function(v9,yf){
var w7=require("path").join,y7=require('@stdlib/utils/try-require/dist'),R7=require('@stdlib/assert/is-error/dist'),k7=bf(),ru,wf=y7(w7(__dirname,"./native.js"));R7(wf)?ru=k7:ru=wf;yf.exports=ru
});var _f=c(function(s9,kf){
var Kr=require('@stdlib/math/base/special/abs/dist');function _7(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,Kr(r)>=Kr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Kr(s)>=Kr(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}kf.exports=_7
});var Of=c(function(t9,Ef){
var Vr=require('@stdlib/math/base/special/abs/dist');function E7(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,Vr(u)>=Vr(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,Vr(o)>=Vr(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}Ef.exports=E7
});var Tf=c(function(o9,Mf){
var O7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ff=_f(),F7=Of();O7(Ff,"ndarray",F7);Mf.exports=Ff
});var Pf=c(function(f9,Zf){
var M7=require("path").join,T7=require('@stdlib/utils/try-require/dist'),S7=require('@stdlib/assert/is-error/dist'),Z7=Tf(),eu,Sf=T7(M7(__dirname,"./native.js"));S7(Sf)?eu=Z7:eu=Sf;Zf.exports=eu
});var Lf=c(function(q9,Af){
function P7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Af.exports=P7
});var Cf=c(function(c9,Bf){
function A7(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Bf.exports=A7
});var Kf=c(function(m9,If){
var L7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gf=Lf(),B7=Cf();L7(Gf,"ndarray",B7);If.exports=Gf
});var Df=c(function(l9,zf){
var C7=require("path").join,G7=require('@stdlib/utils/try-require/dist'),I7=require('@stdlib/assert/is-error/dist'),K7=Kf(),au,Vf=G7(C7(__dirname,"./native.js"));I7(Vf)?au=K7:au=Vf;zf.exports=au
});var iu=c(function(p9,Hf){
var V7=require('@stdlib/math/base/special/floor/dist'),z7=128;function uu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=z7){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=V7(n/2),g-=g%8,uu(g,e,a,i,u)+uu(n-g,e,a,i,u+g*i)}Hf.exports=uu
});var Qf=c(function(j9,Jf){
var D7=iu();function H7(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return D7(n,e,a,i,r)}Jf.exports=H7
});var $f=c(function(g9,Wf){
var J7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Uf=Qf(),Q7=iu();J7(Uf,"ndarray",Q7);Wf.exports=Uf
});var Xf=c(function(b9,Yf){
var U7=require("path").join,W7=require('@stdlib/utils/try-require/dist'),$7=require('@stdlib/assert/is-error/dist'),h7=$f(),nu,hf=W7(U7(__dirname,"./native.js"));$7(hf)?nu=h7:nu=hf;Yf.exports=nu
});var su=c(function(w9,df){
var Y7=require('@stdlib/math/base/special/floor/dist'),M=require('@stdlib/math/base/special/abs/dist'),X7=128;function vu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return M(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=M(e[r]),r+=a;return l}if(n<=X7){for(u=M(e[r]),v=M(e[r+a]),s=M(e[r+2*a]),o=M(e[r+3*a]),t=M(e[r+4*a]),f=M(e[r+5*a]),q=M(e[r+6*a]),m=M(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=M(e[r]),v+=M(e[r+a]),s+=M(e[r+2*a]),o+=M(e[r+3*a]),t+=M(e[r+4*a]),f+=M(e[r+5*a]),q+=M(e[r+6*a]),m+=M(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=M(e[r]),r+=a;return l}return j=Y7(n/2),j-=j%8,vu(j,e,a,r)+vu(n-j,e,a,r+j*a)}df.exports=vu
});var rq=c(function(y9,Nf){
var xf=require('@stdlib/math/base/special/abs/dist'),d7=su();function x7(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return xf(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=xf(e[i]),i+=a;return r}return d7(n,e,a,i)}Nf.exports=x7
});var uq=c(function(R9,aq){
var N7=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),eq=rq(),rT=su();N7(eq,"ndarray",rT);aq.exports=eq
});var vq=c(function(k9,nq){
var eT=require("path").join,aT=require('@stdlib/utils/try-require/dist'),uT=require('@stdlib/assert/is-error/dist'),iT=uq(),tu,iq=aT(eT(__dirname,"./native.js"));uT(iq)?tu=iT:tu=iq;nq.exports=tu
});var oq=c(function(_9,tq){
var sq=require('@stdlib/math/base/special/abs/dist');function nT(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,sq(o)>=sq(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}tq.exports=nT
});var cq=c(function(E9,qq){
var fq=require('@stdlib/math/base/special/abs/dist');function vT(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,fq(f)>=fq(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}qq.exports=vT
});var pq=c(function(O9,lq){
var sT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mq=oq(),tT=cq();sT(mq,"ndarray",tT);lq.exports=mq
});var zr=c(function(F9,gq){
var oT=require("path").join,fT=require('@stdlib/utils/try-require/dist'),qT=require('@stdlib/assert/is-error/dist'),cT=pq(),ou,jq=fT(oT(__dirname,"./native.js"));qT(jq)?ou=cT:ou=jq;gq.exports=ou
});var wq=c(function(M9,bq){
var mT=zr();function lT(n,e,a,i,r,u){return mT(n,e,a,i,r,u)}bq.exports=lT
});var Rq=c(function(T9,yq){
var pT=zr().ndarray;function jT(n,e,a,i,r,u,v,s){return pT(n,e,a,i,r,u,v,s)}yq.exports=jT
});var Eq=c(function(S9,_q){
var gT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),kq=wq(),bT=Rq();gT(kq,"ndarray",bT);_q.exports=kq
});var Mq=c(function(Z9,Fq){
var wT=require("path").join,yT=require('@stdlib/utils/try-require/dist'),RT=require('@stdlib/assert/is-error/dist'),kT=Eq(),fu,Oq=yT(wT(__dirname,"./native.js"));RT(Oq)?fu=kT:fu=Oq;Fq.exports=fu
});var Sq=c(function(P9,Tq){
var Dr=require('@stdlib/math/base/special/abs/dist');function _T(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,Dr(e)>=Dr(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,Dr(t)>=Dr(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}Tq.exports=_T
});var Pq=c(function(A9,Zq){
var Hr=require('@stdlib/math/base/special/abs/dist');function ET(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=e+p,Hr(e)>=Hr(p)?j=e-l+p:j=p-l+e,e=l,l=q+j,Hr(q)>=Hr(j)?m=q-l+j:m=j-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}Zq.exports=ET
});var Bq=c(function(L9,Lq){
var OT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Aq=Sq(),FT=Pq();OT(Aq,"ndarray",FT);Lq.exports=Aq
});var Iq=c(function(B9,Gq){
var MT=require("path").join,TT=require('@stdlib/utils/try-require/dist'),ST=require('@stdlib/assert/is-error/dist'),ZT=Bq(),qu,Cq=TT(MT(__dirname,"./native.js"));ST(Cq)?qu=ZT:qu=Cq;Gq.exports=qu
});var Vq=c(function(C9,Kq){
function PT(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}Kq.exports=PT
});var Dq=c(function(G9,zq){
function AT(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}zq.exports=AT
});var Qq=c(function(I9,Jq){
var LT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hq=Vq(),BT=Dq();LT(Hq,"ndarray",BT);Jq.exports=Hq
});var $q=c(function(K9,Wq){
var CT=require("path").join,GT=require('@stdlib/utils/try-require/dist'),IT=require('@stdlib/assert/is-error/dist'),KT=Qq(),cu,Uq=GT(CT(__dirname,"./native.js"));IT(Uq)?cu=KT:cu=Uq;Wq.exports=cu
});var lu=c(function(V9,hq){
var VT=require('@stdlib/math/base/special/floor/dist'),zT=128;function mu(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=zT){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=VT(n/2),mu(q,e,a,i,o,u,v,t),t+=(q-1)*v,mu(n-q,u[t],a,i,o+q*i,u,v,t+v),u}hq.exports=mu
});var Xq=c(function(z9,Yq){
var DT=lu();function HT(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,DT(n,e,a,i,v,r,u,s))}Yq.exports=HT
});var Nq=c(function(D9,xq){
var JT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),dq=Xq(),QT=lu();JT(dq,"ndarray",QT);xq.exports=dq
});var ac=c(function(H9,ec){
var UT=require("path").join,WT=require('@stdlib/utils/try-require/dist'),$T=require('@stdlib/assert/is-error/dist'),hT=Nq(),pu,rc=WT(UT(__dirname,"./native.js"));$T(rc)?pu=hT:pu=rc;ec.exports=pu
});var ic=c(function(J9,uc){
var ju=8;function YT(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ju,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ju)return a;for(u=v;u<n;u+=ju)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}uc.exports=YT
});var vc=c(function(Q9,nc){
var Jr=8;function XT(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%Jr,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<Jr)return a;for(s=v;s<n;s+=Jr)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=Jr;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}nc.exports=XT
});var oc=c(function(U9,tc){
var dT=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sc=ic(),xT=vc();dT(sc,"ndarray",xT);tc.exports=sc
});var cc=c(function(W9,qc){
var NT=require("path").join,rS=require('@stdlib/utils/try-require/dist'),eS=require('@stdlib/assert/is-error/dist'),aS=oc(),gu,fc=rS(NT(__dirname,"./native.js"));eS(fc)?gu=aS:gu=fc;qc.exports=gu
});var jc=c(function($9,pc){
var mc=require('@stdlib/math/base/assert/is-nan/dist'),lc=require('@stdlib/math/base/special/abs/dist');function uS(n,e,a){var i,r,u,v;if(n<=0)return 0;if(n===1||a===0)return mc(e[0])?0:lc(e[0]);for(a<0?r=(1-n)*a:r=0,i=0,v=0;v<n;v++)u=e[r],mc(u)===!1&&(i+=lc(u)),r+=a;return i}pc.exports=uS
});var yc=c(function(h9,wc){
var gc=require('@stdlib/math/base/assert/is-nan/dist'),bc=require('@stdlib/math/base/special/abs/dist');function iS(n,e,a,i){var r,u,v,s;if(n<=0)return 0;if(n===1||a===0)return gc(e[i])?0:bc(e[i]);for(u=i,r=0,s=0;s<n;s++)v=e[u],gc(v)===!1&&(r+=bc(v)),u+=a;return r}wc.exports=iS
});var _c=c(function(Y9,kc){
var nS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Rc=jc(),vS=yc();nS(Rc,"ndarray",vS);kc.exports=Rc
});var Qr=c(function(X9,Oc){
var sS=require("path").join,tS=require('@stdlib/utils/try-require/dist'),oS=require('@stdlib/assert/is-error/dist'),fS=_c(),bu,Ec=tS(sS(__dirname,"./native.js"));oS(Ec)?bu=fS:bu=Ec;Oc.exports=bu
});var Mc=c(function(d9,Fc){
var qS=Qr();function cS(n,e,a){return qS(n,e,a)}Fc.exports=cS
});var Sc=c(function(x9,Tc){
var mS=Qr().ndarray;function lS(n,e,a,i){return mS(n,e,a,i)}Tc.exports=lS
});var Ac=c(function(N9,Pc){
var pS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Zc=Mc(),jS=Sc();pS(Zc,"ndarray",jS);Pc.exports=Zc
});var Cc=c(function(r$,Bc){
var gS=require("path").join,bS=require('@stdlib/utils/try-require/dist'),wS=require('@stdlib/assert/is-error/dist'),yS=Ac(),wu,Lc=bS(gS(__dirname,"./native.js"));wS(Lc)?wu=yS:wu=Lc;Bc.exports=wu
});var Vc=c(function(e$,Kc){
var Gc=require('@stdlib/math/base/assert/is-nan/dist'),Ic=require('@stdlib/math/base/special/abs/dist');function RS(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Gc(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Gc(o)===!1&&(t=u+o,Ic(u)>=Ic(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Kc.exports=RS
});var Jc=c(function(a$,Hc){
var zc=require('@stdlib/math/base/assert/is-nan/dist'),Dc=require('@stdlib/math/base/special/abs/dist');function kS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return zc(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],zc(f)===!1&&(q=s+f,Dc(s)>=Dc(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}Hc.exports=kS
});var Wc=c(function(u$,Uc){
var _S=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qc=Vc(),ES=Jc();_S(Qc,"ndarray",ES);Uc.exports=Qc
});var Ur=c(function(i$,hc){
var OS=require("path").join,FS=require('@stdlib/utils/try-require/dist'),MS=require('@stdlib/assert/is-error/dist'),TS=Wc(),yu,$c=FS(OS(__dirname,"./native.js"));MS($c)?yu=TS:yu=$c;hc.exports=yu
});var Xc=c(function(n$,Yc){
var SS=Ur();function ZS(n,e,a,i,r){return SS(n,e,a,i,r)}Yc.exports=ZS
});var xc=c(function(v$,dc){
var PS=Ur().ndarray;function AS(n,e,a,i,r,u,v){return PS(n,e,a,i,r,u,v)}dc.exports=AS
});var em=c(function(s$,rm){
var LS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Nc=Xc(),BS=xc();LS(Nc,"ndarray",BS);rm.exports=Nc
});var im=c(function(t$,um){
var CS=require("path").join,GS=require('@stdlib/utils/try-require/dist'),IS=require('@stdlib/assert/is-error/dist'),KS=em(),Ru,am=GS(CS(__dirname,"./native.js"));IS(am)?Ru=KS:Ru=am;um.exports=Ru
});var sm=c(function(o$,vm){
var nm=require('@stdlib/math/base/assert/is-nan/dist'),Wr=require('@stdlib/math/base/special/abs/dist');function VS(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j;if(a<0?t=(1-n)*a:t=0,r<0?f=-r:f=0,u=0,n<=0)return i[f]=u,i[f+r]=0,i;if(n===1||a===0)return nm(e[t])?(i[f]=u,i[f+r]=0,i):(i[f]=e[t],i[f+r]=1,i);for(v=0,s=0,l=0,j=0;j<n;j++)q=e[t],nm(q)===!1&&(m=u+q,Wr(u)>=Wr(q)?p=u-m+q:p=q-m+u,u=m,m=s+p,Wr(s)>=Wr(p)?o=s-m+p:o=p-m+s,s=m,v+=o,l+=1),t+=a;return i[f]=u+s+v,i[f+r]=l,i}vm.exports=VS
});var fm=c(function(f$,om){
var tm=require('@stdlib/math/base/assert/is-nan/dist'),$r=require('@stdlib/math/base/special/abs/dist');function zS(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,j,g,b;if(q=i,m=v,s=0,n<=0)return r[m]=s,r[m+u]=0,r;if(n===1||a===0)return tm(e[q])?(r[m]=s,r[m+u]=0,r):(r[m]=e[q],r[m+u]=1,r);for(o=0,t=0,g=0,b=0;b<n;b++)p=e[q],tm(p)===!1&&(l=s+p,$r(s)>=$r(p)?j=s-l+p:j=p-l+s,s=l,l=t+j,$r(t)>=$r(j)?f=t-l+j:f=j-l+t,t=l,o+=f,g+=1),q+=a;return r[m]=s+t+o,r[m+u]=g,r}om.exports=zS
});var mm=c(function(q$,cm){
var DS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qm=sm(),HS=fm();DS(qm,"ndarray",HS);cm.exports=qm
});var jm=c(function(c$,pm){
var JS=require("path").join,QS=require('@stdlib/utils/try-require/dist'),US=require('@stdlib/assert/is-error/dist'),WS=mm(),ku,lm=QS(JS(__dirname,"./native.js"));US(lm)?ku=WS:ku=lm;pm.exports=ku
});var wm=c(function(m$,bm){
var gm=require('@stdlib/math/base/assert/is-nan/dist');function $S(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return gm(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)gm(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}bm.exports=$S
});var km=c(function(l$,Rm){
var ym=require('@stdlib/math/base/assert/is-nan/dist');function hS(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return ym(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)ym(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}Rm.exports=hS
});var Om=c(function(p$,Em){
var YS=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_m=wm(),XS=km();YS(_m,"ndarray",XS);Em.exports=_m
});var Tm=c(function(j$,Mm){
var dS=require("path").join,xS=require('@stdlib/utils/try-require/dist'),NS=require('@stdlib/assert/is-error/dist'),rZ=Om(),_u,Fm=xS(dS(__dirname,"./native.js"));NS(Fm)?_u=rZ:_u=Fm;Mm.exports=_u
});var Ou=c(function(g$,Sm){
var eZ=require('@stdlib/math/base/assert/is-nan/dist'),aZ=require('@stdlib/math/base/special/floor/dist'),uZ=128;function Eu(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l,j,g,b,R,_,k,h;if(n<=0)return r;if(s=i,o=v,n===1||a===0)return eZ(e[s])||(r[o]+=e[s],r[o+u]+=1),r;if(n<8){for(R=0,_=0,h=0;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}if(n<=uZ){for(t=0,f=0,q=0,m=0,p=0,l=0,j=0,g=0,_=0,b=n%8,h=0;h<n-b;h+=8)k=e[s],k===k&&(t+=k,_+=1),s+=a,k=e[s],k===k&&(f+=k,_+=1),s+=a,k=e[s],k===k&&(q+=k,_+=1),s+=a,k=e[s],k===k&&(m+=k,_+=1),s+=a,k=e[s],k===k&&(p+=k,_+=1),s+=a,k=e[s],k===k&&(l+=k,_+=1),s+=a,k=e[s],k===k&&(j+=k,_+=1),s+=a,k=e[s],k===k&&(g+=k,_+=1),s+=a;for(R=t+f+(q+m)+(p+l+(j+g)),h;h<n;h++)k=e[s],k===k&&(R+=k,_+=1),s+=a;return r[o]+=R,r[o+u]+=_,r}return _=aZ(n/2),_-=_%8,Eu(_,e,a,s,r,u,v),Eu(n-_,e,a,s+_*a,r,u,v),r}Sm.exports=Eu
});var Pm=c(function(b$,Zm){
var iZ=Ou();function nZ(n,e,a,i,r){var u,v;return a<0?u=(1-n)*a:u=0,r<0?v=-r:v=0,i[v]=0,i[v+r]=0,iZ(n,e,a,u,i,r,v),i}Zm.exports=nZ
});var Lm=c(function(w$,Am){
var vZ=Ou();function sZ(n,e,a,i,r,u,v){return r[v]=0,r[v+u]=0,vZ(n,e,a,i,r,u,v),r}Am.exports=sZ
});var Gm=c(function(y$,Cm){
var tZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Bm=Pm(),oZ=Lm();tZ(Bm,"ndarray",oZ);Cm.exports=Bm
});var Vm=c(function(R$,Km){
var fZ=require("path").join,qZ=require('@stdlib/utils/try-require/dist'),cZ=require('@stdlib/assert/is-error/dist'),mZ=Gm(),Fu,Im=qZ(fZ(__dirname,"./native.js"));cZ(Im)?Fu=mZ:Fu=Im;Km.exports=Fu
});var Jm=c(function(k$,Hm){
var zm=require('@stdlib/math/base/assert/is-nan/dist'),Dm=require('@stdlib/math/base/special/abs/dist');function lZ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return zm(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],zm(u)===!1&&(v=i+u,Dm(i)>=Dm(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}Hm.exports=lZ
});var $m=c(function(_$,Wm){
var Qm=require('@stdlib/math/base/assert/is-nan/dist'),Um=require('@stdlib/math/base/special/abs/dist');function pZ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return Qm(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],Qm(v)===!1&&(s=r+v,Um(r)>=Um(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}Wm.exports=pZ
});var Xm=c(function(E$,Ym){
var jZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hm=Jm(),gZ=$m();jZ(hm,"ndarray",gZ);Ym.exports=hm
});var hr=c(function(O$,xm){
var bZ=require("path").join,wZ=require('@stdlib/utils/try-require/dist'),yZ=require('@stdlib/assert/is-error/dist'),RZ=Xm(),Mu,dm=wZ(bZ(__dirname,"./native.js"));yZ(dm)?Mu=RZ:Mu=dm;xm.exports=Mu
});var r1=c(function(F$,Nm){
var kZ=hr();function _Z(n,e,a){return kZ(n,e,a)}Nm.exports=_Z
});var a1=c(function(M$,e1){
var EZ=hr().ndarray;function OZ(n,e,a,i){return EZ(n,e,a,i)}e1.exports=OZ
});var n1=c(function(T$,i1){
var FZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),u1=r1(),MZ=a1();FZ(u1,"ndarray",MZ);i1.exports=u1
});var t1=c(function(S$,s1){
var TZ=require("path").join,SZ=require('@stdlib/utils/try-require/dist'),ZZ=require('@stdlib/assert/is-error/dist'),PZ=n1(),Tu,v1=SZ(TZ(__dirname,"./native.js"));ZZ(v1)?Tu=PZ:Tu=v1;s1.exports=Tu
});var q1=c(function(Z$,f1){
var o1=require('@stdlib/math/base/assert/is-nan/dist'),Yr=require('@stdlib/math/base/special/abs/dist');function AZ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return o1(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],o1(o)===!1&&(t=i+o,Yr(i)>=Yr(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Yr(v)>=Yr(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}f1.exports=AZ
});var l1=c(function(P$,m1){
var c1=require('@stdlib/math/base/assert/is-nan/dist'),Xr=require('@stdlib/math/base/special/abs/dist');function LZ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return c1(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],c1(t)===!1&&(f=r+t,Xr(r)>=Xr(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Xr(s)>=Xr(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}m1.exports=LZ
});var g1=c(function(A$,j1){
var BZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),p1=q1(),CZ=l1();BZ(p1,"ndarray",CZ);j1.exports=p1
});var y1=c(function(L$,w1){
var GZ=require("path").join,IZ=require('@stdlib/utils/try-require/dist'),KZ=require('@stdlib/assert/is-error/dist'),VZ=g1(),Su,b1=IZ(GZ(__dirname,"./native.js"));KZ(b1)?Su=VZ:Su=b1;w1.exports=Su
});var _1=c(function(B$,k1){
var R1=require('@stdlib/math/base/assert/is-nan/dist');function zZ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return R1(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)R1(e[r])===!1&&(i+=e[r]),r+=a;return i}k1.exports=zZ
});var F1=c(function(C$,O1){
var E1=require('@stdlib/math/base/assert/is-nan/dist');function DZ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return E1(e[i])?r:e[i];for(u=i,v=0;v<n;v++)E1(e[u])===!1&&(r+=e[u]),u+=a;return r}O1.exports=DZ
});var S1=c(function(G$,T1){
var HZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),M1=_1(),JZ=F1();HZ(M1,"ndarray",JZ);T1.exports=M1
});var A1=c(function(I$,P1){
var QZ=require("path").join,UZ=require('@stdlib/utils/try-require/dist'),WZ=require('@stdlib/assert/is-error/dist'),$Z=S1(),Zu,Z1=UZ(QZ(__dirname,"./native.js"));WZ(Z1)?Zu=$Z:Zu=Z1;P1.exports=Zu
});var Au=c(function(K$,L1){
var T=require('@stdlib/math/base/assert/is-nan/dist'),hZ=require('@stdlib/math/base/special/floor/dist'),YZ=128;function Pu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return T(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=YZ){for(u=T(e[r])?0:e[r],r+=a,v=T(e[r])?0:e[r],r+=a,s=T(e[r])?0:e[r],r+=a,o=T(e[r])?0:e[r],r+=a,t=T(e[r])?0:e[r],r+=a,f=T(e[r])?0:e[r],r+=a,q=T(e[r])?0:e[r],r+=a,m=T(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=T(e[r])?0:e[r],r+=a,v+=T(e[r])?0:e[r],r+=a,s+=T(e[r])?0:e[r],r+=a,o+=T(e[r])?0:e[r],r+=a,t+=T(e[r])?0:e[r],r+=a,f+=T(e[r])?0:e[r],r+=a,q+=T(e[r])?0:e[r],r+=a,m+=T(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)T(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=hZ(n/2),j-=j%8,Pu(j,e,a,r)+Pu(n-j,e,a,r+j*a)}L1.exports=Pu
});var G1=c(function(V$,C1){
var B1=require('@stdlib/math/base/assert/is-nan/dist'),XZ=Au();function dZ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return B1(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)B1(e[i])===!1&&(r+=e[i]),i+=a;return r}return XZ(n,e,a,i)}C1.exports=dZ
});var V1=c(function(z$,K1){
var xZ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),I1=G1(),NZ=Au();xZ(I1,"ndarray",NZ);K1.exports=I1
});var H1=c(function(D$,D1){
var rP=require("path").join,eP=require('@stdlib/utils/try-require/dist'),aP=require('@stdlib/assert/is-error/dist'),uP=V1(),Lu,z1=eP(rP(__dirname,"./native.js"));aP(z1)?Lu=uP:Lu=z1;D1.exports=Lu
});var Q1=c(function(H$,J1){
var iP=require('@stdlib/math/base/special/floor/dist'),dr=3;function nP(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=iP(n/2),a===1){if(v=s%dr,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<dr)return e;for(r=v;r<s;r+=dr)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=dr;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}J1.exports=nP
});var W1=c(function(J$,U1){
var vP=require('@stdlib/math/base/special/floor/dist'),_r=3;function sP(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=vP(n/2),u=i,a===1){if(s=o%_r,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<_r)return e;for(t=s;t<o;t+=_r)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=_r,v-=_r;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}U1.exports=sP
});var Y1=c(function(Q$,h1){
var tP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),$1=Q1(),oP=W1();tP($1,"ndarray",oP);h1.exports=$1
});var x1=c(function(U$,d1){
var fP=require("path").join,qP=require('@stdlib/utils/try-require/dist'),cP=require('@stdlib/assert/is-error/dist'),mP=Y1(),Bu,X1=qP(fP(__dirname,"./native.js"));cP(X1)?Bu=mP:Bu=X1;d1.exports=Bu
});var Gu=c(function(W$,N1){
var lP=require('@stdlib/math/base/special/floor/dist'),pP=128;function Cu(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=pP){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=lP(n/2),g-=g%8,Cu(g,e,a,i,u)+Cu(n-g,e,a,i,u+g*i)}N1.exports=Cu
});var el=c(function($$,rl){
var jP=Gu();function gP(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return jP(n,e,a,i,r)}rl.exports=gP
});var il=c(function(h$,ul){
var bP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),al=el(),wP=Gu();bP(al,"ndarray",wP);ul.exports=al
});var xr=c(function(Y$,vl){
var yP=require("path").join,RP=require('@stdlib/utils/try-require/dist'),kP=require('@stdlib/assert/is-error/dist'),_P=il(),Iu,nl=RP(yP(__dirname,"./native.js"));kP(nl)?Iu=_P:Iu=nl;vl.exports=Iu
});var tl=c(function(X$,sl){
var EP=xr();function OP(n,e,a,i){return EP(n,e,a,i)}sl.exports=OP
});var fl=c(function(d$,ol){
var FP=xr().ndarray;function MP(n,e,a,i,r){return FP(n,e,a,i,r)}ol.exports=MP
});var ml=c(function(x$,cl){
var TP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ql=tl(),SP=fl();TP(ql,"ndarray",SP);cl.exports=ql
});var jl=c(function(N$,pl){
var ZP=require("path").join,PP=require('@stdlib/utils/try-require/dist'),AP=require('@stdlib/assert/is-error/dist'),LP=ml(),Ku,ll=PP(ZP(__dirname,"./native.js"));AP(ll)?Ku=LP:Ku=ll;pl.exports=Ku
});var wl=c(function(rh,bl){
var gl=require('@stdlib/math/base/assert/is-nan/dist');function BP(n,e,a,i,r){var u,v,s,o,t;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return gl(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(o=0,t=0;t<n;t++)gl(e[v])===!1&&(u+=e[v],o+=1),v+=a;return i[s]=u,i[s+r]=o,i}bl.exports=BP
});var kl=c(function(eh,Rl){
var yl=require('@stdlib/math/base/assert/is-nan/dist');function CP(n,e,a,i,r,u,v){var s,o,t,f,q;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return yl(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(f=0,q=0;q<n;q++)yl(e[o])===!1&&(s+=e[o],f+=1),o+=a;return r[t]=s,r[t+u]=f,r}Rl.exports=CP
});var Ol=c(function(ah,El){
var GP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_l=wl(),IP=kl();GP(_l,"ndarray",IP);El.exports=_l
});var Tl=c(function(uh,Ml){
var KP=require("path").join,VP=require('@stdlib/utils/try-require/dist'),zP=require('@stdlib/assert/is-error/dist'),DP=Ol(),Vu,Fl=VP(KP(__dirname,"./native.js"));zP(Fl)?Vu=DP:Vu=Fl;Ml.exports=Vu
});var Du=c(function(ih,Sl){
var S=require('@stdlib/math/base/assert/is-nanf/dist'),HP=require('@stdlib/math/base/special/floor/dist'),JP=128;function zu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return S(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=JP){for(u=S(e[r])?0:e[r],r+=a,v=S(e[r])?0:e[r],r+=a,s=S(e[r])?0:e[r],r+=a,o=S(e[r])?0:e[r],r+=a,t=S(e[r])?0:e[r],r+=a,f=S(e[r])?0:e[r],r+=a,q=S(e[r])?0:e[r],r+=a,m=S(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=S(e[r])?0:e[r],r+=a,v+=S(e[r])?0:e[r],r+=a,s+=S(e[r])?0:e[r],r+=a,o+=S(e[r])?0:e[r],r+=a,t+=S(e[r])?0:e[r],r+=a,f+=S(e[r])?0:e[r],r+=a,q+=S(e[r])?0:e[r],r+=a,m+=S(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)S(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=HP(n/2),j-=j%8,zu(j,e,a,r)+zu(n-j,e,a,r+j*a)}Sl.exports=zu
});var Al=c(function(nh,Pl){
var Zl=require('@stdlib/math/base/assert/is-nanf/dist'),QP=Du();function UP(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Zl(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Zl(e[i])===!1&&(r+=e[i]),i+=a;return r}return QP(n,e,a,i)}Pl.exports=UP
});var Cl=c(function(vh,Bl){
var WP=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ll=Al(),$P=Du();WP(Ll,"ndarray",$P);Bl.exports=Ll
});var Nr=c(function(sh,Il){
var hP=require("path").join,YP=require('@stdlib/utils/try-require/dist'),XP=require('@stdlib/assert/is-error/dist'),dP=Cl(),Hu,Gl=YP(hP(__dirname,"./native.js"));XP(Gl)?Hu=dP:Hu=Gl;Il.exports=Hu
});var Vl=c(function(th,Kl){
var xP=Nr();function NP(n,e,a){return xP(n,e,a)}Kl.exports=NP
});var Dl=c(function(oh,zl){
var rA=Nr().ndarray;function eA(n,e,a,i){return rA(n,e,a,i)}zl.exports=eA
});var Ql=c(function(fh,Jl){
var aA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Hl=Vl(),uA=Dl();aA(Hl,"ndarray",uA);Jl.exports=Hl
});var $l=c(function(qh,Wl){
var iA=require("path").join,nA=require('@stdlib/utils/try-require/dist'),vA=require('@stdlib/assert/is-error/dist'),sA=Ql(),Ju,Ul=nA(iA(__dirname,"./native.js"));vA(Ul)?Ju=sA:Ju=Ul;Wl.exports=Ju
});var Xl=c(function(ch,Yl){
var hl=require('@stdlib/math/base/assert/is-nan/dist');function tA(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return hl(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)hl(e[r])===!1&&(i+=e[r]),r+=a;return i}Yl.exports=tA
});var Nl=c(function(mh,xl){
var dl=require('@stdlib/math/base/assert/is-nan/dist');function oA(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return dl(e[i])?r:e[i];for(u=i,v=0;v<n;v++)dl(e[u])===!1&&(r+=e[u]),u+=a;return r}xl.exports=oA
});var ap=c(function(lh,ep){
var fA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),rp=Xl(),qA=Nl();fA(rp,"ndarray",qA);ep.exports=rp
});var np=c(function(ph,ip){
var cA=require("path").join,mA=require('@stdlib/utils/try-require/dist'),lA=require('@stdlib/assert/is-error/dist'),pA=ap(),Qu,up=mA(cA(__dirname,"./native.js"));lA(up)?Qu=pA:Qu=up;ip.exports=Qu
});var op=c(function(jh,tp){
var vp=require('@stdlib/math/base/assert/is-positive-zero/dist'),sp=require('@stdlib/math/base/assert/is-nan/dist'),jA=require('@stdlib/math/base/special/floor/dist');function gA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=jA(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||sp(f)||f===q&&vp(f))&&(t+=1)),f=a[v+t*i],f>m||sp(f)||f===m&&vp(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}tp.exports=gA
});var mp=c(function(gh,cp){
var fp=require('@stdlib/math/base/assert/is-positive-zero/dist'),qp=require('@stdlib/math/base/assert/is-nan/dist'),bA=require('@stdlib/math/base/special/floor/dist');function wA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=bA(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||qp(f)||f===q&&fp(f))&&(t+=1)),f=a[r+t*i],f>m||qp(f)||f===m&&fp(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}cp.exports=wA
});var jp=c(function(bh,pp){
var yA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),lp=op(),RA=mp();yA(lp,"ndarray",RA);pp.exports=lp
});var wp=c(function(wh,bp){
var kA=require("path").join,_A=require('@stdlib/utils/try-require/dist'),EA=require('@stdlib/assert/is-error/dist'),OA=jp(),Uu,gp=_A(kA(__dirname,"./native.js"));EA(gp)?Uu=OA:Uu=gp;bp.exports=Uu
});var kp=c(function(yh,Rp){
var re=require('@stdlib/math/base/assert/is-negative-zero/dist'),yp=require('@stdlib/math/base/assert/is-nan/dist');function FA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],yp(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=re(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&re(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],yp(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=re(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&re(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}Rp.exports=FA
});var Op=c(function(Rh,Ep){
var ee=require('@stdlib/math/base/assert/is-negative-zero/dist'),_p=require('@stdlib/math/base/assert/is-nan/dist');function MA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],_p(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=ee(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ee(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],_p(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=ee(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&ee(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}Ep.exports=MA
});var Tp=c(function(kh,Mp){
var TA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Fp=kp(),SA=Op();TA(Fp,"ndarray",SA);Mp.exports=Fp
});var Pp=c(function(_h,Zp){
var ZA=require("path").join,PA=require('@stdlib/utils/try-require/dist'),AA=require('@stdlib/assert/is-error/dist'),LA=Tp(),Wu,Sp=PA(ZA(__dirname,"./native.js"));AA(Sp)?Wu=LA:Wu=Sp;Zp.exports=Wu
});var $u=c(function(Eh,BA){BA.exports=[701,301,132,57,23,10,4,1]});var Bp=c(function(Oh,Lp){
var CA=require('@stdlib/math/base/assert/is-negative-zero/dist'),GA=require('@stdlib/math/base/assert/is-nan/dist'),Ap=$u(),IA=Ap.length;function KA(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<IA;p++)for(t=Ap[p],l=t;l<n;l++)if(f=a[v+l*i],!GA(f)){for(q=r[s+l*u],o=CA(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}Lp.exports=KA
});var Ip=c(function(Fh,Gp){
var VA=require('@stdlib/math/base/assert/is-negative-zero/dist'),zA=require('@stdlib/math/base/assert/is-nan/dist'),Cp=$u(),DA=Cp.length;function HA(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<DA;p++)for(t=Cp[p],l=t;l<n;l++)if(f=a[r+l*i],!zA(f)){for(q=u[s+l*v],o=VA(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}Gp.exports=HA
});var zp=c(function(Mh,Vp){
var JA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Kp=Bp(),QA=Ip();JA(Kp,"ndarray",QA);Vp.exports=Kp
});var Jp=c(function(Th,Hp){
var UA=require("path").join,WA=require('@stdlib/utils/try-require/dist'),$A=require('@stdlib/assert/is-error/dist'),hA=zp(),hu,Dp=WA(UA(__dirname,"./native.js"));$A(Dp)?hu=hA:hu=Dp;Hp.exports=hu
});var $p=c(function(Sh,Wp){
var Qp=require('@stdlib/math/base/assert/is-positive-zero/dist'),Up=require('@stdlib/math/base/assert/is-nan/dist'),YA=require('@stdlib/math/base/special/floor/dist');function XA(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=YA(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Up(s)||s===o&&Qp(s))&&(v+=1)),s=a[r+v*i],s>f||Up(s)||s===f&&Qp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Wp.exports=XA
});var dp=c(function(Zh,Xp){
var hp=require('@stdlib/math/base/assert/is-positive-zero/dist'),Yp=require('@stdlib/math/base/assert/is-nan/dist'),dA=require('@stdlib/math/base/special/floor/dist');function xA(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=dA(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Yp(s)||s===o&&hp(s))&&(v+=1)),s=a[r+v*i],s>f||Yp(s)||s===f&&hp(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Xp.exports=xA
});var r2=c(function(Ph,Np){
var NA=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xp=$p(),rL=dp();NA(xp,"ndarray",rL);Np.exports=xp
});var u2=c(function(Ah,a2){
var eL=require("path").join,aL=require('@stdlib/utils/try-require/dist'),uL=require('@stdlib/assert/is-error/dist'),iL=r2(),Yu,e2=aL(eL(__dirname,"./native.js"));uL(e2)?Yu=iL:Yu=e2;a2.exports=Yu
});var v2=c(function(Lh,n2){
var ae=require('@stdlib/math/base/assert/is-negative-zero/dist'),i2=require('@stdlib/math/base/assert/is-nan/dist');function nL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],i2(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ae(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ae(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],i2(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=ae(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&ae(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}n2.exports=nL
});var o2=c(function(Bh,t2){
var ue=require('@stdlib/math/base/assert/is-negative-zero/dist'),s2=require('@stdlib/math/base/assert/is-nan/dist');function vL(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],s2(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ue(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ue(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],s2(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=ue(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&ue(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}t2.exports=vL
});var c2=c(function(Ch,q2){
var sL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),f2=v2(),tL=o2();sL(f2,"ndarray",tL);q2.exports=f2
});var p2=c(function(Gh,l2){
var oL=require("path").join,fL=require('@stdlib/utils/try-require/dist'),qL=require('@stdlib/assert/is-error/dist'),cL=c2(),Xu,m2=fL(oL(__dirname,"./native.js"));qL(m2)?Xu=cL:Xu=m2;l2.exports=Xu
});var du=c(function(Ih,mL){mL.exports=[701,301,132,57,23,10,4,1]});var b2=c(function(Kh,g2){
var lL=require('@stdlib/math/base/assert/is-negative-zero/dist'),pL=require('@stdlib/math/base/assert/is-nan/dist'),j2=du(),jL=j2.length;function gL(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<jL;t++)for(v=j2[t],f=v;f<n;f++)if(s=a[r+f*i],!pL(s)){for(u=lL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}g2.exports=gL
});var R2=c(function(Vh,y2){
var bL=require('@stdlib/math/base/assert/is-negative-zero/dist'),wL=require('@stdlib/math/base/assert/is-nan/dist'),w2=du(),yL=w2.length;function RL(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<yL;t++)for(v=w2[t],f=v;f<n;f++)if(s=a[r+f*i],!wL(s)){for(u=bL(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}y2.exports=RL
});var E2=c(function(zh,_2){
var kL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),k2=b2(),_L=R2();kL(k2,"ndarray",_L);_2.exports=k2
});var M2=c(function(Dh,F2){
var EL=require("path").join,OL=require('@stdlib/utils/try-require/dist'),FL=require('@stdlib/assert/is-error/dist'),ML=E2(),xu,O2=OL(EL(__dirname,"./native.js"));FL(O2)?xu=ML:xu=O2;F2.exports=xu
});var ri=c(function(Hh,T2){
var TL=require('@stdlib/math/base/special/floor/dist'),SL=128;function Nu(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=SL){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=TL(n/2),j-=j%8,Nu(j,e,a,r)+Nu(n-j,e,a,r+j*a)}T2.exports=Nu
});var Z2=c(function(Jh,S2){
var ZL=ri();function PL(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return ZL(n,e,a,i)}S2.exports=PL
});var L2=c(function(Qh,A2){
var AL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),P2=Z2(),LL=ri();AL(P2,"ndarray",LL);A2.exports=P2
});var ie=c(function(Uh,C2){
var BL=require("path").join,CL=require('@stdlib/utils/try-require/dist'),GL=require('@stdlib/assert/is-error/dist'),IL=L2(),ei,B2=CL(BL(__dirname,"./native.js"));GL(B2)?ei=IL:ei=B2;C2.exports=ei
});var I2=c(function(Wh,G2){
var KL=ie();function VL(n,e,a){return KL(n,e,a)}G2.exports=VL
});var V2=c(function($h,K2){
var zL=ie().ndarray;function DL(n,e,a,i){return zL(n,e,a,i)}K2.exports=DL
});var H2=c(function(hh,D2){
var HL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),z2=I2(),JL=V2();HL(z2,"ndarray",JL);D2.exports=z2
});var U2=c(function(Yh,Q2){
var QL=require("path").join,UL=require('@stdlib/utils/try-require/dist'),WL=require('@stdlib/assert/is-error/dist'),$L=H2(),ai,J2=UL(QL(__dirname,"./native.js"));WL(J2)?ai=$L:ai=J2;Q2.exports=ai
});var $2=c(function(Xh,W2){
var ui=6;function hL(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ui,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ui)return i;for(v=u;v<n;v+=ui)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}W2.exports=hL
});var Y2=c(function(dh,h2){
var ne=6;function YL(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%ne,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<ne)return r;for(s=v;s<n;s+=ne)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=ne;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}h2.exports=YL
});var x2=c(function(xh,d2){
var XL=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),X2=$2(),dL=Y2();XL(X2,"ndarray",dL);d2.exports=X2
});var ej=c(function(Nh,rj){
var xL=require("path").join,NL=require('@stdlib/utils/try-require/dist'),rB=require('@stdlib/assert/is-error/dist'),eB=x2(),ii,N2=NL(xL(__dirname,"./native.js"));rB(N2)?ii=eB:ii=N2;rj.exports=ii
});var ij=c(function(rY,uj){
var aj=require('@stdlib/math/base/special/abs/dist');function aB(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,aj(i)>=aj(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}uj.exports=aB
});var sj=c(function(eY,vj){
var nj=require('@stdlib/math/base/special/abs/dist');function uB(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,nj(r)>=nj(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}vj.exports=uB
});var fj=c(function(aY,oj){
var iB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),tj=ij(),nB=sj();iB(tj,"ndarray",nB);oj.exports=tj
});var ve=c(function(uY,cj){
var vB=require("path").join,sB=require('@stdlib/utils/try-require/dist'),tB=require('@stdlib/assert/is-error/dist'),oB=fj(),ni,qj=sB(vB(__dirname,"./native.js"));tB(qj)?ni=oB:ni=qj;cj.exports=ni
});var lj=c(function(iY,mj){
var fB=ve();function qB(n,e,a){return fB(n,e,a)}mj.exports=qB
});var jj=c(function(nY,pj){
var cB=ve().ndarray;function mB(n,e,a,i){return cB(n,e,a,i)}pj.exports=mB
});var wj=c(function(vY,bj){
var lB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gj=lj(),pB=jj();lB(gj,"ndarray",pB);bj.exports=gj
});var kj=c(function(sY,Rj){
var jB=require("path").join,gB=require('@stdlib/utils/try-require/dist'),bB=require('@stdlib/assert/is-error/dist'),wB=wj(),vi,yj=gB(jB(__dirname,"./native.js"));bB(yj)?vi=wB:vi=yj;Rj.exports=vi
});var Ej=c(function(tY,_j){
var se=require('@stdlib/math/base/special/abs/dist');function yB(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,se(i)>=se(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,se(v)>=se(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}_j.exports=yB
});var Fj=c(function(oY,Oj){
var te=require('@stdlib/math/base/special/abs/dist');function RB(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,te(r)>=te(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,te(s)>=te(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}Oj.exports=RB
});var Sj=c(function(fY,Tj){
var kB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mj=Ej(),_B=Fj();kB(Mj,"ndarray",_B);Tj.exports=Mj
});var Aj=c(function(qY,Pj){
var EB=require("path").join,OB=require('@stdlib/utils/try-require/dist'),FB=require('@stdlib/assert/is-error/dist'),MB=Sj(),si,Zj=OB(EB(__dirname,"./native.js"));FB(Zj)?si=MB:si=Zj;Pj.exports=si
});var Bj=c(function(cY,Lj){
var ti=6;function TB(n,e,a){var i,r,u,v;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];if(a===1){if(u=n%ti,u>0)for(v=0;v<u;v++)i+=e[v];if(n<ti)return i;for(v=u;v<n;v+=ti)i+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return i}for(a<0?r=(1-n)*a:r=0,v=0;v<n;v++)i+=e[r],r+=a;return i}Lj.exports=TB
});var Gj=c(function(mY,Cj){
var oe=6;function SB(n,e,a,i){var r,u,v,s;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];if(u=i,a===1){if(v=n%oe,v>0)for(s=0;s<v;s++)r+=e[u],u+=a;if(n<oe)return r;for(s=v;s<n;s+=oe)r+=e[u]+e[u+1]+e[u+2]+e[u+3]+e[u+4]+e[u+5],u+=oe;return r}for(s=0;s<n;s++)r+=e[u],u+=a;return r}Cj.exports=SB
});var Vj=c(function(lY,Kj){
var ZB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ij=Bj(),PB=Gj();ZB(Ij,"ndarray",PB);Kj.exports=Ij
});var Hj=c(function(pY,Dj){
var AB=require("path").join,LB=require('@stdlib/utils/try-require/dist'),BB=require('@stdlib/assert/is-error/dist'),CB=Vj(),oi,zj=LB(AB(__dirname,"./native.js"));BB(zj)?oi=CB:oi=zj;Dj.exports=oi
});var qi=c(function(jY,Jj){
var GB=require('@stdlib/math/base/special/floor/dist'),IB=128;function fi(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=IB){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=GB(n/2),j-=j%8,fi(j,e,a,r)+fi(n-j,e,a,r+j*a)}Jj.exports=fi
});var Uj=c(function(gY,Qj){
var KB=qi();function VB(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return KB(n,e,a,i)}Qj.exports=VB
});var hj=c(function(bY,$j){
var zB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Wj=Uj(),DB=qi();zB(Wj,"ndarray",DB);$j.exports=Wj
});var dj=c(function(wY,Xj){
var HB=require("path").join,JB=require('@stdlib/utils/try-require/dist'),QB=require('@stdlib/assert/is-error/dist'),UB=hj(),ci,Yj=JB(HB(__dirname,"./native.js"));QB(Yj)?ci=UB:ci=Yj;Xj.exports=ci
});var Nj=c(function(yY,xj){
var mi=5;function WB(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%mi,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<mi)return a;for(u=v;u<n;u+=mi)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}xj.exports=WB
});var eg=c(function(RY,rg){
var fe=5;function $B(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%fe,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<fe)return a;for(s=v;s<n;s+=fe)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=fe;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}rg.exports=$B
});var ig=c(function(kY,ug){
var hB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ag=Nj(),YB=eg();hB(ag,"ndarray",YB);ug.exports=ag
});var sg=c(function(_Y,vg){
var ng=require('@stdlib/math/base/special/abs/dist');function XB(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=e+a[u],s=r+v,ng(r)>=ng(v)?o+=r-s+v:o+=v-s+r,r=s,u+=i;return r+o}vg.exports=XB
});var fg=c(function(EY,og){
var tg=require('@stdlib/math/base/special/abs/dist');function dB(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,t=0,f=0;f<n;f++)s=e+a[v],o=u+s,tg(u)>=tg(s)?t+=u-o+s:t+=s-o+u,u=o,v+=i;return u+t}og.exports=dB
});var qe=c(function(OY,cg){
var xB=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),qg=sg(),NB=fg();xB(qg,"ndarray",NB);cg.exports=qg
});var lg=c(function(FY,mg){
var rC=qe();function eC(n,e,a,i){return rC(n,e,a,i)}mg.exports=eC
});var jg=c(function(MY,pg){
var aC=qe().ndarray;function uC(n,e,a,i,r){return aC(n,e,a,i,r)}pg.exports=uC
});var wg=c(function(TY,bg){
var iC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gg=lg(),nC=jg();iC(gg,"ndarray",nC);bg.exports=gg
});var Rg=c(function(SY,yg){
var ce=require('@stdlib/math/base/special/abs/dist');function vC(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=e+a[v],f=r+t,ce(r)>=ce(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,ce(s)>=ce(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=i;return r+s+u}yg.exports=vC
});var _g=c(function(ZY,kg){
var me=require('@stdlib/math/base/special/abs/dist');function sC(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=e+a[s],q=u+f,me(u)>=me(f)?m=u-q+f:m=f-q+u,u=q,q=o+m,me(o)>=me(m)?t=o-q+m:t=m-q+o,o=q,v+=t,s+=i;return u+o+v}kg.exports=sC
});var Fg=c(function(PY,Og){
var tC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Eg=Rg(),oC=_g();tC(Eg,"ndarray",oC);Og.exports=Eg
});var Tg=c(function(AY,Mg){
function fC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r+=e+a[u],u+=i;return r}Mg.exports=fC
});var Zg=c(function(LY,Sg){
function qC(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return e+a[r];for(v=r,u=0,s=0;s<n;s++)u+=e+a[v],v+=i;return u}Sg.exports=qC
});var Lg=c(function(BY,Ag){
var cC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Pg=Tg(),mC=Zg();cC(Pg,"ndarray",mC);Ag.exports=Pg
});var pi=c(function(CY,Bg){
var lC=require('@stdlib/math/base/special/floor/dist'),pC=128;function li(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return e+a[r];if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return j}if(n<=pC){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return j}return g=lC(n/2),g-=g%8,li(g,e,a,i,u)+li(n-g,e,a,i,u+g*i)}Bg.exports=li
});var Gg=c(function(GY,Cg){
var jC=pi();function gC(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return e+a[0];if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return u}return jC(n,e,a,i,r)}Cg.exports=gC
});var Vg=c(function(IY,Kg){
var bC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ig=Gg(),wC=pi();bC(Ig,"ndarray",wC);Kg.exports=Ig
});var gi=c(function(KY,zg){
var yC=require('@stdlib/math/base/special/floor/dist'),Z=require('@stdlib/math/base/special/abs/dist'),RC=128;function ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return Z(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=Z(e[r]),r+=a;return l}if(n<=RC){for(u=Z(e[r]),v=Z(e[r+a]),s=Z(e[r+2*a]),o=Z(e[r+3*a]),t=Z(e[r+4*a]),f=Z(e[r+5*a]),q=Z(e[r+6*a]),m=Z(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=Z(e[r]),v+=Z(e[r+a]),s+=Z(e[r+2*a]),o+=Z(e[r+3*a]),t+=Z(e[r+4*a]),f+=Z(e[r+5*a]),q+=Z(e[r+6*a]),m+=Z(e[r+7*a]),r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=Z(e[r]),r+=a;return l}return j=yC(n/2),j-=j%8,ji(j,e,a,r)+ji(n-j,e,a,r+j*a)}zg.exports=ji
});var Jg=c(function(VY,Hg){
var Dg=require('@stdlib/math/base/special/abs/dist'),kC=gi();function _C(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Dg(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=Dg(e[i]),i+=a;return r}return kC(n,e,a,i)}Hg.exports=_C
});var Wg=c(function(zY,Ug){
var EC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Qg=Jg(),OC=gi();EC(Qg,"ndarray",OC);Ug.exports=Qg
});var Yg=c(function(DY,hg){
var $g=require('@stdlib/math/base/special/abs/dist');function FC(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=o+t,$g(o)>=$g(t)?q+=o-f+t:q+=t-f+o,o=f,r[s]=o+q,v+=i,s+=u;return r}hg.exports=FC
});var xg=c(function(HY,dg){
var Xg=require('@stdlib/math/base/special/abs/dist');function MC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=f+q,Xg(f)>=Xg(q)?p+=f-m+q:p+=q-m+f,f=m,u[t]=f+p,o+=i,t+=v;return u}dg.exports=MC
});var le=c(function(JY,rb){
var TC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ng=Yg(),SC=xg();TC(Ng,"ndarray",SC);rb.exports=Ng
});var ab=c(function(QY,eb){
var ZC=le();function PC(n,e,a,i,r,u){return ZC(n,e,a,i,r,u)}eb.exports=PC
});var ib=c(function(UY,ub){
var AC=le().ndarray;function LC(n,e,a,i,r,u,v,s){return AC(n,e,a,i,r,u,v,s)}ub.exports=LC
});var sb=c(function(WY,vb){
var BC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),nb=ab(),CC=ib();BC(nb,"ndarray",CC);vb.exports=nb
});var ob=c(function($Y,tb){
var pe=require('@stdlib/math/base/special/abs/dist');function GC(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=e+q,pe(e)>=pe(q)?p=e-m+q:p=q-m+e,e=m,m=t+p,pe(t)>=pe(p)?f=t-m+p:f=p-m+t,t=m,v+=f,r[o]=e+t+v,s+=i,o+=u;return r}tb.exports=GC
});var qb=c(function(hY,fb){
var je=require('@stdlib/math/base/special/abs/dist');function IC(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=e+p,je(e)>=je(p)?j=e-l+p:j=p-l+e,e=l,l=q+j,je(q)>=je(j)?m=q-l+j:m=j-l+q,q=l,o+=m,u[f]=e+q+o,t+=i,f+=v;return u}fb.exports=IC
});var lb=c(function(YY,mb){
var KC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),cb=ob(),VC=qb();KC(cb,"ndarray",VC);mb.exports=cb
});var jb=c(function(XY,pb){
function zC(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e+=a[v],r[s]=e,v+=i,s+=u;return r}pb.exports=zC
});var bb=c(function(dY,gb){
function DC(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e+=a[o],u[t]=e,o+=i,t+=v;return u}gb.exports=DC
});var Rb=c(function(xY,yb){
var HC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),wb=jb(),JC=bb();HC(wb,"ndarray",JC);yb.exports=wb
});var wi=c(function(NY,kb){
var QC=require('@stdlib/math/base/special/floor/dist'),UC=128;function bi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=UC){for(f=0,m=0;m<n;m++)f+=a[o],u[t]=e+f,o+=i,t+=v;return u}return q=QC(n/2),bi(q,e,a,i,o,u,v,t),t+=(q-1)*v,bi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}kb.exports=bi
});var Eb=c(function(rX,_b){
var WC=wi();function $C(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,WC(n,e,a,i,v,r,u,s))}_b.exports=$C
});var Mb=c(function(eX,Fb){
var hC=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ob=Eb(),YC=wi();hC(Ob,"ndarray",YC);Fb.exports=Ob
});var yi=c(function(aX,Tb){
function XC(n,e,a,i,r){var u,v,s,o;for(u=a.data,v=a.accessors[1],s=r,o=0;o<n;o++)v(u,s,e),s+=i;return a}Tb.exports=XC
});var Zb=c(function(uX,Sb){
var dC=require('@stdlib/array/base/arraylike2object/dist'),xC=yi(),Ri=8;function NC(n,e,a,i){var r,u,v,s;if(n<=0)return a;if(s=dC(a),s.accessorProtocol)return i<0?r=(1-n)*i:r=0,xC(n,e,s,i,r),s.data;if(i===1){if(v=n%Ri,v>0)for(u=0;u<v;u++)a[u]=e;if(n<Ri)return a;for(u=v;u<n;u+=Ri)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}Sb.exports=NC
});var Ab=c(function(iX,Pb){
var rG=require('@stdlib/array/base/arraylike2object/dist'),eG=yi(),ge=8;function aG(n,e,a,i,r){var u,v,s,o;if(n<=0)return a;if(s=rG(a),s.accessorProtocol)return eG(n,e,s,i,r),s.data;if(u=r,i===1){if(v=n%ge,v>0)for(o=0;o<v;o++)a[u]=e,u+=i;if(n<ge)return a;for(o=v;o<n;o+=ge)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=ge;return a}for(o=0;o<n;o++)a[u]=e,u+=i;return a}Pb.exports=aG
});var Cb=c(function(nX,Bb){
var uG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lb=Zb(),iG=Ab();uG(Lb,"ndarray",iG);Bb.exports=Lb
});var ki=c(function(vX,Gb){
function nG(n,e,a,i,r,u){var v,s,o,t,f;for(v=e.data,o=e.accessors[0],s=e.accessors[1],t=i,f=0;f<n;f++)s(v,t,r.call(u,o(v,t),f,t,e)),t+=a;return e}Gb.exports=nG
});var Kb=c(function(sX,Ib){
var vG=require('@stdlib/array/base/arraylike2object/dist'),sG=ki();function tG(n,e,a,i,r){var u,v,s;if(n<=0)return e;if(a<0?u=(1-n)*a:u=0,v=vG(e),v.accessorProtocol)return sG(n,v,a,u,i,r),v.data;for(s=0;s<n;s++)e[u]=i.call(r,e[u],s,u,e),u+=a;return e}Ib.exports=tG
});var zb=c(function(tX,Vb){
var oG=require('@stdlib/array/base/arraylike2object/dist'),fG=ki();function qG(n,e,a,i,r,u){var v,s,o;if(n<=0)return e;if(s=oG(e),s.accessorProtocol)return fG(n,s,a,i,r,u),s.data;for(v=i,o=0;o<n;o++)e[v]=r.call(u,e[v],o,v,e),v+=a;return e}Vb.exports=qG
});var Jb=c(function(oX,Hb){
var cG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Db=Kb(),mG=zb();cG(Db,"ndarray",mG);Hb.exports=Db
});var $b=c(function(fX,Wb){
var Qb=require('@stdlib/math/base/assert/is-nan/dist'),Ub=require('@stdlib/math/base/special/abs/dist');function lG(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(a<0?v=(1-n)*a:v=0,r<0?s=-r:s=0,u=0,n<=0)return i[s]=u,i[s+r]=0,i;if(n===1||a===0)return Qb(e[v])?(i[s]=u,i[s+r]=0,i):(i[s]=e[v],i[s+r]=1,i);for(f=0,q=0,m=0;m<n;m++)o=e[v],Qb(o)===!1&&(t=u+o,Ub(u)>=Ub(o)?f+=u-t+o:f+=o-t+u,u=t,q+=1),v+=a;return i[s]=u+f,i[s+r]=q,i}Wb.exports=lG
});var db=c(function(qX,Xb){
var hb=require('@stdlib/math/base/assert/is-nan/dist'),Yb=require('@stdlib/math/base/special/abs/dist');function pG(n,e,a,i,r,u,v){var s,o,t,f,q,m,p,l;if(o=i,t=v,s=0,n<=0)return r[t]=s,r[t+u]=0,r;if(n===1||a===0)return hb(e[o])?(r[t]=s,r[t+u]=0,r):(r[t]=e[o],r[t+u]=1,r);for(m=0,p=0,l=0;l<n;l++)f=e[o],hb(f)===!1&&(q=s+f,Yb(s)>=Yb(f)?m+=s-q+f:m+=f-q+s,s=q,p+=1),o+=a;return r[t]=s+m,r[t+u]=p,r}Xb.exports=pG
});var rw=c(function(cX,Nb){
var jG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xb=$b(),gG=db();jG(xb,"ndarray",gG);Nb.exports=xb
});var iw=c(function(mX,uw){
var ew=require('@stdlib/math/base/assert/is-nan/dist'),aw=require('@stdlib/math/base/special/abs/dist');function bG(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return ew(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],ew(u)===!1&&(v=i+u,aw(i)>=aw(u)?s+=i-v+u:s+=u-v+i,i=v),r+=a;return i+s}uw.exports=bG
});var tw=c(function(lX,sw){
var nw=require('@stdlib/math/base/assert/is-nan/dist'),vw=require('@stdlib/math/base/special/abs/dist');function wG(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return nw(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],nw(v)===!1&&(s=r+v,vw(r)>=vw(v)?o+=r-s+v:o+=v-s+r,r=s),u+=a;return r+o}sw.exports=wG
});var be=c(function(pX,fw){
var yG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ow=iw(),RG=tw();yG(ow,"ndarray",RG);fw.exports=ow
});var cw=c(function(jX,qw){
var kG=be();function _G(n,e,a){return kG(n,e,a)}qw.exports=_G
});var lw=c(function(gX,mw){
var EG=be().ndarray;function OG(n,e,a,i){return EG(n,e,a,i)}mw.exports=OG
});var gw=c(function(bX,jw){
var FG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),pw=cw(),MG=lw();FG(pw,"ndarray",MG);jw.exports=pw
});var yw=c(function(wX,ww){
var bw=require('@stdlib/math/base/assert/is-nan/dist'),we=require('@stdlib/math/base/special/abs/dist');function TG(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return bw(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],bw(o)===!1&&(t=i+o,we(i)>=we(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,we(v)>=we(f)?s=v-t+f:s=f-t+v,v=t,r+=s),u+=a;return i+v+r}ww.exports=TG
});var _w=c(function(yX,kw){
var Rw=require('@stdlib/math/base/assert/is-nan/dist'),ye=require('@stdlib/math/base/special/abs/dist');function SG(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return Rw(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],Rw(t)===!1&&(f=r+t,ye(r)>=ye(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,ye(s)>=ye(q)?o=s-f+q:o=q-f+s,s=f,u+=o),v+=a;return r+s+u}kw.exports=SG
});var Fw=c(function(RX,Ow){
var ZG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Ew=yw(),PG=_w();ZG(Ew,"ndarray",PG);Ow.exports=Ew
});var Sw=c(function(kX,Tw){
var Mw=require('@stdlib/math/base/assert/is-nan/dist');function AG(n,e,a){var i,r,u;if(r=0,n<=0)return r;if(n===1||a===0)return Mw(e[0])?r:e[0];for(a<0?i=(1-n)*a:i=0,u=0;u<n;u++)Mw(e[i])===!1&&(r+=e[i]),i+=a;return r}Tw.exports=AG
});var Aw=c(function(_X,Pw){
var Zw=require('@stdlib/math/base/assert/is-nan/dist');function LG(n,e,a,i){var r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return Zw(e[i])?u:e[i];for(r=i,v=0;v<n;v++)Zw(e[r])===!1&&(u+=e[r]),r+=a;return u}Pw.exports=LG
});var Cw=c(function(EX,Bw){
var BG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Lw=Sw(),CG=Aw();BG(Lw,"ndarray",CG);Bw.exports=Lw
});var Ei=c(function(OX,Gw){
var P=require('@stdlib/math/base/assert/is-nan/dist'),GG=require('@stdlib/math/base/special/floor/dist'),IG=128;function _i(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return P(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}if(n<=IG){for(u=P(e[r])?0:e[r],r+=a,v=P(e[r])?0:e[r],r+=a,s=P(e[r])?0:e[r],r+=a,o=P(e[r])?0:e[r],r+=a,t=P(e[r])?0:e[r],r+=a,f=P(e[r])?0:e[r],r+=a,q=P(e[r])?0:e[r],r+=a,m=P(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=P(e[r])?0:e[r],r+=a,v+=P(e[r])?0:e[r],r+=a,s+=P(e[r])?0:e[r],r+=a,o+=P(e[r])?0:e[r],r+=a,t+=P(e[r])?0:e[r],r+=a,f+=P(e[r])?0:e[r],r+=a,q+=P(e[r])?0:e[r],r+=a,m+=P(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)P(e[r])===!1&&(l+=e[r]),r+=a;return l}return j=GG(n/2),j-=j%8,_i(j,e,a,r)+_i(n-j,e,a,r+j*a)}Gw.exports=_i
});var Vw=c(function(FX,Kw){
var Iw=require('@stdlib/math/base/assert/is-nan/dist'),KG=Ei();function VG(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Iw(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)Iw(e[i])===!1&&(r+=e[i]),i+=a;return r}return KG(n,e,a,i)}Kw.exports=VG
});var Hw=c(function(MX,Dw){
var zG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zw=Vw(),DG=Ei();zG(zw,"ndarray",DG);Dw.exports=zw
});var Oi=c(function(TX,Jw){
var HG=require('@stdlib/math/base/special/floor/dist');function JG(n,e,a,i){var r,u,v,s,o,t,f,q;for(r=e.data,v=e.accessors[0],u=e.accessors[1],f=HG(n/2),o=i,t=o+(n-1)*a,q=0;q<f;q++)s=v(r,o),u(r,o,v(r,t)),u(r,t,s),o+=a,t-=a;return e}Jw.exports=JG
});var Uw=c(function(SX,Qw){
var QG=require('@stdlib/math/base/special/floor/dist'),UG=require('@stdlib/array/base/arraylike2object/dist'),WG=Oi(),Re=3;function $G(n,e,a){var i,r,u,v,s,o,t;if(n<=0)return e;if(v=UG(e),v.accessorProtocol)return a<0?r=(1-n)*a:r=0,WG(n,v,a,r),v.data;if(o=QG(n/2),a===1){if(s=o%Re,u=n-1,s>0)for(r=0;r<s;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(o<Re)return e;for(r=s;r<o;r+=Re)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=Re;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,t=0;t<o;t++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}Qw.exports=$G
});var $w=c(function(ZX,Ww){
var hG=require('@stdlib/math/base/special/floor/dist'),YG=require('@stdlib/array/base/arraylike2object/dist'),XG=Oi(),Er=3;function dG(n,e,a,i){var r,u,v,s,o,t,f;if(n<=0)return e;if(s=YG(e),s.accessorProtocol)return XG(n,s,a,i),s.data;if(t=hG(n/2),u=i,a===1){if(o=t%Er,v=u+n-1,o>0)for(f=0;f<o;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(t<Er)return e;for(f=o;f<t;f+=Er)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Er,v-=Er;return e}for(v=u+(n-1)*a,f=0;f<t;f++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}Ww.exports=dG
});var Xw=c(function(PX,Yw){
var xG=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hw=Uw(),NG=$w();xG(hw,"ndarray",NG);Yw.exports=hw
});var ry=c(function(AX,Nw){
var dw=require('@stdlib/math/base/assert/is-positive-zero/dist'),xw=require('@stdlib/math/base/assert/is-nan/dist'),rI=require('@stdlib/math/base/special/floor/dist');function eI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=rI(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||xw(f)||f===q&&dw(f))&&(t+=1)),f=a[v+t*i],f>m||xw(f)||f===m&&dw(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}Nw.exports=eI
});var iy=c(function(LX,uy){
var ey=require('@stdlib/math/base/assert/is-positive-zero/dist'),ay=require('@stdlib/math/base/assert/is-nan/dist'),aI=require('@stdlib/math/base/special/floor/dist');function uI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=aI(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||ay(f)||f===q&&ey(f))&&(t+=1)),f=a[r+t*i],f>m||ay(f)||f===m&&ey(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}uy.exports=uI
});var sy=c(function(BX,vy){
var iI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ny=ry(),nI=iy();iI(ny,"ndarray",nI);vy.exports=ny
});var fy=c(function(CX,oy){
var ke=require('@stdlib/math/base/assert/is-negative-zero/dist'),ty=require('@stdlib/math/base/assert/is-nan/dist');function vI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],ty(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=ke(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&ke(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],ty(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=ke(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&ke(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}oy.exports=vI
});var my=c(function(GX,cy){
var _e=require('@stdlib/math/base/assert/is-negative-zero/dist'),qy=require('@stdlib/math/base/assert/is-nan/dist');function sI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],qy(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=_e(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&_e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],qy(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=_e(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&_e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}cy.exports=sI
});var jy=c(function(IX,py){
var tI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),ly=fy(),oI=my();tI(ly,"ndarray",oI);py.exports=ly
});var Fi=c(function(KX,fI){fI.exports=[701,301,132,57,23,10,4,1]});var wy=c(function(VX,by){
var qI=require('@stdlib/math/base/assert/is-negative-zero/dist'),cI=require('@stdlib/math/base/assert/is-nan/dist'),gy=Fi(),mI=gy.length;function lI(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<mI;p++)for(t=gy[p],l=t;l<n;l++)if(f=a[v+l*i],!cI(f)){for(q=r[s+l*u],o=qI(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}by.exports=lI
});var ky=c(function(zX,Ry){
var pI=require('@stdlib/math/base/assert/is-negative-zero/dist'),jI=require('@stdlib/math/base/assert/is-nan/dist'),yy=Fi(),gI=yy.length;function bI(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<gI;p++)for(t=yy[p],l=t;l<n;l++)if(f=a[r+l*i],!jI(f)){for(q=u[s+l*v],o=pI(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}Ry.exports=bI
});var Oy=c(function(DX,Ey){
var wI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_y=wy(),yI=ky();wI(_y,"ndarray",yI);Ey.exports=_y
});var Sy=c(function(HX,Ty){
var Fy=require('@stdlib/math/base/assert/is-positive-zero/dist'),My=require('@stdlib/math/base/assert/is-nan/dist'),RI=require('@stdlib/math/base/special/floor/dist');function kI(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=RI(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||My(s)||s===o&&Fy(s))&&(v+=1)),s=a[r+v*i],s>f||My(s)||s===f&&Fy(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Ty.exports=kI
});var Ly=c(function(JX,Ay){
var Zy=require('@stdlib/math/base/assert/is-positive-zero/dist'),Py=require('@stdlib/math/base/assert/is-nan/dist'),_I=require('@stdlib/math/base/special/floor/dist');function EI(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=_I(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||Py(s)||s===o&&Zy(s))&&(v+=1)),s=a[r+v*i],s>f||Py(s)||s===f&&Zy(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}Ay.exports=EI
});var Gy=c(function(QX,Cy){
var OI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),By=Sy(),FI=Ly();OI(By,"ndarray",FI);Cy.exports=By
});var Vy=c(function(UX,Ky){
var Ee=require('@stdlib/math/base/assert/is-negative-zero/dist'),Iy=require('@stdlib/math/base/assert/is-nan/dist');function MI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],Iy(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Ee(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Ee(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],Iy(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=Ee(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&Ee(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}Ky.exports=MI
});var Hy=c(function(WX,Dy){
var Oe=require('@stdlib/math/base/assert/is-negative-zero/dist'),zy=require('@stdlib/math/base/assert/is-nan/dist');function TI(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],zy(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Oe(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Oe(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],zy(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Oe(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Oe(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}Dy.exports=TI
});var Uy=c(function($X,Qy){
var SI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Jy=Vy(),ZI=Hy();SI(Jy,"ndarray",ZI);Qy.exports=Jy
});var Mi=c(function(hX,PI){PI.exports=[701,301,132,57,23,10,4,1]});var hy=c(function(YX,$y){
var AI=require('@stdlib/math/base/assert/is-negative-zero/dist'),LI=require('@stdlib/math/base/assert/is-nan/dist'),Wy=Mi(),BI=Wy.length;function CI(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<BI;t++)for(v=Wy[t],f=v;f<n;f++)if(s=a[r+f*i],!LI(s)){for(u=AI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}$y.exports=CI
});var dy=c(function(XX,Xy){
var GI=require('@stdlib/math/base/assert/is-negative-zero/dist'),II=require('@stdlib/math/base/assert/is-nan/dist'),Yy=Mi(),KI=Yy.length;function VI(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<KI;t++)for(v=Yy[t],f=v;f<n;f++)if(s=a[r+f*i],!II(s)){for(u=GI(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}Xy.exports=VI
});var rR=c(function(dX,Ny){
var zI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xy=hy(),DI=dy();zI(xy,"ndarray",DI);Ny.exports=xy
});var uR=c(function(xX,aR){
var eR=require('@stdlib/math/base/special/abs/dist');function HI(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=i+u,eR(i)>=eR(u)?s+=i-v+u:s+=u-v+i,i=v,r+=a;return i+s}aR.exports=HI
});var vR=c(function(NX,nR){
var iR=require('@stdlib/math/base/special/abs/dist');function JI(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=r+v,iR(r)>=iR(v)?o+=r-s+v:o+=v-s+r,r=s,u+=a;return r+o}nR.exports=JI
});var Fe=c(function(rd,tR){
var QI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sR=uR(),UI=vR();QI(sR,"ndarray",UI);tR.exports=sR
});var fR=c(function(ed,oR){
var WI=Fe();function $I(n,e,a){return WI(n,e,a)}oR.exports=$I
});var cR=c(function(ad,qR){
var hI=Fe().ndarray;function YI(n,e,a,i){return hI(n,e,a,i)}qR.exports=YI
});var pR=c(function(ud,lR){
var XI=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),mR=fR(),dI=cR();XI(mR,"ndarray",dI);lR.exports=mR
});var gR=c(function(id,jR){
var Me=require('@stdlib/math/base/special/abs/dist');function xI(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=i+o,Me(i)>=Me(o)?f=i-t+o:f=o-t+i,i=t,t=v+f,Me(v)>=Me(f)?s=v-t+f:s=f-t+v,v=t,r+=s,u+=a;return i+v+r}jR.exports=xI
});var wR=c(function(nd,bR){
var Te=require('@stdlib/math/base/special/abs/dist');function NI(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=r+t,Te(r)>=Te(t)?q=r-f+t:q=t-f+r,r=f,f=s+q,Te(s)>=Te(q)?o=s-f+q:o=q-f+s,s=f,u+=o,v+=a;return r+s+u}bR.exports=NI
});var kR=c(function(vd,RR){
var rK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),yR=gR(),eK=wR();rK(yR,"ndarray",eK);RR.exports=yR
});var ER=c(function(sd,_R){
var Ti=6;function aK(n,e,a){var i,r,u,v;if(u=0,n<=0)return u;if(n===1||a===0)return e[0];if(a===1){if(r=n%Ti,r>0)for(v=0;v<r;v++)u+=e[v];if(n<Ti)return u;for(v=r;v<n;v+=Ti)u+=e[v]+e[v+1]+e[v+2]+e[v+3]+e[v+4]+e[v+5];return u}for(a<0?i=(1-n)*a:i=0,v=0;v<n;v++)u+=e[i],i+=a;return u}_R.exports=aK
});var FR=c(function(td,OR){
var Se=6;function uK(n,e,a,i){var r,u,v,s;if(v=0,n<=0)return v;if(n===1||a===0)return e[i];if(r=i,a===1){if(u=n%Se,u>0)for(s=0;s<u;s++)v+=e[r],r+=a;if(n<Se)return v;for(s=u;s<n;s+=Se)v+=e[r]+e[r+1]+e[r+2]+e[r+3]+e[r+4]+e[r+5],r+=Se;return v}for(s=0;s<n;s++)v+=e[r],r+=a;return v}OR.exports=uK
});var SR=c(function(od,TR){
var iK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),MR=ER(),nK=FR();iK(MR,"ndarray",nK);TR.exports=MR
});var Zi=c(function(fd,ZR){
var vK=require('@stdlib/math/base/special/floor/dist'),sK=128;function Si(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return l}if(n<=sK){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return l}return j=vK(n/2),j-=j%8,Si(j,e,a,r)+Si(n-j,e,a,r+j*a)}ZR.exports=Si
});var AR=c(function(qd,PR){
var tK=Zi();function oK(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return r}return tK(n,e,a,i)}PR.exports=oK
});var CR=c(function(cd,BR){
var fK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),LR=AR(),qK=Zi();fK(LR,"ndarray",qK);BR.exports=LR
});var IR=c(function(md,GR){
var Pi=5;function cK(n,e,a,i){var r,u,v;if(n<=0||e===0)return a;if(i===1){if(v=n%Pi,v>0)for(u=0;u<v;u++)a[u]+=e;if(n<Pi)return a;for(u=v;u<n;u+=Pi)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]+=e,r+=i;return a}GR.exports=cK
});var VR=c(function(ld,KR){
var Ze=5;function mK(n,e,a,i,r){var u,v,s;if(n<=0||e===0)return a;if(u=r,i===1){if(v=n%Ze,v>0)for(s=0;s<v;s++)a[u]+=e,u+=i;if(n<Ze)return a;for(s=v;s<n;s+=Ze)a[u]+=e,a[u+1]+=e,a[u+2]+=e,a[u+3]+=e,a[u+4]+=e,u+=Ze;return a}for(s=0;s<n;s++)a[u]+=e,u+=i;return a}KR.exports=mK
});var HR=c(function(pd,DR){
var lK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),zR=IR(),pK=VR();lK(zR,"ndarray",pK);DR.exports=zR
});var UR=c(function(jd,QR){
var jK=require("path").join,gK=require('@stdlib/utils/try-require/dist'),bK=require('@stdlib/assert/is-error/dist'),wK=HR(),Ai,JR=gK(jK(__dirname,"./native.js"));bK(JR)?Ai=wK:Ai=JR;QR.exports=Ai
});var hR=c(function(gd,$R){
var W=require('@stdlib/number/float64/base/to-float32/dist'),WR=require('@stdlib/math/base/special/abs/dist');function yK(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||i===0)return W(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,o=0,t=0;t<n;t++)v=W(e+a[u]),s=W(r+v),WR(r)>=WR(v)?o=W(o+W(W(r-s)+v)):o=W(o+W(W(v-s)+r)),r=s,u+=i;return W(r+o)}$R.exports=yK
});var dR=c(function(bd,XR){
var $=require('@stdlib/number/float64/base/to-float32/dist'),YR=require('@stdlib/math/base/special/abs/dist');function RK(n,e,a,i,r){var u,v,s,o,t,f;if(n<=0)return 0;if(n===1||i===0)return $(e+a[r]);for(v=r,u=0,t=0,f=0;f<n;f++)s=$(e+a[v]),o=$(u+s),YR(u)>=YR(s)?t=$(t+$($(u-o)+s)):t=$(t+$($(s-o)+u)),u=o,v+=i;return $(u+t)}XR.exports=RK
});var rk=c(function(wd,NR){
var kK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),xR=hR(),_K=dR();kK(xR,"ndarray",_K);NR.exports=xR
});var Pe=c(function(yd,ak){
var EK=require("path").join,OK=require('@stdlib/utils/try-require/dist'),FK=require('@stdlib/assert/is-error/dist'),MK=rk(),Li,ek=OK(EK(__dirname,"./native.js"));FK(ek)?Li=MK:Li=ek;ak.exports=Li
});var ik=c(function(Rd,uk){
var TK=Pe();function SK(n,e,a,i){return TK(n,e,a,i)}uk.exports=SK
});var vk=c(function(kd,nk){
var ZK=Pe().ndarray;function PK(n,e,a,i,r){return ZK(n,e,a,i,r)}nk.exports=PK
});var ok=c(function(_d,tk){
var AK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),sk=ik(),LK=vk();AK(sk,"ndarray",LK);tk.exports=sk
});var ck=c(function(Ed,qk){
var BK=require("path").join,CK=require('@stdlib/utils/try-require/dist'),GK=require('@stdlib/assert/is-error/dist'),IK=ok(),Bi,fk=CK(BK(__dirname,"./native.js"));GK(fk)?Bi=IK:Bi=fk;qk.exports=Bi
});var lk=c(function(Od,mk){
var K=require('@stdlib/number/float64/base/to-float32/dist'),Ae=require('@stdlib/math/base/special/abs/dist');function KK(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||i===0)return K(e+a[0]);for(i<0?v=(1-n)*i:v=0,r=0,u=0,s=0,m=0;m<n;m++)t=K(e+a[v]),f=K(r+t),Ae(r)>=Ae(t)?q=K(K(r-f)+t):q=K(K(t-f)+r),r=f,f=K(s+q),Ae(s)>=Ae(q)?o=K(K(s-f)+q):o=K(K(q-f)+s),s=f,u=K(u+o),v+=i;return K(r+K(s+u))}mk.exports=KK
});var jk=c(function(Fd,pk){
var V=require('@stdlib/number/float64/base/to-float32/dist'),Le=require('@stdlib/math/base/special/abs/dist');function VK(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0)return 0;if(n===1||i===0)return V(e+a[r]);for(s=r,u=0,v=0,o=0,p=0;p<n;p++)f=V(e+a[s]),q=V(u+f),Le(u)>=Le(f)?m=V(V(u-q)+f):m=V(V(f-q)+u),u=q,q=V(o+m),Le(o)>=Le(m)?t=V(V(o-q)+m):t=V(V(m-q)+o),o=q,v=V(v+t),s+=i;return V(u+V(o+v))}pk.exports=VK
});var wk=c(function(Md,bk){
var zK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),gk=lk(),DK=jk();zK(gk,"ndarray",DK);bk.exports=gk
});var kk=c(function(Td,Rk){
var HK=require("path").join,JK=require('@stdlib/utils/try-require/dist'),QK=require('@stdlib/assert/is-error/dist'),UK=wk(),Ci,yk=JK(HK(__dirname,"./native.js"));QK(yk)?Ci=UK:Ci=yk;Rk.exports=Ci
});var Ek=c(function(Sd,_k){
var Gi=require('@stdlib/number/float64/base/to-float32/dist');function WK(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Gi(e+a[0]);for(i<0?u=(1-n)*i:u=0,r=0,v=0;v<n;v++)r=Gi(r+Gi(e+a[u])),u+=i;return r}_k.exports=WK
});var Fk=c(function(Zd,Ok){
var Ii=require('@stdlib/number/float64/base/to-float32/dist');function $K(n,e,a,i,r){var u,v,s;if(n<=0)return 0;if(n===1||i===0)return Ii(e+a[0]);for(v=r,u=0,s=0;s<n;s++)u=Ii(u+Ii(e+a[v])),v+=i;return u}Ok.exports=$K
});var Sk=c(function(Pd,Tk){
var hK=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Mk=Ek(),YK=Fk();hK(Mk,"ndarray",YK);Tk.exports=Mk
});var Ak=c(function(Ad,Pk){
var XK=require("path").join,dK=require('@stdlib/utils/try-require/dist'),xK=require('@stdlib/assert/is-error/dist'),NK=Sk(),Ki,Zk=dK(XK(__dirname,"./native.js"));xK(Zk)?Ki=NK:Ki=Zk;Pk.exports=Ki
});var zi=c(function(Ld,Lk){
var E=require('@stdlib/number/float64/base/to-float32/dist'),rV=require('@stdlib/math/base/special/floor/dist'),eV=128;function Vi(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return E(e+a[r]);if(u=r,n<8){for(j=0,b=0;b<n;b++)j=E(j+E(e+a[u])),u+=i;return j}if(n<=eV){for(v=E(e+a[u]),s=E(e+a[u+i]),o=E(e+a[u+2*i]),t=E(e+a[u+3*i]),f=E(e+a[u+4*i]),q=E(e+a[u+5*i]),m=E(e+a[u+6*i]),p=E(e+a[u+7*i]),u+=8*i,l=n%8,b=8;b<n-l;b+=8)v=E(v+E(e+a[u])),s=E(s+E(e+a[u+i])),o=E(o+E(e+a[u+2*i])),t=E(t+E(e+a[u+3*i])),f=E(f+E(e+a[u+4*i])),q=E(q+E(e+a[u+5*i])),m=E(m+E(e+a[u+6*i])),p=E(p+E(e+a[u+7*i])),u+=8*i;for(j=E(E(E(v+s)+E(o+t))+E(E(f+q)+E(m+p))),b;b<n;b++)j=E(j+E(e+a[u])),u+=i;return j}return g=rV(n/2),g-=g%8,E(Vi(g,e,a,i,u)+Vi(n-g,e,a,i,u+g*i))}Lk.exports=Vi
});var Ck=c(function(Bd,Bk){
var Di=require('@stdlib/number/float64/base/to-float32/dist'),aV=zi();function uV(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return Di(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u=Di(u+Di(e+a[r])),r+=i;return u}return aV(n,e,a,i,r)}Bk.exports=uV
});var Kk=c(function(Cd,Ik){
var iV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Gk=Ck(),nV=zi();iV(Gk,"ndarray",nV);Ik.exports=Gk
});var Dk=c(function(Gd,zk){
var vV=require("path").join,sV=require('@stdlib/utils/try-require/dist'),tV=require('@stdlib/assert/is-error/dist'),oV=Kk(),Hi,Vk=sV(vV(__dirname,"./native.js"));tV(Vk)?Hi=oV:Hi=Vk;zk.exports=Hi
});var Qi=c(function(Id,Hk){
var C=require('@stdlib/number/float64/base/to-float32/dist'),fV=require('@stdlib/math/base/special/floor/dist'),A=require('@stdlib/math/base/special/abs/dist'),qV=128;function Ji(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return A(e[i]);if(r=i,n<8){for(l=0,g=0;g<n;g++)l=C(l+A(e[r])),r+=a;return l}if(n<=qV){for(u=A(e[r]),v=A(e[r+a]),s=A(e[r+2*a]),o=A(e[r+3*a]),t=A(e[r+4*a]),f=A(e[r+5*a]),q=A(e[r+6*a]),m=A(e[r+7*a]),r+=8*a,p=n%8,g=8;g<n-p;g+=8)u=C(u+A(e[r])),v=C(v+A(e[r+a])),s=C(s+A(e[r+2*a])),o=C(o+A(e[r+3*a])),t=C(t+A(e[r+4*a])),f=C(f+A(e[r+5*a])),q=C(q+A(e[r+6*a])),m=C(m+A(e[r+7*a])),r+=8*a;for(l=C(C(C(u+v)+C(s+o))+C(C(t+f)+C(q+m))),g;g<n;g++)l=C(l+A(e[r])),r+=a;return l}return j=fV(n/2),j-=j%8,C(Ji(j,e,a,r)+Ji(n-j,e,a,r+j*a))}Hk.exports=Ji
});var Uk=c(function(Kd,Qk){
var cV=require('@stdlib/number/float64/base/to-float32/dist'),Jk=require('@stdlib/math/base/special/abs/dist'),mV=Qi();function lV(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return Jk(e[0]);if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=cV(r+Jk(e[i])),i+=a;return r}return mV(n,e,a,i)}Qk.exports=lV
});var hk=c(function(Vd,$k){
var pV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),Wk=Uk(),jV=Qi();pV(Wk,"ndarray",jV);$k.exports=Wk
});var dk=c(function(zd,Xk){
var gV=require("path").join,bV=require('@stdlib/utils/try-require/dist'),wV=require('@stdlib/assert/is-error/dist'),yV=hk(),Ui,Yk=bV(gV(__dirname,"./native.js"));wV(Yk)?Ui=yV:Ui=Yk;Xk.exports=Ui
});var r3=c(function(Dd,Nk){
var er=require('@stdlib/number/float64/base/to-float32/dist'),xk=require('@stdlib/math/base/special/abs/dist');function RV(n,e,a,i,r,u){var v,s,o,t,f,q,m;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=e,q=0,m=0;m<n;m++)t=a[v],f=er(o+t),xk(o)>=xk(t)?q=er(q+er(er(o-f)+t)):q=er(q+er(er(t-f)+o)),o=f,r[s]=er(o+q),v+=i,s+=u;return r}Nk.exports=RV
});var u3=c(function(Hd,a3){
var ar=require('@stdlib/number/float64/base/to-float32/dist'),e3=require('@stdlib/math/base/special/abs/dist');function kV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l;if(n<=0)return u;for(o=r,t=s,f=e,p=0,l=0;l<n;l++)q=a[o],m=ar(f+q),e3(f)>=e3(q)?p=ar(p+ar(ar(f-m)+q)):p=ar(p+ar(ar(q-m)+f)),f=m,u[t]=ar(f+p),o+=i,t+=v;return u}a3.exports=kV
});var v3=c(function(Jd,n3){
var _V=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),i3=r3(),EV=u3();_V(i3,"ndarray",EV);n3.exports=i3
});var Be=c(function(Qd,t3){
var OV=require("path").join,FV=require('@stdlib/utils/try-require/dist'),MV=require('@stdlib/assert/is-error/dist'),TV=v3(),Wi,s3=FV(OV(__dirname,"./native.js"));MV(s3)?Wi=TV:Wi=s3;t3.exports=Wi
});var f3=c(function(Ud,o3){
var SV=Be();function ZV(n,e,a,i,r,u){return SV(n,e,a,i,r,u)}o3.exports=ZV
});var c3=c(function(Wd,q3){
var PV=Be().ndarray;function AV(n,e,a,i,r,u,v,s){return PV(n,e,a,i,r,u,v,s)}q3.exports=AV
});var p3=c(function($d,l3){
var LV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),m3=f3(),BV=c3();LV(m3,"ndarray",BV);l3.exports=m3
});var b3=c(function(hd,g3){
var CV=require("path").join,GV=require('@stdlib/utils/try-require/dist'),IV=require('@stdlib/assert/is-error/dist'),KV=p3(),$i,j3=GV(CV(__dirname,"./native.js"));IV(j3)?$i=KV:$i=j3;g3.exports=$i
});var y3=c(function(Yd,w3){
var z=require('@stdlib/number/float64/base/to-float32/dist'),Ce=require('@stdlib/math/base/special/abs/dist');function VV(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l;if(n<=0)return r;for(i<0?s=(1-n)*i:s=0,u<0?o=(1-n)*u:o=0,v=0,t=0,l=0;l<n;l++)q=a[s],m=z(e+q),Ce(e)>=Ce(q)?p=z(z(e-m)+q):p=z(z(q-m)+e),e=m,m=z(t+p),Ce(t)>=Ce(p)?f=z(z(t-m)+p):f=z(z(p-m)+t),t=m,v=z(v+f),r[o]=z(e+z(t+v)),s+=i,o+=u;return r}w3.exports=VV
});var k3=c(function(Xd,R3){
var D=require('@stdlib/number/float64/base/to-float32/dist'),Ge=require('@stdlib/math/base/special/abs/dist');function zV(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g;if(n<=0)return u;for(t=r,f=s,o=0,q=0,g=0;g<n;g++)p=a[t],l=D(e+p),Ge(e)>=Ge(p)?j=D(D(e-l)+p):j=D(D(p-l)+e),e=l,l=D(q+j),Ge(q)>=Ge(j)?m=D(D(q-l)+j):m=D(D(j-l)+q),q=l,o=D(o+m),u[f]=D(e+D(q+o)),t+=i,f+=v;return u}R3.exports=zV
});var O3=c(function(dd,E3){
var DV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_3=y3(),HV=k3();DV(_3,"ndarray",HV);E3.exports=_3
});var T3=c(function(xd,M3){
var JV=require("path").join,QV=require('@stdlib/utils/try-require/dist'),UV=require('@stdlib/assert/is-error/dist'),WV=O3(),hi,F3=QV(JV(__dirname,"./native.js"));UV(F3)?hi=WV:hi=F3;M3.exports=hi
});var Z3=c(function(Nd,S3){
var $V=require('@stdlib/number/float64/base/to-float32/dist');function hV(n,e,a,i,r,u){var v,s,o;if(n<=0)return r;for(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,o=0;o<n;o++)e=$V(e+a[v]),r[s]=e,v+=i,s+=u;return r}S3.exports=hV
});var A3=c(function(rx,P3){
var YV=require('@stdlib/number/float64/base/to-float32/dist');function XV(n,e,a,i,r,u,v,s){var o,t,f;if(n<=0)return u;for(o=r,t=s,f=0;f<n;f++)e=YV(e+a[o]),u[t]=e,o+=i,t+=v;return u}P3.exports=XV
});var C3=c(function(ex,B3){
var dV=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),L3=Z3(),xV=A3();dV(L3,"ndarray",xV);B3.exports=L3
});var K3=c(function(ax,I3){
var NV=require("path").join,rz=require('@stdlib/utils/try-require/dist'),ez=require('@stdlib/assert/is-error/dist'),az=C3(),Yi,G3=rz(NV(__dirname,"./native.js"));ez(G3)?Yi=az:Yi=G3;I3.exports=Yi
});var di=c(function(ux,z3){
var V3=require('@stdlib/number/float64/base/to-float32/dist'),uz=require('@stdlib/math/base/special/floor/dist'),iz=128;function Xi(n,e,a,i,r,u,v,s){var o,t,f,q,m;if(n<=0)return u;if(o=r,t=s,n<=iz){for(f=0,m=0;m<n;m++)f=V3(f+a[o]),u[t]=V3(e+f),o+=i,t+=v;return u}return q=uz(n/2),Xi(q,e,a,i,o,u,v,t),t+=(q-1)*v,Xi(n-q,u[t],a,i,o+q*i,u,v,t+v),u}z3.exports=Xi
});var H3=c(function(ix,D3){
var nz=di();function vz(n,e,a,i,r,u){var v,s;return n<=0?r:(i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,nz(n,e,a,i,v,r,u,s))}D3.exports=vz
});var U3=c(function(nx,Q3){
var sz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),J3=H3(),tz=di();sz(J3,"ndarray",tz);Q3.exports=J3
});var h3=c(function(vx,$3){
var oz=require("path").join,fz=require('@stdlib/utils/try-require/dist'),qz=require('@stdlib/assert/is-error/dist'),cz=U3(),xi,W3=fz(oz(__dirname,"./native.js"));qz(W3)?xi=cz:xi=W3;$3.exports=xi
});var rn=c(function(sx,Y3){
var Ie=require('@stdlib/number/float64/base/to-float32/dist'),mz=require('@stdlib/math/base/special/floor/dist'),lz=128;function Ni(n,e,a,i,r){var u,v,s,o,t,f,q,m,p,l,j,g,b;if(n<=0)return 0;if(n===1||i===0)return Ie(e+a[r]);if(u=r,n<8){for(j=0,b=0;b<n;b++)j+=e+a[u],u+=i;return Ie(j)}if(n<=lz){for(v=e+a[u],s=e+a[u+i],o=e+a[u+2*i],t=e+a[u+3*i],f=e+a[u+4*i],q=e+a[u+5*i],m=e+a[u+6*i],p=e+a[u+7*i],u+=8*i,l=n%8,b=8;b<n-l;b+=8)v+=e+a[u],s+=e+a[u+i],o+=e+a[u+2*i],t+=e+a[u+3*i],f+=e+a[u+4*i],q+=e+a[u+5*i],m+=e+a[u+6*i],p+=e+a[u+7*i],u+=8*i;for(j=v+s+(o+t)+(f+q+(m+p)),b;b<n;b++)j+=e+a[u],u+=i;return Ie(j)}return g=mz(n/2),g-=g%8,Ie(Ni(g,e,a,i,u)+Ni(n-g,e,a,i,u+g*i))}Y3.exports=Ni
});var x3=c(function(tx,d3){
var X3=require('@stdlib/number/float64/base/to-float32/dist'),pz=rn();function jz(n,e,a,i){var r,u,v;if(n<=0)return 0;if(n===1||i===0)return X3(e+a[0]);if(i<0?r=(1-n)*i:r=0,n<8){for(u=0,v=0;v<n;v++)u+=e+a[r],r+=i;return X3(u)}return pz(n,e,a,i,r)}d3.exports=jz
});var e_=c(function(ox,r_){
var gz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),N3=x3(),bz=rn();gz(N3,"ndarray",bz);r_.exports=N3
});var Ke=c(function(fx,u_){
var wz=require("path").join,yz=require('@stdlib/utils/try-require/dist'),Rz=require('@stdlib/assert/is-error/dist'),kz=e_(),en,a_=yz(wz(__dirname,"./native.js"));Rz(a_)?en=kz:en=a_;u_.exports=en
});var n_=c(function(qx,i_){
var _z=Ke();function Ez(n,e,a,i){return _z(n,e,a,i)}i_.exports=Ez
});var s_=c(function(cx,v_){
var Oz=Ke().ndarray;function Fz(n,e,a,i,r){return Oz(n,e,a,i,r)}v_.exports=Fz
});var f_=c(function(mx,o_){
var Mz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),t_=n_(),Tz=s_();Mz(t_,"ndarray",Tz);o_.exports=t_
});var m_=c(function(lx,c_){
var Sz=require("path").join,Zz=require('@stdlib/utils/try-require/dist'),Pz=require('@stdlib/assert/is-error/dist'),Az=f_(),an,q_=Zz(Sz(__dirname,"./native.js"));Pz(q_)?an=Az:an=q_;c_.exports=an
});var vn=c(function(px,l_){
var un=require('@stdlib/number/float64/base/to-float32/dist'),L=require('@stdlib/math/base/assert/is-nanf/dist'),Lz=require('@stdlib/math/base/special/floor/dist'),Bz=128;function nn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return L(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)L(e[r])===!1&&(l+=e[r]),r+=a;return un(l)}if(n<=Bz){for(u=L(e[r])?0:e[r],r+=a,v=L(e[r])?0:e[r],r+=a,s=L(e[r])?0:e[r],r+=a,o=L(e[r])?0:e[r],r+=a,t=L(e[r])?0:e[r],r+=a,f=L(e[r])?0:e[r],r+=a,q=L(e[r])?0:e[r],r+=a,m=L(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u+=L(e[r])?0:e[r],r+=a,v+=L(e[r])?0:e[r],r+=a,s+=L(e[r])?0:e[r],r+=a,o+=L(e[r])?0:e[r],r+=a,t+=L(e[r])?0:e[r],r+=a,f+=L(e[r])?0:e[r],r+=a,q+=L(e[r])?0:e[r],r+=a,m+=L(e[r])?0:e[r],r+=a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)L(e[r])===!1&&(l+=e[r]),r+=a;return un(l)}return j=Lz(n/2),j-=j%8,un(nn(j,e,a,r)+nn(n-j,e,a,r+j*a))}l_.exports=nn
});var g_=c(function(jx,j_){
var Cz=require('@stdlib/number/float64/base/to-float32/dist'),p_=require('@stdlib/math/base/assert/is-nanf/dist'),Gz=vn();function Iz(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return p_(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)p_(e[i])===!1&&(r+=e[i]),i+=a;return Cz(r)}return Gz(n,e,a,i)}j_.exports=Iz
});var y_=c(function(gx,w_){
var Kz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),b_=g_(),Vz=vn();Kz(b_,"ndarray",Vz);w_.exports=b_
});var Ve=c(function(bx,k_){
var zz=require("path").join,Dz=require('@stdlib/utils/try-require/dist'),Hz=require('@stdlib/assert/is-error/dist'),Jz=y_(),sn,R_=Dz(zz(__dirname,"./native.js"));Hz(R_)?sn=Jz:sn=R_;k_.exports=sn
});var E_=c(function(wx,__){
var Qz=Ve();function Uz(n,e,a){return Qz(n,e,a)}__.exports=Uz
});var F_=c(function(yx,O_){
var Wz=Ve().ndarray;function $z(n,e,a,i){return Wz(n,e,a,i)}O_.exports=$z
});var S_=c(function(Rx,T_){
var hz=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),M_=E_(),Yz=F_();hz(M_,"ndarray",Yz);T_.exports=M_
});var A_=c(function(kx,P_){
var Xz=require("path").join,dz=require('@stdlib/utils/try-require/dist'),xz=require('@stdlib/assert/is-error/dist'),Nz=S_(),tn,Z_=dz(Xz(__dirname,"./native.js"));xz(Z_)?tn=Nz:tn=Z_;P_.exports=tn
});var qn=c(function(_x,L_){
var on=require('@stdlib/number/float64/base/to-float32/dist'),rD=require('@stdlib/math/base/special/floor/dist'),eD=128;function fn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l+=e[r],r+=a;return on(l)}if(n<=eD){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u+=e[r],v+=e[r+a],s+=e[r+2*a],o+=e[r+3*a],t+=e[r+4*a],f+=e[r+5*a],q+=e[r+6*a],m+=e[r+7*a],r+=8*a;for(l=u+v+(s+o)+(t+f+(q+m)),g;g<n;g++)l+=e[r],r+=a;return on(l)}return j=rD(n/2),j-=j%8,on(fn(j,e,a,r)+fn(n-j,e,a,r+j*a))}L_.exports=fn
});var C_=c(function(Ex,B_){
var aD=require('@stdlib/number/float64/base/to-float32/dist'),uD=qn();function iD(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r+=e[i],i+=a;return aD(r)}return uD(n,e,a,i)}B_.exports=iD
});var K_=c(function(Ox,I_){
var nD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),G_=C_(),vD=qn();nD(G_,"ndarray",vD);I_.exports=G_
});var ze=c(function(Fx,z_){
var sD=require("path").join,tD=require('@stdlib/utils/try-require/dist'),oD=require('@stdlib/assert/is-error/dist'),fD=K_(),cn,V_=tD(sD(__dirname,"./native.js"));oD(V_)?cn=fD:cn=V_;z_.exports=cn
});var H_=c(function(Mx,D_){
var qD=ze();function cD(n,e,a){return qD(n,e,a)}D_.exports=cD
});var Q_=c(function(Tx,J_){
var mD=ze().ndarray;function lD(n,e,a,i){return mD(n,e,a,i)}J_.exports=lD
});var $_=c(function(Sx,W_){
var pD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),U_=H_(),jD=Q_();pD(U_,"ndarray",jD);W_.exports=U_
});var X_=c(function(Zx,Y_){
var gD=require("path").join,bD=require('@stdlib/utils/try-require/dist'),wD=require('@stdlib/assert/is-error/dist'),yD=$_(),mn,h_=bD(gD(__dirname,"./native.js"));wD(h_)?mn=yD:mn=h_;Y_.exports=mn
});var x_=c(function(Px,d_){
var ln=8;function RD(n,e,a,i){var r,u,v;if(n<=0)return a;if(i===1){if(v=n%ln,v>0)for(u=0;u<v;u++)a[u]=e;if(n<ln)return a;for(u=v;u<n;u+=ln)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e;return a}for(i<0?r=(1-n)*i:r=0,u=0;u<n;u++)a[r]=e,r+=i;return a}d_.exports=RD
});var r4=c(function(Ax,N_){
var De=8;function kD(n,e,a,i,r){var u,v,s;if(n<=0)return a;if(u=r,i===1){if(v=n%De,v>0)for(s=0;s<v;s++)a[u]=e,u+=i;if(n<De)return a;for(s=v;s<n;s+=De)a[u]=e,a[u+1]=e,a[u+2]=e,a[u+3]=e,a[u+4]=e,a[u+5]=e,a[u+6]=e,a[u+7]=e,u+=De;return a}for(s=0;s<n;s++)a[u]=e,u+=i;return a}N_.exports=kD
});var u4=c(function(Lx,a4){
var _D=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),e4=x_(),ED=r4();_D(e4,"ndarray",ED);a4.exports=e4
});var v4=c(function(Bx,n4){
var OD=require("path").join,FD=require('@stdlib/utils/try-require/dist'),MD=require('@stdlib/assert/is-error/dist'),TD=u4(),pn,i4=FD(OD(__dirname,"./native.js"));MD(i4)?pn=TD:pn=i4;n4.exports=pn
});var f4=c(function(Cx,o4){
var vr=require('@stdlib/number/float64/base/to-float32/dist'),s4=require('@stdlib/math/base/assert/is-nanf/dist'),t4=require('@stdlib/math/base/special/abs/dist');function SD(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return s4(e[0])?0:e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],s4(u)===!1&&(v=i+u,t4(i)>=t4(u)?s=vr(s+vr(vr(i-v)+u)):s=vr(s+vr(vr(u-v)+i)),i=v),r+=a;return vr(i+s)}o4.exports=SD
});var l4=c(function(Gx,m4){
var sr=require('@stdlib/number/float64/base/to-float32/dist'),q4=require('@stdlib/math/base/assert/is-nanf/dist'),c4=require('@stdlib/math/base/special/abs/dist');function ZD(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return q4(e[i])?0:e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],q4(v)===!1&&(s=r+v,c4(r)>=c4(v)?o=sr(o+sr(sr(r-s)+v)):o=sr(o+sr(sr(v-s)+r)),r=s),u+=a;return sr(r+o)}m4.exports=ZD
});var g4=c(function(Ix,j4){
var PD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),p4=f4(),AD=l4();PD(p4,"ndarray",AD);j4.exports=p4
});var He=c(function(Kx,w4){
var LD=require("path").join,BD=require('@stdlib/utils/try-require/dist'),CD=require('@stdlib/assert/is-error/dist'),GD=g4(),jn,b4=BD(LD(__dirname,"./native.js"));CD(b4)?jn=GD:jn=b4;w4.exports=jn
});var R4=c(function(Vx,y4){
var ID=He();function KD(n,e,a){return ID(n,e,a)}y4.exports=KD
});var _4=c(function(zx,k4){
var VD=He().ndarray;function zD(n,e,a,i){return VD(n,e,a,i)}k4.exports=zD
});var F4=c(function(Dx,O4){
var DD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),E4=R4(),HD=_4();DD(E4,"ndarray",HD);O4.exports=E4
});var S4=c(function(Hx,T4){
var JD=require("path").join,QD=require('@stdlib/utils/try-require/dist'),UD=require('@stdlib/assert/is-error/dist'),WD=F4(),gn,M4=QD(JD(__dirname,"./native.js"));UD(M4)?gn=WD:gn=M4;T4.exports=gn
});var A4=c(function(Jx,P4){
var H=require('@stdlib/number/float64/base/to-float32/dist'),Z4=require('@stdlib/math/base/assert/is-nanf/dist'),Je=require('@stdlib/math/base/special/abs/dist');function $D(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return Z4(e[0])?0:e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],Z4(o)===!1&&(t=H(i+o),Je(i)>=Je(o)?f=H(H(i-t)+o):f=H(H(o-t)+i),i=t,t=H(v+f),Je(v)>=Je(f)?s=H(H(v-t)+f):s=H(H(f-t)+v),v=t,r=H(r+s)),u+=a;return H(i+H(v+r))}P4.exports=$D
});var C4=c(function(Qx,B4){
var J=require('@stdlib/number/float64/base/to-float32/dist'),L4=require('@stdlib/math/base/assert/is-nanf/dist'),Qe=require('@stdlib/math/base/special/abs/dist');function hD(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return L4(e[i])?0:e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],L4(t)===!1&&(f=J(r+t),Qe(r)>=Qe(t)?q=J(J(r-f)+t):q=J(J(t-f)+r),r=f,f=J(s+q),Qe(s)>=Qe(q)?o=J(J(s-f)+q):o=J(J(q-f)+s),s=f,u=J(u+o)),v+=a;return J(r+J(s+u))}B4.exports=hD
});var K4=c(function(Ux,I4){
var YD=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),G4=A4(),XD=C4();YD(G4,"ndarray",XD);I4.exports=G4
});var D4=c(function(Wx,z4){
var dD=require("path").join,xD=require('@stdlib/utils/try-require/dist'),ND=require('@stdlib/assert/is-error/dist'),rH=K4(),bn,V4=xD(dD(__dirname,"./native.js"));ND(V4)?bn=rH:bn=V4;z4.exports=bn
});var Q4=c(function($x,J4){
var eH=require('@stdlib/number/float64/base/to-float32/dist'),H4=require('@stdlib/math/base/assert/is-nanf/dist');function aH(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return H4(e[0])?i:e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)H4(e[r])===!1&&(i=eH(i+e[r])),r+=a;return i}J4.exports=aH
});var $4=c(function(hx,W4){
var uH=require('@stdlib/number/float64/base/to-float32/dist'),U4=require('@stdlib/math/base/assert/is-nanf/dist');function iH(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return U4(e[i])?r:e[i];for(u=i,v=0;v<n;v++)U4(e[u])===!1&&(r=uH(r+e[u])),u+=a;return r}W4.exports=iH
});var X4=c(function(Yx,Y4){
var nH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),h4=Q4(),vH=$4();nH(h4,"ndarray",vH);Y4.exports=h4
});var N4=c(function(Xx,x4){
var sH=require("path").join,tH=require('@stdlib/utils/try-require/dist'),oH=require('@stdlib/assert/is-error/dist'),fH=X4(),wn,d4=tH(sH(__dirname,"./native.js"));oH(d4)?wn=fH:wn=d4;x4.exports=wn
});var Rn=c(function(dx,r8){
var G=require('@stdlib/number/float64/base/to-float32/dist'),B=require('@stdlib/math/base/assert/is-nanf/dist'),qH=require('@stdlib/math/base/special/floor/dist'),cH=128;function yn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return B(e[i])?0:e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}if(n<=cH){for(u=B(e[r])?0:e[r],r+=a,v=B(e[r])?0:e[r],r+=a,s=B(e[r])?0:e[r],r+=a,o=B(e[r])?0:e[r],r+=a,t=B(e[r])?0:e[r],r+=a,f=B(e[r])?0:e[r],r+=a,q=B(e[r])?0:e[r],r+=a,m=B(e[r])?0:e[r],r+=a,p=n%8,g=8;g<n-p;g+=8)u=B(e[r])?u:G(u+e[r]),r+=a,v=B(e[r])?v:G(v+e[r]),r+=a,s=B(e[r])?s:G(s+e[r]),r+=a,o=B(e[r])?o:G(o+e[r]),r+=a,t=B(e[r])?t:G(t+e[r]),r+=a,f=B(e[r])?f:G(f+e[r]),r+=a,q=B(e[r])?q:G(q+e[r]),r+=a,m=B(e[r])?m:G(m+e[r]),r+=a;for(l=G(G(G(u+v)+G(s+o))+G(G(t+f)+G(q+m))),g;g<n;g++)B(e[r])===!1&&(l=G(l+e[r])),r+=a;return l}return j=qH(n/2),j-=j%8,G(yn(j,e,a,r)+yn(n-j,e,a,r+j*a))}r8.exports=yn
});var u8=c(function(xx,a8){
var mH=require('@stdlib/number/float64/base/to-float32/dist'),e8=require('@stdlib/math/base/assert/is-nanf/dist'),lH=Rn();function pH(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e8(e[0])?0:e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)e8(e[i])===!1&&(r=mH(r+e[i])),i+=a;return r}return lH(n,e,a,i)}a8.exports=pH
});var v8=c(function(Nx,n8){
var jH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),i8=u8(),gH=Rn();jH(i8,"ndarray",gH);n8.exports=i8
});var o8=c(function(rN,t8){
var bH=require("path").join,wH=require('@stdlib/utils/try-require/dist'),yH=require('@stdlib/assert/is-error/dist'),RH=v8(),kn,s8=wH(bH(__dirname,"./native.js"));yH(s8)?kn=RH:kn=s8;t8.exports=kn
});var q8=c(function(eN,f8){
var kH=require('@stdlib/math/base/special/floor/dist'),Ue=3;function _H(n,e,a){var i,r,u,v,s,o;if(n<=0)return e;if(s=kH(n/2),a===1){if(v=s%Ue,u=n-1,v>0)for(r=0;r<v;r++)i=e[r],e[r]=e[u],e[u]=i,u-=1;if(s<Ue)return e;for(r=v;r<s;r+=Ue)i=e[r],e[r]=e[u],e[u]=i,i=e[r+1],e[r+1]=e[u-1],e[u-1]=i,i=e[r+2],e[r+2]=e[u-2],e[u-2]=i,u-=Ue;return e}for(a<0?r=(1-n)*a:r=0,u=r+(n-1)*a,o=0;o<s;o++)i=e[r],e[r]=e[u],e[u]=i,r+=a,u-=a;return e}f8.exports=_H
});var m8=c(function(aN,c8){
var EH=require('@stdlib/math/base/special/floor/dist'),Or=3;function OH(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return e;if(o=EH(n/2),u=i,a===1){if(s=o%Or,v=u+n-1,s>0)for(t=0;t<s;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;if(o<Or)return e;for(t=s;t<o;t+=Or)r=e[u],e[u]=e[v],e[v]=r,r=e[u+1],e[u+1]=e[v-1],e[v-1]=r,r=e[u+2],e[u+2]=e[v-2],e[v-2]=r,u+=Or,v-=Or;return e}for(v=u+(n-1)*a,t=0;t<o;t++)r=e[u],e[u]=e[v],e[v]=r,u+=a,v-=a;return e}c8.exports=OH
});var j8=c(function(uN,p8){
var FH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),l8=q8(),MH=m8();FH(l8,"ndarray",MH);p8.exports=l8
});var w8=c(function(iN,b8){
var TH=require("path").join,SH=require('@stdlib/utils/try-require/dist'),ZH=require('@stdlib/assert/is-error/dist'),PH=j8(),_n,g8=SH(TH(__dirname,"./native.js"));ZH(g8)?_n=PH:_n=g8;b8.exports=_n
});var _8=c(function(nN,k8){
var y8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),R8=require('@stdlib/math/base/assert/is-nanf/dist'),AH=require('@stdlib/math/base/special/floor/dist');function LH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,g=n,o=AH(n/2);;){if(o>0)o-=1,m=a[v+o*i],p=r[s+o*u];else{if(g-=1,g===0)return a;l=v+g*i,m=a[l],j=s+g*u,p=r[j],a[l]=a[v],r[j]=r[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[v+R*i],q=a[v+t*i],(f>q||R8(f)||f===q&&y8(f))&&(t+=1)),f=a[v+t*i],f>m||R8(f)||f===m&&y8(f));)a[v+b*i]=f,r[s+b*u]=r[s+t*u],b=t,t=b*2+1;a[v+b*i]=m,r[s+b*u]=p}}k8.exports=LH
});var M8=c(function(vN,F8){
var E8=require('@stdlib/math/base/assert/is-positive-zerof/dist'),O8=require('@stdlib/math/base/assert/is-nanf/dist'),BH=require('@stdlib/math/base/special/floor/dist');function CH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),g=n,o=BH(n/2);;){if(o>0)o-=1,m=a[r+o*i],p=u[s+o*v];else{if(g-=1,g===0)return a;l=r+g*i,m=a[l],j=s+g*v,p=u[j],a[l]=a[r],u[j]=u[s]}for(b=o,t=b*2+1;t<g&&(R=t+1,R<g&&(f=a[r+R*i],q=a[r+t*i],(f>q||O8(f)||f===q&&E8(f))&&(t+=1)),f=a[r+t*i],f>m||O8(f)||f===m&&E8(f));)a[r+b*i]=f,u[s+b*v]=u[s+t*v],b=t,t=b*2+1;a[r+b*i]=m,u[s+b*v]=p}}F8.exports=CH
});var Z8=c(function(sN,S8){
var GH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),T8=_8(),IH=M8();GH(T8,"ndarray",IH);S8.exports=T8
});var L8=c(function(tN,A8){
var KH=require("path").join,VH=require('@stdlib/utils/try-require/dist'),zH=require('@stdlib/assert/is-error/dist'),DH=Z8(),En,P8=VH(KH(__dirname,"./native.js"));zH(P8)?En=DH:En=P8;A8.exports=En
});var G8=c(function(oN,C8){
var We=require('@stdlib/math/base/assert/is-negative-zerof/dist'),B8=require('@stdlib/math/base/assert/is-nanf/dist');function HH(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j,g,b,R;if(n<=0||e===0)return a;if(e<0&&(i*=-1,u*=-1),u<0?(p=(1-n)*u,l=0):(p=0,l=(n-1)*u),q=p+u,i<0){for(t=(1-n)*i,f=0,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],B8(j)){for(o=s,m=q;o>f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=We(j),o=s-i,m=q-u;o<=t&&(b=a[o],!(b<=j&&!(v&&b===j&&We(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}for(t=0,f=(n-1)*i,s=t+i,R=1;R<n;R++)if(j=a[s],g=r[q],B8(j)){for(o=s,m=q;o<f;)a[o]=a[o+i],r[m]=r[m+u],o+=i,m+=u;a[f]=j,r[l]=g}else{for(v=We(j),o=s-i,m=q-u;o>=t&&(b=a[o],!(b<=j&&!(v&&b===j&&We(b)===!1)));)a[o+i]=b,r[m+u]=r[m],o-=i,m-=u;a[o+i]=j,r[m+u]=g,s+=i,q+=u}return a}C8.exports=HH
});var V8=c(function(fN,K8){
var $e=require('@stdlib/math/base/assert/is-negative-zerof/dist'),I8=require('@stdlib/math/base/assert/is-nanf/dist');function JH(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j,g,b,R,_,k;if(n<=0||e===0)return a;if(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),q=r,m=q+(n-1)*i,t=q+i,j=s,g=j+(n-1)*v,p=j+v,i<0){for(k=1;k<n;k++)if(b=a[t],R=u[p],I8(b)){for(f=t,l=p;f>m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=$e(b),f=t-i,l=p-v;f<=q&&(_=a[f],!(_<=b&&!(o&&_===b&&$e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}for(k=1;k<n;k++)if(b=a[t],R=u[p],I8(b)){for(f=t,l=p;f<m;)a[f]=a[f+i],u[l]=u[l+v],f+=i,l+=v;a[m]=b,u[g]=R}else{for(o=$e(b),f=t-i,l=p-v;f>=q&&(_=a[f],!(_<=b&&!(o&&_===b&&$e(_)===!1)));)a[f+i]=_,u[l+v]=u[l],f-=i,l-=v;a[f+i]=b,u[l+v]=R,t+=i,p+=v}return a}K8.exports=JH
});var H8=c(function(qN,D8){
var QH=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),z8=G8(),UH=V8();QH(z8,"ndarray",UH);D8.exports=z8
});var U8=c(function(cN,Q8){
var WH=require("path").join,$H=require('@stdlib/utils/try-require/dist'),hH=require('@stdlib/assert/is-error/dist'),YH=H8(),On,J8=$H(WH(__dirname,"./native.js"));hH(J8)?On=YH:On=J8;Q8.exports=On
});var Fn=c(function(mN,XH){XH.exports=[701,301,132,57,23,10,4,1]});var h8=c(function(lN,$8){
var dH=require('@stdlib/math/base/assert/is-negative-zerof/dist'),xH=require('@stdlib/math/base/assert/is-nanf/dist'),W8=Fn(),NH=W8.length;function rJ(n,e,a,i,r,u){var v,s,o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,u*=-1),i<0?v=(1-n)*i:v=0,u<0?s=(1-n)*u:s=0,p=0;p<NH;p++)for(t=W8[p],l=t;l<n;l++)if(f=a[v+l*i],!xH(f)){for(q=r[s+l*u],o=dH(f),j=l;j>=t&&(m=a[v+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[v+j*i]=m,r[s+j*u]=r[s+(j-t)*u];a[v+j*i]=f,r[s+j*u]=q}return a}$8.exports=rJ
});var d8=c(function(pN,X8){
var eJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),aJ=require('@stdlib/math/base/assert/is-nanf/dist'),Y8=Fn(),uJ=Y8.length;function iJ(n,e,a,i,r,u,v,s){var o,t,f,q,m,p,l,j;if(n<=0||e===0)return a;for(e<0&&(i*=-1,v*=-1,r-=(n-1)*i,s-=(n-1)*v),p=0;p<uJ;p++)for(t=Y8[p],l=t;l<n;l++)if(f=a[r+l*i],!aJ(f)){for(q=u[s+l*v],o=eJ(f),j=l;j>=t&&(m=a[r+(j-t)*i],!(m<=f&&!(o&&m===f)));j-=t)a[r+j*i]=m,u[s+j*v]=u[s+(j-t)*v];a[r+j*i]=f,u[s+j*v]=q}return a}X8.exports=iJ
});var rE=c(function(jN,N8){
var nJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),x8=h8(),vJ=d8();nJ(x8,"ndarray",vJ);N8.exports=x8
});var uE=c(function(gN,aE){
var sJ=require("path").join,tJ=require('@stdlib/utils/try-require/dist'),oJ=require('@stdlib/assert/is-error/dist'),fJ=rE(),Mn,eE=tJ(sJ(__dirname,"./native.js"));oJ(eE)?Mn=fJ:Mn=eE;aE.exports=Mn
});var sE=c(function(bN,vE){
var iE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),nE=require('@stdlib/math/base/assert/is-nanf/dist'),qJ=require('@stdlib/math/base/special/floor/dist');function cJ(n,e,a,i){var r,u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=n,u=qJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||nE(s)||s===o&&iE(s))&&(v+=1)),s=a[r+v*i],s>f||nE(s)||s===f&&iE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}vE.exports=cJ
});var qE=c(function(wN,fE){
var tE=require('@stdlib/math/base/assert/is-positive-zerof/dist'),oE=require('@stdlib/math/base/assert/is-nanf/dist'),mJ=require('@stdlib/math/base/special/floor/dist');function lJ(n,e,a,i,r){var u,v,s,o,t,f,q,m,p;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=n,u=mJ(n/2);;){if(u>0)u-=1,f=a[r+u*i];else{if(t-=1,t===0)return a;q=r+t*i,f=a[q],a[q]=a[r]}for(m=u,v=m*2+1;v<t&&(p=v+1,p<t&&(s=a[r+p*i],o=a[r+v*i],(s>o||oE(s)||s===o&&tE(s))&&(v+=1)),s=a[r+v*i],s>f||oE(s)||s===f&&tE(s));)a[r+m*i]=s,m=v,v=m*2+1;a[r+m*i]=f}}fE.exports=lJ
});var lE=c(function(yN,mE){
var pJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),cE=sE(),jJ=qE();pJ(cE,"ndarray",jJ);mE.exports=cE
});var gE=c(function(RN,jE){
var gJ=require("path").join,bJ=require('@stdlib/utils/try-require/dist'),wJ=require('@stdlib/assert/is-error/dist'),yJ=lE(),Tn,pE=bJ(gJ(__dirname,"./native.js"));wJ(pE)?Tn=yJ:Tn=pE;jE.exports=Tn
});var yE=c(function(kN,wE){
var he=require('@stdlib/math/base/assert/is-negative-zerof/dist'),bE=require('@stdlib/math/base/assert/is-nanf/dist');function RJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;if(e<0&&(i*=-1),i<0){for(s=(1-n)*i,o=0,u=s+i,q=1;q<n;q++)if(t=a[u],bE(t)){for(v=u;v>o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=he(t),v=u-i;v<=s&&(f=a[v],!(f<=t&&!(r&&f===t&&he(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}for(s=0,o=(n-1)*i,u=s+i,q=1;q<n;q++)if(t=a[u],bE(t)){for(v=u;v<o;)a[v]=a[v+i],v+=i;a[o]=t}else{for(r=he(t),v=u-i;v>=s&&(f=a[v],!(f<=t&&!(r&&f===t&&he(f)===!1)));)a[v+i]=f,v-=i;a[v+i]=t,u+=i}return a}wE.exports=RJ
});var _E=c(function(_N,kE){
var Ye=require('@stdlib/math/base/assert/is-negative-zerof/dist'),RE=require('@stdlib/math/base/assert/is-nanf/dist');function kJ(n,e,a,i,r){var u,v,s,o,t,f,q,m;if(n<=0||e===0)return a;if(e<0&&(i*=-1,r-=(n-1)*i),o=r,t=o+(n-1)*i,v=o+i,i<0){for(m=1;m<n;m++)if(f=a[v],RE(f)){for(s=v;s>t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Ye(f),s=v-i;s<=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Ye(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}for(m=1;m<n;m++)if(f=a[v],RE(f)){for(s=v;s<t;)a[s]=a[s+i],s+=i;a[t]=f}else{for(u=Ye(f),s=v-i;s>=o&&(q=a[s],!(q<=f&&!(u&&q===f&&Ye(q)===!1)));)a[s+i]=q,s-=i;a[s+i]=f,v+=i}return a}kE.exports=kJ
});var FE=c(function(EN,OE){
var _J=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),EE=yE(),EJ=_E();_J(EE,"ndarray",EJ);OE.exports=EE
});var SE=c(function(ON,TE){
var OJ=require("path").join,FJ=require('@stdlib/utils/try-require/dist'),MJ=require('@stdlib/assert/is-error/dist'),TJ=FE(),Sn,ME=FJ(OJ(__dirname,"./native.js"));MJ(ME)?Sn=TJ:Sn=ME;TE.exports=Sn
});var Zn=c(function(FN,SJ){SJ.exports=[701,301,132,57,23,10,4,1]});var AE=c(function(MN,PE){
var ZJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),PJ=require('@stdlib/math/base/assert/is-nanf/dist'),ZE=Zn(),AJ=ZE.length;function LJ(n,e,a,i){var r,u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1),i<0?r=(1-n)*i:r=0,t=0;t<AJ;t++)for(v=ZE[t],f=v;f<n;f++)if(s=a[r+f*i],!PJ(s)){for(u=ZJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}PE.exports=LJ
});var CE=c(function(TN,BE){
var BJ=require('@stdlib/math/base/assert/is-negative-zerof/dist'),CJ=require('@stdlib/math/base/assert/is-nanf/dist'),LE=Zn(),GJ=LE.length;function IJ(n,e,a,i,r){var u,v,s,o,t,f,q;if(n<=0||e===0)return a;for(e<0&&(i*=-1,r-=(n-1)*i),t=0;t<GJ;t++)for(v=LE[t],f=v;f<n;f++)if(s=a[r+f*i],!CJ(s)){for(u=BJ(s),q=f;q>=v&&(o=a[r+(q-v)*i],!(o<=s&&!(u&&o===s)));q-=v)a[r+q*i]=o;a[r+q*i]=s}return a}BE.exports=IJ
});var KE=c(function(SN,IE){
var KJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),GE=AE(),VJ=CE();KJ(GE,"ndarray",VJ);IE.exports=GE
});var DE=c(function(ZN,zE){
var zJ=require("path").join,DJ=require('@stdlib/utils/try-require/dist'),HJ=require('@stdlib/assert/is-error/dist'),JJ=KE(),Pn,VE=DJ(zJ(__dirname,"./native.js"));HJ(VE)?Pn=JJ:Pn=VE;zE.exports=Pn
});var QE=c(function(PN,JE){
var ur=require('@stdlib/number/float64/base/to-float32/dist'),HE=require('@stdlib/math/base/special/abs/dist');function QJ(n,e,a){var i,r,u,v,s,o;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,i=0,s=0,o=0;o<n;o++)u=e[r],v=ur(i+u),HE(i)>=HE(u)?s=ur(s+ur(ur(i-v)+u)):s=ur(s+ur(ur(u-v)+i)),i=v,r+=a;return ur(i+s)}JE.exports=QJ
});var $E=c(function(AN,WE){
var ir=require('@stdlib/number/float64/base/to-float32/dist'),UE=require('@stdlib/math/base/special/abs/dist');function UJ(n,e,a,i){var r,u,v,s,o,t;if(n<=0)return 0;if(n===1||a===0)return e[i];for(u=i,r=0,o=0,t=0;t<n;t++)v=e[u],s=ir(r+v),UE(r)>=UE(v)?o=ir(o+ir(ir(r-s)+v)):o=ir(o+ir(ir(v-s)+r)),r=s,u+=a;return ir(r+o)}WE.exports=UJ
});var XE=c(function(LN,YE){
var WJ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),hE=QE(),$J=$E();WJ(hE,"ndarray",$J);YE.exports=hE
});var Xe=c(function(BN,xE){
var hJ=require("path").join,YJ=require('@stdlib/utils/try-require/dist'),XJ=require('@stdlib/assert/is-error/dist'),dJ=XE(),An,dE=YJ(hJ(__dirname,"./native.js"));XJ(dE)?An=dJ:An=dE;xE.exports=An
});var r6=c(function(CN,NE){
var xJ=Xe();function NJ(n,e,a){return xJ(n,e,a)}NE.exports=NJ
});var a6=c(function(GN,e6){
var rQ=Xe().ndarray;function eQ(n,e,a,i){return rQ(n,e,a,i)}e6.exports=eQ
});var n6=c(function(IN,i6){
var aQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),u6=r6(),uQ=a6();aQ(u6,"ndarray",uQ);i6.exports=u6
});var t6=c(function(KN,s6){
var iQ=require("path").join,nQ=require('@stdlib/utils/try-require/dist'),vQ=require('@stdlib/assert/is-error/dist'),sQ=n6(),Ln,v6=nQ(iQ(__dirname,"./native.js"));vQ(v6)?Ln=sQ:Ln=v6;s6.exports=Ln
});var f6=c(function(VN,o6){
var Q=require('@stdlib/number/float64/base/to-float32/dist'),de=require('@stdlib/math/base/special/abs/dist');function tQ(n,e,a){var i,r,u,v,s,o,t,f,q;if(n<=0)return 0;if(n===1||a===0)return e[0];for(a<0?u=(1-n)*a:u=0,i=0,r=0,v=0,q=0;q<n;q++)o=e[u],t=Q(i+o),de(i)>=de(o)?f=Q(Q(i-t)+o):f=Q(Q(o-t)+i),i=t,t=Q(v+f),de(v)>=de(f)?s=Q(Q(v-t)+f):s=Q(Q(f-t)+v),v=t,r=Q(r+s),u+=a;return Q(i+Q(v+r))}o6.exports=tQ
});var c6=c(function(zN,q6){
var U=require('@stdlib/number/float64/base/to-float32/dist'),xe=require('@stdlib/math/base/special/abs/dist');function oQ(n,e,a,i){var r,u,v,s,o,t,f,q,m;if(n<=0)return 0;if(n===1||a===0)return e[i];for(v=i,r=0,u=0,s=0,m=0;m<n;m++)t=e[v],f=U(r+t),xe(r)>=xe(t)?q=U(U(r-f)+t):q=U(U(t-f)+r),r=f,f=U(s+q),xe(s)>=xe(q)?o=U(U(s-f)+q):o=U(U(q-f)+s),s=f,u=U(u+o),v+=a;return U(r+U(s+u))}q6.exports=oQ
});var p6=c(function(DN,l6){
var fQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),m6=f6(),qQ=c6();fQ(m6,"ndarray",qQ);l6.exports=m6
});var b6=c(function(HN,g6){
var cQ=require("path").join,mQ=require('@stdlib/utils/try-require/dist'),lQ=require('@stdlib/assert/is-error/dist'),pQ=p6(),Bn,j6=mQ(cQ(__dirname,"./native.js"));lQ(j6)?Bn=pQ:Bn=j6;g6.exports=Bn
});var y6=c(function(JN,w6){
var jQ=require('@stdlib/number/float64/base/to-float32/dist');function gQ(n,e,a){var i,r,u;if(i=0,n<=0)return i;if(n===1||a===0)return e[0];for(a<0?r=(1-n)*a:r=0,u=0;u<n;u++)i=jQ(i+e[r]),r+=a;return i}w6.exports=gQ
});var k6=c(function(QN,R6){
var bQ=require('@stdlib/number/float64/base/to-float32/dist');function wQ(n,e,a,i){var r,u,v;if(r=0,n<=0)return r;if(n===1||a===0)return e[i];for(u=i,v=0;v<n;v++)r=bQ(r+e[u]),u+=a;return r}R6.exports=wQ
});var O6=c(function(UN,E6){
var yQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),_6=y6(),RQ=k6();yQ(_6,"ndarray",RQ);E6.exports=_6
});var T6=c(function(WN,M6){
var kQ=require("path").join,_Q=require('@stdlib/utils/try-require/dist'),EQ=require('@stdlib/assert/is-error/dist'),OQ=O6(),Cn,F6=_Q(kQ(__dirname,"./native.js"));EQ(F6)?Cn=OQ:Cn=F6;M6.exports=Cn
});var In=c(function($N,S6){
var I=require('@stdlib/number/float64/base/to-float32/dist'),FQ=require('@stdlib/math/base/special/floor/dist'),MQ=128;function Gn(n,e,a,i){var r,u,v,s,o,t,f,q,m,p,l,j,g;if(n<=0)return 0;if(n===1||a===0)return e[i];if(r=i,n<8){for(l=0,g=0;g<n;g++)l=I(l+e[r]),r+=a;return l}if(n<=MQ){for(u=e[r],v=e[r+a],s=e[r+2*a],o=e[r+3*a],t=e[r+4*a],f=e[r+5*a],q=e[r+6*a],m=e[r+7*a],r+=8*a,p=n%8,g=8;g<n-p;g+=8)u=I(u+e[r]),v=I(v+e[r+a]),s=I(s+e[r+2*a]),o=I(o+e[r+3*a]),t=I(t+e[r+4*a]),f=I(f+e[r+5*a]),q=I(q+e[r+6*a]),m=I(m+e[r+7*a]),r+=8*a;for(l=I(I(I(u+v)+I(s+o))+I(I(t+f)+I(q+m))),g;g<n;g++)l=I(l+e[r]),r+=a;return l}return j=FQ(n/2),j-=j%8,I(Gn(j,e,a,r)+Gn(n-j,e,a,r+j*a))}S6.exports=Gn
});var P6=c(function(hN,Z6){
var TQ=require('@stdlib/number/float64/base/to-float32/dist'),SQ=In();function ZQ(n,e,a){var i,r,u;if(n<=0)return 0;if(n===1||a===0)return e[0];if(a<0?i=(1-n)*a:i=0,n<8){for(r=0,u=0;u<n;u++)r=TQ(r+e[i]),i+=a;return r}return SQ(n,e,a,i)}Z6.exports=ZQ
});var B6=c(function(YN,L6){
var PQ=require('@stdlib/utils/define-nonenumerable-read-only-property/dist'),A6=P6(),AQ=In();PQ(A6,"ndarray",AQ);L6.exports=A6
});var I6=c(function(XN,G6){
var LQ=require("path").join,BQ=require('@stdlib/utils/try-require/dist'),CQ=require('@stdlib/assert/is-error/dist'),GQ=B6(),Kn,C6=BQ(LQ(__dirname,"./native.js"));CQ(C6)?Kn=GQ:Kn=C6;G6.exports=Kn
});var V6=c(function(dN,K6){
var y=require('@stdlib/utils/define-read-only-property/dist'),w={};y(w,"dapx",No());y(w,"dapxsum",Rf());y(w,"dapxsumkbn",Ir());y(w,"dapxsumkbn2",Pf());y(w,"dapxsumors",Df());y(w,"dapxsumpw",Xf());y(w,"dasumpw",vq());y(w,"dcusum",Mq());y(w,"dcusumkbn",zr());y(w,"dcusumkbn2",Iq());y(w,"dcusumors",$q());y(w,"dcusumpw",ac());y(w,"dfill",cc());y(w,"dnanasum",Cc());y(w,"dnanasumors",Qr());y(w,"dnannsum",im());y(w,"dnannsumkbn",Ur());y(w,"dnannsumkbn2",jm());y(w,"dnannsumors",Tm());y(w,"dnannsumpw",Vm());y(w,"dnansum",t1());y(w,"dnansumkbn",hr());y(w,"dnansumkbn2",y1());y(w,"dnansumors",A1());y(w,"dnansumpw",H1());y(w,"drev",x1());y(w,"dsapxsum",jl());y(w,"dsapxsumpw",xr());y(w,"dsnannsumors",Tl());y(w,"dsnansum",$l());y(w,"dsnansumors",np());y(w,"dsnansumpw",Nr());y(w,"dsort2hp",wp());y(w,"dsort2ins",Pp());y(w,"dsort2sh",Jp());y(w,"dsorthp",u2());y(w,"dsortins",p2());y(w,"dsortsh",M2());y(w,"dssum",U2());y(w,"dssumors",ej());y(w,"dssumpw",ie());y(w,"dsum",kj());y(w,"dsumkbn",ve());y(w,"dsumkbn2",Aj());y(w,"dsumors",Hj());y(w,"dsumpw",dj());y(w,"gapx",ig());y(w,"gapxsum",wg());y(w,"gapxsumkbn",qe());y(w,"gapxsumkbn2",Fg());y(w,"gapxsumors",Lg());y(w,"gapxsumpw",Vg());y(w,"gasumpw",Wg());y(w,"gcusum",sb());y(w,"gcusumkbn",le());y(w,"gcusumkbn2",lb());y(w,"gcusumors",Rb());y(w,"gcusumpw",Mb());y(w,"gfill",Cb());y(w,"gfillBy",Jb());y(w,"gnannsumkbn",rw());y(w,"gnansum",gw());y(w,"gnansumkbn",be());y(w,"gnansumkbn2",Fw());y(w,"gnansumors",Cw());y(w,"gnansumpw",Hw());y(w,"grev",Xw());y(w,"gsort2hp",sy());y(w,"gsort2ins",jy());y(w,"gsort2sh",Oy());y(w,"gsorthp",Gy());y(w,"gsortins",Uy());y(w,"gsortsh",rR());y(w,"gsum",pR());y(w,"gsumkbn",Fe());y(w,"gsumkbn2",kR());y(w,"gsumors",SR());y(w,"gsumpw",CR());y(w,"sapx",UR());y(w,"sapxsum",ck());y(w,"sapxsumkbn",Pe());y(w,"sapxsumkbn2",kk());y(w,"sapxsumors",Ak());y(w,"sapxsumpw",Dk());y(w,"sasumpw",dk());y(w,"scusum",b3());y(w,"scusumkbn",Be());y(w,"scusumkbn2",T3());y(w,"scusumors",K3());y(w,"scusumpw",h3());y(w,"sdsapxsum",m_());y(w,"sdsapxsumpw",Ke());y(w,"sdsnansum",A_());y(w,"sdsnansumpw",Ve());y(w,"sdssum",X_());y(w,"sdssumpw",ze());y(w,"sfill",v4());y(w,"snansum",S4());y(w,"snansumkbn",He());y(w,"snansumkbn2",D4());y(w,"snansumors",N4());y(w,"snansumpw",o8());y(w,"srev",w8());y(w,"ssort2hp",L8());y(w,"ssort2ins",U8());y(w,"ssort2sh",uE());y(w,"ssorthp",gE());y(w,"ssortins",SE());y(w,"ssortsh",DE());y(w,"ssum",t6());y(w,"ssumkbn",Xe());y(w,"ssumkbn2",b6());y(w,"ssumors",T6());y(w,"ssumpw",I6());K6.exports=w
});var H6=c(function(xN,D6){
var IQ=require('@stdlib/utils/define-read-only-property/dist'),z6={};IQ(z6,"base",V6());D6.exports=z6
});var W6=c(function(NN,U6){
var J6=require('@stdlib/assert/is-ndarray-like/dist'),Q6=require('@stdlib/assert/is-collection/dist'),Ne=require('@stdlib/assert/is-float64array/dist'),ra=require('@stdlib/assert/is-float32array/dist'),Vn=require('@stdlib/string/format/dist'),KQ=Mr().ndarray,VQ=Pr().ndarray,ea=Ma().ndarray;function zQ(n,e){var a,i,r,u,v,s,o,t;if(v=J6(n),o=J6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=Ne(n.data),i=a?!1:ra(n.data);else if(v===!1&&Q6(n))a=Ne(n),i=a?!1:ra(n);else throw new TypeError(Vn('0G93T',n));if(t)r=Ne(e.data),u=r?!1:ra(e.data);else if(o===!1&&Q6(e))r=Ne(e),u=r?!1:ra(e);else throw new TypeError(Vn('0G93U',e));if(n.length!==e.length)throw new RangeError(Vn('0G93S',n.length,e.length));return s&&t?a&&r?KQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):i&&u?VQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):ea(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset):s?ea(n.length,n.data,n.strides[0],n.offset,e,1,0):t?ea(n.length,n,1,0,e.data,e.strides[0],e.offset):ea(n.length,n,1,0,e,1,0)}U6.exports=zQ
});var h6=c(function(rrr,$6){
var DQ=W6();$6.exports=DQ
});var x6=c(function(err,d6){
var Y6=require('@stdlib/assert/is-ndarray-like/dist'),X6=require('@stdlib/assert/is-collection/dist'),aa=require('@stdlib/assert/is-float64array/dist'),ua=require('@stdlib/assert/is-float32array/dist'),zn=require('@stdlib/string/format/dist'),HQ=Sr().ndarray,JQ=Cr().ndarray,ia=Aa().ndarray;function QQ(n,e){var a,i,r,u,v,s,o,t;if(v=Y6(n),o=Y6(e),s=v&&n.ndims===1&&n.strides.length===1,t=o&&e.ndims===1&&e.strides.length===1,s)a=aa(n.data),i=a?!1:ua(n.data);else if(v===!1&&X6(n))a=aa(n),i=a?!1:ua(n);else throw new TypeError(zn('0G93T',n));if(t)r=aa(e.data),u=r?!1:ua(e.data);else if(o===!1&&X6(e))r=aa(e),u=r?!1:ua(e);else throw new TypeError(zn('0G93U',e));if(n.length!==e.length)throw new RangeError(zn('0G93S',n.length,e.length));return s&&t?a&&r?(HQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):i&&u?(JQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):(ia(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e):s?(ia(n.length,n.data,n.strides[0],n.offset,e,1,0),e):t?(ia(n.length,n,1,0,e.data,e.strides[0],e.offset),e):(ia(n.length,n,1,0,e,1,0),e)}d6.exports=QQ
});var rO=c(function(arr,N6){
var UQ=x6();N6.exports=UQ
});var uO=c(function(urr,aO){
var eO=require('@stdlib/assert/is-float32vector-like/dist'),WQ=Pr().ndarray,Dn=require('@stdlib/string/format/dist');function $Q(n,e){if(!eO(n))throw new TypeError(Dn('0G9DA',n));if(!eO(e))throw new TypeError(Dn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Dn('0G93S',n.length,e.length));return WQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset)}aO.exports=$Q
});var nO=c(function(irr,iO){
var hQ=uO();iO.exports=hQ
});var tO=c(function(nrr,sO){
var vO=require('@stdlib/assert/is-float32vector-like/dist'),Hn=require('@stdlib/string/format/dist'),YQ=Cr().ndarray;function XQ(n,e){if(!vO(n))throw new TypeError(Hn('0G9DA',n));if(!vO(e))throw new TypeError(Hn('0G9DB',e));if(n.length!==e.length)throw new RangeError(Hn('0G93S',n.length,e.length));return YQ(n.length,n.data,n.strides[0],n.offset,e.data,e.strides[0],e.offset),e}sO.exports=XQ
});var fO=c(function(vrr,oO){
var dQ=tO();oO.exports=dQ
});var nr=require('@stdlib/utils/define-read-only-property/dist'),X={};nr(X,"base",Ao());nr(X,"ddot",Io());nr(X,"dswap",Ho());nr(X,"ext",H6());nr(X,"gdot",h6());nr(X,"gswap",rO());nr(X,"sdot",nO());nr(X,"sswap",fO());module.exports=X;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
