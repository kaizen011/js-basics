let obj = {
    name: "Kaizen",
    success: "True"
}

Object.freeze(obj);
console.log(obj)


var str = 'the quieter you become, ';
var str2 = ' the more you are able to hear';
let fullStr = str + str2;
console.log(fullStr);


var string = 'New String';
let splitString = string.split("");
console.log(splitString);

let joinedString = splitString.join("");
console.log(joinedString);

var firstName = "KZ011";
var lastLetterOfFirstName = firstName[firstName.length]; // 1
console.log(lastLetterOfFirstName);