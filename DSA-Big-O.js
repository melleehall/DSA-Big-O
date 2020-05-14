// 1.1) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. You want to 
// find a playmate for your dog, preferably of the same breed. 
// So you want to know if anyone out of the 15 people have the 
// same breed as your dog. You stand up and yell out, who 
// here has a golden retriever and would like to be a playdate 
// for my golden. Someone yells - "I do, be happy to bring him over"

// Constant time O(1)
// no matter how many people there are you, you just yell once

// 1.2) Determine the Big O for the following algorithm: You are sitting 
// in a room with 15 people. You want to find a playmate for your dog 
// who is of the same breed. So you want to know if anyone out of the 
// 15 people have the same breed as your dog. You start with the first 
// person and ask him if he has a golden retriever. He says no, then 
// you ask the next person, and the next, and the next until you find 
// someone who has a golden or there is no one else to ask.

// Linear time O(n)
// the function time max can end up being equivalent to the size of the input array 

// 2. Even or Odd

// function isEven(value) {
//     if (value % 2 === 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }

// Constant time 0(1)
// no matter what the input, only checking one value for divisibility

// 3. Are you here?

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// Polynomial time O(n^k)
// This is a nested loop - it has to look at each item in the first 
// array and compare it to each item in the second array so if either
// or both array is larger, it will affect run time which is equal to
// some input size n raised to some constant power k

// 4. Doubler

// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// Linear time O(n)
// Given inputs of arrayA and arrayB which is twice the length of 
// arrayA, it will take twice as long to process arrayB compared to
// arrayA

// 5. Naive search
// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// Linear time O(n)
// There's a possibility of having to check every item in the 
// array but the loop will only run once per item in the array. 
// It's possible that it will max out at the equivalent of the
// array length. 
// If this array was sorted (by number or letter), we could 
// use logarithmic time efficiency to split the problem in half


// 6. Creating pairs
// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }

// Polynomial time O(n^2)
// Two nested for-loops iterating over a single array
// Inputs of size 2, 3, 4, 5, 6, 7 take 1, 3, 6, 10, 15, and 21,  
// respectively.  An input of length 3 takes 3, doubling it to an 
// input of 6 takes 15 which is more than double so it's not linear 
// time. It's also not increasing exponentially as it is only
// increasing by one more than the previous increase.  


// 7. Compute the sequence

// function compute(num) {
//     let result = [];

    // for each number from 1 up to and include the num arguement
//     for (let i = 1; i <= num; i++) {
        
        // for the first index, push a number 0 onto the array
//         if (i === 1) {
//             result.push(0);
//         }

        // for the 2nd index, push a number 1 onto the array
//         else if (i === 2) {
//             result.push(1);
//         }

        // for any other index, push on sum of 2 indices
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// Linear time O(n)
// The num argument is directly proportionate to the runtime
// complexity.  The loop will only run once per number from 1 to num.
// For any number above 2, the else statement will
// always have to run one extra time as the argument number 
// passed grows by one.


// 8.  An efficient search

// function efficientSearch(array, item) {
    //     let minIndex = 0;
    //     let maxIndex = array.length - 1;
    //     let currentIndex;
    //     let currentElement;

    //     while (minIndex <= maxIndex) {
    //         currentIndex = Math.floor((minIndex + maxIndex) / 2);
    //         currentElement = array[currentIndex];

    //         if (currentElement < item) {
    //             minIndex = currentIndex + 1;
    //         }
    //         else if (currentElement > item) {
    //             maxIndex = currentIndex - 1;
    //         }
    //         else {
    //             return currentIndex;
    //         }
    //     }
    //     return -1;
// }


// Logarithmic time O(log(n))
// The problem size is cut in half on every iteration.
// The function finds and sets a new midpoint and evaluating 
// the integers on either side of it to determine if the left 
// or right of it still needs to be checked.  It's not looking 
// at each number in the array so the time grows slowly.


// 9. Random element

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// Constant time O(1)
// No matter how big the array is, the function is always just 
// picking a random index and getting its value so it's always
// called once.



// 10. What Am I?
// function isWhat(n) {
//     if (n < 2 || n % 1 !== 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }


//  Linear time O(n)
//  The function will only iterate through the array once but may
//  max out at the equivalent of the length of the array.

//  The function first completes a one-time check of whether 
//  the number is less than 2 or if it is not divisible by 1.
//  Then a loop commences from 2 to n and checks if the argument
//  number is divisible by the current value of i.  If n is divisible 
//  by any number less than it other than 1, it returns false.
//  If it returns true, this means the number is prime and not
//  divisble by any number less than it (other than 1).


// 11. Tower of Hanoi

// There are three rods and a number of disks of different sizes 
// which can slide onto any rod. The puzzle starts with the disks 
// neatly stacked in ascending order of size on one rod, the 
// smallest disk at the top (making a conical shape). 
// The other two rods are empty to begin with.

// The goal of the puzzle is to move the entire stack of rods to 
// another rod (can't be the original rod where it was stacked before) 
// where it will be stacked in the ascending order as well. This 
// should be done obeying the following rules: 
// i) Only one disk may be moved at a time 
// ii) Each move consists of taking the upper disk from one of the 
// rods and sliding it onto another rod, on top of the other disks 
// that may already be present on that rod. 
// iii) A larger disk may not placed on top of a smaller disk

function TOH(discCount, source, destination, buffer) {
    // base
    if (discCount <= 1) {
        console.log(`Move disc from ${source} to ${destination}`)
        return;
    }
    // general
    
    TOH(discCount - 1, source, buffer, destination)
    console.log(`Move disc from ${source} to ${destination}`)
    TOH(discCount - 1, buffer, destination, source)
}

console.log(TOH(4, 'A', 'C', 'B'))

// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// Rod A: 1 disc Rod B: 2 discs Rod C: 2 discs

// How many moves are needed to complete the puzzle with 3 disks? A: 7
// with 4 disks? A: 15
// with 5 disks? A: 31

// What is the runtime of your algorithm? O(2^n)  Increasing the number of discs by one 
// doubles the number of operations performed

