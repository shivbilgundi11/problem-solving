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
