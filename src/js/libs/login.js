require.config({
    paths : {
        "jquery" : "../js/jquery-1.11.3"
    }
})

 require(["jquery"] , function($) {

    var flag=true;

    $(".logMethod").click(function() {
        if(flag){
            $(this).html("使用账号密码登录");
            flag=false;
        }else{
                $(this).html("使用手机验证码登录");
                 flag=true;
               
        }
    })

        $("#dosubmit").click(function(){
            var user = $("#UserName").val();
            var password = $("PassWord1").val();
            if( $(".logMethod").html() ==="使用手机验证码登录"){
                 $.ajax({
                    url:"http://datainfo.duapp.com/shopdata/userinfo.php",
                    type:"POST",
                    data:{
                        status:"login",
                        userID:user,
                        password:password
                    },
                    success:function(res){
                        switch(res){
                            case "0" : $("#Enr-1").html("用户不存在,请注册");
                                            $('#Enr').css('display','block');
                            break;
                            
                            case "2": $("#Enr-1").html("请输入有效的用户名和密码");
                                            $('#Enr').css('display','block')
                            break;

                            default:$("#Enr-1").html("登陆成功,我们稍微将为您跳转到购物页面");
                                        $('#Enr').css('display','block');
                        }
                    },
                    error:function(){
                        alert("服务器也坏掉")
                    }
                })
            }else{
               console.log(1)
            }
        })
           
         
 })

 
        