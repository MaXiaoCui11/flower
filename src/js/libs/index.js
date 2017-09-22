require.config({
    paths : {
        "jquery" : "../src/js/libs/jquery-1.11.3",
        "banner" :"../src/js/module/banner"
    }
})


 require(["banner","jquery"] , function(banner,$) {
      new  banner().init({
            list:$('.js-banner-list').children("li"),
            btn:$('.baner-btn').children("div"),
            mark:$('.banner-mark').children("li"),
            isPlay:true,
            outbox:$('.js-banner-list')
        })
      $.get("../dist/js/index.json",function(data){
        for(var i=3;i<11;i++){
            var li = $("<li><a><img src=" + data[i].img +"></a></li>");
            var p1 = $("<p class='product-title'>"+data[i].text+"</p>").appendTo(li.find("a"));
            var p2 = $("<p class='price'><span><span>¥</span><span>"+data[i].pay+"</span></p>").appendTo(li.find("a"))
            $(".js-floor1 .bd-r").append(li);
        }
    });
      //楼层F2
    $.get("../dist/js/index.json",function(data){
        for(var i=11;i<19;i++){
            var li = $("<li><a><img src=" + data[i].img +"></a></li>");
            var p1 = $("<p class='product-title'>"+data[i].text+"</p>").appendTo(li.find("a"));
            var p2 = $("<p class='price'><span><span>¥</span><span>"+data[i].pay+"</span></p>").appendTo(li.find("a"))
            $(".js-floor2 .bd-r").append(li);
        }
    });
    //楼层F3
    $.get("../dist/js/index.json",function(data){
        for(var i=19;i<27;i++){
            var li = $("<li><a><img src=" + data[i].img +"></a></li>");
            var p1 = $("<p class='product-title'>"+data[i].text+"</p>").appendTo(li.find("a"));
            var p2 = $("<p class='price'><span><span>¥</span><span>"+data[i].pay+"</span></p>").appendTo(li.find("a"))
            $(".js-floor3 .bd-r").append(li);
        }
    });
    //楼层F4
    $.get("../dist/js/index.json",function(data){
        for(var i=27;i<35;i++){
            var li = $("<li><a><img src=" + data[i].img +"></a></li>");
            var p1 = $("<p class='product-title'>"+data[i].text+"</p>").appendTo(li.find("a"));
            var p2 = $("<p class='price'><span><span>¥</span><span>"+data[i].pay+"</span></p>").appendTo(li.find("a"))
            $(".js-floor4 .bd-r").append(li);
        }
    });
    //楼层F5
    $.get("../dist/js/index.json",function(data){
        for(var i=35;i<43;i++){
            var li = $("<li><a><img src=" + data[i].img +"></a></li>");
            var p1 = $("<p class='product-title'>"+data[i].text+"</p>").appendTo(li.find("a"));
            var p2 = $("<p class='price'><span><span>¥</span><span>"+data[i].pay+"</span></p>").appendTo(li.find("a"))
            $(".js-floor5 .bd-r").append(li);
        }
    });
    //fixde 的动画效果
    $(".r-fixde .return-top").click(function(){
        $("html,body").stop().animate({scrollTop: 0})
    })
    $(".list li").children("span").hover(function() {
           $(this).siblings('.mp_tooltip').css("display","block").stop().animate({
                left:-100
           });
    },function(){
            $(this).siblings('.mp_tooltip').css("display","none").stop().animate({
                left:-180
           });
    })
    
  })

 