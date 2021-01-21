import { MergeIntervals } from "./merge-intervals";

const args = process.argv.slice(2);

try {
  const intervalsAsJson = JSON.parse(args[0]);

  console.log("Arguments are:", intervalsAsJson);

  new MergeIntervals().merge(intervalsAsJson);
} catch (error) {
  console.log("Error parsing arguments:", args);
  console.log(error);
}
