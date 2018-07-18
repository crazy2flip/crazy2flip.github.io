$(function(){

    $("#menu-button").on("click", function(event){
        $("#primaryNav").toggleClass('show');
        $("#blanket").toggleClass('show');
        $("body").toggleClass('noscroll');
        event.stopImmediatePropagation;
    })
    
    $(document).on("click", function(event){
        var target = event.target;
        if (!target.closest("#primaryNav") && !target.closest("#menu-button")) {
        $("#primaryNav").removeClass('show');
        $("#blanket").removeClass('show');
        $("body").removeClass('noscroll');
        }
    })
       
})
        