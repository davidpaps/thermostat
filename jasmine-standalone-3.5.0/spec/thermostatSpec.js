'use strict';

describe('thermostat', function() {
  
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('start temperature', function() {
    it('is 20 degrees', function() {
      expect(thermostat.temperature()).toBe(20)
    });
  });
 
  describe('increase temperature', function() {
    it('adds 1 to temperature', function() {
      expect(thermostat.increaseTemperature(1)).toEqual(21)
    });
  });

  describe('decrease temperature', function() {
  it('minuses 1 to temperature', function() {
    expect(thermostat.decreaseTemperature(1)).toEqual(19)
    });
  });
});