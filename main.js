let obj = {
    name: "Kaizen",
    success: "True"
};

Object.freeze(obj);
console.log(obj)

var str = 'the quieter you become, ';
var str2 = ' the more you are able to hear';
let fullStr = str + str2;


var string = 'New String';
let splitString = string.split("");

let joinedString = splitString.join("");

var firstName = "KZ011";
var lastLetterOfFirstName = firstName[firstName.length -1]; // 1


const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));


const person = {
    name: "Forrest Knight",
    age: 21,
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;



var sandwich = ["peanut butter", "jelly", "bread"][
    (["Bulls", 23], ['White Sox', 45])
];

var array = [50,60,70];
var ourData = array[0]

array[1] = 25;


var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14],
];
arr[3]; // [[10,11,12], 13, 14]
arr[3][0]; // [10,11,12]
arr[3][0][1]; // 11


var array1 = [1, 'two', 3];
array1.reverse();



var arr = [1,2,3];
arr.push(4); 

var threeArr = [1,4,6];
var oneDown = threeArr.pop();


var ourArray1 = [1,2,[3]];
ourArray1.shift();

var newArr = [1,2,3,4];
var firstArrAdd = newArr.unshift('hello');


var newArr = [1,2,3,4];
newArr.unshift('hello');

let arra= ['I','spy','with','my','little','eye','something','green','.'];
let elementRemove = 2;
let startIndex = arra.length - elementRemove;
arra.splice(startIndex,elementRemove);
console.log(arra);



function colorChange(arr,index,newColor) {
    arr.splice(index, 1, newColor);
    return arr;
}

let colorScheme = ["#878787", "#a08794", "#bb7e8c", "#c9b6be", "#d1becf"];
colorScheme = colorChange(colorScheme, 2, "#332327")


function findMax(numbers){
    var max = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}


function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);


var number = [1,2,3,4,5,6,7,8,9,10];
var returnedMax = findMax(number);
console.log(returnedMax);
console.table(returnedMax);

function isPrime(num){
    if (number <= 1){
        return false;
    }

    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}







function validateArrayNotEmpty(arr) {
  if (arr.length === 0) {
    throw new Error('Array is empty!');
  }
}


try {
  const nums1 = [1, 2, 3, 4];
  validateArrayNotEmpty(nums1); 

  const nums2 = [];
  validateArrayNotEmpty(nums2); 
} catch (error) {
  console.log('Error:', error.message);
}


function validate_String_Not_Empty(str) {
  if (str.length === 0) {
    throw new Error('Sorry, the string is empty!');
  }
}

// Example:
try {
  const string1 = 'Hello, World!';
  validate_String_Not_Empty(string1); // Valid non-empty string

  const string2 = '';
  validate_String_Not_Empty(string2); // Throws an error
} catch (error) {
  console.log('Error:', error.message);
}



let funModule = (function () {
    return {
      isCuteMixin: function (obj) {
        obj.isCute = function () {
          return true;
        };
      },
  
      singMixin: function (obj) {
        obj.sing = function () {
          console.log("Singing is nice lol");
        };
      },
    };
  })();
  
  function Dog() {}
  let goodBoy = new Dog();
  
  
  funModule.singMixin(goodBoy);
  goodBoy.sing(); 
  
