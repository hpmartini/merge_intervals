export class MergeIntervals {
  public merge(intervals: any[]): Array<Array<number>> {
    // sort all intervals so they can be iterated sequentially
    const sortedIntervals = this.getSortedIntervals(intervals);
    let result: Array<Array<number>> = [];

    // combine overlapping intervals
    const remainingInterval = this.reduceIntervals(sortedIntervals, result);

    // if there's one remaining interval or
    // all intervals have been merged to one,
    // add them to the result
    if (remainingInterval) result.push(remainingInterval);

    console.log("Merged intervals:", result);

    return result;
  }

  private reduceIntervals(
    sortedIntervals: Array<Array<number>>,
    result: Array<Array<number>>
  ): number[] {
    return sortedIntervals.reduce((prev: number[], current: number[]) => {
      const prevFirst = prev[0];
      const prevSecond = prev[1];

      const currentFirst = current[0];
      const currentSecond = current[1];

      if (
        this.isOverlapping(prevFirst, currentFirst, prevSecond, currentSecond)
      ) {
        // gather overlapping intervals through all iterations by
        // combining them and return each result to be accumulated
        return this.combineIntervals(
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
    });
  }

  private getSortedIntervals(
    intervals: Array<Array<number>>
  ): Array<Array<number>> {
    return intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
  }

  /***
   * Check if current and previous intervals are overlapping
   *
   * Hence all intervals are sorted already, we now can just check
   * if one of the current values is inside the previous interval
   *
   * @param prevFirst First value of previous interval
   * @param currentFirst First value of current interval
   * @param prevSecond Second value of previous interval
   * @param currentSecond Second value of current interval
   * @private
   */
  private isOverlapping(
    prevFirst: number,
    currentFirst: number,
    prevSecond: number,
    currentSecond: number
  ) {
    return (
      this.isInside(prevFirst, currentFirst, prevSecond) ||
      this.isInside(prevFirst, currentSecond, prevSecond)
    );
  }

  /***
   * Check if a value of the current interval is inside the previous interval
   *
   * @param prevFirst First value of previous interval
   * @param currentFirst First value of the current interval
   * @param prevSecond Second value of the previous interval
   * @private
   */
  private isInside(
    prevFirst: number,
    currentFirst: number,
    prevSecond: number
  ) {
    return prevFirst <= currentFirst && currentFirst <= prevSecond;
  }

  /***
   * Combines the current and previous intervals
   *
   * If the current values are smaller or bigger then the previous values,
   * set either or both of them to the previous interval
   *
   * @param currentFirst First value of the current interval
   * @param prevFirst First value of the previous interval
   * @param prev Previous interval
   * @param currentSecond Second value of the current interval
   * @param prevSecond Second value of the previous interval
   * @private
   */
  private combineIntervals(
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
}
