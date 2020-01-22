'use strict';

describe('thermostat', function() {
  
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })

  describe('start temperature', function() {
    it('is 20 degrees', function() {
      expect(thermostat.temp()).toBe(20)
    })
  })
 
  describe('increase temperature', function() {
    it('adds 1 to temperature', function() {
      thermostat.increaseTemp();
      expect(thermostat.temp()).toBe(21)
    })
  })

  describe('decrease temperature', function() {
    it('minuses 1 to temperature', function() {
      thermostat.decreaseTemp();
      expect(thermostat.temp()).toEqual(19)
      })

    it('can not go below 10', function() {
      for (var x = 0; x < 11; x++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.temp()).toEqual(10)
    })
  })
})