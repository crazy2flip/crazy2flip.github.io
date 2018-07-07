$(function(){
		// jQuery Code goes here
        
        //first
        var toggleStyle = function () {
            
            var inputFields = $('input[type="text"]');
            
            if( inputFields.css('background-color') === 'rgb(255, 0, 0)') {
                
                inputFields.css('background-color', 'rgb(255, 255, 255)');
                
            } else {
        
                inputFields.css('background-color', 'rgb(255, 0, 0)');
            }
        }
        
        $('#ReqAQuoteBtn').click( toggleStyle );
        
        
        //second
        $('.coreValues').prepend("<li><strong>This is brand new!!</strong></li>");
        $("<li><strong>This is also great!!</strong></li>").prependTo(".coreValues");
        
        //Third
        
        var nameVal = $('input[name="nameVal"]');
        
        
        function FillEmpty (){
            if( nameVal.val() == '' ) {
                nameVal.val( 'John Doe' );
            }
        } 
        
        $('#ReqAQuoteBtn').click( FillEmpty );
        
        //Additional
        $('.footer').append("<ul id='external-links'><li><a href='animated-menu-begin.html'>Animated Menu</a></li><li><a href='drop-down-menu-begin.html'>Drop Down Menu</a></li><li><a href='fruit-basket-begin.html'>Fruit Basket</a></li><li><a href='insert-html-begin.html'>Insert HTML</a></li><li><a href='toggle-button-begin.html'>Toggle Button</a></li></ul>");
        
        
	})