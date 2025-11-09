const argsCounter = process.argv.length - 2;

if (argsCounter === 0) {
  console.log("No argument");
} else if (argsCounter === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
