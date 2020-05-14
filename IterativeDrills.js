// 12. Iterative version
// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.



// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

function countSheep (num) {
    for (let i = num; i > 0; i--) {
        console.log('Another sheep jumps over the fence')
      }
    console.log('All sheep jumped over the fence')
}
  
countSheep(3)

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

function powCalc (base, exp) {
    let results = 1;
    for (let i = 1; i <= exp; i++ ) {
      results = results * base;
    }
    return results
  }
  
  // Expected Output: 16
  powCalc(2, 4)
  // Expected Output: 1024
  powCalc(4, 5)


// 3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function revStr(str) {
    let strArr = str.split('')
    let reverseArr = []
    for (let i = strArr.length - 1; i >= 0; i--) {
      reverseArr.push(strArr[i])
    }
    return reverseArr.join('')
  }
  
  // Expected output 'einaleM'
  revStr('Melanie')
  // Expected output 'nosloC'
  revStr('Colson')


// 4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triNum (dotsPerSide) {
    let count = 0
    for (let i = 1; i <= dotsPerSide; i++) {
      count += i;
    }
  return count
  }
  
  // Expect output 6
  console.log(triNum(3))
  
  // Expect output 15
  console.log(triNum(5))

// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

function strSplitter(str, delimiter) {
    let length = str.length
    let newArr = []
    let start = 0
    let stop = 0
  
    for (let i = 0; i < str.length; i++) {
      let tempStrArr = []
      if (str[i] === delimiter) {
        stop = i
        newArr.push(str.substring(start, stop))
        start = stop + 1
      } else if (i === (length - 1)) {
        newArr.push(str.substring(start))
      }
    }
  
    return newArr
  }
  
  // Expected Output: ["02", "20", "2020"]
  console.log(strSplitter('02/20/2020', '/'))
  // Expected Output: ["me", "laN", "i", "E"]
  console.log(strSplitter('me$laN$i$E', '$'))


// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.


function fib(num) {
    const arr = [1]
    let num1 = 0
    let num2 = 1
  
    for (let i = 0; i < num - 1; i++) {
      let sum = num1 + num2
      arr.push(sum)
      num1 = num2;
      num2 = sum;
    }
    return arr
  }
  
  // Expected output 1, 1, 2, 3, 5, 8, 13
  console.log(fib(7))
  // Expected output 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  console.log(fib(10))

// 7. Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorials(num) {
    let factorial = 1
  
    for (let i = 1; i <= num; i++) {
      factorial = factorial * i
    }
    return factorial
  }
  
  // Expected output 120
  console.log(factorials(5))
  // Expected output 40320
  console.log(factorials(8))


// 13. Recursive Big O
// Take your solutions from the recursive exercises that you completed in the 
// previous checkpoint and identify the time complexities (big O) of each of them.

// Count Sheep: O(n)
// Power Calculator: O(n)
// Reverse String: O(n)
// Triangle: O(n)
// Split: O(n) 
// Factorial: O(n)
// Fibonacci: O(n)


// 14. Iterative Big O
// Take your solutions from the iterative exercises today and identify the time 
// complexities (big O) of each of them.

// Count Sheep: O(n)
// Power Calculator: O(n)
// Reverse String: O(n)
// Triangle: O(n)
// Split: O(n)
// Factorial: O(n)
// Fibonacci: O(n)