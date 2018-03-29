var temperature = require('./app');

// var weatherJs = require("weather-js");

// weatherJs.find({search: "Dnipro", degreeType: "K"}, function(err, result) {
//     if(err) console.log(err);
     
//        console.log(JSON.stringify(result, null, 2));
//     });
    

var todaysTemp = new temperature();

todaysTemp.FarenheitToKelvin(300);
todaysTemp.CelsiusToFarenheit(40);



