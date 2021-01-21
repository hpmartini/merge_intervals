import { MergeIntervals } from "./merge-intervals";
const start = new Date().getMilliseconds();

const args = process.argv.slice(2);

try {
  const intervalsAsJson = JSON.parse(args[0]);

  console.log("Arguments are:", intervalsAsJson);

  new MergeIntervals().merge(intervalsAsJson);
} catch (error) {
  console.log("Error parsing arguments:", args);
  console.log(error);
} finally {
  const executionTime = new Date().getMilliseconds() - start;
  console.log("Execution time was: %dms", executionTime);
  const memoryUsage = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log("Memory usage: %d MB", memoryUsage.toFixed(2));
}
