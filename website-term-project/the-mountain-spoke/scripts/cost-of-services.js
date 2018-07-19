$(function(){
    var cost_data_Request = new XMLHttpRequest();
    var data_URL = "https://crazy2flip.github.io/website-term-project/the-mountain-spoke/data/service-costs.json";
    cost_data_Request.open('GET', data_URL, true);
    cost_data_Request.send();
    cost_data_Request.onload =  function () {
        let cost_data = $.parseJSON(cost_data_Request.responseText);
        $("#service-list > tbody > tr").each(function() {
            var curRow = $(this);
            var curService = $(this).children("td:first-child").text();
            $.each(cost_data.services, function(i, item){
                var curName = item.name;
                if (curName == curService) {
                    curRow.children("td:nth-child(2)").text(item.serviceFee);
                    curRow.children("td:nth-child(3)").text(item.costofParts);
                    return false;
                }
            });
        });
        
  
  }
})
