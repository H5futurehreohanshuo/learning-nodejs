const fs = require('fs');

fs.rename('./test.txt', './demos/test.txt', err => {
  if (err) throw err;

  console.log('done');
});