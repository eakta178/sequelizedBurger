var db = require("../models");
var express = require("express");
var router = express.Router();


router.get("/", function(req, res) {
  db.Burger.findAll({
  }).then(function(burger_data) {
    // results are available to us inside the .then
    console.log(burger_data);
    res.render("index", {burger_data});
  });
});
router.post("/burgers/create", function(req, res) {
  db.Burger.create(req.body.burger_name).then(function(result) {
    // results are available to us inside the .then
    console.log(result);
    res.redirect('/');
  });
});
router.put("/burgers/update", function(req, res) {

  db.Burger.update({
    devoured: true
  },{
    where: {
      id: req.body.burger_id
    }
  }).then(function(result){
    console.log(result);
    res.redirect('/')
  });
  
});

// Export routes for server.js to use.
module.exports = router;
  
  
  



