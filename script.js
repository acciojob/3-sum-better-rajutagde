// function threeSum(nums, target) {
//   // Sort the input array in non-descending order
//   nums.sort((a, b) => a - b);

//   // Initialize a variable to store the closest sum found so far
//   let closestSum = Infinity;

//   // Loop through the input array, considering each number as the first number in the triplet
//   for (let i = 0; i < nums.length - 2; i++) {
//     // Skip duplicates
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }

//     // Initialize two pointers to the right of the current number
//     let left = i + 1;
//     let right = nums.length - 1;

//     // Loop while the left pointer is less than the right pointer
//     while (left < right) {
//       // Calculate the sum of the three numbers
//       let sum = nums[i] + nums[left] + nums[right];

//       // Update the closest sum found so far if necessary
//       if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
//         closestSum = sum;
//       }

//       // If the sum is less than the target, move the left pointer to the right
//       if (sum < target) {
//         left++;
//       }
//       // If the sum is greater than the target, move the right pointer to the left
//       else if (sum > target) {
//         right--;
//       }
//       // If the sum is equal to the target, return the target
//       else {
//         return target;
//       }
//     }
//   }

//   // Return the closest sum found
//   return closestSum;
// }

// // Example usage:



function threeSum(nums, target) {
  // Sort the input array in non-descending order
  nums.sort((a, b) => a - b);

  // Initialize a variable to store the closest sum found so far
  let closestSum = Infinity;

  // Loop through the array from the first to the third to last element
  for (let i = 0; i < nums.length - 2; i++) {
    // Set the left and right pointers to the elements after the current element
    let left = i + 1;
    let right = nums.length - 1;

    // Loop through the remaining elements between the left and right pointers
    while (left < right) {
      // Calculate the sum of the current triplet
      const sum = nums[i] + nums[left] + nums[right];

      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // Move the left and right pointers based on the value of the current sum
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  // Return the closest sum found
  return closestSum;
}
