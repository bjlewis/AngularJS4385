myModule.controller('ConverterController',
    function ($scope) {
        var cc = this;
        
        cc.hasTemperature = false;
        
        cc.temperatureToCelcius = function () {
            cc.convertedTemperature = (cc.temperature - 32) * .556; // convert to celcius
            
            cc.hasTemperature = true;
        };
        
        cc.temperatureToFarenheit = function () {
           
            cc.convertedTemperature = (cc.temperature * 1.8) + 32; // convert to farenheit
            
            cc.hasTemperature = true;
        };
    }
);




// caches current user credentials
// git config --global credential.helper "cache --timeout=3600"