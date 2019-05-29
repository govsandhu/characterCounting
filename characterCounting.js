function countLetters(textString) {
  var myObject = {};
  var newArray = textString.split(' ').join("");
  for(var i = 0; i < newArray.length; i++) {
      var key = newArray[i];
      if (myObject[key]) {
        myObject[key] += 1
      } else {
        myObject[key] = 1;
      }
  } return myObject
}

console.log(countLetters("lighthouse in the house"));






