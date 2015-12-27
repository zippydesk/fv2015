/*! FalsyValues - v0.0.1 - 2015-08-16
* Copyright (c) 2015 aml*/
"use strict";var FV={init:function(){FV.initFormAnimations(),FV.toggleScheudleContent(),FV.initSticktyHeader(),FV.initSmoothScroling(),FV.initSelectField(),FV.toggleActivateRegisterPrice(),FV.setTabIndex(),FV.initCarouselPagination(),FV.initGoToScheduleItem(),FV.initSpeakersPattern()},initFormAnimations:function(){var a=$(".form-field input:not(:hidden)");a.each(function(){var a=$(this);""!==a.val()&&a.addClass("input--filled")}),a.on({focus:function(){var a=$(this);a.addClass("input--filled")},blur:function(){var a=$(this);a.toggleClass("input--filled",""!==a.val())}})},toggleScheudleContent:function(){$(".timetable-item--mark dd").on({click:function(){$(this).parents(".timetable-item").toggleClass("item--opened")}}),$(".timetable-item .js-close").on({click:function(){$(this).parents(".timetable-item").removeClass("item--opened")}})},isMobileViewport:function(){return window.innerWidth<760?!0:!1},initSticktyHeader:function(){function a(){$(window).on({scroll:function(){var a=$(this).scrollTop(),d=$(".header-sticky");Math.abs(c-a)<=b||(a>c?d.removeClass("show"):a>150?d.addClass("show"):10>=a&&d.removeClass("show"),c=a)}})}var b=10,c=0;$(".hamburger-menu--icon").on({click:function(){var b=$(".header-sticky");b.toggleClass("menu--opened"),!b.hasClass("show")&&b.addClass("show"),b.hasClass("menu--opened")?$(window).off("scroll"):(b.removeClass("show"),a())}}),a()},initSmoothScroling:function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash),b=this.hash.slice(1);if(a=a.length?a:$("[name="+b+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},1e3,function(){location.hash=b}),!1}})},initSelectField:function(){function a(a){a.find(".form-select-seen").val("").removeClass("input--filled"),a.find(".form-select-value").val("")}var b=$(".form-select"),c=b.find("label"),d=b.find(".form-select-list");d.mCustomScrollbar(),$("body").click(function(a){var c=$(a.target).parents(".form-select");c.length||b.removeClass("opened")}),c.on({click:function(c){var d=$(this),e=d.parents(".form-select");a(e),b.removeClass("opened"),e.toggleClass("opened")}}),d.find("li").on({click:function(){var a=$(this),b=a.data("value"),c=a.text(),d=a.parents(".form-select");d.removeClass("opened").find(".form-select-seen").addClass("input--filled").val(c).end().find(".form-select-value").val(b)}})},toggleActivateRegisterPrice:function(){$(".form-radio").each(function(){var a=$(this);a.find("input").is(":checked")&&a.parents(".row").addClass("active")}),$(".form-radio").on({click:function(){var a=$(this);a.parents("fieldset").find(".active").removeClass("active"),a.parents(".row").addClass("active")}})},setTabIndex:function(){$(":input").not(":hidden").each(function(a){$(this).attr("tabindex",a+1)})},initCarouselPagination:function(){var a=!1,b=0;$(".carousel--pagination li").on({click:function(){var c=$(this),d=c.index();return a?!1:(a=!0,c.parents(".carousel").find(".active").removeClass("active"),c.addClass("active"),void c.parents(".carousel").find(".carousel--list").animate({left:100.7*d*-1+"%"},300*Math.abs(b-d),function(){a=!1,b=d}))}}),$(".section-speakers .carousel").on({swipeleft:function(){if($("body, html").width()>768||b===$(".carousel--list li").length-1)return!1;var c=$(this);return a?!1:(a=!0,void c.find(".carousel--list").animate({left:100.7*(b+1)*-1+"%"},300,function(){a=!1,b++,$(".carousel--pagination li").removeClass("active").eq(b).addClass("active")}))},swiperight:function(){if($("body, html").width()>768||0===b)return!1;var c=$(this);return a?!1:(a=!0,void c.find(".carousel--list").animate({left:100.7*(b-1)*-1+"%"},300,function(){a=!1,b--,$(".carousel--pagination li").removeClass("active").eq(b).addClass("active")}))}})},initGoToScheduleItem:function(){if(!$(".page-schedule").length)return!1;var a=location.hash.slice(1),b=$(".timetable").find("#"+a);b.length&&b.addClass("item--opened")},initWarsawGuideNav:function(){$(".nav-content.hotels").addClass("active"),$(".nav-guide li").on({click:function(){var a=$(this);$(".nav-guide li").removeClass("active"),a.addClass("active"),$(".nav-content").removeClass("active"),$("."+a.data("content")).addClass("active")}})},initSpeakersPattern:function(){return $(".page-speakers").length?void $(".speaker").each(function(){var a=$(this),b=a.index()%3;switch(b){case 0:break;case 1:a.find(".pattern").removeClass("pattern-net--blue").addClass("pattern-dot--green");break;case 2:a.find(".pattern").removeClass("pattern-net--blue").addClass("pattern-path--blue")}}):!1}};$(function(){if(FV.init(),$("#google-map").length){var a,b=[{stylers:[{saturation:-100}]}],c=new google.maps.StyledMapType(b,{name:"Styled Map"}),d={center:new google.maps.LatLng(52.1815,21.0059),zoom:14,scrollwheel:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"Mapa"]}},e=new google.maps.MarkerImage("./wp-content/themes/falsy-values-2015/images/map-pin-conference.png",new google.maps.Size(120,48),new google.maps.Point(0,0),new google.maps.Point(0,48)),f=new google.maps.MarkerImage("./wp-content/themes/falsy-values-2015/images/map-pin-workshop.png",new google.maps.Size(120,48),new google.maps.Point(0,0),new google.maps.Point(0,48)),g=new google.maps.LatLng(52.1823455,21.0071026),h=new google.maps.LatLng(52.1811535,20.9949937);a=new google.maps.Map(document.getElementById("map"),d),a.mapTypes.set("Mapa",c),a.setMapTypeId("Mapa");new google.maps.Marker({icon:e,map:a,position:g,cursor:"auto"}),new google.maps.Marker({icon:f,map:a,position:h,cursor:"auto"})}});