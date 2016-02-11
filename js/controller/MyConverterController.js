myModule.controller('ConverterController',
    function ($scope) {
        var cc = this;
        
        cc.hasTemperature = false;
        cc.convertedToCelcius = false;
        cc.convertedToFarenheit = false;
        
        cc.temperatureToCelcius = function () {
            cc.convertedTemperature = (cc.temperature - 32) * .556; // convert to celcius
            
            cc.hasTemperature = true;
            cc.convertedToCelcius = true;
            cc.convertedToFarenheit = false;
        };
        
        cc.temperatureToFarenheit = function () {
           
            cc.convertedTemperature = (cc.temperature * 1.8) + 32; // convert to farenheit
            
            cc.hasTemperature = true;
            cc.convertedToCelcius = false;
            cc.convertedToFarenheit = true;
        };
    }
);




// caches current user credentials
// git config --global credential.helper "cache --timeout=3600"