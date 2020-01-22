function Thermostat(){
  this.temperature = 20;
  this.MINTEMP = 10;


  Thermostat.prototype.temp = function() {
    return this.temperature;
  }

  Thermostat.prototype.increaseTemp = function() {
    this.temperature += 1;
  }

  Thermostat.prototype.decreaseTemp = function() {
    if (this.temp() <= 10) {
      return
    } 
    else {
      this.temperature -= 1;
    }
  }
}
