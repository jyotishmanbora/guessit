var sn = Number(prompt("Player 1 :\nEnter any number between 1 to 10"));
if(sn < 1 || sn > 10){
    alert("wrong entry");
}
else{
if(sn === 1){
    alert("PLayer 2:\nHint- less than 5, odd but not prime\nReady to guess?");
}
else if(sn === 2){
    alert("PLayer 2:\nHint- less than 5, even but prime\nReady to guess?");
}
else if(sn === 3){
    alert("PLayer 2:\nHint- less than 5, odd and prime\nReady to guess?");
}
else if(sn === 4){
    alert("PLayer 2:\nHint- less than 5, even and not prime\nReady to guess?");
}
else if(sn === 5){
    alert("PLayer 2:\nHint- neither less than 5 nor greater\nReady to guess?");
}
else if(sn === 6){
    alert("PLayer 2:\nHint- greater than 5, even single digit number with two prime factors\nReady to guess?");
}
else if(sn === 7){
    alert("PLayer 2:\nHint- greater than 5, odd and prime\nReady to guess?");
}
else if(sn === 8){
    alert("PLayer 2:\nHint- greater than 5, even number with a single prime factor\nReady to guess?");
}
else if(sn === 9){
    alert("PLayer 2:\nHint- greater than 5, odd and not prime\nReady to guess?");
}
else{
    alert("PLayer 2:\nHint- it is a double digit number ;)\nReady to guess?");
}

var guess = Number(prompt("Player 2:\nGuess the number"));
if(guess === sn){
    alert("correct guess!");
}
else{
    alert("wrong guess, better luck next time");
}
}