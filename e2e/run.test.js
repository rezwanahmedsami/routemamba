const  puppeteer  = require("puppeteer");

jest.setTimeout(30000);

let url = "http://localhost:3000/index.html";

setTimeout(() => {
    describe('Open browser and go to localhost website built using routemamba',  () => {
        var browser;
        var page;
        it('it should open a browser and visit localhost index.html', async () => {
            browser = await puppeteer.launch();
            page = await browser.newPage();
            await page.goto(url, {
                waitUntil: "domcontentloaded",
            })
            .catch((err) => console.log("error loading url", err));
        });
        //  test page index content loaded or not
        test('Check index.html page content loaded or not', async () => { 
            await page.waitForSelector("#root > h1");
            let indexContent = await page.$eval("#root > h1", (tag) => {
                return tag.innerHTML;
            });
    
            expect(indexContent).toBe("home");
        });
    
        // check navigation header is loaded or not
        test('Check header loaded or not', async () => { 
            let nav = await page.$$("#header_load > nav");
            expect(nav.length).toBe(1);
        });
        
        // check after onlick on about, routing ok or not
        test('On click about navigation, it should load about page in root', async() => {
            await page.click("#about_nav");
            await page.waitForSelector("#root > h1");
            let indexContent = await page.$eval("#root > h1", (tag) => {
                return tag.innerHTML;
            });
    
            expect(indexContent).toBe("about");
         });
    
         // check after onlick on tabs navigation, routing ok or not
         test('On click tabs navigation, it should load tabs page in root', async() => {
            await page.click("#tabs_nav");
            await page.waitForSelector("#root > h1");
            let indexContent = await page.$eval("#root > h1", (tag) => {
                return tag.innerHTML;
            });
    
            expect(indexContent).toBe("tabs");
         });
    
        //  check tabs is working fine or not
        test('check first tab swticher loaded or not and check tab content and switching working or not', async () => { 
            let tabSwitcher = await page.$$(".tab-switcher");
            expect(tabSwitcher.length).toBe(3);
    
            // check tabs content loaded or not on first load
            let tab1Content = await page.$eval("#tab1 > h2", (e) =>{
                return e.innerHTML;
            });
            let tab2Content = await page.$eval("#tab2 > h2", (e) =>{
                return e.innerHTML;
            });
            let tab3Content = await page.$eval("#tab3 > h2", (e) =>{
                return e.innerHTML;
            });
    
            expect(tab1Content).toBe("This is tab 1");
            expect(tab2Content).toBe("This is tab 2");
            expect(tab3Content).toBe("This is tab 3");
    
        });
    
        it('it should close browser', async () => {
            await browser.close();  
        });
    });
}, 5000);