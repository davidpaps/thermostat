
$(document).ready(function() {  

  var thermostat = new Thermostat();
  updateTemperature();

  $('#increase').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
    $('#audioHot').trigger('play'); 
  }) 

  $('#decrease').click(function() {
    thermostat.decreaseTemp();
    updateTemperature();
     $('#audioCold').trigger('play'); 
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
    $('#currentLondon').text(data.main.temp);
 })

 $.get('http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=72c569c089d3d7e32b6d86409342d666&units=metric', function(data) {
  $('#currentNewYork').text(data.main.temp);
})

 $.get('http://api.openweathermap.org/data/2.5/weather?id=3448439&appid=72c569c089d3d7e32b6d86409342d666&units=metric', function(data) {
  $('#currentSaoPaulo').text(data.main.temp);
})

 $('#selectCity').submit(function(event){
  event.preventDefault();
  var city = $('#currentCity').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=72c569c089d3d7e32b6d86409342d666&units=metric', function(data) {
    $('#current').text(data.main.temp);
  })
 })

})