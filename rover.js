//main js
const express = require('express');
const path = require('path');
const app = express();

function rover(position, direction, grid, obstacles){
	
	
	self = this;
	
	this.position = (position!== undefined)?position:[0,0];
	this.direction = (direction!== undefined)?direction:'N';
	this.grid = (grid!== undefined)?grid:[10,10];
	this.obstacles = (obstacles!== undefined)?obstacles:[];
	this.commands = [];
	this.allowedCommands = ['f','b','r','l'];
	this.allowedDirections = ['N','S','E','W'];
	this.currStatus = 'Open';
	this.movementAllowed = [[1,-1,1,-1],[-1,1,-1,1],[1,-1,-1,1],[-1,1,1,-1]]// movement on X-Y axis towards f, b, r, l when facing N, S, E, W
	//Check commands and move accordingly
	this.setCommands = function(commandsSet){
		
		for(var c of commandsSet){
			// If command is valid
			if(this.allowedCommands.includes(c)){
				this.commands.push(c);
				if(!check_Move(c)){
					// Rover is stuck - exit commands loop
					break;
				}
			}
			//else ignore command
		}
	}

	function check_Move(command){
		var newPosition = JSON.parse(JSON.stringify(this.position));
		var direction_index = get_Index_Of_Direction(this. direction);
		var command_index = get_Index_Of_Movement(command);
		// console.log('Direction index-',direction_index);
		// console.log('Command index-',command_index);
		
		if((direction_index>1 && command_index>1) || (direction_index<2 && command_index<2)){
			// facing N/S moving f/b
			// facing E/W moving r/l
			// change on Y axis
			newPosition[1] += this.movementAllowed[direction_index][command_index];
		}
		else if((direction_index>1 && command_index<2) || (direction_index<2 && command_index>1)){
			// facing N/S moving r/l
			// facing E/W moving f/b
			// change on X axis
			newPosition[0] += this.movementAllowed[direction_index][command_index];
		}
		
		// Check if commands take the rover off the grid
		if(newPosition[0] >= this.grid[0] || newPosition[0] <= 0){
			newPosition[0] = (this.grid[0]+newPosition[0])%this.grid[0];
		}
		if(newPosition[1] >= this.grid[1] || newPosition[1] <= 0){
			newPosition[1] = (this.grid[1]+newPosition[1])%this.grid[1];
		}
		
		// Check for obstacle at new Position
		if(check_Obstacles(newPosition)){
			newPosition = this.position;
			return false;
		}else{
			this.position = newPosition;
			return true;
		}
	}	
	function get_Index_Of_Movement(movement){
		for(var index in this.allowedCommands){
			if(this.allowedCommands[index] == movement)
				return index;
		}
	}
	function get_Index_Of_Direction(direction){
		for(var index in this.allowedDirections){
			if(this.allowedDirections[index] == direction)
				return index;
		}
	}

	function check_Obstacles(newPosition){
		var newPosition_In_String = newPosition.toString();
		for(var i = 0; i < this.obstacles.length; i++){
			if(newPosition_In_String === this.obstacles[i].toString()){
				this.currStatus = 'Stuck';
				return true;
			}
		}
		return false;
	}
	return this;
}
module.exports = rover;