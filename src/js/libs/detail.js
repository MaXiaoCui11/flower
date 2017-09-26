require.config({
    paths : {
         "jquery" : "../js/jquery-1.11.3"
    }
})
 require(["jquery"] , function($) {
    var str = window.location.href;
    str = str.split("?")
    for(var i=0;i<str.length;i++) {
        str=str[1].split("=");        
    }
    str = str.toString();
     $.ajax({
        url:"../dist/js/active.json" ,
        dataType:"json"        
    })
    .then(function(res) {
        


       
    }, function(error) {
            console.log(error)
    })
 })