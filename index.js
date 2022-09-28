const playwright = require('playwright');

const RESOURCE_EXCLUSTIONS = ['image', 'stylesheet', 'media', 'font','other'];

(async () => {
    const browser = await playwright['webkit'].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    //await page.route('**/*', (route) => {
    //    return RESOURCE_EXCLUSTIONS.includes(route.request().resourceType())
    //        ? route.abort()
    //        : route.continue()
    //});
    await page.goto('https://www.homedepot.com/p/Makita-6-5-Amp-3-1-4-in-Corded-Planer-Kit-with-Blade-Set-Hard-Case-KP0800K/202265685',{
        waitUntil: 'load',
        timeout: 120000
    });

    await browser.close();
})();