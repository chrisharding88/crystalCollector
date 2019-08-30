
 
$(document).ready(function() {
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
    

 // Chooses the random number between 19 - 120   
 randomNum = Math.floor(Math.random() * 120) + 19; 
 // Prints out the random number
 $("#randomNum").html(randomNum);


 // Each gem will set the number between 1 - 12
 circle = Math.floor(Math.random() * 12) + 1; 
 roundSquare = Math.floor(Math.random() * 12) + 1; 
 rectangle = Math.floor(Math.random() * 12) + 1; 
 triangle = Math.floor(Math.random() * 12) + 1; 

gemOptions.push(circle, roundSquare, rectangle, triangle);
console.log(gemOptions);



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



$('.jewels').on('click', function(){
    gemValue = ($(this).attr('data-crystalvalue'));
    gemValue = parseInt(gemValue);

    userNum += gemValue;

    $('#userNum').html(userNum);
    console.log(userNum);
    console.log(randomNum);

    if (randomNum === userNum){
        alert ('You Win!!!');
        winCounter++;
        $('#winsCount').html(winCounter);
        reset();
        
    } else if (userNum > randomNum){
        alert('You Lose!!!');
        lossCounter++;
        $('#lossCount').html(lossCounter);
        reset();
    }
  



});



// Changes to Night Mode after the button is clicked
$('button').on('click', function(){
    if (isDarkMode){
        $('body').css({'background-color':'#04c4c1'});
        $('header').css({'border-bottom-style' : 'solid' , 'border-bottom-color': 'white', 'border-border-width': '2px'});
        $('.winLoseBoard').css({'color': '#04c4c1'});
        $('.scoreboard').css({'color': '#04c4c1'});
        isDarkMode =false;
    } else {
        $('body').css({'background-color':'black'});
        $('header').css({'border-bottom-style' : 'solid' , 'border-bottom-color': 'white', 'border-border-width': '2px'});
        $('.winLoseBoard').css({'color': 'black'});
        $('.scoreboard').css({'color': 'black'});
        isDarkMode = true;
    }
});

























});
















































