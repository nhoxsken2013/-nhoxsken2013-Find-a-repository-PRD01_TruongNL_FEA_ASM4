let arr1 = [1, 2, 3, 1, 2, 1, 1];
let arr2 = [1, 2, 3, 1, 2, 7, 7, 1, 1, 4, 5];

function convertToObject(array) {
  if (array.length == 0) return null;
  var arrElementCount = {};
  for (var i = 0; i < array.length; i++) {
    var curElement = array[i];
    // dem so lan xuat hien ung voi moi so
    if (arrElementCount[curElement] == null) arrElementCount[curElement] = 1;
    else arrElementCount[curElement]++;
  }
  return arrElementCount;
}
// console.log(convertToObject(arr))

function getMinCount(newArr) {
  var min = newArr.length;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j][1] < min) {
      min = newArr[j][1];
    }
  }
  return min;
}
function getMaxCount(newArr) {
  var max = 0;
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j][1] > max) {
      max = newArr[j][1];
    }
  }
  return max;
}

function getListOfRemove(array) {
  let elements = [];
  const newArr = Object.entries(convertToObject(array));
  let minCount = getMinCount(newArr);
  let maxCount = getMaxCount(newArr);
  for (let m = 0; m < newArr.length; m++) {
    if (newArr[m][1] == minCount || newArr[m][1] == maxCount) {
      elements.push(newArr[m][0]);
    }
  }
  return elements;
  //   for(var j=0;j<arrElementCount.length; j++){
  //       console.log(arrElementCount)
  //   }
}
function preventDuplication(arr) {
  return arr.reduce((accumulator, number) => {
    if (accumulator.indexOf(number) === -1) {
      accumulator.push(number);
    }
    return accumulator;
  }, []);
}
function getResult(arr) {
  let removedArray = getListOfRemove(arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < removedArray.length; j++) {
      if (arr[i] === Number(removedArray[j])) {
        flag = true;
      }
    }
    if (flag == false) newArr.push(arr[i]);
  }
  newArr = preventDuplication(newArr);
  return newArr;
}

console.log("test case 1:");
console.log(`input: ${arr1}         output:${getResult(arr1)}`);
console.log("\ntest case 2:");
console.log(`input: ${arr2}         output:${getResult(arr2)}`);
