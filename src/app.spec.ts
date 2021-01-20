import { MergeIntervals } from "./merge-intervals";

describe("My Test Suite", () => {
  it("My Test Case", () => {
    const input = [
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
    const expected = [
      [1, 23],
      [24, 31],
      [34, 39],
      [40, 50],
    ];

    const merge = new MergeIntervals();
    let mergedInterval = merge.merge(input);

    expect(mergedInterval).toEqual(expected);
  });
});
