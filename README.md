*** A lot of this is dumb or out dated. Consider this a museum exhibit more than a useful repo *** 

JWin's Boilerplate
===================

This is basically just a playground for boilerplate experimentations. Not recommended for public consumption.

#### Getting Set Up

#####Ubuntu:
From the project root folder run `bash install.sh` to automagically get the stack set up properly. This script will install node.js and npm and resolve all other project dependencies.

#####Others:
Use your favorite package manager to install nodejs and npm. Then run `npm install` and and `bower install`.

#### Running the Server

From the project root run `node server.js`. The server is just a pass through right now. There is no error handling or any other smarts at all. The port is set to 8000 by default.

#### Running a Build

From the project root run `r.js -o build.js`. Assets are built to scripts.build/ and there's no automagic pathing at the moment so the path to the scripts file would have to be changed in the html.

#### ToDo

* excanvas modernizr example is no longer functional so I need to set up a different example
* Set up testing
* Automate build/path switching
* Integrate handlebars template
