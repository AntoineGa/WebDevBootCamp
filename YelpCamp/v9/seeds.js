var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");


var data = [
    {
        name: "Clouds Rest",
        image: "https://farm2.staticflickr.com/1179/1051152631_f8b4ae0a33.jpg",
        description: " But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        name: "Farmville",
        image: "https://farm7.staticflickr.com/6191/6082139089_c88afd6ba4.jpg",
        description: " But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
        name: "Mountain Side Pass",
        image: "https://farm2.staticflickr.com/1084/1331589629_006a8916a2.jpg",
        description: " But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
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