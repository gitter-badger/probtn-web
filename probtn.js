(function(e){try{var t="Unbekannt";var n="";var r="";var i="";if(screen.width){r=screen.width?screen.width:"";i=screen.height?screen.height:"";n+=""+r+" x "+i}var s=navigator.appVersion;var o=navigator.userAgent;var u=navigator.appName;var a=""+parseFloat(navigator.appVersion);var f=parseInt(navigator.appVersion,10);var l,c,h;if((c=o.indexOf("Opera"))!=-1){u="Opera";a=o.substring(c+6);if((c=o.indexOf("Version"))!=-1){a=o.substring(c+8)}}else if((c=o.indexOf("MSIE"))!=-1){u="Microsoft Internet Explorer";a=o.substring(c+5)}else if((c=o.indexOf("Chrome"))!=-1){u="Chrome";a=o.substring(c+7)}else if((c=o.indexOf("Safari"))!=-1){u="Safari";a=o.substring(c+7);if((c=o.indexOf("Version"))!=-1){a=o.substring(c+8)}}else if((c=o.indexOf("Firefox"))!=-1){u="Firefox";a=o.substring(c+8)}else if((l=o.lastIndexOf(" ")+1)<(c=o.lastIndexOf("/"))){u=o.substring(l,c);a=o.substring(c+1);if(u.toLowerCase()==u.toUpperCase()){u=navigator.appName}}if((h=a.indexOf(";"))!=-1)a=a.substring(0,h);if((h=a.indexOf(" "))!=-1)a=a.substring(0,h);f=parseInt(""+a,10);if(isNaN(f)){a=""+parseFloat(navigator.appVersion);f=parseInt(navigator.appVersion,10)}var p=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(s);var d=navigator.cookieEnabled?true:false;if(typeof navigator.cookieEnabled=="undefined"&&!d){document.cookie="testcookie";d=document.cookie.indexOf("testcookie")!=-1?true:false}var v=t;var m=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];try{for(var g in m){var y=m[g];if(y.r.test(o)){v=y.s;break}}var b=t;if(/Windows/.test(v)){b=/Windows (.*)/.exec(v)[1];v="Windows"}switch(v){case"Mac OS X":b=/Mac OS X (10[\.\_\d]+)/.exec(o)[1];break;case"Android":b=/Android ([\.\_\d]+)/.exec(o)[1];break;case"iOS":b=/OS (\d+)_(\d+)_?(\d+)?/.exec(s);b=b[1]+"."+b[2]+"."+(b[3]|0);break}}catch(w){v=t}e.jscd={screen:n,screenWidth:r,screenHeight:i,browser:u,browserVersion:a,mobile:p,os:v,osVersion:b,cookies:d}}catch(w){}})(this);(function(e){function t(){var e="1234";if(i("probtnId")!=null){}else{var t=new Date;t=t.getTime();e=t.toString()+"-"+navigator.userAgent.toString().hashCode();r("probtnId",e,365)}e=i("probtnId");return e}function r(e,t,n){var r="";if(n){var i=new Date;i.setTime(i.getTime()+n*24*60*60*1e3);r="; expires="+i.toGMTString()}document.cookie=e+"="+t+r+"; path=/"}function i(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function s(e){r(e,"",-1)}var n="b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b";String.prototype.hashCode=function(){var e=0,t,n;if(this.length==0)return e;for(t=0,l=this.length;t<l;t++){n=this.charCodeAt(t);e=(e<<5)-e+n;e|=0}return e};e.fn.StartButton=function(r){function a(){var t={width:window.availWidth,height:window.availHeight};if(window.jscd.browser==="Microsoft Internet Explorer"){t.overflow="auto"}e("body").css(t)}function f(){return e(window).width()>e(window).height()}function l(){console.log(s.CloseImage);var t=e("<img/>",{id:"closeButton",src:s.CloseImage,"class":"close_pro_button_normal",css:{position:"absolute",display:"none"}}).prependTo("body");t.active=false;t.rect={};t.css({"-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"transition-property":"opacity, width, height, left, top","timing-function":"linear","-webkit-transition-property":"opacity, width, height, left, top","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height, left, top","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height, left, top","-o-timing-function":"linear"});t.center=function(){var t=e("body");var n=s.ClosePosition.X;var r=s.ClosePosition.Y;this.css("top",(t.innerHeight()-this.height())*r+e(window).scrollTop()+"px");this.css("left",(t.innerWidth()-this.width())*n+e(window).scrollLeft()+"px")};t.show=function(){var e=this;e.center();setTimeout(function(){e.stop(true,true).fadeIn(s.CloseShowDuration*1e3)},s.CloseShowDelay*1e3)};t.hide=function(){var e=this;setTimeout(function(){e.stop(true,true).fadeOut(s.CloseHideDuration*1e3)},s.CloseHideDelay*1e3)};t.setTransitionDuration=function(e){var t=e+"s";this.css({"transition-duration":t,"-webkit-transition-duration":t,"-moz-transition-duration":t,"-o-transition-duration":t})};t.overlayActive=function(){var e=this;var t=e.position();e.setTransitionDuration(s.CloseActiveDuration);setTimeout(function(){e.css({opacity:s.CloseActiveOpacity,width:s.CloseActiveSize.W,height:s.CloseActiveSize.H,left:t.left-(s.CloseActiveSize.W-s.CloseSize.W)/2,top:t.top-(s.CloseActiveSize.H-s.CloseSize.H)/2})},s.CloseActiveDelay*1e3)};t.overlayUnactive=function(){var t=this;var n=e("body");var r=(n.innerHeight()-u.height())/2+e(window).scrollTop();var i=(n.innerWidth()-u.width())/2+e(window).scrollLeft();t.setTransitionDuration(s.CloseUnactiveDuration);setTimeout(function(){var e={opacity:s.CloseOpacity,width:s.CloseSize.W,height:s.CloseSize.H,left:i,top:r};t.css(e)},s.CloseUnactiveDelay*1e3)};t.setTransitionDuration(s.CloseActiveDuration);t.center();return t}function c(t){var n=e("#pizzabtn_wrapper");var r={width:"auto",height:"auto",position:"fixed"};n.css(r);try{t()}catch(i){}}function h(t){var n=e("#pizzabtn_wrapper");var r={width:e(window).width(),height:e(window).height(),position:"fixed"};n.css(r);try{if(e("#pizzabtn").offset().left-e(window).scrollLeft()>n.width()){var i=n.width()-e("#pizzabtn").width();e("#pizzabtn").css({left:i+"px"})}}catch(s){}try{if(e("#pizzabtn").offset().top-e(window).scrollTop()>n.height()){var o=n.height()-e("#pizzabtn").height();e("#pizzabtn").css({top:o+"px"})}}catch(s){}try{t()}catch(s){}}function p(){var r=e("<div/>",{id:"pizzabtn_wrapper"}).prependTo("body");var i={width:e(window).width(),height:e(window).height(),position:"fixed"};console.dir(i);r.css(i);var u=e("#pizzabtn");if(u.length===0){u=e("<div/>",{id:"pizzabtn"}).prependTo(r)}u.addClass("pizzabtn_normal");u.css({display:"none","-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"-webkit-transition":"top, left "+s.buttonAnimationTimeAfterFancybox+"ms linear","-moz-transition":"top, left "+s.buttonAnimationTimeAfterFancybox+"ms linear","-ms-transition":"top, left "+s.buttonAnimationTimeAfterFancybox+"ms linear","-o-transition":"top, left "+s.buttonAnimationTimeAfterFancybox+"ms linear",transition:"top, left "+s.buttonAnimationTimeAfterFancybox+"ms linear",width:s.ButtonSize.W,height:s.ButtonSize.H});var f=e("<img/>",{id:"pizzabtnImg",src:s.ButtonImage,css:{width:s.ButtonSize.W,height:s.ButtonSize.H,opacity:s.ButtonOpacity,"transition-property":"opacity, width, height","timing-function":"linear","-webkit-transition-property":"opacity, width, height","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height","-o-timing-function":"linear"}}).appendTo(pizzabtn);var l=e("<span/>",{id:"hintText",css:{opacity:0,"transition-property":"opacity","timing-function":"linear","-webkit-transition-property":"opacity","-webkit-timing-function":"linear","-moz-transition-property":"opacity","-moz-timing-function":"linear","-o-transition-property":"opacity","-o-timing-function":"linear","transition-duration":s.HintShowDuration+"s","-webkit-transition-duration":s.HintShowDuration+"s","-moz-transition-duration":s.HintShowDuration+"s","-o-transition-duration":s.HintShowDuration+"s"},html:s.HintText.replace(/ /g,"&nbsp;")}).appendTo(pizzabtn);pizzabtn.hintTextActive=false;c();l.makeInvisible=function(){this.css({"transition-duration":s.HintHideDuration+"s","-webkit-transition-duration":s.HintHideDuration+"s","-moz-transition-duration":s.HintHideDuration+"s","-o-transition-duration":s.HintHideDuration+"s"});this.css("opacity",0)};u.center=function(){var t=e("#pizzabtn_wrapper");this.css("top",(t.innerHeight()-this.height())/2+e(window).scrollTop()+"px");this.css("left",(t.innerWidth()-this.width())/2+e(window).scrollLeft()+"px")};u.show=function(){var e=this;setTimeout(function(){e.stop(true,true).fadeIn(s.ButtonShowDuration*1e3)},s.ButtonShowDelay*1e3)};u.hide=function(){var e=jQuery("#pizzabtn");setTimeout(function(){e.stop(true,true).fadeOut(s.ButtonHideDuration*1e3)},s.ButtonHideDelay*1e3)};window.proBtn={};window.proBtn.hide=u.hide;window.proBtn.hideContent=function(){e.fancybox.close()};window.proBtn.performAction=function(){if(s.CampaignID!==null){e.getJSON("https://pizzabtn.herokuapp.com/1/functions/performAction?DeviceType=web&DeviceUID="+t()+"&X-ProBtn-Token="+n+"&CampaignID="+s.CampaignID+"&random="+Math.random()+"&callback=?",function(e){console.log(e)})}};u.dragAnimate=function(){f.attr("src",s.ButtonDragImage);setTimeout(function(){f.css({"transition-duration":s.ButtonDragDuration+"s","-webkit-transition-duration":s.ButtonDragDuration+"s","-moz-transition-duration":s.ButtonDragDuration+"s","-o-transition-duration":s.ButtonDragDuration+"s"});f.css({opacity:s.ButtonDragOpacity,width:s.ButtonDragSize.W,height:s.ButtonDragSize.H})},s.ButtonDragDelay*1e3)};u.undragAnimate=function(){f.attr("src",s.ButtonImage);setTimeout(function(){f.css({"transition-duration":s.ButtonUndragDuration+"s","-webkit-transition-duration":s.ButtonUndragDuration+"s","-moz-transition-duration":s.ButtonUndragDuration+"s","-o-transition-duration":s.ButtonUndragDuration+"s"});f.css({opacity:s.ButtonOpacity,width:s.ButtonSize.W,height:s.ButtonSize.H})},s.ButtonUndragDelay*1e3)};u.showHint=function(){var t=this;setTimeout(function(){l.css(o);t.hintTextActive=true;var n=(e("#hintText").width()-s.ButtonSize.W)/2;e("#hintText").css("margin-left","-"+n+"px")},s.HintLaunchDelay*1e3)};u.hideHint=function(){var e=this;l.makeInvisible();setTimeout(function(){e.animateDuringHintHide()},100);e.hintTextActive=false};u.hideHintDelay=function(){setTimeout(function(){l.makeInvisible()},s.HintLaunchDuration*1e3)};u.animateDuringHintHide=function(){var e=this;var t=l.outerWidth();var n=(t-s.ButtonSize.W)/2;if(n>0){e.css({width:s.ButtonSize.W,height:s.ButtonSize.H,left:e.position().left+n})}};try{var h=(window.innerHeight-s.ButtonSize.H/2)*s.ButtonPosition.Y;var p=(e("body").innerWidth()-s.ButtonSize.W/2)*s.ButtonPosition.X+e(window).scrollLeft()+"px";u.css({left:p,top:h,position:"absolute"})}catch(d){}a();return u}var i="1.0";var s=e.extend({OpenExternal:false,CampaignID:null,NeverClose:true,MaxHeight:0,MaxWidth:0,type:"iframe",domain:"",fancyboxJsPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",fancyboxCssPath:"https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",mainStyleCss:"style.css",jqueryPepPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",buttonAnimationTimeAfterFancybox:400,HideAfterFirstShow:false,LoadFancyboxCSS:true,ContentURL:"http://app.ecwid.com/jsp/2557212/m",BaseInsets:{T:4,B:4,L:4,R:4},ButtonEnabled:false,ButtonVisible:false,ButtonOpenInsets:{T:32,B:32,L:32,R:32},ButtonPosition:{X:.5,Y:.5},ButtonSize:{W:64,H:64},ButtonDragSize:{W:68,H:68},ButtonOpenSize:{W:64,H:64},ButtonInactiveSize:{W:64,H:64},ButtonOpacity:.8,ButtonDragOpacity:1,ButtonOpenOpacity:1,ButtonInactiveOpacity:.5,ButtonImage:"https://pizzabtn.herokuapp.com/images/probtn/gray.png",ButtonDragImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonOpenImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonInactiveImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ClosePosition:{X:.5,Y:.5},CloseSize:{W:64,H:64},CloseActiveSize:{W:72,H:72},CloseOpacity:.6,CloseActiveOpacity:1,CloseImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",CloseActiveImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",HintInsets:{T:4,B:4,L:4,R:4},HintLabelInsets:{T:4,B:4,L:4,R:4},HintImageInsets:{T:8,B:8,L:8,R:8},HintText:"Press me",HintFont:{Family:"Arial",Size:18},HintFontColor:{R:1,G:1,B:1,A:1},HintOpacity:.8,HintImage:"https://pizzabtn.herokuapp.com/images/probtn/hint.png",HintArrowSize:{W:8,H:8},HintArrowOffset:{T:0,B:0,L:0,R:0},HintArrowImageT:"",HintArrowImageB:"",HintArrowImageL:"",HintArrowImageR:"",ContentSize:{X:"90%",Y:"90%"},IsManualSize:false,ContentInsets:{T:-2,B:-2,L:-2,R:-2},ContentWebViewInsets:{T:12,B:12,L:12,R:12},ContentImageInsets:{T:32,B:32,L:32,R:32},ContentOpacity:1,ContentBackOpacity:1,ContentBackColor:{R:0,G:0,B:0,A:1},ContentActivityColor:{R:0,G:0,B:0,A:1},ContentImage:"",ContentArrowSize:{W:14,H:14},ContentArrowOffset:{T:8,B:8,L:9,R:9},ContentArrowImageT:"",ContentArrowImageB:"",ContentArrowImageL:"",ContentArrowImageR:"",DefaultDuration:.1,DefaultDelay:0,OpenDuration:.2,OpenDelay:.5,CloseDuration:.2,CloseDelay:.5,ButtonShowDuration:.2,ButtonShowDelay:0,ButtonHideDuration:.2,ButtonHideDelay:0,ButtonDragDuration:.1,ButtonDragDelay:0,ButtonUndragDuration:.2,ButtonUndragDelay:0,ButtonInactiveDuration:.1,ButtonInactiveDelay:5,ButtonInertiaSpeed:512,ButtonInertiaSpeedMin:32,ButtonInertiaSpeedMax:1024,ButtonInertiaFactor:6,CloseShowDuration:.1,CloseShowDelay:0,CloseHideDuration:.2,CloseHideDelay:0,CloseActiveDuration:.1,CloseActiveDelay:0,CloseUnactiveDuration:.1,CloseUnactiveDelay:0,HintLaunchDuration:3e4,HintLaunchDelay:0,HintShowDuration:.1,HintShowDelay:0,HintHideDuration:.2,HintHideDelay:0,ContentShowDuration:.1,ContentShowDelay:0,ContentHideDuration:.2,ContentHideDelay:0,HideInFrame:true},r);var o={opacity:s.HintOpacity,"font-size":s.HintFont.Size,"font-family":s.HintFont.Family,color:"white",padding:"4px",background:"url('"+s.HintImage+"')"};if(s.HintText==""||s.HintText==null){o.display="none";o.opacity="0.0"}var u=l();e(document).ready(function(){function w(t){h(function(){c();if(e.fancybox.isOpen){b=true;e.fancybox.close()}})}function x(){if(s.HideInFrame===true&&window.self!==window.top){}else{T()}}function T(){function n(){try{if(typeof e.pep.toggleAll=="function"){r()}else{e.getScript(s.jqueryPepPath,r)}}catch(t){e.getScript(s.jqueryPepPath,r)}}function r(){function r(){var n=f()&&window.jscd.mobile,r=t.position(),i=r.top,o=r.left,u=window.innerWidth,a=window.innerHeight,l="0px",h="0px",p=(u+s.ButtonSize.W)/2,d=(a+s.ButtonSize.H)/2;if(d<=i){l=a-s.ButtonSize.H+"px"}if(p<=o){h=u-s.ButtonSize.W+"px"}var v=n?[s.ButtonSize.H/4,s.ButtonSize.H/4+5,s.ButtonSize.H/4,s.ButtonSize.H/4+5]:[s.ButtonSize.H+5,s.ButtonSize.H/2,s.ButtonSize.H+5,s.ButtonSize.H/2];if(window.jscd.mobile&&s.ButtonSize.H>70){v=[s.ButtonSize.H/8,s.ButtonSize.H/8,s.ButtonSize.H/8,s.ButtonSize.H/8]}else{if(s.ButtonSize.H>70){v=[70,70,70,70]}}var m={property:n?"left":"top",currentValue:n?o:i,finishValue:n?h:l};var g=e("#pizzabtn").offset().left;var y=e("#pizzabtn").offset().top;C("ContentShowed",1);e.pep.toggleAll(false);var b={href:s.ContentURL,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",type:"iframe",autoCenter:true,scrolling:"no",margin:v,height:"100%",minWidth:100,minHeight:100,iframe:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",preload:false,scrolling:"yes"},helpers:{overlay:{locked:false}},beforeLoad:function(){e("#hintText").hide();e(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms");t.css(m.property,m.finishValue);if(m.property=="top"){t.css("left",g+"px")}else{t.css("top",y+"px")}if(window.jscd.os==="iOS"){e(document.body).bind("touchmove",function(e){e.preventDefault();e.stopPropagation();e.returnValue=false})}e("html").css("overflow","hidden")},afterShow:function(){e(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms");e(".fancybox-iframe").first().contents().find("html").css("visibility","visible !important");t.bind("click",e.fancybox.close)},afterClose:function(){c();if(window.jscd.os==="iOS"){e(document.body).unbind("touchmove")}e("html").css("overflow","auto");t.unbind("click");e.pep.toggleAll(true);t.css(m.property,m.currentValue+"px");if(s.HideAfterFirstShow==true){C("Closed",1);C("Hidded",1);t.hide()}}};if(s.IsManualSize===true){b.width=s.ContentSize.X;b.height=s.ContentSize.Y}else{}if(s.MaxWidth>0){b.maxWidth=s.MaxWidth}if(s.MaxHeight>0){b.maxHeight=s.MaxHeight}if(s.OpenExternal===true){c(function(){t.css(m.property,m.finishValue);if(m.property=="top"){t.css("left",g+"px")}else{t.css("top",y+"px")}if(window.jscd.os==="iOS"){e(document.body).bind("touchmove",function(e){e.preventDefault();e.stopPropagation();e.returnValue=false})}if(window.jscd.os==="iOS"){e(document.body).unbind("touchmove")}e("html").css("overflow","auto");t.unbind("click");e.pep.toggleAll(true);window.open(s.ContentURL,"_blank")})}else{e.fancybox.open(b)}}C();C("Showed",1);L();if(s.ButtonEnabled&&s.ButtonVisible){t.show()}t.hideHintDelay();t.showHint();var n=false;t.moved=false;t.pep({useCSSTranslation:false,constrainTo:"parent",cssEaseString:"cubic-bezier(0, .50, .50, 1)",cssEaseDuration:600,velocityMultiplier:1,startThreshold:[1,1],droppable:"#closeButton",initiate:a,start:function(){h(function(){if(t.moved==false){t.dragAnimate()}t.moved=true;if(t.hintTextActive){t.hideHint()}if(s.NeverClose==false){u.show()}C("Moved",1);c()})},drag:function(){h(function(){var r=t[0].getBoundingClientRect();var i=u[0].getBoundingClientRect();if(r.top+r.height>e(window).height()){}var s=!(r.right<i.left||r.left>i.right||r.bottom<i.top||r.top>i.bottom);if(s&&i.width!==0){if(!n){u.overlayActive();n=true}}else{if(n){u.overlayUnactive();n=false}}})},stop:function(){if(!t.moved){h(function(){r()})}else{c();if(n){C("Closed",1);C("Hidded",1);t.hide()}else{t.undragAnimate()}}u.hide();t.moved=false;n=false}})}e("head").append('<link rel="stylesheet" href="'+s.mainStyleCss+'" type="text/css" />');e("head").append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: scroll !important; } </style>");e("#closeButton").attr("src",s.CloseImage);if(s.NeverClose==false){e("head").append(e("<style/>",{id:"probtn_style",type:"text/css",html:["#pizzabtn.pizzabtn_normal { display: block; clear: both; position: device-fixed !important; }",".close_pro_button_normal{ width:"+s.CloseSize.W+"px; height:"+s.CloseSize.H+"px; opacity:"+s.CloseOpacity+"; display: block; clear: both; }"].join("\n")}))}var t=p();if(typeof e.fancybox=="function"){n()}else{e.getScript(s.fancyboxJsPath,n)}}function N(t,n,r,i){e.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateUserStatistic?BundleID="+i+"&Version=1.0&DeviceType=web&DeviceUID="+r+"&localDomain="+d+"&Statistic="+'{"'+t+'": "'+n+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function C(e,n,r){var i="1234";if(e==""||e==null){e="Opened"}if(n==""||n==null){n=1}i=t();if(r==""||r==null){N(e,n,i,l)}else{k(e,n,i,l)}}function k(t,n,r,i){e.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateCustomStatistic?BundleID="+i+"&DeviceType=web&Version=1.0&DeviceUID="+r+"&localDomain="+d+"&Statistic="+'{"'+t+'": "'+n+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function L(){try{C("Resolution",jscd.screen,1);C("Browser",jscd.browser,1);C("BrowserVersion",jscd.browserVersion,1);C("OS",jscd.os+" "+jscd.osVersion,1)}catch(e){}}var l=document.domain.replace("www.","");if(l==""||l==null){l="example.com"}var d=l;if(s.domain!=""&&s.domain!=null){l=s.domain}else{}var v="onorientationchange"in window;var m=v?"orientationchange":"resize";var g=window.innerHeight;var y=window.innerWidth;var b=false;e(window).bind(m,w);var E=null;var S="";e.get("http://ip-api.com/json",function(u){var a=u.as.toLowerCase();if(a.indexOf("mts")>-1){E="MTS RUS"}if(a.indexOf("beeline")>-1){E="Beeline"}if(a.indexOf("vimpel")>-1){E="Beeline"}if(E===null){S="https://pizzabtn.herokuapp.com/1/functions/getClientSettings?BundleID="+l+"&DeviceType=web&DeviceUID="+t()+"&Location[Longitude]=0&Location[Latitude]=0&Version="+i+"&X-ProBtn-Token="+n+"&random="+Math.random()+"&callback=?"}else{S="https://pizzabtn.herokuapp.com/1/functions/getClientSettings?BundleID="+l+"&DeviceType=web&DeviceUID="+t()+"&Location[Longitude]=0&Location[Latitude]=0&Version="+i+"&X-ProBtn-Token="+n+"&random="+Math.random()+"&MobileOperator="+E+"&callback=?"}e.getJSON(S,function(t){try{try{t.result.HintText=HintText;console.log("HintText - "+HintText)}catch(n){console.log(n.toString())}e.extend(s,t.result,r);if(s.LoadFancyboxCSS===true){e("head").append('<link rel="stylesheet" href="'+s.fancyboxCssPath+'" type="text/css" />')}o={opacity:s.HintOpacity,"font-size":s.HintFont.Size,"font-family":s.HintFont.Family,color:"rgb("+s.HintFontColor.R*100+"%, "+s.HintFontColor.G*100+"%, "+s.HintFontColor.B*100+"%)","padding-left":s.HintLabelInsets.L,"padding-top":s.HintLabelInsets.T,"padding-right":s.HintLabelInsets.R,"padding-bottom":s.HintLabelInsets.B,background:"url('"+s.HintImage+"')"};if(s.HintText==""||s.HintText==null){o.display="none";o.opacity="0.0"}}catch(n){}}).done(function(){}).fail(function(e){console.log("Fail:");console.dir(e)}).always(x)},"jsonp");})}})(jQuery)