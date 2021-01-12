const intervals = [
  [25, 30],
  [2, 19],
  [14, 23],
  [4, 8],
  [34, 39],
  [26, 29],
  [24, 31],
  [40, 50],
  [1, 2],
  [2, 3],
  [3, 4],
];

const sortedIntervals = intervals.sort((a: number[], b) => a[0] - b[0]);
let result = [];

const remainingInterval = sortedIntervals.reduce(
  (prev: number[], current: number[]) => {
    const prevFirst = prev[0];
    const prevSecond = prev[1];

    const currentFirst = current[0];
    const currentSecond = current[1];

    if (isOverlapping(prevFirst, currentFirst, prevSecond, currentSecond)) {
      // gather overlapping intervals through all iterations by
      // combining them and return each result to be accumulated
      return combineIntervals(
        currentFirst,
        prevFirst,
        prev,
        currentSecond,
        prevSecond
      );
    } else {
      // add the combined and accumulated interval
      // from previous iterations to the result list
      result.push(prev);

      // return the current interval to start over
      return current;
    }
  }
);

function isFirstInside(
  prevFirst: number,
  currentFirst: number,
  prevSecond: number
) {
  return prevFirst <= currentFirst && currentFirst <= prevSecond;
}

function isSecondInside(
  prevFirst: number,
  currentSecond: number,
  prevSecond: number
) {
  return prevFirst <= currentSecond && currentSecond <= prevSecond;
}

function isOverlapping(
  prevFirst: number,
  currentFirst: number,
  prevSecond: number,
  currentSecond: number
) {
  return (
    isFirstInside(prevFirst, currentFirst, prevSecond) ||
    isSecondInside(prevFirst, currentSecond, prevSecond)
  );
}

function combineIntervals(
  currentFirst: number,
  prevFirst: number,
  prev: number[],
  currentSecond: number,
  prevSecond: number
) {
  if (currentFirst < prevFirst) prev[0] = currentFirst;
  if (currentSecond > prevSecond) prev[1] = currentSecond;

  return prev;
}

// there's one remaining interval or
// all intervals have been merged to one,
// add them to the result
if (remainingInterval) result.push(remainingInterval);

console.log(result);
