var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Campground = require("./models/campground.js");
var seedDB = require("./seeds.js");


seedDB();

mongoose.connect("mongodb://localhost/yelp_camp_v3");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("landing"); 
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
       // Get all campgrounds from DB
       Campground.find({}, function(err, allCampgrounds){
          if(err){
              console.log(err);
          } else {
              res.render("index", {campgrounds:allCampgrounds});
          }
       });
       // res.render("campgrounds", {campgrounds: campgrounds});
});

//CREATE ROUTE - adds new campgrounds to database
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc}
    //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
    
        
});

//NEW - show form to create new campgrounds
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           console.log(foundCampground);
           res.render("show", {campground: foundCampground});
       }
    });

    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp up n' Running!");
});