var declarationController = require("./controllers/declarationController");
const { body } = require('express-validator');

module.exports = function(app) {
  app.get("/api/declarations", (req, res) => {
    declarationController.GetAllDeclarations(req, res);
  });
  
  app.get("/api/declarations/getById/:id", (req, res) => {
    declarationController.GetDeclarationById(req, res);
  });
  
  app.post("/api/declarations/create",[ 
    body('reporterMail').isEmail(),
    body('wasExported').not().isEmpty().isBoolean()
  ], (req, res) => {
    declarationController.CreateDeclaration(req, res);
  });

  app.put("/api/declarations/update", (req, res) => {
    declarationController.Update(req, res);
  });

};
