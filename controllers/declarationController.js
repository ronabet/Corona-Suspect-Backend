var Declarations = require("../models/DeclarationModel");
var exports = module.exports;

exports.CreateDeclaration = function(req, res) {
  var Declaration = new Declarations(req.body);
  Declaration.save(err => {
    if (err) throw err;
    res.status(200).json({ message: "Declaration Created!" });
  });
}

exports.GetAllDeclarations = function(req, res) {
  Declarations.find({}, (err, declarations) => {
    if (err) throw err;
    res.status(200).send(declarations);
  });
}

exports.GetDeclarationById = function(req, res) {
  Declarations.findOne({ suspectIdentityNumber: req.params.id }, function (err, DeclarationById) {
    if (err) throw err;
    res.status(200).send(DeclarationById);
  });  
}

exports.GetOneByName = function(req, res) {
  Groups.findOne({ name: req.params.name })
    .populate("people.user")
    .exec(function(err, group) {
      if (err) return throwError(err);
      res.status(200).send(group);
    });
}

