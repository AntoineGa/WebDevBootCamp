function average(scores){
    var theAverage = 0;
    for (var i=0; i <scores.length; i++){
        theAverage += scores[i];
    }
    
    console.log(Math.round(theAverage / scores.length));
};

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2=[40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

average(scores);
average(scores2);