// 抓取扇贝词汇表
// node shanbay.js https://www.shanbay.com/wordlist/162553/416959/?page=1
const puppeteer = require('puppeteer');

var url = process.argv.splice(2)[0]; //获取控制台参数
// console.log(url);

(async () => {
  const browser = await puppeteer.launch({headless: false, args: [ '--proxy-server=IP:PORT' ] });
  const page = await browser.newPage();

  for (var i=1;i<=100;i++) //pages    
  {
     await page.goto(url+i, {waitUntil: 'networkidle2'});
     const jsHandle = await page.evaluateHandle(() => {
       const elements = document.getElementsByTagName('strong');
       return elements;
     });

     const results = await page.evaluate(e => Array.from(e).map(a => a.innerHTML), jsHandle); // convert to text array 
     // console.log(results.length);  
     if ( results.length <=0 )
     {
       break;
     }
     for (var j = 0; j < results.length; j++) {
       console.log(results[j]);
     }
  }
  await browser.close();
})();

