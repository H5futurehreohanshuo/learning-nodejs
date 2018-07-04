const fs = require('fs');

fs.stat('./demos/34_stat.js', (err, stats) => {
  if (err) throw err;

  console.log(stats.isFile());
  console.log(stats.isDirectory());

  console.log(stats);
  
});