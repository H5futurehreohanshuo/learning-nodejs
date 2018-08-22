const puppeteer = require('puppeteer');
const { screenshot } = require('./config/default');

(async() => {
  const broswer = await puppeteer.launch();
  const page = await broswer.newPage();
  await page.goto('https://www.baidu.com');
  await page.screenshot({
    path: `${screenshot}/${Date.now()}.png`
  });
  await broswer.close();
})();