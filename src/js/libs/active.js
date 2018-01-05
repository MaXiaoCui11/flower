require.config({
    paths : {
        "jquery" : "../js/jquery-1.11.3"
    }
})

 require(["jquery"] , function($) {
    $(".main-substance").on("click","li",function() {
        location.href = "detail.html?id="+$(this).attr("data-id")
    })

    $.ajax({
        url:"../dist/js/active.json" ,
        dataType:"json"        
    })
    .then(function(res) {
        var html = "";
       $(".main-substance").each(function(i) {
             html = '<h6 class="main-substance-title">'+res.titleM[i]+'</h6><ul class="main-substance-list">';    
            for(var j=0;j<res.img[i].length;j++) {
                // console.log(res.info[i][j].id)
                html += '<li data-id="'+res.info[i][j].id+'">'+ 
                            '<div class="img-box">'+ 
                                '<a href="javascript:;">'+ 
                                    '<img src="'+res.img[i][j]+'">'+ 
                                '</a>'+ 
                            '</div>'+ 
                            '<div class="info-cont">'+ 
                                '<div class="price">'+ 
                                    '<span class="price-sign">¥</span>'+ 
                                    '<span class="price-num">'+res.info[i][j].price+'</span>'+ 
                                '</div>'+ 
                                '<div class="title"><a href="/product/1073051.html" target="_blank">十二星座经典七彩天蝎座-进口永生玫瑰</a></div>'+ 
                            '</div>'+ 
                        '</li>'  
            }
            html+= '</ul>'
                $(this).html(html);
       })  
    },function(error) {
            console.log(error)
    })






    
//回到顶部
    $("#goTopBtn").click(function(){
        $("html,body").scrollTop(0);
    })
    $(window).bind("scroll",function(){
         if($(document).scrollTop()<150){
                $("#goTopBtn").hide();
           }else{
                $("#goTopBtn").show();
           }
    }) 

 })

