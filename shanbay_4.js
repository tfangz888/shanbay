// node ./words/shanbei_4.js
// 抓取扇贝词汇表
const puppeteer = require('puppeteer');

const urls = [
'https://www.shanbay.com/wordlist/182797/516658/?page=',
'https://www.shanbay.com/wordlist/182797/516661/?page=',
'https://www.shanbay.com/wordlist/182797/516664/?page=',
'https://www.shanbay.com/wordlist/182797/516667/?page=',
'https://www.shanbay.com/wordlist/182797/516670/?page=',
'https://www.shanbay.com/wordlist/182797/516673/?page=',
'https://www.shanbay.com/wordlist/182797/516676/?page=',
'https://www.shanbay.com/wordlist/182797/516679/?page=',
'https://www.shanbay.com/wordlist/182797/516682/?page=',
'https://www.shanbay.com/wordlist/182797/516685/?page=',
'https://www.shanbay.com/wordlist/182797/516688/?page=',
'https://www.shanbay.com/wordlist/182797/516691/?page=',
'https://www.shanbay.com/wordlist/182797/516694/?page=',
'https://www.shanbay.com/wordlist/182797/516697/?page=',
'https://www.shanbay.com/wordlist/182797/516700/?page=',
'https://www.shanbay.com/wordlist/182797/516703/?page=',
'https://www.shanbay.com/wordlist/182797/516706/?page=',
'https://www.shanbay.com/wordlist/182797/516709/?page=',
'https://www.shanbay.com/wordlist/182797/516712/?page=',
'https://www.shanbay.com/wordlist/182797/516715/?page=',
'https://www.shanbay.com/wordlist/182797/516718/?page=',
'https://www.shanbay.com/wordlist/182797/516721/?page=',
'https://www.shanbay.com/wordlist/182797/516724/?page=',
'https://www.shanbay.com/wordlist/182797/516727/?page=',
'https://www.shanbay.com/wordlist/182797/516730/?page=',
'https://www.shanbay.com/wordlist/182797/516733/?page=',
'https://www.shanbay.com/wordlist/182797/516736/?page=',
'https://www.shanbay.com/wordlist/182797/516739/?page=',
'https://www.shanbay.com/wordlist/182797/516742/?page=',
'https://www.shanbay.com/wordlist/182797/516745/?page=',
'https://www.shanbay.com/wordlist/182797/516748/?page='];


(async () => {
  const browser = await puppeteer.launch({headless: false, args: [ '--proxy-server=IP:PORT' ] });
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

