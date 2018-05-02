//testRover.js
var assert = require('assert');
const roverAPI = require('./rover');

describe('Rover Test', function() {

  describe('Initialize Test', function() {
    it('rover initialize - position, direction, grid and obstacles', function() {
    	var rover = roverAPI([1,2],'S');
    	//console.log(rover);
    	assert.deepStrictEqual(rover.position, [1,2]);
    	assert.deepStrictEqual(rover.direction, 'S');
      	assert.deepStrictEqual(rover.grid, [10,10]);
      	assert.deepStrictEqual(rover.obstacles, []);
    });
    it('rover initialize & check - commands', function() {
    	var rover = roverAPI([1,2],'S');
    	rover.setCommands([]);
    	// console.log(commands);
    	// console.log(setCommands);
    	assert.deepStrictEqual(rover.commands, []);
    });
  });

  describe('Movement Commands Test', function() {
    it('rover movement - north, south facing north', function() {
    	var rover = roverAPI([1,1]);
    	rover.setCommands(['f','b']);
    	assert.deepStrictEqual(rover.position, [1,1]);
    	
    });
    it('rover movement - east, west  facing north', function() {
    	var rover = roverAPI([1,1]);
    	rover.setCommands(['l','r']);
    	assert.deepStrictEqual(rover.position, [1,1]);
    	
    });
    it('rover movement - mix all facing south', function() {
    	var rover = roverAPI([1,1],'S');
    	rover.setCommands(['f','r','b']);
    	//console.log(rover);
    	assert.deepStrictEqual(rover.position, [0,1]);
    	
    });
    it('rover movement - mix all facing east', function() {
    	var rover = roverAPI([1,1],'E');
    	rover.setCommands(['f','r','b']);
    	//console.log(rover);
    	assert.deepStrictEqual(rover.position, [1,0]);
    	
    });
    it('rover movement - mix all facing west', function() {
    	var rover = roverAPI([1,1],'W');
    	rover.setCommands(['f','r','b']);
    	//console.log(rover);
    	assert.deepStrictEqual(rover.position, [1,2]);

    });

  });
  describe('Movement Commands Test -out of bound', function() {
    it('rover movement - Y less than 0', function() {
    	var rover = roverAPI([1,1]);
    	rover.setCommands(['b','b']);
    	assert.deepStrictEqual(rover.position, [1,9]);
    	
    });
    it('rover movement - X less than 0', function() {
    	var rover = roverAPI([1,1]);
    	rover.setCommands(['l','l']);
    	assert.deepStrictEqual(rover.position, [9,1]);
    });
    it('rover movement - X greater than grid size', function() {
    	var rover = roverAPI([9,9]);
    	rover.setCommands(['r']);
    	assert.deepStrictEqual(rover.position, [0,9]);
    	
    });
    it('rover movement - Y greater than grid size', function() {
    	var rover = roverAPI([1,9]);
    	rover.setCommands(['f','f']);
    	assert.deepStrictEqual(rover.position, [1,1]);
    	
    });
  });

  describe('Obstacle Test - check if rover gets stuck', function() {
    it('rover movement - obstacle stuck, check position and status', function() {
    	var rover = roverAPI([1,1],'E',[10,10],[[3,1],[1,2]]);
    	rover.setCommands(['l','l']);
    	assert.deepStrictEqual(rover.position, [1,1]);
    	assert.deepStrictEqual(rover.currStatus,'Stuck');
    });
    it('rover movement - not stuck, check position and status', function() {
    	var rover = roverAPI([1,1],'E',[10,10],[[3,1],[1,2]]);
    	rover.setCommands(['f','l']);
    	assert.deepStrictEqual(rover.position, [2,2]);
    	assert.deepStrictEqual(rover.currStatus,'Open');
    });
  });

});