# JavaScript-Code-Challenge---Rover-API
An API that moves a rover around on a grid.

Developed an api that moves a rover around on a grid.

Given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.
Implemented commands that move the rover forward/backward (f,b).
Implemented commands that turn the rover left/right (l,r).

Implemented wrapping from one edge of the grid to another. (planets are spheres after all)

Implemented obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.

1. To Run:

- npm install --global gulp

- npm install mocha

- npm install

- mocha test


2. I have assumed the grid and directions as given in figure - Sketch.png.

3. To use this api, the following steps are required:

	  i) Initialize roverAPI - roverAPI(position, direction_facing, grid_size, Obstacles_list);
    
   ii) Set Commands - rover.setCommands(['f','r','b','l']);
   
4. The set commands will iterate through list and implement commands which are valid and store position it ends up in keeping in mind the grid size and obstacles in the grid.

5. I have created test.js to test each scenario faced by the rover.
