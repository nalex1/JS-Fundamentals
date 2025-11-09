function add(m, n) {
  return n + m;
}

const n = Number(process.argv[2]);
const m = Number(process.argv[3]);

for (let i = 0; i < 1; i++) {
  console.log(add(m, n));
}
