var db = require("../models");


module.exports = function(app) {
  // Load index page
  app.get("/kaan/test", function(req, res) {
    db.homecontrols.findAll({}).then(function(dbhome) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbhome
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/homepage", function(req, res) {
    db.Users.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("homepage", {
        example: dbExample
      });
    });
  });

  app.get("/loginkaan/test", function(req, res){
    res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
