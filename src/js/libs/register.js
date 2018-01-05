require.config({
    paths : {
        "jquery" : "../js/jquery-1.11.3",
        "verification" :"../js/verification"
    }
})

 require(["jquery","verification"] , function($) {
        $("#registerPane").verification({
            tip:$("#Enr-1"),
            codebox:$("#refresh"),
            code:$("#Validate_Code"),
            pwd:$("#PassWord"),
            rpwd:$("#RexPassWord"),
            btn:$("#register")
        },function() {
            console.log(1)
        })

 })