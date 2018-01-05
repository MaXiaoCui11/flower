define(function() {
    return {
        add: function(name, value, expires, path) {
            path = path || '/';
            var oDate = new Date();
            oDate.setDate(oDate.getDate()+expires);
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' +path;
            return true;
        },
        
        get: function(name) {
            var aCookie = document.cookie.split('; ');
            for(var i=0; i<aCookie.length; i++) {
                var temp = aCookie[i].split('=');
                if(decodeURIComponent(temp[0])=== name) {
                    return decodeURIComponent(temp[1]) 
                }
            }
        }
    }
});