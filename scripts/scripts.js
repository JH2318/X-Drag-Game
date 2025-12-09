$(function () {
console.log("document is ready!")


//1. make the picture draggable
$("#meme-pic").draggable({
    containment: "#containment-wrapper", 
    scroll: false,
    drag: function (){
        calculateWow();
    },
    stop: function(){
        calculateWow();
    }
});

//score calculation
function calculateWow() {
    var pos = $("#meme-pic").position();


//score value based on the picture location
var score = Math.floor(pos.top + pos.left);
console.log(score);
//Display Score
$("#score-display").text(score);
//Progress bar (max 1000.. can be changed)
var percent = Math.min((score / 1000) * 100, 100);
$("#score-progress").css("width", percent + "%");
//Status message
if (score < 0){
    $("#status-message").text("How in the world did you do this!");
}

else if (score < 300){
    $("#status-message").text("Warming up..");
}
else if  (score < 600) {
     $("#status-message").text("The X is gaining power.");
} else if (score < 900) {
     $("#status-message").text("Skilled..");
} else {
     $("#status-message").text("Winner");
}
}
});