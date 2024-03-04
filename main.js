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


// Assigning values to variables
var x = 3;
var y = -7;
var z = 2;

// Checking different conditions based on the signs of x, y, and z
if (x > 0 && y > 0 && z > 0) {
  alert("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
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




// Write a JavaScript function that generates all combinations of a string.
function substrings(str1) {
  // Initialize an empty array to store individual characters of the input string
  var array1 = [];

  // Loop through the characters of the input string and store each character in the array
  for (var x = 0, y = 1; x < str1.length; x++, y++) {
    array1[x] = str1.substring(x, y);
  }

  // Initialize an empty array to store all combinations
  var combi = [];
  var temp = "";
  
  // Calculate the total number of combinations using the formula 2^n
  var slent = Math.pow(2, array1.length);

  // Generate all combinations using bitwise operations
  for (var i = 0; i < slent; i++) {
    temp = "";
    
    // Iterate through each character in the array
    for (var j = 0; j < array1.length; j++) {
      // Check if the j-th bit of the binary representation of i is set
      if (i & Math.pow(2, j)) {
        // If set, append the corresponding character to the temporary string
        temp += array1[j];
      }
    }

    // If the temporary string is not empty, add it to the combinations array
    if (temp !== "") {
      combi.push(temp);
    }
  }

  // Log the generated combinations, joined by newline, to the console
  console.log(combi.join("\n"));
}

// Call the substrings function with the input string "dog"
substrings("dog"); 



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

function remove_from_left(arr, n = 1){
  return arr.slice(n); 
}
console.log(remove_from_left([1, 2, 3]));
console.log(remove_from_left([1, 2, 3], 1));
console.log(remove_from_left([1, 2, 3], 2));
console.log(remove_from_left([1, 2, 3], 4));


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
  
