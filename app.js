var http = require('https');
var body = "";
var ticker = "AAPL";
var request = http.get("https://query.yahooapis.com/v1/public/yql?q=" 
            + "select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20"
            + "(%22" + ticker + "%22)"
            + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", function(response)
{
    response.on("data", function(chunk){
    body += chunk;

    response.on("end", function(){
        var profile = JSON.parse(body);
        console.log("Company Ticker  " + profile.query.results.quote.symbol);
        console.log("Company Name  " + profile.query.results.quote.Name);
        console.log("Daily Change  " + profile.query.results.quote.Change);
        console.log("Today's Low  " + profile.query.results.quote.DaysLow);
        console.log("Today's High " + profile.query.results.quote.DaysHigh);
    });
    });
});