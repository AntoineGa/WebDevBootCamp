var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Clouds Rest",
        image: "https://farm2.staticflickr.com/1179/1051152631_f8b4ae0a33.jpg",
        description: "blah blah blah"
    },
    {
        name: "Farmville",
        image: "https://farm7.staticflickr.com/6191/6082139089_c88afd6ba4.jpg",
        description: "blah blah blah1233"
    },
    {
        name: "Mountain Side Pass",
        image: "https://farm2.staticflickr.com/1084/1331589629_006a8916a2.jpg",
        description: "blah blah blah098754321"
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
   if (err){
       console.log(err);
   }
   console.log("removed campgrounds!"); 
    // add a few campgrounds
    data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
          if(err){
              console.log(err)
              } else {
                  console.log("added a campground");
                  //create a comment
                  Comment.create(
                      {
                        text: "This place is great, but no internet",
                        author: "Homer"    
                  }, function(err, comment){
                      if(err){
                          console.log(err);
                      } else {
                      campground.comments.push(comment);
                      campground.save();
                      console.log("Created new Comment");
                        }
                  });
              }
       });
    });
});
    

    //add a few comments
}

module.exports = seedDB;