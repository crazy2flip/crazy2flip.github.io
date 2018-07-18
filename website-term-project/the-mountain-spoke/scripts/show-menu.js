$(function(){

    $("#menu-button").on("click", function(event){
        $("#primaryNav").toggleClass('show');
        $("#blanket").toggleClass('show');
        event.stopImmediatePropagation;
    })
    
    $(document).on("click", function(event){
        var target = event.target;
//        if (!target.closest("#primaryNav") && !target.closest("#menu-button")) {
        if (target.closest("#blanket")) {
        $("#primaryNav").removeClass('show');
        $("#blanket").removeClass('show');
        }
    })
       
})
        