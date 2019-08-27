var winCounter = 0;
var lossCounter = 0;
var gemOptions = [];
var gems;
var gemValue;
var randomNum = 0;
var userNum = 0

 
$(document).ready(function(){

 // Chooses the random number between 19 - 120   
 randomNum = [Math.floor(Math.random() * 120) + 19]; 
 // Prints out the random number
 $("#randomNum").html(randomNum);

 // Chooses each gem between 1 - 12
 gemOptions = [Math.floor(Math.random() * 12) + 1]; 

for (var i = 0; i < gemOptions.length; i++){

gems = $('.jewels');
gems.attr("data-gemvalue", gemOptions[i]);
$('.gems').append(gems);

}


$('.jewels').on('click', function(){

gemValue = ($(this).attr('data-gemvalue'));
gemValue = parseInt(gemValue);

userNum += gemValue;

$('#userNum').html(userNum);

if (userNum === randomNum){
    alert("You win");
    winCounter++
    $('#winCount').html(winCounter);
} else if (userNum >= randomNum){
    alert("You Lose");
    lossCounter++;
    $('#lossCount').html(lossCounter);
}


});















































});
