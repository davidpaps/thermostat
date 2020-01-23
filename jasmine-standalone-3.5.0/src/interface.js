
$(document).ready(function() {  

  var thermostat = new Thermostat();
  updateTemperature();

  $('#increase').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  }) 

  $('#decrease').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
  }) 

  $('#reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  }) 

  $('#power').click(function() {
    thermostat.togglePowerSaving();
    updateTemperature();

  }) 

  function updateTemperature() {
    $('#temperature').text(thermostat.temp());
    $('#temperature').attr('class', thermostat.energyUsage());
  }

})