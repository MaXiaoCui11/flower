require.config({
    paths : {
         jquery : "../js/jquery-1.11.3",
         cookie : "../js/cookies"
    }
})
 require(["jquery","cookie"] , function($,cookie) {
    var str = window.location.href;
    str = str.split("?")
    for(var i=0;i<str.length;i++) {
        str=str[1].split("=");        
    }
    strId = str.toString();

 var whenResult = $.when( $.ajax({
        url:"../dist/js/active.json" ,
        dataType:"json"        
    }),  $.ajax({
        url:"../dist/js/list.json" ,
        dataType:"json"        
    }))
    
whenResult.done(function(res1,res2) {
    for(var i=0;i<res1[0].info.length;i++) {
            for(var j=0;j<res1[0].info[i].length;j++) {
                if(res1[0].info[i][j].id == strId){
                    $(".breadcrumbs .text-primary").html(res1[0].info[i][j].title);
                    $(".js-mask").html(strId);
                    $(".price-sell").html(res1[0].info[i][j].price);
                    $(".smallImg").attr("src",res1[0].img[i][j]);
                    $(".pro-thumb").children("img").attr("src",res1[0].img[i][j]);
                    $(".bigArea").children("img").attr("src",res1[0].img[i][j]);      
                              
                }
            }
        }
    for(var i=0; i<res2[0].length; i++){
        if(res2[0][i].id == strId) {
             $(".breadcrumbs .text-primary").html(res2[0][i].title);
                    $(".js-mask").html(strId);
                    $(".price-sell").html(res2[0][i].pirce);
                    $(".smallImg").attr("src",res2[0][i].url);
                    $(".pro-thumb").children("img").attr("src",res2[0][i].url);
                    $(".bigArea").children("img").attr("src",res2[0][i].url);   
        }
    }
    
}).fail(function(error) {
    console.log(error)
})



//cookie
  $(".Btn_AddToCart").click(function() {
        //id 图片url 标题     价格   数量   
        var aCookie = cookie.get('shoppingcar');
        var bBtn = false;
        if(aCookie) {
            var aGoods = JSON.parse(aCookie);
            for(var i=0;i<aGoods.length;i++) {
                if(aGoods[i].id == $(".js-mask").text()){
                    aGoods[i].num++;
                    bBtn =true;
                    break;
                }
            }
        }else{
            var aGoods = [];
        }
        if(!bBtn){
            var oGoods = {
             url: $(".smallImg").attr("src"),
            id:$(".js-mask").text(),           
            title: $(".breadcrumbs .text-primary").html(),
            price: $(".price-sell").html(),
            old:$(".price-original").html(),
            num:1
        };
        
            aGoods.push(oGoods)
        }
        cookie.add('shoppingcar', JSON.stringify(aGoods),7)
    })


    //滑过小图切换大图
        $(".pro-thumb img").mouseenter(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".pro-bigimage img").attr("src",$(this).attr("src"));
            $(".bigArea img").attr("src",$(this).attr("src"));
        })
        
        
        //放大镜
        var _smallImg = $(".smallImg"); //小图
        var _smallArea = $(".smallArea"); //小区域 
        var _bigImg = $(".bigImg"); //大图
        var _bigArea = $(".bigArea"); //大区域
        
        //_smallArea.width( _smallImg.width()/_bigImg.width() * _bigArea.width() );
        //_smallArea.height( _smallImg.height()/_bigImg.height() * _bigArea.height() );
        
        //放大系数
        var scale = _bigImg.width()/_smallImg.width(); 
        //鼠标移动
        
        $(".pro-bigimage").mouseover(function(){
            _smallArea.show(); //显示小区域
            _bigArea.stop().animate({'width':300,'height':300,'left':500,'opacity':1},function(){
                _smallArea.width( _smallImg.width()/_bigImg.width() * _bigArea.width() );
                _smallArea.height( _smallImg.height()/_bigImg.height() * _bigArea.height() );   
            });
            
        });
        $(".pro-bigimage").mousemove(function(e){
            
            
            //计算得到小区域应该移动到的位置
            var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
            var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2;
            
            if (x <= 0) { //控制不超出左边界
                x = 0;
            } 
            else if (x >= _smallImg.width()-_smallArea.width()){ //控制不超出右边界
                x = _smallImg.width()-_smallArea.width();
            }
            if (y <= 0 ) { //控制不超出上边界
                y = 0;
            }
            else if (y >= _smallImg.height()-_smallArea.height()) { //控制不超出下边界
                y = _smallImg.height()-_smallArea.height();
            }
            
            //让小区域移动
            _smallArea.css({left:x, top:y});
            
            //让大图移动
            _bigImg.css({left:-scale*x, top:-scale*y});
        })
        //移出小图
        
        $(".pro-bigimage").mouseout(function(){
            _smallArea.hide(); //隐藏小区域
            _bigArea.stop().animate({'width':0,'height':0,'left':0,'opacity':0});
        })

    
 })



