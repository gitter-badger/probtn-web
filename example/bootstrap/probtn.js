!function(a){try{var b="Unbekannt",c="",d="",e="";screen.width&&(d=screen.width?screen.width:"",e=screen.height?screen.height:"",c+=""+d+" x "+e);var k,l,m,f=navigator.appVersion,g=navigator.userAgent,h=navigator.appName,i=""+parseFloat(navigator.appVersion),j=parseInt(navigator.appVersion,10);-1!=(l=g.indexOf("Opera"))?(h="Opera",i=g.substring(l+6),-1!=(l=g.indexOf("Version"))&&(i=g.substring(l+8))):-1!=(l=g.indexOf("MSIE"))?(h="Microsoft Internet Explorer",i=g.substring(l+5)):-1!=(l=g.indexOf("Chrome"))?(h="Chrome",i=g.substring(l+7)):-1!=(l=g.indexOf("Safari"))?(h="Safari",i=g.substring(l+7),-1!=(l=g.indexOf("Version"))&&(i=g.substring(l+8))):-1!=(l=g.indexOf("Firefox"))?(h="Firefox",i=g.substring(l+8)):(k=g.lastIndexOf(" ")+1)<(l=g.lastIndexOf("/"))&&(h=g.substring(k,l),i=g.substring(l+1),h.toLowerCase()==h.toUpperCase()&&(h=navigator.appName)),-1!=(m=i.indexOf(";"))&&(i=i.substring(0,m)),-1!=(m=i.indexOf(" "))&&(i=i.substring(0,m)),j=parseInt(""+i,10),isNaN(j)&&(i=""+parseFloat(navigator.appVersion),j=parseInt(navigator.appVersion,10));var n=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(f),o=navigator.cookieEnabled?!0:!1;"undefined"!=typeof navigator.cookieEnabled||o||(document.cookie="testcookie",o=-1!=document.cookie.indexOf("testcookie")?!0:!1);var p=b,q=[{s:"Windows 3.11",r:/Win16/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows ME",r:/Windows ME/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];try{for(var r in q){var s=q[r];if(s.r.test(g)){p=s.s;break}}var t=b;switch(/Windows/.test(p)&&(t=/Windows (.*)/.exec(p)[1],p="Windows"),p){case"Mac OS X":t=/Mac OS X (10[\.\_\d]+)/.exec(g)[1];break;case"Android":t=/Android ([\.\_\d]+)/.exec(g)[1];break;case"iOS":t=/OS (\d+)_(\d+)_?(\d+)?/.exec(f),t=t[1]+"."+t[2]+"."+(0|t[3])}}catch(u){p=b}a.jscd={screen:c,screenWidth:d,screenHeight:e,browser:h,browserVersion:i,mobile:n,os:p,osVersion:t,cookies:o}}catch(u){}}(this),function(a){a.fn.StartButton=function(b){function e(a,b,c){var d="";if(c){var e=new Date;e.setTime(e.getTime()+1e3*60*60*24*c),d="; expires="+e.toGMTString()}document.cookie=a+"="+b+d+"; path=/"}function f(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null}function k(){var b={width:window.availWidth,height:window.availHeight};"Microsoft Internet Explorer"===window.jscd.browser&&(b.overflow="auto"),a("body").css(b)}function m(){return a(window).width()>a(window).height()}function n(){var b=a("<img/>",{id:"closeButton",src:h.CloseImage,"class":"close_pro_button_normal",css:{position:"absolute",display:"none"}}).prependTo("body");return b.active=!1,b.rect={},b.css({"-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"transition-property":"opacity, width, height, left, top","timing-function":"linear","-webkit-transition-property":"opacity, width, height, left, top","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height, left, top","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height, left, top","-o-timing-function":"linear"}),b.center=function(){var b=a("body");this.css("top",(b.innerHeight()-this.height())/2+a(window).scrollTop()+"px"),this.css("left",(b.innerWidth()-this.width())/2+a(window).scrollLeft()+"px")},b.show=function(){var a=this;a.center(),setTimeout(function(){a.stop(!0,!0).fadeIn(1e3*h.CloseShowDuration)},1e3*h.CloseShowDelay)},b.hide=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeOut(1e3*h.CloseHideDuration)},1e3*h.CloseHideDelay)},b.setTransitionDuration=function(a){var b=a+"s";this.css({"transition-duration":b,"-webkit-transition-duration":b,"-moz-transition-duration":b,"-o-transition-duration":b})},b.overlayActive=function(){var a=this,b=a.position();a.setTransitionDuration(h.CloseActiveDuration),setTimeout(function(){a.css({opacity:h.CloseActiveOpacity,width:h.CloseActiveSize.W,height:h.CloseActiveSize.H,left:b.left-(h.CloseActiveSize.W-h.CloseSize.W)/2,top:b.top-(h.CloseActiveSize.H-h.CloseSize.H)/2})},1e3*h.CloseActiveDelay)},b.overlayUnactive=function(){var b=this,c=a("body"),d=(c.innerHeight()-j.height())/2+a(window).scrollTop(),e=(c.innerWidth()-j.width())/2+a(window).scrollLeft();b.setTransitionDuration(h.CloseUnactiveDuration),setTimeout(function(){var a={opacity:h.CloseOpacity,width:h.CloseSize.W,height:h.CloseSize.H,left:e,top:d};b.css(a)},1e3*h.CloseUnactiveDelay)},b.setTransitionDuration(h.CloseActiveDuration),b.center(),b}function o(b){var c=a("#pizzabtn_wrapper"),d={width:"auto",height:"auto",position:"fixed"};c.css(d);try{b()}catch(e){}}function p(b){var c=a("#pizzabtn_wrapper"),d={width:a(window).width(),height:a(window).height(),position:"fixed"};c.css(d);try{if(a("#pizzabtn").offset().left-a(window).scrollLeft()>c.width()){var e=c.width()-a("#pizzabtn").width();a("#pizzabtn").css({left:e+"px"})}}catch(f){}try{if(a("#pizzabtn").offset().top-a(window).scrollTop()>c.height()){var g=c.height()-a("#pizzabtn").height();a("#pizzabtn").css({top:g+"px"})}}catch(f){}try{b()}catch(f){}}function q(){var b=a("<div/>",{id:"pizzabtn_wrapper"}).prependTo("body"),c={width:a(window).width(),height:a(window).height(),position:"fixed"};console.dir(c),b.css(c);var d=a("#pizzabtn");0===d.length&&(d=a("<div/>",{id:"pizzabtn"}).prependTo(b)),d.addClass("pizzabtn_normal"),d.css({display:"none","-webkit-transform":"translateZ(0)","-moz-transform":"translateZ(0)","-ms-transform":"translateZ(0)","-o-transform":"translateZ(0)",transform:"translateZ(0)","-webkit-backface-visibility":"hidden","-moz-backface-visibility":"hidden","-ms-backface-visibility":"hidden","backface-visibility":"hidden","-webkit-perspective":1e3,"-moz-perspective":1e3,"-ms-perspective":1e3,perspective:1e3,"-webkit-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-moz-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-ms-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear","-o-transition":"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear",transition:"top, left "+h.buttonAnimationTimeAfterFancybox+"ms linear",width:h.ButtonSize.W,height:h.ButtonSize.H});var e=a("<img/>",{id:"pizzabtnImg",src:h.ButtonImage,css:{width:h.ButtonSize.W,height:h.ButtonSize.H,opacity:h.ButtonOpacity,"transition-property":"opacity, width, height","timing-function":"linear","-webkit-transition-property":"opacity, width, height","-webkit-timing-function":"linear","-moz-transition-property":"opacity, width, height","-moz-timing-function":"linear","-o-transition-property":"opacity, width, height","-o-timing-function":"linear"}}).appendTo(pizzabtn),f=a("<span/>",{id:"hintText",css:{opacity:0,"transition-property":"opacity","timing-function":"linear","-webkit-transition-property":"opacity","-webkit-timing-function":"linear","-moz-transition-property":"opacity","-moz-timing-function":"linear","-o-transition-property":"opacity","-o-timing-function":"linear","transition-duration":h.HintShowDuration+"s","-webkit-transition-duration":h.HintShowDuration+"s","-moz-transition-duration":h.HintShowDuration+"s","-o-transition-duration":h.HintShowDuration+"s"},html:h.HintText.replace(/ /g,"&nbsp;")}).appendTo(pizzabtn);pizzabtn.hintTextActive=!1,o(),f.makeInvisible=function(){this.css({"transition-duration":h.HintHideDuration+"s","-webkit-transition-duration":h.HintHideDuration+"s","-moz-transition-duration":h.HintHideDuration+"s","-o-transition-duration":h.HintHideDuration+"s"}),this.css("opacity",0)},d.center=function(){var b=a("#pizzabtn_wrapper");this.css("top",(b.innerHeight()-this.height())/2+a(window).scrollTop()+"px"),this.css("left",(b.innerWidth()-this.width())/2+a(window).scrollLeft()+"px")},d.show=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeIn(1e3*h.ButtonShowDuration)},1e3*h.ButtonShowDelay)},d.hide=function(){var a=this;setTimeout(function(){a.stop(!0,!0).fadeOut(1e3*h.ButtonHideDuration)},1e3*h.ButtonHideDelay)},d.dragAnimate=function(){e.attr("src",h.ButtonDragImage),setTimeout(function(){e.css({"transition-duration":h.ButtonDragDuration+"s","-webkit-transition-duration":h.ButtonDragDuration+"s","-moz-transition-duration":h.ButtonDragDuration+"s","-o-transition-duration":h.ButtonDragDuration+"s"}),e.css({opacity:h.ButtonDragOpacity,width:h.ButtonDragSize.W,height:h.ButtonDragSize.H})},1e3*h.ButtonDragDelay)},d.undragAnimate=function(){e.attr("src",h.ButtonImage),setTimeout(function(){e.css({"transition-duration":h.ButtonUndragDuration+"s","-webkit-transition-duration":h.ButtonUndragDuration+"s","-moz-transition-duration":h.ButtonUndragDuration+"s","-o-transition-duration":h.ButtonUndragDuration+"s"}),e.css({opacity:h.ButtonOpacity,width:h.ButtonSize.W,height:h.ButtonSize.H})},1e3*h.ButtonUndragDelay)},d.showHint=function(){var a=this;setTimeout(function(){f.css(i),a.hintTextActive=!0},1e3*h.HintLaunchDelay)},d.hideHint=function(){var a=this;f.makeInvisible(),setTimeout(function(){a.animateDuringHintHide()},100),a.hintTextActive=!1},d.hideHintDelay=function(){setTimeout(function(){f.makeInvisible()},1e3*h.HintLaunchDuration)},d.animateDuringHintHide=function(){var a=this,b=f.outerWidth(),c=(b-h.ButtonSize.W)/2;c>0&&a.css({width:h.ButtonSize.W,height:h.ButtonSize.H,left:a.position().left+c})};try{var g=(window.innerHeight-h.ButtonSize.H/2)*h.ButtonPosition.Y,j=(a("body").innerWidth()-h.ButtonSize.W/2)*h.ButtonPosition.X+a(window).scrollLeft()+"px";d.css({left:j,top:g})}catch(l){}return k(),d}var c="1.0",d="b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b";String.prototype.hashCode=function(){var b,c,a=0;if(0==this.length)return a;for(b=0,l=this.length;l>b;b++)c=this.charCodeAt(b),a=(a<<5)-a+c,a|=0;return a};var h=a.extend({NeverClose:!0,MaxHeight:0,MaxWidth:0,type:"iframe",domain:"",fancyboxJsPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.fancybox.js",fancyboxCssPath:"https://pizzabtn.herokuapp.com/stylesheets/jquery.fancybox.css",mainStyleCss:"style.css",jqueryPepPath:"https://pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",buttonAnimationTimeAfterFancybox:400,HideAfterFirstShow:!1,ContentURL:"http://app.ecwid.com/jsp/2557212/m",BaseInsets:{T:4,B:4,L:4,R:4},ButtonEnabled:!1,ButtonVisible:!1,ButtonOpenInsets:{T:32,B:32,L:32,R:32},ButtonPosition:{X:.5,Y:.5},ButtonSize:{W:64,H:64},ButtonDragSize:{W:68,H:68},ButtonOpenSize:{W:64,H:64},ButtonInactiveSize:{W:64,H:64},ButtonOpacity:.8,ButtonDragOpacity:1,ButtonOpenOpacity:1,ButtonInactiveOpacity:.5,ButtonImage:"https://pizzabtn.herokuapp.com/images/probtn/gray.png",ButtonDragImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonOpenImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ButtonInactiveImage:"https://pizzabtn.herokuapp.com/images/probtn/drag_gray.png",ClosePosition:{X:123,Y:123},CloseSize:{W:64,H:64},CloseActiveSize:{W:72,H:72},CloseOpacity:.6,CloseActiveOpacity:1,CloseImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",CloseActiveImage:"https://pizzabtn.herokuapp.com/images/probtn/close.png",HintInsets:{T:4,B:4,L:4,R:4},HintLabelInsets:{T:4,B:4,L:4,R:4},HintImageInsets:{T:8,B:8,L:8,R:8},HintText:"Press me",HintFont:{Family:"Arial",Size:18},HintFontColor:{R:1,G:1,B:1,A:1},HintOpacity:.8,HintImage:"https://pizzabtn.herokuapp.com/images/probtn/hint.png",HintArrowSize:{W:8,H:8},HintArrowOffset:{T:0,B:0,L:0,R:0},HintArrowImageT:"",HintArrowImageB:"",HintArrowImageL:"",HintArrowImageR:"",ContentInsets:{T:-2,B:-2,L:-2,R:-2},ContentWebViewInsets:{T:12,B:12,L:12,R:12},ContentImageInsets:{T:32,B:32,L:32,R:32},ContentOpacity:1,ContentBackOpacity:1,ContentBackColor:{R:0,G:0,B:0,A:1},ContentActivityColor:{R:0,G:0,B:0,A:1},ContentImage:"",ContentArrowSize:{W:14,H:14},ContentArrowOffset:{T:8,B:8,L:9,R:9},ContentArrowImageT:"",ContentArrowImageB:"",ContentArrowImageL:"",ContentArrowImageR:"",DefaultDuration:.1,DefaultDelay:0,OpenDuration:.2,OpenDelay:.5,CloseDuration:.2,CloseDelay:.5,ButtonShowDuration:.2,ButtonShowDelay:0,ButtonHideDuration:.2,ButtonHideDelay:0,ButtonDragDuration:.1,ButtonDragDelay:0,ButtonUndragDuration:.2,ButtonUndragDelay:0,ButtonInactiveDuration:.1,ButtonInactiveDelay:5,ButtonInertiaSpeed:512,ButtonInertiaSpeedMin:32,ButtonInertiaSpeedMax:1024,ButtonInertiaFactor:6,CloseShowDuration:.1,CloseShowDelay:0,CloseHideDuration:.2,CloseHideDelay:0,CloseActiveDuration:.1,CloseActiveDelay:0,CloseUnactiveDuration:.1,CloseUnactiveDelay:0,HintLaunchDuration:3e4,HintLaunchDelay:0,HintShowDuration:.1,HintShowDelay:0,HintHideDuration:.2,HintHideDelay:0,ContentShowDuration:.1,ContentShowDelay:0,ContentHideDuration:.2,ContentHideDelay:0,HideInFrame:!0},b);console.log("Params:"),console.dir(b),console.dir(h);var i={opacity:h.HintOpacity,"font-size":h.HintFont.Size,"font-family":h.HintFont.Family,color:"white",padding:"4px",background:"url('"+h.HintImage+"')"};(""==h.HintText||null==h.HintText)&&(i.display="none",i.opacity="0.0");var j=n();a(document).ready(function(){function v(){p(function(){o(),a.fancybox.isOpen&&(u=!0,a.fancybox.close())})}function w(){h.HideInFrame===!0&&window.self!==window.top||x()}function x(){function c(){try{"function"==typeof a.pep.toggleAll?d():a.getScript(h.jqueryPepPath,d)}catch(b){a.getScript(h.jqueryPepPath,d)}}function d(){function d(){var c=m()&&window.jscd.mobile,d=b.position(),e=d.top,f=d.left,g=window.innerWidth,i=window.innerHeight,j="0px",k="0px",l=(g+h.ButtonSize.W)/2,n=(i+h.ButtonSize.H)/2;e>=n&&(j=i-h.ButtonSize.H+"px"),f>=l&&(k=g-h.ButtonSize.W+"px");var p=c?[h.ButtonSize.H/4,h.ButtonSize.H/4+5,h.ButtonSize.H/4,h.ButtonSize.H/4+5]:[h.ButtonSize.H+5,h.ButtonSize.H/2,h.ButtonSize.H+5,h.ButtonSize.H/2];window.jscd.mobile&&h.ButtonSize.H>70?p=[h.ButtonSize.H/8,h.ButtonSize.H/8,h.ButtonSize.H/8,h.ButtonSize.H/8]:h.ButtonSize.H>70&&(p=[70,70,70,70]);var q={property:c?"left":"top",currentValue:c?f:e,finishValue:c?k:j},r=a("#pizzabtn").offset().left,s=a("#pizzabtn").offset().top;z("ContentShowed",1),a.pep.toggleAll(!1);var t={href:h.ContentURL,sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",type:"iframe",autoCenter:!0,scrolling:"no",margin:p,height:"100%",minWidth:100,minHeight:100,iframe:{sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",preload:!1,scrolling:"yes"},helpers:{overlay:{locked:!1}},beforeLoad:function(){a("#hintText").hide(),a(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),b.css(q.property,q.finishValue),"top"==q.property?b.css("left",r+"px"):b.css("top",s+"px"),"iOS"===window.jscd.os&&a(document.body).bind("touchmove",function(a){a.preventDefault(),a.stopPropagation(),a.returnValue=!1}),a("html").css("overflow","hidden")},afterShow:function(){a(".fancybox-iframe").first().attr("sandbox","allow-same-origin allow-scripts allow-popups allow-forms"),a(".fancybox-iframe").first().contents().find("html").css("visibility","visible !important"),b.bind("click",a.fancybox.close)},afterClose:function(){o(),"iOS"===window.jscd.os&&a(document.body).unbind("touchmove"),a("html").css("overflow","auto"),b.unbind("click"),a.pep.toggleAll(!0),b.css(q.property,q.currentValue+"px"),1==h.HideAfterFirstShow&&(z("Closed",1),z("Hidded",1),b.hide())}};h.MaxWidth>0&&(t.maxWidth=h.MaxWidth),h.MaxHeight>0&&(t.maxHeight=h.MaxHeight),a.fancybox.open(t)}z(),z("Showed",1),C(),h.ButtonEnabled&&h.ButtonVisible&&b.show(),b.hideHintDelay(),b.showHint();var c=!1;b.moved=!1,b.pep({useCSSTranslation:!1,constrainTo:"parent",cssEaseString:"cubic-bezier(0, .50, .50, 1)",cssEaseDuration:600,velocityMultiplier:1,startThreshold:[1,1],droppable:"#closeButton",initiate:k,start:function(){p(function(){0==b.moved&&b.dragAnimate(),b.moved=!0,b.hintTextActive&&b.hideHint(),0==h.NeverClose&&j.show(),z("Moved",1),o()})},drag:function(){p(function(){var d=b[0].getBoundingClientRect(),e=j[0].getBoundingClientRect();d.top+d.height>a(window).height();var f=!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom);f&&0!==e.width?c||(j.overlayActive(),c=!0):c&&(j.overlayUnactive(),c=!1)})},stop:function(){b.moved?(o(),c?(z("Closed",1),z("Hidded",1),b.hide()):b.undragAnimate()):p(function(){d()}),j.hide(),b.moved=!1,c=!1}})}a("head").append('<link rel="stylesheet" href="'+h.mainStyleCss+'" type="text/css" />'),a("head").append('<link rel="stylesheet" href="'+h.fancyboxCssPath+'" type="text/css" />'),a("head").append("<style type='text/css'> .fancybox-inner { -webkit-overflow-scrolling: touch !important; overflow: scroll !important; } </style>"),0==h.NeverClose&&a("head").append(a("<style/>",{id:"probtn_style",type:"text/css",html:["#pizzabtn.pizzabtn_normal { display: block; clear: both; position: device-fixed !important; }",".close_pro_button_normal{ width:"+h.CloseSize.W+"px; height:"+h.CloseSize.H+"px; opacity:"+h.CloseOpacity+"; display: block; clear: both; }"].join("\n")}));var b=q();"function"==typeof a.fancybox?c():a.getScript(h.fancyboxJsPath,c)}function y(b,c,d,e){a.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateUserStatistic?BundleID="+e+"&Version=1.0&DeviceType=web&DeviceUID="+d+"&localDomain="+l+"&Statistic="+'{"'+b+'": "'+c+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function z(a,b,c){var d="1234";(""==a||null==a)&&(a="Opened"),(""==b||null==b)&&(b=1),d=A(),""==c||null==c?y(a,b,d,g):B(a,b,d,g)}function A(){var a="1234";if(null!=f("probtnId"));else{var b=new Date;b=b.getTime(),a=b.toString()+"-"+navigator.userAgent.toString().hashCode(),e("probtnId",a,365)}return a=f("probtnId")}function B(b,c,d,e){a.getJSON("https://pizzabtn.herokuapp.com/1/functions/updateCustomStatistic?BundleID="+e+"&DeviceType=web&Version=1.0&DeviceUID="+d+"&localDomain="+l+"&Statistic="+'{"'+b+'": "'+c+'"}&'+"X-ProBtn-Token=b04bb84b22cdacb0d57fd8f8fd3bfeb8ad430d1b&callback=?",function(){}).done(function(){}).fail(function(){}).always(function(){})}function C(){try{z("Resolution",jscd.screen,1),z("Browser",jscd.browser,1),z("BrowserVersion",jscd.browserVersion,1),z("OS",jscd.os+" "+jscd.osVersion,1)}catch(a){}}var g=document.domain.replace("www.","");(""==g||null==g)&&(g="example.com");var l=g;""!=h.domain&&null!=h.domain&&(g=h.domain);var n="onorientationchange"in window,r=n?"orientationchange":"resize";window.innerHeight,window.innerWidth;var u=!1;a(window).bind(r,v),a.getJSON("https://pizzabtn.herokuapp.com/1/functions/getClientSettings?BundleID="+g+"&DeviceType=web&DeviceUID="+A()+"&Location[Longitude]=0&Location[Latitude]=0&Version="+c+"&X-ProBtn-Token="+d+"&random="+Math.random()+"&callback=?",function(c){try{console.log("Get data:"),console.dir(c),a.extend(h,c.result,b),i={opacity:h.HintOpacity,"font-size":h.HintFont.Size,"font-family":h.HintFont.Family,color:"rgb("+100*h.HintFontColor.R+"%, "+100*h.HintFontColor.G+"%, "+100*h.HintFontColor.B+"%)","padding-left":h.HintLabelInsets.L,"padding-top":h.HintLabelInsets.T,"padding-right":h.HintLabelInsets.R,"padding-bottom":h.HintLabelInsets.B,background:"url('"+h.HintImage+"')"},(""==h.HintText||null==h.HintText)&&(i.display="none",i.opacity="0.0")}catch(d){}}).done(function(){}).fail(function(a){console.log("Fail:"),console.dir(a)}).always(w)})}}(jQuery);