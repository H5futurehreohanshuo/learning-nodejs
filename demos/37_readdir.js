const fs = require('fs');

fs.readdir('./demos', (err, files) => {
  if (err) throw err;

  console.log(files);
});