1. To Run:

-> npm install --global gulp
-> npm install mocha
-> npm install
-> mocha test

2. I have assumed the grid and directions as givven in figure.
3. In order to use this api, the following steps are required:
	i) Initialize roverAPI - roverAPI(position, direction_facing, grid_size, Obstacles_list);
   ii) Set Commands - rover.setCommands(['f','r','b']);
4. The set commands will iterate through list and implement commands which are valid and store position it ends up in keeping in mind the grid size and obstacles in the grid.

5. I have created test.js to test each scenario faced by the rover.