var express = require("express");
var app = express();

// "/" => "Hi there"
app.get("/", function(req, res){
    res.send("Hi There!");
});


// "/bye" => "GoodBye"
app.get("/bye", function(req, res){
   res.send("Goodbye!!");
});

// "/dog" => "Meow!"

app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("Meow!!");    
});


app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
     console.log(req.params);
    res.send("Welcome to the comments page");
});

//Catch all for routes not defined --Put this at the end to avoid First-Match
app.get("*", function (req, res){
    res.send("Sorry this page does not exist, ERROR 404");
});

//Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!@!");
});  