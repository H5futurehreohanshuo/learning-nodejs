const fs = require('fs');

fs.readFile('./demos/32_readfile.js', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
});

const data = fs.readFileSync('./demos/01_run.js', 'utf8');

console.log(data);