 // Write your algorithm here
  function hasTargetSum(array, target) {
    for (let i = 0; i < array.length; i++) {
      const complement = (target - array[i])
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement) {
          return true
        }
      }
    }
    return false
  }


/* 
  Write the Big O time complexity of your function here
*/
//O(n^2) for time
//O(n) for space


/* 
  Add your pseudocode here
*/
//write a fucntion that takes two arguments
//it will take a array of numbers and a target number
//if any two nummgers in the arrya add up to the target sum then it is true
//if none of them add up to the target number then it returns fase
//so it needs an if else statement
//target - each of the numbers in the array to find the numbr it needs to add up
//if the commplement number is found send it back

/*
  Add written explanation of your solution here
*/
//function hasTargetSum(array, target) {} function that takes two arguments
// for (let i = 0; i < array.length; i++) {} itterates through the array 
// const complement = (target - array[i]) finding the complement number needed to add up to the array
//for (let j = i + 1; j < array.length; j++) {} itterates through again to see if it finds any compliments
//if (array[j] === complement) {return true} if else statement returns true
// nextpart returns false if it isn't found

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", hasTargetSum([5, 6, 8, 9, 10], 11))

  console.log("Expecting: false")
  console.log("=>", hasTargetSum([3, 5, 7, 9], 15))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
