var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !== "") {
    var menu = document.querySelectorAll('ul#primaryNav li a');
    
    for(var i=0;i<menu.length;i++){
        var currentURL = menu[i].getAttribute("href");
        var urlArrayCurrent = currentURL.split('/');
        var pageHREFCurrent = urlArrayCurrent[urlArrayCurrent.length-1];
        menu[i].parentNode.className="";
        if (pageHREFCurrent===pageHREF) {
            menu[i].parentNode.className="active";
        }    
    }
}