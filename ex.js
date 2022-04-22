// arr =[1,2,3,1,2,1,1]
let arr1 = [1, 2, 3, 1, 2, 1, 1];
let arr2 = [1, 2, 3, 1, 2, 1, 1, 2, 2];

function findElementsHaveMostAppearences(array) {
  if (array.length == 0) return null;
  var arrElementCount = {};
  var maxCount = 1;
  var elements = [];

  for (var i = 0; i < array.length; i++) {
    var curElement = array[i];

    if (arrElementCount[curElement] == null) arrElementCount[curElement] = 1;
    else arrElementCount[curElement]++;

    if (arrElementCount[curElement] > maxCount) {
      elements = [curElement];
      maxCount = arrElementCount[curElement];
    } else if (arrElementCount[curElement] == maxCount) {
      elements.push(curElement);
      maxCount = arrElementCount[curElement];
    }
  }
  return elements;
}
console.log("test case 1:");
console.log(
  "input:",
  arr1,
  "     \noutput:",
  findElementsHaveMostAppearences(arr1)
);
console.log("\ntest case 2:");
console.log(
  "input:",
  arr2,
  "     \noutput:",
  findElementsHaveMostAppearences(arr2)
);
