
 
$(document).ready(function() {

    //Global variables 
    var winCounter = 0;
    var lossCounter = 0;
    var gemOptions = [];
    var circle;
    var roundSquare;
    var rectangle;
    var triangle;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var gemValue;
    var randomNum = 0;
    var userNum = 0

    var isDarkMode = false;
    

 // Sets the random number between 19 - 120   
 randomNum = Math.floor(Math.random() * 120) + 19; 

 // Prints out the random number in the HTML
 $("#randomNum").html(randomNum);


 // Each gem will set the number between 1 - 12
 circle = Math.floor(Math.random() * 12) + 1; 
 roundSquare = Math.floor(Math.random() * 12) + 1; 
 rectangle = Math.floor(Math.random() * 12) + 1; 
 triangle = Math.floor(Math.random() * 12) + 1; 

// Variables pushed into the gemOptions array
gemOptions.push(circle, roundSquare, rectangle, triangle);



for (var i = 0; i < gemOptions.length; i++){


   // increments to help identify the indexes in the array
    if (i === 0){

    // Sets the gem value
    gem1 = $('#circle');
    gem1.attr('data-crystalvalue', gemOptions[i]);
    } else if (i === 1){
    gem2 = $('#roundSquare');
    gem2.attr('data-crystalvalue', gemOptions[i]);
    } else if (i === 2){
    gem3 = $('#rectangle');
    gem3.attr('data-crystalvalue', gemOptions[i]);
    } else if (i === 3){
    gem4 = $('#triangle');
    gem4.attr('data-crystalvalue', gemOptions[i]);
    }



}

// Resets the game after the user win or loses
function reset(){
    randomNum = Math.floor(Math.random() * 120) + 19; 
    circle = Math.floor(Math.random() * 12) + 1; 
    roundSquare = Math.floor(Math.random() * 12) + 1; 
    rectangle = Math.floor(Math.random() * 12) + 1; 
    triangle = Math.floor(Math.random() * 12) + 1; 
    gemOptions.push(circle, roundSquare, rectangle, triangle);

    for (var i = 0; i < gemOptions.length; i++){
        if (i === 0){
        gem1 = $('#circle');
        gem1.attr('data-crystalvalue', gemOptions[i]);
        } else if (i === 1){
        gem2 = $('#roundSquare');
        gem2.attr('data-crystalvalue', gemOptions[i]);
        } else if (i === 2){
        gem3 = $('#rectangle');
        gem3.attr('data-crystalvalue', gemOptions[i]);
        } else if (i === 3){
        gem4 = $('#triangle');
        gem4.attr('data-crystalvalue', gemOptions[i]);
        }  
    } 
    circle;
    roundSquare;
    rectangle;
    triangle;
     gem1;
     gem2;
     gem3;
     gem4;
    userNum = 0;
    gemOptions = [];
    $("#randomNum").html(randomNum);
    $("#userNum").html(userNum);
}


// Sets up a click event to apply to every gem 
$('.jewels').on('click', function(){
    
    //Using $(this) to specify that the gemValue will be extracted from the gem
    // Plus the attr (attribute) will grab the data-crystalvalue
    gemValue = ($(this).attr('data-crystalvalue'));

    //Each gemValue will be a string, so its task is to convert it to an integer.
    gemValue = parseInt(gemValue);

// Every click adds up the gem values to the user number 
    userNum += gemValue;

    // Prints out the user number in the HTML
    $('#userNum').html(userNum);
    
   // If the user number matches the random number, the user wins
    if (randomNum === userNum){

        // Box will pop out after the user wins the game. 
        alert ('You Win!!!');

       // Adds the number of wins
        winCounter++;

        //prints out the number of wins in HTML
        $('#winsCount').html(winCounter);

        //calls out the reset function
        reset();


      // If the user number is more than the random number, the user loses.  
    } else if (userNum > randomNum){
        // Box will pop out after the wins the gane
        alert('You Lose!!!');

        // Adds the number of losses
        lossCounter++;

        // Prints out the number of losses in HTML
        $('#lossCount').html(lossCounter);

        //calls out the reset function
        reset();
    }
  



});



// Set up the click event for normal mode and night mode
$('button').on('click', function(){

    //When the theme is in normal mode after the button is clicked
    if (isDarkMode){
        $('body').css({'background-color':'#04c4c1'});
        $('header').css({'border-bottom-style' : 'solid' , 'border-bottom-color': 'white', 'border-border-width': '2px'});
        $('.winLoseBoard').css({'color': '#04c4c1'});
        $('.scoreboard').css({'color': '#04c4c1'});
        $(this).css({'color': 'black' });
        isDarkMode =false;
    
    //When the theme is in night mode after the button is clicked
    } else {
        $('body').css({'background-color':'black'});
        $('header').css({'border-bottom-style' : 'solid' , 'border-bottom-color': 'white', 'border-border-width': '2px'});
        $('.winLoseBoard').css({'color': 'black'});
        $('.scoreboard').css({'color': 'black'});
        $(this).css({'color': '#04c4c1' });
        isDarkMode = true;
    }
});

























});
















































