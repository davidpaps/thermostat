'use strict';

describe('thermostat', function() {
  
  var thermostat;

  describe('start temperature', function() {
    it('is 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature()).toBe(20)
    });
  });
 
  describe('increase temperature', function() {
    it('adds 1 to temperature', function() {
      thermostat = new Thermostat();
      thermostat.increaseTemperature(1)
      expect(thermostat.increaseTemperature(1)).toEqual(21)
    });
  });

});