function reverseArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  for (
    let i = 0, j = arr.length - 1;
    i < Math.floor(arr.length / 2);
    i++, j--
  ) {
    let placeHolder = arr[i];
    arr[i] = arr[j];
    arr[j] = placeHolder;
  }
  return arr;
}
