import {it} from "./fixture";

it("Runs a basic test of the neowin site", async({context}) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net");
});
