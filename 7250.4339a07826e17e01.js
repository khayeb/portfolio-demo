"use strict";(self.webpackChunkportfoliodemo=self.webpackChunkportfoliodemo||[]).push([[7250],{7250:(O,s,e)=>{e.r(s),e.d(s,{mdTransitionAnimation:()=>T});var t=e(962),d=e(191);const T=(P,i)=>{var a,l,r;const c="40px",u="back"===i.direction,E=i.leavingEl,f=(0,d.g)(i.enteringEl),g=f.querySelector("ion-toolbar"),n=(0,t.c)();if(n.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible"),u?n.duration((null!==(a=i.duration)&&void 0!==a?a:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration((null!==(l=i.duration)&&void 0!==l?l:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${c})`,"translateY(0px)").fromTo("opacity",.01,1),g){const o=(0,t.c)();o.addElement(g),n.addAnimation(o)}if(E&&u){n.duration((null!==(r=i.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=(0,t.c)();o.addElement((0,d.g)(E)).onFinish(v=>{1===v&&o.elements.length>0&&o.elements[0].style.setProperty("display","none")}).fromTo("transform","translateY(0px)",`translateY(${c})`).fromTo("opacity",1,0),n.addAnimation(o)}return n}}}]);