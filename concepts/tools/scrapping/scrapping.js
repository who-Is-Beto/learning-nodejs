const puppeteer = require("puppeteer")

async function scrapp() {
  console.log('launching navegator')
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()
  await page.goto('https://es.wikipedia.org/wiki/Node.js')

  const title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1')
    console.log(h1.innerHTML)

    return h1.innerHTML
  })

  console.log(title1)

  console.log('closing navegator')
  browser.close()
  console.log('navegator closed')
}

scrapp()