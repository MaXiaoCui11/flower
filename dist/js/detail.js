require.config({paths:{jquery:"../js/jquery-1.11.3"}}),require(["jquery"],function(n){var o=window.location.href;o=o.split("?");for(var t=0;t<o.length;t++)o=o[1].split("=");o=o.toString(),n.ajax({url:"../dist/js/active.json",dataType:"json"}).then(function(n){},function(n){console.log(n)})});