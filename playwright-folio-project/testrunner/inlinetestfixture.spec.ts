import {it, test} from "./fixture";

it("Runs a basic test of the neowin site", async({context}) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net");
});

it("Should be skipped for the Firefox test", (test, {browserName}) => {
    test.skip(browserName === "firefox", "Skip the test as isMobile is not supported");
}, async({page}) => {
    await page.goto("https://www.neowin.net");
});
