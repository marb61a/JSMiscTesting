const playwright = require("playwright");

(async() => {
    const browser = await playwright.chromium.launch({
        headless: false,
        devtools: true
    });

    const page = await browser.newPage();
    // await page.route("**\/*.{png,jpg,jpeg,svg}, route => route.abort()");

    await page.route("**\/*.{png,jpg,jpeg,svg}", route => {
        route.fulfill({
            // Will show the status in the dev tools, if changed to 500 then 500 will show
            status: 404,
            contentType: "image",
            body: "Not Found!"
        });
    });

    // Log all Network Requests
    page.route("**/*", async route => {
        console.log(route.request().url());
        route.continue();
    });

    await page.goto("http://todomvc.com");
    await browser.close();
    
})();