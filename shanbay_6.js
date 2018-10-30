// node ./words/shanbei_4.js
// 抓取扇贝词汇表
const puppeteer = require('puppeteer');


const urls = [
'https://www.shanbay.com/wordlist/182470/515083/?page=',
'https://www.shanbay.com/wordlist/182470/515086/?page=',
'https://www.shanbay.com/wordlist/182470/515089/?page=',
'https://www.shanbay.com/wordlist/182470/515092/?page=',
'https://www.shanbay.com/wordlist/182470/515095/?page=',
'https://www.shanbay.com/wordlist/182470/515098/?page=',
'https://www.shanbay.com/wordlist/182470/515101/?page=',
'https://www.shanbay.com/wordlist/182470/515104/?page=',
'https://www.shanbay.com/wordlist/182470/515107/?page='];

(async () => {
  const browser = await puppeteer.launch({headless: false, args: [ '--proxy-server=42.99.164.34:10015' ] });
  const page = await browser.newPage();
  for (var index in urls)
  {
    var url = urls[index]; 
  for (var i=1;i<=10;i++) //pages
  {
//    console.log("page numberi=%d\n", i); 
     await page.goto(url+i, {waitUntil: 'networkidle2'});
     const jsHandle = await page.evaluateHandle(() => {
       const elements = document.getElementsByTagName('strong');
       return elements;
     });

     const results = await page.evaluate(e => Array.from(e).map(a => a.innerHTML), jsHandle); // convert to text array 
     // console.log(results.length);  
     for (var j = 0; j < results.length; j++) {
       console.log(results[j]);
     }
  }
  }
  await browser.close();
})();

