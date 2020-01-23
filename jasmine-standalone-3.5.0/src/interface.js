
$(document).ready(function() {  

  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temp());

  $('#increase').click(function() {
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temp());
  }) 

  $('#decrease').click(function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temp());
  }) 

  $('#reset').click(function() {
    thermostat.resetTemp();
    $('#temperature').text(thermostat.temp());
  }) 

  $('#power').click(function() {
    thermostat.togglePowerSaving();
    $('#temperature').text(thermostat.temp());

  }) 
})

function temp() {
  $('#temperature').text(thermostat.temp());
  $('#temperature').attr('class', thermostat.energyUsage());
}
