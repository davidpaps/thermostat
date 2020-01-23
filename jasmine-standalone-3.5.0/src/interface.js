
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

 $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=72c569c089d3d7e32b6d86409342d666&units=metric', function(data) {
    $('#current').text(data.main.temp);
 })

})