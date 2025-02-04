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
