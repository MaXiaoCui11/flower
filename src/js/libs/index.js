require.config({
    paths : {
        "jquery" : "../src/js/libs/jquery-1.11.3",
        "test" :"../src/js/module/test"
    }
})


 require(["test"] , function(test) {
               console.log(test)
  })