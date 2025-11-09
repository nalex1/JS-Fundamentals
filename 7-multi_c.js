const x = Number(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let a = 0;
  while (a < x) {
    console.log("C is fun");
    a++;
  }
}
