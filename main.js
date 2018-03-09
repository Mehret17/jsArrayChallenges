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

//challenge 2

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];

var challenge2 = document.getElementById("challenge2");
var inputSwap = [];

for (var i = 0; i < challengeTwoInputA.length; i++){
  var numberStringArray = challengeTwoInputA[i].toString().split('');
    console.log(numberStringArray);
  for(var j = 0; j < numberStringArray.length; j++){
    if (numberStringArray[j] == '3'){
      numberStringArray[j] = '7';
    } else if (numberStringArray[j] == '7'){
      numberStringArray[j] = '3';
    }
  }
  inputSwap.push(Number(numberStringArray.join("")))
}
challenge2.innerHTML += inputSwap;