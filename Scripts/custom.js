
function GoHome(){
    PlaySpeech("Enjoy the your stay at San Antonio Airport");
    location.href = "maincontents.htm";
}

PlaySpeech("Please remove FINAL FOUR programs from checked bags and place inside your carry-on bag to prevent delays in processing baggage.");

setInterval(function(){
    PlaySpeech("Please remove FINAL FOUR programs from checked bags and place inside your carry-on bag to prevent delays in processing baggage.");
}, 20000);