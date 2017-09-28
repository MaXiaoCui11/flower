require.config({
    paths : {
         "jquery": "../js/jquery-1.11.3"
    }
})
 require(["jquery","cookies"] , function($,cookie) {    
     var sCookie = cookie.get('shoppingcar')
    var aCookie =sCookie ? JSON.parse(sCookie) : [];
        if(aCookie.length != 0) {
            $(".cart-panel").css({
                display:"block"
            })
            $(".spare").css({
                display:"none"
            })
            for(var i = 0; i < aCookie.length; i++) {
                $('.bd').append( '<ul class="order-list"><li class="img-box"><a href="#"><img src="'+aCookie[i].url+'" height="56" width="50"></a> '+aCookie[i].title+'</li>'+             
                            '<li class="market-price">'+ 
                           ' <span class="price-sign">¥</span>'+ 
                           ' <span class="price-num">'+aCookie[i].old+'</span>'+ 
                        '</li>'+ 
                        '<li class="order-price">'+ 
                           ' <span class="price-sign">¥</span>'+ 
                            '<span class="price-num">'+aCookie[i].price+'</span>'+ 
                       '</li>'+ 
                        '<li class="num">'+ 
                            '<div class="input-num">'+ 
                                '<a href="javascript:;"  class="btn btn-default minus"  data-id="'+aCookie[i].id+'"><i class="ico ico-minus"></i></a>'+ 
                                '<input type="text" class="form-control input-sm" name="Q_5052" id="Q_5052" value="'+aCookie[i].num+'" maxlength="2" readonly>'+ 
                                '<a href="javascript:;" class="btn btn-default add"  data-id="'+aCookie[i].id+'"><i class="ico ico-add"></i></a>'+ 
                            '</div>'+ 
                        '</li>'+ 
                        '<li class="operate"><a href="#" class="del" data-id="'+aCookie[i].id+'">删除</a><br><a href="javascript:;">移到我的收藏</a></li></ul>') ;     
             }
     }

         $('.bd').on("click","ul li .del",function() {
            var ID = $(this).data('id'),
                aCookie = JSON.parse(cookie.get('shoppingcar'));
                
                for(var i=0;i<aCookie.length;i++) {
                    if(aCookie[i].id == ID) {
                        aCookie.splice(i,1);
                        break;
                    }
                }
                //将删除后的数组写入cookie
                cookie.add('shoppingcar',JSON.stringify(aCookie));
                //删除DOM节点
                $(this).parent().parent().remove();
        })
         
         $('.bd').on("click","ul li .minus",function() {            
            var numb =parseInt( $(this).siblings(".form-control").val())
                if(numb < 1) {
                    alert("亲,不能少了")
                }else{
                    numb--;
                   $(this).siblings(".form-control").val(numb)
                }
               var ID = $(this).data('id');
               aCookie = JSON.parse(cookie.get('shoppingcar'));
                 for(var i=0;i<aCookie.length;i++) {
                    if(aCookie[i].id == ID) {
                        aCookie[i].num = numb
                        break;
                    }
                }
                cookie.add('shoppingcar',JSON.stringify(aCookie));

         })
          $('.bd').on("click","ul li .add",function() {     
           var numb =parseInt( $(this).siblings(".form-control").val())           
                    numb++;
                   $(this).siblings(".form-control").val(numb);           
            var ID = $(this).data('id');
               aCookie = JSON.parse(cookie.get('shoppingcar'));
                 for(var i=0;i<aCookie.length;i++) {
                    if(aCookie[i].id == ID) {
                        aCookie[i].num = numb
                        break;
                    }
                }
                cookie.add('shoppingcar',JSON.stringify(aCookie));
         })
        var totalPrice = 0;
        var nums = 0;
        for(var i=0; i<aCookie.length;i++) {
                totalPrice += aCookie[i].num * aCookie[i].price;
                nums += aCookie[i].num
        }
        $(".price .price-num").text(totalPrice);
        $(".ico8 ").text(nums);
        $("#gwcCount").text("("+nums+")")
  })

