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

// Task 10...!
function checkPrimeNum(num) {
  let isPrime = true;
  if (num <= 1) {
    isPrime = false;
  } else {
    for (let i = 0; i < num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(`The ${num} is Prime Number.`);
  } else {
    console.log(`The ${num} is not Prime Number.`);
  }
}

// Task 11...!
function printRangeOfNums(rangeNum) {
  if (rangeNum >= 0) {
    for (let i = 0; i <= rangeNum; i++) {
      console.log(i);
    }
  } else {
    for (let i = rangeNum; i < 1; i++) {
      console.log(i);
    }
  }
}

// Task 12...!
const evensAndOdds = [2435, 982, 5642, 1232, 87, 1234567890];

function addEvensAndOdds(numsArray) {
  const resultArr = [];

  numsArray.forEach((val) => {
    const currNumArr = val.toString().split("");

    const evens = [];
    const odds = [];

    currNumArr.forEach((num) => {
      if (parseInt(num) % 2 === 0) {
        evens.push(parseInt(num));
      } else {
        odds.push(parseInt(num));
      }
    });

    let evenNum = evens.reduce((acc, num) => acc + num);
    let oddNum = odds.reduce((acc, num) => acc + num);

    resultArr.push(parseInt(evenNum.toString() + oddNum.toString()));
  });

  console.log(resultArr);
}

// Task 13...!
const randomNums = [8, 59, 738, 9645, 87657, 123456789, 65743652532];

function swappingNums(numsArr) {
  const resultArr = [];

  numsArr.forEach((val) => {
    if (val.toString().length === 1) {
      resultArr.push(parseInt(val + "0"));
    } else if (val.toString().length === 2) {
      let numInStr = val.toString();

      resultArr.push(parseInt(numInStr[1] + numInStr[0]));
    } else if (val.toString().length > 3 && val.toString().length < 5) {
      let nums = val.toString().split("");

      let reversedStr = nums[2] + nums[1] + nums[0] + nums[3];

      resultArr.push(parseInt(reversedStr));
    } else {
      const numsInArr = val.toString().split("");

      if (numsInArr.length % 2 === 0) {
        let reverseNum = "";

        for (let i = numsInArr.length - 1; i >= 0; i--) {
          reverseNum += numsInArr[i];
        }

        resultArr.push(parseInt(reverseNum));
      } else {
        let reverseNum = "";

        for (let i = numsInArr.length - 2; i >= 0; i--) {
          reverseNum += numsInArr[i];
        }

        resultArr.push(parseInt(reverseNum + numsInArr[numsInArr.length - 1]));
      }
    }
  });

  console.log(resultArr);
}

// Task 14...!
function countNums() {
  const numsArr = [];

  for (let j = 0; j <= 1000; j++) {
    numsArr.push(j);
  }

  // Let's count each NO appearrence...
  const resultArr = [];

  for (let i = 0; i < 10; i++) {
    let currValCount = 0;

    numsArr.forEach((num) => {
      const numInStr = num.toString().split("");

      numInStr.forEach((val) => {
        if (val == i) {
          currValCount += 1;
        }
      });
    });

    resultArr.push({ [i]: `${i} appeared ${currValCount} times...!` });
  }

  console.log(resultArr);
}

// Task 15...!
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function createSubArrays(subArrLength, arr) {
  let arrLength = arr.length;
  const givenArr = arr;

  const resultArr = [];

  for (let s = 0; s <= arrLength / subArrLength; s++) {
    resultArr.push(givenArr.slice(0, subArrLength));
    for (let j = 0; j < subArrLength; j++) {
      givenArr.shift();
    }
  }

  console.log(resultArr);
}

// Task 16...!
let vowelsString =
  "Apple fruit is very good for health. An apple a day keeps doctor away...!";

function countVowels(vowelStr) {
  let vowelCount = 0;
  let strLength = vowelStr.length;

  for (let k = 0; k < strLength; k++) {
    if (
      vowelStr[k].toLowerCase() === "a" ||
      vowelStr[k].toLowerCase() === "e" ||
      vowelStr[k].toLowerCase() === "i" ||
      vowelStr[k].toLowerCase() === "o" ||
      vowelStr[k].toLowerCase() === "u"
    ) {
      vowelCount++;
    }
  }

  console.log(`The totals vowels in the given string are ${vowelCount}`);
}

// Task 17...!
let isPalindromeStr = "madam";

function checkStrIsPalindrome(str) {
  let strLength = str.length;
  let isPalindrome = false;

  for (let p = 0; p < Math.floor(strLength / 2); p++) {
    if (str[p] === str[strLength - 1 - p]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }

  isPalindrome
    ? console.log("The string is Palindrome.")
    : console.log("The string is not Palindrome");
}

// Task 18...!
const largeSmallNums = [
  23, 636, 1, 23, 56, 6, -4, -34, 84, 65, 867345, 54, 39, -67, 3, 34, 12, 21,
];

function findLowAndLargNum(numsArr) {
  let maxNum = 0;
  let minNum = 0;

  numsArr.forEach((num) => {
    if (num > maxNum) {
      maxNum = num;
    }
  });

  numsArr.forEach((num) => {
    if (num < minNum) {
      minNum = num;
    }
  });

  console.log({
    minNum: minNum,
    maxNum: maxNum,
  });
}

// Task 19...!
const posiAndNegaNums = [12, -7, 5, 8, -10, 20];

function removeNegaNumsAndTrans(nums) {
  const positiveNums = [];

  // Removing -ve's
  nums.forEach((num) => {
    if (num >= 0) {
      positiveNums.push(num);
    }
  });

  // Doubling Numbers
  const numsDoubled = positiveNums.map((number) => number * 2);

  // Check if all are even!
  const result = numsDoubled.every((val) => {
    if (val % 2 === 0) {
      return val;
    }
  });

  if (result) {
    console.log(numsDoubled.reduce((acc, currNum) => acc + currNum));
  } else {
    console.log(null);
  }
}
