const fs = require('fs');

const ws = fs.createWriteStream('./demos/test.txt');

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  if (num < 30) {
    ws.write(num + '');
  } else {
    clearInterval(tid);
    ws.end();
  }
}, 200);

ws.on('finish', () => {
  console.log('done!');
});