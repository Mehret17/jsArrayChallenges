console.log ("Hello");

//Challenge 1
var challenge1 = document.getElementById('challenge1');

var challengeOneInput = "jumbo shrimp";  //jumbo=61, shrimp=83 should display shrimp

var test = challengeOneInput.split(" ");

var firstWord = test[0].split('');
var secondWord = test[1].split('');
var alphabet = "abcdefghijklmnopqrstuvwxyz";


var firstWordCount = 0;
var secondWordCount = 0;

for (var first = 0; first < firstWord.length; first++){
  firstWordCount += alphabet.indexOf(firstWord[first]) + 1;
}
for (var sec = 0; sec < secondWord.length; sec++) {
  secondWordCount += alphabet.indexOf(secondWord[sec]) + 1;
}

if (firstWordCount > secondWordCount) {
  challenge1.innerHTML += firstWord.join('');
}
else {
  challenge1.innerHTML += secondWord.join('');
}