function Thermostat(){}

Thermostat.prototype.temperature = function() {
  return (20);
};

Thermostat.prototype.increaseTemperature = function(number) {
  return (this.temperature() + number)
};

Thermostat.prototype.decreaseTemperature = function(number) {
  return (this.temperature() - number)
};