var myArr = ['wordOne','wordTwo','wordThree','wordFour','wordFive']
var maxLength = 9
var newArr = [];
for (var count = 0;count < myArr.length; count++){

	if(myArr[count].length < maxLength) {
newArr.push(myArr[count]);
  }
}

console.log(newArr)


