# Employee Management
A basic CRUD application with a neat and clean UI in Angular which using Material Design.

![Application Screenshot](https://github.com/sranmanpreet/employee-management/blob/master/public/frontend/src/assets/EmpDep.png?raw=true)

# Features!
  - Add/Update/Delete Departments
  - Add/Update/Delete Employees
  - Search Enabled
  - Pagination
  - Supports NoSQL Database


### Tech

Application uses a number of open source projects to work properly:

* [Angular] - A Javascript Framework by Google!
* [Angular Material Design] - A UI component library for Angular
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [MongoDB] - A NoSQL database

### Installation

Application requires [Node.js](https://nodejs.org/) v4+ to run.

Setup database and provide database configuration in ``hunar_app/config/config.json``
```sh
        "MONGODB_URI": "mongodb://localhost:27017/hunar?authSource=hunar",
        "MONGODB_USER": "admin",
        "MONGODB_PASS": "password"
```
Install the dependencies and devDependencies and start the server.

```sh
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

Install the dependencies and devDependencies and start the client.

```sh
$ cd public/frontend
$ npm install
$ ng serve -o
```

For production environments...

```sh
$ cd public/frontend
$ npm install --production
$ NODE_ENV=production node app
```


License
----

MIT


**Free Software, Hell Yeah!**

**Suggestions/Improvements are welcome. Want to develop together? You are most welcome.**


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [Angular Material Design]: <https://material.angular.io/>
   [express]: <http://expressjs.com>
   [Angular]: <https://angular.io/>
   [MongoDB]: <https://www.mongodb.com/>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
