// Строгий режим
"use strict"



let i = 0;
while (i<3) {
    console.log(`number ${i}`);
    i++;
}

firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size === 1) {
            break firstFor;
        }
        console.log(size);
    }
}

let value = "135.58px";
value = parseFloat(value)
console.log(value);

console.log(Math.max(10, 58, 39, -150, 0));
console.log(Math.floor(58.858));

let text = 'фрилансер';
console.log(text[5]);
console.log(text.slice(3, 6));

let uperCase = text.toUpperCase();
console.log(uperCase);


//========================================================================================================================================================
// let someString = `Hello, how are you`;

// console.log(someString);
// console.log(someString[0]);
// console.log(someString.toLowerCase());


// let someStringLower = someString.toLowerCase();
// console.log(someStringLower);
// console.log(someStringLower.includes('hel'));
// console.log(someStringLower.startsWith('how'));


// let someNewString = someString.slice(0,5);
// console.log(someNewString);

// someString = someString.replace('H', 'G');
// console.log(someString);



// let someNumber = 23.2;
// console.log(Math.floor(someNumber));
// console.log(Math.ceil(someNumber));
// console.log(Math.round(someNumber));
// console.log(Math.random());
// console.log(Math.abs(someNumber));
// console.log(Math.max(23,45,100));
// console.log(Math.min(23,-45,100));

// let someVar = '23.4px';
// console.log(parseFloat(someVar));

// let numberOne = 50;
// let numberTwo = '2';

// let sumNumder = numberOne * numberTwo;
// console.log(sumNumder);

// numberTwo = parseInt(numberTwo);
// let sumNumder = numberOne + numberTwo;
// console.log(sumNumder);

// let numberOne = "50";
// console.log(+numberOne);

// let results = 2 + 3 * 10 / +"5";
// console.log(results);

// console.log('4' == 4);

// let varTrue = true;
// let varFalse = false;

// if ((varTrue && varFalse) || (varTrue || varFalse)) {
//     console.log(':)');
// } else {
//     console.log(':(');
// }

// if (varTrue && varFalse || varTrue || varFalse) {
//     console.log(':)');
// } else {
//     console.log(':(');
// }

// let varOne = "1";
// let varTwo = 2;
// let varThree = 3;
// let varFour = 4;

// if (varOne === 1 || varTwo === 2 && varThree < 4 || varFour > 6) {
// 	console.log('Умова is true');
// } else {
//     console.log(':(');
// }


// let someString = `Hello, how are you!`;
// for (let i = 0; i < someString.length; i++) {
//     console.log(someString[i]);
    
// }