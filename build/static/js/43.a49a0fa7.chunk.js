"use strict";(self.webpackChunkstudy_zoom_sdk=self.webpackChunkstudy_zoom_sdk||[]).push([[43],{5043:function(e,o,t){t.r(o);var s=t(4165),n=t(1413),r=t(5861),u=t(2791),c=t(7689),i=t(6826),l=t(184);i.ZoomMtg.setZoomJSLib("https://source.zoom.us/2.13.0/lib","/av"),i.ZoomMtg.preLoadWasm(),i.ZoomMtg.prepareWebSDK(),i.ZoomMtg.i18n.load("en-US"),i.ZoomMtg.i18n.reload("en-US");var a=function(){var e=(0,c.TH)(),o=function(e){var o=e.meetingNumber,t=e.role,s=e.sdkKey,n=void 0===s?"":s,r=e.sdkSecret,u=void 0===r?"":r;return new Promise((function(e,s){i.ZoomMtg.generateSDKSignature({meetingNumber:o,role:t,sdkKey:n,sdkSecret:u,success:function(o){e(null===o||void 0===o?void 0:o.result)},error:function(e){return s(e)}})}))},t=function(e){var o=e.meetingNumber,t=e.passWord,s=e.userName,n=e.userEmail,r=e.sdkKey,u=void 0===r?"":r,c=e.signature;document.getElementById("zmmtg-root").style.display="block",i.ZoomMtg.init({leaveUrl:"http://localhost:3000",success:function(e){console.log(e,c),i.ZoomMtg.join({signature:c,sdkKey:u,meetingNumber:o,passWord:t,userName:s,userEmail:n,success:function(e){console.log(e)},error:function(e){console.log(e)}})},error:function(e){console.log(e)}})},a=function(){var u=(0,r.Z)((0,s.Z)().mark((function r(){var u,c,i;return(0,s.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o(null===e||void 0===e||null===(u=e.state)||void 0===u?void 0:u.config);case 3:i=s.sent,t((0,n.Z)((0,n.Z)({},null===e||void 0===e||null===(c=e.state)||void 0===c?void 0:c.config),{},{signature:i})),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.error(s.t0);case 10:case"end":return s.stop()}}),r,null,[[0,7]])})));return function(){return u.apply(this,arguments)}}();return(0,u.useEffect)((function(){var o;return console.log("MeetingPage params",null===e||void 0===e||null===(o=e.state)||void 0===o?void 0:o.config),a(),function(){document.getElementById("zmmtg-root").style.display="none"}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("link",{type:"text/css",rel:"stylesheet",href:"https://source.zoom.us/2.13.0/css/bootstrap.css"}),(0,l.jsx)("link",{type:"text/css",rel:"stylesheet",href:"https://source.zoom.us/2.13.0/css/react-select.css"})]})};o.default=(0,u.memo)(a)}}]);
//# sourceMappingURL=43.a49a0fa7.chunk.js.map