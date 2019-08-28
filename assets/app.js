
 
$(document).ready(function() {
    var winCounter = 0;
    var lossCounter = 0;
    var gemOptions = [];
    var circle = $('#circle');
    var roundSquare = $('#roundSquare');
    var rectangle = $('#rectangle');
    var triangle = $('#triangle');
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var gemValue;
    var randomNum = 0;
    var userNum = 0
    

 // Chooses the random number between 19 - 120   
 randomNum = Math.floor(Math.random() * 120) + 19; 
 // Prints out the random number
 $("#randomNum").html(randomNum);


 // Chooses each gem between 1 - 12
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
    userNum = 0;
    gemOptions = [];
    $("#randomNum").html(randomNum);

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






















});
















































