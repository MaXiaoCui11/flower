require.config({paths:{jquery:"../src/js/libs/jquery-1.11.3",banner:"../src/js/module/banner"}}),require(["banner","jquery"],function(n,a){(new n).init({list:a(".js-banner-list").children("li"),btn:a(".baner-btn").children("div"),mark:a(".banner-mark").children("li"),isPlay:!0,outbox:a(".js-banner-list")}),a.get("../dist/js/index.json",function(n){for(var p=3;p<11;p++){var s=a("<li><a><img src="+n[p].img+"></a></li>");a("<p class='product-title'>"+n[p].text+"</p>").appendTo(s.find("a")),a("<p class='price'><span><span>¥</span><span>"+n[p].pay+"</span></p>").appendTo(s.find("a"));a(".js-floor1 .bd-r").append(s)}}),a.get("../dist/js/index.json",function(n){for(var p=11;p<19;p++){var s=a("<li><a><img src="+n[p].img+"></a></li>");a("<p class='product-title'>"+n[p].text+"</p>").appendTo(s.find("a")),a("<p class='price'><span><span>¥</span><span>"+n[p].pay+"</span></p>").appendTo(s.find("a"));a(".js-floor2 .bd-r").append(s)}}),a.get("../dist/js/index.json",function(n){for(var p=19;p<27;p++){var s=a("<li><a><img src="+n[p].img+"></a></li>");a("<p class='product-title'>"+n[p].text+"</p>").appendTo(s.find("a")),a("<p class='price'><span><span>¥</span><span>"+n[p].pay+"</span></p>").appendTo(s.find("a"));a(".js-floor3 .bd-r").append(s)}}),a.get("../dist/js/index.json",function(n){for(var p=27;p<35;p++){var s=a("<li><a><img src="+n[p].img+"></a></li>");a("<p class='product-title'>"+n[p].text+"</p>").appendTo(s.find("a")),a("<p class='price'><span><span>¥</span><span>"+n[p].pay+"</span></p>").appendTo(s.find("a"));a(".js-floor4 .bd-r").append(s)}}),a.get("../dist/js/index.json",function(n){for(var p=35;p<43;p++){var s=a("<li><a><img src="+n[p].img+"></a></li>");a("<p class='product-title'>"+n[p].text+"</p>").appendTo(s.find("a")),a("<p class='price'><span><span>¥</span><span>"+n[p].pay+"</span></p>").appendTo(s.find("a"));a(".js-floor5 .bd-r").append(s)}}),a(".r-fixde .return-top").click(function(){a("html,body").stop().animate({scrollTop:0})}),a(".list li").children("span").hover(function(){a(this).siblings(".mp_tooltip").css("display","block").stop().animate({left:-100})},function(){a(this).siblings(".mp_tooltip").css("display","none").stop().animate({left:-180})})});