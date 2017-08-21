var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://farm9.staticflickr.com/8307/8008754016_3dd8fd265c.jpg",
//         description: "This is a huge granite hill, no bathrooms. No Water. Beautiful granite!"
//     }, function(err, campground){
//         if (err){
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });

var campgrounds = [
       {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
       {name: "Granite Hill", image: "https://farm9.staticflickr.com/8307/8008754016_3dd8fd265c.jpg"},
       {name: "Mountain Goats Crest", image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg"},
        {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
       {name: "Granite Hill", image: "https://farm9.staticflickr.com/8307/8008754016_3dd8fd265c.jpg"},
       {name: "Mountain Goats Crest", image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg"}
       ];
       
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
    Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
           res.render("show", {campground: foundCampground});
       }
    });

    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp up n' Running!");
});