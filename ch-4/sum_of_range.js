function range(start, finish, step = 1) {
  rangeList = [];
  let count = start;

  if (count < finish) {
    while (count <= finish) {
      rangeList.push(count);
      count += step;
    }
  } else {
    while (count >= finish) {
      rangeList.push(count);
      count += step;
    }
  }

  return rangeList;
}

function sumOfArray(arr) {
  let sum = 0;
  for (let each of arr) {
    sum += each;
  }
  return sum;
}

console.log(sumOfArray(range(1, 10)));
