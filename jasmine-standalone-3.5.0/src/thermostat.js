function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_PS_ON = 25;
  this.MAX_PS_OFF = 32;
  this.PS = true;
  this.RESET_TEMP = 20;


  Thermostat.prototype.temp = function() {
    return this.temperature;
  }

  Thermostat.prototype.increaseTemp = function() {
    if (this.temp() === this.maxTemp()) {
      return;
    } 
    else {
      this.temperature += 1;
    }
  }

  Thermostat.prototype.decreaseTemp = function() {
    if (this.temp() === this.MIN_TEMP) {
      return;
    } 
    else {
      this.temperature -= 1;
    }
  }

  Thermostat.prototype.togglePowerSaving = function() {
    this.PS = !this.PS;
  }

  Thermostat.prototype.maxTemp = function() {
    return this.PS ? this.MAX_PS_ON : this.MAX_PS_OFF;
  }

  Thermostat.prototype.resetTemp = function() {
    this.temperature = this.RESET_TEMP;
  }

  Thermostat.prototype.energyUsage = function() {
    if (this.temp() < 18) {
      return "low-usage";
    } 
    else if (this.temp() < 25) {
      return "medium-usage";
    }
    else {
      return "high-usage"
    }
  }
}
