var express = require("express");
var app = express();
var http = require("http").Server(app);
var mongoose = require("mongoose");
var config = require("./configDB");
var router = require("./router");
var bodyParser = require("body-parser");
var cors = require('cors')
var port = process.env.PORT || 3000;

class Server {
  constructor() {
    this.app = express();
    this.app.listen(port, function() {
      console.log("Server listening on port: " + port);
    });
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    app.use(cors());
    router(this.app);
    mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true });
  }
}

module.exports.Server = Server;
const server = new Server();
