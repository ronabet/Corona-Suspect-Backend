var Declarations = require("../models/DeclarationModel");

var exports = module.exports;

exports.CreateGroup = function(req, res) {
  var group = new Groups(req.body);
  for (let i = 0; i < req.body.people.length; i++) {
    Users.findOne({ _id: req.body.people[i].user }, (err, user) => {
      if (user == null || user == undefined) {
        var newUser = new Users(req.body.people[i].user);
        console.log(newUser);
        newUser.save(err => {
          if (err) throw err;
        });
      }
    });
  }
  group.save(err => {
    if (err) throw err;
  });
  res.status(200).json({ message: "Group Created!" });
};

exports.GetAllGroups = function(req, res) {
  Groups.find({}, (err, groups) => {
    if (err) throw err;
    res.status(200).send(groups);
  });
};

exports.GetOneById = function(req, res) {
  Groups.findOne({ _id: req.params.id })
    .populate("people.user")
    .exec(function(err, group) {
      if (err) return handleError(err);
      res.status(200).send(group);
    });
};

exports.GetOneByName = function(req, res) {
  Groups.findOne({ name: req.params.name })
    .populate("people.user")
    .exec(function(err, group) {
      if (err) return throwError(err);
      res.status(200).send(group);
    });
};

exports.GetAllBySymbols = function(req, res) { console.log("error");
  if(req.params.name.length > 2){
    Groups.find({ "name": { "$regex": `${req.params.name}`, "$options": "i" }}, (err, groups) => {
      if (err) throw err;
      res.status(200).send(groups);
    });
  } else {
      res.status(300);
  }
} 

exports.GetGroupsByPerson = (req, res) => {
  Users.findOne({ fullName: req.params.namePerson }, (err, person) => {
    if (err) throw err;
    Groups.find({ people: { $elemMatch: { user: person.id } } })
      .populate("people.user")
      .exec((err, groups) => {
        if (err) throw err;
        console.log(groups);
        res.status(200).send(groups);
      });
  });
};

/** by person id */
exports.GetGroupsByPersonAdmin = (req, res) => {
  Groups.find({ people: { $elemMatch: { user: req.params.id, admin: true } } })
    .populate("people.user")
    .exec((err, groups) => {
      if (err) throw err;
      console.log(groups);
      res.status(200).send(groups);
    });
};

