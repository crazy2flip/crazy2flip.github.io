var cost_data_Request = new XMLHttpRequest();
    var data_URL = "https://crazy2flip.github.io/website-term-project/the-mountain-spoke/data/service-costs.json";
    cost_data_Request.open('GET', data_URL, true);
    cost_data_Request.send();
    cost_data_Request.onload =  function () {
        let cost_data = JSON.parse(cost_data_Request.responseText);
        
        
        
  }

