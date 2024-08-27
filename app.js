//  pop method using without array method
var arr = [1, 2, 3, 4, 5, 6];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  newArr[i] = arr[i];
}

newArr[newArr.length] = newArr.length - 1;
arr = newArr;
console.log(arr);

// push method using withour arrray method

var myArr = ["baber", "rizwan", "shahen", "saim"];
var updateArr = [];
for (var i = 0; i < myArr.length; i++) {
  updateArr[i] = myArr[i];
}
myArr[4] = 456;
console.log(myArr);

// unshift method using withour arrray method

var myArr1 = [100, 99, 98, 97, 96];
var newArr1 = [];
for (var i = 0; i < myArr1.length; i++) {
  newArr1[i + 1] = myArr1[i];
}
newArr1[0] = 200;
myArr1 = newArr1;
console.log(myArr1);

// shift method using withour arrray method

var myArr1 = [100, 99, 98, 97, 96];
var newArr1 = [];
for (var i = 1; i < myArr1.length; i++) {
  newArr1[i - 1] = myArr1[i]; 
}
myArr1 = newArr1;
console.log(myArr1);
