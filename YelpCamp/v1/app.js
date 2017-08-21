var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

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

app.get("/campgrounds", function(req, res){
       res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Yelp Camp up n' Running!");
});