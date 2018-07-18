$(function(){
    
    var stopTouchScroll = function(e) {
        e.preventDefault();
    };
    
    function SwitchTouchScroll (bool) {
        if (bool === true) {
            document.body.addEventListener("touchmove", stopTouchScroll, false);
        } else {
            document.body.removeEventListener("touchmove", stopTouchScroll, false);
        }
    }
    
    
    
    $("#menu-button").on("click", function(event){
        $("#primaryNav").toggleClass('show');
        $("body").toggleClass('noscroll');
        SwitchTouchScroll(true);
        event.stopImmediatePropagation;
    })
    
    $(document).on("click", function(event){
        var target = event.target;
        if (!target.closest("#primaryNav") && !target.closest("#menu-button")) {
        $("#primaryNav").removeClass('show');
        $("body").removeClass('noscroll');
        SwitchTouchScroll(true);
        }
    })
       
})
        