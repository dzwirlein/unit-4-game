

var randomNumber;
var win = 0;
var loss= 0;
var count = 0;

// Start/Rest Game Function

var startGame = function() {

//empty the crystal div's after each iteration

$(".crystals").empty();

// Generate random number between 19-120 

randomNumber = Math.floor(Math.random() * 101 )+ 
19;

// Display target number on the page

$("#targetNumber").html(randomNumber);



// Loop to assign random number to the crystals for each iteration.

for (var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;


    var newCrystal = $("<div>");
        newCrystal.attr({"class":'newCrystal', "data": random
});

   
// create new crystal divs with random numbers for each iteration

    $(".crystals").append(newCrystal);
}

}

startGame();


// onclick from any crystal element runs a function to add the random assigned numbers together and display in dom.

$(document).on('click', ".newCrystal", function(){
    var num = parseInt($(this).attr("data"));

    count += num;

    $("#scoreTracker").html(count);

// If the added numbers equal the assigned random/target number you increment the wins and reset the game and count to zero.
    if( count === randomNumber){
        win ++;
       
        $("#Wins").html("Wins: "+ win);

        count=0;

        startGame();
    }

    // Else if the added numbers are greater than the target number, increment the losses and rest the game and count to zero. 
    else if ( count > randomNumber){
        loss ++;

        $("#Losses").html("Losses: "+ loss);

        count=0;

        startGame();
    }

    
});


