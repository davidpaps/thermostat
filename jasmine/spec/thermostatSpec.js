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

    it('with PS on, max temp is 25', function() {
      for (var x = 0; x < 6; x++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.temp()).toBe(25)
    })

    it('with PS off, max temp is 32', function() {
      thermostat.togglePowerSaving();
      for (var x = 0; x < 13; x++) {
        thermostat.increaseTemp();
      }
      expect(thermostat.temp()).toBe(32)
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

  describe('reset the temperature', function() {
    it('to 20', function() {
    thermostat.increaseTemp();
    thermostat.resetTemp();
    expect(thermostat.temp()).toEqual(20)
    })
  })

  describe('current energy usage', function() {
    it('is low-usage', function() {
      for (var x = 0; x < 3; x++) {
        thermostat.decreaseTemp();
      }
    expect(thermostat.energyUsage()).toEqual('low-usage')
    })

    it('is medium-usage', function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage')
    })

    it('is high-usage', function() {
      for (var x = 0; x < 7; x++) {
        thermostat.increaseTemp();
      }
    expect(thermostat.energyUsage()).toEqual('high-usage')  
    })
  })


})






