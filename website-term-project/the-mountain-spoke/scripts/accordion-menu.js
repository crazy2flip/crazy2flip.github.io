$(function(){
    
    
    var FirstPanelheight = $(".panel").first()[0].scrollHeight + "px";
    $(".panel").first().css({"max-height":FirstPanelheight});
    
    
//    $( window ).resize(function() {
//        $(".panel").each(function(){
//            if(!$(this)[0].css("max-height") == "0px") {
//                var curPanelheight = $(this)[0].scrollHeight + "px";
//                $(this).css({"max-height":curPanelheight}); 
//                return false;
//            }
//        });
//    });
        
        
    $(".accordion").on("click", function(){
        if($(this).next(".panel").css("max-height") == "0px") {
            $(".panel").css({"max-height":"0px"});
            var curPanelheight = $(this).next(".panel")[0].scrollHeight + "px";
            $(this).next(".panel").css({"max-height":curPanelheight});   
            
        } 
    });

})