import { MergeIntervals } from "./merge-intervals";
import each from "jest-each";

const testData = [
  [[], []],
  [null, null],
  [undefined, undefined],
  [["test"], ["test"]],
  [
    [
      [25, 30],
      [2, 19],
      [14, 23],
      [4, 8],
      [34, 39],
      [26, 29],
      [24, 31],
      [40, 50.42],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    [
      [1, 23],
      [24, 31],
      [34, 39],
      [40, 50.42],
    ],
  ],
  [
    [
      [25, 30],
      [2, 19],
      [14, 23],
      [4, 8],
    ],
    [
      [2, 23],
      [25, 30],
    ],
  ],
];

describe("MergeIntervals", () => {
  each(testData).it("should merge intervals", (input, expected) => {
    const merge = new MergeIntervals();
    let mergedInterval = merge.merge(input);

    expect(mergedInterval).toEqual(expected);
  });
});
