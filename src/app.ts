import { MergeIntervals } from "./merge-intervals";

const parameters = process.argv.slice(2);
const intervalsAsJson = JSON.parse(parameters[0]);

console.log("Arguments are:", intervalsAsJson);

const merge = new MergeIntervals();
merge.merge(intervalsAsJson);
