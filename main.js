// Task 1...!
const data = ["Hello", "Hello1", "Hello2", "Hello3"];

function addNumsFromStr(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let stringLength = array[i].length;

    let currValue = array[i];

    for (let k = 0; k < stringLength; k++) {
      let currChar = currValue[k];
      if (currChar >= 0) {
        sum += parseInt(currChar);
      }
    }
  }

  console.log(sum);
}

// Task 2...!
let firstName = "Shivaprasad";

function revAndLowerCase(str) {
  let reversedStr = "";

  for (let s = str.length - 1; s >= 0; s--) {
    reversedStr += str[s];
  }

  console.log(reversedStr.toLowerCase());
}

// Task 3...!
const numsInStr = ["1", "3", "44", "4", "3", "44", "4", "1", "3"];

function removeDuplNToNums(numsArr) {
  const numsRslt = [];

  numsArr.forEach((val) => {
    if (numsRslt.includes(parseInt(val))) {
      return;
    } else {
      numsRslt.push(parseInt(val));
    }
  });

  console.log(numsRslt);
}

// Task 4...!
const message = "I am a Frontent Developer.";

function replaceChars(str, char) {
  let rsltStr = "";

  for (let i = 0; i < message.length; i++) {
    let currChar = str[i];

    if (currChar.toLowerCase() === char.toLowerCase()) {
      rsltStr += "#";
    } else {
      rsltStr += currChar;
    }
  }

  console.log(rsltStr);
}

// Task 5...!
let someStr = "dellboomi";

function calChars(str) {
  const rsltObj = {};
  const chars = str.split("").map((val) => {
    rsltObj[val] = (rsltObj[val] || 0) + 1;
  });
  console.log(rsltObj);
}

// Task 6...!
const randNumschars = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function countChars(str, char) {
  const rsltObj = {};

  str.forEach((val) => {
    rsltObj[val] = (rsltObj[val] || 0) + 1;
  });

  console.log(rsltObj[char]);

  console.log(`${char} appeared ${rsltObj[char]} times...!`);
}

// Task 7...!
let randNum = "025868";

function evenNumsDashed(str) {
  const strToArr = str.split("");

  let rsltStr = "";

  strToArr.forEach((val, i, arr) => {
    let currVal = val;
    let nextVal = arr[i + 1];

    if (currVal % 2 === 0 && nextVal % 2 === 0) {
      rsltStr += currVal + "-";
    } else {
      if (arr[i + 1]) {
        rsltStr += currVal + nextVal;
      } else {
        rsltStr += currVal;
      }
    }
  });

  console.log(rsltStr);
}

// Task 8...!
const numbers = [7, 3, 2, 4];

function multNumsExpCurrVal(numsArr) {
  const rsltArr = [];

  numsArr.forEach((_, i, arr) => {
    let prevMultNum = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue;
      } else {
        prevMultNum = prevMultNum * arr[j];
      }
    }

    rsltArr.push(prevMultNum);
  });

  console.log(rsltArr);
}

// Task 9...!
const palindromeString = "abba";

function isPalindrome(str) {
  let reversedStr = [];

  str.split("").forEach((val) => reversedStr.unshift(val));

  if (reversedStr.join("") === str) {
    console.log("The String is Palindrome...");
  } else {
    console.log("The String is not Palindrome...!");
  }
}
