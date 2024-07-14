function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.toLowerCase().split('').reverse().join('')
  if(reversedWord === word) {
    return true
  } else {
    return false
  }
}

/* 
The isPalindrome function takes a string as an argument and returns true if the string is a palindrome
*/

/*
    Convert the word to lowercase. We will then split the word into seperate letters and reverse it order to see whether it is a palindrome. After reversing join the word. Then we made a comparison to check if it is a palindrome and if it is, it returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
