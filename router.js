var bodyParser = require("body-parser");
var groupController = require("./controllers/CountriesController");
module.exports = function(app) {
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post("/api/createGroup", (req, res) => {
      groupController.CreateGroup(req, res);
    }
  );

  app.get("/api/allGroups/getGroupsByPerson/:namePerson", (req, res) => {
    groupController.GetGroupsByPerson(req, res);
  });

  app.get("/api/allGroups/getGroupsByPersonAdmin/:id", (req, res) => {
    groupController.GetGroupsByPersonAdmin(req, res);
  });
  

  app.get("/api/allGroups/getGroupsByPersonNotAdmin/:id", (req, res) => {
    groupController.GetGroupsByPersonNotAdmin(req, res);
  });

  app.get(
    "/api/getOneGroupById/:id",
    (req, res) => {
      groupController.GetOneById(req, res);
    }
  );

  app.get(
    "/api/getOneGroupByName/:name",
    (req, res) => {
      groupController.GetOneByName(req, res);
    }
  );

  app.get('/api/getAllGroupBySymbols/:name', (req, res) => {
    groupController.GetAllBySymbols(req, res);
  });

  app.get('/api/getAllGroupMembersByID/:id', (req, res) => {
    groupController.GetAllMembers(req, res);
  });

  app.put(
    "/api/updateGroup",
    (req, res) => {
      groupController.Update(req, res);
    }
  );
  
  app.delete("/api/deleteGroup", (req, res) => {
    groupController.Delete(req, res);
  });

  app.post("/api/sendEmail", (req, res) => {
    groupController.SendMail(req, res);
  });

};
