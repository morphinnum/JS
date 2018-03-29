var temperature = function(t) {
    this.t = t;
};



temperature.prototype.CelsiusToKelvin = function(t) {
    console.log((t+'°C = ') + (t + 273.15+'°K'));
};

temperature.prototype.KelvinToCelsius = function(t) {
    console.log((t+'°K = ') + (t - 273.15+'°C'));
};

temperature.prototype.CelsiusToFarenheit = function(t) {
    console.log((t+'°C = ') + (t+64+'°F'));
};

temperature.prototype.FarenheitToCelsius = function(t) {
    console.log((t+'°F = ') + (t-64+'°C'));
};

temperature.prototype.FarenheitToKelvin = function(t) {
    console.log((t+'°F = ') + (t+209.15+'°K'));
};

temperature.prototype.KelvinToFarenheit = function(t) {
    console.log((t+'°K = ') + (t-209.15+'°F'));
};

module.exports = temperature;