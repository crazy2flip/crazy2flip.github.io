$(function(){
    
    
    $("#subBtn").on("click", function(){
        
        if (!$(".tms-forms input:invalid").length) {        
            //Cover form
            

            switch ($("#subBtn").val()) {
            
                case "Register":
                    $("#cover").html("<p>Thank you for registering.</p><br><br><input id='form-again' class='cover-button' type='button' value='Aditional Registration Form'>");
                    break;
                    
                case "Ask My Question":
                    $("#cover").html("<p>Thank you for your inquiry.</p><br><p>We will contact you shortly.</p><br><br><input id='form-again' class='cover-button' type='button' value='Ask Another Question'>");
                    break;
            }
            activateCoverButton();
            $("#cover").addClass("show");

            //Insert jquery-ajax here
            return false;

        } else {
            $(".tms-forms").addClass("form-errors");
        }
    });
    
    function activateCoverButton() {
        $(".cover-button").on("click", function(){
            //Insert jquery-ajax here
            //disable form
            $(".tms-forms").removeClass("form-errors");
            $("#cover").removeClass("show");
            $("#cover").html("");
            $("textarea[name='questions-otherinfo']").val("");
        });
    }
    
    
    
});