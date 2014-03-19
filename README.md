## Retrieving Data with MEAN Stack
### Overview
Explores various methods of retrieving and displaying data using AngularJS. Project based on wlepinski's [generator-meanstack](https://github.com/wlepinski/generator-meanstack), with MongoDB, Mongoose, and Twitter Bootstrap added.


Contains examples of retrieving data using various AngularJS methods:
* Function within AngularJS controller returns array of strings
* AngularJS service returns an array of simple object literals to controller
* AngularJS factory returns contents of JSON file to controller
* MongoDB database returns collection of documents to controller

### Instructions to Use Project
* Review the [generator-meanstack](https://github.com/wlepinski/generator-meanstack) `README.md`
* Project requires MongoDB, Node, Express, and yo
* Set the `NODE_ENV` environment variable to `test`
* Set the `CHROME_BIN` environment variable for Karma  
(i.e. `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`

##### Create and Populate MongoDB Test Database

```
start mondod
mongo
use meanstack-test // creates database if it doesn't exist
db.components.insert({ "component": "mongod", "description": "core database process" })
db.components.insert({ "component": "mongos", "description": "controller and query router for sharded clusters" })
db.components.insert({ "component": "mongo",  "description": "interactive MongoDB Shell" })
db.components.insert({ "component": "mongodump",  "description": "utility for creating binary export of database contents" })
db.components.insert({ "component": "mongorestore",  "description": "writes data from a binary database dump to a MongoDB instance" })
db.components.insert({ "component": "mongooplog",  "description": "polls operations from the replication oplog" })
show collections // verifies collection was created
db.components.find() // verifies documents were created
```

##### Install and Configure the Project

```
npm install -g generator-meanstack
git clone https://github.com/garystafford/meanstack-data-samples.git
cd meanstack-data-samples
npm install
grunt
grunt server
```

### Notes About project
* Link to main AngularJS `test-bootstrap` view: [http://localhost:3000/#](http://localhost:3000/#).
* HTTP GET call to MongoDB data: [http://localhost:3000/api/components](http://localhost:3000/api/components).
* Deferred promises to perform actions asynchronously: [$http](http://docs.angularjs.org/api/ng/service/$http)
* Karma's default port `8080` to `8090` in `karma.conf.js` and `karma-e2e.conf.js` files. It conflicted with my installation of Apache and every other application that wants to use port `8080` by default.
* The `grunt` command now runs without error. In the original project, `jshint` had a strict violation with `validthis`.
* MongoDB, Mongoose, and Twitter Bootstrap added to project.

![Chrome on Android 4.4](https://github.com/garystafford/meanstack-data-samples/blob/master/public/images/Screenshot_2014-03-18-20-41-48.png?raw=true =50x)
